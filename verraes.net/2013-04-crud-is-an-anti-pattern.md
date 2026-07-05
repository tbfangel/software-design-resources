---
type: article
title: "CRUD is an antipattern"
description: "This article critiques the prevalence of CRUD (Create, Read, Update, Delete) as the primary interaction model with software, arguing that real business processes are not CRUD operations."
resource: https://verraes.net/2013/04/crud-is-an-anti-pattern/
cluster: ddd-foundations
tags: ["crud", "databases", "domain-logic", "encapsulation", "value-objects", "naming", "ux"]
published: 2013-04
timestamp: 2026-07-05
---
# CRUD is an antipattern

> This article critiques the prevalence of CRUD (Create, Read, Update, Delete) as the primary interaction model with software, arguing that real business processes are not CRUD operations.

## Key Facts
- CRUD thinking treats applications as thin layers over databases and obscures domain intent
- Intention-revealing methods (domain verbs like pay, hire, promote) express user intent far better than setters and field assignments
- Encapsulating related values and behavior together creates more maintainable, self-documenting code

## Summary
This article critiques the prevalence of CRUD (Create, Read, Update, Delete) as the primary interaction model with software, arguing that real business processes are not CRUD operations. Users don't think about setting individual fields; they perform domain actions like "paying an order" or "hiring an employee." Rather than exposing raw getters and setters, domain models should encapsulate behavior through intention-revealing methods that clearly express what the code does in business terms. By replacing setters with rich methods (like `pay()` instead of `setStatus()` and `setPaidAmount()`), and grouping related values into Value Objects, code becomes an accurate reflection of domain behavior rather than a thin layer around database operations.

## Links
- [Source](https://verraes.net/2013/04/crud-is-an-anti-pattern/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-ddd-foundations.md)
- [What is Domain-Driven Design (DDD)](/verraes.net/2021-09-what-is-domain-driven-design-ddd.md)
- [Domain-Driven Design is Linguistic](/verraes.net/2014-01-domain-driven-design-is-linguistic.md)
- [Why Domain-Driven Design Matters](/verraes.net/2014-05-why-domain-driven-design-matters.md)
