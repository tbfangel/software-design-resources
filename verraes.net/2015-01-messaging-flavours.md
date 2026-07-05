---
type: article
title: "Messaging Flavours"
description: "Messages come in three flavors: imperative (Commands—do this), interrogatory (Queries—what is the state), and informational (Events—this happened)."
resource: https://verraes.net/2015/01/messaging-flavours/
cluster: messaging-distributed-systems
tags: ["messaging", "cqrs", "sql", "events"]
published: 2015-01
timestamp: 2026-07-05
---
# Messaging Flavours

> Messages come in three flavors: imperative (Commands—do this), interrogatory (Queries—what is the state), and informational (Events—this happened).

## Key Facts
- Three message flavors: Commands (imperative), Queries (interrogatory), Events (informational)
- Each has distinct coupling and responsibility principles
- State-flavored messages are better modeled as events for consistency

## Summary
Messages come in three flavors: imperative (Commands—do this), interrogatory (Queries—what is the state), and informational (Events—this happened). Each flavor has distinct responsibilities: Commands should not return state; Events should not be coupled to expectations of what receivers do; Queries should not change state. The post distinguishes between event-flavored and state-flavored informational messages, proposing that even state messages are better modeled as events (e.g., TemperatureWasMeasured instead of CurrentTemperature) to maintain linguistic consistency.

## Links
- [Source](https://verraes.net/2015/01/messaging-flavours/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-messaging-distributed-systems.md)
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Natural Language Message Names](/verraes.net/2019-06-messaging-patterns-natural-language-message-names.md)
- [Messaging Patterns: Throttling](/verraes.net/2019-05-messaging-patterns-throttling.md)
