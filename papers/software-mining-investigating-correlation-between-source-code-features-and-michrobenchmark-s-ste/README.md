# Software Mining - Investigating Correlation between Source Code Features and Michrobenchmark's Steady State

**2023 | Companion of the 2023 ACM/SPEC International Conference on Performance Engineering (ICPE '23 Companion) | conference paper**

**Authors:** Amirmahdi Khosravi Tabrizi, Naser Ezzati-Jivan

**Core contribution:** The study examines whether static source-code features are associated with the steady-state behavior of Java microbenchmarks during JVM warmup.

## Four-part research summary

### 1. Problem and motivation

JVM JIT compilation makes Java microbenchmark results unstable during warmup; the study asks whether static source features are associated with reaching steady state (p. 1).

### 2. Method and contribution

The study uses 586 JMH results from 30 open-source Java projects and 10 forks per benchmark method. srcML and Lizard extract 11 static features; dynamic features include DNNSF, DANCP, and DANITS. Twenty-seven records were excluded after feature-extraction errors. Manual comparisons at benchmark-method/file level are followed by Apriori descriptive association mining (pp. 2-4).

### 3. Findings and evidence

At benchmark-method level, 321 cases are steady, 236 inconsistent, and 2 non-steady. Reported Apriori associations are BMNFC_HIGH -> DNNSF_ZERO with confidence 0.63 and BMLOC_HIGH -> DNNSF_ZERO with confidence 0.61; the paper interprets higher function count/LOC as associated with zero non-steady forks (p. 4).

### 4. Limitations and future directions

**Limitations:** This is exploratory association analysis, not causal evidence. Only two benchmark methods are in the non-steady class, 27 records were removed, and independent replication/generalization across JVMs, hardware, languages, and workloads are not established. The paper does not specify a complete OS/hardware/JVM configuration.

**Future work:** Add source features for system calls, threading, locks, and other function-call types (p. 4).

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [performance-analysis](../../topics/performance-analysis.md) | [performance-engineering](../../topics/performance-engineering.md) | [machine-learning](../../topics/machine-learning.md)

**Keywords:** [Java Microbenchmark Harness](../../keywords/java-microbenchmark-harness.md) | [JMH](../../keywords/jmh.md) | srcML | Lizard | Apriori | Java microbenchmarks | JVM warmup | [steady state](../../keywords/steady-state.md) | [source-code features](../../keywords/source-code-features.md) | BMNFC | BMLOC | DNNSF

## Resources

- [Data](https://github.com/amirmahdiKhosravi/ACM-SPEC-ICPE-2023-DataTrack)

## Versions and source links

- [Published version](https://doi.org/10.1145/3578245.3584695) - published
- [Public conference PDF](https://research.spec.org/icpe_proceedings/2023/companion/p107.pdf) | [PDF](https://research.spec.org/icpe_proceedings/2023/companion/p107.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3578245.3584695](https://doi.org/10.1145/3578245.3584695)

## Identifiers

[DOI 10.1145/3578245.3584695](https://doi.org/10.1145/3578245.3584695)

## When to cite this paper

Cite this paper when your work uses or compares exploratory mining of source-code LOC/function-count features against JMH steady-state indicators.


### Alternative or source-rendered titles

- Software Mining - Investigating Correlation between Source Code Features and Microbenchmark's Steady State
- For exploratory mining of source-code LOC/function-count features against JMH steady-state indicators.
- For the BMNFC/BMLOC to DNNSF_ZERO associations and their reported 0.63/0.61 confidence values, explicitly as non-causal associations.
- For the 30-project/586-result/10-fork corpus and the DNNSF, DANCP, and DANITS feature vocabulary.

## Citation

### APA 7

Tabrizi, A. K., & Ezzati-Jivan, N. (2023). Software Mining - Investigating Correlation between Source Code Features and Michrobenchmark's Steady State. Companion of the 2023 ACM/SPEC International Conference on Performance Engineering (ICPE '23 Companion). https://doi.org/10.1145/3578245.3584695

### IEEE

A. K. Tabrizi and N. Ezzati-Jivan, "Software Mining - Investigating Correlation between Source Code Features and Michrobenchmark's Steady State," in Companion of the 2023 ACM/SPEC International Conference on Performance Engineering (ICPE '23 Companion), 2023, doi: 10.1145/3578245.3584695

```bibtex
@inproceedings{ezzatiJivan2023softwaremining,
  author = {Amirmahdi Khosravi Tabrizi and Naser Ezzati-Jivan},
  title = {Software Mining - Investigating Correlation between Source Code Features and Michrobenchmark's Steady State},
  year = {2023},
  booktitle = {Companion of the 2023 ACM/SPEC International Conference on Performance Engineering (ICPE '23 Companion)},
  doi = {10.1145/3578245.3584695},
  url = {https://doi.org/10.1145/3578245.3584695}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Private full PDF read: pdf-evidence/notes/parallel-batch-02-software-mining-investigating-correlation-between-source-code-features-and-michrobenchmark-s-ste-bd15de158b.md; Software Mining PDF pp. 1-4: JMH, 586 results from 30 Java projects, srcML/Lizard features, steady-state labels, group counts, and Apriori confidences; Local PDF hash verified: D883BDDA4B750A791CF29D206A9FD20C3E75F6BF21276761B563206134FF43DC; Public source: https://research.spec.org/icpe_proceedings/2023/companion/p107.pdf
- Machine-readable record: [paper.json](./paper.json)
