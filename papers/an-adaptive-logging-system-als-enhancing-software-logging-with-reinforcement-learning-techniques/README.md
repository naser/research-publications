# An Adaptive Logging System (ALS): Enhancing Software Logging with Reinforcement Learning Techniques

**2024 | ACM/SPEC International Conference on Performance Engineering (ICPE) | conference paper**

**Authors:** Amirmahdi Khosravi Tabrizi, Naser Ezzati-Jivan, Francois Tetreault

**Core contribution:** ALS uses source-code features and reinforcement learning to recommend which Python functions to log and which log levels to use for performance-bug diagnosis.

## Four-part research summary

### 1. Problem and motivation

Logging can provide essential postmortem evidence but adds code, storage, and runtime cost. Existing log-placement systems are tied to fixed objectives and show weak cross-project transfer; resource-constrained environments need adaptable performance-bug logging (pp. 1-3).

### 2. Method and contribution

ALS extracts 12 static Python source features covering loops, synchronization issues, and Django ORM API misuses. Python AST FunctionDef nodes are collected from cloned GitHub repositories; five discrete actions select not-log, Trace, Debug, Info, or Warn. Error/Fatal are excluded because the policy uses static features. A deterministic RL environment uses rewards from -4 to +2; DQN, A2C, and PPO are evaluated through Stable-Baselines/OpenAI Baselines (pp. 3-8).

### 3. Findings and evidence

The dataset contains 17 projects (11 Apache, 6 Django), 4,235 Python files, and 93,484 functions: 56,755 training functions/1,421 files and 36,729 testing functions/2,814 files (p. 7, Table 2). All three methods show positive reward trends by the end of the first of eight episodes; DQN is reported as the most stable in training and cross-project evaluation (pp. 8-9). No accuracy, logging-overhead, or production-quality number is reported.

### 4. Limitations and future directions

**Limitations:** Python-only static features; no dynamic CPU/memory terms; one agent handles both placement and level; function selection does not specify complete log content; project/algorithm coverage and reward design limit generalization. Production/Ciena deployment is future work, not completed evaluation.

**Future work:** Multi-language AST/LLM/Jina features, CPU/memory reward terms, dual-agent placement/level control, integration with LLM/RLHF and logging frameworks, and deployment/evaluation in Ciena's operational context (pp. 9-10).

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [observability](../../topics/observability.md) | [performance-engineering](../../topics/performance-engineering.md) | [machine-learning](../../topics/machine-learning.md) | [trace-reduction](../../topics/trace-reduction.md)

**Keywords:** [adaptive logging](../../keywords/adaptive-logging.md) | [ALS](../../keywords/als.md) | [reinforcement learning](../../keywords/reinforcement-learning.md) | [log placement](../../keywords/log-placement.md) | [log level selection](../../keywords/log-level-selection.md) | [performance bugs](../../keywords/performance-bugs.md) | [Python AST](../../keywords/python-ast.md) | [Stable-Baselines](../../keywords/stable-baselines.md) | [DQN](../../keywords/dqn.md) | [A2C](../../keywords/a2c.md) | [PPO](../../keywords/ppo.md) | [Apache](../../keywords/apache.md) | [Django](../../keywords/django.md) | [cross-project evaluation](../../keywords/cross-project-evaluation.md) | [Ciena](../../keywords/ciena.md) | [source-code features](../../keywords/source-code-features.md)

## Versions and source links

- [Published version](https://doi.org/10.1145/3629526.3645033) - published
- [Public full text](https://research.spec.org/icpe_proceedings/2024/proceedings/p37.pdf) | [PDF](https://research.spec.org/icpe_proceedings/2024/proceedings/p37.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1145/3629526.3645033](https://doi.org/10.1145/3629526.3645033)

## Identifiers

[DOI 10.1145/3629526.3645033](https://doi.org/10.1145/3629526.3645033)

## When to cite this paper

Cite this paper when your work uses or compares an RL formulation in which source-function observations select both whether to log and which verbosity level to use.

- For an RL formulation in which source-function observations select both whether to log and which verbosity level to use.
- For the 12-feature PerformanceBugLoggingObjective covering loops, synchronization, and Django ORM misuse.
- For cross-project reward-curve evaluation of DQN, A2C, and PPO over 17 Apache/Django projects, with DQN's reported stability.
- Do not cite this paper for measured production logging overhead or production deployment; those remain future work.

## Citation

### APA 7

Tabrizi, A. K., Ezzati-Jivan, N., & Tetreault, F. (2024). An Adaptive Logging System (ALS): Enhancing Software Logging with Reinforcement Learning Techniques. ACM/SPEC International Conference on Performance Engineering (ICPE). https://doi.org/10.1145/3629526.3645033

### IEEE

A. K. Tabrizi, N. Ezzati-Jivan, and F. Tetreault, "An Adaptive Logging System (ALS): Enhancing Software Logging with Reinforcement Learning Techniques," in ACM/SPEC International Conference on Performance Engineering (ICPE), 2024, doi: 10.1145/3629526.3645033

```bibtex
@inproceedings{ezzatiJivan2024anadaptive,
  author = {Amirmahdi Khosravi Tabrizi and Naser Ezzati-Jivan and Francois Tetreault},
  title = {An Adaptive Logging System (ALS): Enhancing Software Logging with Reinforcement Learning Techniques},
  year = {2024},
  booktitle = {ACM/SPEC International Conference on Performance Engineering (ICPE)},
  doi = {10.1145/3629526.3645033},
  url = {https://doi.org/10.1145/3629526.3645033}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: ICPE ALS PDF: Python AST, GitHub/PyGithub/git, 12 static features, bug classes, Stable-Baselines, and DQN/A2C/PPO selection; ICPE ALS PDF: 17 Apache/Django projects, 93,484 functions, 4,235 files, eight-episode evaluation, and reward stability findings; ICPE ALS PDF: Python/dynamic-feature/agent-scope limitations and stated future work; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
