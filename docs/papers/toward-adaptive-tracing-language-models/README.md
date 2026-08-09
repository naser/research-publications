# Toward Adaptive Tracing: Efficient System Behavior Analysis using Language Models

**2024 | 2024 IEEE/ACM International Conference on Software Engineering: New Ideas and Emerging Results (ICSE-NIER) | research paper**

**Authors:** Kasra Darvishi, Morteza Noferesti, Naser Ezzati-Jivan

**Core contribution:** The paper proposes an adaptive tracing loop that combines language-model prediction of kernel-event sequences and event durations with change detection and root-cause analysis, so detailed tracing is activated only around significant behavior shifts.

## Four-part research summary

### 1. Problem and motivation

Continuous kernel tracing imposes performance, storage, and analysis cost, while event-only analysis can miss duration changes. The paper asks how tracing can remain selective while preserving evidence around abrupt system behavior changes.

### 2. Method and contribution

LTTng kernel/system-call events are represented with event/process names, PID/TID, delay, return status, and other arguments. A multi-task model predicts the next event and a categorized system-call duration; LSTM and transformer-based BERT variants share features. Cross-entropy prediction losses are MAD-rescaled and combined for change detection. Error vectors of unexpected/missing event types are compared by cosine similarity with pre-clustered, tagged vectors for root-cause/noise assignment.

### 3. Findings and evidence

Normal Apache2 traces and noisy traces from the prior dataset plus an author-created bandwidth-limited duration-noise set yield seven noise categories. Across 50%-0% noise scenarios, adaptive tracing reduces recorded events by 77.1% with a 5.8% miss rate for events related to abrupt changes. Duration F1 is 82.9% for LSTM and 83.1% for BERT. On a combined 700,000-request test set, root-cause/noise identification averages 91.3%, up to 20.9% above event-sequence-only analysis. On a V100 GPU, batch-16 inference is under 100 ms; average change-detection time is 106 ms for LSTM and 151 ms for BERT, with about 29 ms added for RCA.

### 4. Limitations and future directions

**Limitations:** The study is a short preliminary ICSE-NIER paper centered on Apache2 and controlled/noisy traces. LTTng is named but its evaluation version is not specified; the LTTng v2.13 URL is a documentation reference, not proof of runtime version. OS, kernel, CPU, RAM, and replication count are unknown.

**Future work:** Test database logs, API traces, network traffic, and application logs; build a larger anomaly benchmark; model recurring anomalies as normal when appropriate; and use online learning/model adjustment to maintain low tracing overhead.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [llm-assisted-analysis](../../topics/llm-assisted-analysis.md) | [observability](../../topics/observability.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [trace-reduction](../../topics/trace-reduction.md)

**Keywords:** [adaptive tracing](../../keywords/adaptive-tracing.md) | [LTTng](../../keywords/lttng.md) | [kernel events](../../keywords/kernel-events.md) | [system-call sequences](../../keywords/system-call-sequences.md) | [event-duration modeling](../../keywords/event-duration-modeling.md) | [language models](../../keywords/language-models.md) | [LSTM](../../keywords/lstm.md) | [BERT](../../keywords/bert.md) | [multi-task learning](../../keywords/multi-task-learning.md) | [change detection](../../keywords/change-detection.md) | [root-cause analysis](../../keywords/root-cause-analysis.md) | Apache2 | [trace reduction](../../keywords/trace-reduction.md) | [trace overhead](../../keywords/trace-overhead.md)

## Resources

- [Data](https://zenodo.org/records/10437041)

## Versions and source links

- [Published version](https://doi.org/10.1145/3639476.3639778) - published
- [Public full text](https://dl.acm.org/doi/pdf/10.1145/3639476.3639778) | [PDF](https://dl.acm.org/doi/pdf/10.1145/3639476.3639778) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3639476.3639778](https://doi.org/10.1145/3639476.3639778)

## Identifiers

[DOI 10.1145/3639476.3639778](https://doi.org/10.1145/3639476.3639778)

## When to cite this paper

Cite this paper when your work uses or compares combining next-system-call prediction with categorized system-call-duration prediction in a multi-task adaptive tracer.

- combining next-system-call prediction with categorized system-call-duration prediction in a multi-task adaptive tracer.
- selective tracing that reports 77.1% event reduction at a 5.8% abrupt-change-related miss rate.
- cosine-similarity clustering of abnormal event vectors as an interpretable root-cause/noise assignment step.
- the V100 latency measurements when discussing inference feasibility, with the Apache/noise-testbed boundary.

## Citation

### APA 7

Darvishi, K., Noferesti, M., & Ezzati-Jivan, N. (2024). Toward Adaptive Tracing: Efficient System Behavior Analysis using Language Models. 2024 IEEE/ACM International Conference on Software Engineering: New Ideas and Emerging Results (ICSE-NIER). https://doi.org/10.1145/3639476.3639778

### IEEE

K. Darvishi, M. Noferesti, and N. Ezzati-Jivan, "Toward Adaptive Tracing: Efficient System Behavior Analysis using Language Models," in 2024 IEEE/ACM International Conference on Software Engineering: New Ideas and Emerging Results (ICSE-NIER), 2024, doi: 10.1145/3639476.3639778

```bibtex
@inproceedings{ezzatiJivan2024towardadaptive,
  author = {Kasra Darvishi and Morteza Noferesti and Naser Ezzati-Jivan},
  title = {Toward Adaptive Tracing: Efficient System Behavior Analysis using Language Models},
  year = {2024},
  booktitle = {2024 IEEE/ACM International Conference on Software Engineering: New Ideas and Emerging Results (ICSE-NIER)},
  doi = {10.1145/3639476.3639778},
  url = {https://doi.org/10.1145/3639476.3639778}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: DBLP/DOI bibliographic record for 10.1145/3639476.3639778; author identity matched to Naser Ezzati-Jivan in the local research catalog; Toward Adaptive Tracing PDF pp. 1-3: ACM/ICSE-NIER identity, LTTng motivation, Apache2 data source, and adaptive-tracing contribution; Toward Adaptive Tracing PDF pp. 3-5: event vectors, LSTM/BERT multi-task sequence and duration modeling, MAD-normalized change detection, and cosine/error-vector root-cause analysis; Toward Adaptive Tracing PDF p. 5: Apache2 scenarios, seven noise categories, 77.1% event reduction, 5.8% miss rate, 91.3% root-cause accuracy, duration-model F-scores, and V100 latency; Toward Adaptive Tracing PDF p. 5: future-work and model-update boundary; local Toward Adaptive Tracing PDF hash verified in pdf-evidence/notes/toward-adaptive-tracing-language-models.md and pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
