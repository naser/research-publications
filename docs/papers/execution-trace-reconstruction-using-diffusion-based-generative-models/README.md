# Execution Trace Reconstruction Using Diffusion-Based Generative Models

**2025 | IEEE/ACM International Conference on Software Engineering (ICSE) | conference paper**

**Authors:** Madeline Janecek, Naser Ezzati-Jivan, Abdelwahab Hamou-Lhadj

**Core contribution:** The paper reconstructs missing system-call events in execution traces with diffusion and structured state-space generative models.

## Four-part research summary

### 1. Problem and motivation

Ring-buffer overflow and resource constraints can discard contiguous system-call events, weakening trace-based diagnosis, anomaly detection, and performance analysis. Increasing buffers or blocking the application changes collection cost or system behavior.

### 2. Method and contribution

Nine Phoronix Test Suite datasets are collected from LTTng 2.8 traces on Debian with kernel 4.4.0-1-amd64. System calls are filtered from kernel events, sorted by training frequency, and encoded as integer IDs. DiffWave, SSSDS4, SSSDSA, and CSDIS4 diffusion/imputation models reconstruct artificial contiguous blackouts; accuracy, perfect rate, and ROUGE-L are compared with an LSTM next-event baseline.

### 3. Findings and evidence

The setup uses PTS 6.2.23, 32 runs per benchmark, 10,000 training and 500 test sequences per dataset, sequence lengths up to 200, and blackout sizes 5/10/20/30/40. For a ten-event blackout, SSSDS4 averages 81.62% accuracy, 74.27% perfect rate, and 90.84% ROUGE-L; SSSDSA reports 81.71%, 74.38%, and 90.90%. The LSTM reaches 29.61% average accuracy for five-event reconstruction. At blackout size 40, average SSSDS4 accuracy is 77.11%; the paper reports degradation once missingness exceeds about 20%.

### 4. Limitations and future directions

**Limitations:** Events are removed artificially rather than recovered from naturally lost traces. Exact-match metrics do not measure functional plausibility, and results are bounded by nine PTS workloads, one Debian/kernel environment, model parameter choices, and system-call-only representations. Timing, arguments, and authentic loss are not evaluated.

**Future work:** Add event timing, arguments, and duration; test authentic loss; explore other state-space/diffusion/transformer models; use expert or LLM-based functional evaluation; and assess usefulness in diagnosis, anomaly detection, and optimization.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [trace-analysis](../../topics/trace-analysis.md) | [trace-reduction](../../topics/trace-reduction.md) | [performance-analysis](../../topics/performance-analysis.md)

**Keywords:** [execution trace reconstruction](../../keywords/execution-trace-reconstruction.md) | [trace imputation](../../keywords/trace-imputation.md) | [diffusion models](../../keywords/diffusion-models.md) | [DiffWave](../../keywords/diffwave.md) | [SSSDS4](../../keywords/sssds4.md) | [SSSDSA](../../keywords/sssdsa.md) | [CSDIS4](../../keywords/csdis4.md) | [structured state-space](../../keywords/structured-state-space.md) | [system-call sequences](../../keywords/system-call-sequences.md) | [LTTng](../../keywords/lttng.md) | [Phoronix Test Suite](../../keywords/phoronix-test-suite.md) | [ROUGE-L](../../keywords/rouge-l.md) | [perfect rate](../../keywords/perfect-rate.md) | [missing events](../../keywords/missing-events.md) | [ring-buffer overflow](../../keywords/ring-buffer-overflow.md)

## Resources

- [Code](https://github.com/janecekm/TraceReconstruction)

## Versions and source links

- [Published version](https://doi.org/10.1109/ICSE55347.2025.00063) - published
- [Public full text](https://users.encs.concordia.ca/~abdelw/papers/ICSE2025_TraceConstruction.pdf) | [PDF](https://users.encs.concordia.ca/~abdelw/papers/ICSE2025_TraceConstruction.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1109/ICSE55347.2025.00063](https://doi.org/10.1109/ICSE55347.2025.00063)

## Identifiers

[DOI 10.1109/ICSE55347.2025.00063](https://doi.org/10.1109/ICSE55347.2025.00063)

## When to cite this paper

Cite this paper when your work uses or compares diffusion-based imputation of contiguous missing system-call events in execution traces.

- diffusion-based imputation of contiguous missing system-call events in execution traces.
- the SSSDS4 comparison across nine PTS workloads using exact accuracy, perfect rate, and ROUGE-L.
- the finding that structured state-space diffusion models outperform the LSTM baseline on multi-event reconstruction, with the artificial-blackout caveat.
- the need to add timing/arguments and functional-plausibility metrics to trace reconstruction.

## Citation

### APA 7

Janecek, M., Ezzati-Jivan, N., & Hamou-Lhadj, A. (2025). Execution Trace Reconstruction Using Diffusion-Based Generative Models. IEEE/ACM International Conference on Software Engineering (ICSE). https://doi.org/10.1109/ICSE55347.2025.00063

### IEEE

M. Janecek, N. Ezzati-Jivan, and A. Hamou-Lhadj, "Execution Trace Reconstruction Using Diffusion-Based Generative Models," in IEEE/ACM International Conference on Software Engineering (ICSE), 2025, doi: 10.1109/ICSE55347.2025.00063

```bibtex
@inproceedings{ezzatiJivan2025executiontrace,
  author = {Madeline Janecek and Naser Ezzati-Jivan and Abdelwahab Hamou-Lhadj},
  title = {Execution Trace Reconstruction Using Diffusion-Based Generative Models},
  year = {2025},
  booktitle = {IEEE/ACM International Conference on Software Engineering (ICSE)},
  doi = {10.1109/ICSE55347.2025.00063},
  url = {https://doi.org/10.1109/ICSE55347.2025.00063}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: ICSE published PDF: nine PTS workloads, PTS 6.2.2, LTTng 2.8, Debian kernel, Xeon/32 GB/SSD platform, and 32 runs per benchmark; ICSE published PDF: integer event encoding, DiffWave/SSSDS4/SSSDSA/CSDIS4 configurations, blackout protocol, accuracy, perfect rate, ROUGE-L, and LSTM baseline; ICSE published PDF: controlled-loss limitation, functional-plausibility example, and future work; Local thesis/manuscript and published-paper PDF are retained as distinct version evidence; local hashes are recorded in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
