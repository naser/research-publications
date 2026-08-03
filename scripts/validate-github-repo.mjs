import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const workspace = process.cwd();
const repoRoot = path.join(workspace, "github-repo");
const failures = [];
const warnings = [];
const badEncoding = /[\u00c2\u00c3\u00e2]/u;

const exists = async (file) => {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
};

const readJson = async (file) => JSON.parse(await readFile(file, "utf8"));
const validUrl = (value) => {
  try {
    return /^https?:$/.test(new URL(value).protocol);
  } catch {
    return false;
  }
};

async function walk(dir, relative = "") {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const childRelative = relative ? path.join(relative, entry.name) : entry.name;
    const child = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".git") continue;
      result.push(...await walk(child, childRelative));
    }
    else result.push({ path: child, relative: childRelative.replaceAll("\\", "/") });
  }
  return result;
}

const requiredRoot = [
  "README.md",
  "outline.md",
  "catalog.json",
  "CITATION.cff",
  "schemas/paper.schema.json",
  "schemas/vocabularies.json",
  "scripts/validate-github-repo.mjs",
  "docs/index.html",
  "docs/catalog.json",
  "docs/robots.txt",
  "docs/sitemap.xml",
  "docs/schemas/paper.schema.json",
  "docs/schemas/vocabularies.json",
  "docs/topics/index.html",
  "docs/keywords/index.html"
];
for (const relative of requiredRoot) {
  if (!await exists(path.join(repoRoot, relative))) failures.push("missing required artifact: " + relative);
}

let catalog = null;
let vocabulary = null;
try {
  catalog = await readJson(path.join(repoRoot, "catalog.json"));
} catch (error) {
  failures.push("catalog.json is invalid: " + error.message);
}
try {
  vocabulary = await readJson(path.join(repoRoot, "schemas", "vocabularies.json"));
} catch (error) {
  failures.push("schemas/vocabularies.json is invalid: " + error.message);
}

const topicIds = new Set(vocabulary?.topics?.map((topic) => topic.id) ?? []);
if (catalog && catalog.schema_version !== "0.3.0") failures.push("catalog schema_version is not 0.3.0");
if (!catalog?.records?.length) failures.push("catalog has no records");

const paperEntries = await readdir(path.join(repoRoot, "papers"), { withFileTypes: true });
const paperIds = paperEntries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
if (catalog && catalog.records.length !== paperIds.length) failures.push("catalog record count does not match paper directory count");

for (const paperId of paperIds) {
  const dir = path.join(repoRoot, "papers", paperId);
  const docsDir = path.join(repoRoot, "docs", "papers", paperId);
  for (const relative of ["paper.json", "README.md", "citation.bib"]) {
    if (!await exists(path.join(dir, relative))) failures.push(paperId + ": missing " + relative);
    if (!await exists(path.join(docsDir, relative))) failures.push(paperId + ": missing generated docs/" + relative);
  }
  let paper = null;
  try {
    paper = await readJson(path.join(dir, "paper.json"));
  } catch (error) {
    failures.push(paperId + ": invalid paper.json: " + error.message);
    continue;
  }
  if (paper.schema_version !== "0.3.0") failures.push(paperId + ": wrong schema version");
  if (paper.paper_id !== paperId) failures.push(paperId + ": paper_id mismatch");
  for (const field of ["title", "authors", "publication", "publication_type", "status", "canonical_url", "identifiers", "summary", "tags", "keywords", "versions", "access", "resources", "citation_guidance", "provenance", "batch"]) {
    if (paper[field] == null) failures.push(paperId + ": missing required field " + field);
  }
  if (!Array.isArray(paper.authors) || !paper.authors.length) failures.push(paperId + ": authors missing");
  if (!validUrl(paper.canonical_url)) failures.push(paperId + ": canonical_url is invalid");
  for (const field of ["problem", "method", "findings", "limitations", "future_work"]) {
    if (!paper.summary?.[field]) failures.push(paperId + ": summary." + field + " missing");
  }
  if (!Array.isArray(paper.tags) || !paper.tags.length) failures.push(paperId + ": tags missing");
  for (const tag of paper.tags ?? []) if (!topicIds.has(tag)) failures.push(paperId + ": tag is absent from controlled vocabulary: " + tag);
  if (!Array.isArray(paper.keywords) || !paper.keywords.length) failures.push(paperId + ": keywords missing");
  if (!Array.isArray(paper.versions) || !paper.versions.length) failures.push(paperId + ": versions missing");
  for (const version of paper.versions ?? []) {
    if (!validUrl(version.url)) failures.push(paperId + ": invalid version URL");
    if (version.pdf_url !== null && version.pdf_url !== undefined && !validUrl(version.pdf_url)) failures.push(paperId + ": invalid PDF URL");
  }
  if (!Array.isArray(paper.provenance?.evidence) || !paper.provenance.evidence.length) failures.push(paperId + ": provenance evidence missing");
  if (!paper.citation_guidance?.when_to_cite) failures.push(paperId + ": citation guidance missing");
  for (const legacyField of ["source_links", "catalog_record_id", "record_id", "limitations_future_work"]) {
    if (Object.prototype.hasOwnProperty.call(paper, legacyField)) warnings.push(paperId + ": legacy field remains: " + legacyField);
  }
  const htmlPath = path.join(docsDir, "index.html");
  if (await exists(htmlPath)) {
    const html = await readFile(htmlPath, "utf8");
    for (const required of ["<link rel=\"canonical\"", "application/ld+json", "og:title", "When to cite this paper", "href=\"paper.json\"", "href=\"README.md\"", "href=\"citation.bib\""]) {
      if (!html.includes(required)) failures.push(paperId + ": HTML missing " + required);
    }
    if (badEncoding.test(html)) failures.push(paperId + ": HTML contains mojibake");
  }
}

const allFiles = await walk(repoRoot);
for (const file of allFiles) {
  if (file.relative.toLowerCase().endsWith(".pdf")) failures.push("public repository contains PDF: " + file.relative);
  if (!file.relative.toLowerCase().endsWith(".pdf")) {
    const content = await readFile(file.path, "utf8");
    if (badEncoding.test(content)) failures.push("mojibake in " + file.relative);
  }
}

const sitemap = await readFile(path.join(repoRoot, "docs", "sitemap.xml"), "utf8").catch(() => "");
if (sitemap && !sitemap.includes("https://naser.github.io/research-publications/")) failures.push("sitemap does not contain the site root");
if (catalog && catalog.records.some((record) => !record.page_url || !record.json || !record.bibtex)) failures.push("catalog has incomplete machine-readable paths");

const result = {
  papers: paperIds.length,
  catalog_records: catalog?.records?.length ?? 0,
  controlled_topics: topicIds.size,
  html_landing_pages: paperIds.length,
  pdf_files_in_public_repo: allFiles.filter((file) => file.relative.toLowerCase().endsWith(".pdf")).length,
  warnings,
  failures
};
console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exitCode = 1;
