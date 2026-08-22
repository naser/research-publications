import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const workspace = process.cwd();
const repoRoot = path.resolve(process.env.RESEARCH_CATALOG_ROOT ?? path.join(workspace, "github-repo"));
const failures = [];
const warnings = [];
const expectedSchemaVersion = "0.6.0";
const siteBase = "https://naser.github.io/research-publications";
const badEncoding = /(?:[\u00c2\u00c3].|\u00e2[\u0080-\u00bf]|\ufffd)/u;

const exists = async (file) => {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
};

const readText = async (file) => readFile(file, "utf8");
const readJson = async (file) => JSON.parse(await readText(file));

const validUrl = (value) => {
  if (typeof value !== "string" || !value.trim() || /\s/u.test(value)) return false;
  try {
    return /^https?:$/u.test(new URL(value).protocol);
  } catch {
    return false;
  }
};

const validDate = (value) => {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/u.test(value)) return false;
  const date = new Date(value + "T00:00:00Z");
  return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value);
};

const typeMatches = (value, type) => {
  if (type === "null") return value === null;
  if (type === "object") return value !== null && typeof value === "object" && !Array.isArray(value);
  if (type === "array") return Array.isArray(value);
  if (type === "integer") return Number.isInteger(value);
  if (type === "number") return typeof value === "number" && Number.isFinite(value);
  return typeof value === type;
};

function validateAgainstSchema(value, rule, location, errors) {
  if (rule.const !== undefined && value !== rule.const) errors.push(location + " must equal " + JSON.stringify(rule.const));
  if (rule.enum && !rule.enum.includes(value)) errors.push(location + " is not one of the allowed values");

  if (rule.type) {
    const types = Array.isArray(rule.type) ? rule.type : [rule.type];
    if (!types.some((type) => typeMatches(value, type))) {
      errors.push(location + " has invalid type");
      return;
    }
  }

  if (typeof value === "string") {
    if (rule.minLength !== undefined && value.length < rule.minLength) errors.push(location + " is empty or too short");
    if (rule.pattern && !(new RegExp(rule.pattern, "u")).test(value)) errors.push(location + " does not match its pattern");
    if (rule.format === "uri" && !validUrl(value)) errors.push(location + " is not a valid HTTP(S) URL");
    if (rule.format === "date" && !validDate(value)) errors.push(location + " is not an ISO date");
  }

  if (Array.isArray(value)) {
    if (rule.minItems !== undefined && value.length < rule.minItems) errors.push(location + " has too few items");
    if (rule.uniqueItems) {
      const serialized = value.map((item) => JSON.stringify(item));
      if (new Set(serialized).size !== serialized.length) errors.push(location + " contains duplicate items");
    }
    if (rule.items) value.forEach((item, index) => validateAgainstSchema(item, rule.items, location + "[" + index + "]", errors));
  }

  if (value !== null && typeof value === "object" && !Array.isArray(value)) {
    if (rule.required) {
      for (const key of rule.required) {
        if (!Object.prototype.hasOwnProperty.call(value, key)) errors.push(location + " is missing " + key);
      }
    }
    if (rule.additionalProperties === false && rule.properties) {
      for (const key of Object.keys(value)) {
        if (!Object.prototype.hasOwnProperty.call(rule.properties, key)) errors.push(location + " has unexpected field " + key);
      }
    }
    for (const [key, childRule] of Object.entries(rule.properties ?? {})) {
      if (Object.prototype.hasOwnProperty.call(value, key)) validateAgainstSchema(value[key], childRule, location + "." + key, errors);
    }
  }
}

const normalizeKeyword = (value) => String(value).normalize("NFKD").replace(/[\u0300-\u036f]/gu, "").toLowerCase().trim().replace(/\s+/gu, " ");
const keywordSlug = (value) => normalizeKeyword(value).replace(/[^a-z0-9]+/gu, "-").replace(/^-|-$/gu, "");
const normalizeDoi = (value) => String(value).toLowerCase().replace(/^https?:\/\/(dx\.)?doi\.org\//u, "").replace(/^doi:\s*/u, "").trim();

async function walk(dir, relative = "") {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const childRelative = relative ? path.join(relative, entry.name) : entry.name;
    const child = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".git") continue;
      result.push(...await walk(child, childRelative));
    } else {
      result.push({ path: child, relative: childRelative.replaceAll("\\", "/") });
    }
  }
  return result;
}

