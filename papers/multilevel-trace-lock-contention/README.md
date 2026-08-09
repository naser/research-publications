# Multi-Level Execution Trace Based Lock Contention Analysis

**2020 | IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW) | conference paper**

**Authors:** Majid Rezazadeh, Naser Ezzati-Jivan, Evan Galea, Michel R. Dagenais

**Core contribution:** The paper extends critical-path analysis across kernel and user-space lock events so contention from futexes, spinlocks, semaphores, and other synchronization mechanisms can be diagnosed without recompiling the application.

## Four-part research summary

### 1. Problem and motivation

Kernel-only analysis misses locks implemented in user space, while source-dependent tools are difficult to apply to large multi-threaded applications and cannot provide a unified view of cross-level dependencies.

### 2. Method and contribution

LTTng 2.10 and Trace Compass 4 collect kernel futex events and user-space Pthreads wrapper events injected with LD_PRELOAD. The method maps events to state intervals in a tree-based state system, constructs a sparse execution graph with horizontal running edges and vertical blocking edges, and recursively replaces waiting edges with waking-thread edges to extract a multi-level active path. Wait-block, flame-graph, critical-flow, and state views expose the result.

### 3. Findings and evidence

A C++ Pthreads evaluation covers spinlock and semaphore contention. User-space lock-event tracing adds less than 0.7% execution-time overhead; enabling all kernel events can impose up to 25%, while the minimal event set for lock analysis is reported at about 7%. In Apache, the method isolates user-space file-lock waits and connects anomalous latency to OPcache shared-cache contention during concurrent script compilation.

### 4. Limitations and future directions

**Limitations:** The evidence covers C++ and Apache/PHP cases and shows that kernel overhead is highly event-set dependent; it does not establish broad language, workload, or distributed-deployment generalization. The reviewed conclusion does not specify a concrete author-stated future-work agenda.

**Future work:** No detailed future-work direction is stated in the reviewed conclusion; further extensions should be treated as proposed follow-up rather than as author claims.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md)

**Keywords:** lock contention | multi-level execution traces | LTTng 2.10 | Trace Compass 4 | LD_PRELOAD | Pthreads | [futex](../../keywords/futex.md) | spinlock | semaphore | [critical path](../../keywords/critical-path.md) | [state system](../../keywords/state-system.md) | [Apache](../../keywords/apache.md) | OPcache

## Versions and source links

- [Published version](https://doi.org/10.1109/issrew51248.2020.00068) - published

**Canonical source:** [https://doi.org/10.1109/issrew51248.2020.00068](https://doi.org/10.1109/issrew51248.2020.00068)

## Identifiers

[DOI 10.1109/issrew51248.2020.00068](https://doi.org/10.1109/issrew51248.2020.00068)

## When to cite this paper

Cite this paper when diagnosing lock contention across kernel and user-space synchronization mechanisms without recompiling the application.

- LTTng 2.10, Trace Compass 4, futex events, and LD_PRELOAD Pthreads wrappers.
- Multi-level execution graphs and active paths for mutex, spinlock, and semaphore dependencies.
- C++ and Apache/OPcache cases with minimal-tracing overhead and full-kernel-event overhead bounds.

## Citation

### APA 7

Rezazadeh, M., Ezzati-Jivan, N., Galea, E., & Dagenais, M. R. (2020). Multi-Level Execution Trace Based Lock Contention Analysis. In IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW) (pp. 177-182). https://doi.org/10.1109/issrew51248.2020.00068

### IEEE

M. Rezazadeh, N. Ezzati-Jivan, E. Galea, and M. R. Dagenais, "Multi-Level Execution Trace Based Lock Contention Analysis," in IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW), pp. 177-182, 2020, doi: 10.1109/issrew51248.2020.00068

```bibtex
@inproceedings{ezzatiJivan2020multilevel,
  author = {Majid Rezazadeh and Naser Ezzati-Jivan and Evan Galea and Michel R. Dagenais},
  title = {Multi-Level Execution Trace Based Lock Contention Analysis},
  year = {2020},
  booktitle = {IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW)},
  pages = {177-182},
  publisher = {IEEE},
  doi = {10.1109/issrew51248.2020.00068},
  url = {https://doi.org/10.1109/issrew51248.2020.00068}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: Crossref and local DBLP/venue metadata for 10.1109/issrew51248.2020.00068; author identity matched to Naser Ezzati-Jivan in the local research catalog; Lock-contention PDF pp. 1-4: LTTng 2.10, Trace Compass 4, LD_PRELOAD Pthreads wrappers, event sets, state system, graph, and active-path algorithm; Lock-contention PDF pp. 4-6: visualization views, C++/Pthreads overhead, Apache/OPcache case, and analysis boundary; local lock-contention PDF hash verified in pdf-evidence/notes/multilevel-trace-lock-contention.md and pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
