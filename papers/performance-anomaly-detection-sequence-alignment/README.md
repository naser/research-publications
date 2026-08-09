# Performance Anomaly Detection through Sequence Alignment of System-Level Traces

**2022 | 30th International Conference on Program Comprehension (ICPC) | conference paper**

**Authors:** Madeline Janecek, Naser Ezzati-Jivan, Abdelwahab Hamou-Lhadj

**Core contribution:** The framework combines critical-path extraction, coarse anomaly checks, OPTICS execution clustering, and MUSCLE multiple sequence alignment to localize performance differences in system-level traces.

## Four-part research summary

### 1. Problem and motivation

Kernel traces provide detailed performance evidence but can contain millions of events and impose collection/analysis cost. The paper seeks offline, black-box anomaly detection and localization without application-specific instrumentation (pp. 1-2).

### 2. Method and contribution

LTTng records kernel events and contexts. sched_switch, sched_wakeup, interrupt entry/exit, high-resolution timer entry/exit, and softirq entry/exit events form execution states/graphs; blocking edges are recursively replaced by waking threads to obtain a critical path. Count vectors represent path structure and duration vectors represent performance. Average/probability checks identify coarse anomalies, OPTICS clusters execution types, silhouette scores pair sample and normal clusters, and MUSCLE aligns state strings with durations for localization (pp. 3-8).

### 3. Findings and evidence

The evaluation uses VirtualBox 6.1.18 VMs with two CPUs, Ubuntu 20.04.1, Linux kernel 5.8.0, and LTTng 2.11.2; the userspace case uses Python 3.8.5 and the container case uses Docker 20.10.7 with Ubuntu 20.04 images and GNU Wget (pp. 8-9). Over ten executions, no tracing averages 1,076.50 ms, full kernel tracing 1,329.26 ms (+23.479%), and minimal tracing 1,128.08 ms (+4.79145%) (p. 8, Table 1). The userspace case has about 100 normal and 10 bug-injected executions, 2-3 seconds longer on average, and 86.67% cluster assignment; the container case identifies a 10%-CPU restriction and short preempted states (pp. 8-10).

### 4. Limitations and future directions

**Limitations:** Offline/post-mortem operation, dependence on normal comparison data and delimiters, threshold/clustering choices, and two controlled case studies limit generalization. The method localizes evidence but does not automatically prove a unique root cause.

**Future work:** Add call-stack tracing for more precise root-cause localization and investigate deep-learning methods (p. 10).

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [performance-analysis](../../topics/performance-analysis.md) | [trace-analysis](../../topics/trace-analysis.md)

**Keywords:** sequence alignment | MUSCLE | OPTICS | [critical path](../../keywords/critical-path.md) | [system-level traces](../../keywords/system-level-traces.md) | performance anomalies | [LTTng](../../keywords/lttng.md) | [Docker](../../keywords/docker.md) | execution clustering | [trace overhead](../../keywords/trace-overhead.md)

## Versions and source links

- [Published version](https://doi.org/10.1145/3524610.3527898) - published
- [Public ACM PDF](https://dl.acm.org/doi/pdf/10.1145/3524610.3527898) | [PDF](https://dl.acm.org/doi/pdf/10.1145/3524610.3527898) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3524610.3527898](https://doi.org/10.1145/3524610.3527898)

## Identifiers

[DOI 10.1145/3524610.3527898](https://doi.org/10.1145/3524610.3527898)

## When to cite this paper

Cite this paper when your work uses or compares black-box performance-anomaly detection from kernel traces using critical-path extraction instead of collecting all kernel events.

- For black-box performance-anomaly detection from kernel traces using critical-path extraction instead of collecting all kernel events.
- For the paired use of critical-path count vectors for execution-type clustering and duration vectors for performance comparison.
- For MUSCLE-based multiple alignment that distinguishes abnormal critical-path states from normal long waits.
- For the measured full-kernel (+23.479%) versus minimal-kernel (+4.79145%) tracing overhead comparison.

## Citation

### APA 7

Janecek, M., Ezzati-Jivan, N., & Hamou-Lhadj, A. (2022). Performance Anomaly Detection through Sequence Alignment of System-Level Traces. In 30th International Conference on Program Comprehension (ICPC) (pp. 264-274). https://doi.org/10.1145/3524610.3527898

### IEEE

M. Janecek, N. Ezzati-Jivan, and A. Hamou-Lhadj, "Performance Anomaly Detection through Sequence Alignment of System-Level Traces," in 30th International Conference on Program Comprehension (ICPC), pp. 264-274, 2022, doi: 10.1145/3524610.3527898

```bibtex
@inproceedings{ezzatiJivan2022performanceanomaly,
  author = {Madeline Janecek and Naser Ezzati-Jivan and Abdelwahab Hamou-Lhadj},
  title = {Performance Anomaly Detection through Sequence Alignment of System-Level Traces},
  year = {2022},
  booktitle = {30th International Conference on Program Comprehension (ICPC)},
  pages = {264-274},
  publisher = {ACM},
  doi = {10.1145/3524610.3527898},
  url = {https://doi.org/10.1145/3524610.3527898}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Private full PDF read: pdf-evidence/notes/performance-anomaly-detection-sequence-alignment.md; Performance-anomaly PDF pp. 2-8: LTTng, critical-path extraction, vectorization, average/probability tests, OPTICS, cluster pairing, and MUSCLE alignment; Performance-anomaly PDF pp. 8-10: VirtualBox/Ubuntu/LTTng environment, overhead, Python case, Docker case, and diagnosis; Performance-anomaly PDF p. 10: conclusion and future work; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
