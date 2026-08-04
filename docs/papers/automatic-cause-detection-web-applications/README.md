# Automatic Cause Detection of Performance Problems in Web Applications

**2019 | IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW) | workshop paper**

**Authors:** Quentin Fournier, Naser Ezzati-Jivan, Daniel Aloise, Michel R. Dagenais

**Core contribution:** The paper presents a tracing and analysis pipeline that detects slow web requests and groups them by internal execution behavior to expose likely causes.

## Four-part research summary

### 1. Problem and motivation

Slow web requests can look similar at the application boundary while having different low-level causes. Developers need fine-grained evidence across user space and kernel space to distinguish those causes.

### 2. Method and contribution

The pipeline traces each request, extracts behavioral features, detects outliers, clusters requests by execution behavior, and analyzes each cluster for causal explanations.

### 3. Findings and evidence

The experiments detected slow requests and provided additional root-cause insight. One concrete result was the identification of PHP cache contention in a real web-application scenario.

### 4. Limitations and future directions

**Limitations:** The evaluation emphasizes web-request behavior and a limited set of application conditions.

**Future work:** Future work should assess more frameworks, workloads, deployment environments, and automated explanations that remain stable under changing application versions.

## Abstract

The execution of similar units can be compared by their internal behaviors to determine the causes of their potential performance issues. For instance, by examining the internal behaviors of different fast or slow web requests more closely and by clustering and comparing their internal executions, one can determine what causes some requests to run slowly or behave in unexpected ways. In this paper, we propose a method of extracting the internal behavior of web requests as well as introduce a pipeline that detects performance issues in web requests and provides insights into their root causes. First, low-level and fine-grained information regarding each request is gathered by tracing both the user space and the kernel space. Second, further information is extracted and fed into an outlier detector. Finally, these outliers are then clustered by their behavior, and each group is analyzed separately. Experiments revealed that this pipeline is indeed able to detect slow web requests and provide additional insights into their true root causes. Notably, we were able to identify a real PHP cache contention using the proposed approach.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [web-performance](../../topics/web-performance.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [root-cause-analysis](../../topics/root-cause-analysis.md)

**Keywords:** [web requests](../../keywords/web-requests.md) | [user-space tracing](../../keywords/user-space-tracing.md) | [kernel-space tracing](../../keywords/kernel-space-tracing.md) | [outlier detection](../../keywords/outlier-detection.md) | [behavior clustering](../../keywords/behavior-clustering.md) | [PHP cache contention](../../keywords/php-cache-contention.md)

## Versions and source links

- [Published version](https://doi.org/10.1109/ISSREW.2019.00102) - published
- [Public preprint](https://arxiv.org/abs/2103.04954) | [PDF](https://arxiv.org/pdf/2103.04954) - public_full_text

**Canonical source:** [https://doi.org/10.1109/ISSREW.2019.00102](https://doi.org/10.1109/ISSREW.2019.00102)

## Identifiers

[DOI 10.1109/ISSREW.2019.00102](https://doi.org/10.1109/ISSREW.2019.00102) | [arXiv 2103.04954](https://arxiv.org/abs/2103.04954)

## When to cite this paper

Cite this paper when diagnosing slow web requests with cross-layer tracing.

- Cross-layer user-space and kernel-space tracing of web requests.
- Clustering and comparison of normal versus slow request behavior.
- Root-cause analysis of application and system interactions.

## Citation

### APA 7

Fournier, Q., Ezzati-Jivan, N., Aloise, D., & Dagenais, M. R. (2019). Automatic Cause Detection of Performance Problems in Web Applications. IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW). https://doi.org/10.1109/ISSREW.2019.00102

### IEEE

Q. Fournier, N. Ezzati-Jivan, D. Aloise, and M. R. Dagenais, "Automatic Cause Detection of Performance Problems in Web Applications," in IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW), 2019, doi: 10.1109/ISSREW.2019.00102

```bibtex
@inproceedings{ezzatiJivan2019automaticcause,
  author = {Quentin Fournier and Naser Ezzati-Jivan and Daniel Aloise and Michel R. Dagenais},
  title = {Automatic Cause Detection of Performance Problems in Web Applications},
  year = {2019},
  booktitle = {IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW)},
  doi = {10.1109/ISSREW.2019.00102},
  url = {https://doi.org/10.1109/ISSREW.2019.00102}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-03
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: DBLP and IEEE metadata for the published paper; official arXiv abstract and PDF page 2103.04954; local PDF hash verified in the working catalog
- Machine-readable record: [paper.json](./paper.json)
