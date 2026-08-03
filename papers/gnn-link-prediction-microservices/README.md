# Utilizing Graph Neural Networks for Effective Link Prediction in Microservice Architectures

**2025 Â· ACM/SPEC International Conference on Performance Engineering (ICPE) Â· conference paper**

**Authors:** Ghazal Khodabandeh, Alireza Ezaz, Majid Babaei, Naser Ezzati-Jivan

**Core contribution:** The paper applies graph attention networks to predict future interactions in microservice call graphs, supporting proactive monitoring.

## Four-part research summary

### 1. Problem and motivation

Microservice interactions are frequent, dynamic, and operationally important. Predicting likely future links could help systems detect or respond to emerging performance problems before they escalate.

### 2. Method and contribution

The approach uses temporal segmentation, advanced negative sampling, and graph attention mechanisms to model time-sensitive call-graph interactions. It is evaluated with AUC, precision, recall, and F1-score on real-world data.

### 3. Findings and evidence

The reported evaluation shows high accuracy and robustness for predicting microservice interactions, supporting possible use in adaptive resource management and performance optimization.

### 4. Limitations and future directions

The evidence is tied to the available real-world traces and offline link-prediction setup. Future work should evaluate online drift, operational cost, false-positive consequences, and integration with live monitoring controllers.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [microservices](../../topics/microservices.md) Â· [graph-neural-networks](../../topics/graph-neural-networks.md) Â· [performance-engineering](../../topics/performance-engineering.md) Â· [predictive-monitoring](../../topics/predictive-monitoring.md)

**Keywords:** [microservice call graphs](../../keywords/microservice-call-graphs.md) Â· [link prediction](../../keywords/link-prediction.md) Â· [graph attention networks](../../keywords/graph-attention-networks.md) Â· [temporal segmentation](../../keywords/temporal-segmentation.md) Â· [negative sampling](../../keywords/negative-sampling.md) Â· [adaptive monitoring](../../keywords/adaptive-monitoring.md)

## Versions and source links

- [Published version](https://doi.org/10.1145/3676151.3719362) â€” published
- [Public preprint](https://arxiv.org/abs/2501.15019) Â· [PDF](https://arxiv.org/pdf/2501.15019) â€” public_full_text

**Primary source:** [https://doi.org/10.1145/3676151.3719362](https://doi.org/10.1145/3676151.3719362)

**Access status:** public_preprint_and_published_record. The ACM DOI is the canonical citation target; the arXiv preprint provides public full text.


## Citation

```bibtex
@inproceedings{ezzatiJivan2025utilizinggraph,
  author = {Ghazal Khodabandeh and Alireza Ezaz and Majid Babaei and Naser Ezzati-Jivan},
  title = {Utilizing Graph Neural Networks for Effective Link Prediction in Microservice Architectures},
  year = {2025},
  booktitle = {ACM/SPEC International Conference on Performance Engineering (ICPE)},
  doi = {10.1145/3676151.3719362},
  url = {https://doi.org/10.1145/3676151.3719362}
}
```

## Record provenance

- Verified: 2026-08-03
- Evidence: DBLP and ACM DOI metadata; official arXiv abstract and PDF page 2501.15019; local PDF hash verified in the working catalog
- Machine-readable record: [paper.json](./paper.json)
