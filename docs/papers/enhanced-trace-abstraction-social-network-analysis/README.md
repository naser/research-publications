# Enhanced Execution Trace Abstraction Approach Using Social Network Analysis Methods

**2020 | Softwaretechnik-Trends | article**

**Authors:** Ji Wang, Naser Ezzati-Jivan

**Core contribution:** The paper adapts community detection and PageRank from social-network analysis to reduce and prioritize system execution traces.

## Four-part research summary

### 1. Problem and motivation

Large execution traces expose many thread interactions, making it difficult to retain a concise, useful view while filtering irrelevant activity.

### 2. Method and contribution

Collect LTTng kernel events, construct a weighted directed thread-interaction graph, detect communities with Louvain, rank important nodes with within-community PageRank, and apply the resulting abstraction/filter through Trace Compass EASE.

### 3. Findings and evidence

On the reported Ubuntu/LTTng trace, the method processed 509 threads and 6,015 distinct interactions from a 316 MB trace, with 1,599 ms extraction time and 5.3% overall slowdown. The paper demonstrates trace filtering; VM clustering is only an abstract-level claim in this evidence boundary.

### 4. Limitations and future directions

**Limitations:** This is a three-page short paper with one small evaluation, no systematic abstraction baseline, and no reported filtering-quality metric. Workload details, parameter sensitivity, and a VM-clustering evaluation are unknown.

**Future work:** Validate the abstraction across workloads, compare filtering baselines, quantify information loss/usefulness, and provide the missing VM-clustering method and evaluation if that use case is retained.

## Abstract

This paper applies social-network-analysis techniques to system execution traces. The workflow collects Linux kernel and user-space traces with LTTng, constructs a directed weighted graph of thread interactions, detects communities with the Louvain method, and ranks important threads with PageRank. Two use cases address trace filtering and virtual-machine clustering. In the reported evaluation, the analysis adds a 5.3% slowdown to the traced program, extracts 509 threads and 6,015 interactions from a 316 MB trace, and computes graph metrics in 1,599 ms.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [trace-abstraction](../../topics/trace-abstraction.md) | [social-network-analysis](../../topics/social-network-analysis.md) | [trace-filtering](../../topics/trace-filtering.md) | [lttng](../../topics/lttng.md)

**Keywords:** [LTTng](../../keywords/lttng.md) | [Trace Compass](../../keywords/trace-compass.md) | [Louvain community detection](../../keywords/louvain-community-detection.md) | [PageRank](../../keywords/pagerank.md) | [thread interaction graph](../../keywords/thread-interaction-graph.md) | [trace filtering](../../keywords/trace-filtering.md) | [virtual-machine clustering](../../keywords/virtual-machine-clustering.md)

## Versions and source links

- [Public PDF](https://fb-swt.gi.de/fileadmin/FB/SWT/Softwaretechnik-Trends/Verzeichnis/Band_40_Heft_3/SSP2020_Wang.pdf) - public_full_text
- [DBLP record](https://dblp.org/rec/journals/stt/WangE20) - metadata_record

**Canonical source:** [https://fb-swt.gi.de/fileadmin/FB/SWT/Softwaretechnik-Trends/Verzeichnis/Band_40_Heft_3/SSP2020_Wang.pdf](https://fb-swt.gi.de/fileadmin/FB/SWT/Softwaretechnik-Trends/Verzeichnis/Band_40_Heft_3/SSP2020_Wang.pdf)

## Identifiers



## When to cite this paper

Cite this paper when your work uses or compares applying Louvain community detection to thread-interaction graphs for trace abstraction.

- For applying Louvain community detection to thread-interaction graphs for trace abstraction.
- For PageRank-based prioritization of important threads inside interaction communities.
- For a Trace Compass EASE script that turns the graph abstraction into a global trace filter.
- For the concrete 5.3% slowdown, 316 MB trace, 509-thread, and 1,599 ms extraction measurements; not for a validated VM-clustering result.

## Citation

### APA 7

Wang, J., & Ezzati-Jivan, N. (2020). Enhanced Execution Trace Abstraction Approach Using Social Network Analysis Methods. Softwaretechnik-Trends. https://fb-swt.gi.de/fileadmin/FB/SWT/Softwaretechnik-Trends/Verzeichnis/Band_40_Heft_3/SSP2020_Wang.pdf

### IEEE

J. Wang and N. Ezzati-Jivan, "Enhanced Execution Trace Abstraction Approach Using Social Network Analysis Methods," Softwaretechnik-Trends, 2020, [Online]. Available: https://fb-swt.gi.de/fileadmin/FB/SWT/Softwaretechnik-Trends/Verzeichnis/Band_40_Heft_3/SSP2020_Wang.pdf

```bibtex
@article{ezzatiJivan2020enhancedexecution,
  author = {Ji Wang and Naser Ezzati-Jivan},
  title = {Enhanced Execution Trace Abstraction Approach Using Social Network Analysis Methods},
  year = {2020},
  journal = {Softwaretechnik-Trends},
  url = {https://fb-swt.gi.de/fileadmin/FB/SWT/Softwaretechnik-Trends/Verzeichnis/Band_40_Heft_3/SSP2020_Wang.pdf}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: public PDF URL observed from DBLP-linked source; PDF downloaded locally and verified with %PDF- signature; first three pages extracted for summary verification
- Machine-readable record: [paper.json](./paper.json)
