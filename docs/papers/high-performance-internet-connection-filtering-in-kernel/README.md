# High Performance Internet Connection Filtering through an In-Kernel Architecture

**2011 | Sixth International Conference on Internet Monitoring and Protection (ICIMP 2011) | conference paper**

**Authors:** Naser Ezzati Jivan, Alireza Shameli Sendi, Naser Nematbakhsh, Michel Dagenais

**Core contribution:** The paper moves part of an application proxy into the kernel to reduce context switches and unnecessary data copies during connection filtering.

## Four-part research summary

### 1. Problem and motivation

Application-layer proxy firewalls can copy packets between kernel and user space and incur repeated context switches, creating a network-performance bottleneck (printed pp. 32-34).

### 2. Method and contribution

The architecture splits proxy work between a kernel module and user-level daemon. Kernel-side modules handle authentication, rules, connection/state management, filtering, and logging; detailed application-layer work is retained where needed. The common proxy targets HTTP, FTP, and TELNET and emphasizes pass-through processing (printed pp. 32, 34-35).

### 3. Findings and evidence

The test compares kernel/no-proxy, kernel-proxy, kernel-proxy plus user daemon, and FWTK configurations using connections per second and average response time. The graphs and discussion report higher efficiency for the kernel-proxy configurations, attributed to fewer copies and context switches (printed pp. 36-37). Exact graph values are not reconstructed.

### 4. Limitations and future directions

**Limitations:** The evaluation is a dated three-host testbed: 100 Mbps links, HTTP proxy, 30 rules, no cache, summarized logging, disabled NAT, and three runs. Modern hardware, higher link rates, larger policies, non-HTTP workloads, and adversarial traffic are unknown.

**Future work:** Kernel URL categorization, high-performance kernel packet modification, a lightweight IP-layer TCP daemon, and a user/administrator interface for rule and policy management (printed p. 37).

## Abstract

Abstract not available in the captured sources.

## Topics and keywords

**Tags:** [performance-engineering](../../topics/performance-engineering.md) | [performance-optimization](../../topics/performance-optimization.md) | [resource-analysis](../../topics/resource-analysis.md)

**Keywords:** [in-kernel proxy](../../keywords/in-kernel-proxy.md) | [connection filtering](../../keywords/connection-filtering.md) | [Fire Bench](../../keywords/fire-bench.md) | [SPECWeb2009](../../keywords/specweb2009.md) | [context switches](../../keywords/context-switches.md) | [data copies](../../keywords/data-copies.md) | [HTTP proxy](../../keywords/http-proxy.md) | [FTP](../../keywords/ftp.md) | [TELNET](../../keywords/telnet.md) | [kernel architecture](../../keywords/kernel-architecture.md)

## Versions and source links

- [Institutional publication record](https://publications.polymtl.ca/16917/) - publication_signal
- [Public proceedings PDF](https://www.thinkmind.org/download_full.php?instance=ICIMP+2011) | [PDF](https://www.thinkmind.org/download_full.php?instance=ICIMP+2011) - public_full_text

**Canonical source:** [https://publications.polymtl.ca/16917/](https://publications.polymtl.ca/16917/)

## Identifiers



## When to cite this paper

Cite this paper when your work uses or compares the split in-kernel/user-daemon proxy architecture for reducing packet copies and context switches.

- The split in-kernel/user-daemon proxy architecture for reducing packet copies and context switches.
- The specific state/rule/filter/logging decomposition for a protocol-aware in-kernel connection filter.
- The Fire Bench/SPECWeb2009 evaluation design and its connections-per-second/average-response-time metrics.
- The qualitative result that pass-through kernel handling outperformed the tested FWTK/application-proxy configuration under the dated testbed.

## Citation

### APA 7

Jivan, N. E., Sendi, A. S., Nematbakhsh, N., & Dagenais, M. (2011). High Performance Internet Connection Filtering through an In-Kernel Architecture. Sixth International Conference on Internet Monitoring and Protection (ICIMP 2011). https://publications.polymtl.ca/16917/

### IEEE

N. E. Jivan, A. S. Sendi, N. Nematbakhsh, and M. Dagenais, "High Performance Internet Connection Filtering through an In-Kernel Architecture," in Sixth International Conference on Internet Monitoring and Protection (ICIMP 2011), 2011, [Online]. Available: https://publications.polymtl.ca/16917/

```bibtex
@inproceedings{ezzatiJivan2011highperformance,
  author = {Naser Ezzati Jivan and Alireza Shameli Sendi and Naser Nematbakhsh and Michel Dagenais},
  title = {High Performance Internet Connection Filtering through an In-Kernel Architecture},
  year = {2011},
  booktitle = {Sixth International Conference on Internet Monitoring and Protection (ICIMP 2011)},
  url = {https://publications.polymtl.ca/16917/}
}
```

**Reference-manager import:** [RIS file](./citation.ris)

## Record provenance

- Metadata verified: 2026-08-07
- Summary status: source-grounded catalog review; author approval pending
- Metadata sources: Private full proceedings evidence note: pdf-evidence/notes/parallel-batch-04-high-performance-internet-connection-filtering-through-an-in-kernel-architecture.md; Article printed pp. 32-37 in the public combined ICIMP proceedings PDF; Local PDF hash verified: F4F01012F90BB07B08926F1AF8AED9CC0211177450BD1ABCB70DF3C87E37D94; Institutional record: https://publications.polymtl.ca/16917/
- Machine-readable record: [paper.json](./paper.json)
