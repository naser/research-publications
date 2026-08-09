# Cube Data Model for Multilevel Statistics Computation of Live Execution Traces

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

**Keywords:** [data cube](../../keywords/data-cube.md) | [stream cube](../../keywords/stream-cube.md) | [live trace statistics](../../keywords/live-trace-statistics.md) | [LTTng](../../keywords/lttng.md) | [State History Tree](../../keywords/state-history-tree.md) | [tilted time frame](../../keywords/tilted-time-frame.md) | [multilevel analysis](../../keywords/multilevel-analysis.md) | [roll-up](../../keywords/roll-up.md) | [drill-down](../../keywords/drill-down.md) | [range query](../../keywords/range-query.md) | [sliding window](../../keywords/sliding-window.md) | [cuboid materialization](../../keywords/cuboid-materialization.md)

## Versions and source links

- [Published version](https://doi.org/10.1002/cpe.3272) - published
- [Institutional full text](https://publications.polymtl.ca/2984/1/2015_Ezzati-Jivan_Cube_data_model_multilevel_statistics.pdf) | [PDF](https://publications.polymtl.ca/2984/1/2015_Ezzati-Jivan_Cube_data_model_multilevel_statistics.pdf) - public_full_text

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

Ezzati-Jivan, N., & Dagenais, M. R. (2015). Cube Data Model for Multilevel Statistics Computation of Live Execution Traces. Concurrency and Computation: Practice and Experience. https://doi.org/10.1002/cpe.3272

### IEEE

N. Ezzati-Jivan and M. R. Dagenais, "Cube Data Model for Multilevel Statistics Computation of Live Execution Traces," Concurrency and Computation: Practice and Experience, 2015, doi: 10.1002/cpe.3272

```bibtex
@article{ezzatiJivan2015cubedata,
  author = {Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Cube Data Model for Multilevel Statistics Computation of Live Execution Traces},
  year = {2015},
  journal = {Concurrency and Computation: Practice and Experience},
  doi = {10.1002/cpe.3272},
  url = {https://doi.org/10.1002/cpe.3272}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: Cube data model PDF: interval-form measures, dimension tree, history store, circular buffers, tilted time frame, cuboid choices, and query types; Cube data model PDF: LTTng/Linux 2.6.38.6, Java/Eclipse/Core i7/6 GB environment, workloads, 1,000 measures, three time levels, and 35 MB memory result; Cube data model PDF: materialization trade-off, range-query behavior, limitations, and future work; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
