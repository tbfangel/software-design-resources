---
type: article
title: "Patterns for Decoupling in Distributed Systems: Passage of Time Event"
description: "Replace cron jobs and scheduled commands with a generic Passage of Time Event (DayHasPassed, QuarterHasPassed)."
resource: https://verraes.net/2019/05/patterns-for-decoupling-distsys-passage-of-time-event/
cluster: messaging-distributed-systems
tags: ["workflows", "date-time", "events", "domain-driven-design", "async-programming"]
published: 2019-05
timestamp: 2026-07-05
---
# Patterns for Decoupling in Distributed Systems: Passage of Time Event

> Replace cron jobs and scheduled commands with a generic Passage of Time Event (DayHasPassed, QuarterHasPassed).

## Key Facts
- Model time itself as a domain event (DayHasPassed, not cron jobs)
- Provides temporal decoupling; consumers can catch up asynchronously
- Makes time explicit in event logs and enables elegant time-dependent business logic

## Summary
Replace cron jobs and scheduled commands with a generic Passage of Time Event (DayHasPassed, QuarterHasPassed). A scheduler emits these events at regular intervals; interested services listen and react. This moves scheduling logic from external infrastructure into the domain, keeps the Ubiquitous Language intact, and provides temporal decoupling—consumers catch up asynchronously. For example, InvoiceDebtCollection listens for DayHasPassed, queries for overdue invoices, and emits InvoiceBecameOverdue. The pattern works well for business processes with time-dependent actions and makes time an explicit part of the event log.

## Links
- [Source](https://verraes.net/2019/05/patterns-for-decoupling-distsys-passage-of-time-event/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-messaging-distributed-systems.md)
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Natural Language Message Names](/verraes.net/2019-06-messaging-patterns-natural-language-message-names.md)
- [Messaging Patterns: Throttling](/verraes.net/2019-05-messaging-patterns-throttling.md)
