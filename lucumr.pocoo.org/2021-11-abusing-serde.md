---
type: article
title: "Rust Adventures: Abusing Serde"
description: "Ronacher documents three creative uses of Serde beyond its intended purpose: using serialisation as a reflection mechanism to expose Rust structs to template engines (MiniJinja); passing out-of-band data through thread-local storage with in-band handle references to work around Serde's data model limitations; and inter-process communication passing file descriptors."
resource: https://lucumr.pocoo.org/2021/11/14/abusing-serde/
cluster: rust-language
tags: ["rust", "python", "template-engines"]
published: 2021-11
timestamp: 2026-07-05
---
# Rust Adventures: Abusing Serde

> Ronacher documents three creative uses of Serde beyond its intended purpose: using serialisation as a reflection mechanism to expose Rust structs to template engines (MiniJinja); passing out-of-band data through thread-local storage with in-band handle references to work around Serde's data model limitations; and inter-process communication passing file descriptors.

## Key Facts
- Serde's `Serialize` trait can function as a reflection mechanism to expose struct fields to dynamic systems.
- Thread-local storage + in-band handles is a fragile but effective workaround for Serde data model limits.
- The pattern is educational but production use requires careful handling of the fragility.

## Summary
Ronacher documents three creative uses of Serde beyond its intended purpose: using serialisation as a reflection mechanism to expose Rust structs to template engines (MiniJinja); passing out-of-band data through thread-local storage with in-band handle references to work around Serde's data model limitations; and inter-process communication passing file descriptors. These techniques are powerful but rely on fragile mechanisms. He advocates a hypothetical "serde 2.0" with better extension support.

## Links
- [Source](https://lucumr.pocoo.org/2021/11/14/abusing-serde/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
