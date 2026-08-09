# Container Workload Characterization Through Host System Tracing

**2021 | IEEE International Conference on Cloud Computing Technology and Science (CloudCom) | research paper**

**Authors:** Madeline Janecek, Naser Ezzati-Jivan, Seyed Vahid Azhari

**Core contribution:** The paper characterizes container workloads from host-level LTTng traces by selecting important threads and clustering execution-state behavior without instrumenting the containers internally.

## Four-part research summary

### 1. Problem and motivation

Cloud users may not control internal container agents, and coarse CPU, disk, and network metrics do not reveal enough execution detail for workload characterization.

### 2. Method and contribution

LTTng kernel tracing records host events with pid_ns and tid context so events can be attributed to containers. Per-thread states such as user mode, system-call mode, preempted, interrupted, blocked, and waiting are aggregated into normalized container vectors; an adapted PageRank selects important threads and two-stage K-Means produces coarse and fine workload groups. Trace Compass and JavaScript scripting support extraction.

### 3. Findings and evidence

The Ubuntu 20.04.1/Linux 5.8.0/Docker 20.10.4 evaluation covers network-intensive, CPU-intensive, disk-I/O-intensive, and idle workloads. The CPU-intensive group has about 97.3% running/preempted time, the overall silhouette score is 0.6527, and the second clustering stage yields five finer groups. Average tracing overhead is 21.62% with all kernel events and 3.6% with the minimal necessary event set.

### 4. Limitations and future directions

**Limitations:** The evaluation covers four workload classes on one Linux/Docker configuration and depends on the selected execution-state features and clustering choices; it does not establish cross-runtime or multi-tenant generalization.

**Future work:** Use the clusters for resource allocation and configuration, test other inputs and tasks, distinguish interrupt types, and explore richer or deep-learning-based characterization.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [resource-analysis](../../topics/resource-analysis.md)

**Keywords:** [container workloads](../../keywords/container-workloads.md) | [host tracing](../../keywords/host-tracing.md) | [LTTng](../../keywords/lttng.md) | [pid_ns](../../keywords/pid-ns.md) | [tid](../../keywords/tid.md) | [Trace Compass](../../keywords/trace-compass.md) | [PageRank](../../keywords/pagerank.md) | [K-Means](../../keywords/k-means.md) | [Docker](../../keywords/docker.md) | [Ubuntu 20.04.1](../../keywords/ubuntu-20-04-1.md) | [Linux 5.8.0](../../keywords/linux-5-8-0.md) | [silhouette score](../../keywords/silhouette-score.md) | [tracing overhead](../../keywords/tracing-overhead.md)

## Versions and source links

- [Published version](https://doi.org/10.1109/ic2e52221.2021.00015) - published

**Canonical source:** [https://doi.org/10.1109/ic2e52221.2021.00015](https://doi.org/10.1109/ic2e52221.2021.00015)

## Identifiers

[DOI 10.1109/ic2e52221.2021.00015](https://doi.org/10.1109/ic2e52221.2021.00015)

## When to cite this paper

Cite this paper when characterizing container workloads from host-level tracing without internal container agents.

- LTTng pid_ns/tid context for attributing host events to containers.
- PageRank thread selection, execution-state vectors, and two-stage K-Means clustering.
- Docker workload groups, silhouette score, and minimal-versus-all-kernel-event overhead comparison.

## Citation

### APA 7

Janecek, M., Ezzati-Jivan, N., & Azhari, S. V. (2021). Container Workload Characterization Through Host System Tracing. IEEE International Conference on Cloud Computing Technology and Science (CloudCom). https://doi.org/10.1109/ic2e52221.2021.00015

### IEEE

M. Janecek, N. Ezzati-Jivan, and S. V. Azhari, "Container Workload Characterization Through Host System Tracing," in IEEE International Conference on Cloud Computing Technology and Science (CloudCom), 2021, doi: 10.1109/ic2e52221.2021.00015

```bibtex
@inproceedings{ezzatiJivan2021containerworkload,
  author = {Madeline Janecek and Naser Ezzati-Jivan and Seyed Vahid Azhari},
  title = {Container Workload Characterization Through Host System Tracing},
  year = {2021},
  booktitle = {IEEE International Conference on Cloud Computing Technology and Science (CloudCom)},
  doi = {10.1109/ic2e52221.2021.00015},
  url = {https://doi.org/10.1109/ic2e52221.2021.00015}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: DBLP/DOI bibliographic record for 10.1109/ic2e52221.2021.00015; author identity matched to Naser Ezzati-Jivan in the local research catalog; Container workload PDF pp. 1-4: host-only motivation, LTTng, pid_ns/tid attribution, and state extraction; Container workload PDF pp. 4-9: PageRank feature selection, vectorization, two-stage K-Means, workloads, and silhouette result; Container workload PDF pp. 9-10: required tracepoints, 21.62% versus 3.6% overhead, limitations, and future work; local container-workload PDF hash verified in pdf-evidence/notes/container-workload-characterization-host-tracing.md and pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
