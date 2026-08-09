# Distributed Architecture for an Integrated Development Environment, Large Trace Analysis, and Visualization

**2021 | Sensors | journal article**

**Authors:** Yonni Chen Kuang Piao, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper presents a modular client-server architecture for large-trace storage, analysis, and visualization inside an integrated development environment.

## Four-part research summary

### 1. Problem and motivation

IDE trace analysis tools are difficult to integrate when trace storage, analysis, and visualization are monolithic, and large traces make browser transfer and rendering expensive.

### 2. Method and contribution

Use a modular distributed architecture with a Trace Analysis Server, Data Provider, API Gateway/service discovery, TASP REST API, generic Timegraph/XY models, JSON/GZip JSON/Protobuf serialization, and client throttling/caching; TraceScape provides the JavaScript client and PixiJS rendering.

### 3. Findings and evidence

On a 2.47 GB/approximately 75M-event trace, Protobuf generally reduced transfer and serialization overhead relative to JSON and GZip JSON, while GZip often minimized payload size. PixiJS rendered 25/200 timegraph rows in 6.79/68.67 ms, and the client/server penalty was generally tens of milliseconds rather than trace-scale processing time.

### 4. Limitations and future directions

**Limitations:** The evaluation is local and focuses on selected XY/timegraph queries and browser rendering; small traces may not benefit. REST versus gRPC was not fully evaluated, request-volume stress and broader workloads are limited, and maintainability/flexibility claims are mainly architectural.

**Future work:** Link trace views to IDE code problems, evaluate broader workloads and deployments, and compare additional transport/protocol choices such as gRPC.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [trace-analysis](../../topics/trace-analysis.md) | [observability](../../topics/observability.md) | [performance-optimization](../../topics/performance-optimization.md) | [multicore-systems](../../topics/multicore-systems.md)

**Keywords:** distributed architecture | [Trace Compass](../../keywords/trace-compass.md) | TraceScape | LTTng 2.10.3 | Trace Analysis Server Protocol | TASP | Protobuf | GZip JSON | large traces | state models | [trace visualization](../../keywords/trace-visualization.md) | PixiJS | Chart.js | HighCharts

## Resources

- [Code](https://github.com/cheninator/trace-scape)

## Versions and source links

- [Published version](https://doi.org/10.3390/s21165560) - published
- [Public full text](https://publications.polymtl.ca/9436/1/2021_Chen%20Kuang%20Piao_Distributed_Architecture_Integrated_Development_Environment.pdf) | [PDF](https://publications.polymtl.ca/9436/1/2021_Chen%20Kuang%20Piao_Distributed_Architecture_Integrated_Development_Environment.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.3390/s21165560](https://doi.org/10.3390/s21165560)

## Identifiers

[DOI 10.3390/s21165560](https://doi.org/10.3390/s21165560)

## When to cite this paper

Cite this paper when your work uses or compares a modular TASP architecture that separates trace storage, analysis services, APIs, and IDE visualization.

- For a modular TASP architecture that separates trace storage, analysis services, APIs, and IDE visualization.
- For generic `Timegraph`/`XY` data models plus client throttling/caching for large trace views.
- For Protobuf versus JSON/GZip JSON payload and latency trade-offs on a 2.47 GB, approximately 75M-event trace.
- For PixiJS-based timegraph rendering measurements at 25 and 200 rows.

## Citation

### APA 7

Piao, Y. C. K., Ezzati-Jivan, N., & Dagenais, M. R. (2021). Distributed Architecture for an Integrated Development Environment, Large Trace Analysis, and Visualization. Sensors. https://doi.org/10.3390/s21165560

### IEEE

Y. C. K. Piao, N. Ezzati-Jivan, and M. R. Dagenais, "Distributed Architecture for an Integrated Development Environment, Large Trace Analysis, and Visualization," Sensors, 2021, doi: 10.3390/s21165560

```bibtex
@article{ezzatiJivan2021distributedarchitecture,
  author = {Yonni Chen Kuang Piao and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Distributed Architecture for an Integrated Development Environment, Large Trace Analysis, and Visualization},
  year = {2021},
  journal = {Sensors},
  doi = {10.3390/s21165560},
  url = {https://doi.org/10.3390/s21165560}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Sensors/institutional PDF: Trace Compass, TraceScape, LTTng 2.10.3, TASP, data providers, serialization, and visualization architecture; Sensors/institutional PDF: 2.47 GB/75-million-event trace, state-model sizes, serialization payload/overhead, request latency, and rendering measurements; Sensors/institutional PDF: small-trace, REST/gRPC, and qualitative-maintainability limitations plus future-work direction; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
