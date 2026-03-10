# Software Design Philosophy

> Part of the [Armin Ronacher overview](overview.md)

This cluster collects Ronacher's broader reflections on software design — how to think about dependencies, abstraction, code quality, concurrency, type systems, and the nature of good tooling. Unlike the language-specific clusters, these posts address cross-cutting concerns that apply regardless of language: when to build vs buy, how to reason about state and time, what "good design" actually means at different levels of abstraction, and how tools should work. Spanning from 2012 to 2025, the posts reveal consistent values: pragmatism over purity, explicitness over cleverness, and the importance of communicating design intent.

## Key Insights

**Dependencies are not free.** Multiple posts from different eras converge on this finding. The cost is not just attack surface (supply chain security) but also compilation overhead, cognitive overhead, API stability risk, and the perverse incentive in corporate culture to adopt libraries rather than writing small, stable functions. The discipline of asking "do I actually need this?" is undervalued.

**Async/await is the wrong abstraction for most concurrency.** A consistent thread from 2016 to 2025: asyncio is too complex, back pressure is systematically ignored, coloured functions create maintenance friction, and virtual threads with structured concurrency would be better. The insight is that async's complexity leaks into user code in ways that thread-based systems, despite their own problems, mostly avoid. Async drove important innovations (structured concurrency, channels) but the core `async`/`await` mechanism should be a compiler concern, not a language-level feature.

**Good design is invisible but should be communicated.** "Appreciating Design" argues that software developers fail to communicate the elegant architecture behind their products. Users don't notice what they can't see, and this undermines both loyalty and motivation. The lesson: great design benefits from documentation and narrative, not just technical excellence.

**Simplicity in tooling is a UX decision, not a capability limitation.** Git's hidden consistency shows that a complex surface can be acceptable when the underlying model is correct and reliable. Git's internal architecture — commits, objects, branching — hasn't changed since 2005. Users who understand the model forgive the surface inconsistency. This is a specific case of a general principle: internal correctness earns trust that surface inconsistency depletes.

**Software should acknowledge time and decay.** "Make It Ephemeral" argues that software's permanence is a design failure: physical objects naturally decay, which has useful properties (reducing clutter, making spaces safe to use, creating natural archiving). Software that retains everything indefinitely changes user behaviour (hoarding, hesitation to create) in ways that undermine its value. Intentional forgetting is a design feature.

---

### [Ugly Code and Dumb Things](https://lucumr.pocoo.org/2025/2/20/ugly-code/)
**Type:** Article
**Date:** 2025-02
**Tags/Topics:** code quality, pragmatism, elegance, product development, library vs application

Ronacher distinguishes between two legitimate professional objectives: beautiful reusable code (appropriate for libraries and frameworks) and pragmatic shipping code (appropriate for applications and products). Using Flickr's Flamework as a case study — manually-constructed SQL, global variables, no ORM — he argues that intentionally ugly code can be excellent engineering when the priority is velocity and validation. "Reusability is not that important when you're building an application." The code serves as a Rorschach test for engineering values.

**Key takeaways:**
- Elegance and pragmatism are different objectives; neither is universally correct.
- Application code that ships and validates should not be judged by library quality standards.
- Intentional messiness (prioritising velocity over reuse) is a design choice, not incompetence.

---

### [Seeking Purity](https://lucumr.pocoo.org/2025/2/8/seeking-purity/)
**Type:** Article
**Date:** 2025-02
**Tags/Topics:** ideological purity, Rust, Python 3, pragmatism, community dynamics

Ronacher argues that ideological purity in technology — whether Rust's memory safety movement or Python 3 migration — becomes harmful when methodology is prioritised over outcomes. The question "was it made memory safe in the *correct* way?" has displaced "is this code memory safe?" in some Rust circles. Linux kernel developers resist Rust not from ignorance but from legitimate engineering priorities. Historical parallel: Python 2-to-3's gradual, pragmatic transition ultimately produced a better language than aggressive adoption pressure would have.

**Key takeaways:**
- Ideological purity that dismisses legitimate alternatives is methodological rigidity, not technical correctness.
- Outcomes (is the code safe?) matter more than methodology (was it made safe the approved way?).
- Gradual, pragmatic transitions succeed where aggressive ideological pressure produces resistance and burnout.

---

### [Build It Yourself](https://lucumr.pocoo.org/2025/1/24/build-it-yourself/)
**Type:** Article
**Date:** 2025-01
**Tags/Topics:** dependencies, DIY, supply chain, corporate culture, stability

