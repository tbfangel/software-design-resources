---
type: article
title: "What Actually Is Claude Code's Plan Mode?"
description: "Ronacher reverse-engineers Claude Code's plan mode and finds it is primarily a UX wrapper around prompt injection — a markdown file stored in a designated folder, with the agent constrained to read-only tools until the plan is approved."
resource: https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/
tags: ["ai-and-agents", "claude-code", "plan-mode", "prompt-engineering", "agentic-workflows"]
published: 2025-12
timestamp: 2026-07-05
---
# What Actually Is Claude Code's Plan Mode?

> Ronacher reverse-engineers Claude Code's plan mode and finds it is primarily a UX wrapper around prompt injection — a markdown file stored in a designated folder, with the agent constrained to read-only tools until the plan is approved.

## Key Facts
- Plan mode is a structured prompt pattern, not a fundamentally different operating mode.
- The same workflow can be replicated through custom prompting without the UI affordance.
- Interface design and workflow scaffolding create real value even when the underlying mechanism is simple.

## Summary
Ronacher reverse-engineers Claude Code's plan mode and finds it is primarily a UX wrapper around prompt injection — a markdown file stored in a designated folder, with the agent constrained to read-only tools until the plan is approved. The planning workflow is structured around four phases injected via prompt. His conclusion: plan mode's value is in workflow scaffolding and interface design, not unique capabilities. His own markdown-based iterative approach achieves similar results.

## Links
- [Source](https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-ai-and-agents.md)
- [The Final Bottleneck](/lucumr.pocoo.org/2026-02-the-final-bottleneck.md)
- [A Language For Agents](/lucumr.pocoo.org/2026-02-a-language-for-agents.md)
- [Pi: The Minimal Agent Within OpenClaw](/lucumr.pocoo.org/2026-01-pi.md)
