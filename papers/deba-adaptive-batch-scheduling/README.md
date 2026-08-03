# One Size Does Not Fit All: Architecture-Aware Adaptive Batch Scheduling with DEBA

**2025 Â· arXiv / CoRR Â· preprint**

**Authors:** FranÃ§ois Belias, Naser Ezzati-Jivan, Foutse Khomh

**Core contribution:** DEBA is an architecture-aware adaptive batch scheduler that uses training-stability signals to decide when and how to change batch size.

## Four-part research summary

### 1. Problem and motivation

Existing adaptive batch-size methods often assume that one adaptation policy works equally well across neural-network architectures, even though architectures differ in optimization stability and sensitivity.

### 2. Method and contribution

DEBA monitors gradient variance, gradient-norm variation, and loss variation. The study evaluates it across six architectures, two datasets, five random seeds, and ablations of sliding-window statistics and cooldown periods.

### 3. Findings and evidence

The reported gains are architecture-dependent: lightweight and medium-depth models obtain 45â€“62% training speedups with 1â€“7% accuracy improvements, while ResNet-50 and ViT-B16 show weaker or more variable benefits.

### 4. Limitations and future directions

The study focuses on CIFAR-10/CIFAR-100 and six image-classification architectures. Future work should test larger datasets, modern language and vision models, distributed training, and workload-level energy or cost outcomes.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [deep-learning-systems](../../topics/deep-learning-systems.md) Â· [adaptive-scheduling](../../topics/adaptive-scheduling.md) Â· [performance-optimization](../../topics/performance-optimization.md) Â· [architecture-aware-methods](../../topics/architecture-aware-methods.md)

**Keywords:** [DEBA](../../keywords/deba.md) Â· [adaptive batch size](../../keywords/adaptive-batch-size.md) Â· [gradient variance](../../keywords/gradient-variance.md) Â· [training speedup](../../keywords/training-speedup.md) Â· [ResNet](../../keywords/resnet.md) Â· [DenseNet](../../keywords/densenet.md) Â· [EfficientNet](../../keywords/efficientnet.md) Â· [ViT](../../keywords/vit.md)

## Versions and source links

- [Public preprint](https://arxiv.org/abs/2511.03809) Â· [PDF](https://arxiv.org/pdf/2511.03809) â€” public_full_text

**Primary source:** [https://arxiv.org/abs/2511.03809](https://arxiv.org/abs/2511.03809)

**Access status:** public_arxiv_preprint. This record is currently represented as a public arXiv preprint; no separate published DOI was verified in the catalog.


## Citation

```bibtex
@misc{ezzatiJivan2025onesize,
  author = {FranÃ§ois Belias and Naser Ezzati-Jivan and Foutse Khomh},
  title = {One Size Does Not Fit All: Architecture-Aware Adaptive Batch Scheduling with DEBA},
  year = {2025},
  howpublished = {arXiv / CoRR},
  doi = {10.48550/arXiv.2511.03809},
  url = {https://arxiv.org/abs/2511.03809}
}
```

## Record provenance

- Verified: 2026-08-03
- Evidence: official arXiv abstract and PDF page 2511.03809; DBLP/Scholar record matched by title and authors; local PDF hash verified in the working catalog
- Machine-readable record: [paper.json](./paper.json)
