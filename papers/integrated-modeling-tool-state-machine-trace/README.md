# Integrated Modeling Tool for Indexing and Analyzing State Machine Trace

**2021 | 2021 IEEE International Symposium on Networks, Computers and Communications (ISNCC) | conference paper**

**Authors:** Simon Delisle, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper presents a state-machine modeling tool for creating user-defined, data-driven trace analyses from combined kernel-space and user-space execution events.

## Four-part research summary

### 1. Problem and motivation

Comprehensive execution tracing creates large files containing irrelevant events, while existing user-defined analysis tools can require complex domain-specific scripts and make it difficult to specify exactly what to capture.

### 2. Method and contribution

The public abstract describes a state-machine model that combines kernel and user-space events to automatically generate event-based analyses for user requirements. The tool is designed to simplify analysis creation and supports multi-level dynamic tracing in Linux-kernel use cases.

### 3. Findings and evidence

The authors report demonstrations of efficiency, effectiveness, and simplicity through real multi-level dynamic execution-tracing use cases. The captured public metadata does not expose the event schema, storage engine, workload, or numeric results.

### 4. Limitations and future directions

**Limitations:** The complete paper was not obtained; exact model semantics, supported tracers, data structures, evaluation protocol, and reproducibility artifacts remain unverified.

**Future work:** Verify the paper-specific future-work section and evaluate the modeling workflow on larger traces, more operating systems, and analysts with different levels of tracing expertise.

## Abstract

The accessible abstract describes a modeled state representation with a special-purpose database, filtering/highlighting, and Gantt/XY views for Linux and Windows traces.

## Topics and keywords

**Tags:** [trace-analysis](../../topics/trace-analysis.md) | [trace-visualization](../../topics/trace-visualization.md) | [trace-abstraction](../../topics/trace-abstraction.md) | [performance-analysis](../../topics/performance-analysis.md)

**Keywords:** state-machine traces | trace indexing | special-purpose database | [Gantt chart](../../keywords/gantt-chart.md) | XY view | [trace filtering](../../keywords/trace-filtering.md)

## Versions and source links

- [Published version](https://doi.org/10.1109/ISNCC52172.2021.9615814) - published
- [PolyPublie institutional publication record](https://publications.polymtl.ca/50159/) - public_source_record

**Canonical source:** [https://doi.org/10.1109/ISNCC52172.2021.9615814](https://doi.org/10.1109/ISNCC52172.2021.9615814)

## Identifiers

[DOI 10.1109/ISNCC52172.2021.9615814](https://doi.org/10.1109/ISNCC52172.2021.9615814)

## When to cite this paper

Cite this paper when building user-defined state-machine analyses over combined kernel and user-space execution traces.

- State-machine modeling for data-driven trace analysis.
- Automatic generation of event-based analyses from user requirements.
- Multi-level Linux kernel tracing use cases with the detailed implementation boundary marked as pending.

## Citation

### APA 7

Delisle, S., Ezzati-Jivan, N., & Dagenais, M. R. (2021). Integrated Modeling Tool for Indexing and Analyzing State Machine Trace. In 2021 IEEE International Symposium on Networks, Computers and Communications (ISNCC) (pp. 1-8). https://doi.org/10.1109/ISNCC52172.2021.9615814

### IEEE

S. Delisle, N. Ezzati-Jivan, and M. R. Dagenais, "Integrated Modeling Tool for Indexing and Analyzing State Machine Trace," in 2021 IEEE International Symposium on Networks, Computers and Communications (ISNCC), pp. 1-8, 2021, doi: 10.1109/ISNCC52172.2021.9615814

```bibtex
@inproceedings{ezzatiJivan2021integratedmodeling,
  author = {Simon Delisle and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Integrated Modeling Tool for Indexing and Analyzing State Machine Trace},
  year = {2021},
  booktitle = {2021 IEEE International Symposium on Networks, Computers and Communications (ISNCC)},
  pages = {1-8},
  publisher = {IEEE},
  doi = {10.1109/ISNCC52172.2021.9615814},
  url = {https://doi.org/10.1109/ISNCC52172.2021.9615814}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-21
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: DOI: https://doi.org/10.1109/ISNCC52172.2021.9615814; PolyPublie institutional record: https://publications.polymtl.ca/50159/; OpenAlex abstract metadata reviewed for state-machine modeling and multi-level kernel/user-space analysis; full text still needed
- Machine-readable record: [paper.json](./paper.json)