Ronacher advocates a cultural shift toward writing small functions instead of adding dependencies for stable, simple functionality. The dependency problem: a new Rocket project accumulates 172 transitive dependencies; `terminal_size` (a stable platform API) introduces unnecessary complexity. Corporate culture perversely rewards dependency adoption over careful judgment. Ironically, dependencies intended to improve security often become security liabilities through their own update chains. The ask: celebrate engineers who write small functions and praise libraries with minimal dependency footprints.

**Key takeaways:**
- Corporate culture rewards library adoption over judgment; this should be inverted for stable, simple functionality.
- Dependencies intended to improve security create security liabilities through their own attack surface.
- "Build it yourself" applies specifically to stable, simple functionality — not complex problems genuinely solved by libraries.

---

### [Make It Ephemeral: Software Should Decay and Lose Data](https://lucumr.pocoo.org/2024/10/30/make-it-ephemeral/)
**Type:** Article
**Date:** 2024-10
**Tags/Topics:** ephemerality, data decay, design philosophy, shared workspaces, UX

Ronacher argues that software should deliberately delete data over time rather than preserve everything indefinitely. Physical objects naturally decay — a useful property digital systems ignore. Indefinite retention creates clutter, makes users hesitant to create in shared spaces, and produces stale dashboards anchored to expired data. Proposed solutions: ephemeral-by-default with TTLs, garbage collection with trash, hiding aged content from search, scheduled deletion buttons for pre-committed removal, and archiving rather than permanent deletion.

**Key takeaways:**
- Software permanence is a design failure; intentional decay improves shared workspace usability.
- Users develop hoarding behaviour and creative hesitation in software that retains everything.
- "Ephemeral by default" (with opt-in permanence) is preferable to permanent storage with opt-in deletion.

---

### [Revenge of the Types](https://lucumr.pocoo.org/2014/8/24/revenge-of-the-types/)
**Type:** Article
**Date:** 2014-08
**Tags/Topics:** type systems, Python, static typing, language design, language trends

Ronacher argues against adding static typing to Python, given Python's inconsistent type semantics. Python exhibits bizarre behaviour: types claim to be subclasses of `object` in the interpreter but not in the language specification; behaviour differs between C-implemented and Python-implemented types; the slot system creates inconsistencies that typing cannot cleanly model. Broader observation: C#, C++, and Rust are all moving toward powerful static typing with inference — but Python's foundation makes this incompatible. Dynamic typing has genuine value when properly designed.

**Key takeaways:**
- Python's type semantics are inconsistent between C-implemented and Python-implemented types; static typing cannot cleanly model this.
- Adding static layers to languages with inconsistent semantics produces "spotty" benefits, not comprehensive safety.
- Languages should establish clean, well-defined semantics before adding optional static type features.

---

### [Beautiful Native Libraries](https://lucumr.pocoo.org/2013/8/18/beautiful-native-libraries/)
**Type:** Article
**Date:** 2013-08
**Tags/Topics:** C, C++, native libraries, ABI stability, API design, symbol management, testing

Ronacher's guide to writing shared native libraries in C or C++. C is the lingua franca of shared libraries; C++ is acceptable when exceptions, RTTI, and complex constructors are avoided. Key principles: single public header with opaque interface, export macros for symbol visibility, consistent function prefix for namespace isolation, customisable allocators via function pointers, ABI version checking, and testing via Python/CFFI for faster iteration and better crash isolation. The goal: a library that any language can consume reliably.

**Key takeaways:**
- C calling conventions are the interoperability standard for shared libraries across languages.
- Opaque types in public headers enable ABI stability across library versions.
- Testing native libraries with Python/CFFI provides faster iteration and process isolation for crash detection.

---

### [Stop Being Cute and Clever](https://lucumr.pocoo.org/2013/12/9/stop-being-clever/)
**Type:** Article
**Date:** 2013-12
**Tags/Topics:** JavaScript, code clarity, operator abuse, moment.js, Angular, technical debt

Ronacher's experience-report critique of JavaScript library culture: `!~indexOf()` instead of explicit conditionals, unary `+` for type conversion, performance bugs from wrong data structures (linear search in hash tables), mutation-by-default APIs (moment.js), and monkeypatching. He argues these cleverness patterns make debugging and maintenance difficult and predicts JavaScript will mature as developers with experience in more disciplined languages bring those values to the ecosystem.

