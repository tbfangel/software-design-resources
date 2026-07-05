---
type: article
title: "Workflow Engine Design Proposal for Emmett"
description: "Building durable, observable multi-step business processes requires handling failure recovery, state management, and visibility."
resource: https://www.architecture-weekly.com/p/workflow-engine-design-proposal-tell
tags: ["distributed-systems", "workflow-engines", "event-sourcing", "state-management", "temporal", "actor-model", "durable-execution"]
published: 2024
timestamp: 2026-07-05
---
# Workflow Engine Design Proposal for Emmett

> Building durable, observable multi-step business processes requires handling failure recovery, state management, and visibility.

## Key Facts
- Leverage event sourcing as workflow foundation rather than introducing separate infrastructure
- Use the double-hop pattern (store input, process, store output) to ensure durability at each step
- Pure functions for decide and evolve enable straightforward testing without special runtime requirements
- Each workflow instance operates independently with its own mailbox following the actor model
- Accept added latency and storage duplication as tradeoffs for durability and observability
- Not suitable for synchronous request-response patterns—designed for asynchronous durable workflows

## Summary
Building durable, observable multi-step business processes requires handling failure recovery, state management, and visibility. Existing solutions like Temporal and AWS Step Functions introduce significant cognitive overhead and complexity. The proposed lightweight workflow engine leverages event sourcing as the foundation, treating each workflow instance as an event stream that acts as both inbox and outbox. Messages trigger routing to specific workflow instances, inputs store in the workflow's stream before processing, state rebuilds by replaying events through an evolve function, the decide function executes business logic, and outputs store back in the same stream. This "double-hop" pattern ensures durability at each step while maintaining full message history. Key components include decide (contains business logic), evolve (builds state from events), and initialState (starting state for new instances). Design advantages include pure functions for straightforward testing, built-in observability through complete audit trail, actor model isolation with independent workflow instances, and familiar patterns reusing Emmett's existing concepts.

## Links
- [Source](https://www.architecture-weekly.com/p/workflow-engine-design-proposal-tell) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-distributed-systems.md)
- [Distributed Locking: A Practical Guide](/architecture-weekly.com/2024-distributed-locking-a-practical-guide.md)
- [Locks, Queues and Business Workflows Processing](/architecture-weekly.com/2024-locks-queues-and-business-workflows.md)
- [The Order of Things: Why You Can't Have Both Speed and Strict Ordering](/architecture-weekly.com/2024-the-order-of-things-why-you-cant.md)
