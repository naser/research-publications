# A Reliable and Efficient Time Synchronization Protocol for Heterogeneous Wireless Sensor Network

**2010 | Wireless Sensor Network | journal article**

**Authors:** Masoume Jabbarifar, Alireza Shameli-Sendi, Alireza Sadighian, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper proposes L-SYNCng, a time-synchronization protocol for heterogeneous wireless sensor networks that combines topology-aware clustering with convex-hull clock estimation.

## Four-part research summary

### 1. Problem and motivation

Clock offset, clock drift, delayed or unreliable packets, and heterogeneous topology make accurate and efficient synchronization difficult in wireless sensor networks; multihop clock conversion also accumulates error (abstract and pp. 1, 3, 7).

### 2. Method and contribution

L-SYNCng combines degree-/weight-based clustering, shorter inter-cluster routes, and convex-hull estimation of clock offset and skew. The synchronization phase uses cluster-head broadcasts, acknowledgements, timestamp histories, and route-based clock conversion (pp. 3-7).

### 3. Findings and evidence

NS-2.31 simulations compare L-SYNCng with L-SYNC and SLTP in homogeneous/heterogeneous and noisy/noiseless settings. The reported plots show slower growth of average synchronization error for L-SYNCng and improved robustness to delayed packets when convex-hull estimation is used (pp. 7-8; qualitative graph evidence, no exact numeric error table).

### 4. Limitations and future directions

**Limitations:** The evidence is simulation-only: no hardware-clock, energy-consumption, deployment, or dynamic-membership result was verified. The paper does not provide a reusable empirical dataset or exact tabulated error values.

**Future work:** Apply L-SYNCng to dynamic sensor networks in which nodes can change status or membership (pp. 8-9, conclusion).

## Abstract

L-SYNCng combines topology-aware clustering with convex-hull estimation of clock offset and skew for synchronization in heterogeneous wireless sensor networks.

## Topics and keywords

**Tags:** [performance-analysis](../../topics/performance-analysis.md) | [resource-analysis](../../topics/resource-analysis.md) | [observability](../../topics/observability.md)

**Keywords:** [wireless sensor networks](../../keywords/wireless-sensor-networks.md) | [time synchronization](../../keywords/time-synchronization.md) | [L-SYNCng](../../keywords/l-syncng.md) | [convex hull](../../keywords/convex-hull.md) | [clock drift](../../keywords/clock-drift.md) | [NS-2.31](../../keywords/ns-2-31.md) | [heterogeneous topology](../../keywords/heterogeneous-topology.md) | [clock offset](../../keywords/clock-offset.md) | [clock skew](../../keywords/clock-skew.md)

## Versions and source links

- [Published version](https://doi.org/10.4236/wsn.2010.212109) - published
- [Public full text](https://pdfs.semanticscholar.org/aac3/26768ba2da9c45750107826a2ebb79dfad1d.pdf) | [PDF](https://pdfs.semanticscholar.org/aac3/26768ba2da9c45750107826a2ebb79dfad1d.pdf) - public_full_text

**Canonical source:** [https://doi.org/10.4236/wsn.2010.212109](https://doi.org/10.4236/wsn.2010.212109)

## Identifiers

[DOI 10.4236/wsn.2010.212109](https://doi.org/10.4236/wsn.2010.212109)

## When to cite this paper

Cite this paper when your work uses or compares l-SYNCng's topology-aware clustering for heterogeneous WSN synchronization.

- L-SYNCng's topology-aware clustering for heterogeneous WSN synchronization.
- Convex-hull clock offset/skew estimation under delayed or noisy synchronization packets.
- The specific L-SYNCng/L-SYNC/SLTP comparison over 100-node homogeneous and heterogeneous simulated networks.

## Citation

### APA 7

Jabbarifar, M., Shameli-Sendi, A., Sadighian, A., Ezzati-Jivan, N., & Dagenais, M. R. (2010). A Reliable and Efficient Time Synchronization Protocol for Heterogeneous Wireless Sensor Network. Wireless Sensor Network. https://doi.org/10.4236/wsn.2010.212109

### IEEE

M. Jabbarifar, A. Shameli-Sendi, A. Sadighian, N. Ezzati-Jivan, and M. R. Dagenais, "A Reliable and Efficient Time Synchronization Protocol for Heterogeneous Wireless Sensor Network," Wireless Sensor Network, 2010, doi: 10.4236/wsn.2010.212109

```bibtex
@article{ezzatiJivan2010areliable,
  author = {Masoume Jabbarifar and Alireza Shameli-Sendi and Alireza Sadighian and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {A Reliable and Efficient Time Synchronization Protocol for Heterogeneous Wireless Sensor Network},
  year = {2010},
  journal = {Wireless Sensor Network},
  doi = {10.4236/wsn.2010.212109},
  url = {https://doi.org/10.4236/wsn.2010.212109}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: L-SYNCng PDF: protocol design, clustering, convex-hull offset/skew estimation, and comparison protocols; L-SYNCng PDF: NS-2.31, 100-node/1000 x 1000 m/100 m setup, ten runs, noise conditions, and plotted comparisons; L-SYNCng PDF: conclusion and dynamic-network future-work statement; Local PDF hash verified in pdf-evidence/extraction-manifest.json
- Machine-readable record: [paper.json](./paper.json)