**Key takeaways:**
- Operator cleverness prioritises brevity over debugging; explicit conditionals are preferable in production code.
- Wrong data structure choices (linear search in hash tables) cause performance bugs that "clever" code hides.
- Mutation-by-default APIs (moment.js) cause subtle bugs when object references leak unexpectedly.

---

### [Appreciating Design](https://lucumr.pocoo.org/2012/2/11/appreciating-design/)
**Type:** Article
**Date:** 2012-02
**Tags/Topics:** design communication, Trac, software architecture, narrative, user perception

Ronacher argues that excellent software design goes unrecognised because developers don't communicate it. Trac had exceptional architecture — extensible plugin systems, thoughtful instance design — but "users don't care" because it was never explained. Apple presents products by showcasing design decisions; software rarely does this. The analogy to luxury products: customers appreciate engineering details when they're shared. "The best design is the one you don't notice" is incomplete advice; you also need to tell people what they're not noticing.

**Key takeaways:**
- Technical excellence that goes uncommunicated is technically invisible and strategically useless.
- Users would value software more if designers shared the reasoning behind design decisions.
- "The best design is invisible" is true for friction, not for appreciation; communicate what you built and why.

---

### [Why I Don't Hate Git: Hidden Consistency](https://lucumr.pocoo.org/2015/2/17/ui-and-hidden-consistency/)
**Type:** Article
**Date:** 2015-02
**Tags/Topics:** Git, UI design, consistency, internal model, trust, reliability

Ronacher explains why Git's famously inconsistent surface (different behaviours for `git remote`, `git branch`, `git tag`; unfamiliar `git show` syntax) is nevertheless tolerable. The reason: Git tutorials teach the internal model (commits, objects, branching), not UI patterns. Once you understand *why* commands work, the surface fades. Git's core architecture hasn't changed since 2005; knowledge remains relevant. It has never caused permanent data loss. This reliability and conceptual integrity override surface inconsistency.

**Key takeaways:**
- A consistent internal model is more valuable than consistent surface UI when the domain is complex.
- Teaching the underlying model rather than UI patterns creates users who understand rather than memorise.
- Reliability (no data loss) builds trust that forgives surface inconsistency over time.

---

### [Bundleless: Not Doing Things Makes You Fast](https://lucumr.pocoo.org/2023/11/30/not-doing-things-makes-you-fast/)
**Type:** Article
**Date:** 2023-11
**Tags/Topics:** JavaScript, bundling, Vite, performance, lazy loading, architecture

Ronacher argues that bundleless development is viable when you minimise what gets loaded, not when you consolidate modules. The misunderstanding: bundlers are fast because they reduce what executes, not because they consolidate files. Python loads modules individually without bundling and remains performant with proper structure. Solutions: minimise cross-dependencies, implement lazy loading, avoid circular dependencies. Vite proves bundleless works when projects are properly organised. "Not doing things makes you fast" applies broadly.

**Key takeaways:**
- Bundling is fast because it reduces code execution, not because it consolidates files.
- Bundleless development works when lazy loading and minimal dependencies reduce what executes initially.
- "Not doing things" — lazy loading, minimal dependencies, deferred execution — is the universal performance strategy.

---

### [I don't understand Python's Asyncio](https://lucumr.pocoo.org/2016/10/30/i-dont-understand-asyncio/)
**Type:** Article
**Date:** 2016-10
**Tags/Topics:** Python, asyncio, concurrency, event loops, complexity, futures

Ronacher's honest admission of inability to reason confidently about Python's asyncio module. Problems: ~14 core primitives required for basic use, two incompatible Future types, different behaviour for `asyncio.iscoroutinefunction` vs `inspect.iscoroutinefunction`, coexistence of generator-based and async/await coroutines, missing context-local storage, and underwhelming performance relative to complexity. He "lacks sufficient confidence to advise others" on asyncio architecture despite years of experience with async systems.

**Key takeaways:**
- Asyncio's complexity requires mastering ~14 primitives plus multiple special methods for basic use.
- Two incompatible Future types and inconsistent inspection functions create genuine confusion even for experts.
- Missing context-local storage is a critical gap for security-sensitive and observability features.

---

### [Playground Wisdom: Threads Beat Async/Await](https://lucumr.pocoo.org/2024/11/18/threads-beat-async-await/)
**Type:** Article
**Date:** 2024-11
**Tags/Topics:** concurrency, async/await, virtual threads, structured concurrency, Java Project Loom

