# Event Sourcing & CQRS

> Part of the [Mathias Verraes blog overview](overview.md)

This cluster explores Event Sourcing and Command Query Responsibility Segregation architectures through practical patterns, testing strategies, and theoretical foundations. The posts cover essential patterns for implementing event-sourced systems (testing, temporal events, decision tracking, sensitive data handling), the conceptual distinctions between different eventsourcing approaches, and how CQRS enables cleaner separation of read and write models. Together they form a comprehensive guide to understanding and implementing these architectural styles in domain-driven systems.

## Key Insights

**"State from events" and "events as state" are fundamentally different things.** Projecting an event stream into a read model is a common, useful pattern — but it's not Event Sourcing. True Event Sourcing means the event history *is* the source of truth, and new events are constrained by that history. Conflating the two leads to architectural confusion.

**CQRS is best understood as a set of composable pure functions.** Protection (history + command → events), Interpretation (events → state), Intention (state → command), and Automation (events → command) describe the four building blocks. Framing it this way enables deterministic reasoning, independent testing, and clearer responsibilities for each component.

**Test at the domain abstraction level, using the ubiquitous language.** Given-When-Then tests that operate on domain events and commands — not on internal state — are more durable and more meaningful. Tests should change only when the domain changes, not when implementation details change.

**Event-sourced systems create new obligations around history.** Decisions recorded at a point in time must be preserved even if the rules change — otherwise recalculation lies about the past. Sensitive data needs special handling (crypto-shredding or forgettable payloads) since the event log is immutable. Multi-temporal events must distinguish when something happened from when it was recorded.

**Legacy migration requires honesty about the past.** Rather than force-fitting legacy data into a new domain model, treat the legacy system as its own bounded context with its own language. Migration events use that legacy language explicitly, and the "ghost context" remains a first-class concept even after the implementation is gone.

---

### EventSourcing Testing Patterns
**Type:** Article
**Date:** 2023-05
**Tags/Topics:** testing patterns, event sourcing, command handlers, projections, process managers, domain-driven design

This article documents common testing patterns for eventsourced applications using Given-When-Then scenarios at the domain abstraction level. Testing command handlers involves verifying that given a history of events, when a command is received, then specific events are produced (or nothing, or an exception). Projections are tested by verifying that given events, when a query is asked, then the correct response is returned. Process managers are tested to verify they listen to events and produce appropriate outcomes—whether new events, commands, or I/O side effects. The post argues against testing projection state as an anti-pattern in domain-level testing, instead advocating for query-based tests that preserve API contracts while allowing implementation flexibility.

**Key takeaways:**
- Tests should operate at the domain abstraction level using Ubiquitous Language and follow Given-When-Then patterns
- Command handlers, projections, and process managers each have distinct test scenarios
- Query-based projection tests are preferable to state-based tests, as they decouple implementation details from the test contract
- All tests should change if and only if the domain changes, not when internal implementation details change

---

### Eventsourcing Patterns: Multi-temporal Events
**Type:** Article
**Date:** 2022-03
**Tags/Topics:** temporal modeling, event payload, domain events, timestamps, GDPR

Domain events typically carry a single timestamp for when they were recorded in the eventstore, but the actual time an event occurred may differ from when it was captured. The multi-temporal events pattern distinguishes between when something happened and when it was recorded by adding domain-specific timestamp properties to event payloads. For example, a bank transaction event should track both when the transaction occurred and when the statement was received. This approach decouples infrastructure concerns (recording time) from domain concerns (occurrence time), improves consumer independence, and enables evolution as domain understanding deepens.

**Key takeaways:**
- Separate occurrence time from recording time by including domain-specific timestamp properties in event payloads
- Use meaningful, domain-specific property names rather than relying on metadata timestamps
- Even events without special timestamping requirements benefit from this pattern for consistency and decoupling
- This pattern facilitates domain evolution without requiring consumers to change their reliance on metadata

---

### Eventsourcing: State from Events or Events as State?
**Type:** Article
**Date:** 2019-08
**Tags/Topics:** event sourcing definition, projections, stream processing, aggregates, constraints

This article clarifies the distinction between two related but different concepts. "State from Events" means taking an existing event stream (regardless of origin) and projecting it into state—this is what projections, real-time analytics, and stream processing do, and no new events are added. "Events as State" means events are the single source of truth; new events are constrained by business rules that depend on previous events as input. The post proposes a precise definition of eventsourcing: a system is eventsourced when the single source of truth is a persisted history of the system's events, and that history is taken into account for enforcing constraints on new events. This distinction matters because many terms already exist for the first concept, while the second truly represents eventsourcing.

**Key takeaways:**
- Projections represent "state from events," which is a common pattern but different from eventsourcing
- True eventsourcing requires events as the single source of truth with constraints enforced on new events
- The distinction helps prevent confusion when designing systems and applying eventsourcing patterns
- Understanding this conceptual boundary clarifies what architectural choices are appropriate for different problems

---

