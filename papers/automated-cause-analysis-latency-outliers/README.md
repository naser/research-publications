# Automated Cause Analysis of Latency Outliers Using System-Level Dependency Graphs

**2021 | IEEE International Conference on Software Quality, Reliability and Security (QRS) | conference paper**

**Authors:** Sneh Patel, Brendan Park, Naser Ezzati-Jivan, Quentin Fournier

**Core contribution:** The paper combines system-level dependency graphs with automated outlier detection to localize likely causes of latency anomalies.

## Four-part research summary

### 1. Problem and motivation

Latency outliers in distributed/request-oriented software are difficult to triage because their causes may be hidden in thread and resource waiting relationships in system-level traces.

### 2. Method and contribution

Build waiting-dependency graphs from LTTng traces, embed graphs with Graph2Vec, detect unusual requests or graph regions using Z-score, k-NN, DBSCAN, or OPTICS, then merge and compare representative graphs to expose causal waiting nodes.

### 3. Findings and evidence

On 697 Apache/PHP/MySQL requests labeled by a 200 ms expert threshold, Z-score had the best printed result (98.1% accuracy, 55.0% precision, 73.3% recall, 62.9% F1), while the other methods had lower precision/recall despite >97% accuracy. A representative outlier exposed CPU waiting (waitcpu) and Xorg contention. Computation costs were dominated by graph construction and embedding.

### 4. Limitations and future directions

**Limitations:** There is no ground-truth latency-cause dataset; labels are threshold/expert derived and some detected outliers may be unrelated to latency. Graph2Vec size and hyperparameters can overfit, and the method focuses on off-CPU/resource waits rather than user-space function detail or on-CPU causality.

**Future work:** Reduce Graph2Vec size while retaining accuracy, improve training time, use more graphs, and extend analysis beyond the current off-CPU representation.

## Abstract

Detecting performance issues and identifying their root causes in the runtime is a challenging task. Typically, developers use methods such as logging and tracing to identify bottlenecks. These solutions are, however, not ideal as they are time-consuming and require manual effort. In this paper, we propose a method to automate the task of detecting latency outliers using system-level traces and then comparing them to identify the root cause(s). Our method makes use of dependency graphs to show internal interactions between threads and system resources. With these graphs, one can pinpoint where performance issues occur. However, a single trace can be composed of a large number of requests, each generating one graph. To automate the task of identifying outliers within the dataset, we use machine learning density-based models and statistical calculations such as -score. Our evaluation shows an accuracy greater than 97 % on outlier detection, making them appropriate for in-production servers and industry-level use cases.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [latency-analysis](../../topics/latency-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [dependency-graphs](../../topics/dependency-graphs.md)

**Keywords:** latency outliers | [system-level traces](../../keywords/system-level-traces.md) | dependency graphs | density-based models | z-score | production diagnosis

## Versions and source links

- [Published version](https://doi.org/10.1109/QRS54544.2021.00054) - published
- [Public preprint](https://arxiv.org/abs/2207.06515) | [PDF](https://arxiv.org/pdf/2207.06515) - public_full_text

**Canonical source:** [https://doi.org/10.1109/QRS54544.2021.00054](https://doi.org/10.1109/QRS54544.2021.00054)

## Identifiers

[DOI 10.1109/QRS54544.2021.00054](https://doi.org/10.1109/QRS54544.2021.00054) | [arXiv 2207.06515](https://arxiv.org/abs/2207.06515)

## When to cite this paper

Cite this paper when your work uses or compares graph2Vec embeddings of waiting-dependency graphs as a latency-outlier screening method.

- For Graph2Vec embeddings of waiting-dependency graphs as a latency-outlier screening method.
- For comparing DBSCAN, OPTICS, k-NN, and Z-score on threshold-derived latency labels with the reported precision/recall trade-off.
- For merging and comparing representative DepGraphs to expose CPU-wait/Xorg contention.
- For the measured cost boundary: 32.391 s graph construction, 11.608 s Graph2Vec, and ≤10.1% method tracing overhead in the stated setup.

## Citation

### APA 7

Patel, S., Park, B., Ezzati-Jivan, N., & Fournier, Q. (2021). Automated Cause Analysis of Latency Outliers Using System-Level Dependency Graphs. In IEEE International Conference on Software Quality, Reliability and Security (QRS) (pp. 422-433). https://doi.org/10.1109/QRS54544.2021.00054

### IEEE

S. Patel, B. Park, N. Ezzati-Jivan, and Q. Fournier, "Automated Cause Analysis of Latency Outliers Using System-Level Dependency Graphs," in IEEE International Conference on Software Quality, Reliability and Security (QRS), pp. 422-433, 2021, doi: 10.1109/QRS54544.2021.00054

```bibtex
@inproceedings{ezzatiJivan2021automatedcause,
  author = {Sneh Patel and Brendan Park and Naser Ezzati-Jivan and Quentin Fournier},
  title = {Automated Cause Analysis of Latency Outliers Using System-Level Dependency Graphs},
  year = {2021},
  booktitle = {IEEE International Conference on Software Quality, Reliability and Security (QRS)},
  pages = {422-433},
  publisher = {IEEE},
  doi = {10.1109/QRS54544.2021.00054},
  url = {https://doi.org/10.1109/QRS54544.2021.00054}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: DBLP and IEEE metadata for the published paper; official arXiv abstract and PDF page 2207.06515; Local full-text evidence was hash-verified during catalog review; verification manifests are not distributed
- Machine-readable record: [paper.json](./paper.json)
