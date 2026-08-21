# N-Lane Bridge Performance Antipattern Analysis Using System-Level Execution Tracing

**2022 | IEEE Working Conference on Source Code Analysis and Manipulation (SCAM) | conference paper**

**Authors:** Riley VanDonge, Naser Ezzati-Jivan

**Core contribution:** N-Lane Bridge extends One-Lane Bridge analysis to active-resource bottlenecks and uses LTTng system-level traces to distinguish application-caused congestion from external interference.

## Four-part research summary

### 1. Problem and motivation

One-Lane Bridge analysis identifies passive-resource bottlenecks, but active-resource contention such as CPU or disk use by the target application can require different evidence from external congestion. The paper introduces a way to distinguish an active-resource bottleneck caused by the application from external active-resource congestion.

### 2. Method and contribution

The N-Lane Bridge analysis uses system-level LTTng 2.12.3 traces without application-source instrumentation. Repeated workload runs increase the number of users until response time grows by roughly an order of magnitude, a resource saturates, or the experiment's stopping condition is met. A one-tailed unequal-variance two-sample t-test at alpha=5% identifies sustained response-time changes. Scheduler states, relevant disk system calls, call stacks, ELF symbol mapping, and Trace Compass views decompose latency into running, preempted/CPU-wait, passive-resource-blocked, and active-resource-blocked time.

### 3. Findings and evidence

The Firefox PDF.js case reports average render times of 31.6 seconds, 2 minutes 16.8 seconds, and 5 minutes 43.0 seconds for one, two, and three windows; the corresponding t-statistics exceed the reported critical values. The largest latency contributions include poll blocking (39.195 seconds, 54.49%), CPU preemption (19.896 seconds, 27.66%), and futex wait (7.802 seconds, 10.85%), supporting active CPU and paging/resource contention as N-Lane Bridge evidence. An InDebitO Flask application under 36 simultaneous JMeter requests also exhibits an approximately tenfold login slowdown attributed to CPU active-resource contention. CPU tracing overhead is reported below 0.01%; I/O throughput falls about 7.8% in the stress test.

### 4. Limitations and future directions

**Limitations:** The method is layered and heuristic: it can identify a congested active resource but may not identify the complete application root cause. False negatives are possible, analysis time grows with thread count, and I/O tracing has a larger throughput and processing cost than CPU tracing. The evaluation uses a Firefox bug and a Flask application in a VirtualBox/Ubuntu testbed rather than production workloads.

**Future work:** The paper proposes additional performance antipatterns, including Traffic Jam and Ramp, and suggests extending the analysis to software aging and security antipatterns. The authors provide an analysis-code repository for the N-Lane Bridge study.

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

Cite this paper when distinguishing active-resource performance antipatterns caused by the target application from external resource congestion.

- For LTTng-only, system-level detection of active CPU/disk bottlenecks without source instrumentation.
- For repeated workload escalation plus a one-tailed unequal-variance t-test to identify sustained latency growth.
- For decomposing latency into CPU preemption, passive blocking, active blocking, and other thread states.
- For the Firefox PDF.js and InDebitO results and their tracing/analysis overhead trade-offs.

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

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Exact full paper PDF reviewed: N-Lane Bridge, IEEE SCAM 2022, DOI 10.1109/SCAM55253.2022.00015.; LTTng version, workload escalation, statistical test, Firefox and InDebitO cases, latency decomposition, and overhead measurements were checked against the paper's setup and results.
- Machine-readable record: [paper.json](./paper.json)
