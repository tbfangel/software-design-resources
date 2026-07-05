---
type: article
title: "Religiously RESTful"
description: "REST is a protocol with varying maturity levels."
resource: https://verraes.net/2014/03/religiously-restful/
cluster: software-engineering
tags: ["rest", "api-design", "pragmatism", "http"]
published: 2014-03
timestamp: 2026-07-05
---
# Religiously RESTful

> REST is a protocol with varying maturity levels.

## Key Facts
- REST solves standardization and long-term maintainability well, but at a cost
- Maturity and context matter—not all APIs need full REST compliance
- Choose pragmatic REST if clients are internal and lifespan is short
- Invest extra effort in domain language over infrastructure perfection

## Summary
REST is a protocol with varying maturity levels. Strict adherence costs effort in team understanding and tooling. If your API has only your own web UI and mobile app as clients, and you expect to replace it within a few years, RESTish (pragmatic REST) may suffice. Only build truly RESTful APIs if you expect long maintenance and many external clients. The effort is better spent on domain model clarity than infrastructure perfection.

## Links
- [Source](https://verraes.net/2014/03/religiously-restful/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
