# One Size Does Not Fit All: Architecture-Aware Adaptive Batch Scheduling with DEBA

**2025 | arXiv / CoRR | preprint**

**Authors:** François Belias, Naser Ezzati-Jivan, Foutse Khomh

**Core contribution:** DEBA is an architecture-aware adaptive batch scheduler that uses training-stability signals to decide when and how to change batch size.

## Four-part research summary

### 1. Problem and motivation

Fixed or architecture-agnostic batch-size schedules assume that the same adaptation policy works across model families. The paper studies whether architecture and baseline training stability determine when adaptive batch sizing improves speed without sacrificing generalization.

### 2. Method and contribution

DEBA (Dynamic Efficient Batch Adaptation) computes gradient variance, gradient-norm variation, and loss variation per epoch. A rule-based controller uses 15-epoch sliding-window statistics, architecture-specific thresholds calibrated from a fixed-batch profiling run, a 1.5x growth factor, a 0.8x rollback factor, batch bounds of 16-2048, and a cooldown between decisions. The controller chooses increase, rollback, or hold.

### 3. Findings and evidence

On ResNet-18/50, DenseNet-121, EfficientNet-B0, MobileNet-V3, and ViT-B16 over CIFAR-10/100, fixed-batch comparison shows 36-62% speedups with accuracy gains in 9/12 configuration pairs. DenseNet-121 on CIFAR-100 reports +3.24 percentage points and 62.4% speedup; MobileNet-V3 on CIFAR-10 reports +6.98 points and 50.3% speedup. ViT-B16 gains only 5.1-8.3% speedup and ResNet-50 is seed-sensitive. Signal computation is reported below 1% of wall-clock training time.

### 4. Limitations and future directions

**Limitations:** The evaluation is CIFAR-scale, uses six architectures, one NVIDIA H100, fixed SGD/learning-rate settings, and no distributed training. The empirical stability taxonomy may not transfer to ConvNeXt, CoAtNet, other deep/hybrid families, or other modalities. Thresholds require a 100-epoch fixed-batch profiling run and are not universally transferable.

**Future work:** Extend evaluation to ImageNet, distributed training, NLP, and reinforcement learning; infer thresholds with meta-learning or transfer from architecture features; study joint batch-size/learning-rate adaptation; and formalize links between gradient statistics, smoothness, and adaptive behavior.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [deep-learning-systems](../../topics/deep-learning-systems.md) | [adaptive-scheduling](../../topics/adaptive-scheduling.md) | [performance-optimization](../../topics/performance-optimization.md) | [architecture-aware-methods](../../topics/architecture-aware-methods.md)

**Keywords:** DEBA | adaptive batch size | gradient variance | training speedup | ResNet | DenseNet | EfficientNet | ViT

## Versions and source links

- [Public preprint](https://arxiv.org/abs/2511.03809) | [PDF](https://arxiv.org/pdf/2511.03809) - public_full_text

**Canonical source:** [https://arxiv.org/abs/2511.03809](https://arxiv.org/abs/2511.03809)

## Identifiers

[DOI 10.48550/arXiv.2511.03809](https://doi.org/10.48550/arXiv.2511.03809) | [arXiv 2511.03809](https://arxiv.org/abs/2511.03809)

## When to cite this paper

Cite this paper when your work uses or compares empirical evidence that adaptive batch-size scheduling is architecture-dependent rather than universally transferable.

- empirical evidence that adaptive batch-size scheduling is architecture-dependent rather than universally transferable.
- the DEBA design: multi-signal gradient monitoring, fixed-batch stability profiling, architecture-specific thresholds, and cooldown-controlled increase/rollback decisions.
- the specific ablation result that short cooldowns and stale full-history statistics can cause decision thrashing, accuracy loss, or speedup collapse.

## Citation

### APA 7

Belias, F., Ezzati-Jivan, N., & Khomh, F. (2025). One Size Does Not Fit All: Architecture-Aware Adaptive Batch Scheduling with DEBA. arXiv / CoRR. https://doi.org/10.48550/arXiv.2511.03809

### IEEE

F. Belias, N. Ezzati-Jivan, and F. Khomh, "One Size Does Not Fit All: Architecture-Aware Adaptive Batch Scheduling with DEBA," in arXiv / CoRR, 2025, doi: 10.48550/arXiv.2511.03809

```bibtex
@misc{ezzatiJivan2025onesize,
  author = {François Belias and Naser Ezzati-Jivan and Foutse Khomh},
  title = {One Size Does Not Fit All: Architecture-Aware Adaptive Batch Scheduling with DEBA},
  year = {2025},
  howpublished = {arXiv / CoRR},
  doi = {10.48550/arXiv.2511.03809},
  url = {https://arxiv.org/abs/2511.03809}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: official arXiv abstract and PDF page 2511.03809; DBLP/Scholar record matched by title and authors; local PDF hash verified in the working catalog
- Machine-readable record: [paper.json](./paper.json)
