# Messaging & Distributed Systems Patterns

> Part of the [Mathias Verraes blog overview](overview.md)

This cluster gathers Verraes' foundational thinking on messaging in distributed systems, exploring how messages serve as the primary communication mechanism between decoupled services. The content spans messaging patterns (naming, throttling, ephemeral events), decoupling strategies (event layers, fat events, queries), and the philosophical foundations that guide resilient system design. Together, these posts establish a framework where explicit, domain-driven communication becomes the organizing principle for distributed architecture.

## Key Insights

**Messages should be the primary organisational principle of distributed systems — above structure, layers, or technology choices.** Designing around explicit, named messages (Commands, Events, Queries) makes intent visible, enforces boundaries, and keeps the ubiquitous language alive at the integration layer.

**Name messages in natural language.** Past tense for events (`CustomerWasInvoiced`), imperative for commands (`InvoiceCustomer`), questions for queries (`WhichCarsAreUpForReplacement`). This is not a stylistic preference — it keeps communication between services aligned with how the business talks, and makes test scenarios read as coherent narratives.

**Decoupling is an active design choice, not a free benefit of using events.** Segregated event layers, explicit public events, fat events, summary events, domain queries, and completeness guarantees are each different tools for different decoupling problems. Defaulting to "just publish events" leaves consumers tightly coupled to producer internals.

**Model time as a domain event, not as infrastructure.** Replacing cron jobs with `DayHasPassed` events makes temporal logic explicit in the event log, enables temporal decoupling, and keeps the ubiquitous language intact across time-dependent business processes.

**Build for failure, not just prevention.** Inspired by Erlang's "let it crash" philosophy: failure is inevitable, supervision trees manage recovery, and the right architecture separates problem-solving code from problem-fixing code. Conway's Law adds a corollary — reorganising teams won't fix a rigid, ossified system design; the design work itself must come first.

---

### [Two Hard Problems with Distributed Systems](https://verraes.net/2025/08/two-hard-problems-with-distributed-systems/)
**Type:** Article
**Date:** 2025-08
**Tags/Topics:** Distributed systems, Messaging, Challenges, Industry humor

This post presents the humorous but profound observation that there are "only two hard problems in distributed systems: exactly-once delivery and guaranteed order of messages (and cache invalidation)." Originally posted as a joke on Twitter a decade ago, it has become widely quoted in books, conference talks, and academic papers. The post provides the canonical home for this insight and includes references to its evolution and variations.

**Key takeaways:**
- Exactly-once delivery and message ordering are fundamental distributed systems challenges
- The joke's enduring relevance reflects genuinely difficult engineering problems
- Cache invalidation is sometimes added as a third hard problem

---

### [Messaging Patterns: Natural Language Message Names](https://verraes.net/2019/06/messaging-patterns-natural-language-message-names/)
**Type:** Article
**Date:** 2019-06
**Tags/Topics:** Messaging, Domain-Driven Design, Naming conventions, Ubiquitous Language, Event naming

This post argues for using natural language sentences in message names rather than compact technical abbreviations. Messages should use past tense for events (CustomerWasInvoiced), imperative mood for commands (InvoiceCustomer), and questions for queries. The approach keeps communication in systems aligned with human conversation and enables two-way dialogue with domain experts. Names like "InvoiceWasPaid" make intent explicit and tie code directly to the domain language without translation.

**Key takeaways:**
- Natural language message names improve understandability and domain alignment
- Use past tense for events, imperative for commands, questions for queries
- This naming style enables testing as example stories using a clear "given-when-then" narrative

---

### [Messaging Patterns: Throttling](https://verraes.net/2019/05/messaging-patterns-throttling/)
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** Messaging, Performance, Ephemeral Events, Rate limiting

Throttling addresses high-frequency event streams by keeping only one event per time unit. An intermediary consumer filters the stream, dropping events except at regular intervals (e.g., throttling mouse position updates from 500 Hz to 5 Hz). This pattern is common in user interfaces and works well with Ephemeral Events, allowing consumers to keep up with manageable loads without processing every event.

**Key takeaways:**
- Throttle drops most events, passing only one per time unit to the consumer
- Reduces load on consumers that cannot keep up with high-frequency streams
- Common pattern in UI rendering and sensor data processing

