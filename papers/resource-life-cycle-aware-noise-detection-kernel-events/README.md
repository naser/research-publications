# Resource Life-Cycle Aware Noise Detection via Kernel Event Monitoring

**2024 | 2024 IEEE International Conference on Collaborative Advances in Software and COmputiNg (CASCON) | conference paper**

**Authors:** Morteza Noferesti, Ben Grandy, Naser Ezzati-Jivan

**Core contribution:** The work detects and localizes performance noise by passively monitoring kernel events and aligning CPU, disk, and network activity with each resource request's life cycle.

## Four-part research summary

### 1. Problem and motivation

Noise sources have different causes and phases, but intrusive monitoring can alter the execution being measured and aggregate metrics can hide the exact phase responsible for the disturbance.

### 2. Method and contribution

The public abstract describes passive kernel-event collection without modifying system execution, computation of resource metrics aligned with request life-cycle phases, and visualization for pattern, anomaly, and root-cause inspection across CPU, disk, and network requests.

### 3. Findings and evidence

The abstract reports validation across diverse test cases and claims efficient, accurate identification of noise and its responsible life-cycle phase. Numeric accuracy, workloads, event set, and ground truth are not exposed in the captured public sources.

### 4. Limitations and future directions

**Limitations:** The publisher PDF was not obtained, so the tracer/version, resource-event definitions, injected-noise protocol, baselines, and external validity remain unverified.

**Future work:** Obtain the paper or accepted manuscript and verify the detector thresholds, workload diversity, real-time behavior, and author-stated future work.

## Abstract

The available synopsis describes passive kernel-event monitoring and alignment of CPU, disk, and network request life cycles for noise detection; detailed evaluation was not captured.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [performance-analysis](../../topics/performance-analysis.md)

**Keywords:** kernel event monitoring | resource life cycle | noise detection | CPU requests | disk requests | network requests

## Versions and source links

- [Published version](https://doi.org/10.1109/CASCON62161.2024.10838205) - published
- [CASCON program](https://iccsse.github.io/CASCON2024/program/) - public_source_record

**Canonical source:** [https://doi.org/10.1109/CASCON62161.2024.10838205](https://doi.org/10.1109/CASCON62161.2024.10838205)

## Identifiers

[DOI 10.1109/CASCON62161.2024.10838205](https://doi.org/10.1109/CASCON62161.2024.10838205)

## When to cite this paper

Cite this paper when aligning passive kernel-event evidence with CPU, disk, and network request life cycles for noise diagnosis.

- Non-intrusive kernel-event collection for performance-noise detection.
- Resource life-cycle phases as the unit of noise localization.
- Visualization-supported identification of the phase responsible for a resource disturbance.

## Citation

### APA 7

Noferesti, M., Grandy, B., & Ezzati-Jivan, N. (2024). Resource Life-Cycle Aware Noise Detection via Kernel Event Monitoring. In 2024 IEEE International Conference on Collaborative Advances in Software and COmputiNg (CASCON) (pp. 1-10). https://doi.org/10.1109/CASCON62161.2024.10838205

### IEEE

M. Noferesti, B. Grandy, and N. Ezzati-Jivan, "Resource Life-Cycle Aware Noise Detection via Kernel Event Monitoring," in 2024 IEEE International Conference on Collaborative Advances in Software and COmputiNg (CASCON), pp. 1-10, 2024, doi: 10.1109/CASCON62161.2024.10838205

```bibtex
@inproceedings{ezzatiJivan2024resourcelife,
  author = {Morteza Noferesti and Ben Grandy and Naser Ezzati-Jivan},
  title = {Resource Life-Cycle Aware Noise Detection via Kernel Event Monitoring},
  year = {2024},
  booktitle = {2024 IEEE International Conference on Collaborative Advances in Software and COmputiNg (CASCON)},
  pages = {1-10},
  publisher = {IEEE},
  doi = {10.1109/CASCON62161.2024.10838205},
  url = {https://doi.org/10.1109/CASCON62161.2024.10838205}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-21
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: DOI: https://doi.org/10.1109/CASCON62161.2024.10838205; CASCON 2024 program: https://iccsse.github.io/CASCON2024/program/; Public author synopsis: https://ca.linkedin.com/in/bengrandy; OpenAlex abstract metadata reviewed for passive monitoring and life-cycle method; full text still needed
- Machine-readable record: [paper.json](./paper.json)
