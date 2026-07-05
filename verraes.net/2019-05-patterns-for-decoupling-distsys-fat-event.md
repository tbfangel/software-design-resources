---
type: article
title: "Patterns for Decoupling in Distributed Systems: Fat Event"
description: "Fat Events include redundant information alongside changed values to reduce the burden on consumers."
resource: https://verraes.net/2019/05/patterns-for-decoupling-distsys-fat-event/
tags: ["messaging-distributed-systems", "decoupling", "events", "redundancy", "data-enrichment"]
published: 2019-05
timestamp: 2026-07-05
---
# Patterns for Decoupling in Distributed Systems: Fat Event

> Fat Events include redundant information alongside changed values to reduce the burden on consumers.

## Key Facts
- Include redundant but useful information (old values, related context) to reduce consumer coupling
- Consumers get complete context without needing to correlate multiple events
- Trade-off between event size and consumer complexity

## Summary
Fat Events include redundant information alongside changed values to reduce the burden on consumers. For example, include both old and new values, or additional context like customer name alongside a customer ID. This trades increased event size for reduced complexity in consumer logic, which no longer needs to correlate multiple events or query the sender. The pattern works well for Summary Events and must balance the trade-off between event bloat and consumer simplicity.

## Links
- [Source](https://verraes.net/2019/05/patterns-for-decoupling-distsys-fat-event/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-messaging-distributed-systems.md)
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Natural Language Message Names](/verraes.net/2019-06-messaging-patterns-natural-language-message-names.md)
- [Messaging Patterns: Throttling](/verraes.net/2019-05-messaging-patterns-throttling.md)
