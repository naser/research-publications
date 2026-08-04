# DepGraph: Localizing Performance Bottlenecks in Multi-Core Applications Using Waiting Dependency Graphs and Software Tracing

**2020 | IEEE 20th International Working Conference on Source Code Analysis and Manipulation (SCAM) | conference paper**

**Authors:** Naser Ezzati-Jivan, Quentin Fournier, Michel R. Dagenais, Abdelwahab Hamou-Lhadj

**Core contribution:** DepGraph uses system-level tracing to expose the waiting dependencies that divide a task's execution time across threads and hardware resources.

## Four-part research summary

### 1. Problem and motivation

Performance debugging in multi-core systems is difficult when blocking dependencies cross thread and resource boundaries. Conventional traces contain the evidence but do not directly show which dependencies account for the delay.

### 2. Method and contribution

The method extracts a Waiting Dependency Graph from system-level traces, representing the interacting threads and resources involved in task execution. The graph is then used to localize and interpret bottlenecks in industry-level use cases.

### 3. Findings and evidence

Three performance anomalies were analyzed and explained with the graph representation. The reported tracing overhead never exceeded 10.1%, supporting the feasibility of production-oriented analysis.

### 4. Limitations and future directions

**Limitations:** The evidence is based on selected use cases and a particular tracing pipeline.

**Future work:** Future work should test broader workloads, automate more of the causal explanation, and evaluate portability across operating systems and hardware configurations.

## Abstract

This paper addresses the challenge of understanding the waiting dependencies between the threads and hardware resources required to complete a task. The objective is to improve software performance by detecting the underlying bottlenecks caused by system-level blocking dependencies. In this paper, we use a system level tracing approach to extract a Waiting Dependency Graph that shows the breakdown of a task execution among all the interleaving threads and resources. The method allows developers and system administrators to quickly discover how the total execution time is divided among its interacting threads and resources. Ultimately, the method helps detecting bottlenecks and highlighting their possible causes. Our experiments show the effectiveness of the proposed approach in several industry-level use cases. Three performance anomalies are analysed and explained using the proposed approach. Evaluating the method efficiency reveals that the imposed overhead never exceeds 10.1%, therefore making it suitable for in-production environments.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [multicore-systems](../../topics/multicore-systems.md)

**Keywords:** [waiting dependency graph](../../keywords/waiting-dependency-graph.md) | [system-level tracing](../../keywords/system-level-tracing.md) | [blocking dependencies](../../keywords/blocking-dependencies.md) | [performance bottlenecks](../../keywords/performance-bottlenecks.md) | [thread-resource interactions](../../keywords/thread-resource-interactions.md)

## Versions and source links

- [Published version](https://doi.org/10.1109/SCAM51674.2020.00022) - published
- [Public preprint](https://arxiv.org/abs/2103.04933) | [PDF](https://arxiv.org/pdf/2103.04933) - public_full_text

**Canonical source:** [https://doi.org/10.1109/SCAM51674.2020.00022](https://doi.org/10.1109/SCAM51674.2020.00022)

**Access status:** public_preprint_and_published_record. The published DOI is the canonical citation target; the arXiv preprint provides public full text.

## When to cite this paper

Cite this paper when discussing waiting-dependency graphs or system-level tracing for localizing multicore performance bottlenecks.

## Citation

```bibtex
@inproceedings{ezzatiJivan2020depgraphlocalizing,
  author = {Naser Ezzati-Jivan and Quentin Fournier and Michel R. Dagenais and Abdelwahab Hamou-Lhadj},
  title = {DepGraph: Localizing Performance Bottlenecks in Multi-Core Applications Using Waiting Dependency Graphs and Software Tracing},
  year = {2020},
  booktitle = {IEEE 20th International Working Conference on Source Code Analysis and Manipulation (SCAM)},
  doi = {10.1109/SCAM51674.2020.00022},
  url = {https://doi.org/10.1109/SCAM51674.2020.00022}
}
```

## Record provenance

- Metadata verified: 2026-08-03
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: DBLP and IEEE metadata for the published paper; official arXiv abstract and PDF page 2103.04933; local PDF hash verified in the working catalog
- Machine-readable record: [paper.json](./paper.json)
