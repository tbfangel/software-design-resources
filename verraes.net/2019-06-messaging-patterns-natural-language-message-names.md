---
type: article
title: "Messaging Patterns: Natural Language Message Names"
description: "This post argues for using natural language sentences in message names rather than compact technical abbreviations."
resource: https://verraes.net/2019/06/messaging-patterns-natural-language-message-names/
cluster: messaging-distributed-systems
tags: ["messaging", "domain-driven-design", "naming", "ubiquitous-language", "event-design"]
published: 2019-06
timestamp: 2026-07-05
---
# Messaging Patterns: Natural Language Message Names

> This post argues for using natural language sentences in message names rather than compact technical abbreviations.

## Key Facts
- Natural language message names improve understandability and domain alignment
- Use past tense for events, imperative for commands, questions for queries
- This naming style enables testing as example stories using a clear "given-when-then" narrative

## Summary
This post argues for using natural language sentences in message names rather than compact technical abbreviations. Messages should use past tense for events (CustomerWasInvoiced), imperative mood for commands (InvoiceCustomer), and questions for queries. The approach keeps communication in systems aligned with human conversation and enables two-way dialogue with domain experts. Names like "InvoiceWasPaid" make intent explicit and tie code directly to the domain language without translation.

## Links
- [Source](https://verraes.net/2019/06/messaging-patterns-natural-language-message-names/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-messaging-distributed-systems.md)
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Throttling](/verraes.net/2019-05-messaging-patterns-throttling.md)
- [Messaging Patterns: Ephemeral Events](/verraes.net/2019-05-messaging-patterns-ephemeral-events.md)
