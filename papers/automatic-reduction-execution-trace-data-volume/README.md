# Automatic Reduction of Execution Trace Data Volume Using Gradient Boosting in Large-Scale Microservice Systems

**2024 | The 37th Canadian Conference on Artificial Intelligence | conference paper**

**Authors:** Amir Haghshenas, Naser Ezzati-Jivan, Michel Dagenais

**Core contribution:** The paper uses gradient boosting and feature importance to reduce the amount of trace data needed for microservice performance modeling.

## Four-part research summary

### 1. Problem and motivation

Large-scale microservice traces are expensive to collect, store, and analyze, but reducing them arbitrarily can remove features needed for accurate CPU and memory prediction.

### 2. Method and contribution

A two-phase method identifies influential trace features and evaluates whether reduced feature sets preserve predictive performance. The evaluation uses a large Alibaba microservice dataset and examines the architectural meaning of retained features.

### 3. Findings and evidence

The PubPub article reports more than 69% data-volume reduction without loss of predictive accuracy, with some models improving. The retained features concentrate on inter-service communication and resource access.

### 4. Limitations and future directions

**Limitations:** The results depend on the Alibaba dataset, selected prediction targets, and gradient-boosting models.

**Future work:** Future work should test other microservice platforms, trace formats, workloads, prediction tasks, and online reduction policies.

## Abstract

In large microservice systems, collecting too little or too much trace data can make performance modeling unreliable. This work introduces a two-phase gradient-boosting method that identifies the most important trace features for predicting CPU and memory demand. Using a comprehensive Alibaba dataset, the study reports more than 69% reduction in data volume without compromising, and sometimes improving, model accuracy. The retained features emphasize inter-service communication and resource-access patterns.

## Topics and keywords

**Tags:** [microservices](../../topics/microservices.md) | [trace-reduction](../../topics/trace-reduction.md) | [gradient-boosting](../../topics/gradient-boosting.md) | [performance-modeling](../../topics/performance-modeling.md) | [resource-analysis](../../topics/resource-analys…6824 tokens truncated…{
    "metadata_verified_on": "2026-08-03",
    "metadata_source": [
      "public PDF URL observed from DBLP-linked source",
      "PDF downloaded locally and verified with %PDF- signature",
      "first three pages extracted for summary verification"
    ],
    "summary_written_by": "AI-assisted",
    "summary_verified_by": "source-grounded catalog review; author approval pending",
    "linked_preprint_record": null,
    "author_order_note": null
  },
  "batch": {
    "phase": 1,
    "batch_label": "initial ten-paper release",
    "status": "included_in_phase_1",
    "selected_at": "2026-08-03"
  }
}
