# Mathias Verraes — Blog Overview

> Source: [verraes.net](https://verraes.net/)
> Mathias Verraes is a software design consultant, trainer, and writer specialising in Domain-Driven Design, distributed systems, and modelling. He is co-founder of [DDD Belgium](https://www.meetup.com/dddbelgium/) and co-author (with Rebecca Wirfs-Brock) of the book *Design and Reality*.

---

## About the Blog

The blog spans **2011–2025** with approximately **122 posts**. Content falls into three formats:

- **Articles** (~80 posts) — the primary medium; range from short pattern descriptions to deep conceptual essays
- **Presentations** (~30 posts) — slides and/or video from conference talks; cover the same themes as articles, often in distilled form
- **Podcasts** (~10 posts) — interview appearances and panel discussions

A notable collaboration thread runs through the blog: from 2021 onward, several pieces are co-authored with **Rebecca Wirfs-Brock** (of *Object Design* and Responsibility-Driven Design fame). These tend to be the most theoretically ambitious articles, exploring design philosophy, models, and worldviews.

The blog has two distinct eras:
- **2011–2013** — Early, more technical articles; PHP-heavy, OOP-focused, community-building posts
- **2014–2025** — Mature DDD writing; deep pattern series, conceptual frameworks, distributed systems, and design theory

---

## Content Clusters

The blog content organises into **8 thematic clusters**:

| # | Cluster | Posts | Core theme |
|---|---------|-------|------------|
| 1 | [DDD Foundations & Core Concepts](ddd-foundations.md) | 12 | What DDD is, building blocks, why it matters |
| 2 | [Bounded Contexts & Context Mapping](bounded-contexts.md) | 9 | BC design, splitting domains, context relationships |
| 3 | [Event Sourcing & CQRS](event-sourcing-cqrs.md) | 13 | ES patterns, CQRS architecture, commands |
| 4 | [Messaging & Distributed Systems Patterns](messaging-distributed-systems.md) | 17 | Messaging patterns series, decoupling in distributed systems |
| 5 | [Domain Modelling, Design Heuristics & Theory](modelling-design-heuristics.md) | 26 | Models, metaphors, worldviews, design theory — incl. RWB collaborations |
| 6 | [Event Storming](event-storming.md) | 4 | ES facilitation and modelling techniques |
| 7 | [Software Engineering Practices](software-engineering.md) | 27 | OOP, testing, refactoring, code quality, PHP |
| 8 | [Process, Technical Debt & Learning](process-teams-learning.md) | 14 | Tech debt, estimation, teams, book reviews |

---

## Key Series to Know

Several posts form explicit series — these are especially worth reading in sequence:

**Eventsourcing Patterns** (2019–2023) — 7+ articles covering specific implementation patterns: multi-temporal events, decision tracking, migration events, forgettable payloads, crypto-shredding, and more. → See [Event Sourcing & CQRS](event-sourcing-cqrs.md)

**Patterns for Decoupling in Distributed Systems** (2019) — A dense 7-part series on structural patterns: fat events, summary events, segregated event layers, domain queries, passage-of-time events, completeness guarantees, explicit public events. → See [Messaging & Distributed Systems Patterns](messaging-distributed-systems.md)

**Messaging Patterns** (2019) — 4 articles on message stream patterns: throttling, ephemeral events, change detection, natural language naming. → See [Messaging & Distributed Systems Patterns](messaging-distributed-systems.md)

**Design and Reality** (2021–2023) — A multi-format series (article, presentation, podcast) co-authored with Rebecca Wirfs-Brock, exploring modelling as the creation of novel concepts. → See [Domain Modelling, Design Heuristics & Theory](modelling-design-heuristics.md)

---

## Recurring Themes

- **Models are not truth** — models are tools for thinking; they can be wrong and still be useful
- **Language shapes design** — the words we choose create the system we build (Ubiquitous Language, linguistic DDD)
- **Boundaries are design choices** — Bounded Contexts are not discovered from the domain; they are engineered to manage complexity
- **Heuristics over rules** — Verraes consistently frames advice as heuristics with context, not dogmatic rules
- **Patterns have intent** — a pattern is defined by the problem it solves, not by the implementation
