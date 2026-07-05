---
type: article
title: "Tech Debt Doesn't Exist, But Trade-Offs Do"
description: "\"Technical debt\" is a harmful metaphor that obscures the real issue: making informed trade-offs."
resource: https://www.architecture-weekly.com/p/tech-debt-doesnt-exist-but-trade
cluster: engineering-culture
tags: ["technical-debt", "trade-offs", "decision-making", "communication", "software-architecture"]
published: 2024
timestamp: 2026-07-05
---
# Tech Debt Doesn't Exist, But Trade-Offs Do

> "Technical debt" is a harmful metaphor that obscures the real issue: making informed trade-offs.

## Key Facts
- Replace the tech debt narrative with precise analysis, clear accountability, and honest conversations about trade-offs
- Focus on the Pareto Principle: identify the 20% of features driving 80% of business value for improvement
- Make small, consistent improvements rather than deferring work under vague debt labels
- Document architectural decisions with expiration parameters explaining when assumptions need re-evaluation
- Frame improvements in business language stakeholders understand rather than technical jargon
- Code doesn't accrue interest—problems emerge when changes are needed in areas with poor design

## Summary
"Technical debt" is a harmful metaphor that obscures the real issue: making informed trade-offs. The term—coined by Ward Cunningham 32 years ago—has become an excuse for avoiding accountability rather than a useful framework. The metaphor doesn't reflect reality as code doesn't accrue interest over time; problems emerge only when changes are needed. It becomes a convenient label that postpones addressing actual consequences of design choices where "by labelling the absence of tests as technical debt, we postpone the real issue." What matters instead is understanding context (how often does code change, what's the actual cost of modification, what happens if bugs occur), doing your homework through thorough analysis before claiming refactoring is necessary, and communicating business value by framing improvements in terms stakeholders understand like performance gains, cost savings, and reliability improvements.

## Links
- [Source](https://www.architecture-weekly.com/p/tech-debt-doesnt-exist-but-trade) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-engineering-culture.md)
- [Requiem for a 10x Engineer Dream](/architecture-weekly.com/2025-09-requiem-for-a-10x-engineer-dream.md)
- [Why Open Source Isn't Always Fair](/architecture-weekly.com/2025-09-why-open-source-isnt-always-fair.md)
- [Do We Still Need the QA Role?](/architecture-weekly.com/2024-do-we-still-need-the-qa-role.md)
