# Enhancing empirical software performance engineering research with kernel-level events: A comprehensive system tracing approach

**2024 | Journal of Systems and Software | research paper**

**Authors:** Morteza Noferesti, Naser Ezzati-Jivan

**Core contribution:** The work presents a reusable system-tracing artifact and workflow for bringing Linux kernel-level events into empirical software performance-engineering studies, with raw traces, analysis reports, and setup material.

## Four-part research summary

### 1. Problem and motivation

Application-level performance measurements can show that a workload is slow without exposing the operating-system events, scheduling behavior, or injected resource noise that explain the variation. A reproducible kernel-event collection and analysis artifact is therefore needed for performance-engineering research.

### 2. Method and contribution

The public artifact uses LTTng tracepoints to collect kernel-level events and system calls on Ubuntu 22.04.2 LTS. Event records include timestamps, CPU, event type, event details, PID, and TID. The repository provides twelve reports covering light and heavy workloads at different trace intervals, uses Elasticsearch and Kibana for trace handling and visualization, and uses stress-ng to simulate CPU, I/O, network, and memory noise. The README identifies three intended uses: performance monitoring, noise detection and root-cause analysis, and software-phase detection.

### 3. Findings and evidence

The artifact README reports 24,263,691 raw events from kernel events and system calls and supplies the scripts and environment information needed to reproduce the collection workflow. This evidence establishes the trace scale and intended analyses, but it does not establish paper-level accuracy, overhead, or comparative results; those claims remain pending review of the publication full text.

### 4. Limitations and future directions

**Limitations:** This enrichment is grounded in the authors' public artifact README and system-information file rather than the publisher PDF. The documented setup represents one Ubuntu/Linux environment, the noise scenarios are simulated, and the public artifact description does not by itself provide a complete paper-level threat-to-validity analysis or quantitative accuracy/overhead tables.

**Future work:** Confirm the publication's stated future-work section from the full text. From the artifact evidence, useful next steps are cross-platform replication, standardized event schemas, controlled overhead measurement, additional workload/noise classes, and evaluation of the three proposed applications on independent datasets.

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

Noferesti, M., & Ezzati-Jivan, N. (2024). Enhancing empirical software performance engineering research with kernel-level events: A comprehensive system tracing approach. Journal of Systems and Software. https://doi.org/10.1016/j.jss.2024.112117

### IEEE

M. Noferesti and N. Ezzati-Jivan, "Enhancing empirical software performance engineering research with kernel-level events: A comprehensive system tracing approach," in Journal of Systems and Software, 2024, doi: 10.1016/j.jss.2024.112117

```bibtex
@inproceedings{ezzatiJivan2024enhancingempirical,
  author = {Morteza Noferesti and Naser Ezzati-Jivan},
  title = {Enhancing empirical software performance engineering research with kernel-level events: A comprehensive system tracing approach},
  year = {2024},
  booktitle = {Journal of Systems and Software},
  doi = {10.1016/j.jss.2024.112117},
  url = {https://doi.org/10.1016/j.jss.2024.112117}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: DBLP/DOI bibliographic record for 10.1016/j.jss.2024.112117; author identity matched to Naser Ezzati-Jivan in the local research catalog; Authors' artifact README: LTTng collection, Ubuntu 22.04.2, Elasticsearch/Kibana workflow, twelve workload reports, four simulated noise types, and three intended applications; Authors' artifact README: 24,263,691 raw events, event fields, tracepoint use, installation scripts, and reproducibility instructions; Authors' artifact system-info.txt: host, Ubuntu/kernel, CPU, GPU, memory, and storage environment for the published artifact run; No local publication PDF hash is claimed; publisher/SSRN full-text retrieval was blocked during this run
- Machine-readable record: [paper.json](./paper.json)
