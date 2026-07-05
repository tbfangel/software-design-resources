---
type: synthesis
title: "Software Engineering Practices"
description: "Object-oriented principles, testing strategies, code quality, refactoring techniques, and PHP-specific patterns form the foundation of this cluster."
tags: ["software-engineering"]
timestamp: 2026-07-05
---
# Software Engineering Practices

> Object-oriented principles, testing strategies, code quality, refactoring techniques, and PHP-specific patterns form the foundation of this cluster.

## Key Insights

**Testing is a design tool, not just a quality check.** Writing tests before implementations — mocking dependencies first, discovering interfaces from the caller's perspective — produces more minimal, fitting APIs than building something and cutting it to size afterwards. The discipline of testability pushes designs toward better separation and clearer contracts.

**Test economics matter as much as test coverage.** Unit tests cost more discipline upfront but less maintenance over time. System tests are easy to add but grow brittle and slow. The Test Pyramid applies to greenfield projects; brownfield projects should start with system tests and migrate downward as the codebase improves. Delete slow, brittle, or redundant tests — maintaining them is waste.

**Naming is domain communication.** Class names with verbs (`HireEmployee`, `EnemyWasDefeated`), interfaces that read as English sentences (`HasPermissions`, `CastsToJson`), repositories that speak the ubiquitous language (`findAllFixedBugs()` not `findBy(array('status' => 'fixed'))`) — these are not cosmetic choices. They determine whether code can be discussed with domain experts without translation.

**Composition beats inheritance; behaviour beats data.** Final classes, constructor injection, and higher-order functions produce more flexible, testable code than inheritance hierarchies. Objects are contracts for behaviour, not containers for data. Value Objects encode domain constraints as types, making invalid states unrepresentable at compile time rather than runtime.

**Mastery comes from embracing change, not avoiding it.** Fearless refactoring, atomic commits, collaborative code review, and deliberate practice with techniques outside your comfort zone compound over time into genuinely adaptive teams. Shielding developers from changing requirements prevents them from developing the most critical skill in the discipline.

---

## Related
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
- [Economy of Tests](/verraes.net/2015-01-economy-of-tests.md)
- [How Much Testing is Too Much?](/verraes.net/2014-12-how-much-testing-is-too-much.md)
- [Pre-merge Code Reviews](/verraes.net/2013-10-pre-merge-code-reviews.md)
- [Extract Till You Drop](/verraes.net/2013-09-extract-till-you-drop.md)
- [Sensible Interfaces](/verraes.net/2013-09-sensible-interfaces.md)
- [Verbs in Class Names](/verraes.net/2013-10-verbs-in-class-names.md)
- [Final Classes: Open for Extension, Closed for Inheritance](/verraes.net/2014-05-final-classes-open-for-extension-closed-for-inheritance.md)
- [Higher Order Programming](/verraes.net/2014-11-higher-order-programming.md)
- [When to Use Static Methods in PHP](/verraes.net/2014-06-when-to-use-static-methods-in-php.md)
- [Named Constructors in PHP](/verraes.net/2014-06-named-constructors-in-php.md)
- [Object Reorientation](/verraes.net/2014-11-object-reorientation.md)
- [Religiously RESTful](/verraes.net/2014-03-religiously-restful.md)
- [Parser Combinators (Full Stack Europe)](/verraes.net/2023-04-parser-combinators-full-stack-europe.md)
- [Antifragile - Things That Gain from Disorder](/verraes.net/2013-08-antifragile-things-that-gain-from-disorder.md)
- [Unbreakable Domain Models](/verraes.net/2013-06-unbreakable-domain-models.md)
- [Code Folder Structure](/verraes.net/2011-10-code-folder-structure.md)
- [Coping with Change in Software Development](/verraes.net/2011-07-coping-with-change-in-software-development.md)
- [Lazy Loading in PHP with Closures](/verraes.net/2011-05-lazy-loading-in-php-with-closures.md)
- [Beautiful Code](/verraes.net/2011-04-beautiful-code.md)
- [Representing Money in PHP, Fowler-style](/verraes.net/2011-04-representing-money-in-php-fowler-style.md)
- [Random Thoughts on Using Git](/verraes.net/2011-03-random-thoughts-on-using-git.md)
- [Accessing Private Properties from Other Instances](/verraes.net/2011-03-accessing-private-properties-from-other-instances.md)
- [Keep Your Controllers Thin with Doctrine2](/verraes.net/2011-03-keep-your-controllers-thin-with-doctrine2.md)
- [Interface Discovery with PHPUnit's Mock Objects](/verraes.net/2011-03-interface-discovery-with-phpunit-s-mock-objects.md)
