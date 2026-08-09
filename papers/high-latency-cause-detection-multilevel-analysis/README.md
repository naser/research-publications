# High latency cause detection using multilevel dynamic analysis

**2018 | IEEE Systems Conference | conference paper**

**Authors:** Naser Ezzati-Jivan, Genevieve Bastien, Michel R. Dagenais

**Core contribution:** The paper correlates PHP user-space events with LTTng kernel events in a unified multilevel model to explain high-latency web requests.

## Four-part research summary

### 1. Problem and motivation

Web-request latency is caused by interactions among application code, runtime compilation/cache behavior, synchronization, scheduling, and I/O; a user-space trace alone cannot identify all causes.

### 2. Method and contribution

Instrument PHP and correlate its call/compile events with LTTng-UST and kernel states in a common timestamped model. Mapping rules and an FSM reconstruct PHP call-stack state; synchronized views and a Critical Path View expose blocking and preemption.

### 3. Findings and evidence

The simple example identifies compile/cache time, while the Drupal example identifies OPcache shared-memory lock contention that is invisible in PHP-only analysis. Minimal cross-layer tracing limits overhead to below 7.5% in the reported client sweep.

### 4. Limitations and future directions

**Limitations:** The implementation and evaluation are PHP-specific; the paper does not establish transferability to other runtimes or web stacks. Full tracing has substantial throughput cost, and the compile percentage is case-specific.

**Future work:** Add mapping rules and views, and investigate machine-learning-based predictive analytics, as stated by the authors.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [latency-analysis](../../topics/latency-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [performance-analysis](../../topics/performance-analysis.md)

**Keywords:** high latency | dynamic analysis | [multilevel analysis](../../keywords/multilevel-analysis.md) | latency causes | [LTTng](../../keywords/lttng.md) | [LTTng-UST](../../keywords/lttng-ust.md) | [Trace Compass](../../keywords/trace-compass.md) | OPcache contention

## Versions and source links

- [Published version](https://doi.org/10.1109/syscon.2018.8369613) - published
- [Public full text](https://publications.polymtl.ca/4203/1/2018_Ezzati-Jivan_High_latency_cause_detection_multilevel.pdf) | [PDF](https://publications.polymtl.ca/4203/1/2018_Ezzati-Jivan_High_latency_cause_detection_multilevel.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1109/syscon.2018.8369613](https://doi.org/10.1109/syscon.2018.8369613)

## Identifiers

[DOI 10.1109/syscon.2018.8369613](https://doi.org/10.1109/syscon.2018.8369613)

## When to cite this paper

Cite this paper when your work uses or compares multilevel PHP/LTTng/kernel correlation that distinguishes application execution, compilation/cache, scheduling, and blocking states.

- For multilevel PHP/LTTng/kernel correlation that distinguishes application execution, compilation/cache, scheduling, and blocking states.
- For the OPcache shared-memory lock-contention diagnosis in a Drupal/ApacheBench workload.
- For the measured overhead tradeoff between full tracing and a minimal syscall/process-scheduling configuration.

## Citation

### APA 7

Ezzati-Jivan, N., Bastien, G., & Dagenais, M. R. (2018). High latency cause detection using multilevel dynamic analysis. In IEEE Systems Conference (pp. 1-8). https://doi.org/10.1109/syscon.2018.8369613

### IEEE

N. Ezzati-Jivan, G. Bastien, and M. R. Dagenais, "High latency cause detection using multilevel dynamic analysis," in IEEE Systems Conference, pp. 1-8, 2018, doi: 10.1109/syscon.2018.8369613

```bibtex
@inproceedings{ezzatiJivan2018highlatency,
  author = {Naser Ezzati-Jivan and Genevieve Bastien and Michel R. Dagenais},
  title = {High latency cause detection using multilevel dynamic analysis},
  year = {2018},
  booktitle = {IEEE Systems Conference},
  pages = {1-8},
  publisher = {IEEE},
  doi = {10.1109/syscon.2018.8369613},
  url = {https://doi.org/10.1109/syscon.2018.8369613}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: DBLP/DOI bibliographic record for 10.1109/syscon.2018.8369613; author identity matched to Naser Ezzati-Jivan in the local research catalog; High latency PDF pp. 1-5: problem, LTTng/LTTng-UST instrumentation, state model, and environment; High latency PDF pp. 5, 8-9: PHP/Drupal use cases, OPcache contention, throughput, and tracing overhead; High latency PDF p. 9: validity threats and conclusion/future-work boundary; local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