### Eventsourcing Patterns: Migration Events in a Ghost Context
**Type:** Article
**Date:** 2019-06
**Tags/Topics:** legacy migration, bounded contexts, ghost context, conformist pattern, domain modeling

When replacing a legacy system with an eventsourced one, there's typically insufficient historical data in the legacy system to reconstruct the real history of domain events. Rather than force-fitting legacy data into the new domain model (which results in lying about the past) or maintaining hybrid persistence, the solution is to treat the legacy system as its own domain and use Migration Events that explicitly use the legacy system's ubiquitous language. A legacy customer import becomes LegacyCustomerWasImported, not a translated domain event. The legacy system's model can then be treated as a "Ghost Context"—a bounded context with language and internal consistency but no active implementation, existing only in traces within other bounded contexts.

**Key takeaways:**
- Migration events use the legacy system's ubiquitous language to preserve historical accuracy about what actually happened
- Treating legacy systems as bounded contexts enables higher-order reasoning about relationships between contexts
- Ghost Contexts allow legacy models to remain first-class concepts in the design even after the implementation disappears
- This approach reveals complexity rather than hiding it, making the system easier to understand for those familiar with the legacy component

---

### Eventsourcing Patterns: Decision Tracking
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** decision tracking, business rules, model evolution, event store, historical accuracy

When a consumer applies business logic to events and makes a decision (whether to award a free hat, trigger an alert, etc.), the question arises: should that decision be stored as an event? While the decision is technically redundant—it can be recalculated from the input events—not storing it creates a problem when business rules change. Recalculating with new rules produces different outcomes than the original decision, making the system lie about its own history. Decision Tracking solves this by persisting decision events, preserving the historical record of what was actually decided at the time, even if that decision was wrong. A related pattern, Model Change Tracking, records when the model or rules themselves change, enabling accurate recalculation using the version of logic that was active at the time.

**Key takeaways:**
- Storing decision events preserves the historical record and protects against rule changes invalidating past decisions
- Without decision tracking, recalculating past decisions with new rules creates inaccuracy about the system's history
- Decision tracking is worth the effort when the decision has long-term consequences or affects business-critical processes
- Model Change Tracking tracks when rules themselves change, enabling correct historical recalculation

---

### Eventsourcing Patterns: Crypto-Shredding
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** sensitive data, encryption, GDPR, compliance, key management

Crypto-Shredding enables deletion of sensitive data in an immutable eventstore by encrypting sensitive event attributes with a key per resource, then deleting only the encryption keys. When sensitive information must be erased (such as under GDPR), the key is thrown away, rendering the encrypted data unreadable without modifying or deleting the event itself. This approach respects the append-only nature of eventstores while satisfying data deletion requirements. The pattern works best when consumers consistently store sensitive payloads using encryption with the same key management, and can withstand the legal interpretation of whether crypto-shredded data constitutes adequate deletion.

**Key takeaways:**
- Encrypt sensitive attributes with a unique key per resource, allowing selective key deletion without event modification
- Consumers must reliably encrypt sensitive data locally and respect key deletion notifications
- The pattern requires robust key management practices and careful consideration of legal implications
- Crypto-Shredding is effective for certain data types but requires understanding of encryption and cryptographic best practices

---

### Eventsourcing Patterns: Forgettable Payloads
**Type:** Article
**Date:** 2019-05
**Tags/Topics:** sensitive data, payload storage, GDPR, access control, data deletion

The Forgettable Payloads pattern removes sensitive information from event definitions and stores it in a separate database, with the event containing only a reference or URL. Consumers requiring sensitive data query the payload database, while the eventstore remains immutable. When deletion is requested, only the payload is removed; the event record remains intact. The payload can be deleted or replaced with fake data. This pattern breaks the concept of the eventstore as a single source of truth and introduces coupling since consumers must query a separate database. A critical weakness is that sensitive data must also be deleted from consumer systems that have cached it, requiring consumers to listen for deletion events and clean up locally.

**Key takeaways:**
- Separate sensitive payloads into a distinct store with controlled access, while keeping event metadata immutable
- This pattern enables GDPR compliance but sacrifices the single-source-of-truth property
- Consumers must never cache sensitive payloads locally, or implement listeners for deletion events to maintain consistency
- Associations and relationships between information can still enable identification even when direct sensitive data is deleted

---

### A Functional Foundation for CQRS/ES
**Type:** Article
**Date:** 2014-05
**Tags/Topics:** functional programming, CQRS, command-query separation, pure functions, architecture

This article describes CQRS architecture as a set of composable functions grounded in functional programming concepts. The core architecture consists of four conceptual functions. Protection—f(history, command) → events—applies business rules using event history to decide command outcomes. Interpretation—f(events) → state—is what projectors do, deriving read models from events. Intention—f(state) → command—models user interface translating displayed state into user commands. Automation—f(events) → command—is what process managers do, automatically triggering commands based on events. Pure functions enable deterministic reasoning and the possibility of distributed processing. The post also describes queries as messages—f(history, query) → state—and extends the model to subscriptions for streaming events.

