# Execution trace-based model verification to analyze multicore and real-time systems

**2022 | Concurrency and Computation: Practice and Experience | research paper**

**Authors:** Raphaël Beamonte, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper combines model-based quantitative constraints with user-space and kernel execution traces to automatically identify likely causes of real-time and multicore constraint violations.

## Four-part research summary

### 1. Problem and motivation

Large execution traces can reveal timing and scheduling failures, but interpreting millions of events is slow and requires deep operating-system knowledge. Model checking can identify a violated specification without explaining whether preemption, blocking, a system call, scheduling, or application code caused it.

### 2. Method and contribution

A developer-specified state-machine model contains states, transitions, metric variables, and quantitative constraints. The method extracts model instances from user-space and kernel traces, labels constraint occurrences valid/invalid/uncertain, excludes uncertain cases, and compares sampled valid and invalid instances. It uses 95% confidence, a 5% margin of error, and reservoir sampling. Elements such as RUNNING, BLOCKED, PREEMPTED, and SYSCALL are converted into duration sets and merged into interval sets; directional edit-distance-like comparisons, occurrence/distance weights, differential interval sets, and responsibility scores identify the most likely causes. Follow-up analyses include process state, critical path, priority inheritance, state-machine state, CPU-top, and CPU-frequency analysis. LTTng/LTTng-UST is selected as the primary low-impact kernel/user-space tracing stack, with CTF events and a common clock; the cyclictest case uses LTTng snapshot mode.

### 3. Findings and evidence

Four case studies diagnose low-priority JACK2, in-kernel wake-lock priority inversion, bad user-space code, and a preempted cyclictest waker. JACK2 analysis attributes 96.65% of excess time to WAKING and 96.51% to process preemption, identifying the higher-priority cpuburn process. The wakelock analysis identifies abnormal blocking on open, priority inheritance, and preemption by highprio1. The user-space case locates the excess time in step3. The cyclictest case on an NVIDIA Jetson TK1 traces a 7-ms outlier through rt_sigtimedwait, preempted ktimersoftd/3, and the irq/154-hpd HDMI hot-plug handler. The four traces contain 321/419,164, 42/194,997, 29/89,840, and 41,677/208,489 UST/kernel events. On an Intel Core i7-4790 at 3.6 GHz with 32 GiB DDR3, sampling preserves the highest responsibility within 0.1% in 100-run comparisons while reducing process-state analysis from 23,925.75 to 15,311.02 ms for JACK2 and from 103,119.10 to 7,124.76 ms for cyclictest.

### 4. Limitations and future directions

**Limitations:** The method depends on a developer-provided model and suitable tracepoints, and generated or selected valid baselines may not cover complex or changing behavior. Sampling is an approximation, missing snapshot data can cause instances to be dropped, and full analysis remains sensitive to the number of trace events, model instances, and variable changes. The evaluation uses four controlled/common real-time cases rather than a broad cross-platform workload study.

**Future work:** The paper proposes automatically setting constraint values from traces. It does not establish online learning, modern OpenTelemetry support, or automatic model generation for this publication. Supporting data are available from the corresponding author upon reasonable request.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [kernel-tracing](../../topics/kernel-tracing.md) | [multicore-systems](../../topics/multicore-systems.md) | [trace-analysis](../../topics/trace-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [lttng](../../topics/lttng.md)

**Keywords:** [model-based constraints](../../keywords/model-based-constraints.md) | [execution tracing](../../keywords/execution-tracing.md) | user-space traces | [kernel traces](../../keywords/kernel-traces.md) | [LTTng](../../keywords/lttng.md) | [LTTng-UST](../../keywords/lttng-ust.md) | [Common Trace Format](../../keywords/common-trace-format.md) | [Trace Compass](../../keywords/trace-compass.md) | reservoir sampling | [critical-path analysis](../../keywords/critical-path-analysis.md) | [JACK2](../../keywords/jack2.md) | [cyclictest](../../keywords/cyclictest.md) | priority inversion | CPUTop

## Versions and source links

- [Published version](https://doi.org/10.1002/cpe.6974) - published

**Canonical source:** [https://doi.org/10.1002/cpe.6974](https://doi.org/10.1002/cpe.6974)

## Identifiers

[DOI 10.1002/cpe.6974](https://doi.org/10.1002/cpe.6974)

## When to cite this paper

Cite this paper when using model-based quantitative constraints and user-space/kernel traces to diagnose real-time or multicore execution problems.

- LTTng/LTTng-UST and CTF-based correlation of kernel and user-space execution evidence.
- Reservoir-sampled valid/invalid model instances, interval-set comparison, and responsibility scoring for likely causes.
- JACK2, wake-lock priority inversion, bad user-space code, and cyclictest case studies with trace-size, runtime, and sampling results.

## Citation

### APA 7

Beamonte, R., Ezzati-Jivan, N., & Dagenais, M. R. (2022). Execution trace-based model verification to analyze multicore and real-time systems. Concurrency and Computation: Practice and Experience. https://doi.org/10.1002/cpe.6974

### IEEE

R. Beamonte, N. Ezzati-Jivan, and M. R. Dagenais, "Execution trace-based model verification to analyze multicore and real-time systems," in Concurrency and Computation: Practice and Experience, 2022, doi: 10.1002/cpe.6974

```bibtex
@inproceedings{ezzatiJivan2022executiontrace,
  author = {Raphaël Beamonte and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Execution trace-based model verification to analyze multicore and real-time systems},
  year = {2022},
  booktitle = {Concurrency and Computation: Practice and Experience},
  doi = {10.1002/cpe.6974},
  url = {https://doi.org/10.1002/cpe.6974}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: DBLP/DOI bibliographic record for 10.1002/cpe.6974; author identity matched to Naser Ezzati-Jivan in the local research catalog; Publisher full text viewer pp. 1-3: problem, LTTng/LTTng-UST selection, CTF/common-clock rationale, and related tracing/model-analysis tools; Publisher full text viewer pp. 4-13: state-machine model, constraint statuses, 95%/5% sampling, reservoir sampling, interval-set extraction, distance/weight/differential analysis, and responsibility scores; Publisher full text viewer pp. 13-20: JACK2, wakelock, userspace, and cyclictest case studies, including 96.65%/96.51% JACK2 attribution and the Jetson/HDMI cyclictest diagnosis; Publisher full text viewer pp. 20-24: i7-4790/32 GiB platform, trace sizes, 100-run sampling comparison, analysis timings, and scalability; Publisher full text viewer p. 25: conclusion, data-availability statement, and future direction; No local PDF hash is claimed: the Wiley PDF link redirected to an abstract/access page and the ResearchGate publisher viewer exposed the full 26-page text but did not provide a downloadable file in this run.
- Machine-readable record: [paper.json](./paper.json)
