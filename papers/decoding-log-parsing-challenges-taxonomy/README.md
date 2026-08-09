# Decoding Log Parsing Challenges: A Comprehensive Taxonomy for Actionable Solutions

**2024 | 2024 ACM/IEEE International Conference on Software Engineering: Companion Proceedings (ICSE Companion) | poster paper**

**Authors:** Issam Sedki, Abdelwahab Hamou-Lhadj, Otmane Ait-Mohamed, Naser Ezzati-Jivan, Mohammed A. Shehab

**Core contribution:** The paper derives a 30-item taxonomy of log event characteristics that induce parsing errors and quantifies the characteristics with the largest impact across eight parsers.

## Four-part research summary

### 1. Problem and motivation

Log parsers must separate static template text from dynamic values across heterogeneous formats, yet prior work concentrates on parser algorithms more than on the data characteristics that repeatedly cause parsing errors.

### 2. Method and contribution

The study uses 16 heterogeneous Loghub datasets, each with 2,000 manually parsed events and templates as ground truth, and runs Drain, IPLoM, AEL, Spell, Lenma, LogMine, SHISO, and ULP with their published configurations. The authors open-code an initial sample of 100 unique events per dataset, iteratively reconcile codes and categories, and then extend detection to all events with regular expressions and named-entity recognition.

### 3. Findings and evidence

The analysis identifies 30 log event characteristics in three groups: 19 data-type characteristics, six structural patterns, and five log-message-composition characteristics. Four characteristics account on average for more than half of observed parsing errors: unseparated token sequences contribute about 19-20% across parsers, alphanumeric-plus-special-character tokens about 11-13%, colon-delimited key-value pairs 10.63-11.42%, and decimal values 7.43-8.55%.

### 4. Limitations and future directions

**Limitations:** This is a preliminary two-page study. The initial qualitative coding uses 100 unique events per dataset, the automated extension depends on regular expressions and named-entity recognition, parser configurations follow prior publications, and detailed per-dataset results are omitted because of space limits.

**Future work:** Use the taxonomy to design parsers that adapt to heterogeneous log structures and to develop empirically grounded logging guidelines and best practices; validate the taxonomy on additional datasets and parser families.

## Abstract

Logging is a common practice in software engineering that is used by developers to understand the runtime aspects of a system. Log files, however, tend to vary in their structures, making it challenging to analyze their content. In this paper, we present a preliminary taxonomy of log event characteristics that commonly lead to log parsing errors. We achieve this through the analysis of 16 log datasets using eight different parsing tools. We believe that this taxonomy can be used to guide the design of better log parsing tools that can adapt to various log file structures. It can also pave the way to the development of logging guidelines and best practices.

## Topics and keywords

**Tags:** [observability](../../topics/observability.md) | [machine-learning](../../topics/machine-learning.md) | [trace-analysis](../../topics/trace-analysis.md) | [benchmark-datasets](../../topics/benchmark-datasets.md)

**Keywords:** [log parsing](../../keywords/log-parsing.md) | [log event characteristics](../../keywords/log-event-characteristics.md) | [LEC taxonomy](../../keywords/lec-taxonomy.md) | [LogHub](../../keywords/loghub.md) | [open coding](../../keywords/open-coding.md) | [Drain](../../keywords/drain.md) | [IPLoM](../../keywords/iplom.md) | [AEL](../../keywords/ael.md) | [Spell](../../keywords/spell.md) | [LenMa](../../keywords/lenma.md) | [LogMine](../../keywords/logmine.md) | [SHISO](../../keywords/shiso.md) | [ULP](../../keywords/ulp.md) | log templates | parsing errors | ICSE 2024

## Versions and source links

- [Published version](https://doi.org/10.1145/3639478.3643523) - published
- [Free-access ACM PDF](https://dl.acm.org/doi/pdf/10.1145/3639478.3643523?download=true) | [PDF](https://dl.acm.org/doi/pdf/10.1145/3639478.3643523?download=true) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3639478.3643523](https://doi.org/10.1145/3639478.3643523)

## Identifiers

[DOI 10.1145/3639478.3643523](https://doi.org/10.1145/3639478.3643523)

## When to cite this paper

Cite this paper when analyzing which log-event structures systematically cause errors across automated log parsers.

- A 30-item taxonomy derived from 16 Loghub datasets and eight log parsers.
- Open coding plus regex and named-entity-recognition expansion for identifying error-inducing log characteristics.
- Cross-parser impact estimates for unseparated tokens, mixed alphanumeric/special-character tokens, colon-delimited key-value pairs, and decimals.

## Citation

### APA 7

Sedki, I., Hamou-Lhadj, A., Ait-Mohamed, O., Ezzati-Jivan, N., & Shehab, M. A. (2024). Decoding Log Parsing Challenges: A Comprehensive Taxonomy for Actionable Solutions. In 2024 ACM/IEEE International Conference on Software Engineering: Companion Proceedings (ICSE Companion) (pp. 392-393). https://doi.org/10.1145/3639478.3643523

### IEEE

I. Sedki, A. Hamou-Lhadj, O. Ait-Mohamed, N. Ezzati-Jivan, and M. A. Shehab, "Decoding Log Parsing Challenges: A Comprehensive Taxonomy for Actionable Solutions," in 2024 ACM/IEEE International Conference on Software Engineering: Companion Proceedings (ICSE Companion), pp. 392-393, 2024, doi: 10.1145/3639478.3643523

```bibtex
@inproceedings{ezzatiJivan2024decodinglog,
  author = {Issam Sedki and Abdelwahab Hamou-Lhadj and Otmane Ait-Mohamed and Naser Ezzati-Jivan and Mohammed A. Shehab},
  title = {Decoding Log Parsing Challenges: A Comprehensive Taxonomy for Actionable Solutions},
  year = {2024},
  booktitle = {2024 ACM/IEEE International Conference on Software Engineering: Companion Proceedings (ICSE Companion)},
  pages = {392-393},
  publisher = {ACM},
  doi = {10.1145/3639478.3643523},
  url = {https://doi.org/10.1145/3639478.3643523}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: ACM free-access eReader, pp. 392-393: complete paper, abstract, approach, taxonomy tables, results, limitations, and conclusion; ACM page verified 2026-08-09: free access, DOI 10.1145/3639478.3643523, pp. 392-393, published 23 May 2024; Official ICSE poster page: https://conf.researchr.org/details/icse-2024/icse-2024-posters/68/Decoding-Log-Parsing-Challenges-A-Comprehensive-Taxonomy-for-Actionable-Solutions; DOI: https://doi.org/10.1145/3639478.3643523; Private batch report: reports/parallel-batch-02.md
- Machine-readable record: [paper.json](./paper.json)
