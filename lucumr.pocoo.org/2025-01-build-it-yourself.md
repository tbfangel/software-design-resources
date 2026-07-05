---
type: article
title: "Build It Yourself"
description: "Ronacher advocates a cultural shift toward writing small functions instead of adding dependencies for stable, simple functionality."
resource: https://lucumr.pocoo.org/2025/1/24/build-it-yourself/
cluster: software-design-philosophy
tags: ["dependencies", "supply-chain-security", "organizational-culture", "backwards-compatibility"]
published: 2025-01
timestamp: 2026-07-05
---
# Build It Yourself

> Ronacher advocates a cultural shift toward writing small functions instead of adding dependencies for stable, simple functionality.

## Key Facts
- Corporate culture rewards library adoption over judgment; this should be inverted for stable, simple functionality.
- Dependencies intended to improve security create security liabilities through their own attack surface.
- "Build it yourself" applies specifically to stable, simple functionality — not complex problems genuinely solved by libraries.

## Summary
Ronacher advocates a cultural shift toward writing small functions instead of adding dependencies for stable, simple functionality. The dependency problem: a new Rocket project accumulates 172 transitive dependencies; `terminal_size` (a stable platform API) introduces unnecessary complexity. Corporate culture perversely rewards dependency adoption over careful judgment. Ironically, dependencies intended to improve security often become security liabilities through their own update chains. The ask: celebrate engineers who write small functions and praise libraries with minimal dependency footprints.

## Links
- [Source](https://lucumr.pocoo.org/2025/1/24/build-it-yourself/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Make It Ephemeral: Software Should Decay and Lose Data](/lucumr.pocoo.org/2024-10-make-it-ephemeral.md)
