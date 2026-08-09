# Multilayer Virtualized Systems Analysis with Kernel Tracing

**2016 | IEEE Future Internet of Things and Cloud Workshops (FiCloudW) | conference paper**

**Authors:** Cedric Biancheri, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper fuses synchronized host and virtual-machine kernel traces into a Fused Virtual Machine view that exposes how VM threads, virtual CPUs, hypervisor transitions, and physical CPUs interact.

## Four-part research summary

### 1. Problem and motivation

Virtual-machine boundaries obscure direct and indirect interactions between guest activity, hypervisor transitions, and host scheduling or I/O. A process can appear uninterrupted inside a guest while being preempted or delayed on the host.

### 2. Method and contribution

Collect synchronized LTTng kernel traces from hosts and VMs, align them using hypercalls and incremental convex-hull synchronization, and fuse them into a state-history representation. The Fused Virtual Machine view maps guest vCPUs onto physical CPUs and exposes cross-layer state.

### 3. Findings and evidence

In the three-VM use cases, the fused view reveals host preemption, process migration, vmentry/vmexit transitions, and physical I/O handling that are invisible or ambiguous in a VM-only view.

### 4. Limitations and future directions

**Limitations:** Evaluation is qualitative and use-case based. Containers are explicitly outside scope. The inspected paper does not report hardware, OS/kernel versions, trace volumes, run counts, timing results, or quantitative detection accuracy.

**Future work:** Reuse existing analysis tools, parallelize fused analysis, and extend the approach to Java, Python, containers, and interactions among VMs on different nodes, as stated in the conclusion.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [resource-analysis](../../topics/resource-analysis.md)

**Keywords:** virtualized systems | [kernel tracing](../../keywords/kernel-tracing.md) | multilayer analysis | virtualization overhead | [LTTng](../../keywords/lttng.md) | [KVM](../../keywords/kvm.md) | [Trace Compass](../../keywords/trace-compass.md) | Fused Virtual Machine view | [State History Tree](../../keywords/state-history-tree.md) | vmentry | vmexit

## Versions and source links

- [Published version](https://doi.org/10.1109/w-ficloud.2016.18) - published
- [Public full text](https://publications.polymtl.ca/2988/1/2016_Biancheri_Multilayer_virtualized_systems_analysis_kernel.pdf) | [PDF](https://publications.polymtl.ca/2988/1/2016_Biancheri_Multilayer_virtualized_systems_analysis_kernel.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1109/w-ficloud.2016.18](https://doi.org/10.1109/w-ficloud.2016.18)

## Identifiers

[DOI 10.1109/w-ficloud.2016.18](https://doi.org/10.1109/w-ficloud.2016.18)

## When to cite this paper

Cite this paper when your work uses or compares synchronized host/guest kernel tracing that explains VM-level behavior using physical-CPU context.

- For synchronized host/guest kernel tracing that explains VM-level behavior using physical-CPU context.
- For a fused VM/physical-resource view that reveals host preemption or migration hidden by guest-only control-flow views.
- For the methodological distinction between independently parallelizable layer analyses and a correlated fused analysis.

## Citation

### APA 7

Biancheri, C., Ezzati-Jivan, N., & Dagenais, M. R. (2016). Multilayer Virtualized Systems Analysis with Kernel Tracing. In IEEE Future Internet of Things and Cloud Workshops (FiCloudW) (pp. 1-6). https://doi.org/10.1109/w-ficloud.2016.18

### IEEE

C. Biancheri, N. Ezzati-Jivan, and M. R. Dagenais, "Multilayer Virtualized Systems Analysis with Kernel Tracing," in IEEE Future Internet of Things and Cloud Workshops (FiCloudW), pp. 1-6, 2016, doi: 10.1109/w-ficloud.2016.18

```bibtex
@inproceedings{ezzatiJivan2016multilayervirtualized,
  author = {Cedric Biancheri and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Multilayer Virtualized Systems Analysis with Kernel Tracing},
  year = {2016},
  booktitle = {IEEE Future Internet of Things and Cloud Workshops (FiCloudW)},
  pages = {1-6},
  publisher = {IEEE},
  doi = {10.1109/w-ficloud.2016.18},
  url = {https://doi.org/10.1109/w-ficloud.2016.18}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Crossref and local DBLP/venue metadata for 10.1109/w-ficloud.2016.18; author identity matched to Naser Ezzati-Jivan in the local research catalog; Multilayer virtualization PDF pp. 1-4: problem, LTTng/KVM trace events, synchronization, State History Tree, and FVM view; Multilayer virtualization PDF pp. 4-7: process-preemption and hypervisor I/O-interruption use cases and evaluation discussion; Multilayer virtualization PDF p. 7: conclusion, reuse of tools, and parallel-analysis boundary; local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
