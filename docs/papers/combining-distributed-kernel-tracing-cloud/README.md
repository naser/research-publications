# Combining Distributed and Kernel Tracing for Performance Analysis of Cloud Applications

**2021 | Electronics | research paper**

**Authors:** Loïc Gelle, Naser Ezzati-Jivan, Michel R. Dagenais

**Core contribution:** The paper combines Jaeger distributed traces with LTTng kernel and user-space events and extends critical-path analysis from threads to distributed requests so request latency can be related to low-level scheduling and resource behavior.

## Four-part research summary

### 1. Problem and motivation

Distributed request spans identify application-level paths but can miss kernel scheduling, I/O, and CPU contention that explains hidden latency.

### 2. Method and contribution

Synchronize Jaeger spans with LTTng user-space/kernel events, decode CTF with Babeltrace, and analyze request critical paths in Trace Compass with cross-layer scheduling/resource states.

### 3. Findings and evidence

HotROD and Cassandra experiments show modest tracing overhead under the stated loads. The combined analysis identifies CPU wait/preemption in a Cassandra CPU-control-group case that Jaeger-only tracing cannot explain; a 500 MB trace can be analyzed in about 15 s.

### 4. Limitations and future directions

**Limitations:** Evidence is remote HTML only; local PDF pages, local PDF hash, and visual PDF checks are unavailable. The evaluated services/workloads are HotROD and Cassandra, and the paper's future work identifies dashboard-triggered snapshots, work-queue/thread-pool tracking, network analysis, and multi-host extension as open areas.

**Future work:** Trigger snapshots from a dashboard, improve tracking of user schedulers/work queues/thread pools, add network analysis, and extend the method across multiple hosts.

## Abstract

Distributed tracing allows tracking user requests that span across multiple services and machines in a distributed application. However, typical cloud applications rely on abstraction layers that can hide the root cause of latency happening between processes or in the kernel. Because of its focus on high-level events, existing methodologies in applying distributed tracing can be limited when trying to detect complex contentions and relate them back to the originating requests. Cross-level analyses that include kernel-level events are necessary to debug problems as prevalent as mutex or disk contention, however cross-level analysis and associating events in the kernel and distributed tracing data is complex and can add a lot of overhead. This paper describes a new solution for combining distributed tracing with low-level software tracing in order to find the latency root cause better. We explain how we achieve a hybrid trace collection to capture and synchronize both kernel and distributed request events. Then, we present our design and implementation for a critical path analysis. We show that our analysis describes precisely how each request spends its time and what stands in its critical path while limiting overhead.

## Topics and keywords

**Tags:** [kernel-tracing](../../topics/kernel-tracing.md) | [system-tracing](../../topics/system-tracing.md) | [performance-analysis](../../topics/performance-analysis.md) | [observability](../../topics/observability.md) | [lttng](../../topics/lttng.md)

**Keywords:** [distributed tracing](../../keywords/distributed-tracing.md) | [kernel tracing](../../keywords/kernel-tracing.md) | [cloud applications](../../keywords/cloud-applications.md) | [cross-layer performance analysis](../../keywords/cross-layer-performance-analysis.md) | [LTTng](../../keywords/lttng.md) | [Jaeger](../../keywords/jaeger.md) | [Trace Compass](../../keywords/trace-compass.md) | [Babeltrace](../../keywords/babeltrace.md) | [Common Trace Format](../../keywords/common-trace-format.md) | [HotROD](../../keywords/hotrod.md) | [Cassandra](../../keywords/cassandra.md) | [Apache ab](../../keywords/apache-ab.md) | [cassandra-stress](../../keywords/cassandra-stress.md) | [critical-path analysis](../../keywords/critical-path-analysis.md) | [snapshot tracing](../../keywords/snapshot-tracing.md) | [CPU control groups](../../keywords/cpu-control-groups.md) | [liblttng-ust](../../keywords/liblttng-ust.md) | [request synchronization](../../keywords/request-synchronization.md)

## Resources

- [Code](https://github.com/loicgelle/jaeger-go-lttng-instr)

## Versions and source links

- [Published version](https://doi.org/10.3390/electronics10212610) - published
- [Public full text](https://www.mdpi.com/2079-9292/10/21/2610/pdf?version=1635235463) | [PDF](https://www.mdpi.com/2079-9292/10/21/2610/pdf?version=1635235463) - public_full_text

**Canonical source:** [https://doi.org/10.3390/electronics10212610](https://doi.org/10.3390/electronics10212610)

## Identifiers

[DOI 10.3390/electronics10212610](https://doi.org/10.3390/electronics10212610)

## When to cite this paper

Cite this paper when your work uses or compares synchronizing Jaeger spans with LTTng tracepoints carrying request IDs.

- For synchronizing Jaeger spans with LTTng tracepoints carrying request IDs.
- For extending thread critical paths into request critical paths with scheduler, I/O, and wait states.
- For the HotROD/Cassandra overhead measurements and 500 MB/15 s analysis result.
- For identifying CPU-control-group preemption/CPU wait as a distributed-service latency cause.

## Citation

### APA 7

Gelle, L., Ezzati-Jivan, N., & Dagenais, M. R. (2021). Combining Distributed and Kernel Tracing for Performance Analysis of Cloud Applications. Electronics. https://doi.org/10.3390/electronics10212610

### IEEE

L. Gelle, N. Ezzati-Jivan, and M. R. Dagenais, "Combining Distributed and Kernel Tracing for Performance Analysis of Cloud Applications," in Electronics, 2021, doi: 10.3390/electronics10212610

```bibtex
@inproceedings{ezzatiJivan2021combiningdistributed,
  author = {Loïc Gelle and Naser Ezzati-Jivan and Michel R. Dagenais},
  title = {Combining Distributed and Kernel Tracing for Performance Analysis of Cloud Applications},
  year = {2021},
  booktitle = {Electronics},
  doi = {10.3390/electronics10212610},
  url = {https://doi.org/10.3390/electronics10212610}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: Crossref and local DBLP/venue metadata for 10.3390/electronics10212610; author identity matched to Naser Ezzati-Jivan in the local research catalog; Official MDPI HTML, Abstract and Sections 1-3 (reviewed 2026-08-06): distributed/kernel tracing motivation, LTTng/Jaeger/Trace Compass stack, patched Java and Go clients, synchronization events, and request critical-path construction.; Official MDPI HTML, Section 4 and Sections 4.1-4.1.2: i7-7820X/32 GB environment, HotROD 10,000-request evaluation, Cassandra 1,000,000-read/write evaluation, sampling configurations, and overhead bounds.; Official MDPI HTML, Sections 4.2-4.4: approximately 15-second analysis for 500 MB/20-30-second traces, 1% CPU-control-group use case, 2-second versus approximately 5-millisecond request latency, recurring 100-ms preemption, and transferability limits.; Official MDPI HTML, Section 5 and Data Availability Statement: dashboard-triggered snapshots, user-level scheduler/thread-pool tracking, network analysis, multi-host extension, CC BY 4.0 license, and https://github.com/loicgelle/jaeger-go-lttng-instr.; The official MDPI PDF URL was verified from the article's citation_pdf_url metadata, but Chrome's PDF endpoint was blocked by an interstitial in this run; no local PDF hash is claimed.
- Machine-readable record: [paper.json](./paper.json)
