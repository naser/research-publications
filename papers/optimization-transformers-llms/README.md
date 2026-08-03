# Optimization Strategies for Enhancing Resource Efficiency in Transformers & Large Language Models

**2025 Â· ACM/SPEC International Conference on Performance Engineering (ICPE) Â· short conference paper**

**Authors:** Tom Wallace, Beatrice M. Ombuki-Berman, Naser Ezzati-Jivan

**Core contribution:** The paper compares compression and optimization strategies for reducing the resource cost of Transformer and large-language-model workloads while retaining useful accuracy.

## Four-part research summary

### 1. Problem and motivation

Growing model size increases computational and energy demands. Researchers and practitioners need clearer trade-offs among quantization, distillation, pruning, model size, and retained task performance.

### 2. Method and contribution

The study examines quantization, knowledge distillation, and pruning, including hybrid approaches such as NVIDIA's Minitron strategy. It proposes an optimization equation for comparing resource and performance trade-offs.

### 3. Findings and evidence

The reported analysis identifies 4-bit quantization as a strong standalone efficiency option with limited accuracy loss. Hybrid distillation and structured-pruning approaches also show promising size and accuracy trade-offs.

### 4. Limitations and future directions

The comparison is not a complete hardware- and workload-independent characterization of every compression method. Future work should evaluate larger model families, realistic serving workloads, hardware effects, and standardized energy measurements.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [llm-efficiency](../../topics/llm-efficiency.md) Â· [energy-efficiency](../../topics/energy-efficiency.md) Â· [model-compression](../../topics/model-compression.md) Â· [performance-engineering](../../topics/performance-engineering.md)

**Keywords:** [transformers](../../keywords/transformers.md) Â· [quantization](../../keywords/quantization.md) Â· [knowledge distillation](../../keywords/knowledge-distillation.md) Â· [pruning](../../keywords/pruning.md) Â· [4-bit quantization](../../keywords/4-bit-quantization.md) Â· [Minitron](../../keywords/minitron.md) Â· [sustainable AI](../../keywords/sustainable-ai.md)

## Versions and source links

- [Published version](https://doi.org/10.1145/3676151.3719379) â€” published
- [Public preprint](https://arxiv.org/abs/2502.00046) Â· [PDF](https://arxiv.org/pdf/2502.00046) â€” public_full_text

**Primary source:** [https://doi.org/10.1145/3676151.3719379](https://doi.org/10.1145/3676151.3719379)

**Access status:** public_preprint_and_published_record. The ACM DOI is the canonical citation target; the arXiv preprint provides public full text.


### Alternative or source-rendered titles

- Optimization Strategies for Enhancing Resource Efficiency in Transformers and Large Language Models

> Metadata note: The published-record metadata is used for citation order; the arXiv page presents a different author ordering, so the versions should remain distinguishable.

## Citation

```bibtex
@inproceedings{ezzatiJivan2025optimizationstrategies,
  author = {Tom Wallace and Beatrice M. Ombuki-Berman and Naser Ezzati-Jivan},
  title = {Optimization Strategies for Enhancing Resource Efficiency in Transformers {\&} Large Language Models},
  year = {2025},
  booktitle = {ACM/SPEC International Conference on Performance Engineering (ICPE)},
  doi = {10.1145/3676151.3719379},
  url = {https://doi.org/10.1145/3676151.3719379}
}
```

## Record provenance

- Verified: 2026-08-03
- Evidence: DBLP and ACM DOI metadata; official arXiv abstract and PDF page 2502.00046; local PDF hash verified in the working catalog; author-order discrepancy explicitly retained
- Machine-readable record: [paper.json](./paper.json)