---

### [Messaging Patterns: Ephemeral Events](https://verraes.net/2019/05/messaging-patterns-ephemeral-events/)
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** Messaging, Event types, Persistence, Real-time data, High-frequency streams

Ephemeral Events mark events whose lifetime lasts only until the next event. Sensors and real-time systems emit measurements frequently; a new measurement makes the previous one obsolete. Consumers cannot keep up or are uninterested in every event. In Event Sourcing systems, ephemeral events are not persisted—they have no lasting business value at their original granularity. Infrastructure can skip to the most recent event if a consumer falls behind, and the consumer still produces valuable outcomes from the subset of events it processes.

**Key takeaways:**
- Ephemeral Events are not persisted; they have no lasting business value
- New events make previous measurements obsolete
- Often combined with Throttling or Change Detection Events for practical use

---

### [Messaging Patterns: Change Detection Events](https://verraes.net/2019/05/messaging-patterns-change-detection-events/)
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** Messaging, Filtering, Thresholds, Stream processing

Change Detection Events filter a stream to emit only when a specific value changes by more than a defined threshold. An intermediary consumer listens to high-frequency events, compares the current value to the previous one, and only passes along TemperatureHasChanged when the difference exceeds the threshold (e.g., 1°C). This pattern works well with Ephemeral Events and reduces noise by suppressing insignificant fluctuations.

**Key takeaways:**
- Acts as a filter that only emits when observed values change significantly
- Often combines with Ephemeral Events for practical stream processing
- Enables thresholds and tolerance bands to suppress noise

---

### [Messaging Flavours](https://verraes.net/2015/01/messaging-flavours/)
**Type:** Article
**Date:** 2015-01
**Tags/Topics:** Messaging, Message types, Commands, Queries, Events, CQRS

Messages come in three flavors: imperative (Commands—do this), interrogatory (Queries—what is the state), and informational (Events—this happened). Each flavor has distinct responsibilities: Commands should not return state; Events should not be coupled to expectations of what receivers do; Queries should not change state. The post distinguishes between event-flavored and state-flavored informational messages, proposing that even state messages are better modeled as events (e.g., TemperatureWasMeasured instead of CurrentTemperature) to maintain linguistic consistency.

**Key takeaways:**
- Three message flavors: Commands (imperative), Queries (interrogatory), Events (informational)
- Each has distinct coupling and responsibility principles
- State-flavored messages are better modeled as events for consistency

---

### [Patterns for Decoupling in Distributed Systems: Segregated Event Layers](https://verraes.net/2019/05/patterns-for-decoupling-distsys-segregated-event-layers/)
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** Decoupling, Bounded Contexts, Anti-Corruption Layer, Event evolution

Segregated Event Layers explicitly separate internal and public events with different visibility layers and languages. Keep internal events private and set up adapters that translate to public event streams tailored for external consumers. This allows the internal bounded context to evolve independently while presenting clean, domain-specific public interfaces. Each consumer can have its own adapted event stream if needed, making this an implementation pattern for Anti-Corruption Layers.

**Key takeaways:**
- Keep internal events private; adapt them for external consumption
- Each consumer may have a separate adapter/stream tailored to its needs
- Enables freedom to evolve internal domain language without affecting external contracts

---

### [Patterns for Decoupling in Distributed Systems: Fat Event](https://verraes.net/2019/05/patterns-for-decoupling-distsys-fat-event/)
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** Decoupling, Events, Redundancy, Data enrichment

Fat Events include redundant information alongside changed values to reduce the burden on consumers. For example, include both old and new values, or additional context like customer name alongside a customer ID. This trades increased event size for reduced complexity in consumer logic, which no longer needs to correlate multiple events or query the sender. The pattern works well for Summary Events and must balance the trade-off between event bloat and consumer simplicity.

**Key takeaways:**
- Include redundant but useful information (old values, related context) to reduce consumer coupling
- Consumers get complete context without needing to correlate multiple events
- Trade-off between event size and consumer complexity

---

