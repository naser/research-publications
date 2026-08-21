# Debugging of Performance Degradation in Distributed Requests Handling Using Multilevel Trace Analysis

**2021 | Wireless Communications and Mobile Computing | journal article**

**Authors:** Naser Ezzati-Jivan, Houssem Daoud, Michel R. Dagenais

**Core contribution:** The paper correlates LTTng traces from user space through kernel, storage, network, and multiple hosts in a disk-backed state model, enabling top-down diagnosis of distributed request latency.

## Four-part research summary

### 1. Problem and motivation

Performance degradation in distributed requests can arise at user, kernel, storage, network, or remote-service layers, so single-layer tracing does not provide enough causal context.

### 2. Method and contribution

Instrument LAMP components and system layers with LTTng, synchronize hosts using causal network event pairs and convex-hull matching, maintain multilevel state trees, and perform top-down diagnosis from request latency to system call and kernel/storage/network states.

### 3. Findings and evidence

The case study localized application-level session/statistics work and disk queue contention from backup activity. The system distinguished cache-hit/miss latency classes and showed that line-level PHP tracing can approximately double response time, while selected UST tracing can approach the no-trace baseline.

### 4. Limitations and future directions

**Limitations:** The evaluation focuses on LAMP and selected instrumented cases; causal synchronization requires suitable event pairs and the available probes determine what can be explained. Network attacks, broader systems, and richer anomaly classes are not evaluated.

**Future work:** Add network-attack and host-anomaly analysis, broaden probes and workloads, and improve multilevel visualization and causal coverage.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [microservices](../../topics/microservices.md) | [performance-analysis](../../topics/performance-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [trace-analysis](../../topics/trace-analysis.md)

**Keywords:** distributed requests | multilevel trace analysis | [LTTng](../../keywords/lttng.md) | [Apache](../../keywords/apache.md) | [PHP](../../keywords/php.md) | MariaDB | [State History Tree](../../keywords/state-history-tree.md) | cache hit ratio | disk contention | ApacheBench | [Trace Compass](../../keywords/trace-compass.md)

## Resources

- [Code](https://github.com/naser/)

## Versions and source links

- [Published version](https://doi.org/10.1155/2021/8478076) - published
- [Public Wiley PDF](https://onlinelibrary.wiley.com/doi/pdf/10.1155/2021/8478076) | [PDF](https://onlinelibrary.wiley.com/doi/pdf/10.1155/2021/8478076) - public_full_text

**Canonical source:** [https://doi.org/10.1155/2021/8478076](https://doi.org/10.1155/2021/8478076)

## Identifiers

[DOI 10.1155/2021/8478076](https://doi.org/10.1155/2021/8478076)

## When to cite this paper

Cite this paper when your work uses or compares top-down multilevel root-cause analysis from distributed request latency to kernel/storage/network state.

- For top-down multilevel root-cause analysis from distributed request latency to kernel/storage/network state.
- For LTTng instrumentation spanning LAMP user space, system calls, kernel, filesystem, page cache, block layer, disk, and network.
- For cross-host causal synchronization using request/response event pairs and convex-hull matching.
- For the MediaWiki/WordPress session-check and `backup.sh` disk-queue case studies, including the tracing-cost boundary.

## Citation

### APA 7

Ezzati-Jivan, N., Daoud, H., & Dagenais, M. R. (2021). Debugging of Performance Degradation in Distributed Requests Handling Using Multilevel Trace Analysis. Wireless Communications and Mobile Computing, 2021(1), 8478076. https://doi.org/10.1155/2021/8478076

### IEEE

N. Ezzati-Jivan, H. Daoud, and M. R. Dagenais, "Debugging of Performance Degradation in Distributed Requests Handling Using Multilevel Trace Analysis," Wireless Communications and Mobile Computing, vol. 2021, no. 1, 2021, doi: 10.1155/2021/8478076

```bibtex
@article{ezzatiJivan2021debuggingof,
  author = {Naser Ezzati-Jivan and Houssem Daoud and Michel R. Dagenais},
  title = {Debugging of Performance Degradation in Distributed Requests Handling Using Multilevel Trace Analysis},
  year = {2021},
  journal = {Wireless Communications and Mobile Computing},
  volume = {2021},
  number = {1},
  eid = {8478076},
  publisher = {Wiley},
  issn = {1530-8669, 1530-8677},
  doi = {10.1155/2021/8478076},
  url = {https://doi.org/10.1155/2021/8478076}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Full text was reviewed; working copy is not distributed; Debugging paper pp. 1-10: LTTng, LAMP probes, multihost synchronization, State History Tree, data model, and top-down algorithm; Debugging paper pp. 11-13: MediaWiki/WordPress/MariaDB and unusual-latency use cases, cache analysis, and disk contention diagnosis; Debugging paper pp. 14-16: ApacheBench environment, tracing overhead, state-store/PostgreSQL comparison, conclusion, and future work; Local full-text evidence was hash-verified during catalog review; verification manifests are not distributed
- Machine-readable record: [paper.json](./paper.json)
