# Optimization Strategies for Enhancing Resource Efficiency in Transformers & Large Language Models

**2025 | ACM/SPEC International Conference on Performance Engineering (ICPE) | short conference paper**

**Authors:** Tom Wallace, Beatrice M. Ombuki-Berman, Naser Ezzati-Jivan

**Core contribution:** The paper compares compression and optimization strategies for reducing the resource cost of Transformer and large-language-model workloads while retaining useful accuracy.

## Four-part research summary

### 1. Problem and motivation

Transformer and LLM size increases raise computation, energy, and memory costs. The paper compares compression methods under a common objective so that energy savings and runtime reductions can be weighed against perplexity and task-performance loss.

### 2. Method and contribution

The study tests 8/4-bit quantization, knowledge distillation, attention-head pruning at 90% and 80% thresholds, SparseGPT-style magnitude/structured pruning, and hybrid models including MiniLLM, NVIDIA Minitron, and ShearedLlama. It introduces opt = P_c^1.5 (alpha T_c + beta E_c), with adjustable time and energy weights, and reports standalone and hybrid evaluations on GPT-2/OPT/LLaMA-family models.

### 3. Findings and evidence

On GPT-2 125M, 4-bit quantization increases perplexity 3.79%, runtime 4.86%, and reduces energy 50.21%; 8-bit reduces energy 56.28% but increases runtime 203.78%. On GPT-2 Large, 8-bit reduces energy 69.17% with a -0.04% perplexity change but increases runtime 83.59%. The paper reports that 4-bit quantization plus distillation and Minitron-style hybrids provide the most favorable energy/performance trade-offs, while attention-head pruning often loses too much perplexity.

### 4. Limitations and future directions

**Limitations:** The study uses one local machine and does not report OS, kernel, CUDA, Python, library, or model-checkpoint versions. GPU-compatible and CPU-only methods use different hardware paths; pruning is repeated only five times versus 30 for other model/dataset pairs. The evaluation does not establish production-scale training cost or broad generalization beyond the listed models, datasets, and benchmarks.

**Future work:** Refine the objective with training energy and more detailed cost terms; evaluate more architectures and benchmarks; investigate retraining to recover perplexity after compression; and improve quantization implementations whose runtime cost can dominate the energy benefit.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [llm-efficiency](../../topics/llm-efficiency.md) | [energy-efficiency](../../topics/energy-efficiency.md) | [model-compression](../../topics/model-compression.md) | [performance-engineering](../../topics/performance-engineering.md)

**Keywords:** transformers | quantization | knowledge distillation | pruning | 4-bit quantization | Minitron | sustainable AI

## Versions and source links

- [Published version](https://doi.org/10.1145/3676151.3719379) - published
- [Public preprint](https://arxiv.org/abs/2502.00046) | [PDF](https://arxiv.org/pdf/2502.00046) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3676151.3719379](https://doi.org/10.1145/3676151.3719379)

## Identifiers

[DOI 10.1145/3676151.3719379](https://doi.org/10.1145/3676151.3719379) | [arXiv 2502.00046](https://arxiv.org/abs/2502.00046)

## When to cite this paper

Cite this paper when your work uses or compares a concrete energy/runtime/perplexity comparison of 4-bit and 8-bit quantization on GPT-2 model sizes.

- a concrete energy/runtime/perplexity comparison of 4-bit and 8-bit quantization on GPT-2 model sizes.
- the adjustable objective that makes energy-versus-runtime priorities explicit rather than reporting a single compression score.
- the empirical contrast between standalone compression, knowledge distillation, and Minitron-style pruning-plus-distillation hybrids.

## Citation


### Alternative or source-rendered titles

- Optimization Strategies for Enhancing Resource Efficiency in Transformers and Large Language Models
### APA 7

Wallace, T., Ombuki-Berman, B. M., & Ezzati-Jivan, N. (2025). Optimization Strategies for Enhancing Resource Efficiency in Transformers & Large Language Models. In ACM/SPEC International Conference on Performance Engineering (ICPE) (pp. 105-112). https://doi.org/10.1145/3676151.3719379

### IEEE

T. Wallace, B. M. Ombuki-Berman, and N. Ezzati-Jivan, "Optimization Strategies for Enhancing Resource Efficiency in Transformers & Large Language Models," in ACM/SPEC International Conference on Performance Engineering (ICPE), pp. 105-112, 2025, doi: 10.1145/3676151.3719379

```bibtex
@inproceedings{ezzatiJivan2025optimizationstrategies,
  author = {Tom Wallace and Beatrice M. Ombuki-Berman and Naser Ezzati-Jivan},
  title = {Optimization Strategies for Enhancing Resource Efficiency in Transformers {\&} Large Language Models},
  year = {2025},
  booktitle = {ACM/SPEC International Conference on Performance Engineering (ICPE)},
  pages = {105-112},
  publisher = {ACM},
  doi = {10.1145/3676151.3719379},
  url = {https://doi.org/10.1145/3676151.3719379}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: DBLP and ACM DOI metadata; official arXiv abstract and PDF page 2502.00046; local PDF hash verified in the working catalog; author-order discrepancy explicitly retained
- Machine-readable record: [paper.json](./paper.json)

> Metadata note: The published-record metadata is used for citation order; the arXiv page presents a different author ordering, so the versions should remain distinguishable.
