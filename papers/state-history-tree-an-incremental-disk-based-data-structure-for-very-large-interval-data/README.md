# State History Tree: An Incremental Disk-Based Data Structure for Very Large Interval Data

**2013 | IEEE International Conference on Social Computing | conference paper**

**Authors:** Alexandre Montplaisir-Goncalves, Naser Ezzati-Jivan, Florian Wininger, Michel R. Dagenais

**Core contribution:** The paper presents a disk-oriented State History Tree that stores very large, time-ordered trace intervals without repeated node rebalancing.

## Four-part research summary

### 1. Problem and motivation

Trace-derived, time-ordered interval histories can exceed memory capacity; generic R-trees rebalance repeatedly during chronological construction, while B-trees do not directly model intervals (pp. 2-5).

### 2. Method and contribution

The State History Tree stores key/value intervals in fixed-size disk blocks organized as a tree. Nodes are closed and committed without rebalancing when chronological end-time insertion fills them; sequence numbers and child time boundaries guide navigation. Full and key-specific ad-hoc queries traverse relevant branches (pp. 5-7).

### 3. Findings and evidence

The Java implementation integrates with Eclipse TMF/Linux Tools and manages state intervals extracted from LTTng traces. Tested block sizes are 16 KB, 64 KB, 256 KB, 1 MB, and 4 MB; 16-256 KB perform best on the tested traces, while 1 MB is slightly better above 10 GB. For 10-550 GB traces, the paper reports about 150 ms full-query and 2 ms ad-hoc-query times (pp. 7-9). R-tree queries are faster in memory, but construction is slower and capacity-limited; PostGIS has higher reported storage/query overhead.

### 4. Limitations and future directions

**Limitations:** The design assumes intervals arrive in ascending end-time order and short intervals dominate. Frequent insertion into the past can increase imbalance and, in the worst case, degenerate toward a linear list (pp. 5-6). The conclusion states no separate author future-work agenda.

**Future work:** Unknown / not explicitly stated by the authors. Do not convert generic modern-storage or modern-tracing ideas into author-attributed future work.

## Abstract

The State History Tree is a disk-based structure for incrementally arriving, time-ordered interval data derived from LTTng system traces, designed to support very large histories.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [trace-analysis](../../topics/trace-analysis.md) | [performance-engineering](../../topics/performance-engineering.md) | [resource-analysis](../../topics/resource-analysis.md)

**Keywords:** [State History Tree](../../keywords/state-history-tree.md) | [disk-based interval data](../../keywords/disk-based-interval-data.md) | [streaming interval data](../../keywords/streaming-interval-data.md) | [time-ordered intervals](../../keywords/time-ordered-intervals.md) | [LTTng](../../keywords/lttng.md) | [Eclipse Tracing and Monitoring Framework](../../keywords/eclipse-tracing-and-monitoring-framework.md) | [Linux Tools Project](../../keywords/linux-tools-project.md) | [Java](../../keywords/java.md) | [R-tree](../../keywords/r-tree.md) | [PostgreSQL/PostGIS](../../keywords/postgresql-postgis.md) | [full query](../../keywords/full-query.md) | [ad-hoc query](../../keywords/ad-hoc-query.md)

## Versions and source links

- [Published version](https://doi.org/10.1109/SocialCom.2013.107) - published
- [Public accepted full text](https://publications.polymtl.ca/2983/1/2013_Montplaisir-Gon%C3%A7alves_State_history_tree_incremental_disk-based.pdf) | [PDF](https://publications.polymtl.ca/2983/1/2013_Montplaisir-Gon%C3%A7alves_State_history_tree_incremental_disk-based.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1109/SocialCom.2013.107](https://doi.org/10.1109/SocialCom.2013.107)

## Identifiers

[DOI 10.1109/SocialCom.2013.107](https://doi.org/10.1109/SocialCom.2013.107)

## When to cite this paper

Cite this paper when your work uses or compares incremental disk-based interval storage that avoids rebalancing under time-ordered insertion.

- Incremental disk-based interval storage that avoids rebalancing under time-ordered insertion.
- The State History Tree's full versus key-specific ad-hoc query distinction.
- LTTng-derived system-state interval storage integrated into Eclipse TMF/Linux Tools.
- The block-size and 10-550 GB scalability results, including the reported 150 ms full and 2 ms ad-hoc query values.

## Citation

### APA 7

Montplaisir-Goncalves, A., Ezzati-Jivan, N., Wininger, F., & Dagenais, M. R. (2013). State History Tree: An Incremental Disk-Based Data Structure for Very Large Interval Data. IEEE International Conference on Social Computing. https://doi.org/10.1109/SocialCom.2013.107

### IEEE

A. Montplaisir-Goncalves, N. Ezzati-Jivan, F. Wininger, and M. R. Dagenais, "State History Tree: An Incremental Disk-Based Data Structure for Very Large Interval Data," in IEEE International Conference on Social Computing, 2013, doi: 10.1109/SocialCom.2013.107

```bibtex
@inproceedings{ezzatiJivan2013statehistory,
  author = {Alexandre Montplaisir-Goncalves and Naser Ezzati-Jivan and Florian Wininger and Michel R. Dagenais},
  title = {State History Tree: An Incremental Disk-Based Data Structure for Very Large Interval Data},
  year = {2013},
  booktitle = {IEEE International Conference on Social Computing},
  doi = {10.1109/SocialCom.2013.107},
  url = {https://doi.org/10.1109/SocialCom.2013.107}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: State History Tree PDF: LTTng-derived intervals, Java/TMF implementation, disk blocks, and query design; State History Tree PDF: Intel Core i7-920/6 GB platform, block-size study, 10-550 GB scale, query times, and comparisons; State History Tree PDF: chronological-insertion limitation and conclusion boundary; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
