---
type: article
title: "Uninitialized Memory: Unsafe Rust is Too Hard"
description: "Ronacher argues that writing unsafe Rust has become unnecessarily difficult compared to C/C++."
resource: https://lucumr.pocoo.org/2022/1/30/unsafe-rust/
tags: ["rust-language", "rust", "unsafe", "maybeuninit", "uninitialized-memory", "ergonomics"]
published: 2022-01
timestamp: 2026-07-05
---
# Uninitialized Memory: Unsafe Rust is Too Hard

> Ronacher argues that writing unsafe Rust has become unnecessarily difficult compared to C/C++.

## Key Facts
- Unsafe Rust's rules around uninitialized memory have become too complex for confident use by experienced programmers.
- The compiler provides minimal guidance when unsafe code is wrong, making mistakes easy to miss.
- This complexity undermines Rust's C-interoperability value proposition by making the unsafe path difficult.

## Summary
Ronacher argues that writing unsafe Rust has become unnecessarily difficult compared to C/C++. Initializing a simple struct requires understanding nuanced distinctions between `mem::zeroed()`, `MaybeUninit`, `addr_of_mut!`, and when to use `write()` vs assignment. The rules changed over time as the understanding of safety evolved. The compiler is not helpful in pointing out when unsafe code is wrong. Even after writing the article, expert corrections were required — illustrating how easily unsafe rules are misinterpreted by experienced practitioners.

## Links
- [Source](https://lucumr.pocoo.org/2022/1/30/unsafe-rust/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
