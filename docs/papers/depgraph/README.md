# DepGraph: Localizing Performance Bottlenecks in Multi-Core Applications Using Waiting Dependency Graphs and Software Tracing

**2020 | IEEE 20th International Working Conference on Source Code Analysis and Manipulation (SCAM) | conference paper**

**Authors:** Naser Ezzati-Jivan, Quentin Fournier, Michel R. Dagenais, Abdelwahab Hamou-Lhadj

**Core contribution:** DepGraph uses system-level tracing to expose the waiting dependencies that divide a task's execution time across threads and hardware resources.

## Four-part research summary

### 1. Problem and motivation

System-level traces expose waiting and resource interactions, but conventional analysis does not present a compact causal view of why requests are delayed across threads and resources.

### 2. Method and contribution

DepGraph collects LTTng kernel events, reconstructs process/resource states in a state database, recursively builds duration-weighted Waiting Dependency Graphs, groups executions with k-means, and compares representative graphs to expose direct and indirect dependencies.

### 3. Findings and evidence

The method identified lock contention in a slow Apache/PHP request, CPU/interruption contention in Cyclictest, and disk contention in Apache workloads. Across Sysbench CPU/IO/mixed workloads, dependency tracing stayed within 10.1% relative duration overhead; Babeltrace 3 decoding and graph analysis remained measurable but practical on the test machine.

### 4. Limitations and future directions

**Limitations:** The study uses one Linux machine and selected workloads/use cases. The graph is primarily an off-CPU/resource-waiting abstraction; broad portability, distributed/network causal analysis, and causal validation beyond graph comparison are unknown.

**Future work:** Extend the graph model and evaluation to broader systems, workloads, and distributed/network settings; reduce state/decoding cost and improve automated interpretation of graph differences.

## Abstract

This paper addresses the challenge of understanding the waiting dependencies between the threads and hardware resources required to complete a task. The objective is to improve software performance by detecting the underlying bottlenecks caused by system-level blocking dependencies. In this paper, we use a system level tracing approach to extract a Waiting Dependency Graph that shows the breakdown of a task execution among all the interleaving threads and resources. The method allows developers and system administrators to quickly discover how the total execution time is divided among its interacting threads and resources. Ultimately, the method helps detecting bottlenecks and highlighting their possible causes. Our experiments show the effectiveness of the proposed approach in several industry-level use cases. Three performance anomalies are analysed and explained using the proposed approach. Evaluating the method efficiency reveals that the imposed overhead never exceeds 10.1%, therefore making it suitable for in-production environments.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [multicore-systems](../../topics/multicore-systems.md)

**Keywords:** [waiting dependency graph](../../keywords/waiting-dependency-graph.md) | [system-level tracing](../../keywords/system-level-tracing.md) | [blocking dependencies](../../keywords/blocking-dependencies.md) | [performance bottlenecks](../../keywords/performance-bottlenecks.md) | [thread-resource interactions](../../keywords/thread-resource-interactions.md)

## Versions and source links

- [Published version](https://doi.org/10.1109/SCAM51674.2020.00022) - published
- [Public preprint](https://arxiv.org/abs/2103.04933) | [PDF](https://arxiv.org/pdf/2103.04933) - public_full_text

**Canonical source:** [https://doi.org/10.1109/SCAM51674.2020.00022](https://doi.org/10.1109/SCAM51674.2020.00022)

## Identifiers

[DOI 10.1109/SCAM51674.2020.00022](https://doi.org/10.1109/SCAM51674.2020.00022) | [arXiv 2103.04933](https://arxiv.org/abs/2103.04933)

## When to cite this paper

Cite this paper when your work uses or compares waiting Dependency Graphs that unify thread and resource waiting causes.

- For Waiting Dependency Graphs that unify thread and resource waiting causes.
- For distinguishing direct wakeup dependencies from indirect CPU/disk contention dependencies in kernel traces.
- For grouping executions with k-means and comparing representative dependency graphs.
- For the measured worst-case 10.1% dependency-tracing overhead on the stated Sysbench setup.

## Citation

### APA 7

Ezzati-Jivan, N., Fournier, Q., Dagenais, M. R., & Hamou-Lhadj, A. (2020). DepGraph: Localizing Performance Bottlenecks in Multi-Core Applications Using Waiting Dependency Graphs and Software Tracing. IEEE 20th International Working Conference on Source Code Analysis and Manipulation (SCAM). https://doi.org/10.1109/SCAM51674.2020.00022

### IEEE

N. Ezzati-Jivan, Q. Fournier, M. R. Dagenais, and A. Hamou-Lhadj, "DepGraph: Localizing Performance Bottlenecks in Multi-Core Applications Using Waiting Dependency Graphs and Software Tracing," in IEEE 20th International Working Conference on Source Code Analysis and Manipulation (SCAM), 2020, doi: 10.1109/SCAM51674.2020.00022

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

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: DBLP and IEEE metadata for the published paper; official arXiv abstract and DepGraph PDF pp. 3, 8-10: LTTng, event/state extraction, evaluation setup, tracing cost, and Babeltrace 3; local PDF hash verified in the working catalog
- Machine-readable record: [paper.json](./paper.json)
