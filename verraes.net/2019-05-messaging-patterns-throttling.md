---
type: article
title: "Messaging Patterns: Throttling"
description: "Throttling addresses high-frequency event streams by keeping only one event per time unit."
resource: https://verraes.net/2019/05/messaging-patterns-throttling/
cluster: messaging-distributed-systems
tags: ["messaging", "performance", "events", "resilience"]
published: 2019-05
timestamp: 2026-07-05
---
# Messaging Patterns: Throttling

> Throttling addresses high-frequency event streams by keeping only one event per time unit.

## Key Facts
- Throttle drops most events, passing only one per time unit to the consumer
- Reduces load on consumers that cannot keep up with high-frequency streams
- Common pattern in UI rendering and sensor data processing

## Summary
Throttling addresses high-frequency event streams by keeping only one event per time unit. An intermediary consumer filters the stream, dropping events except at regular intervals (e.g., throttling mouse position updates from 500 Hz to 5 Hz). This pattern is common in user interfaces and works well with Ephemeral Events, allowing consumers to keep up with manageable loads without processing every event.

## Links
- [Source](https://verraes.net/2019/05/messaging-patterns-throttling/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-messaging-distributed-systems.md)
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Natural Language Message Names](/verraes.net/2019-06-messaging-patterns-natural-language-message-names.md)
- [Messaging Patterns: Ephemeral Events](/verraes.net/2019-05-messaging-patterns-ephemeral-events.md)
