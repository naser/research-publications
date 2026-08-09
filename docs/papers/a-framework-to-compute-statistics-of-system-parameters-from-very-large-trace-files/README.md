# A Framework to Compute Statistics of System Parameters from Very Large Trace Files

**2013 | ACM SIGOPS Operating Systems Review | journal article**

**Authors:** Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The framework computes system-parameter statistics for arbitrary intervals and resource hierarchies from very large traces using a disk-resident history structure and controlled granularity.

## Four-part research summary

### 1. Problem and motivation

Re-reading large traces for every interval query is slow, while storing every metric change can consume storage comparable to the source trace. The framework targets scalable, compact, interactive metric statistics (pp. 2-4).

### 2. Method and contribution

A Java/LTTng prototype builds a disk-resident interval history in one trace pass. A granularity degree controls persistence frequency; intermediate values are linearly interpolated. Stabbing queries answer point values, endpoint subtraction answers interval statistics, and a resource/metric hierarchy supports roll-up/drill-down queries (pp. 5-11).

### 3. Findings and evidence

Tests use Linux kernel 2.6.38.6, a 2.8 GHz/6 GB machine, metrics including CPU usage, I/O throughput, HTTP/FTP/DNS connection counts, and event counts. Traces span 1-40 GB; GD=1 creates a store about 2.5-4.5x the source size, while coarser GD values reduce storage/construction cost. Twenty runs use 100 random intervals; GD=1000 is the best tested query case in the figures (pp. 11-13).

### 4. Limitations and future directions

**Limitations:** Interpolation accuracy depends on metric behavior and granularity degree; coarse degrees trade precision for space and construction time. Online construction is described as possible but was not investigated in this phase (pp. 7-8, 12-13).

**Future work:** Relate granularity to metrics and trace size; study interpolation effects; support other tracing systems; connect the framework to kernel fault/attack detection; and evaluate online construction (pp. 12-13).

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [trace-analysis](../../topics/trace-analysis.md) | [performance-analysis](../../topics/performance-analysis.md) | [resource-analysis](../../topics/resource-analysis.md) | [performance-engineering](../../topics/performance-engineering.md)

**Keywords:** trace statistics | [LTTng](../../keywords/lttng.md) | [Linux kernel 2.6.38.6](../../keywords/linux-kernel-2-6-38-6.md) | disk-resident interval tree | history tree | granularity degree | linear interpolation | hierarchical query | large-scale tracing | [online analysis](../../keywords/online-analysis.md) | CPU usage | I/O throughput

## Versions and source links

- [Published version](https://doi.org/10.1145/2433140.2433151) - published
- [Institutional full text](https://publications.polymtl.ca/2954/1/2013_Ezzati-Jivan_Framework_compute_statistics_system_parameters.pdf) | [PDF](https://publications.polymtl.ca/2954/1/2013_Ezzati-Jivan_Framework_compute_statistics_system_parameters.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1145/2433140.2433151](https://doi.org/10.1145/2433140.2433151)

## Identifiers

[DOI 10.1145/2433140.2433151](https://doi.org/10.1145/2433140.2433151)

## When to cite this paper

Cite this paper when your work uses or compares granularity-degree-controlled, disk-resident trace-statistics computation with interpolation.

- Granularity-degree-controlled, disk-resident trace-statistics computation with interpolation.
- Endpoint/stabbing-query construction for interval statistics without re-reading the queried trace range.
- Resource-hierarchy aggregation with `O(log n + K)` reported query work.
- The 1-40 GB LTTng scalability study and the storage/precision trade-off across GD values.

## Citation

### APA 7

Ezzati-Jivan, N., & Dagenais, M. R. (2013). A Framework to Compute Statistics of System Parameters from Very Large Trace Files. ACM SIGOPS Operating Systems Review. https://doi.org/10.1145/2433140.2433151

### IEEE

N. Ezzati-Jivan and M. R. Dagenais, "A Framework to Compute Statistics of System Parameters from Very Large Trace Files," ACM SIGOPS Operating Systems Review, 2013, doi: 10.1145/2433140.2433151

```bibtex
@article{ezzatiJivan2013aframework,
  author = {Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {A Framework to Compute Statistics of System Parameters from Very Large Trace Files},
  year = {2013},
  journal = {ACM SIGOPS Operating Systems Review},
  doi = {10.1145/2433140.2433151},
  url = {https://doi.org/10.1145/2433140.2433151}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Statistics framework PDF: LTTng/Linux 2.6.38.6, Java history/resource trees, granularity degree, interpolation, and query bounds; Statistics framework PDF: 1-40 GB traces, GD 1/100/500/1000, 20-run/100-interval query experiment, disk-size comparison, and hierarchy analysis; Statistics framework PDF: interpolation/precision, storage, online-construction limitations, and future work; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
