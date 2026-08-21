# New Approach for Automated Categorizing and Finding Similarities in Online Persian News

**2010 | International Symposium on Information Management in a Changing World (IMCW 2010), Communications in Computer and Information Science 96 | conference chapter**

**Authors:** Naser Ezzati Jivan, Mahlagha Fazeli, Khadije Sadat Yousefi

**Core contribution:** The paper combines automated Persian-news categorization with a web system for retrieving similar news items.

## Four-part research summary

### 1. Problem and motivation

Online Persian news requires automatic category assignment and retrieval of related items, but the paper notes that no standard similarity test bench or universally accepted similarity measure was available (p. 61, abstract; pp. 62-63).

### 2. Method and contribution

A crawler collects news; preprocessing removes general words and creates tf*idf-style vectors; an S-V-M categorizer trained with Reuters material assigns general categories. Similarity retrieval uses stored headline/summary/topic/date features and prioritized permutations from all features down to one keyword (pp. 63-65).

### 3. Findings and evidence

The Linux/PHP crawler and similarity finder were manually assessed on 100 news pieces and corresponding results. The authors report 79% precision when permutations of headline, summary, and topic are used (p. 66). No standard benchmark split or independent reproduction was verified.

### 4. Limitations and future directions

**Limitations:** Surface subject/keyword resemblance can miss semantic similarity or match documents that share words without sharing meaning. The corpus protocol, train/test split, and larger benchmark size are unknown; the public copy does not establish them.

**Future work:** Add semantic features representing both keywords and concepts so that conceptually related Persian news can be retrieved even when surface words differ (pp. 66-67).

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [machine-learning](../../topics/machine-learning.md) | [benchmark-datasets](../../topics/benchmark-datasets.md)

**Keywords:** Persian news | text categorization | document similarity | tf-idf | [SVM](../../keywords/svm.md) | Reuters | web crawler | [PHP](../../keywords/php.md) | keyword extraction | semantic similarity

## Versions and source links

- [Published version](https://doi.org/10.1007/978-3-642-16032-5_11) - published
- [Public conference copy](https://bilgiyonetimi.net/by2010/bildiriler/jivan.pdf) | [PDF](https://bilgiyonetimi.net/by2010/bildiriler/jivan.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1007/978-3-642-16032-5_11](https://doi.org/10.1007/978-3-642-16032-5_11)

## Identifiers

[DOI 10.1007/978-3-642-16032-5_11](https://doi.org/10.1007/978-3-642-16032-5_11)

## When to cite this paper

Cite this paper when your work uses or compares persian-news feature extraction using grammar-aware general-word removal and keyword/topic/date features.

- Persian-news feature extraction using grammar-aware general-word removal and keyword/topic/date features.
- The crawler plus tf*idf/S-V-M architecture trained with Reuters categories for automated news classification.
- Prioritized feature-permutation retrieval for related news, including the authors' 79% manual-precision result and its non-standard benchmark boundary.
- The explicit motivation for semantic similarity using concepts in addition to keywords.

## Citation

### APA 7

Jivan, N. E., Fazeli, M., & Yousefi, K. S. (2010). New Approach for Automated Categorizing and Finding Similarities in Online Persian News. In International Symposium on Information Management in a Changing World (IMCW 2010), Communications in Computer and Information Science 96 (pp. 120-128). https://doi.org/10.1007/978-3-642-16032-5_11

### IEEE

N. E. Jivan, M. Fazeli, and K. S. Yousefi, "New Approach for Automated Categorizing and Finding Similarities in Online Persian News," in International Symposium on Information Management in a Changing World (IMCW 2010), Communications in Computer and Information Science 96, pp. 120-128, 2010, doi: 10.1007/978-3-642-16032-5_11

```bibtex
@inproceedings{ezzatiJivan2010newapproach,
  author = {Naser Ezzati Jivan and Mahlagha Fazeli and Khadije Sadat Yousefi},
  title = {New Approach for Automated Categorizing and Finding Similarities in Online Persian News},
  year = {2010},
  booktitle = {International Symposium on Information Management in a Changing World (IMCW 2010), Communications in Computer and Information Science 96},
  pages = {120-128},
  publisher = {Springer Berlin Heidelberg},
  issn = {1865-0929, 1865-0937},
  isbn = {9783642160318, 9783642160325},
  doi = {10.1007/978-3-642-16032-5_11},
  url = {https://doi.org/10.1007/978-3-642-16032-5_11}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Additional full-text evidence was reviewed; working files are not distributed; Springer version-of-record metadata: https://link.springer.com/chapter/10.1007/978-3-642-16032-5_11; Public conference copy: https://bilgiyonetimi.net/by2010/bildiriler/jivan.pdf; Local PDF hash verified: 93BD457A0C3B4C8FA6AC470421D8A0535166BDA5D5E688635FC7E7FED7CAFF64
- Machine-readable record: [paper.json](./paper.json)
