# Hardware-Assisted Software Event Tracing

**2017 | Concurrency and Computation: Practice and Experience | research paper**

**Authors:** Adrien Vergé, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper designs and evaluates hardware-assisted alternatives to LTTng-UST for software-event and execution-path tracing, including STM/ETB, ETM/ETB, and a modified Perf/BTS path.

## Four-part research summary

### 1. Problem and motivation

Software event tracing can impose substantial delay and buffer-copy overhead, while hardware branch tracing provides low-level execution evidence but has different semantics, payload limits, and loss behavior.

### 2. Method and contribution

Compare LTTng-UST with ARM CoreSight STM/ETM/ETB and Intel BTS/modified Perf. The splice path moves BTS data through per-core ring buffers and subbuffers; STM carries software payloads and ETM supplies compressed branch execution.

### 3. Findings and evidence

Hardware-assisted paths reduce tracing delay in the tested high-frequency loops. STM/ETB is especially effective for software payload tracing; ETM/ETB improves time over LTTng in its tested range; the splice design reduces the regular BTS/Perf penalty.

### 4. Limitations and future directions

**Limitations:** The stress runs intentionally use long loop traces and event rates up to the 10^5-10^6-events/s range, which are not representative of every application. STM payloads above about 60 bytes scale poorly, ETM can lose events at extreme rates, and BTS produces branch records rather than semantically equivalent software events.

**Future work:** Integrate STM into LTTng and extend the approach to Freescale hardware and Intel Processor Trace.

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [system-tracing](../../topics/system-tracing.md) | [kernel-tracing](../../topics/kernel-tracing.md) | [trace-analysis](../../topics/trace-analysis.md) | [performance-engineering](../../topics/performance-engineering.md)

**Keywords:** [hardware-assisted tracing](../../keywords/hardware-assisted-tracing.md) | [software events](../../keywords/software-events.md) | [event collection](../../keywords/event-collection.md) | [trace overhead](../../keywords/trace-overhead.md) | [ARM CoreSight](../../keywords/arm-coresight.md) | [STM](../../keywords/stm.md) | [ETM](../../keywords/etm.md) | [ETB](../../keywords/etb.md) | [Intel BTS](../../keywords/intel-bts.md) | [Perf](../../keywords/perf.md) | [LTTng-UST](../../keywords/lttng-ust.md)

## Versions and source links

- [Published version](https://doi.org/10.1002/cpe.4069) - published
- [Public full text](https://publications.polymtl.ca/2981/1/2017_Verge_Hardware-assisted_software_event_tracing.pdf) | [PDF](https://publications.polymtl.ca/2981/1/2017_Verge_Hardware-assisted_software_event_tracing.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.1002/cpe.4069](https://doi.org/10.1002/cpe.4069)

## Identifiers

[DOI 10.1002/cpe.4069](https://doi.org/10.1002/cpe.4069)

## When to cite this paper

Cite this paper when your work uses or compares the STM/ETB design that carries software-event payloads through hardware trace memory with much lower delay than LTTng-UST in the stress test.

- For the STM/ETB design that carries software-event payloads through hardware trace memory with much lower delay than LTTng-UST in the stress test.
- For comparing software-event tracing, ETM compressed branch tracing, and BTS branch-pair tracing as distinct evidence modalities.
- For the per-core splice/ring-buffer modification that reduces Perf/BTS copying overhead.

## Citation

### APA 7

Vergé, A., Ezzati-Jivan, N., & Dagenais, M. R. (2017). Hardware-Assisted Software Event Tracing. Concurrency and Computation: Practice and Experience. https://doi.org/10.1002/cpe.4069

### IEEE

A. Vergé, N. Ezzati-Jivan, and M. R. Dagenais, "Hardware-Assisted Software Event Tracing," in Concurrency and Computation: Practice and Experience, 2017, doi: 10.1002/cpe.4069

```bibtex
@inproceedings{ezzatiJivan2017hardwareassisted,
  author = {Adrien Vergé and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Hardware-Assisted Software Event Tracing},
  year = {2017},
  booktitle = {Concurrency and Computation: Practice and Experience},
  doi = {10.1002/cpe.4069},
  url = {https://doi.org/10.1002/cpe.4069}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: Crossref and local DBLP/venue metadata for 10.1002/cpe.4069; author identity matched to Naser Ezzati-Jivan in the local research catalog; Hardware-assisted tracing PDF pp. 1-4: problem, ARM CoreSight/Intel BTS design, platforms, and LTTng comparison; Hardware-assisted tracing PDF pp. 4-10: STM/ETM/BTS implementations, benchmark results, and modified Perf path; Hardware-assisted tracing PDF p. 10: conclusion, quantitative comparisons, and limitations; local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
