---
type: article
title: "Rust Any Part 1: Extension Maps in Rust"
description: "Ronacher introduces the extension map pattern: using Rust's `Any` trait to store arbitrary `'static` types in a `HashMap<TypeId, Box<dyn Any>>`, avoiding the need for generic type parameters that would make APIs like `App<Config>` unwieldy."
resource: https://lucumr.pocoo.org/2022/1/6/rust-extension-map/
cluster: rust-language
tags: ["rust"]
published: 2022-01
timestamp: 2026-07-05
---
# Rust Any Part 1: Extension Maps in Rust

> Ronacher introduces the extension map pattern: using Rust's `Any` trait to store arbitrary `'static` types in a `HashMap<TypeId, Box<dyn Any>>`, avoiding the need for generic type parameters that would make APIs like `App<Config>` unwieldy.

## Key Facts
- Extension maps with `TypeId` keys replace unwieldy generic type parameters with runtime flexibility.
- Interior mutability (`RefCell`, `RwLock`) resolves borrow checker friction in extension map access patterns.
- Thread safety requires `Send + Sync` bounds and `RwLock` instead of `RefCell`.

## Summary
Ronacher introduces the extension map pattern: using Rust's `Any` trait to store arbitrary `'static` types in a `HashMap<TypeId, Box<dyn Any>>`, avoiding the need for generic type parameters that would make APIs like `App<Config>` unwieldy. Three variants are presented: a basic version (potential panics on missing values), a `RefCell` variant (interior mutability without mutable references), and a `parking_lot` RwLock variant for thread-safe concurrent applications.

## Links
- [Source](https://lucumr.pocoo.org/2022/1/6/rust-extension-map/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
