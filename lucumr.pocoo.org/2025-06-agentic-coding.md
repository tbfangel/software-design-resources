---
type: article
title: "Agentic Coding Recommendations"
description: "Ronacher's practical guide to setting up for agentic development."
resource: https://lucumr.pocoo.org/2025/6/12/agentic-coding/
tags: ["ai-and-agents", "agentic-coding", "go", "tool-design", "code-philosophy", "observability"]
published: 2025-06
timestamp: 2026-07-05
---
# Agentic Coding Recommendations

> Ronacher's practical guide to setting up for agentic development.

## Key Facts
- Go's simplicity, speed, and explicitness make it the best current language for agentic development.
- Simple, verbose, long-named functions are easier for agents to understand and modify than clever abstractions.
- Observability must be built in from the start; retrofitting it in agentic codebases is hard.

## Summary
Ronacher's practical guide to setting up for agentic development. Language choice: Go, because explicit context handling, straightforward testing, structural interfaces, and minimal magic. Tool design: fast, protective, anything-can-be-a-tool (shell scripts, log files, MCPs). Code philosophy: simple verbose functions with clear names over clever patterns, plain SQL over ORMs. Infrastructure: log to files early, protect against double-spawning, build observability in from the start.

## Links
- [Source](https://lucumr.pocoo.org/2025/6/12/agentic-coding/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-ai-and-agents.md)
- [The Final Bottleneck](/lucumr.pocoo.org/2026-02-the-final-bottleneck.md)
- [A Language For Agents](/lucumr.pocoo.org/2026-02-a-language-for-agents.md)
- [Pi: The Minimal Agent Within OpenClaw](/lucumr.pocoo.org/2026-01-pi.md)
