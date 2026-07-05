---
type: article
title: "Beautiful Native Libraries"
description: "Ronacher's guide to writing shared native libraries in C or C++."
resource: https://lucumr.pocoo.org/2013/8/18/beautiful-native-libraries/
cluster: software-design-philosophy
tags: ["programming", "rust", "backwards-compatibility", "api-design", "testing"]
published: 2013-08
timestamp: 2026-07-05
---
# Beautiful Native Libraries

> Ronacher's guide to writing shared native libraries in C or C++.

## Key Facts
- C calling conventions are the interoperability standard for shared libraries across languages.
- Opaque types in public headers enable ABI stability across library versions.
- Testing native libraries with Python/CFFI provides faster iteration and process isolation for crash detection.

## Summary
Ronacher's guide to writing shared native libraries in C or C++. C is the lingua franca of shared libraries; C++ is acceptable when exceptions, RTTI, and complex constructors are avoided. Key principles: single public header with opaque interface, export macros for symbol visibility, consistent function prefix for namespace isolation, customisable allocators via function pointers, ABI version checking, and testing via Python/CFFI for faster iteration and better crash isolation. The goal: a library that any language can consume reliably.

## Links
- [Source](https://lucumr.pocoo.org/2013/8/18/beautiful-native-libraries/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
