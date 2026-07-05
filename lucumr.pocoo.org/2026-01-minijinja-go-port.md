---
type: article
title: "Porting MiniJinja to Go With an Agent"
description: "Ronacher documents using an AI agent to port MiniJinja (a Rust template engine) to Go in 10 hours, with only 45 minutes of active human involvement."
resource: https://lucumr.pocoo.org/2026/1/14/minijinja-go-port/
cluster: ai-and-agents
tags: ["agentic-coding", "migration", "tdd", "go", "rust"]
published: 2026-01
timestamp: 2026-07-05
---
# Porting MiniJinja to Go With an Agent

> Ronacher documents using an AI agent to port MiniJinja (a Rust template engine) to Go in 10 hours, with only 45 minutes of active human involvement.

## Key Facts
- Test suites, not implementation code, are the most valuable artefact when porting across languages.
- Agents can make idiomatic design choices in the target language rather than just translating syntax.
- Language ecosystem lock-in is reduced when porting is cheap; technology choices feel less permanent.

## Summary
Ronacher documents using an AI agent to port MiniJinja (a Rust template engine) to Go in 10 hours, with only 45 minutes of active human involvement. The agent used snapshot tests to drive behavioural parity rather than literal translation, and made idiomatic Go choices rather than mechanically replicating Rust patterns. Key conclusion: "Turns out you can just port things now." This reduces ecosystem lock-in, makes quality test suites more valuable than implementation code, and changes the social dynamics around porting projects.

## Links
- [Source](https://lucumr.pocoo.org/2026/1/14/minijinja-go-port/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-ai-and-agents.md)
- [The Final Bottleneck](/lucumr.pocoo.org/2026-02-the-final-bottleneck.md)
- [A Language For Agents](/lucumr.pocoo.org/2026-02-a-language-for-agents.md)
- [Pi: The Minimal Agent Within OpenClaw](/lucumr.pocoo.org/2026-01-pi.md)
