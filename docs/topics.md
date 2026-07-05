---
type: reference
title: "Canonical Topic Vocabulary"
description: "The controlled vocabulary of topic tags for this bundle — every card's `tags` must be drawn from this list."
timestamp: 2026-07-05
---

# Canonical Topic Vocabulary

> The controlled vocabulary of topic tags for this bundle — every card's `tags` must be drawn from this list.

`tags` are the finer-grained topic layer beneath a card's `cluster` (see [`schema.md`](schema.md)).
They are validated by `scripts/validate_okf.py`: a card carrying a tag not listed here fails CI.
To add a topic, add its kebab-case slug under the most fitting heading below in the same PR that uses it.

## Domain-Driven Design & Modelling

- domain-driven-design
- bounded-contexts
- context-mapping
- ubiquitous-language
- strategic-design
- domain-modelling
- mental-models
- domain-logic
- domain-experts
- aggregates
- entities
- value-objects
- domain-events
- eventstorming
- event-modelling
- naming
- intentionality
- explicit-vs-implicit
- encapsulation
- immutability

## Event Sourcing, CQRS & Messaging

- event-sourcing
- event-store
- cqrs
- command-query-separation
- read-models
- projections
- event-design
- events
- messaging
- message-brokers
- message-processing
- event-driven-architecture
- stream-processing
- kafka
- sagas
- orchestration
- idempotency
- eventual-consistency
- schema-evolution
- durable-execution

## Distributed Systems & Data

- distributed-systems
- distributed-locking
- optimistic-concurrency
- race-conditions
- actor-model
- replication
- scalability
- resilience
- multi-tenancy
- databases
- crud
- postgresql
- sql
- orm
- redis
- cloud-storage
- storage
- write-ahead-log
- crash-recovery
- state-machines
- state-management
- session-management
- microservices
- serverless
- service-oriented-architecture
- modular-monolith
- caching
- decentralization

## Web

- web-development
- web-frameworks
- web-standards
- frontend
- javascript
- typescript
- nodejs
- template-engines
- static-site-generators
- webassembly
- ux
- visualization
- json
- http
- rest
- websockets

## Observability, Security & Operations

- observability
- opentelemetry
- metrics
- deployment
- continuous-integration
- workflows
- security
- authentication
- data-privacy
- gdpr
- supply-chain-security
- auditing
- cost-optimization
- sandboxing
- performance

## Python

- python
- python-packaging
- uv
- wsgi
- unicode
- date-time
- memory-management

## Rust

- rust

## Programming Languages & Concurrency

- programming
- language-design
- compilers
- type-systems
- functional-programming
- object-oriented-design
- concurrency
- async-programming
- error-handling
- debugging
- php
- go
- git
- github
- version-control

## Software Design & Architecture

- software-design
- software-architecture
- design-philosophy
- design-principles
- design-patterns
- api-design
- library-design
- separation-of-concerns
- coupling
- modularity
- dependencies
- simplicity
- complexity
- refactoring
- technical-debt
- anti-patterns
- code-quality
- code-review
- maintainability
- duplication
- backwards-compatibility
- versioning
- heuristics
- constraints
- pragmatism
- craftsmanship
- system-design
- platform-engineering
- project-organization
- repositories
- best-practices
- migration
- legacy-systems
- tool-design
- tooling
- developer-experience

## AI & Agents

- ai
- ai-agents
- ai-adoption
- ai-ethics
- ai-generated-code
- agentic-coding
- agent-architecture
- llms
- mcp
- claude-code

## Testing

- testing
- tdd
- bdd
- property-based-testing
- specifications

## Open Source & Business

- open-source
- open-source-licensing
- open-source-funding
- open-source-sustainability
- open-source-business
- community
- geopolitics
- vendor-lock-in
- saas
- startups
- product-management

## Team, Process & People

- agile
- lean
- planning
- estimation
- continuous-improvement
- facilitation
- collaboration
- communication
- coaching
- public-speaking
- storytelling
- documentation
- knowledge-sharing
- learning
- dreyfus-model
- career
- burnout
- productivity
- leadership
- organizational-design
- organizational-change
- organizational-culture
- team-dynamics
- team-topologies
- conways-law
- systems-thinking
- decision-making
- trade-offs
- problem-solving
- critical-thinking
- cognitive-biases
- uncertainty
- risk-management
- accountability
- trust
- technology-adoption
- requirements
- ownership
