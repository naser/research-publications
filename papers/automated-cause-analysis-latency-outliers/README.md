# Automated Cause Analysis of Latency Outliers Using System-Level Dependency Graphs

**2021 Â· IEEE International Conference on Software Quality, Reliability and Security (QRS) Â· conference paper**

**Authors:** Sneh Patel, Brendan Park, Naser Ezzati-Jivan, Quentin Fournier

**Core contribution:** The paper combines system-level dependency graphs with automated outlier detection to localize likely causes of latency anomalies.

## Four-part research summary

### 1. Problem and motivation

Latency problems in runtime systems are difficult to diagnose because logging and tracing often require manual inspection of many requests and their internal interactions.

### 2. Method and contribution

Each request is represented through a dependency graph describing interactions among threads and system resources. Density-based models and statistical calculations are then used to identify outliers before comparing their graph structures to locate suspicious dependencies.

### 3. Findings and evidence

The evaluation reports outlier-detection accuracy above 97%, suggesting that the approach can identify latency anomalies with limited manual screening in industry-oriented settings.

### 4. Limitations and future directions

The reported evidence is tied to the evaluated traces, models, and deployment conditions. Future work should test broader distributed workloads, quantify explanation quality separately from detection accuracy, and evaluate continuous online operation.

## Abstract

Detecting performance issues and identifying their root causes in the runtime is a challenging task. Typically, developers use methods such as logging and tracing to identify bottlenecks. These solutions are, however, not ideal as they are time-consuming and require manual effort. In this paper, we propose a method to automate the task of detecting latency outliers using system-level traces and then comparing them to identify the root cause(s). Our method makes use of dependency graphs to show internal interactions between threads and system resources. With these graphs, one can pinpoint where performance issues occur. However, a single trace can be composed of a large number of requests, each generating one graph. To automate the task of identifying outliers within the dataset, we use machine learning density-based models and statistical calculations such as -score. Our evaluation shows an accuracy greater than 97 % on outlier detection, making them appropriate for in-production servers and industry-level use cases.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) Â· [latency-analysis](../../topics/latency-analysis.md) Â· [root-cause-analysis](../../topics/root-cause-analysis.md) Â· [dependency-graphs](../../topics/dependency-graphs.md)

**Keywords:** [latency outliers](../../keywords/latency-outliers.md) Â· [system-level traces](../../keywords/system-level-traces.md) Â· [dependency graphs](../../keywords/dependency-graphs.md) Â· [density-based models](../../keywords/density-based-models.md) Â· [z-score](../../keywords/z-score.md) Â· [production diagnosis](../../keywords/production-diagnosis.md)

## Versions and source links

- [Published version](https://doi.org/10.1109/QRS54544.2021.00054) â€” published
- [Public preprint](https://arxiv.org/abs/2207.06515) Â· [PDF](https://arxiv.org/pdf/2207.06515) â€” public_full_text

**Primary source:** [https://doi.org/10.1109/QRS54544.2021.00054](https://doi.org/10.1109/QRS54544.2021.00054)

**Access status:** public_preprint_and_published_record. The published DOI is the canonical citation target; the arXiv preprint provides public full text.


## Citation

```bibtex
@inproceedings{ezzatiJivan2021automatedcause,
  author = {Sneh Patel and Brendan Park and Naser Ezzati-Jivan and Quentin Fournier},
  title = {Automated Cause Analysis of Latency Outliers Using System-Level Dependency Graphs},
  year = {2021},
  booktitle = {IEEE International Conference on Software Quality, Reliability and Security (QRS)},
  doi = {10.1109/QRS54544.2021.00054},
  url = {https://doi.org/10.1109/QRS54544.2021.00054}
}
```

## Record provenance

- Verified: 2026-08-03
- Evidence: DBLP and IEEE metadata for the published paper; official arXiv abstract and PDF page 2207.06515; local PDF hash verified in the working catalog
- Machine-readable record: [paper.json](./paper.json)
