---
type: article
title: "Predictable Identifiers: Enabling Autonomous Communication"
description: "In distributed systems, modules need to communicate while remaining autonomous, but traditional event-driven architectures create tight coupling where payment modules must know about orders, reimbursements, and subscriptions."
resource: https://www.architecture-weekly.com/p/predictable-identifiers-enabling
tags: ["distributed-systems", "urns", "uniform-resource-names", "correlation-ids", "routing", "decoupling", "multi-tenancy"]
published: 2024
timestamp: 2026-07-05
---
# Predictable Identifiers: Enabling Autonomous Communication

> In distributed systems, modules need to communicate while remaining autonomous, but traditional event-driven architectures create tight coupling where payment modules must know about orders, reimbursements, and subscriptions.

## Key Facts
- Structure URNs thoughtfully with version numbers for evolution and clear component hierarchies
- Implement security controls: validate tenant access, restrict sources, verify correlation IDs exist
- Leverage URNs for cross-cutting concerns: idempotency keys, tenant routing, debugging via correlation tracking
- Consider encryption for sensitive URN components in multi-tenant environments
- Design around webhooks where external providers can include URNs in metadata for natural callback routing
- Transform tightly-coupled orchestration into loosely-coupled event streams where modules achieve true autonomy

## Summary
In distributed systems, modules need to communicate while remaining autonomous, but traditional event-driven architectures create tight coupling where payment modules must know about orders, reimbursements, and subscriptions. Predictable identifiers, specifically Uniform Resource Names (URNs), provide an elegant solution by encoding routing and correlation information directly into identifiers. The proposed standard urn:payments:{version}:{source}:{tenantid}:{uniqueid} enables infrastructure-level routing in RabbitMQ where topic exchanges parse URN components into routing keys and queues bind using wildcard patterns. The payment module publishes responses using the correlation ID without knowing destinations, accepting generic payment requests and responding asynchronously while remaining completely unaware of request sources. Consuming modules generate URNs containing their identifier and extract source information from response correlation IDs, handling results without reverse dependencies.

## Links
- [Source](https://www.architecture-weekly.com/p/predictable-identifiers-enabling) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-distributed-systems.md)
- [Distributed Locking: A Practical Guide](/architecture-weekly.com/2024-distributed-locking-a-practical-guide.md)
- [Locks, Queues and Business Workflows Processing](/architecture-weekly.com/2024-locks-queues-and-business-workflows.md)
- [Workflow Engine Design Proposal for Emmett](/architecture-weekly.com/2024-workflow-engine-design-proposal-tell.md)
