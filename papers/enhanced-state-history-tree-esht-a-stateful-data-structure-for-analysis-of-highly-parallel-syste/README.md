# Enhanced State History Tree (eSHT): A Stateful Data Structure for Analysis of Highly Parallel System Traces

**2016 | IEEE BigData Congress | conference paper**

**Authors:** Loic Prieur-Drevon, Raphael Beamonte, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** eSHT redesigns the State History Tree to store and query highly parallel trace intervals more compactly and with shallower trees.

## Four-part research summary

### 1. Problem and motivation

Highly parallel traces can contain billions of events. The original state history tree becomes sparse and deep when many thread-related attributes begin together, increasing disk use, construction cost, query cost, and memory pressure.

### 2. Method and contribution

eSHT is an external-memory interval/state data structure that allows overlapping sibling ranges, stores attribute-key and child bounds, and supports subtree-oriented and multithreaded query traversal. The paper integrates the state model with Trace Compass.

### 3. Findings and evidence

On the 10,000-thread stress trace, eSHT reduced nodes and disk size by about 88%, reduced depth by 96.6%, raised node fill from 9% to 95%, and roughly halved average build time. The broader synthetic study reports roughly 2x single-query speedup and much larger full-query speedup.

### 4. Limitations and future directions

**Limitations:** The strongest numbers come from a pathological 10,000-thread case and synthetic attribute scaling; the paper does not establish equivalent gains across all real workloads or query types. The full-query result is reported from a figure rather than a single exact tabulated value.

**Future work:** Improve construction and overlap handling, investigate R-tree-like properties, and complete Trace Compass integration so the data-structure gains are exposed in the user workflow.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [trace-analysis](../../topics/trace-analysis.md) | [performance-optimization](../../topics/performance-optimization.md) | [multicore-systems](../../topics/multicore-systems.md) | [resource-analysis](../../topics/resource-analysis.md)

**Keywords:** Enhanced State History Tree | eSHT | [State History Tree](../../keywords/state-history-tree.md) | [interval data](../../keywords/interval-data.md) | external-memory indexing | LTTng 2.7.0 | [Trace Compass](../../keywords/trace-compass.md) | Linux kernel 4.3.0 | parallel traces | node fill | tree depth | query optimization

## Versions and source links

- [Published version](https://doi.org/10.1109/BigDataCongress.2016.19) - published
- [Public institutional full text](https://publications.polymtl.ca/2994/) | [PDF](https://publications.polymtl.ca/2994/1/2016_Prieur-Drevon_Enhanced_state_history_tree_eSHT.pdf) - public_accepted_manuscript

**Canonical source:** [https://doi.org/10.1109/BigDataCongress.2016.19](https://doi.org/10.1109/BigDataCongress.2016.19)

## Identifiers

[DOI 10.1109/BigDataCongress.2016.19](https://doi.org/10.1109/BigDataCongress.2016.19)

## When to cite this paper

Cite this paper when your work uses or compares an external-memory state-history/interval-tree design that removes the consecutive-sibling restriction to handle highly parallel traces.

- For an external-memory state-history/interval-tree design that removes the consecutive-sibling restriction to handle highly parallel traces.
- For the 10,000-thread result showing sparse SHT degeneration and eSHT reductions in node count, disk size, depth, and build time.
- For the use of bounds and subtree-level parallel traversal to accelerate state queries in Trace Compass-style analysis.

## Citation

### APA 7

Prieur-Drevon, L., Beamonte, R., Ezzati-Jivan, N., & Dagenais, M. R. (2016). Enhanced State History Tree (eSHT): A Stateful Data Structure for Analysis of Highly Parallel System Traces. In IEEE BigData Congress (pp. 83-90). https://doi.org/10.1109/BigDataCongress.2016.19

### IEEE

L. Prieur-Drevon, R. Beamonte, N. Ezzati-Jivan, and M. R. Dagenais, "Enhanced State History Tree (eSHT): A Stateful Data Structure for Analysis of Highly Parallel System Traces," in IEEE BigData Congress, pp. 83-90, 2016, doi: 10.1109/BigDataCongress.2016.19

```bibtex
@inproceedings{ezzatiJivan2016enhancedstate,
  author = {Loic Prieur-Drevon and Raphael Beamonte and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Enhanced State History Tree (eSHT): A Stateful Data Structure for Analysis of Highly Parallel System Traces},
  year = {2016},
  booktitle = {IEEE BigData Congress},
  pages = {83-90},
  publisher = {IEEE},
  doi = {10.1109/BigDataCongress.2016.19},
  url = {https://doi.org/10.1109/BigDataCongress.2016.19}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: PolyPublie repository record identity matched to the catalog title and author record; public PDF downloaded locally and %PDF- signature verified; PolyPublie cover sheet identifies this as the IEEE accepted version.
- Machine-readable record: [paper.json](./paper.json)
