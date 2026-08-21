# PASD: A Performance Analysis Approach Through the Statistical Debugging of Kernel Events

**2023 | IEEE Working Conference on Source Code Analysis and Manipulation (SCAM) | conference paper**

**Authors:** Mohammed Adib Khan, Morteza Noferesti, Naser Ezzati-Jivan

**Core contribution:** PASD uses Linux kernel-event traces, Perf call stacks, and statistical debugging to rank functions associated with performance problems without application-source instrumentation.

## Four-part research summary

### 1. Problem and motivation

Application instrumentation may be unavailable or intrusive, while kernel-event behavior and call stacks contain evidence about functions correlated with performance degradation.

### 2. Method and contribution

PASD traces Linux tracepoints such as sched_switch, IRQ, block-I/O, and network events and collects call stacks with perf record -g. It defines event-interval metrics, labels successful/failed and normal/abnormal observations, computes Failure, Context, and Increase statistics, ranks functions by Increase, and prunes the bottom 15%.

### 3. Findings and evidence

Three cases cover Firefox CSS-animation Bug 1637586, Firefox Tripadvisor CPU-exhaustion Bug 1565019, and slow ls in very large directories. The analysis identifies WebRenderCommandBuilder functions for the first case, gethostbyaddr_r/pthread_cond_signal/getifaddrs_internal among the top functions for the second, and GI statfs/do lstat/print color indicator in the ls case. Reported offline analysis times are about 173, 330, and 54 ms per 1,000 events for the three cases.

### 4. Limitations and future directions

**Limitations:** The evidence consists of three reproduced bug cases and does not establish broad workload, kernel-version, or online-diagnosis generalization. The collection is low-level and source-free, but the reported cases still rely on call-stack symbols and selected trace events.

**Future work:** Reduce manual intervention, use machine learning to predict performance and configure tracing dynamically, and evaluate databases, servers, parallel processing, and other complex systems.

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

Cite this paper when using kernel events and Perf call stacks for source-free statistical performance debugging.

- Linux tracepoints and perf record -g for collecting kernel-event and call-stack evidence.
- Threshold-based Failure, Context, and Increase statistics for ranking suspicious functions.
- Firefox and ls bug-case studies with reported offline analysis cost per 1,000 events.

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

- Metadata verified: 2026-08-21
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: IEEE/DBLP metadata for 10.1109/scam59687.2023.00025; PASD PDF pp. 1-5: kernel-event tracing, Perf call stacks, metric thresholds, statistical debugging, and suspect ranking; PASD PDF pp. 6-9: Firefox and ls cases, reported functions, data volumes, and offline analysis cost; PASD PDF pp. 9-10: limitations and future-work boundary; Local PDF hash verified in pdf-evidence/notes/pasd-statistical-debugging-kernel-events.md and extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
