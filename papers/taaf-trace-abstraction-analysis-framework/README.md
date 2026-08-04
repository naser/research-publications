# TAAF: A Trace Abstraction and Analysis Framework Synergizing Knowledge Graphs and LLMs

**2026 | arXiv / CoRR; arXiv page reports acceptance to ICSE 2026 | preprint with publication signal**

**Authors:** Alireza Ezaz, Ghazal Khodabandeh, Majid Babaei, Naser Ezzati-Jivan

**Core contribution:** TAAF combines time-indexed knowledge graphs with large language models to turn large execution traces into queryable, actionable explanations.

## Four-part research summary

### 1. Problem and motivation

Kernel and application traces can be massive, while existing tools depend on predefined analyses or custom scripts. This makes ad hoc questions slow and error-prone for analysts without deep system expertise.

### 2. Method and contribution

TAAF builds a time-indexed knowledge graph from trace events and extracts query-specific subgraphs. An LLM interprets those subgraphs to answer natural-language questions. The paper introduces the TraceQA-100 benchmark grounded in real kernel traces.

### 3. Findings and evidence

Across three LLMs and multiple temporal settings, the reported results improve answer accuracy by up to 31.2%, especially for multi-hop and causal questions. The analysis also documents cases where graph grounding remains insufficient.

### 4. Limitations and future directions

**Limitations:** The approach depends on trace representation quality, graph construction choices, LLM reliability, and benchmark coverage.

**Future work:** Future work should evaluate more systems, cost and latency, robustness to incomplete traces, and safe integration into operational diagnosis.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [trace-analysis](../../topics/trace-analysis.md) | [knowledge-graphs](../../topics/knowledge-graphs.md) | [llm-assisted-analysis](../../topics/llm-assisted-analysis.md) | [observability](../../topics/observability.md)

**Keywords:** [TAAF](../../keywords/taaf.md) | [TraceQA-100](../../keywords/traceqa-100.md) | [time-indexed knowledge graph](../../keywords/time-indexed-knowledge-graph.md) | [natural-language trace queries](../../keywords/natural-language-trace-queries.md) | [multi-hop reasoning](../../keywords/multi-hop-reasoning.md) | [causal reasoning](../../keywords/causal-reasoning.md)

## Versions and source links

- [Publication DOI listed on arXiv page](https://doi.org/10.1145/3744916.3787832) - publication_signal
- [Public preprint](https://arxiv.org/abs/2601.02632) | [PDF](https://arxiv.org/pdf/2601.02632) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3744916.3787832](https://doi.org/10.1145/3744916.3787832)

## Identifiers

[DOI 10.1145/3744916.3787832](https://doi.org/10.1145/3744916.3787832) | [arXiv 2601.02632](https://arxiv.org/abs/2601.02632)

## When to cite this paper

Cite this paper when combining trace abstraction, knowledge graphs, and LLM-supported analysis.

- Time-indexed knowledge graphs for representing execution traces.
- Natural-language trace queries and multi-hop reasoning.
- LLM-assisted observability and explanation of large trace datasets.

## Citation

```bibtex
@misc{ezzatiJivan2026taafa,
  author = {Alireza Ezaz and Ghazal Khodabandeh and Majid Babaei and Naser Ezzati-Jivan},
  title = {TAAF: A Trace Abstraction and Analysis Framework Synergizing Knowledge Graphs and LLMs},
  year = {2026},
  howpublished = {arXiv / CoRR; arXiv page reports acceptance to ICSE 2026},
  doi = {10.1145/3744916.3787832},
  url = {https://doi.org/10.1145/3744916.3787832}
}
```

## Record provenance

- Metadata verified: 2026-08-03
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: official arXiv abstract, metadata, and PDF page 2601.02632; arXiv page comment containing the ICSE 2026 acceptance and ACM DOI; local PDF hash verified in the working catalog
- Machine-readable record: [paper.json](./paper.json)
