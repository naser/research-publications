# Assessing Predictive Models for Energy Consumption Across Varied Software Environments

**2024 | 2024 IEEE International Conference on Big Data (BigData) | conference paper**

**Authors:** Tong Zhang, Sarwat Islam Dipanzan, Leila Tahmooresnejad, Naser Ezzati-Jivan

**Core contribution:** The paper evaluates software-energy prediction models that combine performance-counter events and system-call data across varied software environments.

## Four-part research summary

### 1. Problem and motivation

Energy models can change substantially with feature selection, operating-system behavior, and the target application, making cross-application energy prediction difficult to trust.

### 2. Method and contribution

The public abstract describes linear regression, multilayer perceptrons, and random forests calibrated against empirical energy measurements obtained with Perf. The study compares event-based and other feature representations across multiple software scenarios and evaluates performance on unseen datasets.

### 3. Findings and evidence

The abstract reports robust prediction across diverse scenarios and particularly promising transfer to unseen datasets for event-based models, while cross-application efficacy remains challenging. The captured public record does not expose exact scores, hardware, or workload counts.

### 4. Limitations and future directions

**Limitations:** The full paper was not obtained, so the energy-measurement setup, counter set, operating systems, model hyperparameters, and cross-application split remain unverified.

**Future work:** The abstract leaves cross-application generalization as an open issue; the paper-specific future-work section and independent reproduction requirements remain to be reviewed from the full text.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [energy-efficiency](../../topics/energy-efficiency.md) | [performance-modeling](../../topics/performance-modeling.md) | [predictive-monitoring](../../topics/predictive-monitoring.md) | [machine-learning](../../topics/machine-learning.md)

**Keywords:** software energy consumption | predictive models | energy efficiency | software environments | IEEE Big Data 2024

## Versions and source links

- [Published version](https://doi.org/10.1109/BigData62323.2024.10825500) - published
- [IEEE record](https://ieeexplore.ieee.org/document/10825500/) - public_source_record

**Canonical source:** [https://doi.org/10.1109/BigData62323.2024.10825500](https://doi.org/10.1109/BigData62323.2024.10825500)

## Identifiers

[DOI 10.1109/BigData62323.2024.10825500](https://doi.org/10.1109/BigData62323.2024.10825500)

## When to cite this paper

Cite this paper when evaluating software-energy models built from Perf counters and system-call features across applications.

- Linear regression, multilayer perceptron, and random-forest energy predictors.
- Calibration against empirical Perf-based energy measurements.
- Cross-application and unseen-dataset generalization limits for event-based models.

## Citation

### APA 7

Zhang, T., Dipanzan, S. I., Tahmooresnejad, L., & Ezzati-Jivan, N. (2024). Assessing Predictive Models for Energy Consumption Across Varied Software Environments. In 2024 IEEE International Conference on Big Data (BigData) (pp. 5233-5242). https://doi.org/10.1109/BigData62323.2024.10825500

### IEEE

T. Zhang, S. I. Dipanzan, L. Tahmooresnejad, and N. Ezzati-Jivan, "Assessing Predictive Models for Energy Consumption Across Varied Software Environments," in 2024 IEEE International Conference on Big Data (BigData), pp. 5233-5242, 2024, doi: 10.1109/BigData62323.2024.10825500

```bibtex
@inproceedings{ezzatiJivan2024assessingpredictive,
  author = {Tong Zhang and Sarwat Islam Dipanzan and Leila Tahmooresnejad and Naser Ezzati-Jivan},
  title = {Assessing Predictive Models for Energy Consumption Across Varied Software Environments},
  year = {2024},
  booktitle = {2024 IEEE International Conference on Big Data (BigData)},
  pages = {5233-5242},
  publisher = {IEEE},
  doi = {10.1109/BigData62323.2024.10825500},
  url = {https://doi.org/10.1109/BigData62323.2024.10825500}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-21
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: IEEE record and DOI: https://doi.org/10.1109/BigData62323.2024.10825500; Public ResearchGate record with abstract context: https://www.researchgate.net/publication/388090793_Assessing_Predictive_Models_for_Energy_Consumption_Across_Varied_Software_Environments; OpenAlex abstract metadata reviewed for model families, Perf calibration, and cross-application findings; full text still needed
- Machine-readable record: [paper.json](./paper.json)
