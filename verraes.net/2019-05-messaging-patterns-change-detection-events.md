---
type: article
title: "Messaging Patterns: Change Detection Events"
description: "Change Detection Events filter a stream to emit only when a specific value changes by more than a defined threshold."
resource: https://verraes.net/2019/05/messaging-patterns-change-detection-events/
cluster: messaging-distributed-systems
tags: ["messaging", "stream-processing"]
published: 2019-05
timestamp: 2026-07-05
---
# Messaging Patterns: Change Detection Events

> Change Detection Events filter a stream to emit only when a specific value changes by more than a defined threshold.

## Key Facts
- Acts as a filter that only emits when observed values change significantly
- Often combines with Ephemeral Events for practical stream processing
- Enables thresholds and tolerance bands to suppress noise

## Summary
Change Detection Events filter a stream to emit only when a specific value changes by more than a defined threshold. An intermediary consumer listens to high-frequency events, compares the current value to the previous one, and only passes along TemperatureHasChanged when the difference exceeds the threshold (e.g., 1°C). This pattern works well with Ephemeral Events and reduces noise by suppressing insignificant fluctuations.

## Links
- [Source](https://verraes.net/2019/05/messaging-patterns-change-detection-events/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-messaging-distributed-systems.md)
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Natural Language Message Names](/verraes.net/2019-06-messaging-patterns-natural-language-message-names.md)
- [Messaging Patterns: Throttling](/verraes.net/2019-05-messaging-patterns-throttling.md)
