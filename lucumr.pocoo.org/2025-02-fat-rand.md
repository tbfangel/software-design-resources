---
type: article
title: "Fat Rand: How Many Lines Do You Need To Generate A Random Number?"
description: "Ronacher critiques the `rand` crate for dependency bloat: v0.9.0 pulls in 29 vendored crates totaling 62 MB and 209,150 lines of code, takes 4.3 seconds to compile on an M1 Max, and produces 36 MB of compiler artifacts."
resource: https://lucumr.pocoo.org/2025/2/4/fat-rand/
tags: ["rust-language", "rust", "rand-crate", "dependencies", "compilation-overhead", "auditability"]
published: 2025-02
timestamp: 2026-07-05
---
# Fat Rand: How Many Lines Do You Need To Generate A Random Number?

> Ronacher critiques the `rand` crate for dependency bloat: v0.9.0 pulls in 29 vendored crates totaling 62 MB and 209,150 lines of code, takes 4.3 seconds to compile on an M1 Max, and produces 36 MB of compiler artifacts.

## Key Facts
- Popular crates with large dependency trees are harder to audit and create unnecessary attack surface.
- Compilation overhead from dependency bloat is real and measurable: 4.3 seconds for random numbers.
- Widely-used "standard" crates have a responsibility to minimise their dependency footprint.

## Summary
Ronacher critiques the `rand` crate for dependency bloat: v0.9.0 pulls in 29 vendored crates totaling 62 MB and 209,150 lines of code, takes 4.3 seconds to compile on an M1 Max, and produces 36 MB of compiler artifacts. The dependency chain (proc-macros, `zerocopy`, platform-specific code) pulls in Windows target code for a single API call. Rust's standard library already provides random seeding via its hasher, and minimal alternatives like `fastrand` exist with zero dependencies. "Almost standard crates" should prioritise auditability.

## Links
- [Source](https://lucumr.pocoo.org/2025/2/4/fat-rand/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [MiniJinja: Learnings from Building a Template Engine in Rust](/lucumr.pocoo.org/2024-08-minijinja.md)
