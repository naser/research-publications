# SynthLogAI: Generative AI for Synthetic Linux Log Generation and Evaluation

**2025 | 2025 IEEE International Conference on Collaborative Advances in Software and COmputiNg (CASCON) | conference paper**

**Authors:** Hridoy Rahman, Naser Ezzati-Jivan, Blessing Ogbuokiri

**Core contribution:** SynthLogAI benchmarks generative models for producing synthetic Linux kernel logs from LTTng traces, comparing fidelity, utility, and privacy trade-offs across model families.

## Four-part research summary

### 1. Problem and motivation

System-log data can be difficult to share because of privacy and operational sensitivity, yet reproducible testing and training require realistic synthetic logs with preserved structure and useful event behavior.

### 2. Method and contribution

The public summary describes CTGAN, LSTM, and GPT-2 models trained on LTTng traces, alongside prompt-based GPT-3.5 Turbo, GPT-4.1 Mini, and o4 Mini systems. Evaluation uses event sets of 1K, 10K, and 100K records and compares fidelity, utility, and privacy.

### 3. Findings and evidence

The public summary reports that CTGAN offers the best balance of fidelity and utility, while LLMs provide stronger privacy but exhibit numeric drift and structural inconsistencies. The full paper is needed for exact metrics, preprocessing, baselines, and statistical testing.

### 4. Limitations and future directions

**Limitations:** The publisher PDF was not obtained; the available evidence is a public abstract mirror and author presentation summary. Model prompts, trace schema, evaluation metrics, and generalization across kernels/workloads remain unverified.

**Future work:** Obtain the author or accepted manuscript and verify the benchmark protocol, additional trace distributions, privacy tests, and downstream log-analysis utility.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [machine-learning](../../topics/machine-learning.md) | [observability](../../topics/observability.md) | [anomaly-detection](../../topics/anomaly-detection.md) | [system-tracing](../../topics/system-tracing.md)

**Keywords:** synthetic Linux logs | generative AI | log generation | log evaluation | [CASCON 2025](../../keywords/cascon-2025.md)

## Versions and source links

- [Published version](https://doi.org/10.1109/CASCON66301.2025.00032) - published
- [IEEE record](https://ieeexplore.ieee.org/document/11344303/) - public_source_record

**Canonical source:** [https://doi.org/10.1109/CASCON66301.2025.00032](https://doi.org/10.1109/CASCON66301.2025.00032)

## Identifiers

[DOI 10.1109/CASCON66301.2025.00032](https://doi.org/10.1109/CASCON66301.2025.00032)

## When to cite this paper

Cite this paper when benchmarking generative models for privacy-aware synthetic Linux or LTTng log generation.

- Comparison of CTGAN, LSTM, GPT-2, and prompt-based LLMs for synthetic kernel logs.
- Fidelity, utility, and privacy as separate evaluation dimensions.
- The 1K/10K/100K event-scale comparison and the reported CTGAN-versus-LLM trade-off.

## Citation

### APA 7

Rahman, H., Ezzati-Jivan, N., & Ogbuokiri, B. (2025). SynthLogAI: Generative AI for Synthetic Linux Log Generation and Evaluation. In 2025 IEEE International Conference on Collaborative Advances in Software and COmputiNg (CASCON) (pp. 102-107). https://doi.org/10.1109/CASCON66301.2025.00032

### IEEE

H. Rahman, N. Ezzati-Jivan, and B. Ogbuokiri, "SynthLogAI: Generative AI for Synthetic Linux Log Generation and Evaluation," in 2025 IEEE International Conference on Collaborative Advances in Software and COmputiNg (CASCON), pp. 102-107, 2025, doi: 10.1109/CASCON66301.2025.00032

```bibtex
@inproceedings{ezzatiJivan2025synthlogaigenerative,
  author = {Hridoy Rahman and Naser Ezzati-Jivan and Blessing Ogbuokiri},
  title = {SynthLogAI: Generative AI for Synthetic Linux Log Generation and Evaluation},
  year = {2025},
  booktitle = {2025 IEEE International Conference on Collaborative Advances in Software and COmputiNg (CASCON)},
  pages = {102-107},
  publisher = {IEEE},
  doi = {10.1109/CASCON66301.2025.00032},
  url = {https://doi.org/10.1109/CASCON66301.2025.00032}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-21
- Summary status: metadata/abstract-grounded catalog review; full-text review and author approval pending
- Metadata sources: IEEE record: https://ieeexplore.ieee.org/document/11344303/; CASCON 2025 paper page: https://conf.researchr.org/details/cascon-2025/technical-papers-track/34/SynthLogAI-Generative-AI-for-Synthetic-Linux-Log-Generation-and-Evaluation; Public abstract mirror with model families, event sizes, and qualitative results: https://eurekamag.com/research/104/995/104995750.php; Author presentation summary reviewed; full paper still needed
- Machine-readable record: [paper.json](./paper.json)
