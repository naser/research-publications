# Cloud Platform Performance Evaluation Using Multi-level Execution Tracing

**2020 | IEEE Internet of Things, GreenCom, CPSCom and SmartData | conference paper**

**Authors:** Yves J. Bationo, Naser Ezzati-Jivan, Evan Galea, Michel R. Dagenais

**Core contribution:** The paper correlates LTTng traces across OpenStack services, QEMU/KVM, network components, and host kernels to diagnose cloud-platform performance problems.

## Four-part research summary

### 1. Problem and motivation

Cloud performance failures cross application, virtualization, kernel, and network layers. Looking at only OpenStack service logs or only host traces can hide scheduler interference, virtual-switch behavior, packet-path changes, or live-migration delays.

### 2. Method and contribution

The paper combines LTTng kernel and user-space tracing, LTTng-UST Python bindings, custom OpenStack probes, and Trace Compass synchronization and visualization. The modeled layers include the host kernel, KVM/QEMU virtualization, Open vSwitch, and OpenStack Nova/Neutron services. Nova lifecycle and scheduler events are correlated with VM state; Open vSwitch packet tracepoints such as ovs_vport_receive, ovs_upcall_start/end, and ovs_vport_send are linked using packet identifiers to distinguish fast and slow paths. Live migration traces combine controller, source, destination, Nova, QEMU, and kernel events.

### 3. Findings and evidence

The network analysis shows that slow-path processing increases during network reconfiguration or flow-cache eviction and that host CPU contention can delay ovs-vswitchd. In live-migration tests, the reported total migration time is about 166.12–169.32 seconds for successful cases, with a failed middle case; the multilevel view attributes VM delays to co-located stress, vCPU wait, and preemption. The analysis therefore exposes resource interference and suggests VM-priority changes that would not be justified from a single OpenStack log stream.

### 4. Limitations and future directions

**Limitations:** The evaluation is a small OpenStack/VM testbed with selected migration and networking scenarios; it is not a broad cloud workload benchmark. Trace correlation depends on available service probes, kernel events, and clock/synchronization assumptions. The reported diagnosis identifies cross-layer evidence and likely interference but does not provide an automated accuracy metric or a complete remediation system.

**Future work:** The authors identify applying the multilevel tracing methodology to security flaws and other hard-to-detect cross-layer cloud problems.

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

Cite this paper when diagnosing OpenStack cloud performance across service, virtual-machine, virtual-switch, and host-kernel layers.

- For combining LTTng/LTTng-UST, OpenStack probes, QEMU/KVM, Open vSwitch, and Trace Compass.
- For packet-ID correlation of Open vSwitch fast/slow paths with kernel scheduling evidence.
- For cross-layer live-migration timing and VM-interference analysis.
- For motivating security or performance diagnosis that cannot be explained by a single service log.

## Citation

### APA 7

Bationo, Y. J., Ezzati-Jivan, N., Galea, E., & Dagenais, M. R. (2020). Cloud Platform Performance Evaluation Using Multi-level Execution Tracing. In IEEE Internet of Things, GreenCom, CPSCom and SmartData (pp. 294-299). https://doi.org/10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063

### IEEE

Y. J. Bationo, N. Ezzati-Jivan, E. Galea, and M. R. Dagenais, "Cloud Platform Performance Evaluation Using Multi-level Execution Tracing," in IEEE Internet of Things, GreenCom, CPSCom and SmartData, pp. 294-299, 2020, doi: 10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063

```bibtex
@inproceedings{ezzatiJivan2020cloudplatform,
  author = {Yves J. Bationo and Naser Ezzati-Jivan and Evan Galea and Michel R. Dagenais},
  title = {Cloud Platform Performance Evaluation Using Multi-level Execution Tracing},
  year = {2020},
  booktitle = {IEEE Internet of Things, GreenCom, CPSCom and SmartData},
  pages = {294-299},
  publisher = {IEEE},
  doi = {10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063},
  url = {https://doi.org/10.1109/ithings-greencom-cpscom-smartdata-cybermatics50389.2020.00063}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Exact full paper PDF reviewed: Cloud Platform Performance Analysis, IEEE iThings/GreenCom/CPSCom/SmartData/Cybermatics 2020, DOI 10.1109/iThings-GreenCom-CPSCom-SmartData-Cybermatics50389.2020.00063.; OpenStack probe coverage, Open vSwitch packet events, live-migration measurements, and the resource-interference case were checked against the paper's figures and tables.
- Machine-readable record: [paper.json](./paper.json)
