# CARE: Context Aware Root Cause Identification Using Distributed Traces and Profiling Metrics

**2026 | IEEE Transactions on Software Engineering | research paper**

**Authors:** Mahsa Panahandeh, Naser Ezzati-Jivan, Abdelwahab Hamou-Lhadj, James Miller

**Core contribution:** CARE combines distributed traces and profiling metrics with graph- and spectrum-based analysis to localize performance root causes in microservices.

## Four-part research summary

### 1. Problem and motivation

Root-cause localization in microservices is difficult because service dependencies, request paths, execution context, and heterogeneous monitoring data interact; conventional methods can miss propagation patterns and contextual relationships.

### 2. Method and contribution

CARE builds service-call graphs from distributed traces, detects anomalous profiling metrics, clusters affected traces, ranks the contextual importance of services and service communities with graph analysis, and applies weighted spectrum-based fault localization. The evaluation compares regular spectrum analysis, MicroRank, TraceRCA, and HeMiRCA using Ochiai, M2, DStar2, and Russell-Rao risk formulas.

### 3. Findings and evidence

On TrainTicket, which contains 41 microservices and 242,259 traces across 200 fault scenarios, CARE reports top-1 accuracy of 79%-89% and top-5 accuracy of 94%-99%. On the China Mobile Zhejiang production dataset, the reported top-1 accuracy is 68%-72% and top-5 accuracy is 84%. For 11 double-root-cause scenarios, both causes are placed in the top two in 55% of cases and in the top five in 82% of cases.

### 4. Limitations and future directions

**Limitations:** The evaluation depends on the selected TrainTicket and China Mobile Zhejiang datasets and their fault-injection or anomaly-selection procedures. The paper also reports a mismatch for HeMiRCA on the production data because of mixed normal/anomalous traces, sparse anomalies, and missing caller-side metrics for some services.

**Future work:** Extend validation to broader production systems and more complex multi-root-cause scenarios, with richer context modeling and online diagnosis under trace sampling.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [microservices](../../topics/microservices.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [latency-analysis](../../topics/latency-analysis.md)

**Keywords:** [distributed traces](../../keywords/distributed-traces.md) | [profiling metrics](../../keywords/profiling-metrics.md) | [context-aware RCA](../../keywords/context-aware-rca.md) | [microservice diagnosis](../../keywords/microservice-diagnosis.md) | [TrainTicket](../../keywords/trainticket.md) | [spectrum-based fault localization](../../keywords/spectrum-based-fault-localization.md) | [PageRank](../../keywords/pagerank.md) | [China Mobile Zhejiang](../../keywords/china-mobile-zhejiang.md)

## Versions and source links

- [Published version](https://doi.org/10.1109/tse.2025.3645143) - published

**Canonical source:** [https://doi.org/10.1109/tse.2025.3645143](https://doi.org/10.1109/tse.2025.3645143)

## Identifiers

[DOI 10.1109/tse.2025.3645143](https://doi.org/10.1109/tse.2025.3645143)

## When to cite this paper

Cite this paper when combining distributed traces, profiling metrics, and context-aware spectrum analysis for microservice root-cause localization.

- Graph-based ranking of service and community context from distributed traces.
- Weighted spectrum-based localization using profiling anomalies and multiple risk formulas.
- TrainTicket and China Mobile Zhejiang evaluations, including single- and double-root-cause scenarios.

## Citation

### APA 7

Panahandeh, M., Ezzati-Jivan, N., Hamou-Lhadj, A., & Miller, J. (2026). CARE: Context Aware Root Cause Identification Using Distributed Traces and Profiling Metrics. IEEE Transactions on Software Engineering. https://doi.org/10.1109/tse.2025.3645143

### IEEE

M. Panahandeh, N. Ezzati-Jivan, A. Hamou-Lhadj, and J. Miller, "CARE: Context Aware Root Cause Identification Using Distributed Traces and Profiling Metrics," in IEEE Transactions on Software Engineering, 2026, doi: 10.1109/tse.2025.3645143

```bibtex
@inproceedings{ezzatiJivan2026carecontext,
  author = {Mahsa Panahandeh and Naser Ezzati-Jivan and Abdelwahab Hamou-Lhadj and James Miller},
  title = {CARE: Context Aware Root Cause Identification Using Distributed Traces and Profiling Metrics},
  year = {2026},
  booktitle = {IEEE Transactions on Software Engineering},
  doi = {10.1109/tse.2025.3645143},
  url = {https://doi.org/10.1109/tse.2025.3645143}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: DBLP/DOI bibliographic record for 10.1109/tse.2025.3645143; author identity matched to Naser Ezzati-Jivan in the local research catalog; CARE PDF pp. 1-2: problem, context-aware observability motivation, and contribution; CARE PDF pp. 3-10: service graphs, profiling metrics, trace clustering, graph ranking, and weighted spectrum analysis; CARE PDF pp. 9-12: baselines, TrainTicket and China Mobile Zhejiang datasets, metrics, accuracy results, and double-root-cause evaluation; CARE PDF pp. 11-12: HeMiRCA data mismatch and evaluation boundary; local CARE PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
