---
type: article
title: "AI And The Ship of Theseus"
description: "Armin Ronacher uses the chardet relicensing controversy as a lens to examine what happens when AI makes reimplementing GPL software trivially cheap."
resource: https://lucumr.pocoo.org/2026/3/5/theseus/
cluster: open-source-philosophy
tags: ["open-source-licensing", "ai-generated-code", "migration"]
published: 2026-03
timestamp: 2026-07-05
---
# AI And The Ship of Theseus

> Armin Ronacher uses the chardet relicensing controversy as a lens to examine what happens when AI makes reimplementing GPL software trivially cheap.

## Key Facts
- AI lowers the cost of clean-room reimplementation to near zero, undermining the enforcement model that copyleft licenses depend on.
- A reimplementation built from an API and test suite — without reading the original source — is a strong argument for non-derivative status, though legally untested.
- The chardet case illustrates that permissively-licensed tests and APIs can effectively be used to bootstrap a relicensed replacement.
- Trademark protection is increasingly more practically useful than copyleft licensing for controlling how a project name and ecosystem are used.
- The controversy exposes inconsistency in how the industry reacts to AI-assisted reimplementation depending on whose code is being replaced.

## Summary
Armin Ronacher uses the chardet relicensing controversy as a lens to examine what happens when AI makes reimplementing GPL software trivially cheap. A maintainer used AI to rebuild chardet from scratch — guided only by its public API and test suite — producing a new MIT-licensed implementation with multicore support and improved performance. Ronacher argues the new code is genuinely distinct and not derivative work, but notes the original author disputes this. The deeper point is a structural paradox: copyleft licenses rely on friction and copyright enforcement, yet their open nature makes them maximally vulnerable to AI-assisted rewrites. Ronacher draws a parallel to Vercel reimplementing bash without controversy while objecting when the same method was applied to Next.js, and concludes that trademark protection may prove more durable than license terms in an era of cheap code generation.

## Links
- [Source](https://lucumr.pocoo.org/2026/3/5/theseus/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-open-source-philosophy.md)
- [The Life and Death of Open Source Companies](/lucumr.pocoo.org/2023-12-life-and-death-of-open-source.md)
- [FSL: A License For the Bazaar, Not the Cathedral](/lucumr.pocoo.org/2023-11-cathedral-and-bazaaar-licensing.md)
- [The Inevitability of Mixing Open Source and Money](/lucumr.pocoo.org/2024-10-mixing-oss-and-money.md)
