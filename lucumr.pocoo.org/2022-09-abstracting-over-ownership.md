---
type: article
title: "You Can't Do That: Abstracting over Ownership in Rust with Higher-Rank Type Bounds"
description: "Ronacher documents a fundamental limitation: creating APIs that transparently handle both `&str` and `String` breaks down when higher-ranked trait bounds (HRTBs) are involved."
resource: https://lucumr.pocoo.org/2022/9/11/abstracting-over-ownership/
tags: ["rust-language", "rust", "hrtbs", "ownership-abstraction", "type-system-limits", "closures"]
published: 2022-09
timestamp: 2026-07-05
---
# You Can't Do That: Abstracting over Ownership in Rust with Higher-Rank Type Bounds

> Ronacher documents a fundamental limitation: creating APIs that transparently handle both `&str` and `String` breaks down when higher-ranked trait bounds (HRTBs) are involved.

## Key Facts
- Abstracting over both `&str` and `String` in function APIs is not cleanly expressible in current Rust.
- HRTBs and lifetime-parametric types interact in ways that produce obscure compiler errors with fragile fixes.
- The correct response is often to redesign the API to avoid the abstraction rather than find a workaround.

## Summary
Ronacher documents a fundamental limitation: creating APIs that transparently handle both `&str` and `String` breaks down when higher-ranked trait bounds (HRTBs) are involved. The compiler error "implementation of TryConvertValue is not general enough" reflects a genuine type-theoretic constraint: `for<'a> TryConvertValue<'a>` must work for all lifetimes, but `&'a str` is tied to specific lifetimes. A workaround using associated types instead of lifetime parameters exists but is fragile and version-dependent. Developers should avoid designing APIs that abstract over borrowing status when functions are involved.

## Links
- [Source](https://lucumr.pocoo.org/2022/9/11/abstracting-over-ownership/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
