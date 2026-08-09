# Network Analysis of Microservices: A Case Study on Alibaba Production Clusters

**2024 | ACM/SPEC International Conference on Performance Engineering (ICPE) Companion | conference paper**

**Authors:** Ghazal Khodabandeh, Alireza Ezaz, Naser Ezzati-Jivan

**Core contribution:** The paper applies graph community detection and service-graph clustering to expose recurring microservice communication structures in an Alibaba production-cluster snapshot.

## Four-part research summary

### 1. Problem and motivation

Large microservice deployments contain complex call relationships whose structure is difficult to inspect directly. The paper studies graph analysis for exposing communities, dependencies, and similarities among service call graphs.

### 2. Method and contribution

From an Alibaba production snapshot, the authors retain upper- and downstream-microservice identifiers plus service labels, remove unacceptable rows, construct one call graph per service, detect communities, and cluster graph structures. Greedy Modularity, Louvain, Infomap, and Label Propagation are compared; K-means groups service graphs using node/edge features.

### 3. Findings and evidence

The one-hour snapshot contains more than 260 million call records, more than 28,000 microservices, and a network spanning about 10,000 bare-metal nodes. Service graphs with at least 50 requests are retained and 300 are randomly selected. On a sample exceeding 13 million records, Louvain has silhouette 0.71 and modularity 0.67, above the alternatives; varying the seed from 0 to 1000 selects the highest-modularity seed. Elbow analysis selects K=5 and graph clustering obtains silhouette 0.6141.

### 4. Limitations and future directions

**Limitations:** Only 300 service graphs and a small set of call-graph attributes are analyzed; response time is not included in edges. The paper does not show causal bottleneck localization, performance improvement, or validation over the full cluster snapshot. Tracer, trace version/format, OS, kernel, runtime, hardware specifications, and replication details are unknown.

**Future work:** Add response-time attributes, scale to larger data, compare or combine more community/clustering methods, and predict future network behavior/community formation.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [microservices](../../topics/microservices.md) | [performance-analysis](../../topics/performance-analysis.md) | [observability](../../topics/observability.md) | [graph-neural-networks](../../topics/graph-neural-networks.md)

**Keywords:** microservice networks | Alibaba production clusters | service call graphs | community detection | [Louvain](../../keywords/louvain.md) | Infomap | Label Propagation | graph clustering | [K-Means](../../keywords/k-means.md) | [silhouette score](../../keywords/silhouette-score.md) | modularity

## Resources

- [Code](https://github.com/ghazalkhb/ICPE2024_DataChallenge)

## Versions and source links

- [Published version](https://doi.org/10.1145/3629527.3651842) - published
- [Public ACM PDF](https://dl.acm.org/doi/pdf/10.1145/3629527.3651842) | [PDF](https://dl.acm.org/doi/pdf/10.1145/3629527.3651842) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3629527.3651842](https://doi.org/10.1145/3629527.3651842)

## Identifiers

[DOI 10.1145/3629527.3651842](https://doi.org/10.1145/3629527.3651842)

## When to cite this paper

Cite this paper when your work uses or compares applying community detection to Alibaba-scale microservice call graphs.

- applying community detection to Alibaba-scale microservice call graphs.
- the Louvain-versus-Greedy-Modularity/Infomap/Label-Propagation comparison with coverage, modularity, and silhouette metrics.
- the K-means service-graph similarity workflow with elbow-selected K=5 and silhouette 0.6141.
- as structural-dependency evidence, not as a causal latency or bottleneck-improvement result.

## Citation

### APA 7

Khodabandeh, G., Ezaz, A., & Ezzati-Jivan, N. (2024). Network Analysis of Microservices: A Case Study on Alibaba Production Clusters. ACM/SPEC International Conference on Performance Engineering (ICPE) Companion. https://doi.org/10.1145/3629527.3651842

### IEEE

G. Khodabandeh, A. Ezaz, and N. Ezzati-Jivan, "Network Analysis of Microservices: A Case Study on Alibaba Production Clusters," in ACM/SPEC International Conference on Performance Engineering (ICPE) Companion, 2024, doi: 10.1145/3629527.3651842

```bibtex
@inproceedings{ezzatiJivan2024networkanalysis,
  author = {Ghazal Khodabandeh and Alireza Ezaz and Naser Ezzati-Jivan},
  title = {Network Analysis of Microservices: A Case Study on Alibaba Production Clusters},
  year = {2024},
  booktitle = {ACM/SPEC International Conference on Performance Engineering (ICPE) Companion},
  doi = {10.1145/3629527.3651842},
  url = {https://doi.org/10.1145/3629527.3651842}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Private full PDF read: pdf-evidence/notes/network-analysis-microservices-alibaba.md; Network-analysis PDF pp. 1-3: Alibaba dataset scale, preprocessing, community algorithms, metrics, seed stability, and graph clustering; Network-analysis PDF pp. 3-5: structural findings, limitations, future work, and implementation repository; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
