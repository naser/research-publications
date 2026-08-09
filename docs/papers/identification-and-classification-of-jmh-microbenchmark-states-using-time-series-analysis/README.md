# Identification and Classification of JMH Microbenchmark States using Time Series Analysis

**2023 | ACM/SPEC ICPE Companion | conference paper**

**Authors:** Tom Wallace, Beatrice M. Ombuki-Berman, Naser Ezzati-Jivan

**Core contribution:** The paper uses time-series analysis to identify and classify warmup, steady-state, and anomalous states in Java JMH microbenchmarks.

## Four-part research summary

### 1. Problem and motivation

JMH measurements can contain warmup, steady-state, and anomalous phases; default/manual warmup choices do not reliably identify when stable behavior begins (pp. 1-2).

### 2. Method and contribution

Matrix Profile motif/discord analysis is applied to JMH time series with Python Stumpy and compared with PELT change-point detection using Python Ruptures. RQ1 compares Matrix Profile minimum/maximum/mean for 497 steady-state and 235 non-steady-state forks using an unequal-variance two-sample t-test. RQ2 uses mean/standard-deviation anomaly heuristics and treats the first 30 iterations as warmup. RQ3 scores change points falling inside motif/discord windows (pp. 2-4).

### 3. Findings and evidence

RQ1 reports statistically significant differences (p < .05): steady-state benchmarks have lower Matrix Profile minimum, maximum, and mean. Matrix Profile identifies isolated spikes but can miss anomalies dominating most of a series. In the RQ3 table, 305 steady-state cases are split into 123 none/123 potential/59 noticeable correlations; 185 non-steady cases are split into 44/93/48 (pp. 3-4).

### 4. Limitations and future directions

**Limitations:** RQ2 is explicitly qualitative; the paper warns of Matrix Profile blind spots and possible errors/inconsistencies in the Python translation of the reference steady-state detector. JVM version, hardware, and OS details for the benchmark corpus: unknown.

**Future work:** Compare window sizes, classification functions, and larger numbers of motifs/discords; compare with industry-standard approaches (pp. 3-4).

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [performance-analysis](../../topics/performance-analysis.md) | [performance-engineering](../../topics/performance-engineering.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [machine-learning](../../topics/machine-learning.md)

**Keywords:** [Java Microbenchmark Harness](../../keywords/java-microbenchmark-harness.md) | [JMH](../../keywords/jmh.md) | [benchmark states](../../keywords/benchmark-states.md) | [steady state](../../keywords/steady-state.md) | [warmup](../../keywords/warmup.md) | [Matrix Profile](../../keywords/matrix-profile.md) | [motifs](../../keywords/motifs.md) | [discords](../../keywords/discords.md) | [PELT](../../keywords/pelt.md) | [change points](../../keywords/change-points.md) | [Stumpy](../../keywords/stumpy.md) | [Ruptures](../../keywords/ruptures.md) | [time-series analysis](../../keywords/time-series-analysis.md)

## Resources

- [Code](https://github.com/Tom-Wallace/patternReader)

## Versions and source links

- [Published version](https://doi.org/10.1145/3578245.3584694) - published
- [Public full text](https://research.spec.org/icpe_proceedings/2023/companion/p101.pdf) | [PDF](https://research.spec.org/icpe_proceedings/2023/companion/p101.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3578245.3584694](https://doi.org/10.1145/3578245.3584694)

## Identifiers

[DOI 10.1145/3578245.3584694](https://doi.org/10.1145/3578245.3584694)

## When to cite this paper

Cite this paper when your work uses or compares matrix Profile motifs/discords as a time-series method for identifying JMH steady-state structure and isolated anomalies.

- For Matrix Profile motifs/discords as a time-series method for identifying JMH steady-state structure and isolated anomalies.
- For a direct empirical comparison between Matrix Profile statistics and PELT change points on steady versus non-steady JMH forks.
- For the reported caution that Matrix Profile can miss sustained anomalies and that the RQ2 evaluation is qualitative.

## Citation

### APA 7

Wallace, T., Ombuki-Berman, B. M., & Ezzati-Jivan, N. (2023). Identification and Classification of JMH Microbenchmark States using Time Series Analysis. ACM/SPEC ICPE Companion. https://doi.org/10.1145/3578245.3584694

### IEEE

T. Wallace, B. M. Ombuki-Berman, and N. Ezzati-Jivan, "Identification and Classification of JMH Microbenchmark States using Time Series Analysis," in ACM/SPEC ICPE Companion, 2023, doi: 10.1145/3578245.3584694

```bibtex
@inproceedings{ezzatiJivan2023identificationand,
  author = {Tom Wallace and Beatrice M. Ombuki-Berman and Naser Ezzati-Jivan},
  title = {Identification and Classification of JMH Microbenchmark States using Time Series Analysis},
  year = {2023},
  booktitle = {ACM/SPEC ICPE Companion},
  doi = {10.1145/3578245.3584694},
  url = {https://doi.org/10.1145/3578245.3584694}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: ICPE Companion PDF: Matrix Profile, motifs/discords, PELT change points, Stumpy, Ruptures, and 30-iteration warmup protocol; ICPE Companion PDF: JMH/Traini benchmark corpus, state-identification workflow, anomaly rule, and reported qualitative conclusions; Author code/data repository linked by the paper; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