const requiredRoot = [
  "README.md",
  "catalog.json",
  "CITATION.cff",
  "schemas/paper.schema.json",
  "schemas/vocabularies.json",
  "schemas/crossref-bibliography.json",
  "scripts/validate-github-repo.mjs",
  "docs/index.html",
  "docs/catalog.json",
  "docs/robots.txt",
  "docs/sitemap.xml",
  "docs/llms.txt",
  "docs/.nojekyll",
  "docs/schemas/paper.schema.json",
  "docs/schemas/vocabularies.json",
  "docs/schemas/crossref-bibliography.json",
  "docs/topics/index.html",
  "docs/keywords/index.html"
];

for (const relative of requiredRoot) {
  if (!await exists(path.join(repoRoot, relative))) failures.push("missing required artifact: " + relative);
}
const allowedRootEntries = new Set([".git", "README.md", "catalog.json", "CITATION.cff", "docs", "keywords", "papers", "schemas", "scripts", "topics"]);
for (const entry of await readdir(repoRoot, { withFileTypes: true })) {
  if (!allowedRootEntries.has(entry.name)) failures.push("unexpected repository-root entry: " + entry.name);
}

let catalog;
let schema;
let vocabulary;
for (const [label, relative] of [
  ["catalog.json", "catalog.json"],
  ["schemas/paper.schema.json", "schemas/paper.schema.json"],
  ["schemas/vocabularies.json", "schemas/vocabularies.json"]
]) {
  try {
    const value = await readJson(path.join(repoRoot, relative));
    if (label === "catalog.json") catalog = value;
    if (label === "schemas/paper.schema.json") schema = value;
    if (label === "schemas/vocabularies.json") vocabulary = value;
  } catch (error) {
    failures.push(label + " is invalid: " + error.message);
  }
}

if (schema) {
  if (schema.$schema !== "https://json-schema.org/draft/2020-12/schema") failures.push("paper schema has an unexpected $schema");
  if (schema.properties?.schema_version?.const !== expectedSchemaVersion) failures.push("paper schema does not freeze schema version " + expectedSchemaVersion);
}
if (catalog?.schema_version !== expectedSchemaVersion) failures.push("catalog schema_version is not " + expectedSchemaVersion);
if (!Array.isArray(catalog?.records) || !catalog.records.length) failures.push("catalog has no records");
if (catalog?.creator?.orcid !== "0000-0003-1435-6297") failures.push("catalog creator ORCID is missing or incorrect");
if (catalog?.record_count !== catalog?.records?.length) failures.push("catalog record_count does not match records");
if ((catalog?.full_text_reviewed_count ?? 0) + (catalog?.full_text_pending_count ?? 0) !== catalog?.records?.length) failures.push("catalog full-text counts do not sum to records");

for (const relative of ["schemas/paper.schema.json", "schemas/vocabularies.json", "schemas/crossref-bibliography.json", "catalog.json"]) {
  const source = path.join(repoRoot, relative);
  const mirror = path.join(repoRoot, "docs", relative);
  if (await exists(source) && await exists(mirror) && (await readText(source)) !== (await readText(mirror))) {
    failures.push("docs mirror differs from " + relative);
  }
}

const topicIds = new Set(vocabulary?.topics?.map((topic) => topic.id) ?? []);
const keywordAliases = vocabulary?.keyword_policy?.aliases ?? {};
const paperEntries = (await readdir(path.join(repoRoot, "papers"), { withFileTypes: true }).catch(() => []));
const paperIds = [];
for (const entry of paperEntries) {
  if (!entry.isDirectory()) continue;
  try {
    await stat(path.join(repoRoot, "papers", entry.name, "paper.json"));
    paperIds.push(entry.name);
  } catch {
    // Ignore empty stale directories left by local regeneration; Git does not track them.
  }
}
paperIds.sort();
const catalogById = new Map((catalog?.records ?? []).map((record) => [record.paper_id, record]));
const seenDois = new Map();
const seenSourceRecords = new Map();
const seenKeywords = new Map();
const keywordFrequency = new Map();
for (const record of catalog?.records ?? []) {
  for (const keyword of record.keywords ?? []) {
    const key = keywordSlug(keyword);
    keywordFrequency.set(key, (keywordFrequency.get(key) ?? 0) + 1);
  }
}

