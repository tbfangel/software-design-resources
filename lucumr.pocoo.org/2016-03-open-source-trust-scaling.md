---
type: article
title: "Micropackages and Open Source Trust Scaling"
description: "Written in the wake of the left-pad incident, this post argues that npm's micropackage culture creates trust problems that signatures and audits cannot fix."
resource: https://lucumr.pocoo.org/2016/3/24/open-source-trust-scaling/
cluster: open-source-philosophy
tags: ["javascript", "supply-chain-security", "trust"]
published: 2016-03
timestamp: 2026-07-05
---
# Micropackages and Open Source Trust Scaling

> Written in the wake of the left-pad incident, this post argues that npm's micropackage culture creates trust problems that signatures and audits cannot fix.

## Key Facts
- The transitive dependency graph is the real risk surface, not the direct dependencies a team can audit.
- Python's less fragmented culture produces dramatically smaller dependency graphs for equivalent functionality.
- Micro-package culture optimises for code reuse at the cost of trust and supply chain security.

## Summary
Written in the wake of the left-pad incident, this post argues that npm's micropackage culture creates trust problems that signatures and audits cannot fix. Sentry's JavaScript codebase had 39 direct dependencies resolving to 1,000+ total packages; its Python backend had 45 resolving to 65. The "isarray" package — a one-liner — consumed 140 GB of bandwidth monthly. The attack surface from thousands of individually-maintained packages is unmanageable. Ronacher advocates shrinkwrap, package tagging, and a cultural shift away from "install a package for everything."

## Links
- [Source](https://lucumr.pocoo.org/2016/3/24/open-source-trust-scaling/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-open-source-philosophy.md)
- [The Life and Death of Open Source Companies](/lucumr.pocoo.org/2023-12-life-and-death-of-open-source.md)
- [FSL: A License For the Bazaar, Not the Cathedral](/lucumr.pocoo.org/2023-11-cathedral-and-bazaaar-licensing.md)
- [The Inevitability of Mixing Open Source and Money](/lucumr.pocoo.org/2024-10-mixing-oss-and-money.md)
