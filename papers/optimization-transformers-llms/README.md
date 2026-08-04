# Optimization Strategies for Enhancing Resource Efficiency in Transformers & Large Language Models

**2025 | ACM/SPEC International Conference on Performance Engineering (ICPE) | short conference paper**

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

**Limitations:** The comparison is not a complete hardware- and workload-independent characterization of every compression method.

**Future work:** Future work should evaluate larger model families, realistic serving workloads, hardware effects, and standardized energy measurements.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [llm-efficiency](../../topics/llm-efficiency.md) | [energy-efficiency](../../topics/energy-efficiency.md) | [model-compression](../../topics/model-compression.md) | [performance-engineering](../../topics/performance-engineering.md)

**Keywords:** [transformers](../../keywords/transformers.md) | [quantization](../../keywords/quantization.md) | [knowledge distillation](../../keywords/knowledge-distillation.md) | [pruning](../../keywords/pruning.md) | [4-bit quantization](../../keywords/4-bit-quantization.md) | [Minitron](../../keywords/minitron.md) | [sustainable AI](../../keywords/sustainable-ai.md)

## Versions and source links

- [Published version](https://doi.org/10.1145/3676151.3719379) - published
- [Public preprint](https://arxiv.org/abs/2502.00046) | [PDF](https://arxiv.org/pdf/2502.00046) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3676151.3719379](https://doi.org/10.1145/3676151.3719379)

## Identifiers

[DOI 10.1145/3676151.3719379](https://doi.org/10.1145/3676151.3719379) | [arXiv 2502.00046](https://arxiv.org/abs/2502.00046)

## When to cite this paper

Cite this paper when comparing resource-efficiency methods for Transformer and LLM workloads.

- Quantization, knowledge distillation, and pruning as efficiency strategies.
- Accuracy and resource-cost trade-offs for Transformer models.
- Energy and deployment considerations for large-language-model workloads.

## Citation


### Alternative or source-rendered titles

- Optimization Strategies for Enhancing Resource Efficiency in Transformers and Large Language Models
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

- Metadata verified: 2026-08-03
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: DBLP and ACM DOI metadata; official arXiv abstract and PDF page 2502.00046; local PDF hash verified in the working catalog; author-order discrepancy explicitly retained
- Machine-readable record: [paper.json](./paper.json)

> Metadata note: The published-record metadata is used for citation order; the arXiv page presents a different author ordering, so the versions should remain distinguishable.
