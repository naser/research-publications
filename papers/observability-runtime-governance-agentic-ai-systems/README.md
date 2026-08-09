# Observability and Runtime Governance for Agentic AI Systems

**2026 | Proceedings of the 34th ACM International Conference on the Foundations of Software Engineering (FSE) | conference paper**

**Authors:** Naser Ezzati-Jivan, Maryam Ekhlasi

**Core contribution:** The tutorial presents an end-to-end AgentOps workflow that connects task intent and model decisions to tool calls, memory access, inter-agent communication, external side effects, and runtime-governance decisions.

## Four-part research summary

### 1. Problem and motivation

Agentic systems synthesize stochastic control flow at runtime, so failures may appear as goal drift, unsafe tool use, incomplete work, or false success rather than exceptions. Prompt and response logs alone do not explain how decisions propagate into software and system effects.

### 2. Method and contribution

The proposed workflow has five stages: characterize the task, risks, constraints, tools, memories, dependencies, and permitted side effects; classify reasoning, planning, tool-use, coordination, memory, and governance failures; construct agent traces using spans, events, correlation identifiers, decisions, retries, memory operations, handoffs, and effects; correlate application-, model-, tool-, and system-level evidence; and apply policy checks, cumulative risk tracking, graded containment, supervisory agents, and human escalation.

### 3. Findings and evidence

This is a 90-minute technical tutorial and conceptual workflow rather than an empirical study. Its stated outcomes are a failure vocabulary, an agent-trace model, analysis strategies for loops, divergence, and silent failures, and runtime-governance patterns that support diagnosis and intervention.

### 4. Limitations and future directions

**Limitations:** The paper provides a tutorial architecture and representative forensic examples, but it does not report a controlled evaluation, benchmark, dataset, or quantitative comparison. Effectiveness and overhead therefore remain unmeasured in this publication.

**Future work:** The paper identifies standardization gaps, scalability limits, evidence-sufficiency questions, and the need to improve cross-layer correlation and risk-aware intervention for long-running and partially successful agent workflows.

## Abstract

Agentic AI systems increasingly plan, call tools, coordinate with other agents, and act on external software services. Their failures are difficult to diagnose because control flow is generated at run-time, execution is stochastic, and incorrect behavior often appears as goal drift, unsafe tool use, or false success reports rather than as crashes. This tutorial presents a software engineering workflow for AgentOps that connects high-level intent, model-level decisions, tool calls, memory accesses, and low-level system effects. Participants will learn how to construct agent traces, correlate execution evidence, identify silent and drifting behavior, and apply runtime governance patterns such as policy checks, risk tracking, containment, and human escalation.

## Topics and keywords

**Tags:** [observability](../../topics/observability.md) | [llm-assisted-analysis](../../topics/llm-assisted-analysis.md) | [performance-analysis](../../topics/performance-analysis.md)

**Keywords:** agentic AI | AgentOps | runtime governance | AI observability | software agents | agent tracing | silent failures | goal drift | tool-use failures | cross-layer evidence | policy checks | human escalation | FSE 2026

## Versions and source links

- [Published version](https://doi.org/10.1145/3803437.3804904) - published
- [DBLP record](https://dblp.org/rec/conf/sigsoft/Ezzati-JivanE26) - public_source_record

**Canonical source:** [https://doi.org/10.1145/3803437.3804904](https://doi.org/10.1145/3803437.3804904)

## Identifiers

[DOI 10.1145/3803437.3804904](https://doi.org/10.1145/3803437.3804904)

## When to cite this paper

Cite this paper when designing cross-layer AgentOps observability or runtime governance for tool-using and multi-agent systems.

- Agent traces that connect goals and model decisions to tool calls, memory, handoffs, and external effects.
- Failure classification covering silent, drifting, planning, coordination, memory, tool-use, and governance failures.
- Runtime controls based on policy checks, cumulative risk tracking, graded containment, supervision, and human escalation.

## Citation

### APA 7

Ezzati-Jivan, N., & Ekhlasi, M. (2026). Observability and Runtime Governance for Agentic AI Systems. In Proceedings of the 34th ACM International Conference on the Foundations of Software Engineering (FSE) (pp. 64-65). https://doi.org/10.1145/3803437.3804904

### IEEE

N. Ezzati-Jivan and M. Ekhlasi, "Observability and Runtime Governance for Agentic AI Systems," in Proceedings of the 34th ACM International Conference on the Foundations of Software Engineering (FSE), pp. 64-65, 2026, doi: 10.1145/3803437.3804904

```bibtex
@inproceedings{ezzatiJivan2026observabilityand,
  author = {Naser Ezzati-Jivan and Maryam Ekhlasi},
  title = {Observability and Runtime Governance for Agentic AI Systems},
  year = {2026},
  booktitle = {Proceedings of the 34th ACM International Conference on the Foundations of Software Engineering (FSE)},
  pages = {64-65},
  publisher = {ACM},
  doi = {10.1145/3803437.3804904},
  url = {https://doi.org/10.1145/3803437.3804904}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: Crossref DOI record: https://api.crossref.org/v1/works/10.1145/3803437.3804904; DBLP record: https://dblp.org/rec/conf/sigsoft/Ezzati-JivanE26; Complete two-page paper p. 1: exact abstract, problem motivation, ACM reference format, DOI, and CC BY 4.0 license notice; Complete two-page paper pp. 1-2: five-stage observability and runtime-governance workflow, tutorial format, outcomes, audience, and evaluation boundary; Locally reviewed PDF SHA-256: 4E2FBDB19C69CB9F28682088027DB53141DECAF549884855CACD5D7B7E6E0A03
- Machine-readable record: [paper.json](./paper.json)
