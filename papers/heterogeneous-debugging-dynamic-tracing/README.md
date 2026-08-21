# Efficient Large-Scale Heterogeneous Debugging Using Dynamic Tracing

**2019 | Journal of Systems Architecture | journal article**

**Authors:** Didier Nadeau, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper redesigns GDB dynamic tracing around LTTng-UST and scalable trace views so multi-threaded CPU/GPU debugging remains usable on heterogeneous many-core systems.

## Four-part research summary

### 1. Problem and motivation

Conventional debugger tracing serializes many threads through shared buffers and stop-the-world flushing, while heterogeneous CPU/GPU execution produces too many threads, waves, and call-stack events for a flat debugger UI.

### 2. Method and contribution

Dynamically insert jump-pad instrumentation from GDB/GDBServer and transfer events through LTTng-UST per-core lock-free-style ring buffers without stopping the target during buffer transfer. Trace Compass aggregates CPU call stacks and provides hierarchical HSA GPU wave/grid views and filters.

### 3. Findings and evidence

The proposed path scales substantially better than default GDB fast tracing on the pbzip2 workload, with much lower growth in tracing overhead as thread count increases. The UI supports focused CPU call-stack and GPU wave-level exploration.

### 4. Limitations and future directions

**Limitations:** Instrumentation has instruction-size/location constraints; filters still incur event/context-switch cost; GPU first-level grouping may require manual expansion; closed-source tools were excluded; the evaluation centers on pbzip2 and one GPU setup, with only informal feedback from three engineers rather than a controlled user study.

**Future work:** No dedicated future-work section is provided. The conclusion identifies a cautious next direction: remove the size limitation by replacing a function frame and instrumenting that frame.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [trace-analysis](../../topics/trace-analysis.md) | [performance-analysis](../../topics/performance-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md)

**Keywords:** heterogeneous systems | dynamic tracing | large-scale debugging | debugging efficiency | GDB | [LTTng-UST](../../keywords/lttng-ust.md) | [Trace Compass](../../keywords/trace-compass.md) | ROCm-GDB | GPU debugging | pbzip2

## Versions and source links

- [Published version](https://doi.org/10.1016/j.sysarc.2019.02.016) - published
- [Public institutional full text](https://publications.polymtl.ca/3817/) | [PDF](https://publications.polymtl.ca/3817/12/2019_Nadeau_Efficient_large-scale_heterogeneous_debugging_dynamic.pdf) - public_accepted_manuscript

**Canonical source:** [https://doi.org/10.1016/j.sysarc.2019.02.016](https://doi.org/10.1016/j.sysarc.2019.02.016)

## Identifiers

[DOI 10.1016/j.sysarc.2019.02.016](https://doi.org/10.1016/j.sysarc.2019.02.016)

## When to cite this paper

Cite this paper when your work uses or compares combining dynamic GDB jump-pad instrumentation with per-core LTTng-UST buffers to avoid the default shared-buffer/flush bottleneck.

- For combining dynamic GDB jump-pad instrumentation with per-core LTTng-UST buffers to avoid the default shared-buffer/flush bottleneck.
- For the pbzip2 scaling result showing proposed tracing at about 90% overhead versus 3294% for the default path at 15 threads.
- For hierarchical CPU call-stack and HSA GPU grid/wave navigation in a heterogeneous debugging interface.
- For the practical limitations of x86-64 jump-pad placement and GPU event filtering under dynamic tracing.

## Citation

### APA 7

Nadeau, D., Ezzati-Jivan, N., & Dagenais, M. R. (2019). Efficient Large-Scale Heterogeneous Debugging Using Dynamic Tracing. Journal of Systems Architecture, 98, 346-360. https://doi.org/10.1016/j.sysarc.2019.02.016

### IEEE

D. Nadeau, N. Ezzati-Jivan, and M. R. Dagenais, "Efficient Large-Scale Heterogeneous Debugging Using Dynamic Tracing," Journal of Systems Architecture, vol. 98, pp. 346-360, 2019, doi: 10.1016/j.sysarc.2019.02.016

```bibtex
@article{ezzatiJivan2019efficientlarge,
  author = {Didier Nadeau and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Efficient Large-Scale Heterogeneous Debugging Using Dynamic Tracing},
  year = {2019},
  journal = {Journal of Systems Architecture},
  volume = {98},
  pages = {346-360},
  publisher = {Elsevier BV},
  issn = {1383-7621},
  doi = {10.1016/j.sysarc.2019.02.016},
  url = {https://doi.org/10.1016/j.sysarc.2019.02.016}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: PolyPublie repository record identity matched to the catalog title and author record; public PDF downloaded locally and %PDF- signature verified; PolyPublie cover sheet identifies this as the accepted version and states the Elsevier CC-BY-NC-ND 4.0 terms.
- Machine-readable record: [paper.json](./paper.json)
