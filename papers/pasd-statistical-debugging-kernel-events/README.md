# PASD: A Performance Analysis Approach Through the Statistical Debugging of Kernel Events

**2023 | IEEE Working Conference on Source Code Analysis and Manipulation (SCAM) | conference paper**

**Authors:** Mohammed Adib Khan, Morteza Noferesti, Naser Ezzati-Jivan

**Core contribution:** PASD uses Linux kernel-event traces, Perf call stacks, and statistical debugging to rank functions associated with performance problems without application-source instrumentation.

## Four-part research summary

### 1. Problem and motivation

Performance problems may be visible only in runtime behavior and may require function-level explanation, but source instrumentation and machine-learning models can add overhead or miss the dynamic kernel context. PASD asks whether kernel events and call stacks can support statistical debugging without instrumenting application source code.

### 2. Method and contribution

PASD collects kernel events and call stacks with Perf, including system calls such as futex, scheduler wakeup/switch, interrupt and softirq events, block-layer request events, and network receive events. It defines duration-based success and failure thresholds from the mean and standard deviation of system-call durations, then assigns each function D-Success, D-Failed, O-Success, and O-Failed indicators. A function is ranked by Increase = Failure - Context, where Failure is its failed-context proportion and Context is its occurrence in failed executions. The analysis preserves negative Increase values because interactions and runtime predicates can make a function less suspicious.

### 3. Findings and evidence

Three Firefox/GNU utility case studies demonstrate the workflow. For Firefox CSS animation Bug 1637586, a 30-second Perf trace contains 38,418 call stacks and 1,316 unique functions; the highest-ranked WebRenderCommandBuilder functions agree with the reported bug area. A Tripadvisor CPU case produces 398,297 call stacks in 110 seconds and ranks gethostbyaddr_r, pthread_cond_signal, and getifaddrs_internal, pointing to network/retry and thread behavior. A slow colored GNU ls case analyzes 276,412 call-stack records and connects the latency to metadata operations such as statfs and fstatat. Offline analysis of 1,000 events takes reported averages of 54–330 ms across the cases.

### 4. Limitations and future directions

**Limitations:** The method depends on the chosen event set, duration thresholds, call-stack quality, and the interpretation of ranked functions. The case studies are small, issue-driven examples rather than a broad benchmark, and the paper reports marginal collection cost without an end-to-end production overhead study. Ranking is evidence for investigation, not proof that the top function is the sole causal fix.

**Future work:** The authors identify reducing manual intervention, increasing automation, using machine learning to predict performance and configure tracing dynamically, and extending the method to database systems, servers, and parallel software.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [anomaly-detection](../../topics/anomaly-detection.md)

**Keywords:** statistical debugging | Linux kernel tracepoints | [Perf](../../keywords/perf.md) | perf record | call stacks | [sched_switch](../../keywords/sched-switch.md) | Firefox | Coreutils | ls | Bug 1637586 | Bug 1565019 | function suspect ranking

## Versions and source links

- [Published version](https://doi.org/10.1109/scam59687.2023.00025) - published

**Canonical source:** [https://doi.org/10.1109/scam59687.2023.00025](https://doi.org/10.1109/scam59687.2023.00025)

## Identifiers

[DOI 10.1109/scam59687.2023.00025](https://doi.org/10.1109/scam59687.2023.00025)

## When to cite this paper

Cite this paper when your work performs statistical debugging from kernel events and call stacks without instrumenting application source code.

- For the Failure, Context, and Increase indicators used to rank suspicious functions.
- For thresholding system-call duration into successful, failed, and ambiguous executions.
- For Perf-based analysis of scheduler, futex, block, interrupt, network, and syscall evidence.
- For the Firefox and GNU ls case studies, with the reported call-stack volumes and analysis times.

## Citation

### APA 7

Khan, M. A., Noferesti, M., & Ezzati-Jivan, N. (2023). PASD: A Performance Analysis Approach Through the Statistical Debugging of Kernel Events. In IEEE Working Conference on Source Code Analysis and Manipulation (SCAM) (pp. 151-161). https://doi.org/10.1109/scam59687.2023.00025

### IEEE

M. A. Khan, M. Noferesti, and N. Ezzati-Jivan, "PASD: A Performance Analysis Approach Through the Statistical Debugging of Kernel Events," in IEEE Working Conference on Source Code Analysis and Manipulation (SCAM), pp. 151-161, 2023, doi: 10.1109/scam59687.2023.00025

```bibtex
@inproceedings{ezzatiJivan2023pasda,
  author = {Mohammed Adib Khan and Morteza Noferesti and Naser Ezzati-Jivan},
  title = {PASD: A Performance Analysis Approach Through the Statistical Debugging of Kernel Events},
  year = {2023},
  booktitle = {IEEE Working Conference on Source Code Analysis and Manipulation (SCAM)},
  pages = {151-161},
  publisher = {IEEE},
  doi = {10.1109/scam59687.2023.00025},
  url = {https://doi.org/10.1109/scam59687.2023.00025}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Exact full paper PDF reviewed: PASD, IEEE SCAM 2023, DOI 10.1109/SCAM59687.2023.00025.; Perf event set, threshold equations, function indicators, all three case studies, trace sizes, and offline analysis timings were checked against the paper.
- Machine-readable record: [paper.json](./paper.json)
