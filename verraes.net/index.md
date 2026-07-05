# Mathias Verraes — Blog Overview

> Source: [verraes.net](https://verraes.net/)
> Mathias Verraes is a software design consultant, trainer, and writer specialising in Domain-Driven Design, distributed systems, and modelling. He is co-founder of [DDD Belgium](https://www.meetup.com/dddbelgium/) and co-author (with Rebecca Wirfs-Brock) of the book *Design and Reality*.

---

## About the Blog

The blog spans **2011–2026** with approximately **124 posts**. Content falls into three formats:

- **Articles** (~82 posts) — the primary medium; range from short pattern descriptions to deep conceptual essays
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
| 1 | [DDD Foundations & Core Concepts](_synthesis-ddd-foundations.md) | 12 | What DDD is, building blocks, why it matters |
| 2 | [Bounded Contexts & Context Mapping](_synthesis-bounded-contexts.md) | 9 | BC design, splitting domains, context relationships |
| 3 | [Event Sourcing & CQRS](_synthesis-event-sourcing-cqrs.md) | 13 | ES patterns, CQRS architecture, commands |
| 4 | [Messaging & Distributed Systems Patterns](_synthesis-messaging-distributed-systems.md) | 17 | Messaging patterns series, decoupling in distributed systems |
| 5 | [Domain Modelling, Design Heuristics & Theory](_synthesis-modelling-design-heuristics.md) | 27 | Models, metaphors, worldviews, design theory — incl. RWB collaborations |
| 6 | [Event Storming](_synthesis-event-storming.md) | 4 | ES facilitation and modelling techniques |
| 7 | [Software Engineering Practices](_synthesis-software-engineering.md) | 27 | OOP, testing, refactoring, code quality, PHP |
| 8 | [Process, Technical Debt & Learning](_synthesis-process-teams-learning.md) | 15 | Tech debt, estimation, teams, book reviews |

---

## Key Series to Know

Several posts form explicit series — these are especially worth reading in sequence:

**Eventsourcing Patterns** (2019–2023) — 7+ articles covering specific implementation patterns: multi-temporal events, decision tracking, migration events, forgettable payloads, crypto-shredding, and more. → See [Event Sourcing & CQRS](_synthesis-event-sourcing-cqrs.md)

**Patterns for Decoupling in Distributed Systems** (2019) — A dense 7-part series on structural patterns: fat events, summary events, segregated event layers, domain queries, passage-of-time events, completeness guarantees, explicit public events. → See [Messaging & Distributed Systems Patterns](_synthesis-messaging-distributed-systems.md)

**Messaging Patterns** (2019) — 4 articles on message stream patterns: throttling, ephemeral events, change detection, natural language naming. → See [Messaging & Distributed Systems Patterns](_synthesis-messaging-distributed-systems.md)

**Design and Reality** (2021–2023) — A multi-format series (article, presentation, podcast) co-authored with Rebecca Wirfs-Brock, exploring modelling as the creation of novel concepts. → See [Domain Modelling, Design Heuristics & Theory](_synthesis-modelling-design-heuristics.md)

---

## Recurring Themes

- **Models are not truth** — models are tools for thinking; they can be wrong and still be useful
- **Language shapes design** — the words we choose create the system we build (Ubiquitous Language, linguistic DDD)
- **Boundaries are design choices** — Bounded Contexts are not discovered from the domain; they are engineered to manage complexity
- **Heuristics over rules** — Verraes consistently frames advice as heuristics with context, not dogmatic rules
- **Patterns have intent** — a pattern is defined by the problem it solves, not by the implementation

---

## Posts


### bounded-contexts  ·  [synthesis](_synthesis-bounded-contexts.md)

- [Bandwidth and Context Mapping](2014-01-bandwidth-and-context-mapping.md)
- [Context Mapping: Life Expectancy](2015-04-context-mapping-life-expectancy.md)
- [Emergent Boundaries](2017-04-emergent-boundaries.md)
- [Emergent Contexts through Refinement](2019-06-emergent-contexts-through-refinement.md)
- [Tensions when Designing Evolvable Bounded Contexts](2021-04-tensions-when-designing-evolvable-bounded-contexts.md)
- [Splitting a Domain Across Multiple Bounded Contexts](2021-06-split-domain-across-bounded-contexts.md)
- [Bounded Context Podcast](2021-09-bounded-context-podcast.md)
- [Bounded Contexts: Manage the Understandability of Your Systems (DDD Australia)](2023-03-bounded-contexts-manage-understandability-ddd-australia.md)
- [No, Your Domains and Bounded Contexts Don't Map 1 on 1](2025-08-domain-and-bounded-contexts-dont-map-one-on-one.md)

### ddd-foundations  ·  [synthesis](_synthesis-ddd-foundations.md)

- [Ubiquitous Language](2011-05-ubiquitous-language.md)
- [Casting Value Objects to strings](2013-02-2013-02-16-casting-value-objects.md)
- [CRUD is an antipattern](2013-04-crud-is-an-anti-pattern.md)
- [Value Objects and User Interfaces](2013-11-value-objects-and-user-interfaces.md)
- [Domain-Driven Design is Linguistic](2014-01-domain-driven-design-is-linguistic.md)
- [Buzzword-free Bounded Contexts](2014-02-buzzword-free-bounded-contexts.md)
- [Domain-Driven Design: Bounded Contexts, Modelling](2014-02-domain-driven-design-basics.md)
- [Why Domain-Driven Design Matters](2014-05-why-domain-driven-design-matters.md)
- [Domain Events](2014-11-domain-events.md)
- [DDD and Messaging Architectures](2019-05-ddd-msg-arch.md)
- [What is Domain-Driven Design (DDD)](2021-09-what-is-domain-driven-design-ddd.md)
- [Domain-Driven Design Applied](2022-03-domain-driven-design-applied.md)

### event-sourcing-cqrs  ·  [synthesis](_synthesis-event-sourcing-cqrs.md)

- [Decoupling (Symfony2) Forms from Entities](2013-04-decoupling-symfony2-forms-from-entities.md)
- [Fighting Bottlenecks with CQRS](2013-12-fighting-bottlenecks-with-cqrs.md)
- [Practical Event Sourcing](2014-03-practical-event-sourcing.md)
- [A Functional Foundation for CQRS/ES](2014-05-a-functional-foundation-for-cqrs-es.md)
- [Decoupling the Model from the Framework](2014-09-decoupling-the-model-from-the-framework.md)
- [Form, Command, and Model Validation](2015-02-form-command-and-model-validation.md)
- [Eventsourcing Patterns: Crypto-Shredding](2019-05-eventsourcing-patterns-crypto-shredding.md)
- [Eventsourcing Patterns: Decision Tracking](2019-05-eventsourcing-patterns-decision-tracking.md)
- [Eventsourcing Patterns: Forgettable Payloads](2019-05-eventsourcing-patterns-forgettable-payloads.md)
- [Eventsourcing Patterns: Migration Events in a Ghost Context](2019-06-eventsourcing-patterns-migration-events-in-a-ghost-context.md)
- [Eventsourcing: State from Events or Events as State?](2019-08-eventsourcing-state-from-events-or-events-as-state.md)
- [Eventsourcing Patterns: Multi-temporal Events](2022-03-eventsourcing-patterns-multi-temporal-events.md)
- [EventSourcing Testing Patterns](2023-05-eventsourcing-testing-patterns.md)

### event-storming  ·  [synthesis](_synthesis-event-storming.md)

- [Facilitating Event Storming](2013-08-facilitating-event-storming.md)
- [The DDDBE Modellathon](2013-09-dddbe-modellathon.md)
- [Event Storming: on Fake Domains and Happy Paths](2014-07-event-storming-fake-domains-happy-paths.md)
- [Event Storming, Storytelling, Visualisations](2015-03-event-storming-storytelling-visualisations.md)

### messaging-distributed-systems  ·  [synthesis](_synthesis-messaging-distributed-systems.md)

- [Build for Failure](2014-01-build-for-failure.md)
- [Let It Crash](2014-12-erlang-let-it-crash.md)
- [Messaging Flavours](2015-01-messaging-flavours.md)
- [Messages Over Structure](2017-04-messages-over-structure.md)
- [Messaging Patterns: Change Detection Events](2019-05-messaging-patterns-change-detection-events.md)
- [Messaging Patterns: Ephemeral Events](2019-05-messaging-patterns-ephemeral-events.md)
- [Messaging Patterns: Throttling](2019-05-messaging-patterns-throttling.md)
- [Patterns for Decoupling in Distributed Systems: Completeness Guarantee](2019-05-patterns-for-decoupling-distsys-completeness-guarantee.md)
- [Patterns for Decoupling in Distributed Systems: Domain Query](2019-05-patterns-for-decoupling-distsys-domain-query.md)
- [Patterns for Decoupling in Distributed Systems: Explicit Public Events](2019-05-patterns-for-decoupling-distsys-explicit-public-events.md)
- [Patterns for Decoupling in Distributed Systems: Fat Event](2019-05-patterns-for-decoupling-distsys-fat-event.md)
- [Patterns for Decoupling in Distributed Systems: Passage of Time Event](2019-05-patterns-for-decoupling-distsys-passage-of-time-event.md)
- [Patterns for Decoupling in Distributed Systems: Segregated Event Layers](2019-05-patterns-for-decoupling-distsys-segregated-event-layers.md)
- [Patterns for Decoupling in Distributed Systems: Summary Event](2019-05-patterns-for-decoupling-distsys-summary-event.md)
- [Messaging Patterns: Natural Language Message Names](2019-06-messaging-patterns-natural-language-message-names.md)
- [Conway's Law Doesn't Apply to Rigid Designs](2022-05-conways-law-vs-rigid-designs.md)
- [Two Hard Problems with Distributed Systems](2025-08-two-hard-problems-with-distributed-systems.md)

### modelling-design-heuristics  ·  [synthesis](_synthesis-modelling-design-heuristics.md)

- [DRY is about Knowledge](2014-08-dry-is-about-knowledge.md)
- [Resolving Feature Envy in the Domain](2014-08-resolving-feature-envy-in-the-domain.md)
- [Objects as Contracts for Behaviour](2014-09-objects-as-contracts-for-behaviour.md)
- ["Software design is just theory"](2014-10-software-design-is-just-theory.md)
- [Modelling Heuristics](2014-11-modelling-heuristics.md)
- [Towards Modelling Processes](2015-05-towards-modelling-processes.md)
- [Type Safety and Money](2016-02-type-safety-and-money.md)
- [Designed Stickiness](2016-05-designed-stickiness.md)
- [On Being Explicit](2016-11-on-being-explicit.md)
- [Design Heuristics](2018-04-design-heuristics.md)
- [Temporal Modelling](2019-06-talk-temporal-modelling.md)
- [Patterns Are Not Defined by Their Implementation](2019-07-patterns-are-not-defined-by-their-implementation.md)
- [The Legacy Mirror Heuristic](2021-03-heuristic-legacy-mirror.md)
- [Simple Models, Scaffolding, Enabling Constraints](2021-04-simple-models-scaffolding-enabling-constraints.md)
- [The "It's Just Like..." Heuristic](2021-05-its-just-like-heuristic.md)
- [Design and Reality](2021-09-design-and-reality.md)
- [Models and Metaphors](2021-12-models-and-metaphors.md)
- [Design & Reality (VirtualDDD presentation)](2022-02-design-and-reality-virtualddd.md)
- [Loss Aversion Heuristics](2022-02-loss-aversion-heuristics.md)
- [Critically Engaging With Models](2022-09-critically-engaging-with-models.md)
- [Critically Engaging With Models (DDD Europe Keynote)](2023-01-critically-engaging-with-models.md)
- [Design and Reality (Leanpub Podcast)](2023-01-leanpub-podcast-design-reality.md)
- [Software Design for Startups and Scaleups](2023-02-software-design-scaleups-startups-md.md)
- [From Music to Languages and Models (DevJourney Podcast)](2023-05-devjourney-podcast.md)
- [Surfacing Worldviews in Design](2023-07-surfacing-worldviews-in-design.md)
- [Critical Software Redesign](2024-01-critical-software-redesign.md)
- [Software Design in the Agentic Age: Place Your Bets](2026-07-software-design-in-the-agentic-age.md)

### process-teams-learning  ·  [synthesis](_synthesis-process-teams-learning.md)

- [How to Read More Books](2012-12-2012-12-23-how-to-read-more-books.md)
- [Managed Technical Debt](2013-07-managed-technical-debt.md)
- [Switch - How to Change Things When Change Is Hard](2013-08-chip-dan-heath-switch.md)
- [Systemantics - The Systems Bible](2013-08-john-gall-systemantics-the-systems-bible.md)
- [The Henry Ford Fallacy](2014-01-henry-ford-fallacy.md)
- [Small Uncontrolled Experiments](2014-03-small-controlled-experiments.md)
- [The Cost of Estimation](2014-06-cost-of-estimation.md)
- [Information Overload](2014-06-information-overload.md)
- [Managed Technical Debt (revisited)](2014-06-managed-technical-debt-revisited.md)
- [Sterile Estimation](2014-08-sterile-estimation.md)
- [Small Uncontrolled Experiments (revisited)](2014-10-small-controlled-experiments-revisited.md)
- [The Repair/Replace Heuristic for Legacy Software](2016-04-repair-replace-heuristic-for-legacy-software.md)
- [Lightning Talks](2016-05-lightning-talks.md)
- [The Wall of Technical Debt](2020-01-wall-of-technical-debt.md)
- [Submitting talks to a tech conference Call for Papers](2025-06-submitting-talks-to-conference-cfps.md)

### software-engineering  ·  [synthesis](_synthesis-software-engineering.md)

- [Accessing Private Properties from Other Instances](2011-03-accessing-private-properties-from-other-instances.md)
- [Interface Discovery with PHPUnit's Mock Objects](2011-03-interface-discovery-with-phpunit-s-mock-objects.md)
- [Keep Your Controllers Thin with Doctrine2](2011-03-keep-your-controllers-thin-with-doctrine2.md)
- [Random Thoughts on Using Git](2011-03-random-thoughts-on-using-git.md)
- [Beautiful Code](2011-04-beautiful-code.md)
- [Representing Money in PHP, Fowler-style](2011-04-representing-money-in-php-fowler-style.md)
- [Lazy Loading in PHP with Closures](2011-05-lazy-loading-in-php-with-closures.md)
- [Coping with Change in Software Development](2011-07-coping-with-change-in-software-development.md)
- [Code Folder Structure](2011-10-code-folder-structure.md)
- [Unbreakable Domain Models](2013-06-unbreakable-domain-models.md)
- [Antifragile - Things That Gain from Disorder](2013-08-antifragile-things-that-gain-from-disorder.md)
- [Extract Till You Drop](2013-09-extract-till-you-drop.md)
- [Sensible Interfaces](2013-09-sensible-interfaces.md)
- [Pre-merge Code Reviews](2013-10-pre-merge-code-reviews.md)
- [Verbs in Class Names](2013-10-verbs-in-class-names.md)
- [Religiously RESTful](2014-03-religiously-restful.md)
- [Final Classes: Open for Extension, Closed for Inheritance](2014-05-final-classes-open-for-extension-closed-for-inheritance.md)
- [Named Constructors in PHP](2014-06-named-constructors-in-php.md)
- [When to Use Static Methods in PHP](2014-06-when-to-use-static-methods-in-php.md)
- [Higher Order Programming](2014-11-higher-order-programming.md)
- [Object Reorientation](2014-11-object-reorientation.md)
- [How Much Testing is Too Much?](2014-12-how-much-testing-is-too-much.md)
- [Economy of Tests](2015-01-economy-of-tests.md)
- [Code Reviews and Blame Culture](2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](2016-04-property-based-testing.md)
- [Parser Combinators (Full Stack Europe)](2023-04-parser-combinators-full-stack-europe.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
