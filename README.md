# Naser Ezzati-Jivan Publications

This repository is an agent-friendly, human-readable catalog of selected research papers by Naser Ezzati-Jivan. It provides stable bibliographic metadata, four-part research summaries, controlled topic links, citation formats, provenance, and authoritative source links.

## Scope of this release

The catalog contains **89 records**. Records still awaiting full-text review explicitly mark that evidence boundary. The repository does not redistribute publisher PDFs; each record links to the DOI, arXiv, ACL Anthology, an openly licensed article page, or another authoritative source.



## Browse

- [Static landing page](./docs/index.html)
- [Public catalog JSON](./catalog.json)
- [Topics](./topics/index.md)
- [Keywords](./keywords/index.md)
- [Paper JSON Schema](./schemas/paper.schema.json)
- [Controlled vocabularies](./schemas/vocabularies.json)
- [Repository validator](./scripts/validate-github-repo.mjs)
- [Citation file](./CITATION.cff)

## Record format

Each paper has a Markdown record for readers, a JSON record for agents and scripts, APA 7, IEEE, BibTeX, and RIS citation files, and a generated HTML landing page. The JSON summary separates problem, method, findings, limitations, and future work. Published versions and public preprints are represented explicitly.

## Canonical record contract

Schema version **0.4.0** uses `versions` as the only canonical list of publication and preprint source links. `page_url` is the stable catalog page; `canonical_source_url` is the citation target; `access` is an access summary; `resources` contains only optional code, data, slides, and demo links; and `provenance` records verification and summary status.

Controlled tags link to broad topic pages. All paper-specific keywords remain in each record; recurring keywords used by at least 2 papers receive standalone browse pages, while one-off keywords remain plain-text metadata to prevent a fragmented index.

## Provenance and rights

Each record identifies when metadata was verified, what evidence was used, and whether the summary is source-grounded but still awaiting author approval. A source link is not automatically a redistribution license; third-party papers and publisher content retain their original rights.

The repository validator enforces the JSON Schema, checks duplicate DOIs and source records, validates URL syntax, checks topic/keyword indexes, compares mirrored JSON records, and rejects mojibake or escaped HTML entities.

Generated from the locally verified research catalog on 2026-08-08.
