# Deep Learning Driven Anomaly Based Intrusion Detection System for IoT: Poster Abstract

**2022 | ACM/IFIP/USENIX Middleware 2022 Demos/Posters | poster abstract**

**Authors:** Yue Guan, Naser Ezzati-Jivan

**Core contribution:** The poster proposes a hybrid IoT intrusion-detection pipeline with binary anomaly detection followed by multiclass attack classification.

## Four-part research summary

### 1. Problem and motivation

The poster motivates anomaly/intrusion detection for growing IoT networks, arguing that existing methods may be poorly tuned and that large feature sets increase computation, memory, and training time (p. 1, "Abstract/Introduction").

### 2. Method and contribution

A hybrid pipeline uses a machine-learning binary classifier for normal/anomalous traffic and an RNN for multiclass attack-type classification. It applies SMOTE for imbalance, PSO feature selection, and hyperparameter tuning over loss, optimizer, batch size, and epochs (p. 1, "Methodology").

### 3. Findings and evidence

IoTID20 with 86 captured features is named. The conclusion claims that feature selection and balancing such as SMOTE and "SMO" can improve performance and execution time, but the poster reports no numeric accuracy, precision, recall, F-score, latency, split, baseline, hardware, or run count.

### 4. Limitations and future directions

**Limitations:** Classifier names beyond "machine learning binary classifier" and "RNN," software versions, traffic-generation procedure, hardware, train/test protocol, and numeric results are unknown. The methodology names PSO, while the conclusion says SMO; preserve this source inconsistency.

**Future work:** More realistic datasets/attacks, other ML/DL models, GPU/cloud acceleration, and a high-performance GPU platform (p. 1, "Future Work").

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [iot-security](../../topics/iot-security.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [machine-learning](../../topics/machine-learning.md) | [deep-learning-systems](../../topics/deep-learning-systems.md)

**Keywords:** IoTID20 | RNN | [SMOTE](../../keywords/smote.md) | [PSO](../../keywords/pso.md) | binary classification | multiclass classification | IoT attacks | [intrusion detection](../../keywords/intrusion-detection.md)

## Versions and source links

- [Published version](https://doi.org/10.1145/3565386.3565493) - published
- [Public poster artifact](https://naser.github.io/assets/IoT_MW2022Poster.pdf) | [PDF](https://naser.github.io/assets/IoT_MW2022Poster.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3565386.3565493](https://doi.org/10.1145/3565386.3565493)

## Identifiers

[DOI 10.1145/3565386.3565493](https://doi.org/10.1145/3565386.3565493)

## When to cite this paper

Cite this paper when your work uses or compares the poster-level proposal of a two-stage IoT IDS combining binary anomaly screening with RNN attack-type classification.

- For the poster-level proposal of a two-stage IoT IDS combining binary anomaly screening with RNN attack-type classification.
- For the stated use of IoTID20/86 features with SMOTE and PSO feature selection in an IoT intrusion-detection pipeline.
- For a research motivation/future-work citation on reducing IoT IDS feature-processing cost through selection, balancing, and GPU/cloud acceleration; do not cite it for a numeric performance result.

## Citation


### Alternative or source-rendered titles

- Poster Paper: Deep Learning driven Anomaly based Intrusion Detection System for IoT
### APA 7

Guan, Y., & Ezzati-Jivan, N. (2022). Deep Learning Driven Anomaly Based Intrusion Detection System for IoT: Poster Abstract. In ACM/IFIP/USENIX Middleware 2022 Demos/Posters (pp. 19-20). https://doi.org/10.1145/3565386.3565493

### IEEE

Y. Guan and N. Ezzati-Jivan, "Deep Learning Driven Anomaly Based Intrusion Detection System for IoT: Poster Abstract," in ACM/IFIP/USENIX Middleware 2022 Demos/Posters, pp. 19-20, 2022, doi: 10.1145/3565386.3565493

```bibtex
@inproceedings{ezzatiJivan2022deeplearning,
  author = {Yue Guan and Naser Ezzati-Jivan},
  title = {Deep Learning Driven Anomaly Based Intrusion Detection System for IoT: Poster Abstract},
  year = {2022},
  booktitle = {ACM/IFIP/USENIX Middleware 2022 Demos/Posters},
  pages = {19-20},
  publisher = {ACM},
  doi = {10.1145/3565386.3565493},
  url = {https://doi.org/10.1145/3565386.3565493}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Private one-page poster read: pdf-evidence/notes/parallel-batch-02-deep-learning-driven-anomaly-based-intrusion-detection-system-for-iot-poster-abstract-e3d870b1d7.md; DOI/DBLP published item: https://doi.org/10.1145/3565386.3565493; Public poster source: https://naser.github.io/assets/IoT_MW2022Poster.pdf; Local poster hash verified: B1B4A85A9EB721BC9930119CF6CBF6797CA28B6F7525E21DD5633DF8138F1682
- Machine-readable record: [paper.json](./paper.json)
