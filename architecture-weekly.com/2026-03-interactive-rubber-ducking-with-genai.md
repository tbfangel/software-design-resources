---
type: article
title: "Interactive Rubber Ducking with GenAI"
description: "Oskar Dudycz presents \"Interactive Rubber-Ducking,\" a methodology that uses generative AI as a thinking partner rather than a solution generator."
resource: https://www.architecture-weekly.com/p/interactive-rubber-ducking-with-genai
tags: ["engineering-culture", "genai", "software-design", "specification", "rubber-ducking", "developer-productivity", "caching"]
published: 2026-03
timestamp: 2026-07-05
---
# Interactive Rubber Ducking with GenAI

> Oskar Dudycz presents "Interactive Rubber-Ducking," a methodology that uses generative AI as a thinking partner rather than a solution generator.

## Key Facts
- AI serves as an interactive thought partner, not a solution generator—the developer stays the decision driver
- Prompting for one question at a time prevents yes-man responses and surfaces genuine design tensions
- More capable models with code context (e.g. Claude Opus) enable deeper questioning than weaker ones
- Cascading configuration allows override behavior across client, database, collection, session, and per-operation levels
- Cache-by-id with optimistic concurrency validation preserves correctness while improving performance
- Recording both the Q&A and the resulting spec preserves reasoning and enables review by others

## Summary
Oskar Dudycz presents "Interactive Rubber-Ducking," a methodology that uses generative AI as a thinking partner rather than a solution generator. Instead of accepting AI-generated designs, the developer prompts the model to ask one probing question at a time to expose blind spots and challenge assumptions, producing both a Q&A log and a concise specification. He demonstrates the technique on a real problem—adding second-level caching to Pongo—showing how systematic questioning about cache placement, invalidation, cascading configuration, and transaction handling yields a comprehensive design while the developer, not the AI, remains the decision driver.

## Links
- [Source](https://www.architecture-weekly.com/p/interactive-rubber-ducking-with-genai) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-engineering-culture.md)
- [Requiem for a 10x Engineer Dream](/architecture-weekly.com/2025-09-requiem-for-a-10x-engineer-dream.md)
- [Why Open Source Isn't Always Fair](/architecture-weekly.com/2025-09-why-open-source-isnt-always-fair.md)
- [Do We Still Need the QA Role?](/architecture-weekly.com/2024-do-we-still-need-the-qa-role.md)
