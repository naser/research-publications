# Automated Generation of Model-Based Constraints for Common Multi-core and Real-Time Applications Using Execution Tracing

**2021 | International Journal of Parallel Programming | journal article**

**Authors:** Raphael Beamonte, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper automatically builds an approximate workflow model and adaptive quantitative constraints from user-space and kernel execution traces, reducing manual model construction for real-time and multicore diagnosis.

## Four-part research summary

### 1. Problem and motivation

Manually writing execution models and timing constraints for multicore and real-time traces is difficult and error-prone. The paper targets automatic, approximate model and constraint generation while retaining a human review step for correcting irrelevant or over-generalized constraints.

### 2. Method and contribution

The method organizes user-space and kernel events per thread, extracts common workflows with strict or flexible longest-common-subsequence matching, removes repeated material using suffix-tree/longest-repeated-substring processing, and builds a loop-oriented state machine. Workflows are merged and timing values are used to infer constraint thresholds and comparison operators. The case studies use LTTng traces from JACK2, cyclictest, and an in-kernel wakelock priority-inversion scenario.

### 3. Findings and evidence

For JACK2 periodic ALSA execution, the automatically inferred deadline is about 22.062 ms versus a manually specified value below 23 ms; the generated model detects three of seven invalid constraints associated with xruns, or four of seven after removing non-deadline constraints. For cyclictest, the automatic deadline is about 2.685 ms versus a 3 ms manual constraint and detects an outlier. For the wakelock scenario, the inferred deadline is about 170.951 ms versus a manually chosen 200 ms and the model exposes the priority inversion. The evaluation reports a model-build time of roughly seven minutes for one cyclictest case and shows that restricting the trace can reduce construction cost.

### 4. Limitations and future directions

**Limitations:** Generated models can contain irrelevant constraints and still require user review and correction. Matching and trace-processing cost grows with states, instances, threads, and workflows; high-event traces can make model construction expensive. Timing assumptions and the selected event set influence both inferred thresholds and detected violations, so the reported examples do not establish universal constraint accuracy.

**Future work:** The authors propose on-the-fly model construction and detection compatible with the LTTng flight-recorder mode, which would move model generation and checking closer to online trace analysis.

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

Cite this paper when automatically inferring execution models and timing constraints from multicore or real-time traces.

- For LCS-based workflow extraction, repeated-subsequence removal, and loop state-machine construction.
- For inferring timing thresholds and operators from observed trace values while retaining human review.
- For the JACK2, cyclictest, and wakelock priority-inversion case studies.
- For the build-cost and constraint-overproduction limitations of automatic model generation.

## Citation

### APA 7

Beamonte, R., Ezzati-Jivan, N., & Dagenais, M. R. (2021). Automated Generation of Model-Based Constraints for Common Multi-core and Real-Time Applications Using Execution Tracing. International Journal of Parallel Programming, 49(1), 104-134. https://doi.org/10.1007/s10766-020-00689-5

### IEEE

R. Beamonte, N. Ezzati-Jivan, and M. R. Dagenais, "Automated Generation of Model-Based Constraints for Common Multi-core and Real-Time Applications Using Execution Tracing," International Journal of Parallel Programming, vol. 49, no. 1, pp. 104-134, 2021, doi: 10.1007/s10766-020-00689-5

```bibtex
@article{ezzatiJivan2021automatedgeneration,
  author = {Raphael Beamonte and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Automated Generation of Model-Based Constraints for Common Multi-core and Real-Time Applications Using Execution Tracing},
  year = {2021},
  journal = {International Journal of Parallel Programming},
  volume = {49},
  number = {1},
  pages = {104-134},
  publisher = {Springer Science and Business Media LLC},
  issn = {0885-7458, 1573-7640},
  doi = {10.1007/s10766-020-00689-5},
  url = {https://doi.org/10.1007/s10766-020-00689-5}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Exact full paper PDF reviewed: Model-Based Constraints, International Journal of Parallel Programming 2021, DOI 10.1007/s10766-020-00689-5.; The LTTng-based workflow extraction, state-machine construction, three case studies, inferred timing values, model-build cost, and limitations were checked against the paper.
- Machine-readable record: [paper.json](./paper.json)
