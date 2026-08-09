# Machine Learning-Based EDoS Attack Detection Technique Using Execution Trace Analysis

**2019 | Journal of Hardware and Systems Security | journal article**

**Authors:** Hossein Abbasi, Naser Ezzati-Jivan, Martine Bellaiche, Chamseddine Talhi, Michel R. Dagenais

**Core contribution:** The paper combines execution-trace and virtual-machine metrics with machine learning to detect EDoS behavior and restrict resource expansion to apparently normal VMs.

## Four-part research summary

### 1. Problem and motivation

EDoS attacks can make a pay-per-use cloud allocate additional resources to malicious traffic, causing cost escalation; packet-level similarity makes simple traffic rules inadequate.

### 2. Method and contribution

A hypervisor/VM monitoring framework collects an 18-feature execution/resource profile with LTTng and standard host tools, updates normal behavior with an exponential moving average, classifies traffic with a generic ML decision unit, and allocates extra resources only to traffic classified as normal. It also compares attack-specific C1/C2/C3 baselines with WEKA MLP and SMO/SVM models.

### 3. Findings and evidence

In the stated two-VM experiment, MLP reported 97.06% correct traffic and SMO/SVM reported no incorrect test instances under the 65/35 split. The framework is plotted above Snort in an approximate comparison, but mixed attacks reduce accuracy and the paper supplies no public corpus size or independent benchmark.

### 4. Limitations and future directions

**Limitations:** OS, kernel, hardware, corpus size, and public dataset identifier are unknown. The evaluation uses a small controlled setup and attack generators/tools; the reported test percentages should not be generalized to production traffic. Simultaneous attack classes are explicitly difficult.

**Future work:** Weight metrics, predict/detect additional attack classes automatically, add real-world traffic, and expand the feature set.

## Abstract

Economic Denial of Sustainability (EDoS) attacks can cause cloud customers to pay for malicious resource consumption. The paper proposes a framework that learns normal and abnormal virtual-machine behavior and allocates extra resources only to VMs classified as normal, limiting attack propagation and resource misuse.

## Topics and keywords

**Tags:** [anomaly-detection](../../topics/anomaly-detection.md) | [kernel-tracing](../../topics/kernel-tracing.md) | [machine-learning](../../topics/machine-learning.md) | [performance-analysis](../../topics/performance-analysis.md) | [resource-analysis](../../topics/resource-analysis.md) | [system-tracing](../../topics/system-tracing.md)

**Keywords:** Economic Denial of Sustainability | EDoS | DDoS | cloud computing | execution trace analysis | [LTTng](../../keywords/lttng.md) | [QEMU](../../keywords/qemu.md) | [KVM](../../keywords/kvm.md) | [Apache](../../keywords/apache.md) | MySQL | HTTPFlooder | LoadRunner | WEKA | multilayer perceptron | [SVM](../../keywords/svm.md) | Snort

## Versions and source links

- [Published version](https://doi.org/10.1007/s41635-018-0061-2) - published
- [Public institutional full text](https://publications.polymtl.ca/4211/) | [PDF](https://publications.polymtl.ca/4211/1/2019_Abbasi_Machine_learning-based_EDoS_attack_detection.pdf) - public_accepted_manuscript

**Canonical source:** [https://doi.org/10.1007/s41635-018-0061-2](https://doi.org/10.1007/s41635-018-0061-2)

## Identifiers

[DOI 10.1007/s41635-018-0061-2](https://doi.org/10.1007/s41635-018-0061-2)

## When to cite this paper

Cite this paper when your work uses or compares an 18-feature VM resource/traffic profile used to gate EDoS-related resource allocation.

- For an 18-feature VM resource/traffic profile used to gate EDoS-related resource allocation.
- For combining kernel-trace packet information with hypervisor and standard host metrics in EDoS detection.
- For the small WEKA MLP-versus-SMO/SVM comparison and its 65/35 evaluation protocol.
- For the explicit failure mode in which simultaneous HTTP and database attacks resemble heavy normal traffic.

## Citation

### APA 7

Abbasi, H., Ezzati-Jivan, N., Bellaiche, M., Talhi, C., & Dagenais, M. R. (2019). Machine Learning-Based EDoS Attack Detection Technique Using Execution Trace Analysis. Journal of Hardware and Systems Security, 3(2), 164-176. https://doi.org/10.1007/s41635-018-0061-2

### IEEE

H. Abbasi, N. Ezzati-Jivan, M. Bellaiche, C. Talhi, and M. R. Dagenais, "Machine Learning-Based EDoS Attack Detection Technique Using Execution Trace Analysis," Journal of Hardware and Systems Security, vol. 3, no. 2, pp. 164-176, 2019, doi: 10.1007/s41635-018-0061-2

```bibtex
@article{ezzatiJivan2019machinelearning,
  author = {Hossein Abbasi and Naser Ezzati-Jivan and Martine Bellaiche and Chamseddine Talhi and Michel R. Dagenais},
  title = {Machine Learning-Based EDoS Attack Detection Technique Using Execution Trace Analysis},
  year = {2019},
  journal = {Journal of Hardware and Systems Security},
  volume = {3},
  number = {2},
  pages = {164-176},
  publisher = {Springer Science and Business Media LLC},
  issn = {2509-3428, 2509-3436},
  doi = {10.1007/s41635-018-0061-2},
  url = {https://doi.org/10.1007/s41635-018-0061-2}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: PolyPublie repository record identity matched to the catalog title and author record; public PDF downloaded locally and %PDF- signature verified; PolyPublie cover sheet identifies this as the post-peer-review, pre-copyedit Springer version.
- Machine-readable record: [paper.json](./paper.json)
