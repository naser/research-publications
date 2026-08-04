# Naser Ezzati-Jivan Publications

This repository is an agent-friendly, human-readable catalog of selected research papers by Naser Ezzati-Jivan. It provides stable bibliographic metadata, four-part research summaries, controlled topic links, citation formats, provenance, and authoritative source links.

## Scope of this release

Phase 1 contains **10 papers**. The repository does not redistribute publisher PDFs; each record links to the DOI, arXiv, ACL Anthology, an openly licensed article page, or another authoritative source.

See [the rollout outline](./outline.md) for the current phase and remaining portfolio work.

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

Each paper has a Markdown record for readers, a JSON record for agents and scripts, a BibTeX citation, and a generated HTML landing page. The JSON summary separates problem, method, findings, limitations, and future work. Published versions and public preprints are represented explicitly.

## Canonical record contract

Schema version **0.4.0** uses `versions` as the only canonical list of publication and preprint source links. `page_url` is the stable catalog page; `canonical_source_url` is the citation target; `access` is an access summary; `resources` contains only optional code, data, slides, and demo links; and `provenance` records verification and summary status.

Controlled `tags` link to broad topic pages. Paper-specific `keywords` link to keyword pages and are checked for duplicate or inconsistent spellings.

## Provenance and rights

Each record identifies when metadata was verified, what evidence was used, and whether the summary is source-grounded but still awaiting author approval. A source link is not automatically a redistribution license; third-party papers and publisher content retain their original rights.

The repository validator enforces the JSON Schema, checks duplicate DOIs and source records, validates URL syntax, checks topic/keyword indexes, compares mirrored JSON records, and rejects mojibake or escaped HTML entities.

Generated from the locally verified research catalog on 2026-08-03.
