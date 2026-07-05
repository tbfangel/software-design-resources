---
type: synthesis
title: "DDD Foundations & Core Concepts"
description: "This cluster explores the fundamental philosophy, principles, and core building blocks of Domain-Driven Design."
tags: ["ddd-foundations"]
timestamp: 2026-07-05
---
# DDD Foundations & Core Concepts

> This cluster explores the fundamental philosophy, principles, and core building blocks of Domain-Driven Design.

## Key Insights

**DDD's central insight is linguistic, not structural.** The most important shift it demands is from thinking about data and state to thinking about behaviour, intent, and shared language. Code that reads like the business speaks — using domain verbs like `pay()` and `hire()` rather than `setStatus()` — is not a cosmetic preference; it's what keeps models aligned with reality as the business evolves.

**Ubiquitous Language is the foundation everything else rests on.** Without it, developers and domain experts are constantly translating between worlds, and that translation is where complexity and bugs accumulate. Establishing shared vocabulary is not a one-time exercise — it's an ongoing collaboration that deepens over time.

**CRUD is the default enemy.** Treating applications as thin layers over databases — with generic create/update/delete operations — obscures what the business actually does. Replacing setters with intention-revealing methods and grouping related values into Value Objects turns code into a faithful mirror of domain behaviour.

**Behaviour is primary; state and data are its side effects.** This idea underpins Domain Events (which record what happened, not what exists) and points toward Event Sourcing (which persists the events themselves rather than snapshots). The path taken to reach a state carries meaning that a final-state snapshot loses.

**DDD is a discipline, not a checklist.** It provides principles — embrace complexity, separate models in contexts, evolve them continuously — rather than prescriptions. Its longevity across paradigm shifts (OOP, FP, reactive, CQRS) suggests it addresses something fundamental about how complex software needs to be thought about.

---

## Related
- [What is Domain-Driven Design (DDD)](/verraes.net/2021-09-what-is-domain-driven-design-ddd.md)
- [Domain-Driven Design is Linguistic](/verraes.net/2014-01-domain-driven-design-is-linguistic.md)
- [Why Domain-Driven Design Matters](/verraes.net/2014-05-why-domain-driven-design-matters.md)
- [Domain-Driven Design: Bounded Contexts, Modelling](/verraes.net/2014-02-domain-driven-design-basics.md)
- [Ubiquitous Language](/verraes.net/2011-05-ubiquitous-language.md)
- [CRUD is an antipattern](/verraes.net/2013-04-crud-is-an-anti-pattern.md)
- [Domain Events](/verraes.net/2014-11-domain-events.md)
- [Value Objects and User Interfaces](/verraes.net/2013-11-value-objects-and-user-interfaces.md)
- [Casting Value Objects to strings](/verraes.net/2013-02-2013-02-16-casting-value-objects.md)
- [Buzzword-free Bounded Contexts](/verraes.net/2014-02-buzzword-free-bounded-contexts.md)
- [DDD and Messaging Architectures](/verraes.net/2019-05-ddd-msg-arch.md)
- [Domain-Driven Design Applied](/verraes.net/2022-03-domain-driven-design-applied.md)
