# B-Perf: Black-box Performance Antipattern Detection Using System-level Execution Tracing

**2026 | ACM/SPEC International Conference on Performance Engineering (ICPE) | conference paper**

**Authors:** Morteza Noferesti, Mahsa Panahandeh, Naser Ezzati-Jivan

**Core contribution:** B-Perf reconstructs execution, memory, and messaging behavior from Linux kernel-level traces and infers performance-antipattern indicators without requiring application source access or intrusive instrumentation.

## Four-part research summary

### 1. Problem and motivation

White-box performance-antipattern detection needs source access or application instrumentation. B-Perf asks whether system-level kernel events can expose execution, memory, and messaging antipatterns for black-box or binary-only targets.

### 2. Method and contribution

B-Perf gathers LTTng kernel events, maps them to an abstract event model, reconstructs a Trace Compass-style state system and per-request critical paths, derives execution/memory/messaging projections, and applies trend-based inference over ordered workloads. It reports behavioral indicators rather than claiming strict classification.

### 3. Findings and evidence

Controlled paired programs distinguish One Lane Bridge through serialized critical paths and blocking, Excessive Dynamic Allocation through allocation/free churn and unstable memory, and Empty Semi Trucks through many small TCP messages, interrupts, and preemption. A Firefox case rises from roughly 30 seconds for one parallel window to 2.2 minutes for two and 5.7 minutes for three; the method flags execution serialization. CPU tracing overhead is below 0.01%, while the I/O microbenchmark loses about 7-8% throughput.

### 4. Limitations and future directions

**Limitations:** Kernel traces expose resource interaction but not fine-grained internal logic, algorithms, or purely application-level lock causes. The controlled programs isolate one antipattern at a time, the external validation is limited, the method is Linux/LTTng-focused, and the current pipeline is post-mortem. Indicators can be ambiguous under mixed behavior and background interference.

**Future work:** Validate larger industrial and multi-component systems; support online or near-real-time incremental state reconstruction and reporting; test other operating systems and tracing backends; and refine inference for overlapping antipatterns and mixed workloads.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [anomaly-detection](../../topics/anomaly-detection.md)

**Keywords:** [performance antipatterns](../../keywords/performance-antipatterns.md) | [black-box detection](../../keywords/black-box-detection.md) | [system-level execution traces](../../keywords/system-level-execution-traces.md) | [LTTng](../../keywords/lttng.md) | [Trace Compass](../../keywords/trace-compass.md) | [critical paths](../../keywords/critical-paths.md) | [resource contention](../../keywords/resource-contention.md) | [execution serialization](../../keywords/execution-serialization.md) | [allocation churn](../../keywords/allocation-churn.md) | [small-message overhead](../../keywords/small-message-overhead.md)

## Versions and source links

- [Published version](https://doi.org/10.1145/3777884.3797014) - published
- [Public ACM PDF](https://dl.acm.org/doi/pdf/10.1145/3777884.3797014) | [PDF](https://dl.acm.org/doi/pdf/10.1145/3777884.3797014) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3777884.3797014](https://doi.org/10.1145/3777884.3797014)

## Identifiers

[DOI 10.1145/3777884.3797014](https://doi.org/10.1145/3777884.3797014)

## When to cite this paper

Cite this paper when your work uses or compares black-box detection of execution, memory, and messaging performance-antipattern indicators from kernel-level traces.

- black-box detection of execution, memory, and messaging performance-antipattern indicators from kernel-level traces.
- the shared state-system representation that turns scheduling, synchronization, allocation, TCP, interrupt, and preemption events into cross-scope behavior projections.
- the concrete LTTng evaluation of One Lane Bridge, Excessive Dynamic Allocation, and Empty Semi Trucks, including the low CPU-bound tracing overhead and I/O throughput trade-off.
- the distinction between behavioral indication and definitive root-cause classification when kernel evidence is indirect or mixed.

## Citation

### APA 7

Noferesti, M., Panahandeh, M., & Ezzati-Jivan, N. (2026). B-Perf: Black-box Performance Antipattern Detection Using System-level Execution Tracing. ACM/SPEC International Conference on Performance Engineering (ICPE). https://doi.org/10.1145/3777884.3797014

### IEEE

M. Noferesti, M. Panahandeh, and N. Ezzati-Jivan, "B-Perf: Black-box Performance Antipattern Detection Using System-level Execution Tracing," in ACM/SPEC International Conference on Performance Engineering (ICPE), 2026, doi: 10.1145/3777884.3797014

```bibtex
@inproceedings{ezzatiJivan2026bperf,
  author = {Morteza Noferesti and Mahsa Panahandeh and Naser Ezzati-Jivan},
  title = {B-Perf: Black-box Performance Antipattern Detection Using System-level Execution Tracing},
  year = {2026},
  booktitle = {ACM/SPEC International Conference on Performance Engineering (ICPE)},
  doi = {10.1145/3777884.3797014},
  url = {https://doi.org/10.1145/3777884.3797014}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: Private full PDF read: pdf-evidence/notes/b-perf-black-box-performance-antipatterns.md; B-Perf PDF pp. 4-7: LTTng event model, Trace Compass-style state reconstruction, tracepoints, environment, and workload protocol; B-Perf PDF pp. 7-10: One Lane Bridge, Excessive Dynamic Allocation, Empty Semi Trucks, Firefox/web validation, and overhead results; B-Perf PDF pp. 10-11: limitations, threats to validity, and future work; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
