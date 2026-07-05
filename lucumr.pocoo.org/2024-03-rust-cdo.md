---
type: article
title: "On Tech Debt: My Rust Library is now a CDO"
description: "A satirical treatment of how MiniJinja's API has accumulated layers of \"financial engineering\" — wrapper types, re-exports, trait aliases, and compatibility shims — that obscure the underlying architecture."
resource: https://lucumr.pocoo.org/2024/3/26/rust-cdo/
cluster: rust-language
tags: ["rust", "technical-debt", "api-design", "template-engines"]
published: 2024-03
timestamp: 2026-07-05
---
# On Tech Debt: My Rust Library is now a CDO

> A satirical treatment of how MiniJinja's API has accumulated layers of "financial engineering" — wrapper types, re-exports, trait aliases, and compatibility shims — that obscure the underlying architecture.

## Key Facts
- API design debt in Rust is particularly costly because type changes require recompilation across the dependency graph.
- Each abstraction layer that seems reasonable in isolation can compound into architectural opacity.
- Humour is an effective way to discuss technical debt that the author created themselves.

## Summary
A satirical treatment of how MiniJinja's API has accumulated layers of "financial engineering" — wrapper types, re-exports, trait aliases, and compatibility shims — that obscure the underlying architecture. The CDO metaphor (collateralised debt obligation) captures how each layer of abstraction made sense individually but the composition has become opaque. Serious underlying point: API design debt in Rust accumulates differently than in dynamic languages because type changes ripple through the entire dependency graph.

## Links
- [Source](https://lucumr.pocoo.org/2024/3/26/rust-cdo/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
