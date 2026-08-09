# Automatic Reduction of Execution Trace Data Volume Using Gradient Boosting in Large-Scale Microservice Systems

**2024 | The 37th Canadian Conference on Artificial Intelligence | conference paper**

**Authors:** Amir Haghshenas, Naser Ezzati-Jivan, Michel Dagenais

**Core contribution:** The paper uses gradient boosting and feature importance to reduce the amount of trace data needed for microservice performance modeling.

## Four-part research summary

### 1. Problem and motivation

Large-scale microservice performance modeling faces a collection trade-off: too many trace/log features increase collection and analysis cost, while too few can remove information needed to predict resource use. Existing logging-placement approaches may require access to internals that is difficult to obtain across large microservice deployments.

### 2. Method and contribution

The authors merge Alibaba MSResource, MSRTMCR, MSCallGraph, and Node data; fill missing values with column medians, encode categorical columns, remove targets and features with Pearson correlation of at least 0.90, and train LightGBM regression models in two phases. The first phase ranks features by gain importance; the second evaluates top-9, top-5, and top-3 feature subsets using chunked training and holdout testing.

### 3. Findings and evidence

On the Alibaba production-cluster data, the full 29-feature model has RMSE 0.08 for CPU and 0.14 for memory. The top-9 subset reduces the modeling data by 69% and reports RMSE 0.02 and 0.13; top-5 reduces it by 83% with RMSE 0.14 and 0.21; top-3 reduces it by 90% with RMSE 0.28 and 0.35. The retained features concentrate on inter-service communication, memory/cache access, database access, and RPC/HTTP behavior.

### 4. Limitations and future directions

**Limitations:** The evaluation uses one Alibaba dataset and only LightGBM; effectiveness is described as system-dependent. There is no direct comparison with another feature-selection method, no measured end-to-end tracing overhead, and no host/software environment specification. The reported reduction is a reduction in modeling features/data columns, not a demonstrated production collection-overhead percentage.

**Future work:** Validate across other microservice environments and operational conditions, investigate streaming data, and integrate the method with automated monitoring.

## Abstract

In large microservice systems, collecting too little or too much trace data can make performance modeling unreliable. This work introduces a two-phase gradient-boosting method that identifies the most important trace features for predicting CPU and memory demand. Using a comprehensive Alibaba dataset, the study reports more than 69% reduction in data volume without compromising, and sometimes improving, model accuracy. The retained features emphasize inter-service communication and resource-access patterns.

## Topics and keywords

**Tags:** [microservices](../../topics/microservices.md) | [trace-reduction](../../topics/trace-reduction.md) | [gradient-boosting](../../topics/gradient-boosting.md) | [performance-modeling](../../topics/performance-modeling.md) | [resource-analysis](../../topics/resource-analysis.md)

**Keywords:** trace data volume | feature importance | CPU demand | memory demand | Alibaba microservices | inter-service communication

## Versions and source links

- [Public published article](https://caiac.pubpub.org/pub/dh3zxquj/release/1) - public_full_text_page
- [PubPub DOI](https://doi.org/10.21428/594757db.fe8b76cf) - doi

**Canonical source:** [https://doi.org/10.21428/594757db.fe8b76cf](https://doi.org/10.21428/594757db.fe8b76cf)

## Identifiers

[DOI 10.21428/594757db.fe8b76cf](https://doi.org/10.21428/594757db.fe8b76cf)

## When to cite this paper

Cite this paper when your work uses or compares a two-phase LightGBM feature-importance workflow that reduces the feature volume used for microservice CPU/memory performance modeling.

- a two-phase LightGBM feature-importance workflow that reduces the feature volume used for microservice CPU/memory performance modeling.
- the Alibaba production-cluster trace study when motivating communication, cache/memory, database, RPC, and HTTP features as high-value resource-prediction signals.
- the top-9/top-5/top-3 RMSE trade-off when discussing feature-volume reduction; do not cite it as a measured tracing-overhead result.

## Citation


### Alternative or source-rendered titles

- Automatic Reduction of Execution Trace Data Volume UsingGradient Boosting in Large-Scale Microservice Systems (source-page rendering variant)
### APA 7

Haghshenas, A., Ezzati-Jivan, N., & Dagenais, M. (2024). Automatic Reduction of Execution Trace Data Volume Using Gradient Boosting in Large-Scale Microservice Systems. In The 37th Canadian Conference on Artificial Intelligence. https://doi.org/10.21428/594757db.fe8b76cf

### IEEE

A. Haghshenas, N. Ezzati-Jivan, and M. Dagenais, "Automatic Reduction of Execution Trace Data Volume Using Gradient Boosting in Large-Scale Microservice Systems," in The 37th Canadian Conference on Artificial Intelligence, 2024, doi: 10.21428/594757db.fe8b76cf

```bibtex
@inproceedings{ezzatiJivan2024automaticreduction,
  author = {Amir Haghshenas and Naser Ezzati-Jivan and Michel Dagenais},
  title = {Automatic Reduction of Execution Trace Data Volume Using Gradient Boosting in Large-Scale Microservice Systems},
  year = {2024},
  booktitle = {The 37th Canadian Conference on Artificial Intelligence},
  publisher = {PubPub},
  doi = {10.21428/594757db.fe8b76cf},
  url = {https://doi.org/10.21428/594757db.fe8b76cf}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: official Canadian AI Proceedings PubPub page; PubPub page reports CC-BY 4.0 and a Download action; DBLP metadata matched by title, authors, and year
- Machine-readable record: [paper.json](./paper.json)
