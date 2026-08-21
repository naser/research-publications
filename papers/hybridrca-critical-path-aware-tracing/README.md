# HybridRCA: Lightweight Critical-Path-Aware Hybrid Tracing for Root-Cause Analysis in Production Microservices

**2025 | IEEE International Conference on Software Maintenance and Evolution (ICSME) | conference paper**

**Authors:** Maryam Ekhlasi, Arnaud Fiorini, Michel R. Dagenais, Naser Ezzati-Jivan, Maxime Lamothe

**Core contribution:** HybridRCA combines critical-path-aware span analysis with targeted kernel metrics to reduce production trace volume while preserving root-cause localization evidence.

## Four-part research summary

### 1. Problem and motivation

Production microservice traces can contain millions or billions of spans. Keeping every low-level event is expensive, while high-level spans alone can hide the kernel, scheduling, and resource causes of a latency anomaly. Parallel branches also make an all-span latency view misleading, and unsynchronized clocks can break cross-node diagnosis.

### 2. Method and contribution

HybridRCA combines a trace collector, request structuring, anomaly detection, and root-cause localization. It uses OpenTelemetry/OpenTracing/OpenCensus at the high level, LTTng and Perf at the low level, and Trace Compass for cross-node clock synchronization. A critical-path extractor handles parallel children and self-time by subtracting merged overlapping child intervals from parent duration; adjacent identical critical-path spans are aggregated. Anomalies are detected from successful-request latency bounds, then a critical-path graph is ranked with Personalized PageRank and a weighted Tarantula spectrum. The evaluation reports an LTTng-triggered path from application tracing to targeted CPU, memory, and I/O-wait collection.

### 3. Findings and evidence

The evaluation uses TrainTicket with 41 services, OnlineBoutique with 11 services, 56 injected faults, HotRod, and a TiDB issue scenario. On selected HotRod, TrainTicket, and OnlineBoutique cases, reported recall is 90–100%, precision is 85–97%, and F1 is 87–98%. The critical-path strategy reduces spans by about 22% in the reported experiments, while the listed kernel-storage examples reduce retained data by 99.57–99.98%. In the TiDB scenario, a SysBench workload reproduced an index-related latency increase from 4,397 ms to 7,663 ms and the method detected the degradation.

### 4. Limitations and future directions

**Limitations:** A local spike that is not on the critical path can be missed, and critical-path diagnosis is less reliable when abnormal requests dominate the sample. The experiments emphasize public benchmarks and a synthetic TiDB reproduction, so production transfer may be affected by asynchronous requests, multi-tenant noise, network conditions, container runtime behavior, and clock synchronization. The paper also notes that some baselines were reimplemented from descriptions, which limits strict reproducibility of the comparison.

**Future work:** The authors identify broader live-production deployment, streaming real-time alerts, container metadata and network telemetry, and improved support for long-running asynchronous requests and multi-tenant noise as next steps. A practical deployment lesson is to control clock drift because a few milliseconds of misalignment can associate events with the wrong root cause.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [microservices](../../topics/microservices.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [latency-analysis](../../topics/latency-analysis.md)

**Keywords:** [critical path](../../keywords/critical-path.md) | hybrid tracing | production microservices | [LTTng](../../keywords/lttng.md) | OpenTracing | Personalized PageRank | weighted spectrum-based fault localization | [HotROD](../../keywords/hotrod.md) | [TrainTicket](../../keywords/trainticket.md) | OnlineBoutique | TiDB | [SysBench](../../keywords/sysbench.md) | kernel-level storage

## Versions and source links

- [Published version](https://doi.org/10.1109/icsme64153.2025.00056) - published

**Canonical source:** [https://doi.org/10.1109/icsme64153.2025.00056](https://doi.org/10.1109/icsme64153.2025.00056)

## Identifiers

[DOI 10.1109/icsme64153.2025.00056](https://doi.org/10.1109/icsme64153.2025.00056)

## When to cite this paper

Cite this paper when your work uses critical-path-aware hybrid tracing to reduce distributed trace volume while preserving a path toward kernel-level root-cause analysis.

- For combining high-level OpenTelemetry-compatible spans with targeted LTTng/Perf collection.
- For critical-path extraction over parallel microservice spans, including self-time and overlap handling.
- For Personalized PageRank plus spectrum-based ranking of abnormal critical-path nodes.
- For the TrainTicket, OnlineBoutique, HotRod, and TiDB evaluation and the reported span/storage reductions.

## Citation

### APA 7

Ekhlasi, M., Fiorini, A., Dagenais, M. R., Ezzati-Jivan, N., & Lamothe, M. (2025). HybridRCA: Lightweight Critical-Path-Aware Hybrid Tracing for Root-Cause Analysis in Production Microservices. In IEEE International Conference on Software Maintenance and Evolution (ICSME) (pp. 553-564). https://doi.org/10.1109/icsme64153.2025.00056

### IEEE

M. Ekhlasi, A. Fiorini, M. R. Dagenais, N. Ezzati-Jivan, and M. Lamothe, "HybridRCA: Lightweight Critical-Path-Aware Hybrid Tracing for Root-Cause Analysis in Production Microservices," in IEEE International Conference on Software Maintenance and Evolution (ICSME), pp. 553-564, 2025, doi: 10.1109/icsme64153.2025.00056

```bibtex
@inproceedings{ezzatiJivan2025hybridrcalightweight,
  author = {Maryam Ekhlasi and Arnaud Fiorini and Michel R. Dagenais and Naser Ezzati-Jivan and Maxime Lamothe},
  title = {HybridRCA: Lightweight Critical-Path-Aware Hybrid Tracing for Root-Cause Analysis in Production Microservices},
  year = {2025},
  booktitle = {IEEE International Conference on Software Maintenance and Evolution (ICSME)},
  pages = {553-564},
  publisher = {IEEE},
  doi = {10.1109/icsme64153.2025.00056},
  url = {https://doi.org/10.1109/icsme64153.2025.00056}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Exact full paper PDF reviewed: HybridRCA, IEEE ICSME 2025, DOI 10.1109/ICSME64153.2025.00056.; Technical details verified from the paper's instrumentation, method, evaluation, and limitations sections, including LTTng, Perf, OpenTelemetry-compatible tracing, critical-path extraction, PageRank/Tarantula ranking, benchmark composition, and reported tables.
- Machine-readable record: [paper.json](./paper.json)
