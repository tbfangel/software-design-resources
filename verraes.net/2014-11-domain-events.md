---
type: article
title: "Domain Events"
description: "Domain Events are messages describing something that has happened in the past within the domain and is of interest to the business."
resource: https://verraes.net/2014/11/domain-events/
tags: ["ddd-foundations", "events", "system-boundaries", "messaging", "immutability", "domain-language", "event-naming", "event-design"]
published: 2014-11
timestamp: 2026-07-05
---
# Domain Events

> Domain Events are messages describing something that has happened in the past within the domain and is of interest to the business.

## Key Facts
- Domain Events represent boundaries and communication protocols between systems in a distributed architecture
- Events should be immutable and named in past tense using domain language
- Fat Events (redundant information included for receiver convenience) can reduce coupling but must be used judiciously
- Event design should prioritize communication requirements over convenient serialization

## Summary
Domain Events are messages describing something that has happened in the past within the domain and is of interest to the business. They serve as communication between bounded systems, allowing each system to maintain its own model while remaining informed of relevant changes. Events must be immutable (reflecting that messages don't change once sent) and named in past tense using the Ubiquitous Language (e.g., "StockWasDepleted" rather than "DepletStock"). Event contents should include only values directly relevant to that event, allowing receivers to build their own state rather than relying on sender queries. Well-designed events reduce coupling between systems by avoiding tight dependencies on the sender's internal structure.

## Links
- [Source](https://verraes.net/2014/11/domain-events/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-ddd-foundations.md)
- [What is Domain-Driven Design (DDD)](/verraes.net/2021-09-what-is-domain-driven-design-ddd.md)
- [Domain-Driven Design is Linguistic](/verraes.net/2014-01-domain-driven-design-is-linguistic.md)
- [Why Domain-Driven Design Matters](/verraes.net/2014-05-why-domain-driven-design-matters.md)
