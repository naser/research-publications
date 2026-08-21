# MemAdapt: Adaptive Monitoring of Memory Usage Through Irregularly Sampled Data

**2024 | 2024 IEEE International Conference on Collaborative Advances in Software and COmputiNg (CASCON) | conference paper**

**Authors:** Pranjal Chakraborty, Majid Babaei, Leila Tahmooresnejad, Naser Ezzati-Jivan

**Core contribution:** MemAdapt models irregular memory-usage observations and uses forecasting to choose sampling rates that better balance monitoring accuracy and collection cost.

## Four-part research summary

### 1. Problem and motivation

Memory monitoring often produces irregularly sampled data, but conventional forecasting assumes regular samples; a fixed sampling rate can waste resources or miss useful changes.

### 2. Method and contribution

The public abstract describes a framework relating sampling frequency to expected memory-usage estimation, together with irregular-time forecasting models. An ODE-RNN predicts future usage and estimates an appropriate sampling rate from historical observations with varying sampling frequencies.

### 3. Findings and evidence

The abstract reports that ODE-RNN predicts sampling rates within 5% of the ideal rate with 78.5% accuracy, that longer lookback periods improve forecasting, and that the adaptive policy uses the forecast to approximate ideal sampling rates. The full evaluation configuration remains unverified.

### 4. Limitations and future directions

**Limitations:** The publisher PDF was not obtained, so the memory workload, baseline policies, sampling distribution, training/test split, and operational overhead remain unverified.

**Future work:** Evaluate the adaptive policy on longer-running production workloads and under abrupt memory-pressure changes; confirm the authors' specific future-work section from the full paper.

## Abstract

The available author synopsis describes an adaptive memory-monitoring approach built around irregularly sampled data and forecasting; the full algorithm and evaluation were not captured.

## Topics and keywords

**Tags:** [resource-analysis](../../topics/resource-analysis.md) | [predictive-monitoring](../../topics/predictive-monitoring.md) | [performance-analysis](../../topics/performance-analysis.md) | [machine-learning](../../topics/machine-learning.md)

**Keywords:** memory monitoring | irregular sampling | [adaptive monitoring](../../keywords/adaptive-monitoring.md) | time series | [memory usage](../../keywords/memory-usage.md) | MemAdapt

## Versions and source links

- [Published version](https://doi.org/10.1109/CASCON62161.2024.10838037) - published
- [CASCON program](https://iccsse.github.io/CASCON2024/program/) - public_source_record

**Canonical source:** [https://doi.org/10.1109/CASCON62161.2024.10838037](https://doi.org/10.1109/CASCON62161.2024.10838037)

## Identifiers

[DOI 10.1109/CASCON62161.2024.10838037](https://doi.org/10.1109/CASCON62161.2024.10838037)

## When to cite this paper

Cite this paper when forecasting irregular memory-usage observations and adapting monitoring frequency.

- ODE-RNN forecasting for irregularly sampled memory data.
- Sampling-frequency selection as an explicit monitoring-accuracy/resource trade-off.
- The reported 78.5% accuracy for predicting sampling rates within 5% of the ideal rate.

## Citation

### APA 7

Chakraborty, P., Babaei, M., Tahmooresnejad, L., & Ezzati-Jivan, N. (2024). MemAdapt: Adaptive Monitoring of Memory Usage Through Irregularly Sampled Data. In 2024 IEEE International Conference on Collaborative Advances in Software and COmputiNg (CASCON) (pp. 1-6). https://doi.org/10.1109/CASCON62161.2024.10838037

### IEEE

P. Chakraborty, M. Babaei, L. Tahmooresnejad, and N. Ezzati-Jivan, "MemAdapt: Adaptive Monitoring of Memory Usage Through Irregularly Sampled Data," in 2024 IEEE International Conference on Collaborative Advances in Software and COmputiNg (CASCON), pp. 1-6, 2024, doi: 10.1109/CASCON62161.2024.10838037

```bibtex
@inproceedings{ezzatiJivan2024memadaptadaptive,
  author = {Pranjal Chakraborty and Majid Babaei and Leila Tahmooresnejad and Naser Ezzati-Jivan},
  title = {MemAdapt: Adaptive Monitoring of Memory Usage Through Irregularly Sampled Data},
  year = {2024},
  booktitle = {2024 IEEE International Conference on Collaborative Advances in Software and COmputiNg (CASCON)},
  pages = {1-6},
  publisher = {IEEE},
  doi = {10.1109/CASCON62161.2024.10838037},
  url = {https://doi.org/10.1109/CASCON62161.2024.10838037}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-21
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: DOI: https://doi.org/10.1109/CASCON62161.2024.10838037; CASCON 2024 program: https://iccsse.github.io/CASCON2024/program/; Author synopsis: https://majidbabaei.com/; OpenAlex abstract metadata reviewed for ODE-RNN and 78.5% result; full text still needed
- Machine-readable record: [paper.json](./paper.json)
