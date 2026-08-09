# LMAT: An adaptive tracing approach based on efficient system behavior analysis using language models

**2026 | Journal of Systems and Software | journal article**

**Authors:** Kasra Darvishi, Morteza Noferesti, Yuvraj Sehgal, Naser Ezzati-Jivan

**Core contribution:** LMAT combines multi-task language models for kernel-event and event-duration prediction with online change detection, lightweight error-vector root-cause analysis, and adaptive tracing control.

## Four-part research summary

### 1. Problem and motivation

Always-on or fixed-granularity tracing increases storage and processing cost, while sparse tracing can miss rare or timing-sensitive behavior; event-only models can also miss anomalies that preserve event order but change execution duration.

### 2. Method and contribution

LMAT collects host-level kernel events with LTTng and represents syscall identity, entry/exit phase, process/thread context, delay, return status, and tracepoint metadata. A shared LSTM or BERT/Transformer encoder predicts the next event and an ordinal event-duration category. Normalized event and duration losses drive a rolling-window change detector; misprediction counts become error vectors, HDBSCAN forms anomaly prototypes, and cosine similarity supports root-cause classification. The controller keeps a minimal event set during normal execution and escalates tracing when abnormal behavior crosses a configurable threshold.

### 3. Findings and evidence

On an Apache2 workload using the public Fournier et al. corpus plus added duration-anomaly scenarios, the integrated multi-task model reaches 97.7% average accuracy for combined change detection and root-cause analysis, while the abstract reports up to 70.6% less collected trace data with 3.2% trace/event loss. The evaluation also reports 99.0% average duration-vector RCA accuracy, 96.5% change F1 and 96.8% RCA accuracy with a 40-event subset at 97% volume, and 19.28 ms total latency for a reduced LSTM configuration. On a new Sock Shop Docker benchmark with LTTng, relayed OpenTelemetry spans, load logs, and Prometheus metrics, the five-category Transformer multi-task model reaches 84.6% detection recall and 32.5% end-to-end RCA accuracy; asynchronous inference changes throughput from 88.4 +/- 1.1 req/s with LTTng alone to 88.7 +/- 0.3 req/s and does not add measurable application-level tail latency at the tested load.

### 4. Limitations and future directions

**Limitations:** The evaluation covers two single-host environments and controlled Apache/Sock Shop scenarios, not synchronized multi-host distributed tracing. Duration binning can lose timing detail, threshold selection may not generalize, and Sock Shop end-to-end root-cause attribution remains difficult, especially for CPU perturbations. The prototype lacks pre-trigger buffering and a post-trigger linger window, and its notion of normal still requires online model maintenance.

**Future work:** Extend LMAT to synchronized multi-host traces, optional retroactive capture, write-heavy databases, streaming/back-pressure workloads, and online learning in CI/CD; broaden anomaly coverage and periodically refine models so accepted normal behavior does not cause tracing cost to grow.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [llm-assisted-analysis](../../topics/llm-assisted-analysis.md) | [observability](../../topics/observability.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [trace-reduction](../../topics/trace-reduction.md)

**Keywords:** [adaptive tracing](../../keywords/adaptive-tracing.md) | [LTTng](../../keywords/lttng.md) | [kernel events](../../keywords/kernel-events.md) | [system-call sequences](../../keywords/system-call-sequences.md) | [event-duration modeling](../../keywords/event-duration-modeling.md) | [language models](../../keywords/language-models.md) | [LSTM](../../keywords/lstm.md) | [BERT](../../keywords/bert.md) | [multi-task learning](../../keywords/multi-task-learning.md) | HDBSCAN | [change detection](../../keywords/change-detection.md) | [root-cause analysis](../../keywords/root-cause-analysis.md) | [Apache](../../keywords/apache.md) | Sock Shop | OpenTelemetry | Prometheus | [stress-ng](../../keywords/stress-ng.md) | [trace reduction](../../keywords/trace-reduction.md) | [trace overhead](../../keywords/trace-overhead.md)

## Resources

- [Code](https://github.com/kasra-darvishi/adaptive_tracer)
- [Data](https://zenodo.org/records/10437041)

## Versions and source links

- [Published version](https://doi.org/10.1016/j.jss.2026.112890) - published

**Canonical source:** [https://doi.org/10.1016/j.jss.2026.112890](https://doi.org/10.1016/j.jss.2026.112890)

## Identifiers

[DOI 10.1016/j.jss.2026.112890](https://doi.org/10.1016/j.jss.2026.112890)

## When to cite this paper

Cite this paper when designing adaptive host-level tracing that uses kernel-event and event-duration prediction to reduce trace volume while retaining change and root-cause evidence.

- LTTng kernel-event representation with syscall entry/exit context, process/thread identifiers, return status, and duration features.
- Multi-task LSTM/BERT prediction of next events and ordinal event durations for change detection and lightweight HDBSCAN-based root-cause classification.
- Apache and Sock Shop evaluations reporting trace reduction, event-loss, anomaly-detection, root-cause, and asynchronous deployment-overhead results.

## Citation

### APA 7

Darvishi, K., Noferesti, M., Sehgal, Y., & Ezzati-Jivan, N. (2026). LMAT: An adaptive tracing approach based on efficient system behavior analysis using language models. Journal of Systems and Software, 238, 112890. https://doi.org/10.1016/j.jss.2026.112890

### IEEE

K. Darvishi, M. Noferesti, Y. Sehgal, and N. Ezzati-Jivan, "LMAT: An adaptive tracing approach based on efficient system behavior analysis using language models," Journal of Systems and Software, vol. 238, Art. no. 112890, 2026, doi: 10.1016/j.jss.2026.112890

```bibtex
@article{ezzatiJivan2026lmatan,
  author = {Kasra Darvishi and Morteza Noferesti and Yuvraj Sehgal and Naser Ezzati-Jivan},
  title = {LMAT: An adaptive tracing approach based on efficient system behavior analysis using language models},
  year = {2026},
  journal = {Journal of Systems and Software},
  volume = {238},
  pages = {112890},
  eid = {112890},
  publisher = {Elsevier BV},
  issn = {0164-1212},
  doi = {10.1016/j.jss.2026.112890},
  url = {https://doi.org/10.1016/j.jss.2026.112890}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: DBLP/DOI bibliographic record for 10.1016/j.jss.2026.112890; author identity matched to Naser Ezzati-Jivan in the local research catalog; LMAT PDF pp. 1-4: adaptive tracing motivation, four contributions, system loop, and language-model/event-duration design; LMAT PDF pp. 5-8: LTTng event representation, duration modeling, multi-task loss, error vectors, HDBSCAN prototypes, and adaptive control; LMAT PDF pp. 8-11: Apache and Sock Shop datasets, environments, fault injection, tracing protocol, and event subsets; LMAT PDF pp. 12-16: change-detection, root-cause, trace-reduction, latency, throughput, and storage-cost results; LMAT PDF pp. 17-18: generalization boundaries, threats to validity, limitations, and future work; LMAT PDF p. 3: implementation https://github.com/kasra-darvishi/adaptive_tracer and dataset https://zenodo.org/records/10437041; local LMAT PDF hash verified in pdf-evidence/notes/lmat-adaptive-tracing-language-models.md and pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
