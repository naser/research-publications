# TAAF: A Trace Abstraction and Analysis Framework Synergizing Knowledge Graphs and LLMs

**2026 | arXiv / CoRR; arXiv page reports acceptance to ICSE 2026 | preprint with publication signal**

**Authors:** Alireza Ezaz, Ghazal Khodabandeh, Majid Babaei, Naser Ezzati-Jivan

**Core contribution:** TAAF combines time-indexed knowledge graphs with large language models to turn large execution traces into queryable, actionable explanations.

## Four-part research summary

### 1. Problem and motivation

Kernel and large-application traces are too large, multidimensional, and temporally structured for direct manual inspection or raw LLM ingestion. Existing stateful tools support predefined queries, but flexible questions still require domain-specific scripts and expert knowledge.

### 2. Method and contribution

TAAF implements a three-layer trace-to-answer pipeline: LTTng events are transformed into a time-indexed Trace Compass-style State System; a natural-language query selects a compact temporal knowledge graph with typed entities, weighted relations, and time scope; a schema-conditioned LLM answers from the graph. The pipeline is evaluated with TraceQA-100, a benchmark of expert-authored questions over real kernel traces.

### 3. Findings and evidence

TraceQA-100 contains 100 questions in explanatory, multiple-choice, and true/false formats, split across single- and multi-hop reasoning. Across the core GPT-4.1 nano/GPT-4o/o4-mini grid and 1/10/100-second windows, graph grounding improves weighted accuracy by a reported mean 21.5 percentage points and up to 31.17 points; o4-mini with TAAF reaches 95.5% at 1 second and 90.17% at 100 seconds. Supplying the graph schema adds 8.1 points in the focused GPT-4o test.

### 4. Limitations and future directions

**Limitations:** The benchmark is hand-crafted from SciMark 2.0 traces under Linux and uses a three-level score, author labeling, three samples per configuration, API models, and a raw-State-System baseline only. Long windows, explanatory multi-hop arithmetic, global queries, model drift, and other kernels/workloads remain difficult. The methods section accounts for 5,400 Phase-1 plus 2,100 Phase-2 outputs (7,500), while the conclusion says 7,800; preserve this as an unresolved paper-internal inconsistency.

**Future work:** Broaden question generation and annotation, use finer numeric-tolerance metrics and independent raters, support temporal/production-scale traces, hierarchical or retrieval-based prompting, autonomous-agent integration, and optimize KG construction with partitioning, streaming, batching, and early exit.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [trace-analysis](../../topics/trace-analysis.md) | [knowledge-graphs](../../topics/knowledge-graphs.md) | [llm-assisted-analysis](../../topics/llm-assisted-analysis.md) | [observability](../../topics/observability.md)

**Keywords:** TAAF | TraceQA-100 | time-indexed knowledge graph | natural-language trace queries | multi-hop reasoning | causal reasoning

## Versions and source links

- [Publication DOI listed on arXiv page](https://doi.org/10.1145/3744916.3787832) - publication_signal
- [Public preprint](https://arxiv.org/abs/2601.02632) | [PDF](https://arxiv.org/pdf/2601.02632) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3744916.3787832](https://doi.org/10.1145/3744916.3787832)

## Identifiers

[DOI 10.1145/3744916.3787832](https://doi.org/10.1145/3744916.3787832) | [arXiv 2601.02632](https://arxiv.org/abs/2601.02632)

## When to cite this paper

Cite this paper when your work uses or compares the State System -> query-specific temporal knowledge graph -> LLM architecture for grounded kernel-trace question answering.

- the State System -> query-specific temporal knowledge graph -> LLM architecture for grounded kernel-trace question answering.
- TraceQA-100, including expert-authored temporal, multi-entity, numeric, single-hop, and multi-hop questions over SciMark 2.0 kernel traces.
- the measured benefit of graph grounding, especially the reported +21.5-point mean gain and up-to +31.17-point gain over raw State-System output.
- the schema and temporal-window ablations when discussing how explicit structure and shorter windows affect LLM trace reasoning.

## Citation

### APA 7

Ezaz, A., Khodabandeh, G., Babaei, M., & Ezzati-Jivan, N. (2026). TAAF: A Trace Abstraction and Analysis Framework Synergizing Knowledge Graphs and LLMs. arXiv / CoRR; arXiv page reports acceptance to ICSE 2026. https://doi.org/10.1145/3744916.3787832

### IEEE

A. Ezaz, G. Khodabandeh, M. Babaei, and N. Ezzati-Jivan, "TAAF: A Trace Abstraction and Analysis Framework Synergizing Knowledge Graphs and LLMs," in arXiv / CoRR; arXiv page reports acceptance to ICSE 2026, 2026, doi: 10.1145/3744916.3787832

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

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-08
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: official arXiv abstract, metadata, and PDF page 2601.02632; arXiv page comment containing the ICSE 2026 acceptance and ACM DOI; local PDF hash verified in the working catalog
- Machine-readable record: [paper.json](./paper.json)
