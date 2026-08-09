# Uncovering Steady State Executions in Java Microbenchmarking with Call Graph Analysis

**2023 | ACM/SPEC ICPE Companion | conference paper**

**Authors:** Madeline Janecek, Sneh Patel, Naser Ezzati-Jivan

**Core contribution:** The paper uses sampled call graphs and machine learning to distinguish warmup from steady-state executions in Java microbenchmarks.

## Four-part research summary

### 1. Problem and motivation

JMH warmup and steady-state stages can differ structurally, while runtime-only detection gives little insight into why. The paper tests whether sampled call graphs distinguish the stages (pp. 1-2).

### 2. Method and contribution

Linux perf samples call stacks throughout JMH executions; timestamped start/end logs (Apache Log4j 2.11.2) delimit executions. Call graphs are visualized as flame graphs and embedded with Graph2Vec. PELT change-point detection supplies labels; this study checks 50 similar executions (5% of 1,000) after the change point rather than 500. MLP, Random Forest, Decision Tree, KNN, and SVC classifiers are evaluated (pp. 2-4).

### 3. Findings and evidence

The workload is a simple Java binary search with 10,000 executions across 10 forks on Ubuntu 22.04 LTS, 64-bit kernel 5.15.0-56, Perf 5.15.64, and JMH; warmup graphs have deeper/more irregular stacks and more interpreter functions. Accuracy/precision/recall: MLP 88.5/31.6/12.5%, RF 90.4/75.0/6%, DT 82.8/19.3/22.5%, KNN 89.8/45/9%, SVC 90/50/1% (pp. 3-4).

### 4. Limitations and future directions

**Limitations:** Accuracy/precision are misleading without the very low recall; the paper attributes this partly to the small dataset/labels and possibly insufficient Graph2Vec vector size. Cross-JVM and cross-workload generalization are not established.

**Future work:** More benchmarks, forks, and iterations; alternate/larger graph vectorizations; and unsupervised learning to avoid hand-derived labels (p. 4).

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [performance-analysis](../../topics/performance-analysis.md) | [performance-engineering](../../topics/performance-engineering.md) | [machine-learning](../../topics/machine-learning.md) | [trace-analysis](../../topics/trace-analysis.md)

**Keywords:** [Java](../../keywords/java.md) | [JMH](../../keywords/jmh.md) | [microbenchmarking](../../keywords/microbenchmarking.md) | [steady-state detection](../../keywords/steady-state-detection.md) | [warmup](../../keywords/warmup.md) | [call-graph analysis](../../keywords/call-graph-analysis.md) | [Perf](../../keywords/perf.md) | [Graph2Vec](../../keywords/graph2vec.md) | [change-point detection](../../keywords/change-point-detection.md) | [PELT](../../keywords/pelt.md) | [Random Forest](../../keywords/random-forest.md) | [SVC](../../keywords/svc.md) | [flame graphs](../../keywords/flame-graphs.md)

## Resources

- [Code](https://github.com/sneh2001patel/Uncovering-Steady-State-Executions-in-Java-Microbenchmarking-with-Callgraph-Analysis)

## Versions and source links

- [Published version](https://doi.org/10.1145/3578245.3584689) - published
- [Public full text](https://research.spec.org/icpe_proceedings/2023/companion/p71.pdf) | [PDF](https://research.spec.org/icpe_proceedings/2023/companion/p71.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3578245.3584689](https://doi.org/10.1145/3578245.3584689)

## Identifiers

[DOI 10.1145/3578245.3584689](https://doi.org/10.1145/3578245.3584689)

## When to cite this paper

Cite this paper when your work uses or compares call-stack-sampled call graphs/flame graphs as structural evidence of JVM warmup versus steady-state execution.

- For call-stack-sampled call graphs/flame graphs as structural evidence of JVM warmup versus steady-state execution.
- For combining Graph2Vec and PELT-derived labels with classifiers for automated steady-state detection.
- For the exact result pattern in which Random Forest reaches 90.4% accuracy/75.0% precision but only 6% recall, demonstrating why recall must be reported.

## Citation

### APA 7

Janecek, M., Patel, S., & Ezzati-Jivan, N. (2023). Uncovering Steady State Executions in Java Microbenchmarking with Call Graph Analysis. ACM/SPEC ICPE Companion. https://doi.org/10.1145/3578245.3584689

### IEEE

M. Janecek, S. Patel, and N. Ezzati-Jivan, "Uncovering Steady State Executions in Java Microbenchmarking with Call Graph Analysis," in ACM/SPEC ICPE Companion, 2023, doi: 10.1145/3578245.3584689

```bibtex
@inproceedings{ezzatiJivan2023uncoveringsteady,
  author = {Madeline Janecek and Sneh Patel and Naser Ezzati-Jivan},
  title = {Uncovering Steady State Executions in Java Microbenchmarking with Call Graph Analysis},
  year = {2023},
  booktitle = {ACM/SPEC ICPE Companion},
  doi = {10.1145/3578245.3584689},
  url = {https://doi.org/10.1145/3578245.3584689}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: ICPE Companion PDF: perf call-stack sampling, Graph2Vec, flame graphs, PELT, 50-of-1,000 labelling protocol, and five classifiers; ICPE Companion PDF: Java binary-search workload, 10,000 executions/10 forks, Ubuntu/kernel/Perf/Log4j environment, and accuracy/precision/recall table; Paper-linked code/results repository recorded as a public resource; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
