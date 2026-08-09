# Utilizing Graph Neural Networks for Effective Link Prediction in Microservice Architectures

**2025 | ACM/SPEC International Conference on Performance Engineering (ICPE) | conference paper**

**Authors:** Ghazal Khodabandeh, Alireza Ezaz, Majid Babaei, Naser Ezzati-Jivan

**Core contribution:** The paper applies graph attention networks to predict future interactions in microservice call graphs, supporting proactive monitoring.

## Four-part research summary

### 1. Problem and motivation

Microservice call graphs are dense, time-sensitive, and continuously changing. Static similarity methods and temporal models without structural context may miss future service interactions that matter for proactive monitoring and resource management.

### 2. Method and contribution

The pipeline cleans timestamped caller/callee events, maps services to node IDs, partitions them into fixed time-window graphs, and uses a two-layer Graph Attention Network. The first layer uses two attention heads with ELU; the second consolidates with one head. Advanced negative sampling selects degree-weighted non-existing edges with alpha=0.1 while excluding existing edges. Link scores use an embedding dot product, sigmoid, and binary cross-entropy loss.

### 3. Findings and evidence

On the evaluated Alibaba 2022 Cluster Trace slice, the proposed temporal GAT reports AUC 0.89, accuracy 0.91, precision 0.89, recall 0.96, and F1 0.92. It improves F1 over NodeSim 0.18, LSTM 0.60, Simple GNN 0.76, and Simple Temporal GNN 0.77, although Simple GNN has higher AUC (0.94) than the proposed model. The paper uses attention heatmaps, confusion matrices, PR curves, and ROC curves to inspect behavior across windows.

### 4. Limitations and future directions

**Limitations:** The quantitative evaluation uses one real dataset and a 0-10,000 ms interval, with 0-7,000 ms for training and 7,000-10,000 ms for testing. GNN computation is more expensive than simple baselines; extreme class imbalance, longer temporal horizons, additional service/load attributes, ranking metrics, and other datasets are not fully evaluated. CPU model, GPU, OS, and runtime/library versions are unknown.

**Future work:** Test longer and more varied time ranges and multiple datasets; add interaction frequency, service load, and refined temporal features; investigate sparse/lightweight GNNs, distributed training, ranking metrics, and unsupervised or self-supervised learning.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [microservices](../../topics/microservices.md) | [graph-neural-networks](../../topics/graph-neural-networks.md) | [performance-engineering](../../topics/performance-engineering.md) | [predictive-monitoring](../../topics/predictive-monitoring.md)

**Keywords:** microservice call graphs | link prediction | graph attention networks | temporal segmentation | negative sampling | [adaptive monitoring](../../keywords/adaptive-monitoring.md)

## Versions and source links

- [Published version](https://doi.org/10.1145/3676151.3719362) - published
- [Public preprint](https://arxiv.org/abs/2501.15019) | [PDF](https://arxiv.org/pdf/2501.15019) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3676151.3719362](https://doi.org/10.1145/3676151.3719362)

## Identifiers

[DOI 10.1145/3676151.3719362](https://doi.org/10.1145/3676151.3719362) | [arXiv 2501.15019](https://arxiv.org/abs/2501.15019)

## When to cite this paper

Cite this paper when your work uses or compares temporal link prediction in microservice call graphs using time-windowed graphs and GAT attention.

- temporal link prediction in microservice call graphs using time-windowed graphs and GAT attention.
- advanced degree-weighted negative sampling that excludes existing edges in a highly imbalanced call-graph setting.
- the Alibaba 2022 Cluster Trace evaluation and the comparison against NodeSim, LSTM, Simple GNN, and Simple Temporal GNN.
- the paper's result as a classification benchmark only with its stated 0-10,000 ms split; do not generalize it to long-horizon production prediction without additional evidence.

## Citation

### APA 7

Khodabandeh, G., Ezaz, A., Babaei, M., & Ezzati-Jivan, N. (2025). Utilizing Graph Neural Networks for Effective Link Prediction in Microservice Architectures. In ACM/SPEC International Conference on Performance Engineering (ICPE) (pp. 19-30). https://doi.org/10.1145/3676151.3719362

### IEEE

G. Khodabandeh, A. Ezaz, M. Babaei, and N. Ezzati-Jivan, "Utilizing Graph Neural Networks for Effective Link Prediction in Microservice Architectures," in ACM/SPEC International Conference on Performance Engineering (ICPE), pp. 19-30, 2025, doi: 10.1145/3676151.3719362

```bibtex
@inproceedings{ezzatiJivan2025utilizinggraph,
  author = {Ghazal Khodabandeh and Alireza Ezaz and Majid Babaei and Naser Ezzati-Jivan},
  title = {Utilizing Graph Neural Networks for Effective Link Prediction in Microservice Architectures},
  year = {2025},
  booktitle = {ACM/SPEC International Conference on Performance Engineering (ICPE)},
  pages = {19-30},
  publisher = {ACM},
  doi = {10.1145/3676151.3719362},
  url = {https://doi.org/10.1145/3676151.3719362}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: DBLP and ACM DOI metadata; official arXiv abstract and PDF page 2501.15019; local PDF hash verified in the working catalog
- Machine-readable record: [paper.json](./paper.json)
