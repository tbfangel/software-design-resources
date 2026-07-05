---
type: article
title: "How simple is too simple?"
description: "North addresses the fundamental design debate between building specifically for current needs versus abstractly for future flexibility."
resource: https://dannorth.net/blog/how-simple-is-too-simple/
tags: ["software-design-architecture", "agile", "complexity", "programming", "simplicity"]
published: 2006-05
timestamp: 2026-07-05
---
# How simple is too simple?

> North addresses the fundamental design debate between building specifically for current needs versus abstractly for future flexibility.

## Key Facts
- Change Event Horizon determines whether to build specifically or generally
- Short horizons (agile, continuous deployment) favor simplicity now, refactor later
- Long horizons (language design, platforms) require upfront generalization
- Context-awareness resolves specificity vs. abstraction debate better than ideology
- "Too simple" means ignoring the consequences of your change event horizon
- Agile developers safely embrace specificity through automation and rapid iteration
- Platform designers face unpredictable user behaviors requiring careful prediction
- The determining factor is when you can feasibly reverse a decision

## Summary
North addresses the fundamental design debate between building specifically for current needs versus abstractly for future flexibility. The breakthrough insight is the Change Event Horizon: the timeframe before reversing a decision becomes feasible. This concept resolves the apparent deadlock between simplicity-now and generalization-upfront approaches. Short horizons (agile projects with continuous deployment) favor simplicity now with later refactoring, while long horizons (programming language design) demand upfront generalization since "change event horizon is huge." Generalization becomes necessary when decisions carry lasting consequences: language designers cannot easily undo choices, but internal enterprise applications can pivot at the next release cycle. "Too simple" means ignoring your change event horizon's scope. Agile developers can safely embrace specificity through automation and rapid iteration, while platform designers must predict user needs carefully.

## Links
- [Source](https://dannorth.net/blog/how-simple-is-too-simple/) — original post

## Related
- [Cluster synthesis](/dannorth.net/_synthesis-software-design-architecture.md)
- [CUPID: for joyful coding](/dannorth.net/2022-02-cupid-for-joyful-coding.md)
- [CUPID: the back story](/dannorth.net/2021-03-cupid-the-back-story.md)
- [Best Simple System for Now](/dannorth.net/2025-02-best-simple-system-for-now.md)
