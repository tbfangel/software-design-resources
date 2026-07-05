---
type: article
title: "Your MCP Doesn't Need 30 Tools: It Needs Code"
description: "Ronacher argues that MCP servers should expose a single code-execution tool rather than many specialised tools."
resource: https://lucumr.pocoo.org/2025/8/18/code-mcps/
tags: ["ai-and-agents", "mcp", "code-execution", "tool-design", "stateful-sessions"]
published: 2025-08
timestamp: 2026-07-05
---
# Your MCP Doesn't Need 30 Tools: It Needs Code

> Ronacher argues that MCP servers should expose a single code-execution tool rather than many specialised tools.

## Key Facts
- One code runtime tool beats thirty specialised tools for agent flexibility and composability.
- Stateful execution environments let agents build reusable scripts rather than reinventing each interaction.
- Security concerns about code execution are less significant than they appear given agents already run untrusted code.

## Summary
Ronacher argues that MCP servers should expose a single code-execution tool rather than many specialised tools. CLI tools have platform dependencies, character encoding problems, and security overhead. Code is composable, agents understand it from training, and stateful sessions allow complex debugging scripts to be written once and reused. He demonstrates with `pexpect-mcp` (Python runtime) and `playwrightess-mcp` (replacing ~30 Playwright tools with one JavaScript evaluator).

## Links
- [Source](https://lucumr.pocoo.org/2025/8/18/code-mcps/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-ai-and-agents.md)
- [The Final Bottleneck](/lucumr.pocoo.org/2026-02-the-final-bottleneck.md)
- [A Language For Agents](/lucumr.pocoo.org/2026-02-a-language-for-agents.md)
- [Pi: The Minimal Agent Within OpenClaw](/lucumr.pocoo.org/2026-01-pi.md)
