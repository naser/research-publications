# System Execution Path Profiling Using Hardware Performance Counters

**2021 | 2021 IEEE International Systems Conference (SysCon) | conference paper**

**Authors:** Francis Giraldeau, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The program abstract identifies a method for profiling execution paths from sampled hardware performance counters.

## Four-part research summary

### 1. Problem and motivation

Execution-path behavior and performance variation can be difficult to observe without relating hardware-counter activity to program paths.

### 2. Method and contribution

The abstract reports counter sampling every 100,000 cycles, user-space interrupt signaling, and critical-path profiling; the exact counters, instrumentation, and analysis are not verified.

### 3. Findings and evidence

The program mentions a CPython comparison, but no page-grounded metric or result is available.

### 4. Limitations and future directions

**Limitations:** Full-text evidence is required to verify the counter set, overhead, workloads, baselines, and validity conditions.

**Future work:** The paper-specific future-work section remains unverified.

## Abstract

The official program abstract describes critical-path profiling using hardware-counter samples every 100,000 cycles, user-space interrupt signaling, and comparison with CPython behavior.

## Topics and keywords

**Tags:** [performance-analysis](../../topics/performance-analysis.md) | [resource-analysis](../../topics/resource-analysis.md) | [multicore-systems](../../topics/multicore-systems.md) | [system-tracing](../../topics/system-tracing.md)

**Keywords:** [execution paths](../../keywords/execution-paths.md) | hardware performance counters | critical-path profiling | CPython | sampling | SysCon 2021

## Versions and source links

- [Published version](https://doi.org/10.1109/SYSCON48628.2021.9447121) - published
- [Official SysCon program](https://events-siteplex.confcats.io/syscon2021/wp-content/uploads/sites/19/2021/04/syscon21-program.pdf) - public_source_record

**Canonical source:** [https://doi.org/10.1109/SYSCON48628.2021.9447121](https://doi.org/10.1109/SYSCON48628.2021.9447121)

## Identifiers

[DOI 10.1109/SYSCON48628.2021.9447121](https://doi.org/10.1109/SYSCON48628.2021.9447121)

## When to cite this paper

Cite this paper when its specific method, evidence, or benchmark is directly relevant.

- The paper's method is directly relevant.
- The paper's evidence or benchmark is directly relevant.

## Citation

### APA 7

Giraldeau, F., Ezzati-Jivan, N., & Dagenais, M. R. (2021). System Execution Path Profiling Using Hardware Performance Counters. In 2021 IEEE International Systems Conference (SysCon) (pp. 1-8). https://doi.org/10.1109/SYSCON48628.2021.9447121

### IEEE

F. Giraldeau, N. Ezzati-Jivan, and M. R. Dagenais, "System Execution Path Profiling Using Hardware Performance Counters," in 2021 IEEE International Systems Conference (SysCon), pp. 1-8, 2021, doi: 10.1109/SYSCON48628.2021.9447121

```bibtex
@inproceedings{ezzatiJivan2021systemexecution,
  author = {Francis Giraldeau and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {System Execution Path Profiling Using Hardware Performance Counters},
  year = {2021},
  booktitle = {2021 IEEE International Systems Conference (SysCon)},
  pages = {1-8},
  publisher = {IEEE},
  doi = {10.1109/SYSCON48628.2021.9447121},
  url = {https://doi.org/10.1109/SYSCON48628.2021.9447121}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: DOI: https://doi.org/10.1109/SYSCON48628.2021.9447121; DBLP record: https://dblp.org/rec/conf/syscon/GiraldeauJD21; Official SysCon program: https://events-siteplex.confcats.io/syscon2021/wp-content/uploads/sites/19/2021/04/syscon21-program.pdf; Private batch report: reports/parallel-batch-03.md
- Machine-readable record: [paper.json](./paper.json)
