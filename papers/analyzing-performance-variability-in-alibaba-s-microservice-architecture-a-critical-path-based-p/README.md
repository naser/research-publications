# Analyzing Performance Variability in Alibaba's Microservice Architecture: A Critical-Path-Based Perspective

**2024 | ACM/SPEC ICPE Companion | conference paper**

**Authors:** Alireza Ezaz, Ghazal Khodabandeh, Naser Ezzati-Jivan

**Core contribution:** The paper identifies response-time variability in Alibaba microservice traces through critical-path extraction and variability analysis of service interactions.

## Four-part research summary

### 1. Problem and motivation

Large microservice traces contain many interacting services, and service-level averages can hide path-level response-time variability. The paper targets critical interactions whose unstable response times may indicate performance problems (pp. 1-2).

### 2. Method and contribution

Using the first hour of Alibaba's cluster-trace-microservices-v2022, preprocessing removes invalid response times/trace IDs/null fields and retains timestamp, trace ID, upstream/downstream service IDs, and response time. Interactions are time-ordered; end times are timestamp plus response time; the longest end time identifies the path endpoint, and upstream links are backtracked to form a critical path. Requests with identical critical paths are grouped. Mean and standard deviation are computed for each interaction across twenty 3-minute intervals; high variability is defined as standard deviation greater than ten times the mean (pp. 2-4).

### 3. Findings and evidence

The first hour covers nearly 20,000 microservices, 40,062,862 trace IDs/requests, 91,704 unique critical paths, and 1,891 high-variance interactions. Twelve plots illustrate four qualitative patterns: high count/mean/variation, frequent stable interactions, high mean/variation with lower count, and low mean with increased variation. The paper proposes high-variance critical interactions as candidates for adaptive tracing (pp. 3-4).

### 4. Limitations and future directions

**Limitations:** One dataset and one-hour window; no named production tracer/version, hardware, accuracy baseline, confidence interval, or causal validation. The pattern-to-cause interpretations are hypotheses for investigation, not demonstrated causal diagnoses.

**Future work:** Add CPU/memory metrics, use machine learning for bottleneck prediction, and improve trace grouping for larger datasets (p. 4).

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [microservices](../../topics/microservices.md) | [performance-analysis](../../topics/performance-analysis.md) | [latency-analysis](../../topics/latency-analysis.md) | [observability](../../topics/observability.md) | [performance-engineering](../../topics/performance-engineering.md)

**Keywords:** Alibaba microservice architecture | [critical path](../../keywords/critical-path.md) | [distributed traces](../../keywords/distributed-traces.md) | response-time variability | critical interactions | microservice performance | [adaptive tracing](../../keywords/adaptive-tracing.md) | cluster-trace-microservices-v2022 | mean response time | standard deviation

## Resources

- [Code](https://github.com/Alireza-Ezaz/Analyzing-Performance-Variability-in-Alibaba-s-Microservice-Architecture)
- [Data](https://github.com/alibaba/clusterdata/tree/master/cluster-trace-microservices-v2022)

## Versions and source links

- [Published version](https://doi.org/10.1145/3629527.3651845) - published
- [Public full text](https://research.spec.org/icpe_proceedings/2024/companion/p82.pdf) | [PDF](https://research.spec.org/icpe_proceedings/2024/companion/p82.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3629527.3651845](https://doi.org/10.1145/3629527.3651845)

## Identifiers

[DOI 10.1145/3629527.3651845](https://doi.org/10.1145/3629527.3651845)

## When to cite this paper

Cite this paper when your work uses or compares critical-path extraction and exact-path grouping as a way to localize response-time variability in large microservice traces.

- For critical-path extraction and exact-path grouping as a way to localize response-time variability in large microservice traces.
- For the `std > 10 x mean` interaction-level high-variability rule and twenty 3-minute interval analysis.
- For the Alibaba first-hour scale characterization: 40,062,862 trace IDs/requests, 91,704 critical paths, and 1,891 high-variance interactions.
- For motivating adaptive tracing toward critical interactions, while distinguishing qualitative pattern evidence from causal diagnosis.

## Citation

### APA 7

Ezaz, A., Khodabandeh, G., & Ezzati-Jivan, N. (2024). Analyzing Performance Variability in Alibaba's Microservice Architecture: A Critical-Path-Based Perspective. In ACM/SPEC ICPE Companion (pp. 82-86). https://doi.org/10.1145/3629527.3651845

### IEEE

A. Ezaz, G. Khodabandeh, and N. Ezzati-Jivan, "Analyzing Performance Variability in Alibaba's Microservice Architecture: A Critical-Path-Based Perspective," in ACM/SPEC ICPE Companion, pp. 82-86, 2024, doi: 10.1145/3629527.3651845

```bibtex
@inproceedings{ezzatiJivan2024analyzingperformance,
  author = {Alireza Ezaz and Ghazal Khodabandeh and Naser Ezzati-Jivan},
  title = {Analyzing Performance Variability in Alibaba's Microservice Architecture: A Critical-Path-Based Perspective},
  year = {2024},
  booktitle = {ACM/SPEC ICPE Companion},
  pages = {82-86},
  publisher = {ACM},
  doi = {10.1145/3629527.3651845},
  url = {https://doi.org/10.1145/3629527.3651845}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: ICPE Companion PDF: Alibaba cluster-trace-microservices-v2022 preprocessing, critical-path extraction, 20 intervals, and 10-times-mean variability rule; ICPE Companion PDF: nearly 20,000 services, 40,062,862 trace IDs, 91,704 critical paths, 1,891 high-variance interactions, and four patterns; Author-linked analysis repository and Alibaba dataset URL recorded as reproducibility resources; Local full-text evidence was hash-verified during catalog review; verification manifests are not distributed
- Machine-readable record: [paper.json](./paper.json)
