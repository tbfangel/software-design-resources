---
type: article
title: "A Language For Agents"
description: "Ronacher argues that new programming languages will emerge specifically optimised for AI agents, not humans."
resource: https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/
tags: ["ai-and-agents", "programming-language-design", "agents", "explicitness", "type-systems"]
published: 2026-02
timestamp: 2026-07-05
---
# A Language For Agents

> Ronacher argues that new programming languages will emerge specifically optimised for AI agents, not humans.

## Key Facts
- Explicit, greppable, low-magic languages help agents; clever or inference-heavy languages hurt them.
- The breadth of an ecosystem matters less when agents can port code across languages in hours.
- Agent benchmark scores will become an objective measure of language quality for agentic workflows.

## Summary
Ronacher argues that new programming languages will emerge specifically optimised for AI agents, not humans. Because agents can port missing libraries and the cost of coding is falling, ecosystem breadth matters less than language properties that help models work accurately. Agent-friendly languages should prefer explicit syntax over inference, braces over whitespace, simple structural types over expressive conditional type systems, typed results over exceptions, minimal macros and aliasing, and fast deterministic builds. Languages that confuse LSP tooling or require heavy macro expansion also confuse agents. He predicts these properties can be measured empirically through agent benchmark scores rather than human preference.

## Links
- [Source](https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-ai-and-agents.md)
- [The Final Bottleneck](/lucumr.pocoo.org/2026-02-the-final-bottleneck.md)
- [Pi: The Minimal Agent Within OpenClaw](/lucumr.pocoo.org/2026-01-pi.md)
- [Agent Psychosis: Are We Going Insane?](/lucumr.pocoo.org/2026-01-agent-psychosis.md)
