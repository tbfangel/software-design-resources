---
type: article
title: "In Support Of Shitty Types"
description: "Ronacher documents that complex type systems hurt AI agent performance."
resource: https://lucumr.pocoo.org/2025/8/4/shitty-types/
tags: ["ai-and-agents", "type-systems", "llms", "go", "typescript", "agent-friendly-design"]
published: 2025-08
timestamp: 2026-07-05
---
# In Support Of Shitty Types

> Ronacher documents that complex type systems hurt AI agent performance.

## Key Facts
- Expressive, complex type systems that help human programmers confuse AI agents.
- Simple structural typing (Go, Java style) is better suited for agent-driven development.
- Language design will increasingly be evaluated against agent benchmark scores, not human preferences.

## Summary
Ronacher documents that complex type systems hurt AI agent performance. TypeScript's conditional types confuse LLMs; LSP integration slows agents and clutters context; complex Python type errors are not reliably resolved. Agents write functional code without type-checking loops. Go and Java's simpler structural type systems produce better agent results than TypeScript's expressive system. He suggests this observation may retroactively justify language design decisions that seemed like limitations.

## Links
- [Source](https://lucumr.pocoo.org/2025/8/4/shitty-types/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-ai-and-agents.md)
- [The Final Bottleneck](/lucumr.pocoo.org/2026-02-the-final-bottleneck.md)
- [A Language For Agents](/lucumr.pocoo.org/2026-02-a-language-for-agents.md)
- [Pi: The Minimal Agent Within OpenClaw](/lucumr.pocoo.org/2026-01-pi.md)
