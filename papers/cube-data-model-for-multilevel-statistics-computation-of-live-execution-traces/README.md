# Cube data model for multilevel statistics computation of live execution traces

**2015 | Concurrency and Computation: Practice and Experience | journal article**

**Authors:** Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper proposes a multilevel data-cube model for computing statistics over live execution traces across several time scales.

## Four-part research summary

### 1. Problem and motivation

Live trace streams are potentially unbounded, but analysts need multidimensional statistics across recent fine-grained and older coarse-grained time ranges without retaining every event or detailed value (pp. 2-5).

### 2. Method and contribution

The architecture combines a trace reader, circular-buffer processing, dimension/metric trees, interval-form history storage, separate cubes per tilted time frame, and a query engine. It supports sum/count/average, point/stabbing, range, sliding-window, top-k, drill-down, roll-up, slice, and dice queries. Minimal, partial, and full cubing trade memory for response time (pp. 4-12).

### 3. Findings and evidence

Java/Eclipse experiments use LTTng on Linux kernel 2.6.38.6, a Core i7 2.80 GHz/6 GB machine, generated activity from recursive grep -r, wget -r -l, and ls -R, 1,000 measures, and three time levels: last 5 minutes, 24 hours, and 12 days. A one-day trace is used for the three-level memory study; maximum memory is approximately 35 MB. Partial cubing with selected non-leaf measures gives the best reported response-time/memory trade-off, and range-query time is largely independent of interval length in the tested cases (pp. 12-16).

### 4. Limitations and future directions

**Limitations:** Materialization choices control memory/latency; the partial-cubing selection is static in the evaluation; memory grows with metric count/frequency; and the workload is a selected generated LTTng trace rather than a broad production benchmark. Very busy streams may require buffering, delayed processing, or dropping events (pp. 5, 12-16).

**Future work:** Dynamically choose non-leaf cuboids or switch between minimal/partial materialization using user feedback/query history, and extend the system to problem detection and data-mining analyses (p. 16, conclusion).

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [trace-analysis](../../topics/trace-analysis.md) | [performance-analysis](../../topics/performance-analysis.md) | [resource-analysis](../../topics/resource-analysis.md) | [performance-engineering](../../topics/performance-engineering.md)

**Keywords:** data cube | stream cube | live trace statistics | [LTTng](../../keywords/lttng.md) | [State History Tree](../../keywords/state-history-tree.md) | tilted time frame | [multilevel analysis](../../keywords/multilevel-analysis.md) | roll-up | drill-down | range query | sliding window | cuboid materialization

## Versions and source links

- [Published version](https://doi.org/10.1002/cpe.3272) - published
- [Public institutional full text](https://publications.polymtl.ca/2984/) | [PDF](https://publications.polymtl.ca/2984/1/2015_Ezzati-Jivan_Cube_data_model_multilevel_statistics.pdf) - public_accepted_manuscript

**Canonical source:** [https://doi.org/10.1002/cpe.3272](https://doi.org/10.1002/cpe.3272)

## Identifiers

[DOI 10.1002/cpe.3272](https://doi.org/10.1002/cpe.3272)

## When to cite this paper

Cite this paper when your work uses or compares tilted-time-frame stream cubes that retain detailed recent history and compact older history.

- Tilted-time-frame stream cubes that retain detailed recent history and compact older history.
- Interval-form cube summaries enabling arbitrary time-range queries through endpoint subtraction.
- Minimal/partial/full cuboid materialization as a memory-versus-query-response trade-off.
- The 1,000-measure LTTng live-trace evaluation with approximately 35 MB peak memory and range-query duration independence in the tested setup.

## Citation

### APA 7

Ezzati-Jivan, N., & Dagenais, M. R. (2015). Cube data model for multilevel statistics computation of live execution traces. Concurrency and Computation: Practice and Experience, 27(5), 1069-1091. https://doi.org/10.1002/cpe.3272

### IEEE

N. Ezzati-Jivan and M. R. Dagenais, "Cube data model for multilevel statistics computation of live execution traces," Concurrency and Computation: Practice and Experience, vol. 27, no. 5, pp. 1069-1091, 2015, doi: 10.1002/cpe.3272

```bibtex
@article{ezzatiJivan2015cubedata,
  author = {Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Cube data model for multilevel statistics computation of live execution traces},
  year = {2015},
  journal = {Concurrency and Computation: Practice and Experience},
  volume = {27},
  number = {5},
  pages = {1069-1091},
  publisher = {Wiley},
  issn = {1532-0626, 1532-0634},
  doi = {10.1002/cpe.3272},
  url = {https://doi.org/10.1002/cpe.3272}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: PolyPublie repository record identity matched to the catalog title and author record; public PDF downloaded locally and %PDF- signature verified; PolyPublie cover sheet identifies this as the Wiley peer-reviewed accepted version and preserves Wiley self-archiving terms.
- Machine-readable record: [paper.json](./paper.json)
