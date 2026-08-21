# Container Workload Characterization Through Host System Tracing

**2021 | 2021 IEEE International Conference on Cloud Engineering (IC2E) | conference paper**

**Authors:** Madeline Janecek, Naser Ezzati-Jivan, Seyed Vahid Azhari

**Core contribution:** The paper characterizes container workloads from host-level LTTng traces by selecting important threads and clustering execution-state behavior without instrumenting the containers internally.

## Four-part research summary

### 1. Problem and motivation

Container-internal agents expose useful workload metrics but add deployment, privacy, and security costs. The paper studies whether host-only kernel tracing can characterize container workloads in a scalable way without instrumenting the application inside the container.

### 2. Method and contribution

The method uses LTTng kernel events with pid-namespace, thread, virtual-thread, process-name, and virtual-process contexts, filtering events by container namespace. Trace Compass analyses classify thread time into user mode, system-call mode, preempted, interrupted, blocked, and waiting states. A scheduler-wakeup directed graph provides a PageRank-like thread ranking, and a normalized state-duration vector is clustered with a two-stage K-Means procedure: the first stage selects k=2 or 3 using silhouette score, and the second subdivides each cluster.

### 3. Findings and evidence

The Ubuntu 20.04.1/Linux 5.8/Docker 20.10.4 evaluation uses ApacheBench and Sysbench workloads representing network, CPU, disk, and idle behavior. The first-stage three-cluster solution has silhouette 0.7945 and separates CPU-heavy, network/I/O-blocked, and idle/waiting behavior; the second stage yields five interpretable groups including idle, disk I/O, network, CPU, and privileged CPU. The minimal trace configuration increases execution time from 214.85 ms to 222.60 ms, or 3.61%, while full kernel tracing reaches 261.30 ms, or 21.62%. In the clustering comparison, K-Means takes 0.67 s with reported silhouette 95.47%, faster than the tested alternatives.

### 4. Limitations and future directions

**Limitations:** The state vector and selected tracepoints describe behavior but do not by themselves explain why the workload has that behavior or prescribe a resource allocation. Results come from controlled Docker workloads on one host; more container runtimes, hosts, inputs, and interrupt types are needed to test transfer. Clustering quality depends on normalization, feature selection, and the chosen number of clusters.

**Future work:** The authors propose resource-allocation and configuration recommendations, studying workload-input effects, adding features such as interrupt types, and evaluating deep-learning alternatives.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [resource-analysis](../../topics/resource-analysis.md)

**Keywords:** container workloads | host tracing | [LTTng](../../keywords/lttng.md) | pid_ns | tid | [Trace Compass](../../keywords/trace-compass.md) | [PageRank](../../keywords/pagerank.md) | [K-Means](../../keywords/k-means.md) | [Docker](../../keywords/docker.md) | Ubuntu 20.04.1 | Linux 5.8.0 | [silhouette score](../../keywords/silhouette-score.md) | tracing overhead

## Versions and source links

- [Published version](https://doi.org/10.1109/ic2e52221.2021.00015) - published

**Canonical source:** [https://doi.org/10.1109/ic2e52221.2021.00015](https://doi.org/10.1109/ic2e52221.2021.00015)

## Identifiers

[DOI 10.1109/ic2e52221.2021.00015](https://doi.org/10.1109/ic2e52221.2021.00015)

## When to cite this paper

Cite this paper when characterizing Docker/container workloads from host kernel traces without deploying agents inside the containers.

- For pid-namespace filtering and context fields that separate container activity at the host.
- For scheduler-wakeup graph ranking combined with normalized thread-state duration vectors.
- For the two-stage K-Means separation of idle, network/I/O, CPU, disk, and privileged-CPU behavior.
- For the measured minimal-trace versus full-kernel-trace overhead comparison.

## Citation

### APA 7

Janecek, M., Ezzati-Jivan, N., & Azhari, S. V. (2021). Container Workload Characterization Through Host System Tracing. In 2021 IEEE International Conference on Cloud Engineering (IC2E) (pp. 9-19). https://doi.org/10.1109/ic2e52221.2021.00015

### IEEE

M. Janecek, N. Ezzati-Jivan, and S. V. Azhari, "Container Workload Characterization Through Host System Tracing," in 2021 IEEE International Conference on Cloud Engineering (IC2E), pp. 9-19, 2021, doi: 10.1109/ic2e52221.2021.00015

```bibtex
@inproceedings{ezzatiJivan2021containerworkload,
  author = {Madeline Janecek and Naser Ezzati-Jivan and Seyed Vahid Azhari},
  title = {Container Workload Characterization Through Host System Tracing},
  year = {2021},
  booktitle = {2021 IEEE International Conference on Cloud Engineering (IC2E)},
  pages = {9-19},
  publisher = {IEEE},
  doi = {10.1109/ic2e52221.2021.00015},
  url = {https://doi.org/10.1109/ic2e52221.2021.00015}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Exact full paper PDF reviewed: Container Workload Characterization, IEEE IC2E 2021, DOI 10.1109/IC2E52221.2021.00015.; LTTng contexts and tracepoints, Docker setup, two-stage clustering, cluster interpretations, overhead, and clustering-runtime results were checked against the paper.
- Machine-readable record: [paper.json](./paper.json)
