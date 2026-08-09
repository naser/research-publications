# Rethinking Performance Debugging: From Optimization to Collaborative Reasoning

**2026 | SIGSOFT FSE Companion | conference paper**

**Authors:** Mahsa Panahandeh, Naser Ezzati-Jivan, Abdelwahab Hamou-Lhadj

**Core contribution:** The paper reframes performance debugging as collaborative reasoning over multiple evidence-grounded hypotheses rather than optimization for one supposedly best explanation.

## Four-part research summary

### 1. Problem and motivation

Optimization-centric performance debugging collapses diagnosis into one best root cause. That framing is brittle when traces are incomplete, failures interact, and engineers must compare uncertain explanations and decide what to investigate.

### 2. Method and contribution

The paper proposes a reasoning-centered architecture with three separated roles: semantic hypothesis generation, empirical evidence critique, and hypothesis curation. AgentDebug instantiates the roles with Gemini 2.5 Flash, trace-level precision/recall/F1 plus CART over operational features such as RPC-latency percentiles and deviation magnitudes, and a coordinator that selects a diverse Pareto-optimal set of hypotheses as a persistent Reasoning Surface.

### 3. Findings and evidence

In an exploratory study of 200 datasets from Train-Ticket and E-Shopper, with about 2.1 million RPC traces and about 20% degraded traces, AgentDebug averages F1 0.729 versus DeLag's 0.784 and has a median time ratio of 2.34x in its favor. Under DS2-DS4 stress, AgentDebug reaches F1 0.776 versus 0.769 on Train-Ticket and 0.827 versus 0.797 on E-Shopper, outperforming DeLag in four of six stressed configurations. An illustrative surface entry reports precision 0.83, recall 0.42, F1 0.56, and 42% degraded-request coverage.

### 4. Limitations and future directions

**Limitations:** This is a five-page conceptual paper with an early instantiation, not a finalized general-purpose debugging algorithm. It focuses on microservice performance debugging, uses benchmark-derived exploratory data, and does not evaluate human decision quality, uncertainty metrics, explanation diversity, or a principled switch between optimization and reasoning workflows.

**Future work:** Develop evaluation measures for uncertainty exposure, explanation diversity, and decision support; determine when systems should switch between optimization and deeper reasoning; and extend the framework to fault localization, regression debugging, and configuration diagnosis.

## Abstract

The paper argues that microservice performance debugging should preserve and empirically challenge multiple evidence-grounded explanations under uncertainty instead of optimizing for one opaque root-cause answer.

## Topics and keywords

**Tags:** [performance-analysis](../../topics/performance-analysis.md) | [microservices](../../topics/microservices.md) | [llm-assisted-analysis](../../topics/llm-assisted-analysis.md) | [root-cause-analysis](../../topics/root-cause-analysis.md) | [observability](../../topics/observability.md)

**Keywords:** [performance debugging](../../keywords/performance-debugging.md) | [collaborative reasoning](../../keywords/collaborative-reasoning.md) | [AgentDebug](../../keywords/agentdebug.md) | [Reasoning Surface](../../keywords/reasoning-surface.md) | [hypothesis generation](../../keywords/hypothesis-generation.md) | [hypothesis critique](../../keywords/hypothesis-critique.md) | [hypothesis curation](../../keywords/hypothesis-curation.md) | [Gemini 2.5 Flash](../../keywords/gemini-2-5-flash.md) | [CART](../../keywords/cart.md) | [DeLag](../../keywords/delag.md) | [Train-Ticket](../../keywords/train-ticket.md) | [E-Shopper](../../keywords/e-shopper.md) | [fault injection](../../keywords/fault-injection.md) | [RPC latency](../../keywords/rpc-latency.md) | [Pareto-optimal hypotheses](../../keywords/pareto-optimal-hypotheses.md)

## Versions and source links

- [Published version](https://doi.org/10.1145/3803437.3805578) - published
- [Public author manuscript](https://www.researchgate.net/publication/402678924_Rethinking_Performance_Debugging_From_Optimization_to_Collaborative_Reasoning) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3803437.3805578](https://doi.org/10.1145/3803437.3805578)

## Identifiers

[DOI 10.1145/3803437.3805578](https://doi.org/10.1145/3803437.3805578)

## When to cite this paper

Cite this paper when your work uses or compares the Reasoning Surface concept: a persistent, diverse set of empirically challenged performance hypotheses rather than a single root-cause output.

- the Reasoning Surface concept: a persistent, diverse set of empirically challenged performance hypotheses rather than a single root-cause output.
- role-separated debugging that combines LLM hypothesis generation, trace-level evidence critique, and Pareto-based hypothesis curation.
- the AgentDebug-versus-DeLag stress comparison on Train-Ticket and E-Shopper, especially the precision/recall trade-off under DS2-DS4.

## Citation

### APA 7

Panahandeh, M., Ezzati-Jivan, N., & Hamou-Lhadj, A. (2026). Rethinking Performance Debugging: From Optimization to Collaborative Reasoning. SIGSOFT FSE Companion. https://doi.org/10.1145/3803437.3805578

### IEEE

M. Panahandeh, N. Ezzati-Jivan, and A. Hamou-Lhadj, "Rethinking Performance Debugging: From Optimization to Collaborative Reasoning," in SIGSOFT FSE Companion, 2026, doi: 10.1145/3803437.3805578

```bibtex
@inproceedings{ezzatiJivan2026rethinkingperformance,
  author = {Mahsa Panahandeh and Naser Ezzati-Jivan and Abdelwahab Hamou-Lhadj},
  title = {Rethinking Performance Debugging: From Optimization to Collaborative Reasoning},
  year = {2026},
  booktitle = {SIGSOFT FSE Companion},
  doi = {10.1145/3803437.3805578},
  url = {https://doi.org/10.1145/3803437.3805578}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: Public author manuscript: AgentDebug roles, Reasoning Surface, Gemini 2.5 Flash, CART critique, and Pareto-style curation; Public author manuscript: 200 datasets, Train-Ticket/E-Shopper, 2.1 million RPC traces, fault regimes, F1 results, convergence ratio, and API cost; Public author manuscript: optimization-versus-reasoning boundary and future-work discussion; Publication DOI and DBLP identity verified; private five-page ResearchGate author manuscript read and SHA-256 verified as 9fad98132e1dd1c06f885bf6b033c80691bd067a3f7c31f7f27841d9b9d4c308; private evidence note: pdf-evidence/notes/rethinking-performance-debugging-agentdebug.md
- Machine-readable record: [paper.json](./paper.json)
