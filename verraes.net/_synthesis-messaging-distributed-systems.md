---
type: synthesis
title: "Messaging & Distributed Systems Patterns"
description: "This cluster gathers Verraes' foundational thinking on messaging in distributed systems, exploring how messages serve as the primary communication mechanism between decoupled services."
cluster: messaging-distributed-systems
timestamp: 2026-07-05
---
# Messaging & Distributed Systems Patterns

> This cluster gathers Verraes' foundational thinking on messaging in distributed systems, exploring how messages serve as the primary communication mechanism between decoupled services.

## Key Insights

**Messages should be the primary organisational principle of distributed systems — above structure, layers, or technology choices.** Designing around explicit, named messages (Commands, Events, Queries) makes intent visible, enforces boundaries, and keeps the ubiquitous language alive at the integration layer.

**Name messages in natural language.** Past tense for events (`CustomerWasInvoiced`), imperative for commands (`InvoiceCustomer`), questions for queries (`WhichCarsAreUpForReplacement`). This is not a stylistic preference — it keeps communication between services aligned with how the business talks, and makes test scenarios read as coherent narratives.

**Decoupling is an active design choice, not a free benefit of using events.** Segregated event layers, explicit public events, fat events, summary events, domain queries, and completeness guarantees are each different tools for different decoupling problems. Defaulting to "just publish events" leaves consumers tightly coupled to producer internals.

**Model time as a domain event, not as infrastructure.** Replacing cron jobs with `DayHasPassed` events makes temporal logic explicit in the event log, enables temporal decoupling, and keeps the ubiquitous language intact across time-dependent business processes.

**Build for failure, not just prevention.** Inspired by Erlang's "let it crash" philosophy: failure is inevitable, supervision trees manage recovery, and the right architecture separates problem-solving code from problem-fixing code. Conway's Law adds a corollary — reorganising teams won't fix a rigid, ossified system design; the design work itself must come first.

---

## Related
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Natural Language Message Names](/verraes.net/2019-06-messaging-patterns-natural-language-message-names.md)
- [Messaging Patterns: Throttling](/verraes.net/2019-05-messaging-patterns-throttling.md)
- [Messaging Patterns: Ephemeral Events](/verraes.net/2019-05-messaging-patterns-ephemeral-events.md)
- [Messaging Patterns: Change Detection Events](/verraes.net/2019-05-messaging-patterns-change-detection-events.md)
- [Messaging Flavours](/verraes.net/2015-01-messaging-flavours.md)
- [Patterns for Decoupling in Distributed Systems: Segregated Event Layers](/verraes.net/2019-05-patterns-for-decoupling-distsys-segregated-event-layers.md)
- [Patterns for Decoupling in Distributed Systems: Fat Event](/verraes.net/2019-05-patterns-for-decoupling-distsys-fat-event.md)
- [Patterns for Decoupling in Distributed Systems: Explicit Public Events](/verraes.net/2019-05-patterns-for-decoupling-distsys-explicit-public-events.md)
- [Patterns for Decoupling in Distributed Systems: Passage of Time Event](/verraes.net/2019-05-patterns-for-decoupling-distsys-passage-of-time-event.md)
- [Patterns for Decoupling in Distributed Systems: Summary Event](/verraes.net/2019-05-patterns-for-decoupling-distsys-summary-event.md)
- [Patterns for Decoupling in Distributed Systems: Domain Query](/verraes.net/2019-05-patterns-for-decoupling-distsys-domain-query.md)
- [Patterns for Decoupling in Distributed Systems: Completeness Guarantee](/verraes.net/2019-05-patterns-for-decoupling-distsys-completeness-guarantee.md)
- [Messages Over Structure](/verraes.net/2017-04-messages-over-structure.md)
- [Conway's Law Doesn't Apply to Rigid Designs](/verraes.net/2022-05-conways-law-vs-rigid-designs.md)
- [Build for Failure](/verraes.net/2014-01-build-for-failure.md)
- [Let It Crash](/verraes.net/2014-12-erlang-let-it-crash.md)
