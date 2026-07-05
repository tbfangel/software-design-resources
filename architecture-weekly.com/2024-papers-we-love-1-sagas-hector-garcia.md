---
type: discussion
title: "Papers We Love #1: Sagas by Hector Garcia-Molina"
description: "The inaugural \"Papers We Love\" meetup examined the foundational \"Sagas\" whitepaper by Hector Garcia-Molina and Kenneth Salem, revealing that the original concept addresses distributed database transactions, not business process orchestration as commonly understood today."
resource: https://www.architecture-weekly.com/p/papers-we-love-1-sagas-hector-garcia
cluster: engineering-culture
tags: ["sagas", "distributed-systems", "event-driven-architecture"]
published: 2024
timestamp: 2026-07-05
---
# Papers We Love #1: Sagas by Hector Garcia-Molina

> The inaugural "Papers We Love" meetup examined the foundational "Sagas" whitepaper by Hector Garcia-Molina and Kenneth Salem, revealing that the original concept addresses distributed database transactions, not business process orchestration as commonly understood today.

## Key Facts
- The original Sagas paper focuses on distributed database transactions, not business process orchestration
- Understanding the original research informs better system design decisions for modern implementations
- Historical computer science papers continue shaping contemporary architectural practices and tooling choices
- Immutable operation logs provide resilience and recovery capabilities critical for distributed systems
- Message-based systems should retain complete compensation information for reliable failure handling
- Application-level logic drives business processes rather than relying solely on database-level transaction coordination

## Summary
The inaugural "Papers We Love" meetup examined the foundational "Sagas" whitepaper by Hector Garcia-Molina and Kenneth Salem, revealing that the original concept addresses distributed database transactions, not business process orchestration as commonly understood today. The paper tackles technical challenges of managing transactions across distributed systems with a different emphasis than contemporary business process management implementations. Core concepts discussed include Two-Phase Commit limitations and alternatives, CAP Theorem implications, importance of immutable operation logs for resilience, application-level responsibility for driving business logic, and message-based systems retaining compensation information. The paper's insights remain pertinent for modern architectures where the emphasis on maintaining complete information within messages and leveraging immutable logs demonstrates why event-driven approaches align with principles outlined decades ago.

## Links
- [Source](https://www.architecture-weekly.com/p/papers-we-love-1-sagas-hector-garcia) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-engineering-culture.md)
- [Requiem for a 10x Engineer Dream](/architecture-weekly.com/2025-09-requiem-for-a-10x-engineer-dream.md)
- [Why Open Source Isn't Always Fair](/architecture-weekly.com/2025-09-why-open-source-isnt-always-fair.md)
- [Do We Still Need the QA Role?](/architecture-weekly.com/2024-do-we-still-need-the-qa-role.md)
