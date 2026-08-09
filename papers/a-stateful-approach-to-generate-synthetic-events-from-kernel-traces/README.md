# A Stateful Approach to Generate Synthetic Events from Kernel Traces

**2012 | Advances in Software Engineering | journal article**

**Authors:** Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper introduces a stateful trace-abstraction method that converts low-level kernel events into semantic and synthetic events using modeled resource state and finite-state patterns.

## Four-part research summary

### 1. Problem and motivation

Low-level LTTng/kernel events are numerous, platform-specific, and difficult to interpret for multi-resource, temporal behavior; stateless pattern matching repeatedly reconstructs state (pp. 1-4).

### 2. Method and contribution

A Java/Linux prototype maps raw tracer events to environment-independent semantic events, stores current and historical resource values in a tree/interval-backed modeled-state database, and applies XML finite-state patterns to events, state changes, or both. Patterns generate multi-level synthetic events and alarms, including file, socket, process, system-load, fork-bomb, SYN-flood, and port-scan patterns (pp. 3-8).

### 3. Findings and evidence

With Linux kernel 2.6.38.6 and LTTng, traces from 25 MB to 10,000 MB are reduced across abstraction levels. The largest trace has 621,132,167 raw, 159,023,500 first-level, and 2,247,225 second-level events; first-level analysis time is 4,748 ms at 25 MB and 1,105,124 ms at 10,000 MB (pp. 8-12). A 3,622-event wget example yields fewer than 10 synthetic events (p. 8).

### 4. Limitations and future directions

**Limitations:** State transitions cannot express behavior not representable as transitions; cross-process/resource dependency and critical-path analysis are outside the pattern model. Missing tracer state changes can limit correctness, and the prototype has incomplete coverage and hardcoded XML transition actions (pp. 8, 10-12).

**Future work:** Extend memory and interprocess-communication patterns, complete the host-based intrusion-detection rule base, and develop a more declarative/programming-like language for mappings, state variables, transitions, conditions, and outputs (p. 12, conclusion).

## Abstract

The paper presents a stateful approach that maps low-level LTTng events to semantic events and uses modeled resource state and finite-state patterns to generate synthetic events and alarms.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [trace-abstraction](../../topics/trace-abstraction.md) | [trace-analysis](../../topics/trace-analysis.md) | [performance-analysis](../../topics/performance-analysis.md)

**Keywords:** stateful trace abstraction | [synthetic events](../../keywords/synthetic-events.md) | semantic events | modeled state | [finite-state machine](../../keywords/finite-state-machine.md) | [LTTng](../../keywords/lttng.md) | [Linux kernel 2.6.38.6](../../keywords/linux-kernel-2-6-38-6.md) | XML pattern library | partial trace abstraction | fork bomb | [SYN flood](../../keywords/syn-flood.md) | port scanning

## Versions and source links

- [Published version](https://doi.org/10.1155/2012/140368) - published
- [Public full text](https://publications.polymtl.ca/4861/1/2012_Ezzati-Jivan_Stateful_approach_generate_synthetic_events.pdf) | [PDF](https://publications.polymtl.ca/4861/1/2012_Ezzati-Jivan_Stateful_approach_generate_synthetic_events.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1155/2012/140368](https://doi.org/10.1155/2012/140368)

## Identifiers

[DOI 10.1155/2012/140368](https://doi.org/10.1155/2012/140368)

## When to cite this paper

Cite this paper when your work uses or compares stateful raw-to-semantic trace abstraction that reuses modeled resource history rather than recomputing state in each pattern.

- Stateful raw-to-semantic trace abstraction that reuses modeled resource history rather than recomputing state in each pattern.
- XML finite-state pattern libraries for multi-level synthetic event generation from LTTng kernel events.
- The 25 MB-10 GB event-reduction and execution-time study, including the 621M->159M->2.25M largest-trace counts.
- Pattern-based examples for system-load, fork-bomb, SYN-flood, or port-scan detection.

## Citation

### APA 7

Ezzati-Jivan, N., & Dagenais, M. R. (2012). A Stateful Approach to Generate Synthetic Events from Kernel Traces. Advances in Software Engineering, 2012, 1-12. https://doi.org/10.1155/2012/140368

### IEEE

N. Ezzati-Jivan and M. R. Dagenais, "A Stateful Approach to Generate Synthetic Events from Kernel Traces," Advances in Software Engineering, vol. 2012, pp. 1-12, 2012, doi: 10.1155/2012/140368

```bibtex
@article{ezzatiJivan2012astateful,
  author = {Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {A Stateful Approach to Generate Synthetic Events from Kernel Traces},
  year = {2012},
  journal = {Advances in Software Engineering},
  volume = {2012},
  pages = {1-12},
  publisher = {Hindawi Limited},
  issn = {1687-8655, 1687-8663},
  doi = {10.1155/2012/140368},
  url = {https://doi.org/10.1155/2012/140368}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: A Stateful Approach PDF: LTTng, semantic-event mapping, modeled state, finite-state patterns, and Java prototype; A Stateful Approach PDF: 25 MB-10,000 MB traces, 621,132,167/159,023,500/2,247,225 event counts, and reported analysis times; A Stateful Approach PDF: limitations, missing state changes, pattern-library boundary, and future work; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
