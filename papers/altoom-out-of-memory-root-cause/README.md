# AltOOM: A Data-driven Out of Memory Root Cause Identification Strategy

**2023 | IEEE International Conference on Big Data | conference paper**

**Authors:** Pranjal Chakraborty, Naser Ezzati-Jivan, Vahid Azhari, François Tetreault

**Core contribution:** AltOOM combines early memory-pressure forecasting with selective process-level profiling to identify the process most responsible for an impending out-of-memory event.

## Four-part research summary

### 1. Problem and motivation

The Linux OOM killer is reactive and primarily score-based: it can terminate a high-memory process without identifying the process whose memory is growing abnormally. Continuous fine-grained process monitoring is itself costly, so the paper targets early system-level warning followed by focused root-cause identification.

### 2. Method and contribution

ALTOOM uses two phases. An offline-trained classifier predicts impending memory pressure from 34 system metrics sampled every 0.5 seconds: 28 VM statistics, three memory-related system calls (brk, sbrk, mmap), and three kernel events (kmalloc, mm_page_alloc, vmscan). When an alert fires, the runtime samples the top m memory-consuming processes in bursts and ranks the likely cause using normalized moving averages of resource growth. The study compares Linear SVC, a vanilla dense neural network, and a bidirectional LSTM, then filters features with a dual-network feature-ranking procedure.

### 3. Findings and evidence

On the main generated-pressure data, the full 34-feature bidirectional LSTM reports accuracy 0.8713, F1 0.8752, precision 0.9171, sensitivity 0.8369, and specificity 0.9115; the vanilla dense model reports accuracy 0.8638 and the SVC 0.81. Feature filtration reduces 34 inputs to 15 while remaining within about one percentage point of the full model in the reported experiment. In a Ciena pressure evaluation, root-cause accuracy rises from 0.42 for the OOM killer to 0.56, 0.73, 0.78, 0.82, and 0.83 with three through seven burst snapshots. A Firefox Bug 1609631 reproduction reports early-warning accuracy 0.83 for the n=4,k=3 setting.

### 4. Limitations and future directions

**Limitations:** Pressure data are generated with sysbench and stress, and the browser case is a single Firefox reproduction; a live production deployment was not evaluated. A fixed observation/prediction window can miss gradual memory growth, and the root-cause stage only ranks the top m memory-consuming processes. The LSTM has a larger deployment footprint than the dense model, and the paper does not implement the operational action taken after a diagnosis.

**Future work:** The authors propose action policies such as limiting memory, terminating the responsible process, or restarting the system, together with adaptive sampling of frequency, metrics, and process groups. Longer observation windows and production validation are natural requirements before treating the reported ranking accuracy as an operational guarantee.

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

Cite this paper when your work predicts Linux memory pressure and then ranks the process responsible for an impending OOM event.

- For combining system-level early warning with burst-based process root-cause ranking.
- For using VM statistics, memory system calls, and kernel allocation/paging events as predictive features.
- For the 34-to-15 feature-filtration experiment and the SVC/DNN/BiLSTM comparison.
- For the burst-count trade-off in the Ciena pressure and Firefox reproduction cases.

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
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Exact full paper PDF reviewed: ALTOOM, IEEE BigData 2023, DOI 10.1109/BigData59044.2023.10386937.; Metrics, sampling interval, model results, feature filtration, pressure-generation protocol, Firefox reproduction, root-cause burst results, and limitations were checked against the paper's tables and evaluation text.
- Machine-readable record: [paper.json](./paper.json)
