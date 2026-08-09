import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const workspace = process.cwd();
const docsRoot = path.resolve(process.env.RESEARCH_CATALOG_OUTPUT || path.join(workspace, "github-repo"), "docs");
const failures = [];
const htmlFiles = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(full);
  }
}

const attr = (html, name) => html.match(new RegExp(`<meta\\s+name=["']${name}["']\\s+content=["']([^"']*)["']`, "i"))?.[1] ?? null;
const property = (html, name) => html.match(new RegExp(`<meta\\s+property=["']${name}["']\\s+content=["']([^"']*)["']`, "i"))?.[1] ?? null;

await walk(docsRoot);
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const rel = path.relative(docsRoot, file).replaceAll(path.sep, "/");
  const isPaper = rel.startsWith("papers/");
  const required = [
    ["description", attr(html, "description")],
    ["robots", attr(html, "robots")],
    ["canonical", html.includes('<link rel="canonical"')],
    ["og:title", property(html, "og:title")],
    ["og:description", property(html, "og:description")],
    ["application/ld+json", html.includes("application/ld+json")]
  ];
  for (const [name, value] of required) if (!value) failures.push(`${rel}: missing ${name}`);
  const description = attr(html, "description");
  if (description && description.length > 170) failures.push(`${rel}: description exceeds 170 characters`);
  if (/[\u00c2\u00c3\u00e2\ufffd]/u.test(html)) failures.push(`${rel}: mojibake or replacement character detected`);
  if (isPaper) {
    for (const name of ["citation_title", "citation_author", "citation_publication_date"]) {
      if (!attr(html, name)) failures.push(`${rel}: missing ${name}`);
    }
    if (!html.includes("When to cite this paper")) failures.push(`${rel}: missing citation guidance heading`);
    if (!html.includes("type=\"application/json\"")) failures.push(`${rel}: missing machine-readable JSON alternate`);
    if (!html.includes("type=\"application/x-bibtex\"")) failures.push(`${rel}: missing BibTeX alternate`);
    if (!html.includes("type=\"application/x-research-info-systems\"")) failures.push(`${rel}: missing RIS alternate`);
  }
}

const sitemapPath = path.join(docsRoot, "sitemap.xml");
const robotsPath = path.join(docsRoot, "robots.txt");
if (!(await stat(sitemapPath).catch(() => null))) failures.push("docs/sitemap.xml is missing");
if (!(await stat(robotsPath).catch(() => null))) failures.push("docs/robots.txt is missing");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(JSON.stringify({ status: "seo-valid", html_pages: htmlFiles.length, paper_pages: htmlFiles.filter((file) => path.relative(docsRoot, file).replaceAll(path.sep, "/").startsWith("papers/")).length }, null, 2));
}
