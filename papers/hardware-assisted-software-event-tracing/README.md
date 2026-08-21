# Hardware-assisted software event tracing

**2017 | Concurrency and Computation: Practice and Experience | journal article**

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

**Keywords:** hardware-assisted tracing | software events | event collection | [trace overhead](../../keywords/trace-overhead.md) | ARM CoreSight | STM | ETM | ETB | Intel BTS | [Perf](../../keywords/perf.md) | [LTTng-UST](../../keywords/lttng-ust.md)

## Versions and source links

- [Published version](https://doi.org/10.1002/cpe.4069) - published
- [Public institutional full text](https://publications.polymtl.ca/2981/) | [PDF](https://publications.polymtl.ca/2981/1/2017_Verge_Hardware-assisted_software_event_tracing.pdf) - public_accepted_manuscript

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

Vergé, A., Ezzati-Jivan, N., & Dagenais, M. R. (2017). Hardware-assisted software event tracing. Concurrency and Computation: Practice and Experience, 29(10), e4069. https://doi.org/10.1002/cpe.4069

### IEEE

A. Vergé, N. Ezzati-Jivan, and M. R. Dagenais, "Hardware-assisted software event tracing," Concurrency and Computation: Practice and Experience, vol. 29, no. 10, 2017, doi: 10.1002/cpe.4069

```bibtex
@article{ezzatiJivan2017hardwareassisted,
  author = {Adrien Vergé and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Hardware-assisted software event tracing},
  year = {2017},
  journal = {Concurrency and Computation: Practice and Experience},
  volume = {29},
  number = {10},
  eid = {e4069},
  publisher = {Wiley},
  issn = {1532-0626, 1532-0634},
  doi = {10.1002/cpe.4069},
  url = {https://doi.org/10.1002/cpe.4069}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-09
- Summary status: full-text-grounded catalog review; author approval pending
- Metadata sources: PolyPublie repository record identity matched to the catalog title and author record; public PDF downloaded locally and %PDF- signature verified; PolyPublie cover sheet identifies this as the Wiley peer-reviewed accepted version and preserves Wiley self-archiving terms.
- Machine-readable record: [paper.json](./paper.json)
