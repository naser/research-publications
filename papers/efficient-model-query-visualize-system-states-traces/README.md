# Efficient Model to Query and Visualize the System States Extracted from Trace Data

**2013 | Runtime Verification 2013 (RV 2013) | conference paper**

**Authors:** Alexandre Montplaisir, Naser Ezzati-Jivan, Florian Wininger, Michel R. Dagenais

**Core contribution:** The abstract presents a model for querying and visualizing system states extracted from very large traces.

## Four-part research summary

### 1. Problem and motivation

State intervals extracted from traces need a representation that supports efficient queries and visualization at very large data volumes.

### 2. Method and contribution

The preview describes a tree-based state-history database that converts trace events into intervals and supports lookup for CPU, process, memory, file, and other resources at arbitrary timestamps. It names LTTng kernel/user-space tracing in the motivation and claims online and offline operation; the query language, storage details, and trace format require the complete chapter.

### 3. Findings and evidence

The preview reports interactive analysis of traces on the order of 1 TB and motivates avoiding repeated full-trace scans, but provides no reproducible dataset, benchmark table, throughput, latency, or comparison result.

### 4. Limitations and future directions

**Limitations:** Only the official two-page Springer preview was accessible; the complete algorithms, evaluation, limitations, and future-work section remain unavailable.

**Future work:** The paper-specific future-work section remains unverified because the complete chapter was not accessible.

## Abstract

The accessible chapter preview describes a tree-based model of system states and intervals extracted from traces, with online/offline operation and interactive analysis at approximately 1 TB trace scale.

## Topics and keywords

**Tags:** [trace-abstraction](../../topics/trace-abstraction.md) | [trace-visualization](../../topics/trace-visualization.md) | [trace-analysis](../../topics/trace-analysis.md) | [performance-analysis](../../topics/performance-analysis.md)

**Keywords:** system states | trace queries | [trace visualization](../../keywords/trace-visualization.md) | [interval data](../../keywords/interval-data.md) | tree-based storage | [online analysis](../../keywords/online-analysis.md) | offline analysis

## Versions and source links

- [Published version](https://doi.org/10.1007/978-3-642-40787-1_13) - published
- [Springer two-page chapter preview](https://page-one.springer.com/pdf/preview/10.1007/978-3-642-40787-1_13) - public_preview

**Canonical source:** [https://doi.org/10.1007/978-3-642-40787-1_13](https://doi.org/10.1007/978-3-642-40787-1_13)

## Identifiers

[DOI 10.1007/978-3-642-40787-1_13](https://doi.org/10.1007/978-3-642-40787-1_13)

## When to cite this paper

Cite this paper when its specific method, evidence, or benchmark is directly relevant.

- The paper's method is directly relevant.
- The paper's evidence or benchmark is directly relevant.

## Citation

### APA 7

Montplaisir, A., Ezzati-Jivan, N., Wininger, F., & Dagenais, M. R. (2013). Efficient Model to Query and Visualize the System States Extracted from Trace Data. In Runtime Verification 2013 (RV 2013) (pp. 219-234). https://doi.org/10.1007/978-3-642-40787-1_13

### IEEE

A. Montplaisir, N. Ezzati-Jivan, F. Wininger, and M. R. Dagenais, "Efficient Model to Query and Visualize the System States Extracted from Trace Data," in Runtime Verification 2013 (RV 2013), pp. 219-234, 2013, doi: 10.1007/978-3-642-40787-1_13

```bibtex
@inproceedings{ezzatiJivan2013efficientmodel,
  author = {Alexandre Montplaisir and Naser Ezzati-Jivan and Florian Wininger and Michel R. Dagenais},
  title = {Efficient Model to Query and Visualize the System States Extracted from Trace Data},
  year = {2013},
  booktitle = {Runtime Verification 2013 (RV 2013)},
  pages = {219-234},
  publisher = {Springer Berlin Heidelberg},
  issn = {0302-9743, 1611-3349},
  isbn = {9783642407864, 9783642407871},
  doi = {10.1007/978-3-642-40787-1_13},
  url = {https://doi.org/10.1007/978-3-642-40787-1_13}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: PolyPublie record: https://publications.polymtl.ca/13394/; DOI: https://doi.org/10.1007/978-3-642-40787-1_13; DBLP record: https://dblp.org/rec/conf/rv/MontplaisirJWD13.html; Official Springer preview read during review; SHA-256 1f03c9225de8d032f7015b076dd48c7805897c006cb226016baa0e9b01eb621d; Additional review evidence was used; working files are not distributed
- Machine-readable record: [paper.json](./paper.json)
