# A Flexible Data-Driven Approach for Execution Trace Filtering

**2015 | IEEE BigData Congress | conference paper**

**Authors:** Kadjo Gwandy Kouame, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper provides a declarative XML/state-machine approach for flexible filtering and synthetic-event generation over large kernel traces.

## Four-part research summary

### 1. Problem and motivation

Large execution traces contain many irrelevant events, while hard-coded filters cannot flexibly express changing event combinations, temporal constraints, or late-arriving events (pp. 2-3).

### 2. Method and contribution

Users define XML FSMs with transition inputs and actions. XML is converted into Java models and executed in a Trace Compass plug-in over a generic state-system/interval-tree container. Inputs may be raw/synthetic events or event/time conditions; actions can change state, emit synthetic events, start FSMs, or trigger UI selections (pp. 3-5).

### 3. Findings and evidence

The SYN-flood example uses two coexisting FSMs, a 3-second timeout, and a 100-attempt threshold. hping3 generates the workload; LTTng 2.4.0 records inet and kernel events on Ubuntu 14.10/Linux 3.13.0-43 with Apache. The trace yields 569 half-open-connection synthetic events and one SYN-flood event. For a 150 MB trace, XML model construction averages 70.092 s versus 67.663 s for a hard-coded Java model (pp. 6-7, Table I).

### 4. Limitations and future directions

**Limitations:** Runtime grows with active scenarios and condition checks; the example can process about 1,707 conditions per event. Complex FSMs are harder to understand/debug, and the paper says comprehensive performance evaluation was not yet possible (p. 7).

**Future work:** Add more patterns, optimize execution, and refine the XML language and user-facing analysis support (p. 7, conclusion).

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [trace-filtering](../../topics/trace-filtering.md) | [trace-abstraction](../../topics/trace-abstraction.md) | [trace-analysis](../../topics/trace-analysis.md)

**Keywords:** execution trace filtering | LTTng 2.4.0 | [Trace Compass](../../keywords/trace-compass.md) | [finite-state machine](../../keywords/finite-state-machine.md) | declarative analysis | [synthetic events](../../keywords/synthetic-events.md) | [SYN flood](../../keywords/syn-flood.md) | hping3 | [state system](../../keywords/state-system.md) | XML modeling | [kernel tracing](../../keywords/kernel-tracing.md)

## Versions and source links

- [Published version](https://doi.org/10.1109/BigDataCongress.2015.112) - published
- [Institutional full text](https://publications.polymtl.ca/2985/1/2015_Kouame_Flexible_data-driven_approach_execution_trace.pdf) | [PDF](https://publications.polymtl.ca/2985/1/2015_Kouame_Flexible_data-driven_approach_execution_trace.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1109/BigDataCongress.2015.112](https://doi.org/10.1109/BigDataCongress.2015.112)

## Identifiers

[DOI 10.1109/BigDataCongress.2015.112](https://doi.org/10.1109/BigDataCongress.2015.112)

## When to cite this paper

Cite this paper when your work uses or compares declarative XML FSMs for user-defined trace filtering and synthetic-event generation.

- Declarative XML FSMs for user-defined trace filtering and synthetic-event generation.
- A generic state-system container that exposes internal matcher state for analysis and debugging.
- The LTTng/Trace Compass SYN-flood pattern with timeout and half-open-connection threshold semantics.
- The measured one-time XML-to-Java model-construction overhead and the 1,707-condition-per-event scaling concern.

## Citation

### APA 7

Kouame, K. G., Ezzati-Jivan, N., & Dagenais, M. R. (2015). A Flexible Data-Driven Approach for Execution Trace Filtering. In IEEE BigData Congress (pp. 698-703). https://doi.org/10.1109/BigDataCongress.2015.112

### IEEE

K. G. Kouame, N. Ezzati-Jivan, and M. R. Dagenais, "A Flexible Data-Driven Approach for Execution Trace Filtering," in IEEE BigData Congress, pp. 698-703, 2015, doi: 10.1109/BigDataCongress.2015.112

```bibtex
@inproceedings{ezzatiJivan2015aflexible,
  author = {Kadjo Gwandy Kouame and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {A Flexible Data-Driven Approach for Execution Trace Filtering},
  year = {2015},
  booktitle = {IEEE BigData Congress},
  pages = {698-703},
  publisher = {IEEE},
  doi = {10.1109/BigDataCongress.2015.112},
  url = {https://doi.org/10.1109/BigDataCongress.2015.112}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Flexible filtering PDF: XML FSM architecture, Trace Compass/state-system execution, raw/synthetic event support, and UI integration; Flexible filtering PDF: LTTng 2.4.0, Ubuntu 14.10, kernel 3.13.0-43, hping3 SYN-flood workload, thresholds, synthetic-event counts, and XML/Java timings; Flexible filtering PDF: condition-check/runtime and understandability limitations plus future work; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
