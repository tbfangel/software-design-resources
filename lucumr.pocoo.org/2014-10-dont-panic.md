---
type: article
title: "Don't Panic! The Hitchhiker's Guide to Unwinding"
description: "Ronacher argues that Rust should ultimately move toward disabling stack unwinding in favour of process-level isolation, but this requires first reducing unnecessary panics in standard library APIs."
resource: https://lucumr.pocoo.org/2014/10/30/dont-panic/
cluster: rust-language
tags: ["rust", "sandboxing", "error-handling"]
published: 2014-10
timestamp: 2026-07-05
---
# Don't Panic! The Hitchhiker's Guide to Unwinding

> Ronacher argues that Rust should ultimately move toward disabling stack unwinding in favour of process-level isolation, but this requires first reducing unnecessary panics in standard library APIs.

## Key Facts
- Stack unwinding is technically complex and non-portable; process isolation is a cleaner long-term approach.
- Many current Rust API panics are unnecessary and should return `Result` instead.
- Reducing panics is a prerequisite for disabling unwinding; premature disabling would break too much.

## Summary
Ronacher argues that Rust should ultimately move toward disabling stack unwinding in favour of process-level isolation, but this requires first reducing unnecessary panics in standard library APIs. Current problems: too many APIs panic unnecessarily (including `println!`), unwinding is non-standardised across languages, and DWARF-based unwinding on AMD64 is technically complex. Better path: operating system isolation through separate processes, enabling watchdog architectures that survive worker crashes.

## Links
- [Source](https://lucumr.pocoo.org/2014/10/30/dont-panic/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
