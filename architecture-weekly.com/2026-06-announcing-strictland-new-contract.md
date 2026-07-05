---
type: article
title: "Announcing Strictland - new contract testing library for message compatibility"
description: "Oskar Dudycz introduces Strictland, a lightweight JVM contract-testing library for verifying message compatibility without the operational weight of tools like Pact or Spring Cloud Contract."
resource: https://www.architecture-weekly.com/p/announcing-strictland-new-contract
tags: ["messaging-and-kafka", "contract-testing", "message-compatibility", "schema-evolution", "jvm", "snapshot-testing", "open-source"]
published: 2026-06
timestamp: 2026-07-05
---
# Announcing Strictland - new contract testing library for message compatibility

> Oskar Dudycz introduces Strictland, a lightweight JVM contract-testing library for verifying message compatibility without the operational weight of tools like Pact or Spring Cloud Contract.

## Key Facts
- Snapshot files committed to the repo make message-format changes visible in code-review diffs
- No external infrastructure (Docker, brokers, registries) is required—checks run as plain unit tests
- Verifies both backward and forward compatibility so message evolution doesn't break consumers or stored data
- Passing the application's own serializer ensures snapshots match exact production byte layouts
- Positioned as a lightweight alternative to Pact and Spring Cloud Contract for teams lacking heavy testing infrastructure
- Pre-1.0 and JVM-first, with .NET and TypeScript/JavaScript support planned

## Summary
Oskar Dudycz introduces Strictland, a lightweight JVM contract-testing library for verifying message compatibility without the operational weight of tools like Pact or Spring Cloud Contract. Instead of brokers, schema registries, or mock services, Strictland serializes messages into snapshot files committed alongside unit tests, so any change to a message's shape surfaces as a diff during code review. Tests run as ordinary unit tests and check both snapshot consistency and backward/forward compatibility across message versions, using the application's own serializer so snapshots reflect the exact production bytes. The library is currently JVM-only with planned expansion to .NET and TypeScript/JavaScript, and is pre-1.0, inviting community feedback on its API and snapshot organization.

## Links
- [Source](https://www.architecture-weekly.com/p/announcing-strictland-new-contract) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-messaging-and-kafka.md)
- [Understanding Kafka's Consumer Protocol](/architecture-weekly.com/2024-understanding-kafkas-consumer-protocol.md)
- [Kafka Consumers: Under the Hood of Message Processing](/architecture-weekly.com/2024-kafka-consumers-under-the-hood-of.md)
- [How a Kafka-Like Producer Writes Messages](/architecture-weekly.com/2024-how-a-kafka-like-producer-writes.md)
