# Multi-scale Navigation of Large Trace Data: A Survey

**2017 | Concurrency and Computation: Practice and Experience | survey article**

**Authors:** Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The survey provides a taxonomy and requirements-oriented comparison of techniques for collecting, abstracting, analyzing, visualizing, and navigating large execution traces.

## Four-part research summary

### 1. Problem and motivation

Long-running and parallel executions produce traces too large for a single-resolution display; analysts need overview, semantic navigation, and evidence-preserving drill-down.

### 2. Method and contribution

Survey trace collection, maintenance, analysis, and visualization through four abstraction families and compare hierarchical, semantic, visual, and resource-oriented navigation mechanisms and data structures.

### 3. Findings and evidence

The literature offers complementary techniques rather than one universally dominant abstraction. Linking overview levels to concrete events, states, resources, and metrics is central to usable large-trace analysis.

### 4. Limitations and future directions

**Limitations:** This paper synthesizes prior work and does not validate a new method, dataset, or benchmark. Its coverage and taxonomy are bounded by the selected literature and the paper's OS/kernel-oriented scope.

**Future work:** Improve bidirectional links between abstraction levels, support issue-to-event drill-down, and advance trace models, data structures, and interactive visualization.

## Abstract

The survey organizes abstraction and visualization techniques that help analysts navigate long operating-system and kernel traces from overview to event-level evidence.

## Topics and keywords

**Tags:** [trace-visualization](../../topics/trace-visualization.md) | [trace-abstraction](../../topics/trace-abstraction.md) | [kernel-tracing](../../topics/kernel-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [system-tracing](../../topics/system-tracing.md)

**Keywords:** trace navigation | multi-scale analysis | [trace visualization](../../keywords/trace-visualization.md) | content abstraction | metric abstraction | visual abstraction | resource abstraction | [semantic zoom](../../keywords/semantic-zoom.md) | focus-plus-context | [Trace Compass](../../keywords/trace-compass.md) | Vampir | Jumpshot | SLOG | [R-tree](../../keywords/r-tree.md) | quadtree | [State History Tree](../../keywords/state-history-tree.md)

## Versions and source links

- [Published version](https://doi.org/10.1002/cpe.4068) - published
- [Institutional full text](https://publications.polymtl.ca/2980/) - source_record

**Canonical source:** [https://doi.org/10.1002/cpe.4068](https://doi.org/10.1002/cpe.4068)

## Identifiers

[DOI 10.1002/cpe.4068](https://doi.org/10.1002/cpe.4068)

## When to cite this paper

Cite this paper when your work uses or compares the four-part taxonomy of content/data, metric, visual, and resource abstraction in large-trace navigation.

- For the four-part taxonomy of content/data, metric, visual, and resource abstraction in large-trace navigation.
- For a survey-backed comparison of semantic zoom, focus+context, hierarchical views, and linked drill-down.
- For positioning SHT, SLOG, R-trees, and quadtrees as alternative trace-navigation/data-management structures.

## Citation

### APA 7

Ezzati-Jivan, N., & Dagenais, M. R. (2017). Multi-scale Navigation of Large Trace Data: A Survey. Concurrency and Computation: Practice and Experience. https://doi.org/10.1002/cpe.4068

### IEEE

N. Ezzati-Jivan and M. R. Dagenais, "Multi-scale Navigation of Large Trace Data: A Survey," Concurrency and Computation: Practice and Experience, 2017, doi: 10.1002/cpe.4068

```bibtex
@article{ezzatiJivan2017multiscale,
  author = {Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Multi-scale Navigation of Large Trace Data: A Survey},
  year = {2017},
  journal = {Concurrency and Computation: Practice and Experience},
  doi = {10.1002/cpe.4068},
  url = {https://doi.org/10.1002/cpe.4068}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Survey PDF: four abstraction families, multi-level views, semantic/physical zoom, focus-plus-context, and trace-data structures; Survey PDF: Trace Compass/LTTV, Vampir, Jumpshot, TuningFork, HPCToolkit, VTune, and metric examples; Survey PDF: complementary-techniques conclusion and bidirectional-link future direction; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
