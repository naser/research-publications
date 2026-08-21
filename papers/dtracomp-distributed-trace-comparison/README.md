# DTraComp: Comparing distributed execution traces for understanding intermittent latency sources

**2026 | Journal of Systems and Software | journal article**

**Authors:** Maryam Ekhlasi, Fatemeh Faraji Daneshgar, Michel Dagenais, Maxime Lamothe, Naser Ezzati-Jivan, Matthew Khouzam

**Core contribution:** DTraComp compares groups of distributed executions with trace synchronization, filtering, and graph-oriented visualization to localize intermittent latency causes across service and kernel layers.

## Four-part research summary

### 1. Problem and motivation

End-to-end tracing reveals span structure and latency but usually cannot pinpoint the process-level or kernel-level cause of degradation. Existing performance tools also often lack a direct comparison view for normal and degraded groups of requests with parallel service branches.

### 2. Method and contribution

The public journal abstract describes an open-source framework integrated with Eclipse Trace Compass and compatible with multiple microservice trace standards. It compares two groups of executions with nested parallel spans and exposes kernel details for the threads participating in each span. The local 2023 Authorea artifact is a presentation that identifies synchronization and filtering components; the journal-paper algorithm still requires the version-of-record text.

### 3. Findings and evidence

The public journal page reports five practical use cases, linear O(n) scaling with trace size, LTTng snapshot-mode overhead below 10%, standard-mode overhead of about 26-27%, metric extraction tested up to 20 GB, and comparison/filtering from milliseconds to seconds. These are public abstract/page-level results, not a complete full-text audit.

### 4. Limitations and future directions

**Limitations:** The locally available Authorea PDF is a 2023 project presentation rather than the 2026 Journal of Systems and Software article. Exact datasets, trace adapters, comparison algorithms, baselines, and the article's complete validity discussion remain unverified.

**Future work:** Obtain the journal PDF or accepted manuscript and replace the abstract-level record with page-grounded details. The public presentation identifies semantic grouping of similar request structures and learned normal-execution thresholds as open directions.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [trace-analysis](../../topics/trace-analysis.md) | [latency-analysis](../../topics/latency-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md)

**Keywords:** distributed execution traces | trace comparison | intermittent latency | latency sources

## Versions and source links

- [Published version](https://doi.org/10.1016/j.jss.2026.112990) - published

**Canonical source:** [https://doi.org/10.1016/j.jss.2026.112990](https://doi.org/10.1016/j.jss.2026.112990)

## Identifiers

[DOI 10.1016/j.jss.2026.112990](https://doi.org/10.1016/j.jss.2026.112990)

## When to cite this paper

Cite this paper when comparing groups of distributed executions to localize intermittent latency across service and kernel layers.

- Trace-group comparison for distributed requests with nested parallel spans.
- Eclipse Trace Compass integration and kernel details attached to span execution.
- The public five-use-case and LTTng overhead results, with the version-of-record evidence boundary stated explicitly.

## Citation

### APA 7

Ekhlasi, M., Daneshgar, F. F., Dagenais, M., Lamothe, M., Ezzati-Jivan, N., & Khouzam, M. (2026). DTraComp: Comparing distributed execution traces for understanding intermittent latency sources. Journal of Systems and Software, 241, 112990. https://doi.org/10.1016/j.jss.2026.112990

### IEEE

M. Ekhlasi, F. F. Daneshgar, M. Dagenais, M. Lamothe, N. Ezzati-Jivan, and M. Khouzam, "DTraComp: Comparing distributed execution traces for understanding intermittent latency sources," Journal of Systems and Software, vol. 241, Art. no. 112990, 2026, doi: 10.1016/j.jss.2026.112990

```bibtex
@article{ezzatiJivan2026dtracompcomparing,
  author = {Maryam Ekhlasi and Fatemeh Faraji Daneshgar and Michel Dagenais and Maxime Lamothe and Naser Ezzati-Jivan and Matthew Khouzam},
  title = {DTraComp: Comparing distributed execution traces for understanding intermittent latency sources},
  year = {2026},
  journal = {Journal of Systems and Software},
  volume = {241},
  pages = {112990},
  eid = {112990},
  publisher = {Elsevier BV},
  issn = {0164-1212},
  doi = {10.1016/j.jss.2026.112990},
  url = {https://doi.org/10.1016/j.jss.2026.112990}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-21
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: Official Journal of Systems and Software article page and abstract: https://www.sciencedirect.com/science/article/pii/S0164121226002232; Public abstract-page results include five use cases, LTTng overhead, 20 GB trace tests, and linear scaling; Local Authorea presentation reviewed; it is not treated as the journal article: pdf-evidence/notes/dtracomp-distributed-trace-comparison.md
- Machine-readable record: [paper.json](./paper.json)
