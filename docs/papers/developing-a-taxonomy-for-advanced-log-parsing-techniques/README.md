# Developing a Taxonomy for Advanced Log Parsing Techniques

**2025 | IEEE International Conference on Program Comprehension (ICPC) | conference paper**

**Authors:** Issam Sedki, Abdelwahab Hamou-Lhadj, Otmane Ait Mohamed, Naser Ezzati-Jivan

**Core contribution:** The paper introduces a taxonomy of log-event characteristics that explains why different log parsers fail across systems and parser families.

## Four-part research summary

### 1. Problem and motivation

Heterogeneous and evolving logs make template extraction unreliable; existing parser evaluations often emphasize algorithm design without identifying the log-event characteristics that cause errors across datasets and parser families.

### 2. Method and contribution

The study samples 16 LogHub datasets with 2,000 manually parsed events per dataset, yielding 32,000 labeled events. Eight parsers-Drain, IPLoM, AEL, Spell, LenMa, LogMine, SHISO, and ULP-are compared against ground-truth templates. Open coding, regular expressions, named-entity recognition, and manual review identify 30 log-event characteristics (LECs) grouped into Log Event Presentation, Data Types, and Structural Arrangement of Tokens. A chi-square test of independence examines association with parsing errors.

### 3. Findings and evidence

Total parser error counts are Drain 851, IPLoM 882, LenMa 883, AEL 914, ULP 923, Spell 959, SHISO 963, and LogMine 965; IPLoM timed out on Android. Unseparated token sequences and alphanumeric/special-character mixtures are repeatedly difficult. Dataset mismatch totals include Linux 93.81%, OpenStack 83.13%, BGL 73.33%, HDFS 9.85%, and Apache 38.80% in the reported table.

### 4. Limitations and future directions

**Limitations:** The corpus contains 16 public datasets and eight parsers, not industrial/proprietary logs; parser versions, host/runtime configuration, and independent-run protocol are unknown. Open coding and automated LEC detection may miss characteristics in complex datasets.

**Future work:** Develop hybrid parsers that combine domain knowledge with data-driven adaptation, handle difficult LECs dynamically, and promote standardized logging formats.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [observability](../../topics/observability.md) | [trace-analysis](../../topics/trace-analysis.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [performance-analysis](../../topics/performance-analysis.md)

**Keywords:** [log parsing](../../keywords/log-parsing.md) | [log event characteristics](../../keywords/log-event-characteristics.md) | [LEC taxonomy](../../keywords/lec-taxonomy.md) | [LogHub](../../keywords/loghub.md) | [Drain](../../keywords/drain.md) | [IPLoM](../../keywords/iplom.md) | [AEL](../../keywords/ael.md) | [Spell](../../keywords/spell.md) | [LenMa](../../keywords/lenma.md) | [LogMine](../../keywords/logmine.md) | [SHISO](../../keywords/shiso.md) | [ULP](../../keywords/ulp.md) | [open coding](../../keywords/open-coding.md) | [regex](../../keywords/regex.md) | [NER](../../keywords/ner.md) | [chi-square](../../keywords/chi-square.md) | [parser errors](../../keywords/parser-errors.md) | [token structure](../../keywords/token-structure.md)

## Versions and source links

- [Published version](https://doi.org/10.1109/ICPC66645.2025.00061) - published
- [Public full text](https://users.encs.concordia.ca/~abdelw/papers/ICPC2025_LECs.pdf) | [PDF](https://users.encs.concordia.ca/~abdelw/papers/ICPC2025_LECs.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1109/ICPC66645.2025.00061](https://doi.org/10.1109/ICPC66645.2025.00061)

## Identifiers

[DOI 10.1109/ICPC66645.2025.00061](https://doi.org/10.1109/ICPC66645.2025.00061)

## When to cite this paper

Cite this paper when your work uses or compares a 30-characteristic log-event taxonomy organized into presentation, data-type, and structural-token dimensions.

- a 30-characteristic log-event taxonomy organized into presentation, data-type, and structural-token dimensions.
- the eight-parser/16-LogHub benchmark and its exact-template error comparison.
- the finding that unseparated token sequences and alphanumeric/special-character mixtures are cross-parser failure hotspots.
- the Linux/HDFS/Apache mismatch contrast when motivating dataset-dependent parser evaluation.

## Citation

### APA 7

Sedki, I., Hamou-Lhadj, A., Mohamed, O. A., & Ezzati-Jivan, N. (2025). Developing a Taxonomy for Advanced Log Parsing Techniques. IEEE International Conference on Program Comprehension (ICPC). https://doi.org/10.1109/ICPC66645.2025.00061

### IEEE

I. Sedki, A. Hamou-Lhadj, O. A. Mohamed, and N. Ezzati-Jivan, "Developing a Taxonomy for Advanced Log Parsing Techniques," in IEEE International Conference on Program Comprehension (ICPC), 2025, doi: 10.1109/ICPC66645.2025.00061

```bibtex
@inproceedings{ezzatiJivan2025developinga,
  author = {Issam Sedki and Abdelwahab Hamou-Lhadj and Otmane Ait Mohamed and Naser Ezzati-Jivan},
  title = {Developing a Taxonomy for Advanced Log Parsing Techniques},
  year = {2025},
  booktitle = {IEEE International Conference on Program Comprehension (ICPC)},
  doi = {10.1109/ICPC66645.2025.00061},
  url = {https://doi.org/10.1109/ICPC66645.2025.00061}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: ICPC taxonomy PDF: 16 LogHub datasets, 32,000 labelled events, eight parsers, 30 characteristics, and three taxonomy categories; ICPC taxonomy PDF: parser error counts, difficult token patterns, chi-square/effect-size results, and IPv6 exception; ICPC taxonomy PDF: limitations and hybrid/adaptive-parser future directions; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
