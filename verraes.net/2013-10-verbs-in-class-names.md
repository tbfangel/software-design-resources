---
type: article
title: "Verbs in Class Names"
description: "Classes with verbs in their names express concepts that don't naturally map to nouns."
resource: https://verraes.net/2013/10/verbs-in-class-names/
tags: ["software-engineering", "naming", "domain-language", "messages", "commands", "events", "specifications"]
published: 2013-10
timestamp: 2026-07-05
---
# Verbs in Class Names

> Classes with verbs in their names express concepts that don't naturally map to nouns.

## Key Facts
- Verbs in class names express intent and natural language more clearly than generic nouns
- Commands, events, and specifications benefit from verb-based naming
- Building expressive APIs that read like sentences improves domain communication
- Developers and business stakeholders can discuss code without translation

## Summary
Classes with verbs in their names express concepts that don't naturally map to nouns. Domain commands and events use imperative and past-tense verbs (AttackEnemy, EnemyWasDefeated) to stay close to the business language and distinguish intent. Specifications model business rules as questions (CustomerIsPremium, OrderIsReadyForShipment). Domain exceptions use past-tense names (OrderShipmentHasFailed, BankAccountWasOverdrawn) to mirror events and emphasize what went wrong. Interfaces combining verbs and roles (HasPermissions, DomainCommand) read as natural English sentences.

## Links
- [Source](https://verraes.net/2013/10/verbs-in-class-names/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
