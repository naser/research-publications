# Multi-level Adaptive Execution Tracing for Efficient Performance Analysis

**2023 | 2023 IEEE International Conference on Software Engineering and Research (SERA) | conference paper**

**Authors:** Mohammed Adib Khan, Naser Ezzati-Jivan

**Core contribution:** The paper proposes adaptive execution tracing that chooses both which components to instrument and when to collect them, aiming to retain diagnostic coverage while reducing noise and overhead.

## Four-part research summary

### 1. Problem and motivation

Fixed tracing instrumentation can miss the component that contains a performance problem, while broad always-on coverage produces unnecessary trace volume and noise.

### 2. Method and contribution

The public abstract frames the approach around kernel- and user-space tracing using tools such as ftrace, strace, DTrace, or LTTng. The proposed controller dynamically decides the tracing scope and timing rather than applying a preset instrumentation policy.

### 3. Findings and evidence

The case-study synopsis reports dynamic handling of kernel- and application-level instrumentation with low overhead, but no numeric overhead, workload, trigger rule, or accuracy result was available in the captured sources.

### 4. Limitations and future directions

**Limitations:** The full paper was not obtained; tracer implementation, adaptation thresholds, state representation, workload coverage, and comparison against fixed tracing remain unverified.

**Future work:** Verify the paper-specific future-work section and evaluate adaptation under rare faults, changing workloads, and multi-host distributed traces.

## Abstract

The available program synopsis describes dynamic kernel/application tracing guided by time-series trends with an emphasis on reducing tracing overhead; the exact trigger logic and evaluation were not captured.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [adaptive-scheduling](../../topics/adaptive-scheduling.md)

**Keywords:** adaptive execution tracing | time-series trends | multi-level tracing | [kernel tracing](../../keywords/kernel-tracing.md) | performance analysis | SERA 2023

## Versions and source links

- [Published version](https://doi.org/10.1109/SERA57763.2023.10197790) - published
- [SERA program](https://acisinternational.org/wp-content/uploads/2023/05/SERA-2023-Program-v81-1.pdf) - public_source_record

**Canonical source:** [https://doi.org/10.1109/SERA57763.2023.10197790](https://doi.org/10.1109/SERA57763.2023.10197790)

## Identifiers

[DOI 10.1109/SERA57763.2023.10197790](https://doi.org/10.1109/SERA57763.2023.10197790)

## When to cite this paper

Cite this paper when selecting both tracing scope and collection timing dynamically across kernel and application layers.

- Adaptive decisions about what to trace and when to trace.
- The coverage-versus-noise trade-off in fixed kernel/application instrumentation.
- Low-overhead adaptive tracing as an abstract-level result pending full-text verification.

## Citation


### Alternative or source-rendered titles

- Time-Series Trend-Based Multi-Level Adaptive Execution Tracing for Performance Analysis
### APA 7

Khan, M. A., & Ezzati-Jivan, N. (2023). Multi-level Adaptive Execution Tracing for Efficient Performance Analysis. In 2023 IEEE International Conference on Software Engineering and Research (SERA) (pp. 104-109). https://doi.org/10.1109/SERA57763.2023.10197790

### IEEE

M. A. Khan and N. Ezzati-Jivan, "Multi-level Adaptive Execution Tracing for Efficient Performance Analysis," in 2023 IEEE International Conference on Software Engineering and Research (SERA), pp. 104-109, 2023, doi: 10.1109/SERA57763.2023.10197790

```bibtex
@inproceedings{ezzatiJivan2023multilevel,
  author = {Mohammed Adib Khan and Naser Ezzati-Jivan},
  title = {Multi-level Adaptive Execution Tracing for Efficient Performance Analysis},
  year = {2023},
  booktitle = {2023 IEEE International Conference on Software Engineering and Research (SERA)},
  pages = {104-109},
  publisher = {IEEE},
  doi = {10.1109/SERA57763.2023.10197790},
  url = {https://doi.org/10.1109/SERA57763.2023.10197790}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-21
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: DOI: https://doi.org/10.1109/SERA57763.2023.10197790; DBLP record: https://dblp.org/rec/conf/sera/KhanE23; SERA program: https://acisinternational.org/wp-content/uploads/2023/05/SERA-2023-Program-v81-1.pdf; OpenAlex abstract metadata reviewed for adaptive scope/timing and low-overhead claim; full text still needed
- Machine-readable record: [paper.json](./paper.json)
