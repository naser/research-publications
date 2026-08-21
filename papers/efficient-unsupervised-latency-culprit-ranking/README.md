# Efficient Unsupervised Latency Culprit Ranking in Distributed Traces with GNN and Critical Path Analysis

**2024 | ACM/SPEC International Conference on Performance Engineering (ICPE) Companion | conference paper**

**Authors:** Mahsa Panahandeh, Naser Ezzati-Jivan, Abdelwahab Hamou-Lhadj, James Miller

**Core contribution:** The paper combines an unsupervised GraphSAGE model with critical-path-specific latency profiles to detect anomalous requests and rank likely microservice culprits without labelled training data.

## Four-part research summary

### 1. Problem and motivation

Latency-culprit methods for microservices often require labeled anomalies or make assumptions about propagation paths that do not hold across requests. The paper seeks request-level culprit ranking without a labeled training set.

### 2. Method and contribution

Historical service-span latency vectors are normalized and grouped by computed critical path. Each critical-path cluster stores service latency distributions. A two-layer GraphSAGE encoder/decoder reconstructs node features on a directed acyclic service-invocation graph; MSE above 0.1 marks an anomalous request. For each candidate service, a sampled latency from its historical distribution replaces the observed value; candidates whose replacement makes the request normal are retained and ranked by distributional deviation. A static graph plus periodic updates and neighborhood sampling is used for efficiency.

### 3. Findings and evidence

On FIRM preprocessed traces for social-network, hotel-reservation, media-service, and ticket-booking benchmarks, ACC is 87%, 95.4%, 86.4%, and 96%; Top-1 is 83%, 94.7%, 85%, and 94.3%; Top-3 is 86.2%, 95.4%, 86.4%, and 96%; Top-5 is 87%, 95.4%, 86.4%, and 96%, respectively. The paper reports roughly 3-8% accuracy improvement and training-time reduction to more than one-fifth of a comparable method; the critical-path version reduces test culprit-identification time from 1.5-13 s to 0.8-8.3 s, reported as a 58.33% average improvement.

### 4. Limitations and future directions

**Limitations:** Static service graphs require updates; a computed critical path can overshadow the actual culprit in sparse systems or when the culprit has a narrow latency distribution. The evaluation uses aggregated, preprocessed FIRM data rather than arbitrary raw tracing backends, and the paper does not establish production transfer.

**Future work:** Broaden experiments, improve detection, handle evolving dependencies, and test larger or more varied service graphs and deployment conditions.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [microservices](../../topics/microservices.md) | [graph-neural-networks](../../topics/graph-neural-networks.md) | [latency-analysis](../../topics/latency-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [trace-analysis](../../topics/trace-analysis.md)

**Keywords:** latency culprit ranking | [distributed traces](../../keywords/distributed-traces.md) | GraphSAGE | graph neural networks | [critical path](../../keywords/critical-path.md) | FIRM dataset | service invocation graph | unsupervised anomaly detection | Top-k ranking

## Resources

- [Code](https://anonymous.4open.science/r/ICPE2024-4281/v2.py)
- [Data](https://doi.org/10.13012/B2IDB-6738796_V1)

## Versions and source links

- [Published version](https://doi.org/10.1145/3629527.3651841) - published
- [Public ACM PDF](https://dl.acm.org/doi/pdf/10.1145/3629527.3651841) | [PDF](https://dl.acm.org/doi/pdf/10.1145/3629527.3651841) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3629527.3651841](https://doi.org/10.1145/3629527.3651841)

## Identifiers

[DOI 10.1145/3629527.3651841](https://doi.org/10.1145/3629527.3651841)

## When to cite this paper

Cite this paper when your work uses or compares an unsupervised GraphSAGE encoder/decoder that detects request-level latency anomalies from service-span vectors.

- an unsupervised GraphSAGE encoder/decoder that detects request-level latency anomalies from service-span vectors.
- critical-path clustering plus service latency distributions as a label-free culprit-ranking strategy.
- the FIRM benchmark ACC/Top-k table or the v1/v2 timing comparison when evaluating efficient distributed-trace culprit localization.
- with the static-graph and preprocessed-data caveat when discussing production generalization.

## Citation

### APA 7

Panahandeh, M., Ezzati-Jivan, N., Hamou-Lhadj, A., & Miller, J. (2024). Efficient Unsupervised Latency Culprit Ranking in Distributed Traces with GNN and Critical Path Analysis. In ACM/SPEC International Conference on Performance Engineering (ICPE) Companion (pp. 62-66). https://doi.org/10.1145/3629527.3651841

### IEEE

M. Panahandeh, N. Ezzati-Jivan, A. Hamou-Lhadj, and J. Miller, "Efficient Unsupervised Latency Culprit Ranking in Distributed Traces with GNN and Critical Path Analysis," in ACM/SPEC International Conference on Performance Engineering (ICPE) Companion, pp. 62-66, 2024, doi: 10.1145/3629527.3651841

```bibtex
@inproceedings{ezzatiJivan2024efficientunsupervised,
  author = {Mahsa Panahandeh and Naser Ezzati-Jivan and Abdelwahab Hamou-Lhadj and James Miller},
  title = {Efficient Unsupervised Latency Culprit Ranking in Distributed Traces with GNN and Critical Path Analysis},
  year = {2024},
  booktitle = {ACM/SPEC International Conference on Performance Engineering (ICPE) Companion},
  pages = {62-66},
  publisher = {ACM},
  doi = {10.1145/3629527.3651841},
  url = {https://doi.org/10.1145/3629527.3651841}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Private full PDF read: pdf-evidence/notes/efficient-unsupervised-latency-culprit-ranking.md; Efficient culprit-ranking PDF pp. 2-4: distributed-trace input boundary, GraphSAGE model, MSE threshold, critical-path profiles, FIRM dataset, and split; Efficient culprit-ranking PDF pp. 4-5: benchmark accuracy, Top-k results, training/test speed comparison, limitations, and artifact link; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
