# CNN-BiLSTM-Based Classification of RPL Attacks in IoT Smart Grid Networks (Industry Track)

**2023 | ACM/IFIP/USENIX Middleware 2023 Industry Track | industry-track paper**

**Authors:** Yue Guan, Morteza Noferesti, Naser Ezzati-Jivan

**Core contribution:** The paper evaluates a CNN-BiLSTM classifier for detecting and classifying RPL routing attacks in industrial IoT smart-grid networks.

## Four-part research summary

### 1. Problem and motivation

RPL-based smart-grid IoT networks combine resource constraints with broad connectivity, making them exposed to routing attacks and class imbalance in attack data.

### 2. Method and contribution

The public abstract describes preprocessing and feature enhancement, SMOTE for class balancing, and comparison of the CNN-BiLSTM model with seven deep-learning and traditional classifiers. Two scenarios are used: a simulated IIoT network with multiple RPL attacks and a dataset from nine commercial IoT devices infected by two botnets.

### 3. Findings and evidence

For the simulated scenario, the abstract reports 91% accuracy, 89% precision, and 89% recall. For the commercial-device dataset, it reports 90% accuracy, 89% precision, 90% recall, and 89% F1. Exact attack labels, split protocol, and model configuration require the full paper.

### 4. Limitations and future directions

**Limitations:** The full paper was not obtained; the record does not yet verify the simulator, device telemetry, attack duration, cross-device split, or whether the reported comparison controls class imbalance consistently.

**Future work:** Validate across additional RPL implementations and larger real deployments, and review the paper-specific future-work section when the full text is available.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [iot-security](../../topics/iot-security.md) | [deep-learning-systems](../../topics/deep-learning-systems.md) | [machine-learning](../../topics/machine-learning.md) | [anomaly-detection](../../topics/anomaly-detection.md)

**Keywords:** RPL attacks | IoT smart grid | [CNN-BiLSTM](../../keywords/cnn-bilstm.md) | routing attacks | [intrusion detection](../../keywords/intrusion-detection.md) | Middleware 2023

## Versions and source links

- [Published version](https://doi.org/10.1145/3626562.3626832) - published
- [DBLP record](https://dblp.org/rec/conf/middleware/GuanNE23) - public_source_record

**Canonical source:** [https://doi.org/10.1145/3626562.3626832](https://doi.org/10.1145/3626562.3626832)

## Identifiers

[DOI 10.1145/3626562.3626832](https://doi.org/10.1145/3626562.3626832)

## When to cite this paper

Cite this paper when classifying RPL attacks in industrial IoT smart-grid networks with CNN-BiLSTM models.

- SMOTE and feature enhancement for imbalanced RPL-attack data.
- Comparison across a simulated IIoT scenario and nine commercial IoT devices infected by botnets.
- The reported 90-91% accuracy range and precision/recall/F1 results.

## Citation

### APA 7

Guan, Y., Noferesti, M., & Ezzati-Jivan, N. (2023). CNN-BiLSTM-Based Classification of RPL Attacks in IoT Smart Grid Networks (Industry Track). In ACM/IFIP/USENIX Middleware 2023 Industry Track (pp. 29-34). https://doi.org/10.1145/3626562.3626832

### IEEE

Y. Guan, M. Noferesti, and N. Ezzati-Jivan, "CNN-BiLSTM-Based Classification of RPL Attacks in IoT Smart Grid Networks (Industry Track)," in ACM/IFIP/USENIX Middleware 2023 Industry Track, pp. 29-34, 2023, doi: 10.1145/3626562.3626832

```bibtex
@inproceedings{ezzatiJivan2023cnnbilstm,
  author = {Yue Guan and Morteza Noferesti and Naser Ezzati-Jivan},
  title = {CNN-BiLSTM-Based Classification of RPL Attacks in IoT Smart Grid Networks (Industry Track)},
  year = {2023},
  booktitle = {ACM/IFIP/USENIX Middleware 2023 Industry Track},
  pages = {29-34},
  publisher = {ACM},
  doi = {10.1145/3626562.3626832},
  url = {https://doi.org/10.1145/3626562.3626832}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-21
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: DOI: https://doi.org/10.1145/3626562.3626832; DBLP record: https://dblp.org/rec/conf/middleware/GuanNE23; OpenAlex abstract metadata reviewed for scenarios, SMOTE, model comparison, and reported metrics; full text still needed
- Machine-readable record: [paper.json](./paper.json)
