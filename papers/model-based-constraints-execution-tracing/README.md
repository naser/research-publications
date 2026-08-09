# Automated Generation of Model-Based Constraints for Common Multi-core and Real-Time Applications Using Execution Tracing

**2021 | International Journal of Parallel Programming | research paper**

**Authors:** Raphael Beamonte, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper automatically builds an approximate workflow model and adaptive quantitative constraints from user-space and kernel execution traces, reducing manual model construction for real-time and multicore diagnosis.

## Four-part research summary

### 1. Problem and motivation

Manual model and constraint construction for concurrent real-time applications requires substantial system knowledge and effort, even though low-overhead tracing provides the evidence needed for verification.

### 2. Method and contribution

The method organizes trace events per thread, groups similar sequences with longest-common-subsequence matching using strict or flexible key-value matching, removes unneeded repetitions, builds a state model, and infers adaptive constraint operators and values from runtime timing distributions. The model is presented for user checking and correction; LTTng is explicitly used in the cyclictest case.

### 3. Findings and evidence

The generated model detects the JACK2 xrun, the cyclictest outlier, and the in-kernel wakelock priority inversion. For cyclictest, a manually set 3-ms deadline is inferred as about 2.685 ms. In the reported evaluation, model construction is dominant - about 7 minutes for full cyclictest - while traces range from 321 UST and 419,164 kernel events for JACK2 to 41,677 UST and 208,489 kernel events for cyclictest and 42 UST and 194,997 kernel events for wakelock.

### 4. Limitations and future directions

**Limitations:** Generated models can contain extra constraints and still need user correction. The evaluation emphasizes common real-time cases with relatively simple loops and does not establish performance across more complex modeling requirements.

**Future work:** Build and detect models on the fly, compatible with LTTng flight-recorder mode.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [multicore-systems](../../topics/multicore-systems.md) | [trace-analysis](../../topics/trace-analysis.md) | [performance-analysis](../../topics/performance-analysis.md) | [lttng](../../topics/lttng.md)

**Keywords:** [model-based constraints](../../keywords/model-based-constraints.md) | [execution tracing](../../keywords/execution-tracing.md) | multi-core systems | real-time applications | constraint generation | [LTTng](../../keywords/lttng.md) | [Trace Compass](../../keywords/trace-compass.md) | [cyclictest](../../keywords/cyclictest.md) | [JACK2](../../keywords/jack2.md) | wakelock

## Versions and source links

- [Published version](https://doi.org/10.1007/s10766-020-00689-5) - published

**Canonical source:** [https://doi.org/10.1007/s10766-020-00689-5](https://doi.org/10.1007/s10766-020-00689-5)

## Identifiers

[DOI 10.1007/s10766-020-00689-5](https://doi.org/10.1007/s10766-020-00689-5)

## When to cite this paper

Cite this paper when generating model-based real-time constraints or using user-space and kernel traces for multicore diagnosis.

- Automatic workflow extraction from per-thread traces using sequence matching.
- Adaptive timing constraints inferred from runtime trace values.
- LTTng-backed JACK2, cyclictest, and kernel-wakelock case studies.

## Citation

### APA 7

Beamonte, R., Ezzati-Jivan, N., & Dagenais, M. R. (2021). Automated Generation of Model-Based Constraints for Common Multi-core and Real-Time Applications Using Execution Tracing. International Journal of Parallel Programming. https://doi.org/10.1007/s10766-020-00689-5

### IEEE

R. Beamonte, N. Ezzati-Jivan, and M. R. Dagenais, "Automated Generation of Model-Based Constraints for Common Multi-core and Real-Time Applications Using Execution Tracing," in International Journal of Parallel Programming, 2021, doi: 10.1007/s10766-020-00689-5

```bibtex
@inproceedings{ezzatiJivan2021automatedgeneration,
  author = {Raphael Beamonte and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Automated Generation of Model-Based Constraints for Common Multi-core and Real-Time Applications Using Execution Tracing},
  year = {2021},
  booktitle = {International Journal of Parallel Programming},
  doi = {10.1007/s10766-020-00689-5},
  url = {https://doi.org/10.1007/s10766-020-00689-5}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: Crossref and local DBLP/venue metadata for 10.1007/s10766-020-00689-5; author identity matched to Naser Ezzati-Jivan in the local research catalog; Model-constraints PDF pp. 1-2, 5-17: user-space/kernel scope, LTTng cyclictest case, per-thread/LCS workflow generation, adaptive constraints, and case-study detections; Model-constraints PDF pp. 21-30: hardware, trace sizes, runtime/scalability, and full-cyclictest approximately 7-minute result; Model-constraints PDF p. 30: limitation and future-work boundary; local model-constraints PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
