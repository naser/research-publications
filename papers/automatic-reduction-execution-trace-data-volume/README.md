# Automatic Reduction of Execution Trace Data Volume Using Gradient Boosting in Large-Scale Microservice Systems

**2024 Â· The 37th Canadian Conference on Artificial Intelligence Â· conference paper**

**Authors:** Amir Haghshenas, Naser Ezzati-Jivan, Michel Dagenais

**Core contribution:** The paper uses gradient boosting and feature importance to reduce the amount of trace data needed for microservice performance modeling.

## Four-part research summary

### 1. Problem and motivation

Large-scale microservice traces are expensive to collect, store, and analyze, but reducing them arbitrarily can remove features needed for accurate CPU and memory prediction.

### 2. Method and contribution

A two-phase method identifies influential trace features and evaluates whether reduced feature sets preserve predictive performance. The evaluation uses a large Alibaba microservice dataset and examines the architectural meaning of retained features.

### 3. Findings and evidence

The PubPub article reports more than 69% data-volume reduction without loss of predictive accuracy, with some models improving. The retained features concentrate on inter-service communication and resource access.

### 4. Limitations and future directions

The results depend on the Alibaba dataset, selected prediction targets, and gradient-boosting models. Future work should test other microservice platforms, trace formats, workloads, prediction tasks, and online reduction policies.

## Abstract

In large microservice systems, collecting too little or too much trace data can make performance modeling unreliable. This work introduces a two-phase gradient-boosting method that identifies the most important trace features for predicting CPU and memory demand. Using a comprehensive Alibaba dataset, the study reports more than 69% reduction in data volume without compromising, and sometimes improving, model accuracy. The retained features emphasize inter-service communication and resource-access patterns.

## Topics and keywords

**Tags:** [microservices](../../topics/microservices.md) Â· [trace-reduction](../../topics/trace-reduction.md) Â· [gradient-boosting](../../topics/gradient-boosting.md) Â· [performance-modeling](../../topics/performance-modeling.md) Â· [resource-analysis](../../topics/resource-analysis.md)

**Keywords:** [trace data volume](../../keywords/trace-data-volume.md) Â· [feature importance](../../keywords/feature-importance.md) Â· [CPU demand](../../keywords/cpu-demand.md) Â· [memory demand](../../keywords/memory-demand.md) Â· [Alibaba microservices](../../keywords/alibaba-microservices.md) Â· [inter-service communication](../../keywords/inter-service-communication.md)

## Versions and source links

- [Public published article](https://caiac.pubpub.org/pub/dh3zxquj/release/1) â€” public_full_text_page
- [PubPub DOI](https://doi.org/10.21428/594757db.fe8b76cf) â€” doi

**Primary source:** [https://caiac.pubpub.org/pub/dh3zxquj/release/1](https://caiac.pubpub.org/pub/dh3zxquj/release/1)

**Access status:** public_cc_by_article_page. The official PubPub page exposes the full article, a Download action, and a CC-BY 4.0 license. The repository links the source page rather than copying the PDF.


### Alternative or source-rendered titles

- Automatic Reduction of Execution Trace Data Volume UsingGradient Boosting in Large-Scale Microservice Systems (source-page rendering variant)

## Citation

```bibtex
@inproceedings{ezzatiJivan2024automaticreduction,
  author = {Amir Haghshenas and Naser Ezzati-Jivan and Michel Dagenais},
  title = {Automatic Reduction of Execution Trace Data Volume Using Gradient Boosting in Large-Scale Microservice Systems},
  year = {2024},
  booktitle = {The 37th Canadian Conference on Artificial Intelligence},
  doi = {10.21428/594757db.fe8b76cf},
  url = {https://caiac.pubpub.org/pub/dh3zxquj/release/1}
}
```

## Record provenance

- Verified: 2026-08-03
- Evidence: official Canadian AI Proceedings PubPub page; PubPub page reports CC-BY 4.0 and a Download action; DBLP metadata matched by title, authors, and year
- Machine-readable record: [paper.json](./paper.json)
