# Performance Evaluation of Complex Multi-Thread Applications Through Execution Path Analysis

**2022 | Performance Evaluation | journal article**

**Authors:** Majid Rezazadeh, Naser Ezzati-Jivan, Seyed Vahid Azhari, Michel R. Dagenais

**Core contribution:** This work investigates execution-path analysis as a way to evaluate complex multi-thread applications.

## Four-part research summary

### 1. Problem and motivation

Rare latency problems in complex multithreaded applications are difficult to reproduce and often depend on interactions among application tasks, threads, scheduling, locks, interrupts, and memory or I/O. Chromium's built-in tracer provides user-level visibility but has millisecond timing, finite-buffer limitations, and little kernel scheduling context.

### 2. Method and contribution

The paper presents a Chromium-focused multilevel tracing and analysis pipeline. Chromium user events are redirected into LTTng's Common Trace Format, while LTTng collects synchronized kernel events with nanosecond timestamps; the implementation adds an LTTng exporter and converts begin/end events into analyzable durations. Trace Compass supplies the state-system and kernel critical-path infrastructure. The Chromium Execution Graph Construction algorithm extends the graph with user-level task events such as TakeTask, RunTask, OnTaskStarted/Completed, navigation, mouse, and keyboard events, and combines them with scheduler, timer, interrupt, softirq, and network events. An XML analysis fills user-level detail into the kernel critical path for root-cause inspection.

### 3. Findings and evidence

Three Chromium jank cases are reproduced. A GPU-related case exposes 100–400 ms membarrier calls on the main thread and traces the cause to the slow RCU/liburcu path fixed in later versions. A second view shows long UI-thread futex waits caused by lock contention with Chrome_IO. A close-tab case reports a 911 ms stall, approximately 2,700 queued tasks, and numerous page faults; the combined view links the latency to renderer-process swapping and slow disk reads, which user-level Chromium traces alone could not explain. The evaluation uses an Intel Core i7-7820X/32 GB/Ubuntu 16.04.6/Kernel 4.15 system, LTTng 2.11, and Chromium 73.0.3672.0. Opening-tab averages for 50–200 executions rise from 46–110 ms without tracing to 62–147 ms for the heaviest multilevel configuration, with full-range error bars reported in the source.

### 4. Limitations and future directions

**Limitations:** This is a methodology and case-study evaluation rather than a broad benchmark of Chromium versions or applications. The data collection and critical-path pipeline require application-specific Chromium adaptation and selected event sets; other applications may have different security, task, and synchronization mechanisms. The paper focuses on latency/jank and does not address non-performance functional failures. The inspected evidence is a complete author manuscript source rather than a publisher PDF, so exact version-specific implementation details should be cited with that boundary.

**Future work:** The authors propose machine-learning methods to group similar janks and compare their call stacks with normal executions. They also identify memory-leak detection as an unaddressed application of the framework.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [performance-analysis](../../topics/performance-analysis.md) | [trace-analysis](../../topics/trace-analysis.md) | [multicore-systems](../../topics/multicore-systems.md) | [performance-engineering](../../topics/performance-engineering.md)

**Keywords:** multi-thread applications | [execution paths](../../keywords/execution-paths.md) | performance evaluation | thread behavior

## Versions and source links

- [Published version](https://doi.org/10.1016/j.peva.2022.102289) - published

**Canonical source:** [https://doi.org/10.1016/j.peva.2022.102289](https://doi.org/10.1016/j.peva.2022.102289)

## Identifiers

[DOI 10.1016/j.peva.2022.102289](https://doi.org/10.1016/j.peva.2022.102289)

## When to cite this paper

Cite this paper when combining Chromium user-level events with LTTng kernel evidence to explain multithreaded browser latency and jank.

- For redirecting Chromium trace events into synchronized LTTng/CTF data and using Trace Compass for analysis.
- For extending a kernel execution graph and critical path with Chromium task, navigation, input, and user-action states.
- For the membarrier, UI/Chrome_IO futex contention, and close-tab page-fault case studies.
- For the application-specific instrumentation and controlled Chromium/LTTng overhead boundary.

## Citation

### APA 7

Rezazadeh, M., Ezzati-Jivan, N., Azhari, S. V., & Dagenais, M. R. (2022). Performance Evaluation of Complex Multi-Thread Applications Through Execution Path Analysis. Performance Evaluation, 155-156, 102289. https://doi.org/10.1016/j.peva.2022.102289

### IEEE

M. Rezazadeh, N. Ezzati-Jivan, S. V. Azhari, and M. R. Dagenais, "Performance Evaluation of Complex Multi-Thread Applications Through Execution Path Analysis," Performance Evaluation, vol. 155-156, Art. no. 102289, 2022, doi: 10.1016/j.peva.2022.102289

```bibtex
@article{ezzatiJivan2022performanceevaluation,
  author = {Majid Rezazadeh and Naser Ezzati-Jivan and Seyed Vahid Azhari and Michel R. Dagenais},
  title = {Performance Evaluation of Complex Multi-Thread Applications Through Execution Path Analysis},
  year = {2022},
  journal = {Performance Evaluation},
  volume = {155-156},
  pages = {102289},
  eid = {102289},
  publisher = {Elsevier BV},
  issn = {0166-5316},
  doi = {10.1016/j.peva.2022.102289},
  url = {https://doi.org/10.1016/j.peva.2022.102289}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Complete author author-manuscript manuscript source reviewed for the published record: Performance Evaluation of Complex Multi-Thread Applications Through Execution Path Analysis, Performance Evaluation 2022, DOI 10.1016/j.peva.2022.102289.; The abstract, LTTng/LTTng-UST collection method, Chromium Execution Graph Construction algorithm, three jank cases, experimental environment, overhead figure values, limitations, and conclusion were checked against the source.
- Machine-readable record: [paper.json](./paper.json)