if (catalog && catalog.records.length !== paperIds.length) failures.push("catalog record count does not match paper directory count");
if (new Set(catalog?.records?.map((record) => record.paper_id) ?? []).size !== (catalog?.records?.length ?? 0)) failures.push("catalog contains duplicate paper_id values");

for (const paperId of paperIds) {
  const dir = path.join(repoRoot, "papers", paperId);
  const docsDir = path.join(repoRoot, "docs", "papers", paperId);
  for (const relative of ["paper.json", "README.md", "citation.bib", "citation.apa.txt", "citation.ieee.txt", "citation.ris"]) {
    if (!await exists(path.join(dir, relative))) failures.push(paperId + ": missing " + relative);
  }
  for (const relative of ["paper.json", "citation.bib", "citation.apa.txt", "citation.ieee.txt", "citation.ris"]) {
    if (!await exists(path.join(docsDir, relative))) failures.push(paperId + ": missing generated docs/" + relative);
  }
  if (await exists(path.join(docsDir, "README.md"))) failures.push(paperId + ": duplicate public docs/README.md should not be generated");

  let paper;
  try {
    paper = await readJson(path.join(dir, "paper.json"));
  } catch (error) {
    failures.push(paperId + ": invalid paper.json: " + error.message);
    continue;
  }

  const schemaErrors = [];
  if (schema) validateAgainstSchema(paper, schema, paperId, schemaErrors);
  failures.push(...schemaErrors);
  if (paper.paper_id !== paperId) failures.push(paperId + ": paper_id does not match directory");
  if (paper.page_url !== siteBase + "/papers/" + paperId + "/") failures.push(paperId + ": page_url is not the stable landing-page URL");
  if (paper.source_record_id && seenSourceRecords.has(paper.source_record_id)) {
    failures.push(paperId + ": source_record_id duplicates " + seenSourceRecords.get(paper.source_record_id));
  } else if (paper.source_record_id) {
    seenSourceRecords.set(paper.source_record_id, paperId);
  }

  const doi = paper.identifiers?.doi;
  if (doi) {
    const normalized = normalizeDoi(doi);
    if (seenDois.has(normalized)) failures.push(paperId + ": duplicate DOI with " + seenDois.get(normalized) + ": " + doi);
    else seenDois.set(normalized, paperId);
  }

  const canonicalVersions = (paper.versions ?? []).filter((version) => version.canonical_for_citation);
  if (canonicalVersions.length !== 1) failures.push(paperId + ": expected exactly one canonical citation version");
  if (paper.citation_guidance?.canonical_version_id && !paper.versions?.some((version) => version.id === paper.citation_guidance.canonical_version_id && version.canonical_for_citation)) {
    failures.push(paperId + ": canonical_version_id does not identify the canonical version");
  }
  if (paper.canonical_source_url && !paper.versions?.some((version) => version.url === paper.canonical_source_url && version.canonical_for_citation)) {
    failures.push(paperId + ": canonical_source_url is not the canonical version URL");
  }

  const normalizedKeywords = new Map();
  for (const keyword of paper.keywords ?? []) {
    const key = keywordSlug(keyword);
    const aliasTarget = keywordAliases[key] ?? key;
    if (normalizedKeywords.has(aliasTarget)) failures.push(paperId + ": duplicate/inconsistent keyword: " + keyword);
    normalizedKeywords.set(aliasTarget, keyword);
    if (seenKeywords.has(aliasTarget) && seenKeywords.get(aliasTarget) !== keyword) {
      warnings.push("keyword spelling differs across records: " + seenKeywords.get(aliasTarget) + " / " + keyword);
    } else {
      seenKeywords.set(aliasTarget, keyword);
    }
    const keywordFile = path.join(repoRoot, "keywords", key + ".md");
    const keywordHtml = path.join(repoRoot, "docs", "keywords", key + ".html");
    if ((keywordFrequency.get(key) ?? 0) >= 2 && (!await exists(keywordFile) || !await exists(keywordHtml))) failures.push(paperId + ": recurring keyword index missing for " + keyword);
  }

  for (const tag of paper.tags ?? []) {
    if (!topicIds.has(tag)) failures.push(paperId + ": tag is absent from controlled vocabulary: " + tag);
    if (!await exists(path.join(repoRoot, "topics", tag + ".md")) || !await exists(path.join(repoRoot, "docs", "topics", tag + ".html"))) {
      failures.push(paperId + ": topic index missing for " + tag);
    }
  }

  const inspectUrls = (value, key, location) => {
    if (Array.isArray(value)) {
      value.forEach((item, index) => inspectUrls(item, key, location + "[" + index + "]"));
      return;
    }
    if (value !== null && typeof value === "object") {
      for (const [childKey, childValue] of Object.entries(value)) inspectUrls(childValue, childKey, location + "." + childKey);
      return;
    }
    if (key === "url" || key === "page_url" || key === "canonical_source_url" || key.endsWith("_url")) {
      if (value !== null && !validUrl(value)) failures.push(location + " is not a valid HTTP(S) URL");
    }
  };
  inspectUrls(paper, "", paperId);

  const htmlPath = path.join(docsDir, "index.html");
  if (await exists(htmlPath)) {
    const html = await readText(htmlPath);
    for (const required of [
      "<link rel=\"canonical\"",
      "<link rel=\"cite-as\"",
      "type=\"application/json\"",
      "type=\"application/x-bibtex\"",
      "type=\"application/x-research-info-systems\"",
      "application/ld+json",
      "citation_title",
      "citation_author",
      "og:title",
      "When to cite this paper",
      "APA 7",
      "IEEE",
      "href=\"paper.json\"",
      "github.com/naser/research-publications/blob/main/papers/",
      "href=\"citation.bib\"",
      "href=\"citation.ris\""
    ]) {
      if (!html.includes(required)) failures.push(paperId + ": HTML missing " + required);
    }
    if (paper.identifiers?.doi && !html.includes("citation_doi")) failures.push(paperId + ": HTML missing citation_doi");
    if (!html.includes("citation_publication_date")) failures.push(paperId + ": HTML missing citation_publication_date");
    if (!/preprint/i.test(paper.publication?.type ?? "") && !/citation_(conference|journal|book)_title/.test(html)) failures.push(paperId + ": HTML missing venue-specific citation metadata");
    const publicPdfVersion = (paper.versions ?? []).find((version) => version.pdf_url && /(public|full[_ -]?text|cc[-_]?by)/i.test(String(version.status ?? "")));
    const shouldHaveCitationPdf = Boolean(paper.scholar_eligibility?.eligible && publicPdfVersion?.pdf_url);
    const hasCitationPdf = html.includes("citation_pdf_url");
    if (shouldHaveCitationPdf && !hasCitationPdf) failures.push(paperId + ": eligible page with public PDF is missing citation_pdf_url");
    if (!shouldHaveCitationPdf && hasCitationPdf) failures.push(paperId + ": citation_pdf_url requires a complete author abstract and a public PDF version");
    for (const keyword of paper.keywords ?? []) {
      const key = keywordSlug(keyword);
      const linked = html.includes("href=\"../../keywords/" + key + ".html\"");
      if ((keywordFrequency.get(key) ?? 0) < 2 && linked) failures.push(paperId + ": singleton keyword is linked: " + keyword);
    }
    if (html.includes("&amp;middot;") || html.includes("&amp;mdash;") || html.includes("&amp;larr;")) failures.push(paperId + ": HTML contains escaped entity text");
    if (badEncoding.test(html)) failures.push(paperId + ": HTML contains mojibake");
  }

  const bibText = await readText(path.join(dir, "citation.bib")).catch(() => "");
  const expectedBibType = /journal|article/i.test(paper.publication?.type ?? "") ? "@article{" : /preprint/i.test(paper.publication?.type ?? "") ? "@misc{" : "@inproceedings{";
  if (!bibText.startsWith(expectedBibType)) failures.push(paperId + ": BibTeX type disagrees with publication type");
  if (paper.publication?.volume && !bibText.includes("volume = {" + paper.publication.volume + "}")) failures.push(paperId + ": BibTeX omits known volume");
  if (paper.publication?.issue && !bibText.includes("number = {" + paper.publication.issue + "}")) failures.push(paperId + ": BibTeX omits known issue");
  if (paper.publication?.pages && !bibText.includes("pages = {" + paper.publication.pages + "}")) failures.push(paperId + ": BibTeX omits known pages or article number");

  const rootJsonText = await readText(path.join(dir, "paper.json")).catch(() => null);
  const docsJsonText = await readText(path.join(docsDir, "paper.json")).catch(() => null);
  if (rootJsonText !== null && docsJsonText !== null && rootJsonText !== docsJsonText) failures.push(paperId + ": root and docs paper.json differ");

  const catalogRecord = catalogById.get(paperId);
  if (!catalogRecord) {
    failures.push(paperId + ": missing catalog entry");
  } else {
    for (const field of ["page", "json", "bibtex", "citation_files", "page_url", "canonical_source_url", "description", "evidence_level", "versions", "tags", "keywords"]) {
      if (catalogRecord[field] == null) failures.push(paperId + ": catalog entry missing " + field);
    }
    if (catalogRecord.page_url !== paper.page_url) failures.push(paperId + ": catalog page_url mismatch");
    if (catalogRecord.canonical_source_url !== paper.canonical_source_url) failures.push(paperId + ": catalog canonical_source_url mismatch");
    if (JSON.stringify(catalogRecord.tags) !== JSON.stringify(paper.tags)) failures.push(paperId + ": catalog tags mismatch");
    if (JSON.stringify(catalogRecord.keywords) !== JSON.stringify(paper.keywords)) failures.push(paperId + ": catalog keywords mismatch");
  }
}