### [Patterns for Decoupling in Distributed Systems: Explicit Public Events](https://verraes.net/2019/05/patterns-for-decoupling-distsys-explicit-public-events/)
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** Decoupling, Bounded Contexts, API design, Event visibility

Mark a small subset of events as public using @Public annotations, marker interfaces, or isPublic() methods; keep the rest private by default. This prevents sensitive data from leaking and decouples the external API from internal structure changes. If the internal bounded context evolves significantly, the API change happens intentionally through a public event, not accidentally through exposure of internals. The pattern applies the principle that everything should be closed off by default and only opened where justified.

**Key takeaways:**
- Explicitly mark events as public; keep all others private by default
- Separate messaging channels for internal and external consumers
- Decouples external API from internal implementation changes

---

### [Patterns for Decoupling in Distributed Systems: Passage of Time Event](https://verraes.net/2019/05/patterns-for-decoupling-distsys-passage-of-time-event/)
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** Scheduling, Time, Events, Domain-driven design, Reactive patterns

Replace cron jobs and scheduled commands with a generic Passage of Time Event (DayHasPassed, QuarterHasPassed). A scheduler emits these events at regular intervals; interested services listen and react. This moves scheduling logic from external infrastructure into the domain, keeps the Ubiquitous Language intact, and provides temporal decoupling—consumers catch up asynchronously. For example, InvoiceDebtCollection listens for DayHasPassed, queries for overdue invoices, and emits InvoiceBecameOverdue. The pattern works well for business processes with time-dependent actions and makes time an explicit part of the event log.

**Key takeaways:**
- Model time itself as a domain event (DayHasPassed, not cron jobs)
- Provides temporal decoupling; consumers can catch up asynchronously
- Makes time explicit in event logs and enables elegant time-dependent business logic

---

### [Patterns for Decoupling in Distributed Systems: Summary Event](https://verraes.net/2019/05/patterns-for-decoupling-distsys-summary-event/)
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** Decoupling, Events, Projections, Consumer coupling

Instead of emitting many events during a process, emit a single Summary Event at the end containing only the final result. This decouples consumers from the internal steps of a process. For example, Ordering might emit many internal events (LineItemWasAdded, PriceWasChanged) but emit a single public OrderWasPlaced containing complete order information. Consumers no longer need to track state changes throughout the process; they act upon the summary. A Projection can generate the summary. The pattern mirrors how businesses work in the real world—the fulfillment department sees the final order, not the draft negotiations.

**Key takeaways:**
- Emit one Summary Event at process completion instead of many intermediate events
- Consumers don't need to track process state; they receive the finished result
- Reduces consumer coupling to internal process details

---

### [Patterns for Decoupling in Distributed Systems: Domain Query](https://verraes.net/2019/05/patterns-for-decoupling-distsys-domain-query/)
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** Decoupling, Query patterns, API design, Ubiquitous Language

Replace free-form queries (SELECT, REST endpoints, GraphQL) with domain-specific Domain Queries using natural language questions (WhichCarsAreUpForReplacement). Domain Queries are narrowly tailored to specific use cases and hide implementation details. The server knows where and how to compute results; clients don't need knowledge of the schema. This decouples clients from internal structure, making it possible to change how the server computes results without breaking external contracts. Responses are equally tailored (CarsThatAreUpForReplacement) and use Ubiquitous Language.

**Key takeaways:**
- Define domain-specific queries instead of exposing raw schemas
- Use natural language question names (WhichCarsAreUpForReplacement)
- Clients don't know the server's structure; server is free to change implementation

---

### [Patterns for Decoupling in Distributed Systems: Completeness Guarantee](https://verraes.net/2019/05/patterns-for-decoupling-distsys-completeness-guarantee/)
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** Events, Event Sourcing, Decoupling, System design

Design the set of Domain Events so they can rebuild a producer's entire state. Every state-changing action produces an event containing all affected information, and no redundant data is included. This guarantee ensures consumers have access to all information they need without querying the producer. Event Sourcing systems get this guarantee automatically—the event store is the source of truth. For non-Event Sourced systems, you can verify completeness by projecting all production events and comparing the projected state to actual state, though Event Sourcing is the simpler path. Completeness enables high consumer decoupling and guarantees features can be implemented anywhere in the system.

