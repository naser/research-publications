# Integrated Modeling Tool for Indexing and Analyzing State Machine Trace

**2021 | 2021 IEEE International Symposium on Networks, Computers and Communications (ISNCC) | conference paper**

**Authors:** Simon Delisle, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The abstract presents an integrated tool for indexing, querying, and visualizing state-machine traces.

## Four-part research summary

### 1. Problem and motivation

Built-in trace analyses and XML specifications can be inflexible or difficult for analysts to write and maintain. The paper presents a user-oriented model-driven way to define state-machine analyses for Trace Compass without repeatedly implementing Java/XML analysis logic.

### 2. Method and contribution

The tool is an EMF/Graphiti plugin for Trace Compass. Analysts define a UML-style subset of state machines with states, transitions, event conditions, and Boolean AND/OR/NOT expressions; the tool translates the model to an analysis representation over the disk-based State History Tree. It supports LTTng and LTTng-UST Common Trace Format events and can combine kernel and user-level state histories in views.

### 3. Findings and evidence

A Linux kernel use case defines 14 states, 36 transitions, and 9 conditions; the corresponding XML representation contains 525 attributes while the graphical model contains 594. A Trace Compass internal-request use case defines 7 states, 11 transitions, and 5 conditions; its XML contains 196 attributes versus 261 in the model. A custom model identifies requests that enter a never-ending/bad state and provides a user-facing visualization without recompiling the traced application.

### 4. Limitations and future directions

**Limitations:** The evaluation is qualitative and consists of two use cases. It does not establish broad performance, usability, or model-authoring benchmarks, and the current tool still transforms the graphical model into XML internally. The paper's examples show expressiveness and workflow value rather than automated root-cause accuracy.

**Future work:** The authors propose trace validation, highlighting the events and transitions responsible for state changes, better model/file management, direct model execution instead of XML conversion, and model-validation support.

## Abstract

The accessible abstract describes a modeled state representation with a special-purpose database, filtering/highlighting, and Gantt/XY views for Linux and Windows traces.

## Topics and keywords

**Tags:** [trace-analysis](../../topics/trace-analysis.md) | [trace-visualization](../../topics/trace-visualization.md) | [trace-abstraction](../../topics/trace-abstraction.md) | [performance-analysis](../../topics/performance-analysis.md)

**Keywords:** state-machine traces | trace indexing | special-purpose database | [Gantt chart](../../keywords/gantt-chart.md) | XY view | [trace filtering](../../keywords/trace-filtering.md)

## Versions and source links

- [Published version](https://doi.org/10.1109/ISNCC52172.2021.9615814) - published
- [DBLP record](https://dblp.org/rec/conf/isncc/DelisleED21) - public_source_record

**Canonical source:** [https://doi.org/10.1109/ISNCC52172.2021.9615814](https://doi.org/10.1109/ISNCC52172.2021.9615814)

## Identifiers

[DOI 10.1109/ISNCC52172.2021.9615814](https://doi.org/10.1109/ISNCC52172.2021.9615814)

## When to cite this paper

Cite this paper when using graphical state-machine models to define Trace Compass analyses over LTTng/CTF traces.

- For a Graphiti/EMF model-driven alternative to hand-authored XML trace analyses.
- For Boolean transition conditions and State History Tree-backed state-machine views.
- For the kernel and internal-request use cases and their model/XML size comparison.
- For trace validation, bad-state detection, and user-facing model-based analysis.

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

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Exact author manuscript/submitted-paper PDF reviewed for the published record: Integrated Modeling Tool for Indexing and Analyzing State Machine Trace, DOI 10.1109/ISNCC52172.2021.9615814.; Graphiti/EMF design, LTTng/CTF support, State History Tree integration, both use cases, and the model/XML attribute counts were checked against the inspected paper.
- Machine-readable record: [paper.json](./paper.json)
