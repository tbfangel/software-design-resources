---
type: synthesis
title: "Software Design Philosophy"
description: "This cluster collects Ronacher's broader reflections on software design — how to think about dependencies, abstraction, code quality, concurrency, type systems, and the nature of good tooling."
tags: ["software-design-philosophy"]
timestamp: 2026-07-05
---
# Software Design Philosophy

> This cluster collects Ronacher's broader reflections on software design — how to think about dependencies, abstraction, code quality, concurrency, type systems, and the nature of good tooling.

## Key Insights

**Dependencies are not free.** Multiple posts from different eras converge on this finding. The cost is not just attack surface (supply chain security) but also compilation overhead, cognitive overhead, API stability risk, and the perverse incentive in corporate culture to adopt libraries rather than writing small, stable functions. The discipline of asking "do I actually need this?" is undervalued.

**Async/await is the wrong abstraction for most concurrency.** A consistent thread from 2016 to 2025: asyncio is too complex, back pressure is systematically ignored, coloured functions create maintenance friction, and virtual threads with structured concurrency would be better. The insight is that async's complexity leaks into user code in ways that thread-based systems, despite their own problems, mostly avoid. Async drove important innovations (structured concurrency, channels) but the core `async`/`await` mechanism should be a compiler concern, not a language-level feature.

**Good design is invisible but should be communicated.** "Appreciating Design" argues that software developers fail to communicate the elegant architecture behind their products. Users don't notice what they can't see, and this undermines both loyalty and motivation. The lesson: great design benefits from documentation and narrative, not just technical excellence.

**Simplicity in tooling is a UX decision, not a capability limitation.** Git's hidden consistency shows that a complex surface can be acceptable when the underlying model is correct and reliable. Git's internal architecture — commits, objects, branching — hasn't changed since 2005. Users who understand the model forgive the surface inconsistency. This is a specific case of a general principle: internal correctness earns trust that surface inconsistency depletes.

**Software should acknowledge time and decay.** "Make It Ephemeral" argues that software's permanence is a design failure: physical objects naturally decay, which has useful properties (reducing clutter, making spaces safe to use, creating natural archiving). Software that retains everything indefinitely changes user behaviour (hoarding, hesitation to create) in ways that undermine its value. Intentional forgetting is a design feature.

---

## Related
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
- [Make It Ephemeral: Software Should Decay and Lose Data](/lucumr.pocoo.org/2024-10-make-it-ephemeral.md)
- [Revenge of the Types](/lucumr.pocoo.org/2014-08-revenge-of-the-types.md)
- [Beautiful Native Libraries](/lucumr.pocoo.org/2013-08-beautiful-native-libraries.md)
- [Stop Being Cute and Clever](/lucumr.pocoo.org/2013-12-stop-being-clever.md)
- [Appreciating Design](/lucumr.pocoo.org/2012-02-appreciating-design.md)
- [Why I Don't Hate Git: Hidden Consistency](/lucumr.pocoo.org/2015-02-ui-and-hidden-consistency.md)
- [Bundleless: Not Doing Things Makes You Fast](/lucumr.pocoo.org/2023-11-not-doing-things-makes-you-fast.md)
- [I don't understand Python's Asyncio](/lucumr.pocoo.org/2016-10-i-dont-understand-asyncio.md)
- [Playground Wisdom: Threads Beat Async/Await](/lucumr.pocoo.org/2024-11-threads-beat-async-await.md)
- [From Async/Await to Virtual Threads](/lucumr.pocoo.org/2025-07-virtual-threads.md)
- [I'm not feeling the async pressure](/lucumr.pocoo.org/2020-01-async-pressure.md)
- [On Programming Communities](/lucumr.pocoo.org/2014-02-programming-communities.md)
- [Introducing Lektor — A Static File Content Management System For Python](/lucumr.pocoo.org/2015-12-introducing-lektor.md)
- [The Problem with Implicit Scoping in CoffeeScript](/lucumr.pocoo.org/2011-12-implicit-scoping-in-coffeescript.md)
- [Say "Yes" to JavaScript](/lucumr.pocoo.org/2013-07-say-yes-to-javascript.md)
- [Your Node is Leaking Memory? setTimeout Could be the Reason](/lucumr.pocoo.org/2024-06-node-timeout.md)
- [Git and Mercurial Branching](/lucumr.pocoo.org/2010-08-git-and-mercurial-branching.md)
