# Multi-Level Execution Trace Based Lock Contention Analysis

**2020 | IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW) | conference paper**

**Authors:** Majid Rezazadeh, Naser Ezzati-Jivan, Evan Galea, Michel R. Dagenais

**Core contribution:** The paper extends critical-path analysis across kernel and user-space lock events so contention from futexes, spinlocks, semaphores, and other synchronization mechanisms can be diagnosed without recompiling the application.

## Four-part research summary

### 1. Problem and motivation

Source-level inspection and hardware counters do not reliably reveal which threads or locks cause waiting, while kernel-only tracing misses userspace mutexes, spinlocks, and semaphores. The paper targets a unified view of lock contention across userspace and kernel scheduling.

### 2. Method and contribution

The implementation uses LTTng 2.10 and Trace Compass 4. Kernel futex events are combined with userspace Pthreads wrappers injected through LD_PRELOAD, so supported applications need not be recompiled. The wrappers emit request, acquire, release, wait, and post events for mutexes, spinlocks, and semaphores. Events are mapped into a disk-backed State System/attribute tree and used to build a multilevel execution graph with horizontal thread-state edges and vertical wake/dependency edges. Wait-block timelines, flame graphs, and critical-flow views expose the blocking chain.

### 3. Findings and evidence

The userspace wrapper overhead is reported below 0.7% for the tested C++ Pthreads spinlock and semaphore examples. Full kernel tracing can reach about 25% overhead, while the minimal event set for lock analysis is reported at about 7%, including scheduling, futex, interrupt, and timer events. An Apache/OPcache file-lock case identifies cache-write contention as a latency source, and small C++ examples demonstrate cross-thread mutex, semaphore, and spinlock dependencies.

### 4. Limitations and future directions

**Limitations:** The evaluation is based on supported Pthreads examples, Apache/PHP behavior, and controlled lock cases; overhead and analysis cost will depend on enabled events, trace volume, and application behavior. LD_PRELOAD wrapping covers supported Pthreads interfaces but is not a universal userspace synchronization solution. The paper does not report a broad detection-accuracy benchmark.

**Future work:** No distinct author-specified future-work agenda was verified in the inspected paper. Cite the demonstrated lock-contention workflow and reported overhead, not an invented roadmap.

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

Cite this paper when analyzing userspace and kernel lock contention together in a Trace Compass state-system workflow.

- For LD_PRELOAD-based Pthreads wrappers that avoid application recompilation.
- For combining futex, scheduling, and userspace mutex/spinlock/semaphore events.
- For the multilevel execution graph, wait-block timeline, flame graph, and critical-flow views.
- For the reported below-0.7% userspace-wrapper overhead and approximately 7% minimal kernel-event overhead.

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
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Exact full paper PDF reviewed: Multilevel Trace Analysis of Lock Contention, IEEE ISSREW 2020, DOI 10.1109/ISSREW51248.2020.00068.; LTTng/Trace Compass versions, LD_PRELOAD instrumentation, State System representation, views, overhead levels, and Apache/C++ cases were checked against the paper.
- Machine-readable record: [paper.json](./paper.json)