Ronacher argues that async/await is fundamentally flawed for most languages. Problems: "coloured functions" create incompatibility across call boundaries, unresolved promises that never settle, loss of call stack information for debugging, and failure to prevent back pressure problems. Thread advantages: natural suspension from any point, preserved call stacks, no special syntax required. Positive innovations from async that should be preserved: structured concurrency (nursery pattern), channels, and making concurrency a language-level concern. Future languages should use virtual threads (Java Project Loom) with structured concurrency.

**Key takeaways:**
- Async/await creates "coloured functions" that infect codebases and create maintenance friction across call boundaries.
- Structured concurrency (nursery pattern) and channels are the valuable innovations from the async era; they should survive it.
- Virtual threads with structured concurrency are the better model: blocking code, implicit suspension, preserved stacks.

---

### [From Async/Await to Virtual Threads](https://lucumr.pocoo.org/2025/7/26/virtual-threads/)
**Type:** Article
**Date:** 2025-07
**Tags/Topics:** Python, virtual threads, async/await, concurrency, free-threading

Ronacher proposes that Python adopt virtual threads with structured concurrency rather than continuing to develop asyncio. Async/await "leaks complexity into the programming language for users" — futures, promises, task abstractions all require learning. Virtual threads move concurrency complexity "into the interpreter and the internal APIs" where it belongs. Free-threading (GIL removal) makes async's non-blocking guarantees less meaningful. Proposed API: `with ThreadGroup() as g: g.spawn(...)` for structured concurrent operations.

**Key takeaways:**
- Virtual threads would allow programmers to write blocking code that the interpreter suspends automatically.
- Free-threading makes asyncio's non-blocking guarantee less meaningful as a differentiator.
- A `ThreadGroup` context manager can provide structured concurrency without async syntax overhead.

---

### [I'm not feeling the async pressure](https://lucumr.pocoo.org/2020/1/1/async-pressure/)
**Type:** Article
**Date:** 2020-01
**Tags/Topics:** async/await, back pressure, flow control, HTTP/2, asyncio, system design

Ronacher argues that async/await systems systematically ignore back pressure — the resistance that communicates resource constraints upstream. When async systems queue requests without bound, they buffer silently until memory exhaustion and failure. Uses the 2008 Heathrow Terminal 5 baggage collapse as an analogy for admission-of-overload vs silent buffering. Python's `asyncio.StreamWriter.write()` lacks implicit flow control; `drain()` must be called manually. HTTP/2's flow control signals are commonly ignored in implementations.

**Key takeaways:**
- Async's ease of use masks distributed-system complexity that thread-based systems contained more naturally.
- Back pressure must be designed explicitly in async systems; the default is unbounded queuing and eventual crash.
- `asyncio.StreamWriter.write()` without `drain()` is a footgun that async systems make too easy to deploy.

---

### [On Programming Communities](https://lucumr.pocoo.org/2014/2/13/programming-communities/)
**Type:** Article
**Date:** 2014-02
**Tags/Topics:** Python community, mentorship, community vs technology, career

Ronacher reflects on ten years in the Python community, distinguishing attachment to community from attachment to technology. He credits online communities with shaping his career: Georg Brandl taught him programming fundamentals, Jacob Kaplan-Moss encouraged him to speak at conferences. "It's very easy to forget about all the people that put you to the place you are today." He is less attached to Python-the-language than to Python-the-community. The Python community's welcoming nature serves as "an amazing starting point into software development and Open Source."

**Key takeaways:**
- Communities matter more than the technologies they're organised around; technology can change, community shapes you.
- Mentorship and welcoming culture compound into career outcomes that no individual contribution explains.
- Emotional attachment to a language vs its community is worth distinguishing; you can outgrow one while keeping the other.

---

### [Introducing Lektor — A Static File Content Management System For Python](https://lucumr.pocoo.org/2015/12/21/introducing-lektor/)
**Type:** Article
**Date:** 2015-12
**Tags/Topics:** Lektor, static site generators, CMS, non-technical users, Python

Ronacher explains why he built Lektor: static site generators like Jekyll and Hugo are aimed at programmers and inaccessible to non-technical users. Lektor's innovation is a locally-hosted admin interface — eliminating database maintenance while providing a content management experience for non-developers. Design philosophy: flexible framework rather than prescriptive blog engine, letting users model their own content structures. Motivated by the need to maintain his parents' website without WordPress's complexity.

