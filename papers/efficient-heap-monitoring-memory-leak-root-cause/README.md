# Efficient Heap Monitoring Tool for Memory Leak Detection and Root-cause Analysis

**2021 | 2021 IEEE International Conference on Big Data (BigData) | conference paper**

**Authors:** Vahid Azhari, Simar Bhamra, Naser Ezzati-Jivan, Francois Tetreault

**Core contribution:** The paper proposes heap-growth analysis that records malloc, calloc, and realloc allocations and identifies memory leaks from a developer-defined threshold using a final summary snapshot.

## Four-part research summary

### 1. Problem and motivation

Memory leaks in non-garbage-collected software can cause paging and performance degradation, yet they may be difficult to reproduce across development and deployment environments.

### 2. Method and contribution

The public abstract describes capturing allocation activity to files, analyzing block growth against a tester-defined leak threshold, and using one end-of-execution snapshot rather than repeated snapshots required by ASAN/LSAN. The approach is external to the application and includes visual output for root-cause inspection.

### 3. Findings and evidence

The abstract claims more convenient visualization and more accurate leak/root-cause identification than the compared snapshot-oriented workflow, but no benchmark, precision, or overhead value is exposed in the captured sources.

### 4. Limitations and future directions

**Limitations:** The full paper was not obtained; allocator interposition details, workload coverage, false-positive handling, and comparison protocol remain unverified.

**Future work:** Verify the paper-specific future-work section and test the method across allocators, long-running services, multithreaded workloads, and production-scale allocation rates.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [resource-analysis](../../topics/resource-analysis.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [performance-analysis](../../topics/performance-analysis.md) | [system-tracing](../../topics/system-tracing.md)

**Keywords:** heap monitoring | memory leaks | [root-cause analysis](../../keywords/root-cause-analysis.md) | memory management | BigData 2021

## Versions and source links

- [Published version](https://doi.org/10.1109/BigData52589.2021.9671473) - published
- [DBLP record](https://dblp.org/rec/conf/bigdataconf/AzhariBET21) - public_source_record

**Canonical source:** [https://doi.org/10.1109/BigData52589.2021.9671473](https://doi.org/10.1109/BigData52589.2021.9671473)

## Identifiers

[DOI 10.1109/BigData52589.2021.9671473](https://doi.org/10.1109/BigData52589.2021.9671473)

## When to cite this paper

Cite this paper when detecting memory leaks from allocation-growth traces without instrumenting the target application.

- malloc/calloc/realloc capture and developer-defined leak thresholds.
- One final summary snapshot compared with multi-snapshot ASAN/LSAN workflows.
- Visualization-oriented root-cause inspection for heap-growth analysis.

## Citation

### APA 7

Azhari, V., Bhamra, S., Ezzati-Jivan, N., & Tetreault, F. (2021). Efficient Heap Monitoring Tool for Memory Leak Detection and Root-cause Analysis. In 2021 IEEE International Conference on Big Data (BigData) (pp. 3020-3030). https://doi.org/10.1109/BigData52589.2021.9671473

### IEEE

V. Azhari, S. Bhamra, N. Ezzati-Jivan, and F. Tetreault, "Efficient Heap Monitoring Tool for Memory Leak Detection and Root-cause Analysis," in 2021 IEEE International Conference on Big Data (BigData), pp. 3020-3030, 2021, doi: 10.1109/BigData52589.2021.9671473

```bibtex
@inproceedings{ezzatiJivan2021efficientheap,
  author = {Vahid Azhari and Simar Bhamra and Naser Ezzati-Jivan and Francois Tetreault},
  title = {Efficient Heap Monitoring Tool for Memory Leak Detection and Root-cause Analysis},
  year = {2021},
  booktitle = {2021 IEEE International Conference on Big Data (BigData)},
  pages = {3020-3030},
  publisher = {IEEE},
  doi = {10.1109/BigData52589.2021.9671473},
  url = {https://doi.org/10.1109/BigData52589.2021.9671473}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-21
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: DOI: https://doi.org/10.1109/BigData52589.2021.9671473; DBLP record: https://dblp.org/rec/conf/bigdataconf/AzhariBET21; OpenAlex abstract metadata reviewed for allocation capture, threshold analysis, and one-snapshot comparison; full text still needed
- Machine-readable record: [paper.json](./paper.json)
