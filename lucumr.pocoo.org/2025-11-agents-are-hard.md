---
type: article
title: "Agent Design Is Still Hard"
description: "Ronacher documents the engineering lessons from building production agents."
resource: https://lucumr.pocoo.org/2025/11/21/agents-are-hard/
cluster: ai-and-agents
tags: ["agent-architecture", "caching", "resilience"]
published: 2025-11
timestamp: 2026-07-05
---
# Agent Design Is Still Hard

> Ronacher documents the engineering lessons from building production agents.

## Key Facts
- Generic agent SDKs break when agents encounter real deployment requirements; build custom abstractions.
- Explicit cache management enables branching and context editing that automatic caching cannot.
- Failure isolation via sub-agents prevents cascading errors in the main loop.

## Summary
Ronacher documents the engineering lessons from building production agents. High-level SDKs like Vercel AI SDK are insufficiently flexible for real deployments: model differences are significant enough that custom agent abstractions are required. Anthropic's explicit cache management (unusual at first) enables cost predictability and conversation branching unavailable elsewhere. Injecting reinforcement context (reminding agents of objectives after tool calls) substantially improves performance. Delegating error-prone sub-tasks to isolated sub-agents that retry internally prevents failure noise from derailing the main loop.

## Links
- [Source](https://lucumr.pocoo.org/2025/11/21/agents-are-hard/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-ai-and-agents.md)
- [The Final Bottleneck](/lucumr.pocoo.org/2026-02-the-final-bottleneck.md)
- [A Language For Agents](/lucumr.pocoo.org/2026-02-a-language-for-agents.md)
- [Pi: The Minimal Agent Within OpenClaw](/lucumr.pocoo.org/2026-01-pi.md)
