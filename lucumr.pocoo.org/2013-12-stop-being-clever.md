---
type: article
title: "Stop Being Cute and Clever"
description: "Ronacher's experience-report critique of JavaScript library culture: `!~indexOf()` instead of explicit conditionals, unary `+` for type conversion, performance bugs from wrong data structures (linear search in hash tables), mutation-by-default APIs (moment.js), and monkeypatching."
resource: https://lucumr.pocoo.org/2013/12/9/stop-being-clever/
tags: ["software-design-philosophy", "javascript", "code-clarity", "operator-abuse", "moment-js", "angular", "technical-debt"]
published: 2013-12
timestamp: 2026-07-05
---
# Stop Being Cute and Clever

> Ronacher's experience-report critique of JavaScript library culture: `!~indexOf()` instead of explicit conditionals, unary `+` for type conversion, performance bugs from wrong data structures (linear search in hash tables), mutation-by-default APIs (moment.js), and monkeypatching.

## Key Facts
- Operator cleverness prioritises brevity over debugging; explicit conditionals are preferable in production code.
- Wrong data structure choices (linear search in hash tables) cause performance bugs that "clever" code hides.
- Mutation-by-default APIs (moment.js) cause subtle bugs when object references leak unexpectedly.

## Summary
Ronacher's experience-report critique of JavaScript library culture: `!~indexOf()` instead of explicit conditionals, unary `+` for type conversion, performance bugs from wrong data structures (linear search in hash tables), mutation-by-default APIs (moment.js), and monkeypatching. He argues these cleverness patterns make debugging and maintenance difficult and predicts JavaScript will mature as developers with experience in more disciplined languages bring those values to the ecosystem.

## Links
- [Source](https://lucumr.pocoo.org/2013/12/9/stop-being-clever/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
