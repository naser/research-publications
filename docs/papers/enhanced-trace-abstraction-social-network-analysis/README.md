# Enhanced Execution Trace Abstraction Approach Using Social Network Analysis Methods

**2020 | Softwaretechnik-Trends | article**

**Authors:** Ji Wang, Naser Ezzati-Jivan

**Core contribution:** The paper adapts community detection and PageRank from social-network analysis to reduce and prioritize system execution traces.

## Four-part research summary

### 1. Problem and motivation

Kernel-level tracing provides detailed execution evidence but also produces very large, noisy datasets that are difficult to inspect directly.

### 2. Method and contribution

LTTng collects trace data, Trace Compass and scripting extract thread interactions, the interactions form a directed weighted graph, Louvain partitions the graph into communities, and PageRank ranks important threads within each community.

### 3. Findings and evidence

The reported use cases support trace filtering and virtual-machine clustering. The evaluation reports 14 ns per enabled event, a 5.3% slowdown, 509 threads, 6,015 interactions, a 316 MB trace, and 1,599 ms for metric extraction.

### 4. Limitations and future directions

**Limitations:** The evaluation uses a small number of use cases and a particular LTTng/Trace Compass workflow.

**Future work:** Future work should evaluate more workloads, larger traces, automatic parameter selection, and more systematic comparisons with trace-abstraction baselines.

## Abstract

This paper applies social-network-analysis techniques to system execution traces. The workflow collects Linux kernel and user-space traces with LTTng, constructs a directed weighted graph of thread interactions, detects communities with the Louvain method, and ranks important threads with PageRank. Two use cases address trace filtering and virtual-machine clustering. In the reported evaluation, the analysis adds a 5.3% slowdown to the traced program, extracts 509 threads and 6,015 interactions from a 316 MB trace, and computes graph metrics in 1,599 ms.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [trace-abstraction](../../topics/trace-abstraction.md) | [social-network-analysis](../../topics/social-network-analysis.md) | [trace-filtering](../../topics/trace-filtering.md) | [lttng](../../topics/lttng.md)

**Keywords:** [LTTng](../../keywords/lttng.md) | [Trace Compass](../../keywords/trace-compass.md) | [Louvain community detection](../../keywords/louvain-community-detection.md) | [PageRank](../../keywords/pagerank.md) | [thread interaction graph](../../keywords/thread-interaction-graph.md) | [trace filtering](../../keywords/trace-filtering.md) | [virtual-machine clustering](../../keywords/virtual-machine-clustering.md)

## Versions and source links

- [Public PDF](https://fb-swt.gi.de/fileadmin/FB/SWT/Softwaretechnik-Trends/Verzeichnis/Band_40_Heft_3/SSP2020_Wang.pdf) - public_full_text
- [DBLP record](https://dblp.org/rec/journals/stt/WangE20) - metadata_record

**Primary source:** [https://fb-swt.gi.de/fileadmin/FB/SWT/Softwaretechnik-Trends/Verzeichnis/Band_40_Heft_3/SSP2020_Wang.pdf](https://fb-swt.gi.de/fileadmin/FB/SWT/Softwaretechnik-Trends/Verzeichnis/Band_40_Heft_3/SSP2020_Wang.pdf)

**Access status:** public_direct_pdf. A public direct PDF was observed and downloaded for local verification. The repository links the source PDF and DBLP record; no copy is included in the public repository.

## When to cite this paper

Cite this paper when discussing graph-based trace abstraction using community detection and PageRank.

## Citation

```bibtex
@article{ezzatiJivan2020enhancedexecution,
  author = {Ji Wang and Naser Ezzati-Jivan},
  title = {Enhanced Execution Trace Abstraction Approach Using Social Network Analysis Methods},
  year = {2020},
  journal = {Softwaretechnik-Trends},
  url = {https://fb-swt.gi.de/fileadmin/FB/SWT/Softwaretechnik-Trends/Verzeichnis/Band_40_Heft_3/SSP2020_Wang.pdf}
}
```

## Record provenance

- Metadata verified: 2026-08-03
- Summary status: source-grounded catalog review; author approval pending
- Evidence: public PDF URL observed from DBLP-linked source; PDF downloaded locally and verified with %PDF- signature; first three pages extracted for summary verification
- Machine-readable record: [paper.json](./paper.json)