**Key takeaways:**
- Static site generators are inaccessible to non-technical users despite solving a non-technical problem.
- A locally-hosted admin panel bridges the gap between static generation and content management UX.
- Building tools for your own specific non-programmer users (parents, non-technical stakeholders) reveals gaps in the ecosystem.

---

### [The Problem with Implicit Scoping in CoffeeScript](https://lucumr.pocoo.org/2011/12/22/implicit-scoping-in-coffeescript/)
**Type:** Article
**Date:** 2011-12
**Tags/Topics:** CoffeeScript, scoping, language design, variable shadowing, implicit behaviour

Ronacher documents a dangerous CoffeeScript scoping rule: "always reassign unless unknown from higher scope." A real-world bug: importing `{log}` from Math at file level silently made a local `log` variable inside a function global, breaking functionality. "Adding an import or writing a new function should never, ever affect local code in a function." The inconsistency: function parameters shadow outer variables, but explicit imports don't. He proposes an explicit reassignment operator (like Python's `nonlocal`) as the fix.

**Key takeaways:**
- Implicit scoping that makes imports or globals silently capture local names is a dangerous language design.
- "Adding code elsewhere should never affect existing local code in a function" is a fundamental scoping invariant.
- Python's `nonlocal` keyword and explicit operators solve this correctly; CoffeeScript chose the wrong default.

---

### [Say "Yes" to JavaScript](https://lucumr.pocoo.org/2013/7/1/say-yes-to-javascript/)
**Type:** Article
**Date:** 2013-07
**Tags/Topics:** JavaScript, browser policy, Firefox, web standards

Ronacher argues that removing the option to disable JavaScript in Firefox is the right decision for web standards progress. Websites built with progressive enhancement (working without JavaScript) are rare and getting rarer; the developer and QA cost of supporting no-JS users is not justified by the size of that population. A consistent baseline (JavaScript always available) lets browsers and frameworks make better assumptions.

**Key takeaways:**
- Progressive enhancement for no-JavaScript users imposes real developer cost for diminishing user populations.
- Consistent browser capability baselines enable better framework and specification design.
- Platform commitments (JavaScript always available) drive ecosystem quality improvements faster than optional support.

---

### [Your Node is Leaking Memory? setTimeout Could be the Reason](https://lucumr.pocoo.org/2024/6/5/node-timeout/)
**Type:** Article
**Date:** 2024-06
**Tags/Topics:** Node.js, memory leaks, setTimeout, AsyncLocalStorage, debugging

Ronacher documents a Node.js memory leak caused by `setTimeout` returning heavyweight `Timeout` objects (unlike browsers, which return numbers). The Timeout object holds callback closure references. When `AsyncLocalStorage` is used, the Timeout accumulates hidden state in `Symbol(kResourceStore)` that persists after timeout completion. A Node.js bug prevents proper cleanup even with primitive ID conversion. Mitigation: aggressively delete timeout references, or architect to prevent AsyncLocalStorage propagation into long-lived resources.

**Key takeaways:**
- Node.js `setTimeout` returns heavyweight objects, not numbers; these accumulate hidden AsyncLocalStorage state.
- A Node.js bug prevents `clearTimeout` from cleaning up properly when using primitive timer IDs.
- Aggressive manual deletion of timeout references is the current mitigation until the bug is fixed.

---

### [Git and Mercurial Branching](https://lucumr.pocoo.org/2010/8/17/git-and-mercurial-branching/)
**Type:** Article
**Date:** 2010-08
**Tags/Topics:** Git, Mercurial, branching, version control, cherry-picking

Ronacher compares Mercurial and Git branching models. Mercurial's strengths: better collaboration tools (`hg incoming`/`outgoing`/`serve`), more intuitive UI overall. Git's decisive advantage: branches are labels, not changeset properties, enabling flexible cherry-picking across maintenance branches. When Mercurial's transplant command is used (cherry-pick equivalent), `incoming`/`outgoing` commands break because changesets embed branch names. For projects maintaining multiple versions with selective backports, Git's model is structurally superior.

**Key takeaways:**
- Git's branches-as-labels model enables cherry-picking without corrupting collaboration tools.
- Mercurial's embedded branch names in changesets create structural problems for multi-version maintenance.
- Despite Mercurial's UX advantages, Git's branching model is better suited for the most common collaborative workflows.
