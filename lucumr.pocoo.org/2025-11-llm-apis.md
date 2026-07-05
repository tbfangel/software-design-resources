---
type: article
title: "LLM APIs are a Synchronization Problem"
description: "Ronacher argues that current LLM message-based APIs are the wrong abstraction."
resource: https://lucumr.pocoo.org/2025/11/22/llm-apis/
cluster: ai-and-agents
tags: ["llms", "distributed-systems", "concurrency"]
published: 2025-11
timestamp: 2026-07-05
---
# LLM APIs are a Synchronization Problem

> Ronacher argues that current LLM message-based APIs are the wrong abstraction.

## Key Facts
- Current message-based LLM APIs hide state that providers inject, creating incompatibilities and inefficiencies.
- The correct abstraction is distributed state synchronisation, not message passing.
- Solving this requires explicit semantics for hidden state, network failures, and conversation divergence.

## Summary
Ronacher argues that current LLM message-based APIs are the wrong abstraction. Providers inject invisible context (system prompts, cached computations, role markers, tool definitions) that never appears in user-visible messages but shapes model behaviour. Completion APIs require resending entire conversation histories, causing quadratic growth in data transmission costs. The field should learn from the local-first software movement and design APIs around distributed state synchronisation semantics — with explicit handling of hidden state, replay semantics, failure recovery, and synchronisation boundaries.

## Links
- [Source](https://lucumr.pocoo.org/2025/11/22/llm-apis/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-ai-and-agents.md)
- [The Final Bottleneck](/lucumr.pocoo.org/2026-02-the-final-bottleneck.md)
- [A Language For Agents](/lucumr.pocoo.org/2026-02-a-language-for-agents.md)
- [Pi: The Minimal Agent Within OpenClaw](/lucumr.pocoo.org/2026-01-pi.md)
