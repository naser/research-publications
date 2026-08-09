# A declarative framework for stateful analysis of execution traces

**2017 | Software Quality Journal | journal article**

**Authors:** Florian Wininger, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The framework lets analysts define stateful trace analyses declaratively, using a generic state model and XML specifications that can drive storage, filtering, and visualization across trace formats.

## Four-part research summary

### 1. Problem and motivation

Fixed trace viewers and hard-coded analyses do not scale to application-specific performance, security, or bottleneck questions and tie analyses to particular tracer formats.

### 2. Method and contribution

Define a generic interval-based state model and compile XML/XSD state specifications into reusable providers, filters, and visualizations backed by the State History Tree. The same style of model is demonstrated with LTTng/CTF and ETW.

### 3. Findings and evidence

Declarative specifications produce the same state-oriented views across Linux and Windows examples. Compiled Java and XML execution have similar measured times on 13.4 MiB and 100 MiB traces, while resolution-aware queries substantially lower display latency.

### 4. Limitations and future directions

**Limitations:** The language cannot express unrestricted branching; filters are virtual and not persistent; query cost grows with state attributes; resolution sampling can lose detail and correctness. The examples are not a broad scalability or user study.

**Future work:** Add critical-path analysis and more visualization types, and parallelize event parsing and state construction.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [trace-analysis](../../topics/trace-analysis.md) | [trace-abstraction](../../topics/trace-abstraction.md) | [performance-analysis](../../topics/performance-analysis.md) | [system-tracing](../../topics/system-tracing.md) | [trace-visualization](../../topics/trace-visualization.md)

**Keywords:** declarative trace analysis | stateful analysis | execution traces | [LTTng](../../keywords/lttng.md) | ETW | [State History Tree](../../keywords/state-history-tree.md) | XML | [trace filtering](../../keywords/trace-filtering.md) | [Gantt chart](../../keywords/gantt-chart.md) | [critical-path analysis](../../keywords/critical-path-analysis.md)

## Versions and source links

- [Published version](https://doi.org/10.1007/s11219-016-9311-0) - published
- [Public PolyPublie PDF](https://publications.polymtl.ca/2987/1/2017_Wininger_Declarative_framework_stateful_analysis_execution.pdf) | [PDF](https://publications.polymtl.ca/2987/1/2017_Wininger_Declarative_framework_stateful_analysis_execution.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1007/s11219-016-9311-0](https://doi.org/10.1007/s11219-016-9311-0)

## Identifiers

[DOI 10.1007/s11219-016-9311-0](https://doi.org/10.1007/s11219-016-9311-0)

## When to cite this paper

Cite this paper when your work uses or compares a declarative XML/XSD state-analysis language that compiles event handlers into reusable trace-state providers.

- For a declarative XML/XSD state-analysis language that compiles event handlers into reusable trace-state providers.
- For cross-tracer state visualization demonstrated with LTTng/CTF and Windows ETW.
- For measured resolution-aware trace display, including the speed/detail tradeoff in Table III.

## Citation

### APA 7

Wininger, F., Ezzati-Jivan, N., & Dagenais, M. R. (2017). A declarative framework for stateful analysis of execution traces. Software Quality Journal. https://doi.org/10.1007/s11219-016-9311-0

### IEEE

F. Wininger, N. Ezzati-Jivan, and M. R. Dagenais, "A declarative framework for stateful analysis of execution traces," Software Quality Journal, 2017, doi: 10.1007/s11219-016-9311-0

```bibtex
@article{ezzatiJivan2017adeclarative,
  author = {Florian Wininger and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {A declarative framework for stateful analysis of execution traces},
  year = {2017},
  journal = {Software Quality Journal},
  doi = {10.1007/s11219-016-9311-0},
  url = {https://doi.org/10.1007/s11219-016-9311-0}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Private full PDF read: pdf-evidence/notes/declarative-framework-stateful-trace-analysis.md; Declarative-framework PDF pp. 2-7: problem, state model, State History Tree, XML language, event handlers, and filters; Declarative-framework PDF pp. 8-13: LTTng/ETW evaluation, 13.4/100 MiB traces, 25 repetitions, cross-platform examples, and resolution queries; Declarative-framework PDF p. 14: limitations and future work; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
