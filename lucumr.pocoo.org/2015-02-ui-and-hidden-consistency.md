---
type: article
title: "Why I Don't Hate Git: Hidden Consistency"
description: "Ronacher explains why Git's famously inconsistent surface (different behaviours for `git remote`, `git branch`, `git tag`; unfamiliar `git show` syntax) is nevertheless tolerable."
resource: https://lucumr.pocoo.org/2015/2/17/ui-and-hidden-consistency/
cluster: software-design-philosophy
tags: ["git", "ux", "distributed-systems", "domain-modelling", "trust", "resilience"]
published: 2015-02
timestamp: 2026-07-05
---
# Why I Don't Hate Git: Hidden Consistency

> Ronacher explains why Git's famously inconsistent surface (different behaviours for `git remote`, `git branch`, `git tag`; unfamiliar `git show` syntax) is nevertheless tolerable.

## Key Facts
- A consistent internal model is more valuable than consistent surface UI when the domain is complex.
- Teaching the underlying model rather than UI patterns creates users who understand rather than memorise.
- Reliability (no data loss) builds trust that forgives surface inconsistency over time.

## Summary
Ronacher explains why Git's famously inconsistent surface (different behaviours for `git remote`, `git branch`, `git tag`; unfamiliar `git show` syntax) is nevertheless tolerable. The reason: Git tutorials teach the internal model (commits, objects, branching), not UI patterns. Once you understand *why* commands work, the surface fades. Git's core architecture hasn't changed since 2005; knowledge remains relevant. It has never caused permanent data loss. This reliability and conceptual integrity override surface inconsistency.

## Links
- [Source](https://lucumr.pocoo.org/2015/2/17/ui-and-hidden-consistency/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
