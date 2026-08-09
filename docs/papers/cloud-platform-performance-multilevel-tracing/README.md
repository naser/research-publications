# Cloud Platform Performance Evaluation Using Multi-level Execution Tracing

**2020 | IEEE Internet of Things, GreenCom, CPSCom and SmartData | research paper**

**Authors:** Yves J. Bationo, Naser Ezzati-Jivan, Evan Galea, Michel R. Dagenais

**Core contribution:** The paper correlates LTTng traces across OpenStack services, QEMU/KVM, network components, and host kernels to diagnose cloud-platform performance problems.

## Four-part research summary

### 1. Problem and motivation

Cloud-service performance failures span application, virtualization, host-kernel, and network layers, so a single-layer view cannot reliably explain migration or resource-interference delays.

### 2. Method and contribution

The approach adds LTTng-UST Python probes for OpenStack Nova, traces QEMU/KVM and host kernels, adds Neutron/Open vSwitch tracepoints with packet identifiers, and synchronizes the streams in Trace Compass. VM activity is linked to the Nova instance, QEMU process, and kernel scheduling/preemption evidence.

### 3. Findings and evidence

The live-migration case records Nova, QEMU, controller, and source/destination host traces. Reported total migration times include 166.12 seconds in the low-interference case and 169.320 seconds with interference. Traces expose CPU preemption and co-located VM interference as causes of migration slowdown and allow packet and service behavior to be followed across layers.

### 4. Limitations and future directions

**Limitations:** The evaluation is a focused OpenStack/VM-migration case study and does not establish general cloud-wide overhead or portability across platforms. The conclusion presents the method as extensible rather than universally validated.

**Future work:** Apply the cross-layer method to other hard-to-detect cloud problems, including security flaws, using kernel, network, and application perspectives.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [performance-engineering](../../topics/performance-engineering.md) | [resource-analysis](../../topics/resource-analysis.md)

**Keywords:** cloud platforms | multi-level execution tracing | [LTTng](../../keywords/lttng.md) | [LTTng-UST](../../keywords/lttng-ust.md) | [OpenStack Nova](../../keywords/openstack-nova.md) | Neutron | [QEMU](../../keywords/qemu.md) | [KVM](../../keywords/kvm.md) | Open vSwitch | [Trace Compass](../../keywords/trace-compass.md) | live VM migration | preemption | VM interference

## Versions and source links

- [Published version](https://doi.org/10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063) - published

**Canonical source:** [https://doi.org/10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063](https://doi.org/10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063)

## Identifiers

[DOI 10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063](https://doi.org/10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063)

## When to cite this paper

Cite this paper when correlating OpenStack, virtualization, network, and host-kernel traces for cloud performance diagnosis.

- LTTng/LTTng-UST probes for Nova, QEMU/KVM, Neutron, Open vSwitch, and host kernels.
- Trace Compass synchronization of VM, service, packet, scheduling, and preemption evidence.
- Live-VM-migration analysis that attributes slowdown to CPU preemption and co-located VM interference.

## Citation

### APA 7

Bationo, Y. J., Ezzati-Jivan, N., Galea, E., & Dagenais, M. R. (2020). Cloud Platform Performance Evaluation Using Multi-level Execution Tracing. IEEE Internet of Things, GreenCom, CPSCom and SmartData. https://doi.org/10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063

### IEEE

Y. J. Bationo, N. Ezzati-Jivan, E. Galea, and M. R. Dagenais, "Cloud Platform Performance Evaluation Using Multi-level Execution Tracing," in IEEE Internet of Things, GreenCom, CPSCom and SmartData, 2020, doi: 10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063

```bibtex
@inproceedings{ezzatiJivan2020cloudplatform,
  author = {Yves J. Bationo and Naser Ezzati-Jivan and Evan Galea and Michel R. Dagenais},
  title = {Cloud Platform Performance Evaluation Using Multi-level Execution Tracing},
  year = {2020},
  booktitle = {IEEE Internet of Things, GreenCom, CPSCom and SmartData},
  doi = {10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063},
  url = {https://doi.org/10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: DBLP/DOI bibliographic record for 10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063; author identity matched to Naser Ezzati-Jivan in the local research catalog; Cloud platform PDF pp. 1-5: LTTng/LTTng-UST, Nova/QEMU/KVM/Neutron/Open vSwitch tracing, correlation, and Trace Compass views; Cloud platform PDF pp. 5-6: live-migration procedure, 166.12/169.320-second results, preemption and VM-interference diagnosis; Cloud platform PDF p. 6: conclusion and future-work boundary; local cloud-platform PDF hash verified in pdf-evidence/notes/cloud-platform-performance-multilevel-tracing.md and pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
