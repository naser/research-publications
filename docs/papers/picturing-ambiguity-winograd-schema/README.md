# Picturing Ambiguity: A Visual Twist on the Winograd Schema Challenge

**2024 | ACL 2024 Main Conference | conference paper**

**Authors:** Brendan Park, Madeline Janecek, Naser Ezzati-Jivan, Yifeng Li, Ali Emami

**Core contribution:** The paper introduces WinoVis, a multimodal benchmark and analysis framework for testing pronoun disambiguation in text-to-image models.

## Four-part research summary

### 1. Problem and motivation

Language models can perform well on text-only common-sense reasoning, but it is harder to determine whether multimodal models correctly connect ambiguous language with visual content.

### 2. Method and contribution

WinoVis uses GPT-4 for prompt generation and Diffusion Attentive Attribution Maps for heatmap-based analysis. The evaluation is designed to isolate pronoun disambiguation from unrelated visual-processing difficulties.

### 3. Findings and evidence

Across successive model versions, Stable Diffusion 2.0 reached 56.7% precision on WinoVis, only slightly above random guessing. The error analysis identifies specific weaknesses in multimodal interpretation.

### 4. Limitations and future directions

**Limitations:** The results depend on the benchmark design, model versions, and attribution analysis.

**Future work:** Future work should expand the dataset, test more model families, and validate whether attribution patterns correspond to reliable reasoning.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [multimodal-ai](../../topics/multimodal-ai.md) | [benchmark-datasets](../../topics/benchmark-datasets.md) | [common-sense-reasoning](../../topics/common-sense-reasoning.md) | [machine-learning](../../topics/machine-learning.md)

**Keywords:** [Winograd Schema Challenge](../../keywords/winograd-schema-challenge.md) | [WinoVis](../../keywords/winovis.md) | [text-to-image models](../../keywords/text-to-image-models.md) | [pronoun disambiguation](../../keywords/pronoun-disambiguation.md) | [DAAM](../../keywords/daam.md) | [Stable Diffusion](../../keywords/stable-diffusion.md)

## Versions and source links

- [Published version](https://aclanthology.org/2024.acl-long.22/) - published_public_page
- [Public preprint](https://arxiv.org/abs/2405.16277) | [PDF](https://arxiv.org/pdf/2405.16277) - public_full_text

**Canonical source:** [https://aclanthology.org/2024.acl-long.22/](https://aclanthology.org/2024.acl-long.22/)

## Identifiers

[DOI 10.18653/v1/2024.acl-long.22](https://doi.org/10.18653/v1/2024.acl-long.22) | [arXiv 2405.16277](https://arxiv.org/abs/2405.16277)

## When to cite this paper

Cite this paper when evaluating multimodal pronoun disambiguation in text-to-image models.

- The WinoVis benchmark for visual ambiguity and pronoun resolution.
- Evaluation of text-to-image models on common-sense visual reasoning.
- Analysis of generated images for multimodal disambiguation behavior.

## Citation

### APA 7

Park, B., Janecek, M., Ezzati-Jivan, N., Li, Y., & Emami, A. (2024). Picturing Ambiguity: A Visual Twist on the Winograd Schema Challenge. ACL 2024 Main Conference. https://doi.org/10.18653/v1/2024.acl-long.22

### IEEE

B. Park, M. Janecek, N. Ezzati-Jivan, Y. Li, and A. Emami, "Picturing Ambiguity: A Visual Twist on the Winograd Schema Challenge," in ACL 2024 Main Conference, 2024, doi: 10.18653/v1/2024.acl-long.22

```bibtex
@inproceedings{ezzatiJivan2024picturingambiguity,
  author = {Brendan Park and Madeline Janecek and Naser Ezzati-Jivan and Yifeng Li and Ali Emami},
  title = {Picturing Ambiguity: A Visual Twist on the Winograd Schema Challenge},
  year = {2024},
  booktitle = {ACL 2024 Main Conference},
  doi = {10.18653/v1/2024.acl-long.22},
  url = {https://aclanthology.org/2024.acl-long.22/}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-03
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: ACL Anthology and DOI metadata; official arXiv abstract and PDF page 2405.16277; local PDF hash verified in the working catalog
- Machine-readable record: [paper.json](./paper.json)
