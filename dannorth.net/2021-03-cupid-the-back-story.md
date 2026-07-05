---
type: article
title: "CUPID: the back story"
description: "North developed CUPID as an alternative to SOLID after years of questioning their relevance to modern software development, emerging from a presentation at PubConf London."
resource: https://dannorth.net/blog/cupid-the-back-story/
tags: ["software-design-architecture", "design", "programming"]
published: 2021-03
timestamp: 2026-07-05
---
# CUPID: the back story

> North developed CUPID as an alternative to SOLID after years of questioning their relevance to modern software development, emerging from a presentation at PubConf London.

## Key Facts
- SOLID principles were designed for an era when code changes were expensive and risky
- Modern development treats code as malleable, making Open-Closed principle obsolete
- Obsessive Dependency Inversion creates shadow codebases of unnecessary interfaces
- Interface Segregation addresses symptoms (God objects) rather than preventing root causes
- Single Responsibility lacks clear definition of what constitutes "one thing"
- All SOLID critiques converge on: write simple code within human cognitive capacity
- Composition often suffices where SOLID pushes toward inheritance-based complexity

## Summary
North developed CUPID as an alternative to SOLID after years of questioning their relevance to modern software development, emerging from a presentation at PubConf London. His critiques: Single Responsibility is "Pointlessly Vague" with undefined boundaries for "one thing," Open-Closed is rooted in an era when code was expensive to change (modern development treats code as "malleable...like clay"), Liskov Substitution's association with inheritance-based thinking creates unnecessary complexity when composition suffices, Interface Segregation is a pattern addressing legacy God objects rather than a universal principle ("the Stable Door Principle"), and Dependency Inversion has "caused billions of dollars in irretrievable sunk cost" creating shadow codebases of interfaces existing solely for framework satisfaction. Each critique converges on a single recommendation: "write simple code" that fits within human cognitive capacity at any scale of granularity.

## Links
- [Source](https://dannorth.net/blog/cupid-the-back-story/) — original post

## Related
- [Cluster synthesis](/dannorth.net/_synthesis-software-design-architecture.md)
- [CUPID: for joyful coding](/dannorth.net/2022-02-cupid-for-joyful-coding.md)
- [Best Simple System for Now](/dannorth.net/2025-02-best-simple-system-for-now.md)
- [How simple is too simple?](/dannorth.net/2006-05-how-simple-is-too-simple.md)
