---
type: article
title: "Multi-Tenancy and Dynamic Messaging Workload Distribution"
description: "Addresses the challenge of distributing message processing workloads dynamically in multi-tenant environments where tenants are unknown upfront, critical for SaaS platforms where new customers continually register."
resource: https://www.architecture-weekly.com/p/multi-tenancy-and-dynamic-messaging
cluster: messaging-and-kafka
tags: ["multi-tenancy", "distributed-systems", "scalability", "databases"]
published: 2025-12
timestamp: 2026-07-05
---
# Multi-Tenancy and Dynamic Messaging Workload Distribution

> Addresses the challenge of distributing message processing workloads dynamically in multi-tenant environments where tenants are unknown upfront, critical for SaaS platforms where new customers continually register.

## Key Facts
- Choose sharding for high-security or unpredictable workload tenants; use partitioning for smaller, predictable loads
- Consider hybrid approaches: run small tenants together while isolating demanding ones separately
- Leverage existing tools like Kafka that implement consensus algorithms rather than building sophisticated coordination
- Plan for scale by avoiding thousands of containers or threads—group tenants into manageable ranges
- Use consistent hashing for deterministic message routing to processing units without central coordination
- Distributed locking prevents multiple instances from processing the same partition simultaneously

## Summary
Addresses the challenge of distributing message processing workloads dynamically in multi-tenant environments where tenants are unknown upfront, critical for SaaS platforms where new customers continually register. Horizontal scaling (sharding) involves spinning up separate containers per tenant or tenant group, ensuring complete isolation but at higher infrastructure costs, while vertical scaling (partitioning) runs multiple tenants within a single deployment using worker threads or processes, reducing costs but creating potential "noisy neighbor" issues. The author suggests using consistent hashing to map messages to processing units, with producers sending messages to topics with predetermined partitions based on deterministic routing logic. For the Emmett framework specifically, a partitionBy function allows processors to dynamically spawn worker threads per tenant internally, with distributed locking ensuring only one instance handles each partition.

## Links
- [Source](https://www.architecture-weekly.com/p/multi-tenancy-and-dynamic-messaging) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-messaging-and-kafka.md)
- [Understanding Kafka's Consumer Protocol](/architecture-weekly.com/2024-understanding-kafkas-consumer-protocol.md)
- [Kafka Consumers: Under the Hood of Message Processing](/architecture-weekly.com/2024-kafka-consumers-under-the-hood-of.md)
- [How a Kafka-Like Producer Writes Messages](/architecture-weekly.com/2024-how-a-kafka-like-producer-writes.md)
