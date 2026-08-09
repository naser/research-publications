# AltOOM: A Data-driven Out of Memory Root Cause Identification Strategy

**2023 | IEEE International Conference on Big Data | conference paper**

**Authors:** Pranjal Chakraborty, Naser Ezzati-Jivan, Vahid Azhari, François Tetreault

**Core contribution:** AltOOM combines early memory-pressure forecasting with selective process-level profiling to identify the process most responsible for an impending out-of-memory event.

## Four-part research summary

### 1. Problem and motivation

Linux's reactive OOM killer can terminate a high-memory process even when a lower-memory process is the one whose memory usage is growing; resource-constrained systems need earlier warning and lower-overhead process attribution.

### 2. Method and contribution

AltOOM samples 34 system-level signals at 0.5-second intervals - 28 virtual-memory statistics, three memory-related system calls (brk, sbrk, and mmap), and three kernel events (kmalloc, mm_page_alloc, and vmscan) - using perf and sar. It labels pressure at %memused >= 85%, compares SVM, vanilla DNN, and bidirectional-LSTM predictors, filters 34 features to 15, then uses burst-collected process-level allocation signals and moving-average growth ranking after an alert.

### 3. Findings and evidence

In the reported evaluation, the feature-filtered DNN reaches 0.82 accuracy for (n,k)=(4,3) and 0.81 for (3,3); the abstract reports 85% memory-pressure forecasting accuracy. AltOOM process identification reaches 0.56-0.83 as the burst count increases from 3 to 7, versus 0.42 for the Linux OOM killer. A Firefox PDF-preview case reports 0.83 and 0.79 forecasting accuracy for (4,3) and (3,3), respectively.

### 4. Limitations and future directions

**Limitations:** The method can miss gradual memory buildup when only three timestamps (1.5 seconds) are observed. Fixed-rate monitoring creates overhead, and the evaluation centers on generated pressure scenarios plus a Firefox case rather than broad production-device coverage.

**Future work:** Evaluate adaptive sampling of rates, metrics, and metric groups, and implement actions such as controlling or adjusting the responsible process, terminating it, or restarting the system.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [resource-analysis](../../topics/resource-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [system-tracing](../../topics/system-tracing.md) | [predictive-monitoring](../../topics/predictive-monitoring.md)

**Keywords:** out-of-memory | OOM diagnosis | data-driven RCA | resource analysis | memory pressure forecasting | process-level profiling | [Perf](../../keywords/perf.md) | sar

## Versions and source links

- [Published version](https://doi.org/10.1109/bigdata59044.2023.10386937) - published

**Canonical source:** [https://doi.org/10.1109/bigdata59044.2023.10386937](https://doi.org/10.1109/bigdata59044.2023.10386937)

## Identifiers

[DOI 10.1109/bigdata59044.2023.10386937](https://doi.org/10.1109/bigdata59044.2023.10386937)

## When to cite this paper

Cite this paper when studying proactive memory-pressure forecasting or process-level out-of-memory root-cause identification.

- Perf/sar-based collection of VM statistics, memory-related system calls, and kernel events for memory-pressure prediction.
- Burst-based process profiling and moving-average ranking for identifying the responsible process.
- Comparison with the Linux OOM killer and reported forecasting and process-identification accuracy in simulated and Firefox cases.

## Citation

### APA 7

Chakraborty, P., Ezzati-Jivan, N., Azhari, V., & Tetreault, F. (2023). AltOOM: A Data-driven Out of Memory Root Cause Identification Strategy. In IEEE International Conference on Big Data (pp. 1637-1646). https://doi.org/10.1109/bigdata59044.2023.10386937

### IEEE

P. Chakraborty, N. Ezzati-Jivan, V. Azhari, and F. Tetreault, "AltOOM: A Data-driven Out of Memory Root Cause Identification Strategy," in IEEE International Conference on Big Data, pp. 1637-1646, 2023, doi: 10.1109/bigdata59044.2023.10386937

```bibtex
@inproceedings{ezzatiJivan2023altooma,
  author = {Pranjal Chakraborty and Naser Ezzati-Jivan and Vahid Azhari and François Tetreault},
  title = {AltOOM: A Data-driven Out of Memory Root Cause Identification Strategy},
  year = {2023},
  booktitle = {IEEE International Conference on Big Data},
  pages = {1637-1646},
  publisher = {IEEE},
  doi = {10.1109/bigdata59044.2023.10386937},
  url = {https://doi.org/10.1109/bigdata59044.2023.10386937}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: DBLP/DOI bibliographic record for 10.1109/bigdata59044.2023.10386937; author identity matched to Naser Ezzati-Jivan in the local research catalog; AltOOM PDF pp. 1, 4-10: perf/sar collection, 34 metrics, 85% threshold, prediction models, burst ranking, evaluation tables, limitations, and future work; local AltOOM PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
