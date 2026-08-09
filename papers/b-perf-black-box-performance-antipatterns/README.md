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

Performance antipatterns capture recurring behaviours that degrade software efficiency. Black-box approaches aim to detect such issues without modifying the application. This paper presents B-Perf, a system-level black-box method that reconstructs execution, memory, and messaging behaviour from kernel-level traces. By analysing scheduling, allocation, and communication events, B-Perf derives workload-dependent behavioural trends and reports antipattern indicators grounded in resource usage and contention. To handle large trace volumes, the approach follows a pipeline of workload generation, event gathering, trace handling, and antipattern inference. We evaluate B-Perf on three representative antipatterns—One Lane Bridge, Empty Semi Trucks, and Excessive Dynamic Allocation—and apply it to traces from real multi-threaded applications. The results show that system-level events are often sufficient to expose bottlenecks linked to resource contention and system-level interactions. A key limitation is that kernel traces provide limited visibility into fine-grained in-process behaviour. When performance issues are driven by internal logic or function-level interactions, B-Perf may capture only indirect symptoms and may not reveal the full root cause. Within this scope, B-Perf provides practical and efficient black-box detection for antipatterns driven by resource interaction and competition.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [anomaly-detection](../../topics/anomaly-detection.md)

**Keywords:** [performance antipatterns](../../keywords/performance-antipatterns.md) | black-box detection | system-level execution traces | [LTTng](../../keywords/lttng.md) | [Trace Compass](../../keywords/trace-compass.md) | critical paths | resource contention | execution serialization | allocation churn | small-message overhead

## Versions and source links

- [Published version](https://doi.org/10.1145/3777884.3797014) - published
- [Official ICPE preprint](https://icpe2026.spec.org/preprint/Black-box_Performance_Antipattern_Detection_Using_System-level_Execution_Tracing.pdf) | [PDF](https://icpe2026.spec.org/preprint/Black-box_Performance_Antipattern_Detection_Using_System-level_Execution_Tracing.pdf) - public_full_text

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

Noferesti, M., Panahandeh, M., & Ezzati-Jivan, N. (2026). B-Perf: Black-box Performance Antipattern Detection Using System-level Execution Tracing. In ACM/SPEC International Conference on Performance Engineering (ICPE) (pp. 96-107). https://doi.org/10.1145/3777884.3797014

### IEEE

M. Noferesti, M. Panahandeh, and N. Ezzati-Jivan, "B-Perf: Black-box Performance Antipattern Detection Using System-level Execution Tracing," in ACM/SPEC International Conference on Performance Engineering (ICPE), pp. 96-107, 2026, doi: 10.1145/3777884.3797014

```bibtex
@inproceedings{ezzatiJivan2026bperf,
  author = {Morteza Noferesti and Mahsa Panahandeh and Naser Ezzati-Jivan},
  title = {B-Perf: Black-box Performance Antipattern Detection Using System-level Execution Tracing},
  year = {2026},
  booktitle = {ACM/SPEC International Conference on Performance Engineering (ICPE)},
  pages = {96-107},
  publisher = {ACM},
  isbn = {979-8-4007-2325-4},
  doi = {10.1145/3777884.3797014},
  url = {https://doi.org/10.1145/3777884.3797014}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Private full PDF read: pdf-evidence/notes/b-perf-black-box-performance-antipatterns.md; B-Perf PDF pp. 4-7: LTTng event model, Trace Compass-style state reconstruction, tracepoints, environment, and workload protocol; B-Perf PDF pp. 7-10: One Lane Bridge, Excessive Dynamic Allocation, Empty Semi Trucks, Firefox/web validation, and overhead results; B-Perf PDF pp. 10-11: limitations, threats to validity, and future work; ICPE 2026 accepted-papers page labels the conference-hosted PDF as the B-Perf Pre-Print; downloaded PDF is byte-identical to the locally reviewed evidence (SHA-256 FE38962FD4ACF91F760AC51907207F2569B99A172CEFE8D2B8D1393B547A6003); Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
