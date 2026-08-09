# Multi-level Host-based Intrusion Detection System for Internet of Things

**2020 | Journal of Cloud Computing | journal article**

**Authors:** Robin Gassais, Naser Ezzati-Jivan, Jose M. Fernandez, Daniel Aloise, Michel R. Dagenais

**Core contribution:** The paper combines host-level user/kernel tracing with machine learning to detect intrusion behavior on constrained IoT and home-automation systems.

## Four-part research summary

### 1. Problem and motivation

IoT intrusion detection needs host-level context across user and kernel activity, but resource-constrained devices cannot perform all analysis locally and network-only signals miss useful execution behavior.

### 2. Method and contribution

A multi-level host IDS collects live/snapshot LTTng CTF data on an IoT device, optionally uses barectf, aggregates selected events remotely, creates synthetic syscall events and one-hot features, and evaluates supervised DT/RF/GBT/MLP/SVM plus One-Class SVM and LSTM models.

### 3. Findings and evidence

In the Home Assistant/Raspberry Pi experiment, DT/RF/GBT reported near-perfect classification on the stated split, while MLP and the printed SVM row were much less reliable. Snapshot tracing added roughly 0.25-1.52% average CPU overhead across 10 s-0.5 s intervals and roughly 1.8-2.7% memory overhead. A novel basic attack had millisecond-scale detection latencies, but it was not real malware.

### 4. Limitations and future directions

**Limitations:** The attacks are simulated or mimicked; no real malware and no public corpus identifier were verified. TCP/IP-centric collection excludes several IoT protocols, including Z-Wave/Zigbee/Insteon data collection. Supervised models only cover learned attacks; cross-validation can be optimistic and the analysis engine may be a single point of failure.

**Future work:** Combine misuse and anomaly detection, add an ARM honeypot, scale/optimize the analysis engine and learning process, build per-device or ensemble models, and support LTTng live mode plus additional IoT protocols.

## Abstract

The paper presents a host-based IoT intrusion-detection framework that combines user- and kernel-space traces with machine-learning classifiers.

## Topics and keywords

**Tags:** [iot-security](../../topics/iot-security.md) | [kernel-tracing](../../topics/kernel-tracing.md) | [machine-learning](../../topics/machine-learning.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [lttng](../../topics/lttng.md) | [observability](../../topics/observability.md)

**Keywords:** [IoT intrusion detection](../../keywords/iot-intrusion-detection.md) | [host-based IDS](../../keywords/host-based-ids.md) | [LTTng](../../keywords/lttng.md) | [barectf](../../keywords/barectf.md) | [Common Trace Format](../../keywords/common-trace-format.md) | [Babeltrace](../../keywords/babeltrace.md) | [Raspberry Pi 3](../../keywords/raspberry-pi-3.md) | [Home Assistant](../../keywords/home-assistant.md) | [Decision Tree](../../keywords/decision-tree.md) | [Random Forest](../../keywords/random-forest.md) | [Gradient Boosted Trees](../../keywords/gradient-boosted-trees.md) | [SVM](../../keywords/svm.md) | [MLP](../../keywords/mlp.md) | [LSTM](../../keywords/lstm.md) | [Mirai](../../keywords/mirai.md) | [ransomware](../../keywords/ransomware.md) | [CPU overhead](../../keywords/cpu-overhead.md) | [memory overhead](../../keywords/memory-overhead.md)

## Versions and source links

- [Published version](https://doi.org/10.1186/s13677-020-00206-6) - published
- [Institutional full text](https://link.springer.com/content/pdf/10.1186/s13677-020-00206-6.pdf) | [PDF](https://link.springer.com/content/pdf/10.1186/s13677-020-00206-6.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1186/s13677-020-00206-6](https://doi.org/10.1186/s13677-020-00206-6)

## Identifiers

[DOI 10.1186/s13677-020-00206-6](https://doi.org/10.1186/s13677-020-00206-6)

## When to cite this paper

Cite this paper when your work uses or compares a multi-level IoT host IDS that exports trace-derived features to a remote analysis engine.

- For a multi-level IoT host IDS that exports trace-derived features to a remote analysis engine.
- For the trace-to-FSM-synthetic-event-to-one-hot-feature pipeline over LTTng/barectf/Babeltrace data.
- For the Home Assistant/Raspberry Pi 3 benign-plus-threat evaluation and its snapshot CPU/memory overhead measurements.
- For the explicit boundary that near-perfect supervised results came from simulated/mimicked attacks rather than real malware.

## Citation

### APA 7

Gassais, R., Ezzati-Jivan, N., Fernandez, J. M., Aloise, D., & Dagenais, M. R. (2020). Multi-level Host-based Intrusion Detection System for Internet of Things. Journal of Cloud Computing. https://doi.org/10.1186/s13677-020-00206-6

### IEEE

R. Gassais, N. Ezzati-Jivan, J. M. Fernandez, D. Aloise, and M. R. Dagenais, "Multi-level Host-based Intrusion Detection System for Internet of Things," Journal of Cloud Computing, 2020, doi: 10.1186/s13677-020-00206-6

```bibtex
@article{ezzatiJivan2020multilevel,
  author = {Robin Gassais and Naser Ezzati-Jivan and Jose M. Fernandez and Daniel Aloise and Michel R. Dagenais},
  title = {Multi-level Host-based Intrusion Detection System for Internet of Things},
  year = {2020},
  journal = {Journal of Cloud Computing},
  doi = {10.1186/s13677-020-00206-6},
  url = {https://doi.org/10.1186/s13677-020-00206-6}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: Official Journal of Cloud Computing PDF: LTTng/barectf/CTF/Babeltrace pipeline, Raspberry Pi/Home Assistant testbed, features, models, and attack simulations; Official PDF: 58/42 benign-intrusion split, 66/34 train/test split, classifier metrics, latency, CPU, memory, and training-cost results; Official PDF: protocol, real-malware, validation-bias, single-point, and scaling limitations plus future work; Official open-access PDF was read; no copy is included in github-repo
- Machine-readable record: [paper.json](./paper.json)
