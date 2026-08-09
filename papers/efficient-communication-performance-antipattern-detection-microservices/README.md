# Efficient Detection of Communication-related Performance Anti-patterns in Microservices

**2025 | Authorea preprint | preprint**

**Authors:** Masoumeh Nourollahi, Naser Ezzati-Jivan, Adel Belkheiri, Michel Dagenais

**Core contribution:** The preprint combines communication-related kernel/system-call events with distributed traces to detect communication performance anti-patterns in microservices.

## Four-part research summary

### 1. Problem and motivation

Communication-related performance antipatterns in microservices can be hidden across user-level request traces and lower-level communication activity. The paper targets detection of Blob and Empty-semi-trucks while limiting collection overhead.

### 2. Method and contribution

The workflow combines distributed observability traces with selected communication-related system calls, correlates user-space and kernel events, aggregates features, and supports supervised, semi-supervised, and unsupervised learning. The reported setup uses LTTng, Trace Compass, Jaeger-client instrumentation, liblttng-ust, and kernel tracing, with offline training and online detection.

### 3. Findings and evidence

The evaluation uses DeathStarBench with 14 clean/noisy scenarios. The abstract reports up to 91% accuracy, 2.74% data-collection overhead, and more than 80% agreement with manual analysis. The later discussion reports 63% for the unsupervised setting and higher supervised performance, with semi-supervised learning positioned as a labeling-cost/accuracy compromise.

### 4. Limitations and future directions

**Limitations:** Evidence is a remote-read public preprint, not a locally hashed or peer-reviewed version. The approach depends on the LTTng/Jaeger/Trace Compass stack and communication-specific calls such as recvfrom/recvmsg/recvmmsg and sendto/sendmsg/sendmmsg. It is evaluated on controlled DeathStarBench scenarios, not proprietary industrial systems. Tool versions, OS/kernel, hardware, runtime, and replication details are unknown in the retained evidence note.

**Future work:** Evaluate with industrial partners, add I/O-related system-call families, and investigate topic-modeling or generative-AI extensions.

## Abstract

The preprint combines selected communication-related system-call traces with distributed observability traces to detect Blob and Empty Semi Trucks anti-patterns in microservices. It reports supervised, semi-supervised, and unsupervised settings on DeathStarBench scenarios.

## Topics and keywords

**Tags:** [microservices](../../topics/microservices.md) | [system-tracing](../../topics/system-tracing.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [machine-learning](../../topics/machine-learning.md) | [performance-analysis](../../topics/performance-analysis.md)

**Keywords:** [communication anti-patterns](../../keywords/communication-anti-patterns.md) | [DeathStarBench](../../keywords/deathstarbench.md) | [LTTng](../../keywords/lttng.md) | [Trace Compass](../../keywords/trace-compass.md) | [Jaeger](../../keywords/jaeger.md) | [system calls](../../keywords/system-calls.md) | [distributed traces](../../keywords/distributed-traces.md) | [Blob](../../keywords/blob.md) | [Empty Semi Trucks](../../keywords/empty-semi-trucks.md) | [supervised learning](../../keywords/supervised-learning.md) | [semi-supervised learning](../../keywords/semi-supervised-learning.md)

## Versions and source links

- [Published version](https://doi.org/10.22541/au.175533132.24109345/v1) - preprint
- [Public preprint PDF](https://d197for5662m48.cloudfront.net/documents/publicationstatus/274238/preprint_pdf/0c308204518850728852b7cf01be90f6.pdf) | [PDF](https://d197for5662m48.cloudfront.net/documents/publicationstatus/274238/preprint_pdf/0c308204518850728852b7cf01be90f6.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.22541/au.175533132.24109345/v1](https://doi.org/10.22541/au.175533132.24109345/v1)

## Identifiers

[DOI 10.22541/au.175533132.24109345/v1](https://doi.org/10.22541/au.175533132.24109345/v1)

## When to cite this paper

Cite this paper when your work uses or compares combining distributed spans with communication-related kernel/user system calls to detect microservice performance antipatterns.

- combining distributed spans with communication-related kernel/user system calls to detect microservice performance antipatterns.
- the Blob and Empty-semi-truck target classes and the 14-scenario DeathStarBench evaluation.
- the supervised/semi-supervised/unsupervised comparison and its reported collection-overhead/manual-agreement measurements.
- with an explicit preprint and controlled-testbed caveat; do not present it as peer-reviewed industrial evidence.

## Citation

### APA 7

Nourollahi, M., Ezzati-Jivan, N., Belkheiri, A., & Dagenais, M. (2025). Efficient Detection of Communication-related Performance Anti-patterns in Microservices. Authorea preprint. https://doi.org/10.22541/au.175533132.24109345/v1

### IEEE

M. Nourollahi, N. Ezzati-Jivan, A. Belkheiri, and M. Dagenais, "Efficient Detection of Communication-related Performance Anti-patterns in Microservices," in Authorea preprint, 2025, doi: 10.22541/au.175533132.24109345/v1

```bibtex
@misc{ezzatiJivan2025efficientdetection,
  author = {Masoumeh Nourollahi and Naser Ezzati-Jivan and Adel Belkheiri and Michel Dagenais},
  title = {Efficient Detection of Communication-related Performance Anti-patterns in Microservices},
  year = {2025},
  howpublished = {Authorea preprint},
  doi = {10.22541/au.175533132.24109345/v1},
  url = {https://doi.org/10.22541/au.175533132.24109345/v1}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: Remote full preprint read: pdf-evidence/notes/parallel-batch-01-efficient-communication-anti-patterns.md; Authorea DOI: https://doi.org/10.22541/au.175533132.24109345/v1; Public preprint PDF: https://d197for5662m48.cloudfront.net/documents/publicationstatus/274238/preprint_pdf/0c308204518850728852b7cf01be90f6.pdf
- Machine-readable record: [paper.json](./paper.json)
