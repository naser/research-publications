# Efficient Cloud Tracing: From Very High Level to Very Low Level

**2018 | IEEE International Conference on Consumer Electronics (ICCE) | research paper**

**Authors:** Yves J. Bationo, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper correlates OpenStack Nova, QEMU/KVM, and host/guest kernel evidence to diagnose live-migration behavior across cloud-system layers.

## Four-part research summary

### 1. Problem and motivation

A single cloud-management layer cannot explain migration downtime, resource contention, or the host/guest causes of a slow or failed VM migration.

### 2. Method and contribution

Build a multi-layer trace from Nova state/log events, QEMU/KVM migration stages, and host/guest LTTng kernel events; synchronize controller, source, and destination traces and inspect the result in Trace Compass.

### 3. Findings and evidence

The layered view connects Nova lifecycle states to QEMU migration stages and kernel scheduling, CPU, memory, I/O, and wait evidence. A colocated stress workload exposes slower migration and resource contention that high-level Nova events cannot explain.

### 4. Limitations and future directions

**Limitations:** The evaluation is a small live-migration use-case study with missing hardware/software/run-count metadata. Table III conflicts with the surrounding prose for the middle experiment; integration should preserve the table values and flag the conflict rather than normalize it.

**Future work:** Add richer Neutron and OpenDaylight/NFV request-flow evidence to cover the network-service path that is insufficiently represented in the current trace.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [observability](../../topics/observability.md)

**Keywords:** cloud tracing | high-level tracing | low-level tracing | cross-layer observability | [OpenStack Nova](../../keywords/openstack-nova.md) | [QEMU](../../keywords/qemu.md) | [KVM](../../keywords/kvm.md) | [Trace Compass](../../keywords/trace-compass.md) | live migration

## Versions and source links

- [Published version](https://doi.org/10.1109/icce.2018.8326353) - published
- [Public full text](https://publications.polymtl.ca/4201/1/2018_Bationo_Efficient_cloud_tracing_very_high.pdf) | [PDF](https://publications.polymtl.ca/4201/1/2018_Bationo_Efficient_cloud_tracing_very_high.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1109/icce.2018.8326353](https://doi.org/10.1109/icce.2018.8326353)

## Identifiers

[DOI 10.1109/icce.2018.8326353](https://doi.org/10.1109/icce.2018.8326353)

## When to cite this paper

Cite this paper when your work uses or compares correlating OpenStack Nova lifecycle events with QEMU/KVM live-migration stages and kernel resource evidence.

- For correlating OpenStack Nova lifecycle events with QEMU/KVM live-migration stages and kernel resource evidence.
- For a multi-layer cloud-tracing workflow that exposes contention hidden by Nova-level logs.
- For the explicit distinction between high-level orchestration state and low-level QEMU/kernel evidence when diagnosing migration downtime or failure.

## Citation

### APA 7

Bationo, Y. J., Ezzati-Jivan, N., & Dagenais, M. R. (2018). Efficient Cloud Tracing: From Very High Level to Very Low Level. IEEE International Conference on Consumer Electronics (ICCE). https://doi.org/10.1109/icce.2018.8326353

### IEEE

Y. J. Bationo, N. Ezzati-Jivan, and M. R. Dagenais, "Efficient Cloud Tracing: From Very High Level to Very Low Level," in IEEE International Conference on Consumer Electronics (ICCE), 2018, doi: 10.1109/icce.2018.8326353

```bibtex
@inproceedings{ezzatiJivan2018efficientcloud,
  author = {Yves J. Bationo and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Efficient Cloud Tracing: From Very High Level to Very Low Level},
  year = {2018},
  booktitle = {IEEE International Conference on Consumer Electronics (ICCE)},
  doi = {10.1109/icce.2018.8326353},
  url = {https://doi.org/10.1109/icce.2018.8326353}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Crossref and local DBLP/venue metadata for 10.1109/icce.2018.8326353; author identity matched to Naser Ezzati-Jivan in the local research catalog; Efficient cloud tracing PDF pp. 1-5: OpenStack/Nova, QEMU/KVM, LTTng, Trace Compass, and cross-layer model; Efficient cloud tracing PDF pp. 5-6: live-migration procedure, interference conditions, and Table III results; Efficient cloud tracing PDF p. 7: network-evidence limitation and proposed Neutron/OpenDaylight future work; local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
