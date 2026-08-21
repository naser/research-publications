# System Execution Path Profiling Using Hardware Performance Counters

**2021 | 2021 IEEE International Systems Conference (SysCon) | conference paper**

**Authors:** Francis Giraldeau, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The work bridges kernel-level hardware-counter sampling and user-space interpreter state so execution-path profiling can attribute performance evidence to interpreted code.

## Four-part research summary

### 1. Problem and motivation

Kernel execution paths expose where distributed or heterogeneous tasks wait, but hardware-counter samples normally identify native instructions and lose the connection to interpreted-language statements; profiling inside the kernel also risks violating runtime isolation and NMI-time constraints.

### 2. Method and contribution

The related public chapter uses Linux perf to receive PMU overflow notifications in the kernel NMI handler, forwards an event to user space with a signal, and implements PyPMU for CPython. User-space code records interpreter/call-stack state; LTTng-UST writes the samples to a ring buffer, while online and offline libunwind-based stack recovery are compared. The chapter also relates the profiler to kernel-trace execution paths and reports an evaluation on an Intel i7-4770 system with 16 GB RAM, Ubuntu 14.04, and Linux 3.13.

### 3. Findings and evidence

The related chapter reports 0.1% RMS profile error on its calibrated function benchmark, 2.93 microseconds average event-forwarding cost over 10^6 samples, and 4.15 microseconds for counter management and signal setup. It reports online unwinding as preferable under the tested depth limit, LTTng-UST as at least 25 times faster than built-in Python traceback recording, and approximately 25% lower trace storage in that comparison. These measurements come from the public thesis chapter and are not claimed as independently rechecked against the IEEE SysCon PDF.

### 4. Limitations and future directions

**Limitations:** The original Overleaf project contained an extraneous compile-log fragment; a separate cleanup copy removed it, recompiled successfully, and added the IEEE author-manuscript notice. The signed SysCon publication agreement and any venue-specific self-archiving wording were not independently inspected. The public full-text route remains a related 2015 thesis chapter rather than the standalone IEEE SysCon manuscript. The evaluation is centered on CPython, one Linux environment, synthetic/calibrated profiling workloads, and the reported monitoring comparisons; broader runtimes, hardware generations, and production distributed workloads remain unverified.

**Future work:** The chapter identifies integration with task-execution-path extraction and Trace Compass, support for additional runtimes, replacing signals with user-level interrupts, handling signal-blocking limitations, and reducing redundant call-stack trace data as future directions.

## Abstract

The related public chapter describes low-intrusion execution-path profiling that forwards hardware performance-counter overflows from the kernel to user space, where a CPython profiler records interpreted-code call stacks and LTTng-UST stores the samples.

## Topics and keywords

**Tags:** [performance-analysis](../../topics/performance-analysis.md) | [resource-analysis](../../topics/resource-analysis.md) | [multicore-systems](../../topics/multicore-systems.md) | [system-tracing](../../topics/system-tracing.md)

**Keywords:** [execution paths](../../keywords/execution-paths.md) | hardware performance counters | critical-path profiling | CPython | PyPMU | Linux perf | perf NMI | [LTTng-UST](../../keywords/lttng-ust.md) | libunwind | sampling | SysCon 2021

## Versions and source links

- [Published version](https://doi.org/10.1109/SYSCON48628.2021.9447121) - published
- [Related public thesis chapter plus cleaned local Overleaf manuscript candidate with IEEE rights notice](https://core.ac.uk/download/pdf/213619806.pdf) | [PDF](https://core.ac.uk/download/pdf/213619806.pdf) - public_related_full_text

**Canonical source:** [https://doi.org/10.1109/SYSCON48628.2021.9447121](https://doi.org/10.1109/SYSCON48628.2021.9447121)

## Identifiers

[DOI 10.1109/SYSCON48628.2021.9447121](https://doi.org/10.1109/SYSCON48628.2021.9447121)

## When to cite this paper

Cite this paper when its specific method, evidence, or benchmark is directly relevant.

- The paper's method is directly relevant.
- The paper's evidence or benchmark is directly relevant.

## Citation

### APA 7

Giraldeau, F., Ezzati-Jivan, N., & Dagenais, M. R. (2021). System Execution Path Profiling Using Hardware Performance Counters. In 2021 IEEE International Systems Conference (SysCon) (pp. 1-8). https://doi.org/10.1109/SYSCON48628.2021.9447121

### IEEE

F. Giraldeau, N. Ezzati-Jivan, and M. R. Dagenais, "System Execution Path Profiling Using Hardware Performance Counters," in 2021 IEEE International Systems Conference (SysCon), pp. 1-8, 2021, doi: 10.1109/SYSCON48628.2021.9447121

```bibtex
@inproceedings{ezzatiJivan2021systemexecution,
  author = {Francis Giraldeau and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {System Execution Path Profiling Using Hardware Performance Counters},
  year = {2021},
  booktitle = {2021 IEEE International Systems Conference (SysCon)},
  pages = {1-8},
  publisher = {IEEE},
  doi = {10.1109/SYSCON48628.2021.9447121},
  url = {https://doi.org/10.1109/SYSCON48628.2021.9447121}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: DOI: https://doi.org/10.1109/SYSCON48628.2021.9447121; DBLP record: https://dblp.org/rec/conf/syscon/GiraldeauJD21; Official SysCon program: https://events-siteplex.confcats.io/syscon2021/wp-content/uploads/sites/19/2021/04/syscon21-program.pdf; Public thesis PDF, Chapter 6 pp. 93--110: https://core.ac.uk/download/pdf/213619806.pdf; Public thesis pp. 93--96: problem, PMU/perf-NMI architecture, PyPMU contributions, and interpreter boundary; Public thesis pp. 101--106: accuracy, event-forwarding cost, stack unwinding, LTTng-UST comparison, and profiling overhead; Public thesis pp. 109--110: Trace Compass integration, user-level interrupt direction, signal limitations, and conclusion; Overleaf project: https://www.overleaf.com/project/5e01a488862790000145cf86; Original Overleaf PDF: 8 pages; exact title/authors/abstract matched, but an extraneous compile-log fragment was embedded in the body; Separate cleanup Overleaf copy: source fragment replaced, IEEE author-manuscript notice added, recompiled successfully, and cleaned 8-page PDF inspected on first and final pages; Rights gate: agreement-specific SysCon self-archiving terms still require confirmation before arXiv submission; do not use the IEEE Version of Record; Private batch report: reports/parallel-batch-03.md
- Machine-readable record: [paper.json](./paper.json)
