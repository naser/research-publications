# N-Lane Bridge Performance Antipattern Analysis Using System-Level Execution Tracing

**2022 | IEEE Working Conference on Source Code Analysis and Manipulation (SCAM) | conference paper**

**Authors:** Riley VanDonge, Naser Ezzati-Jivan

**Core contribution:** N-Lane Bridge extends One-Lane Bridge analysis to active-resource bottlenecks and uses LTTng system-level traces to distinguish application-caused congestion from external interference.

## Four-part research summary

### 1. Problem and motivation

Existing One-Lane Bridge methods focus on passive resources and imprecise CPU metrics, so they can miss latency caused by an application's overuse of CPUs, memory, disks, or other active resources.

### 2. Method and contribution

LTTng 2.12.3 and Trace Compass collect request delimiters, scheduling, wakeup, interrupt, timer, syscall, and call-stack events. Workloads scale users as A+Bx until response time reaches 10 times the baseline; critical paths classify running, preempted, interrupt, timer, network, input, block-device, and unknown-blocked time. A 5% one-tailed unequal-variance t-test detects nonlinear response growth, and average blocking-time increases identify the responsible resource. Active-resource congestion then separates an N-Lane Bridge from an external bottleneck; ELF symbols locate passive-resource code without source instrumentation.

### 3. Findings and evidence

In Firefox 65.0 PDF.js, average render time rises from 31.6 seconds for one window to 2:16.8 for two and 5:43.0 for three. Poll blocking contributes 54.49% of latency increase, CPU preemption 27.66%, and futex blocking 10.85%; memory paging and CPU occupancy identify active-resource N-Lane Bridges. In the unfamiliar InDebitO Flask application, 36 concurrent login requests produce a 10x latency increase and reveal CPU congestion caused by the application.

### 4. Limitations and future directions

**Limitations:** The method is evaluated on layered systems and its extraction cost grows with threads, traces, and event volume. It is heuristic, can miss antipatterns absent from the recorded workload, may report false negatives when the test system has excess resources, and does not always locate the complete source-level cause.

**Future work:** Extend the analysis to Traffic Jam and Ramp antipatterns and investigate software-aging and security-related antipatterns.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [anomaly-detection](../../topics/anomaly-detection.md)

**Keywords:** N-Lane Bridge | One-Lane Bridge | [performance antipatterns](../../keywords/performance-antipatterns.md) | system-level execution tracing | [LTTng](../../keywords/lttng.md) | [Trace Compass](../../keywords/trace-compass.md) | [sched_switch](../../keywords/sched-switch.md) | sched_wakeup | [futex](../../keywords/futex.md) | Firefox PDF.js | InDebitO | [SysBench](../../keywords/sysbench.md) | memory paging | CPU preemption

## Versions and source links

- [Published version](https://doi.org/10.1109/scam55253.2022.00015) - published

**Canonical source:** [https://doi.org/10.1109/scam55253.2022.00015](https://doi.org/10.1109/scam55253.2022.00015)

## Identifiers

[DOI 10.1109/scam55253.2022.00015](https://doi.org/10.1109/scam55253.2022.00015)

## When to cite this paper

Cite this paper when detecting One-Lane and active-resource N-Lane Bridge performance antipatterns with system-level tracing.

- LTTng 2.12.3 and Trace Compass critical-path analysis with scheduling, syscall, interrupt, and call-stack events.
- Firefox PDF.js and InDebitO case studies that distinguish memory, CPU, I/O, and futex causes of nonlinear latency.
- Measured CPU/I/O tracing overhead and heuristic limitations for layered multi-threaded systems.

## Citation

### APA 7

VanDonge, R., & Ezzati-Jivan, N. (2022). N-Lane Bridge Performance Antipattern Analysis Using System-Level Execution Tracing. In IEEE Working Conference on Source Code Analysis and Manipulation (SCAM) (pp. 83-93). https://doi.org/10.1109/scam55253.2022.00015

### IEEE

R. VanDonge and N. Ezzati-Jivan, "N-Lane Bridge Performance Antipattern Analysis Using System-Level Execution Tracing," in IEEE Working Conference on Source Code Analysis and Manipulation (SCAM), pp. 83-93, 2022, doi: 10.1109/scam55253.2022.00015

```bibtex
@inproceedings{ezzatiJivan2022nlane,
  author = {Riley VanDonge and Naser Ezzati-Jivan},
  title = {N-Lane Bridge Performance Antipattern Analysis Using System-Level Execution Tracing},
  year = {2022},
  booktitle = {IEEE Working Conference on Source Code Analysis and Manipulation (SCAM)},
  pages = {83-93},
  publisher = {IEEE},
  doi = {10.1109/scam55253.2022.00015},
  url = {https://doi.org/10.1109/scam55253.2022.00015}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-21
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: IEEE/DBLP metadata for 10.1109/scam55253.2022.00015; N-Lane Bridge PDF pp. 1-7: OLB/NLB definitions, LTTng 2.12.3, Trace Compass, tracepoints, critical-path and response-time method; N-Lane Bridge PDF pp. 7-9: Firefox 65.0/PDF.js and InDebitO cases, latency causes, and NLB classification; N-Lane Bridge PDF pp. 9-10: CPU/I/O overhead, trace sizes, offline analysis cost, threats, and future work; Local PDF hash verified in pdf-evidence/notes/n-lane-bridge-performance-antipatterns.md and extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