**Key takeaways:**
- CQRS can be understood as a set of pure functions: protection, interpretation, intention, and automation
- Pure functions enable deterministic behavior, independent testing, and potential for distributed processing
- Aggregates protect business rules by refusing commands that violate constraints
- Projections provide independent interpretations of event history, enabling flexibility when domain understanding evolves

---

### Fighting Bottlenecks with CQRS
**Type:** Presentation
**Date:** 2013-12
**Tags/Topics:** CQRS, architecture, performance, scalability, separation of concerns

A presentation on Command Query Responsibility Segregation at the first ResearchGate Developer Day in Berlin. The talk explains how CQRS enables separate optimization of read and write models, addressing architectural bottlenecks. By splitting a single object into command (write) and query (read) responsibilities, systems gain flexibility to denormalize and independently tune each side. The presentation uses visual circular representations to illustrate CQRS relationships and benefits, making the concepts accessible to a broad audience.

**Key takeaways:**
- CQRS allows independent optimization of read and write models, eliminating bottlenecks from monolithic architectures
- Separating commands from queries enables clearer reasoning about each side of the system
- The architecture facilitates scaling read models independently through denormalization and caching strategies

---

### Practical Event Sourcing
**Type:** Presentation
**Date:** 2014-03
**Tags/Topics:** event sourcing, practical implementation, PHP, domain events, architecture

A presentation with video and slides demonstrating practical event sourcing in PHP. The talk covers how to build event-sourced domain models using concrete code examples from systems shipped in production. Rather than focusing on theory, it shows how event sourcing is "quite simple, elegant, and powerful" by replaying domain events to restore object state. The presentation aims to demystify event sourcing for practitioners and provide hands-on understanding of implementation.

**Key takeaways:**
- Event sourcing involves storing domain events and replaying them to restore object state
- Implementation in production systems is practical and elegant when properly designed
- Code examples demonstrate how to structure event-sourced models effectively
- Event sourcing enables rich historical tracking and powerful domain modeling

---

### Form, Command, and Model Validation
**Type:** Article
**Date:** 2015-02
**Tags/Topics:** validation layers, separation of concerns, commands, forms, domain models

This article distinguishes three completely independent validation concerns: form validation (UX concern), command validation (message concern), and model validation (business rule concern). Form validation is for user experience—catching the most common mistakes using client-side validation, with optional server-side checks for stateful data like username uniqueness. Command validation ensures the message itself is well-formed (does "birthday" look like a date?), using Value Objects for consistency. Model validation protects the model's invariants and business rules, relying on validated commands to be well-formed. Separating these concerns allows frameworks to remain orthogonal to domain models, avoiding the trap where form components corrupt domain design. This enables transport of domain logic across different UIs or APIs without modification.

**Key takeaways:**
- Form validation is a UX concern; command validation is a message contract concern; model validation protects business rules
- Each layer serves different purposes and should be optimized independently
- Domain models should be decoupled from framework form components and validation systems
- Commands use Value Objects to guarantee their own consistency before reaching the model

---

### Decoupling the Model from the Framework
**Type:** Presentation
**Date:** 2014-09
**Tags/Topics:** framework independence, task-based UI, commands, domain modeling, DDD

A presentation demonstrating how to decouple domain models from web frameworks like Symfony. When frameworks are designed around CRUD operations and automatic form-to-entity data mapping, they force domain models to expose setters and constructor flexibility that violate domain invariants. The solution uses Commands as an explicit API between the UI and domain—the form produces a HireEmployeeCommand or PromoteEmployeeCommand rather than trying to map directly to domain methods. Commands function as DTOs that can be used equally well for forms, REST APIs, or other clients, while domain models remain pure and independent of framework concerns.

**Key takeaways:**
- Commands serve as an explicit API that decouples domain models from UI frameworks
- Task-based UI thinking (hire, promote) is more domain-aligned than CRUD thinking (create, edit)
- Domain models should require Commands to call methods, not rely on setters and automatic data mapping
- This approach enables true model independence and transport across multiple client types

---

### Decoupling (Symfony2) Forms from Entities
**Type:** Article
**Date:** 2013-04
**Tags/Topics:** forms, entities, CRUD, commands, Symfony, encapsulation

This article demonstrates how form libraries' CRUD-oriented design violates domain model boundaries by expecting setters and flexible constructors. The solution uses the Gang of Four Command pattern to create explicit command objects (HireEmployeeCommand, PromoteEmployeeCommand) that match the semantic operations of the domain. Forms bind to Commands rather than Entities, preserving domain invariants—employees are "hired" (not "created"), and "promoted" (not edited). The Command becomes a DTO that can represent form input and can be used to invoke domain methods without setters or reflection. A CommandHandler translates the command into domain method invocations, separating concerns between form handling and domain logic.

**Key takeaways:**
- Commands decouple forms from domain entities, preserving domain invariants and encapsulation
- Task-based operations (hire, promote) map naturally to explicit Command objects
- Forms should not directly manipulate domain entities or expect specific setter conventions
- CommandHandlers translate Commands into domain method invocations, maintaining separation of concerns

---
