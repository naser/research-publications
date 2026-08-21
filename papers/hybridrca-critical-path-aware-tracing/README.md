# HybridRCA: Lightweight Critical-Path-Aware Hybrid Tracing for Root-Cause Analysis in Production Microservices

**2025 | IEEE International Conference on Software Maintenance and Evolution (ICSME) | conference paper**

**Authors:** Maryam Ekhlasi, Arnaud Fiorini, Michel R. Dagenais, Naser Ezzati-Jivan, Maxime Lamothe

**Core contribution:** HybridRCA combines critical-path-aware span analysis with targeted kernel metrics to reduce production trace volume while preserving root-cause localization evidence.

## Four-part research summary

### 1. Problem and motivation

Production microservices generate too many spans and low-level events for full-granularity storage and diagnosis, yet root-cause analysis still needs evidence about the execution context that causes latency.

### 2. Method and contribution

The pipeline groups similar traces, structures requests, extracts each request's critical path, builds a critical-path span graph, applies Personalized PageRank and weighted spectrum-based fault localization, and triggers LTTng collection of CPU, memory, and I/O-wait metrics only for targeted processes or threads. The evaluation uses OpenTracing-instrumented applications and LTTng 2.13.9-1; Perf is mentioned as a low-level tracing tool but is not the reported primary collector.

### 3. Findings and evidence

The paper evaluates HotROD, TrainTicket, OnlineBoutique, and a reproduced TiDB scenario. The abstract reports average recall improvement of 0.45%, up to 22.6% fewer spans, and more than 99% kernel-level storage reduction; the conclusion separately reports 5.7% average top-1 recall improvement, up to 0.45% precision improvement, 22.3% fewer spans, and more than 99% storage reduction. The evaluation includes 56 injected faults across TrainTicket and OnlineBoutique and reports single- and two-root-cause precision/recall/F1 results.

### 4. Limitations and future directions

**Limitations:** Critical-path-only collection can miss local latency that does not affect end-to-end latency; the anomaly detector assumes most behavior is normal; and the baselines were reimplemented. The evidence is still a benchmark and reproduced-case evaluation rather than a broad live-traffic deployment.

**Future work:** Extend validation to live traffic, streaming alerts, container and network metadata, long-running asynchronous requests, and multi-tenant noise.

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

Cite this paper when reducing production microservice tracing while retaining critical-path evidence for root-cause analysis.

- Critical-path extraction with Personalized PageRank and weighted spectrum-based localization.
- LTTng-triggered collection of targeted CPU, memory, and I/O-wait metrics for suspicious processes or spans.
- HotROD, TrainTicket, OnlineBoutique, and TiDB evaluations with trace-volume and kernel-storage reductions.

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

- Metadata verified: 2026-08-21
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: IEEE/DBLP metadata for 10.1109/icsme64153.2025.00056; HybridRCA PDF pp. 1-6: critical-path extraction, Personalized PageRank, weighted spectrum analysis, targeted metrics, and clock synchronization; HybridRCA PDF pp. 7-10: LTTng 2.13.9-1, HotROD/TrainTicket/OnlineBoutique/TiDB workloads, injected faults, accuracy, trace-volume, and storage results; HybridRCA PDF p. 10: limitations and future-work boundary; Local PDF hash verified in pdf-evidence/notes/hybridrca-critical-path-aware-tracing.md and extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