const allFiles = await walk(repoRoot);
for (const file of allFiles) {
  if (file.relative.toLowerCase().endsWith(".pdf")) failures.push("public repository contains PDF: " + file.relative);
  const content = await readText(file.path);
  if (badEncoding.test(content)) failures.push("mojibake in " + file.relative);
  if (content.includes(["naser", "publications"].join("-"))) failures.push("old repository name remains in " + file.relative);
}

const sitemap = await readText(path.join(repoRoot, "docs", "sitemap.xml")).catch(() => "");
if (sitemap && !sitemap.includes(siteBase + "/")) failures.push("sitemap does not contain the site root");
if (sitemap.includes(["naser", "publications"].join("-"))) failures.push("sitemap contains the old repository name");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gu)].map((match) => match[1]);
const expectedSitemapUrls = new Set([
  siteBase + "/",
  siteBase + "/topics/index.html",
  siteBase + "/keywords/index.html",
  ...[...topicIds].map((topic) => siteBase + "/topics/" + topic + ".html"),
  ...[...keywordFrequency.entries()].filter(([, count]) => count >= 2).map(([keyword]) => siteBase + "/keywords/" + keyword + ".html"),
  ...paperIds.map((paperId) => siteBase + "/papers/" + paperId + "/")
]);
if (sitemapUrls.length !== expectedSitemapUrls.size) failures.push("sitemap URL count does not match the catalog, topic, and keyword pages");
for (const url of sitemapUrls) if (!expectedSitemapUrls.has(url)) failures.push("unexpected sitemap URL: " + url);
for (const url of expectedSitemapUrls) if (!sitemapUrls.includes(url)) failures.push("missing sitemap URL: " + url);
if ((sitemap.match(/<lastmod>/gu) ?? []).length !== sitemapUrls.length) failures.push("sitemap lastmod count does not match URL count");

const result = {
  schema_version: expectedSchemaVersion,
  papers: paperIds.length,
  catalog_records: catalog?.records?.length ?? 0,
  controlled_topics: topicIds.size,
  unique_dois: seenDois.size,
  unique_keywords: seenKeywords.size,
  indexed_keywords: [...keywordFrequency.values()].filter((count) => count >= 2).length,
  full_text_reviewed: catalog?.full_text_reviewed_count ?? 0,
  full_text_pending: catalog?.full_text_pending_count ?? 0,
  html_landing_pages: paperIds.length,
  pdf_files_in_public_repo: allFiles.filter((file) => file.relative.toLowerCase().endsWith(".pdf")).length,
  warnings,
  failures
};
console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exitCode = 1;
