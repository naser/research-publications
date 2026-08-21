# Context-aware Root Cause Localization in Distributed Traces Using Social Network Analysis (Work In Progress paper)

**2024 | ACM/SPEC ICPE Companion | work-in-progress conference paper**

**Authors:** Mahsa Panahandeh, Naser Ezzati-Jivan, Abdelwahab Hamou-Lhadj, James Miller

**Core contribution:** The work-in-progress paper combines service-call graph context, social-network analysis, and spectrum-based fault localization to rank distributed-trace root causes.

## Four-part research summary

### 1. Problem and motivation

Distributed-service failures propagate through dependencies, so ranking services only by frequency in abnormal traces can miss a remote or infrequently observed root cause. The paper targets context-sensitive localization across services, service communities, and request traces.

### 2. Method and contribution

Within a five-minute anomaly window, the method builds weighted service-call graphs from normal and abnormal distributed traces. It applies Louvain community detection, iterative PageRank within communities, request-type clustering, Jaccard-based trace-diversity comparison, heuristic cluster selection, and a weighted Ochiai spectrum score.

### 3. Findings and evidence

On Dataset C from the 2020 AIOps Challenge, the evaluation uses 46 labeled windows: 15 CPU-stress, 15 network-delay, and 16 network-loss cases. The full context-aware method identifies the true cause at top-1 in about 91.3%/91.36% of cases and within top-3 in 100% of cases. In a component ablation, the true cause moves from sixth with original spectrum analysis, to fourth with service PageRank, second with community PageRank, and first with the full method.

### 4. Limitations and future directions

**Limitations:** This is a Work In Progress paper with a small, injected-failure evaluation and no demonstrated natural-incident, cross-deployment, scalability, or confidence-interval analysis. Tracer implementation/version, anomaly-detector configuration, OS, kernel, runtime, hardware, and replication protocol are unknown.

**Future work:** Add profiling metrics and execution-state information, study multiple root causes, adapt network-analysis methods to distributed traces, evaluate varied system sizes/designs, and compare more extensively with established methods.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [root-cause-analysis](../../topics/root-cause-analysis.md) | [microservices](../../topics/microservices.md) | [social-network-analysis](../../topics/social-network-analysis.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [performance-analysis](../../topics/performance-analysis.md)

**Keywords:** [context-aware RCA](../../keywords/context-aware-rca.md) | service-call graph | [distributed traces](../../keywords/distributed-traces.md) | service communities | [Louvain](../../keywords/louvain.md) | [PageRank](../../keywords/pagerank.md) | Jaccard distance | Ochiai | CPU stress | network delay | network loss | AIOps Challenge 2020

## Resources

- [Data](https://github.com/NetManAIOps/AIOps-Challenge-2020-Data)

## Versions and source links

- [Published version](https://doi.org/10.1145/3629527.3651426) - published
- [Public full text](https://research.spec.org/icpe_proceedings/2024/companion/p1.pdf) | [PDF](https://research.spec.org/icpe_proceedings/2024/companion/p1.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3629527.3651426](https://doi.org/10.1145/3629527.3651426)

## Identifiers

[DOI 10.1145/3629527.3651426](https://doi.org/10.1145/3629527.3651426)

## When to cite this paper

Cite this paper when your work uses or compares context-aware spectrum-based RCA that weights services by both community-level and individual PageRank.

- context-aware spectrum-based RCA that weights services by both community-level and individual PageRank.
- using request-type trace diversity independently of trace length in distributed-service root-cause ranking.
- the Dataset C preliminary comparison of original spectrum, service PageRank, community PageRank, and the full context-aware method.

## Citation

### APA 7

Panahandeh, M., Ezzati-Jivan, N., Hamou-Lhadj, A., & Miller, J. (2024). Context-aware Root Cause Localization in Distributed Traces Using Social Network Analysis (Work In Progress paper). In ACM/SPEC ICPE Companion (pp. 1-6). https://doi.org/10.1145/3629527.3651426

### IEEE

M. Panahandeh, N. Ezzati-Jivan, A. Hamou-Lhadj, and J. Miller, "Context-aware Root Cause Localization in Distributed Traces Using Social Network Analysis (Work In Progress paper)," in ACM/SPEC ICPE Companion, pp. 1-6, 2024, doi: 10.1145/3629527.3651426

```bibtex
@inproceedings{ezzatiJivan2024contextaware,
  author = {Mahsa Panahandeh and Naser Ezzati-Jivan and Abdelwahab Hamou-Lhadj and James Miller},
  title = {Context-aware Root Cause Localization in Distributed Traces Using Social Network Analysis (Work In Progress paper)},
  year = {2024},
  booktitle = {ACM/SPEC ICPE Companion},
  pages = {1-6},
  publisher = {ACM},
  doi = {10.1145/3629527.3651426},
  url = {https://doi.org/10.1145/3629527.3651426}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: ICPE Companion WIP PDF: weighted service-call graphs, Louvain, PageRank, Jaccard diversity, Ochiai, and heuristic search; ICPE Companion WIP PDF: AIOps Challenge 2020 Dataset C, 46 labelled windows, fault categories, top-1/top-3 results, and tied-candidate reduction; ICPE Companion WIP PDF: preliminary-evaluation limitation and future-work scope; Local full-text evidence was hash-verified during catalog review; verification manifests are not distributed
- Machine-readable record: [paper.json](./paper.json)
