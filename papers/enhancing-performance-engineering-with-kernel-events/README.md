# Enhancing empirical software performance engineering research with kernel-level events: A comprehensive system tracing approach

**2024 | Journal of Systems and Software | journal article**

**Authors:** Morteza Noferesti, Naser Ezzati-Jivan

**Core contribution:** The paper contributes a reusable kernel-event and system-call artifact for empirical software performance engineering, together with workloads, injected noise, and analysis applications.

## Four-part research summary

### 1. Problem and motivation

Application-level measurements can show that a workload is slow without exposing the operating-system events and resource interference behind the variation. Reproducible performance studies therefore need realistic, multi-scenario kernel-level evidence rather than isolated application metrics.

### 2. Method and contribution

The public article describes an Elasticsearch/Kibana-based artifact containing Linux kernel events and system calls. It defines light- and heavy-load scenarios and injects CPU, I/O, network, and memory noise. The artifact is used for three applications: performance monitoring, noise detection/root-cause analysis, and software-phase detection. The public abstract reports 24,263,691 recorded events and links the collection scripts, system configurations, and traces.

### 3. Findings and evidence

The publisher reports a multi-scenario artifact with diverse workloads and noise conditions, intended to make performance-engineering evaluations more realistic. The 24,263,691-event count and three application scenarios are public artifact/article claims; paper-level accuracy, overhead, and comparative results still require the full publication text.

### 4. Limitations and future directions

**Limitations:** The publisher PDF was not obtained. The public artifact represents a documented Linux environment and simulated noise classes; cross-platform validity, workload representativeness, measurement overhead, and the complete threat-to-validity analysis remain unverified.

**Future work:** Obtain the accepted manuscript or version of record, verify the paper's quantitative evaluations, and extend the artifact with independent workloads, additional operating systems and kernels, standardized event schemas, controlled overhead measurements, and reproducible cross-study baselines.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [performance-engineering](../../topics/performance-engineering.md) | [observability](../../topics/observability.md) | [anomaly-detection](../../topics/anomaly-detection.md)

**Keywords:** [LTTng](../../keywords/lttng.md) | Linux kernel events | [system calls](../../keywords/system-calls.md) | kernel tracepoints | Elasticsearch | Kibana | IoT dataset | [stress-ng](../../keywords/stress-ng.md) | CPU noise | I/O noise | network noise | memory noise | software phase detection | 24,263,691 events

## Resources

- [Code](https://github.com/mnoferestibrocku/dataset-repo)
- [Data](https://github.com/mnoferestibrocku/dataset-repo)

## Versions and source links

- [Published version](https://doi.org/10.1016/j.jss.2024.112117) - published

**Canonical source:** [https://doi.org/10.1016/j.jss.2024.112117](https://doi.org/10.1016/j.jss.2024.112117)

## Identifiers

[DOI 10.1016/j.jss.2024.112117](https://doi.org/10.1016/j.jss.2024.112117)

## When to cite this paper

Cite this paper when its specific method, evidence, or benchmark is directly relevant.

- The paper's method is directly relevant.
- The paper's evidence or benchmark is directly relevant.

## Citation

### APA 7

Noferesti, M., & Ezzati-Jivan, N. (2024). Enhancing empirical software performance engineering research with kernel-level events: A comprehensive system tracing approach. Journal of Systems and Software, 216, 112117. https://doi.org/10.1016/j.jss.2024.112117

### IEEE

M. Noferesti and N. Ezzati-Jivan, "Enhancing empirical software performance engineering research with kernel-level events: A comprehensive system tracing approach," Journal of Systems and Software, vol. 216, Art. no. 112117, 2024, doi: 10.1016/j.jss.2024.112117

```bibtex
@article{ezzatiJivan2024enhancingempirical,
  author = {Morteza Noferesti and Naser Ezzati-Jivan},
  title = {Enhancing empirical software performance engineering research with kernel-level events: A comprehensive system tracing approach},
  year = {2024},
  journal = {Journal of Systems and Software},
  volume = {216},
  pages = {112117},
  eid = {112117},
  publisher = {Elsevier BV},
  issn = {0164-1212},
  doi = {10.1016/j.jss.2024.112117},
  url = {https://doi.org/10.1016/j.jss.2024.112117}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-21
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: Official ScienceDirect article and abstract: https://www.sciencedirect.com/science/article/pii/S0164121224001626; Public article page reports the 24,263,691-event artifact, light/heavy loads, four injected noise classes, and three applications; Author artifact repository: https://github.com/mnoferestibrocku/dataset-repo; Full publication text was not obtained; details remain abstract/article-page grounded
- Machine-readable record: [paper.json](./paper.json)
