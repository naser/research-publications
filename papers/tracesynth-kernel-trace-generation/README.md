# TraceSynth: Generating Production-Quality Kernel Traces with Constraint-Guided Diffusion Models

**2026 | ACM International Conference on the Foundations of Software Engineering (FSE) Companion | conference paper**

**Authors:** Yuvraj Sehgal, Sneh Patel, Mahsa Panahandeh, Naser Ezzati-Jivan, Francois Tetreault

**Core contribution:** TraceSynth generates novel structured kernel-trace windows with a Transformer diffusion model and repairs generated events against invariants mined from real LTTng traces.

## Four-part research summary

### 1. Problem and motivation

Production kernel traces are expensive to collect because of runtime overhead, storage, privacy constraints, and poor coverage of rare behavior. Existing generators do not reliably preserve long-range temporal structure, multi-attribute correlations, and valid execution behavior.

### 2. Method and contribution

TraceSynth decodes LTTng kernel traces into Parquet records and overlapping NPZ windows with six channels: event type, inter-event time, CPU, thread ID, command name, and return value. A Transformer denoising diffusion model generates complete traces; learned transition, temporal, CPU-affinity, and attribute constraints detect violations and a post-hoc repair step samples valid values. Downstream utility is measured with next-event prediction on held-out real traces.

### 3. Findings and evidence

With a 50/50 real-plus-synthetic training set and context length 4096, scimark2 reaches 87.2% macro-F1 versus 89.8% real-only, while I/O-heavy stream and iozone retain large degradation. Average macro-F1 rises from 30.0% at length 256 to 59.9% at length 4096 (+104% relative). Repair improves 12/15 benchmark-context combinations by 0.3-4.3%, but an unpack-linux/4096 outlier drops by 14.2 points after repair. Two-channel event-plus-time diffusion is within roughly 1-3% of richer models on the tested ablation.

### 4. Limitations and future directions

**Limitations:** The evaluation uses six Phoronix benchmarks, a next-event-prediction proxy, Transformer diffusion, greedy repair, and maximum context 4096 on one H100 node. It does not establish utility for anomaly detection, forecasting, safety-critical RCA, proprietary production behavior, multi-tenant interference, or longer contexts. LTTng, OS, and kernel versions are not reported.

**Future work:** Validate on proprietary Ciena control-plane traces; add explicit state modeling for I/O nondeterminism; use linear-attention or state-space models for longer contexts; and add differential privacy for cross-organization trace sharing.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [trace-analysis](../../topics/trace-analysis.md) | [machine-learning](../../topics/machine-learning.md)

**Keywords:** [kernel traces](../../keywords/kernel-traces.md) | trace generation | [diffusion models](../../keywords/diffusion-models.md) | constraint-guided generation | [LTTng](../../keywords/lttng.md) | Parquet | [Phoronix Test Suite](../../keywords/phoronix-test-suite.md) | DDIM | next-event prediction | synthetic traces

## Versions and source links

- [Published version](https://doi.org/10.1145/3803437.3805222) - published
- [Public ACM PDF](https://dl.acm.org/doi/pdf/10.1145/3803437.3805222) | [PDF](https://dl.acm.org/doi/pdf/10.1145/3803437.3805222) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3803437.3805222](https://doi.org/10.1145/3803437.3805222)

## Identifiers

[DOI 10.1145/3803437.3805222](https://doi.org/10.1145/3803437.3805222)

## When to cite this paper

Cite this paper when your work uses or compares constraint-guided diffusion generation of complete multi-channel kernel traces, distinct from trace imputation.

- constraint-guided diffusion generation of complete multi-channel kernel traces, distinct from trace imputation.
- the result that temporal context length is a stronger quality driver than adding CPU/thread/command/return channels in the tested downstream task.
- the workload-dependent boundary: near-parity on deterministic compute-heavy scimark2 versus substantial degradation on asynchronous I/O-heavy workloads.
- learned post-hoc transition/temporal/affinity/attribute repair as a low-cost validity safeguard, while preserving the unpack-linux/4096 failure case.

## Citation

### APA 7

Sehgal, Y., Patel, S., Panahandeh, M., Ezzati-Jivan, N., & Tetreault, F. (2026). TraceSynth: Generating Production-Quality Kernel Traces with Constraint-Guided Diffusion Models. In ACM International Conference on the Foundations of Software Engineering (FSE) Companion (pp. 496-506). https://doi.org/10.1145/3803437.3805222

### IEEE

Y. Sehgal, S. Patel, M. Panahandeh, N. Ezzati-Jivan, and F. Tetreault, "TraceSynth: Generating Production-Quality Kernel Traces with Constraint-Guided Diffusion Models," in ACM International Conference on the Foundations of Software Engineering (FSE) Companion, pp. 496-506, 2026, doi: 10.1145/3803437.3805222

```bibtex
@inproceedings{ezzatiJivan2026tracesynthgenerating,
  author = {Yuvraj Sehgal and Sneh Patel and Mahsa Panahandeh and Naser Ezzati-Jivan and Francois Tetreault},
  title = {TraceSynth: Generating Production-Quality Kernel Traces with Constraint-Guided Diffusion Models},
  year = {2026},
  booktitle = {ACM International Conference on the Foundations of Software Engineering (FSE) Companion},
  pages = {496-506},
  publisher = {ACM},
  doi = {10.1145/3803437.3805222},
  url = {https://doi.org/10.1145/3803437.3805222}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Full text was reviewed; working copy is not distributed; TraceSynth PDF pp. 3-5: LTTng collection, six-channel representation, diffusion model, and invariant repair; TraceSynth PDF pp. 6-10: Nibicluster/Phoronix workloads, DDIM generation, next-event metrics, context-length and channel ablations; TraceSynth PDF pp. 10-11: limitations and future work; Local full-text evidence was hash-verified during catalog review; verification manifests are not distributed
- Machine-readable record: [paper.json](./paper.json)