**Key takeaways:**
- All state changes must produce events; events contain all affected information
- Consumers can rebuild complete state from events without querying the producer
- Event Sourcing provides this guarantee automatically; it's hard to achieve elsewhere

---

### [Messages Over Structure](https://verraes.net/2017/04/messages-over-structure/)
**Type:** Presentation
**Date:** 2017-04
**Tags/Topics:** Messaging, System design, Architecture, Distributed systems

A keynote presentation at Neos Conference 2017 in Hamburg, available as a YouTube video. The title suggests the core theme: emphasizing explicit message-driven communication as the organizing principle for distributed systems, prioritizing this over structural choices.

**Key takeaways:**
- Messages should be the primary focus when designing distributed systems
- Message-driven architecture provides conceptual clarity and decoupling
- Relevant to understanding Verraes' philosophy on system organization

---

### [Conway's Law Doesn't Apply to Rigid Designs](https://verraes.net/2022/05/conways-law-vs-rigid-designs/)
**Type:** Article
**Date:** 2022-05
**Tags/Topics:** Conway's Law, System design, Organizational structure, Inverse Conway Manoeuvre, Rigidity

Conway's Law states that system designs mirror organizational communication structures. However, this only holds when system design is flexible. Rigid, ossified designs resist reorganization—restructuring teams won't change a system that's cemented in tight coupling. The post extends Conway's Law: system design mirrors communication structure only to the extent the system's flexibility allows. For greenfield projects, use the Inverse Conway Manoeuvre (restructure teams to achieve desired design); for rigid systems, focus on design work and decoupling instead. Examples show companies whose systems ossified despite reorganizations. Good design requires constant attention to prevent rigidity; theoretical models and clear communication between teams help enable better design choices.

**Key takeaways:**
- Conway's Law applies to flexible systems; rigid systems resist organizational change
- Reorganization alone won't fix ossified designs
- Greenfield projects: use Inverse Conway Manoeuvre; existing systems: invest in design work

---

### [Build for Failure](https://verraes.net/2014/01/build-for-failure/)
**Type:** Article
**Date:** 2014-01
**Tags/Topics:** Resilience, System design, Failure, Erlang philosophy, Lean Startup

Failure is inevitable in all systems. Rather than preventing failure through defensive programming, build systems that detect and recover from failure. Inspired by Erlang's "Let It Crash" philosophy and Lean Startup's "fail fast" mentality, the approach involves writing small amounts of defensive code and more corrective code. Find multiple solution approaches before committing to one; challenge solutions, break them down, and if the chosen one doesn't work, you have alternatives ready. Netflix's Chaos Monkey and similar tools force systems to fail regularly, building resilience. As Pieter Hintjens notes, accepting fallibility and learning to turn it into profit rather than shame is one of the hardest intellectual exercises in any profession.

**Key takeaways:**
- Failure is inevitable; build for recovery, not just prevention
- Write less defensive code; focus on correction and detection
- Find multiple solutions before picking one; be ready to pivot
- Expose and test failures regularly (Chaos Monkey, Chaos Engineering)

---

### [Let It Crash](https://verraes.net/2014/12/erlang-let-it-crash/)
**Type:** Article
**Date:** 2014-12
**Tags/Topics:** Erlang, Concurrency, Message passing, Actor model, Fault tolerance, Resilience

Distilled from Joe Armstrong's "Programming Erlang," this post explains the "Let It Crash" philosophy that drives Erlang's design. Everything is a process; processes interact only via message passing, mirroring the real world where we learn by receiving messages, not through shared memory. In Erlang's large process population, the failure of one process is not catastrophic—build supervision trees to detect crashes and decide how to recover. This leads to clean separation: write code that solves problems and code that fixes problems, kept distinct. Erlang has no mutable data structures, eliminating lock contention and enabling easy parallelization across multicore CPUs. The result is systems expected to run forever, upgradeable while running, and resilient by design.

**Key takeaways:**
- All computation is processes; all interaction is messages
- Individual process failures are not catastrophic; supervision trees manage recovery
- No shared mutable state = no locks = safe parallelization
- Separation between problem-solving code and problem-fixing code is clean and powerful

---

