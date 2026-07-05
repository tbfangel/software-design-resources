---
type: article
title: "Skills vs Dynamic MCP Loadouts"
description: "Ronacher argues that manually maintained agent skills (brief capability summaries that leverage training) outperform MCP tools for current practical use."
resource: https://lucumr.pocoo.org/2025/12/13/skills-vs-mcp/
cluster: ai-and-agents
tags: ["mcp", "tool-design", "learning", "backwards-compatibility"]
published: 2025-12
timestamp: 2026-07-05
---
# Skills vs Dynamic MCP Loadouts

> Ronacher argues that manually maintained agent skills (brief capability summaries that leverage training) outperform MCP tools for current practical use.

## Key Facts
- MCP tool definitions are unstable; agent-written skills under your own control are more reliable.
- Having the agent maintain its own tools creates a self-improving system rather than a dependency.
- MCP would need built-in stability guarantees and versioning to become competitive.

## Summary
Ronacher argues that manually maintained agent skills (brief capability summaries that leverage training) outperform MCP tools for current practical use. MCP servers have no incentive to maintain API stability and are increasingly trimming tool definitions to save tokens, creating reliability problems. Dynamic loading doesn't solve the core problem because you still need documentation summaries. Agent-maintained tools win because the agent can fix them when they break and they remain fully under developer control.

## Links
- [Source](https://lucumr.pocoo.org/2025/12/13/skills-vs-mcp/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-ai-and-agents.md)
- [The Final Bottleneck](/lucumr.pocoo.org/2026-02-the-final-bottleneck.md)
- [A Language For Agents](/lucumr.pocoo.org/2026-02-a-language-for-agents.md)
- [Pi: The Minimal Agent Within OpenClaw](/lucumr.pocoo.org/2026-01-pi.md)
