# Performance Evaluation of Complex Multi-Thread Applications Through Execution Path Analysis

**2022 | Performance Evaluation | journal article**

**Authors:** Majid Rezazadeh, Naser Ezzati-Jivan, Seyed Vahid Azhari, Michel R. Dagenais

**Core contribution:** The paper unifies Chromium application-level and Linux kernel-level traces into an execution-path model for locating sporadic latency causes in complex multithreaded applications.

## Four-part research summary

### 1. Problem and motivation

Sporadic latency in multithreaded applications can arise from application code, thread imbalance, lock contention, resource contention, or system overload. Chromium's built-in tracer provides useful application information but does not expose the kernel scheduling and resource context needed for many diagnoses.

### 2. Method and contribution

The public article describes simultaneous collection of application and operating-system data, including browser actions and function-level execution together with kernel scheduling, memory, and lock-contention evidence. The collected multilevel data are translated into a unified model, then used for kernel-level control-flow analysis of user-level browser actions; the public page also identifies LTTng instrumentation for Chromium.

### 3. Findings and evidence

The article reports three Chromium performance-bug case studies in which the method detected latency problems and identified their main causes. The public abstract does not expose the complete metric tables or evaluation protocol, so no additional numerical claim is made here.

### 4. Limitations and future directions

**Limitations:** The publicly accessible evidence is the article abstract/page rather than the complete PDF. The validated workload is Chromium, and transfer to other complex multithreaded applications remains a methodological claim rather than a broad comparative result.

**Future work:** The abstract indicates that the methodology is intended to adapt to other complex multithreaded applications; the paper-specific future-work section and broader cross-application evaluation remain unverified.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [performance-analysis](../../topics/performance-analysis.md) | [trace-analysis](../../topics/trace-analysis.md) | [multicore-systems](../../topics/multicore-systems.md) | [performance-engineering](../../topics/performance-engineering.md)

**Keywords:** multi-thread applications | [execution paths](../../keywords/execution-paths.md) | performance evaluation | thread behavior

## Versions and source links

- [Published version](https://doi.org/10.1016/j.peva.2022.102289) - published

**Canonical source:** [https://doi.org/10.1016/j.peva.2022.102289](https://doi.org/10.1016/j.peva.2022.102289)

## Identifiers

[DOI 10.1016/j.peva.2022.102289](https://doi.org/10.1016/j.peva.2022.102289)

## When to cite this paper

Cite this paper when correlating application and kernel traces to diagnose sporadic latency in complex multithreaded applications.

- Unified application/kernel execution-path modeling for Chromium-style workloads.
- LTTng-based instrumentation that adds kernel scheduling and resource context to application tracing.
- The three Chromium performance-bug case studies and their root-cause-analysis framing.

## Citation

### APA 7

Rezazadeh, M., Ezzati-Jivan, N., Azhari, S. V., & Dagenais, M. R. (2022). Performance Evaluation of Complex Multi-Thread Applications Through Execution Path Analysis. Performance Evaluation, 155-156, 102289. https://doi.org/10.1016/j.peva.2022.102289

### IEEE

M. Rezazadeh, N. Ezzati-Jivan, S. V. Azhari, and M. R. Dagenais, "Performance Evaluation of Complex Multi-Thread Applications Through Execution Path Analysis," Performance Evaluation, vol. 155-156, Art. no. 102289, 2022, doi: 10.1016/j.peva.2022.102289

```bibtex
@article{ezzatiJivan2022performanceevaluation,
  author = {Majid Rezazadeh and Naser Ezzati-Jivan and Seyed Vahid Azhari and Michel R. Dagenais},
  title = {Performance Evaluation of Complex Multi-Thread Applications Through Execution Path Analysis},
  year = {2022},
  journal = {Performance Evaluation},
  volume = {155-156},
  pages = {102289},
  eid = {102289},
  publisher = {Elsevier BV},
  issn = {0166-5316},
  doi = {10.1016/j.peva.2022.102289},
  url = {https://doi.org/10.1016/j.peva.2022.102289}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-21
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: Official Performance Evaluation article page and abstract: https://www.sciencedirect.com/science/article/pii/S0166531622000049; Public article text identifies Chromium, application/kernel collection, unified modeling, LTTng instrumentation, and three performance-bug cases; Full paper PDF or accepted manuscript still needed for page-grounded technical and quantitative enrichment
- Machine-readable record: [paper.json](./paper.json)
