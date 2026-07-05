---
type: article
title: "Whose domain is it anyway?"
description: "North identifies a common failure mode in BDD: scenarios become brittle when they combine vocabulary from multiple unrelated domains."
resource: https://dannorth.net/blog/whose-domain-is-it-anyway/
tags: ["bdd-foundations", "bdd", "brittle", "ddd", "domain", "language", "modelling", "tests", "vocabulary"]
published: 2011-01
timestamp: 2026-07-05
---
# Whose domain is it anyway?

> North identifies a common failure mode in BDD: scenarios become brittle when they combine vocabulary from multiple unrelated domains.

## Key Facts
- Scenarios should involve exactly two domains: problem domain (what) and solution domain (how)
- Additional domains provide unnecessary constraints and noise, making tests brittle
- Each domain corresponds to a stakeholder; multiple stakeholders increase divergence risk
- Chunking framework: ask "Why/What for?" (up), "How?" (down), "How else?" (sideways)
- "Declarative" vs "imperative" is relative to abstraction layer, not absolute
- Check scenario wording for language outside your two domains
- Push complexity into step implementation rather than scenario text to preserve intent
- Any layer answers "what" for details below and "how" for requirements above

## Summary
North identifies a common failure mode in BDD: scenarios become brittle when they combine vocabulary from multiple unrelated domains. The example login scenario mixes security terminology, UI implementation details, and web asset references—making it fragile across several axes of change. He advocates for scenarios involving exactly two domains: the "what" (problem domain describing capability) and the "how" (solution domain showing implementation). "Any additional domains are likely to provide unnecessary constraints or noise, and make the test brittle." Each domain corresponds to a stakeholder, and multiple domains mean multiple stakeholders whose priorities may diverge, increasing brittleness. North introduces chunking from NLP, where you can move between abstraction layers by asking "Why?" or "What for?" (chunk up), "How?" (chunk down), or "How else?" (chunk sideways). Whether something is "declarative" or "imperative" is relative: any layer answers the "what" for details below it and the "how" for requirements above it.

## Links
- [Source](https://dannorth.net/blog/whose-domain-is-it-anyway/) — original post

## Related
- [Cluster synthesis](/dannorth.net/_synthesis-bdd-foundations.md)
- [Introducing BDD](/dannorth.net/2006-09-introducing-bdd.md)
- [What's in a Story?](/dannorth.net/2007-02-whats-in-a-story.md)
- [BDD is like TDD if](/dannorth.net/2012-05-bdd-is-like-tdd-if.md)
