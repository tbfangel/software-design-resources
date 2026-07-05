---
type: article
title: "Better Models: Worse Tools"
description: "Ronacher documents a regression in which newer Anthropic models (Opus 4.8, Sonnet 5) increasingly fail to follow alternative tool schemas correctly—inventing spurious fields in nested JSON—despite older models adapting well."
resource: https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/
cluster: ai-and-agents
tags: ["tool-design", "ai", "llms", "agent-architecture"]
published: 2026-07
timestamp: 2026-07-05
---
# Better Models: Worse Tools

> Ronacher documents a regression in which newer Anthropic models (Opus 4.8, Sonnet 5) increasingly fail to follow alternative tool schemas correctly—inventing spurious fields in nested JSON—despite older models adapting well.

## Key Facts
- Tool schemas aren't neutral abstractions; model accuracy varies with proximity to post-training distributions
- RL inside forgiving harnesses teaches models to exploit leniency (aliases, extra keys), hurting generalization to stricter schemas
- Claude Code's silent error correction may inadvertently train models to emit malformed output that still succeeds
- Closed-source opacity prevents practitioners from predicting or designing around model-specific quirks
- Constrained decoding prevents invalid emissions but adds complexity and potential quality tradeoffs
- Post-training concentration in proprietary harnesses risks forcing downstream tools to inherit undocumented behavior

## Summary
Ronacher documents a regression in which newer Anthropic models (Opus 4.8, Sonnet 5) increasingly fail to follow alternative tool schemas correctly—inventing spurious fields in nested JSON—despite older models adapting well. He attributes this to reinforcement learning inside Claude Code's forgiving harness, which tolerates malformed calls via repair mechanisms and parameter aliases, training models to become "strongly adapted to the canonical Claude Code edit tool shape" and degrading performance on semantically identical but structurally different schemas. Without visibility into closed-source post-training environments, he argues, harnesses must either adopt strict grammar-constrained sampling or accept inherited quirks from the dominant training ecosystem.

## Links
- [Source](https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-ai-and-agents.md)
- [The Final Bottleneck](/lucumr.pocoo.org/2026-02-the-final-bottleneck.md)
- [A Language For Agents](/lucumr.pocoo.org/2026-02-a-language-for-agents.md)
- [Pi: The Minimal Agent Within OpenClaw](/lucumr.pocoo.org/2026-01-pi.md)
