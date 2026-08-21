# Towards a Classification of Log Parsing Errors

**2023 | IEEE International Conference on Program Comprehension (ICPC) | conference paper**

**Authors:** Issam Sedki, Abdelwahab Hamou-Lhadj, Otmane Ait Mohamed, Naser Ezzati-Jivan

**Core contribution:** The paper classifies recurring log-parsing errors and connects them to token and event characteristics that can guide parser design and logging practice.

## Four-part research summary

### 1. Problem and motivation

Log parsers vary substantially across datasets, but recurring error causes lack a common classification that can guide parser design and logging practice (p. 1).

### 2. Method and contribution

Drain, AEL, Spell, and ULP are compared against manual ground truth from four LogHub datasets: OpenStack, Linux, HealthApp, and Apache. Each contributes 2,000 manually parsed events; parser errors are manually inspected and grouped into nine categories. Static-token correctness/order and dynamic-token presence/order define the comparison; repeated instances of the same error are counted once (pp. 2-4).

### 3. Findings and evidence

The study reports 523 errors: Linux 231, OpenStack 151, HealthApp 130, and Apache 11. C1/C2/C3/C7 tokenization-related categories account for 65.51% of errors; regex preprocessing accounts for 28.5% of captured errors. OpenStack C2 ranges from 29.63% to 68.75% across parsers (51.31% average); C6 averages 20.05% versus C2's 20.95%; C7 reaches 67.75% of HealthApp errors (pp. 2-4).

### 4. Limitations and future directions

**Limitations:** Preliminary scope: four datasets, four parsers, and 8,000 manually labelled events. Industrial generalization and system-type effects are untested; parser versions/configurations are unknown.

**Future work:** Larger/cross-system datasets, improved parser algorithms and preprocessing, delimiter-aware/consistent logging practices, and further study of system-type effects (p. 4).

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [observability](../../topics/observability.md) | [trace-analysis](../../topics/trace-analysis.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [performance-analysis](../../topics/performance-analysis.md)

**Keywords:** [log parsing](../../keywords/log-parsing.md) | [parser errors](../../keywords/parser-errors.md) | [Drain](../../keywords/drain.md) | [AEL](../../keywords/ael.md) | [Spell](../../keywords/spell.md) | [ULP](../../keywords/ulp.md) | [LogHub](../../keywords/loghub.md) | tokenization | logging practices | dynamic tokens | static tokens | delimiter-aware logging | parser error taxonomy

## Resources

- [Data](https://doi.org/10.5281/zenodo.7623145)

## Versions and source links

- [Published version](https://doi.org/10.1109/ICPC58990.2023.00023) - published
- [Public full text](https://users.encs.concordia.ca/~abdelw/papers/ICPC23_ParsingErrors.pdf) | [PDF](https://users.encs.concordia.ca/~abdelw/papers/ICPC23_ParsingErrors.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1109/ICPC58990.2023.00023](https://doi.org/10.1109/ICPC58990.2023.00023)

## Identifiers

[DOI 10.1109/ICPC58990.2023.00023](https://doi.org/10.1109/ICPC58990.2023.00023)

## When to cite this paper

Cite this paper when your work uses or compares the nine-category taxonomy of recurring log parsing failures involving token format, demarcation, static/dynamic confusion, and slight structural variation.

- For the nine-category taxonomy of recurring log parsing failures involving token format, demarcation, static/dynamic confusion, and slight structural variation.
- For the four-parser/four-LogHub comparison and its 523 manually examined error instances.
- For evidence that tokenization-related categories dominate the observed errors and that regular-expression preprocessing is a distinct error source.
- For delimiter-aware and more consistent logging as design responses to parser failures.

## Citation

### APA 7

Sedki, I., Hamou-Lhadj, A., Mohamed, O. A., & Ezzati-Jivan, N. (2023). Towards a Classification of Log Parsing Errors. In IEEE International Conference on Program Comprehension (ICPC) (pp. 84-88). https://doi.org/10.1109/ICPC58990.2023.00023

### IEEE

I. Sedki, A. Hamou-Lhadj, O. A. Mohamed, and N. Ezzati-Jivan, "Towards a Classification of Log Parsing Errors," in IEEE International Conference on Program Comprehension (ICPC), pp. 84-88, 2023, doi: 10.1109/ICPC58990.2023.00023

```bibtex
@inproceedings{ezzatiJivan2023towardsa,
  author = {Issam Sedki and Abdelwahab Hamou-Lhadj and Otmane Ait Mohamed and Naser Ezzati-Jivan},
  title = {Towards a Classification of Log Parsing Errors},
  year = {2023},
  booktitle = {IEEE International Conference on Program Comprehension (ICPC)},
  pages = {84-88},
  publisher = {IEEE},
  doi = {10.1109/ICPC58990.2023.00023},
  url = {https://doi.org/10.1109/ICPC58990.2023.00023}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: ICPC log-parsing-errors PDF: four LogHub datasets, four parsers, 8,000 labelled events, nine categories, and error-count method; ICPC log-parsing-errors PDF: 523 errors, 65.51% tokenization-related share, 28.5% regex share, per-category values, and HealthApp/OpenStack examples; Zenodo dataset DOI and author-hosted PDF recorded as public resources; Local full-text evidence was hash-verified during catalog review; verification manifests are not distributed
- Machine-readable record: [paper.json](./paper.json)
