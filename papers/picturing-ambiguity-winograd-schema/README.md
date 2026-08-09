# Picturing Ambiguity: A Visual Twist on the Winograd Schema Challenge

**2024 | ACL 2024 Main Conference | conference paper**

**Authors:** Brendan Park, Madeline Janecek, Naser Ezzati-Jivan, Yifeng Li, Ali Emami

**Core contribution:** The paper introduces WinoVis, a multimodal benchmark and analysis framework for testing pronoun disambiguation in text-to-image models.

## Four-part research summary

### 1. Problem and motivation

Text-to-image models can generate visually plausible images without resolving which entity an ambiguous pronoun refers to. Existing WSC-style reasoning evaluations are mainly textual and do not isolate multimodal pronoun disambiguation from image-generation artifacts.

### 2. Method and contribution

WINOVIS contains 500 WSC-adapted scenarios generated through GPT-4 prompting and manually filtered for textual ambiguity, illogical content, visual indistinctiveness, and redundancy. The evaluation uses Stable Diffusion generations, DAAM cross-attention heatmaps, caption filtering, 90th-percentile heatmap thresholding, and IoU-based overlap/decision rules. A single pronoun-to-entity association is accepted when the pronoun heatmap crosses IoU 0.4 with one or the stronger of the two referents.

### 3. Findings and evidence

The paper evaluates Stable Diffusion versions labeled 1.0/1.5/2.0 and XL in Tables 2-3; the setup prose says 1.1/1.5/2.0/XL. SD 2.0 reports 56.7% precision, 24.2% recall, 34.1% F1, and 36.1% certainty, with 55 correct, 42 incorrect, and 172 neither outcomes in the table. SDXL produces mostly unusable heatmap decisions. Error analysis shows much weaker handling of visually distinct entities than disparate entities.

### 4. Limitations and future directions

**Limitations:** Entity separation, semantic entanglement, captioned images, DAAM availability only for open Stable Diffusion models, bias, and limited scenario diversity affect validity. The metrics assess heatmap/association behavior rather than human-level or task-functional multimodal reasoning. GPU/CPU, OS, runtime, and replication details are unknown.

**Future work:** Improve entity separation and entanglement filtering, study bias, expand context and entity diversity, and develop interpretability methods for more diffusion models.

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

Cite this paper when your work uses or compares wINOVIS as a 500-scenario benchmark for pronoun disambiguation in text-to-image generation.

- WINOVIS as a 500-scenario benchmark for pronoun disambiguation in text-to-image generation.
- a DAAM heatmap plus IoU evaluation pipeline that separates entity overlap, caption artifacts, and pronoun-association decisions.
- the SD 2.0 result when documenting that visually convincing diffusion outputs can still show weak multimodal pronoun resolution.
- the distinct-versus-disparate entity error analysis when motivating harder visual common-sense benchmarks.

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

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: ACL Anthology and DOI metadata; official arXiv abstract and PDF page 2405.16277; local PDF hash verified in the working catalog
- Machine-readable record: [paper.json](./paper.json)
