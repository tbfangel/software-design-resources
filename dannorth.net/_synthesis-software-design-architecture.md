---
type: synthesis
title: "Software Design & Architecture"
description: "This cluster examines software design principles, architectural patterns, and North's critique of established design dogma, including his CUPID principles as an alternative to SOLID."
tags: ["software-design-architecture"]
timestamp: 2026-07-05
---
# Software Design & Architecture

> This cluster examines software design principles, architectural patterns, and North's critique of established design dogma, including his CUPID principles as an alternative to SOLID.

## Key Insights

**SOLID principles were designed for an obsolete era when code changes were expensive and risky.** Open-Closed assumes immutable building blocks, but modern development treats code as "malleable...like clay" through version control, automated testing, and continuous deployment. Dependency Inversion has "caused billions of dollars in irretrievable sunk cost" by creating shadow codebases of interfaces existing solely for framework satisfaction. Interface Segregation addresses symptoms (God objects) rather than preventing root causes. Single Responsibility is "Pointlessly Vague" with no clear definition of "one thing." All five principles converge on the same recommendation when properly understood: write simple code that fits within human cognitive capacity at any scale of granularity.

**CUPID offers properties to improve toward, not principles to comply with.** The critical distinction: properties allow continuous improvement and contextual decision-making rather than binary compliance. Composable (plays well with others), Unix philosophy (does one thing well), Predictable (behaves as expected), Idiomatic (feels natural), and Domain-based (mirrors problem domain) create goals that acknowledge trade-offs and context. Developer experience is a legitimate design concern—"joyful" code comes from habitability where people understand systems "comfortably and confidently." This reframing moves from rigid rules creating artificial constraints to flexible goals enabling better judgment.

**Change Event Horizon determines whether to build specifically or generally.** This single concept resolves the apparent deadlock between simplicity-now and abstraction-upfront approaches. Short horizons (agile projects with continuous deployment) favor solving current needs specifically with later refactoring; long horizons (programming language design, public APIs) require upfront generalization since reversal becomes impractical. "Too simple" means ignoring the consequences of your change event horizon—agile developers safely embrace specificity through automation and rapid iteration, while platform designers face unpredictable user behaviors requiring careful prediction. Context-awareness beats ideological commitment to either extreme.

**Goal-oriented vocabulary shapes thinking—name purposes, not mechanisms.** "Bottle opener" captures the goal (accessing beer) rather than the mechanism (removing caps), and this distinction fundamentally influences problem-solving. Task-oriented language traps you into thinking about means rather than ends, limiting creative solutions. "Behaviour-driven" names the business goal while "test-driven" describes a means—this linguistic choice matters for maintaining value focus. Stepping back to "blur" implementation details and asking "whose responsibility is this?" from outside perspective clarifies architecture where mechanical task thinking creates thrashing.

**Best Simple System for Now: quality and speed are complementary when solving for current needs.** The false dichotomy between "quick and dirty" and "thorough and slow" collapses when you focus on "the simplest system that meets the needs of the product right now, written to an appropriate standard." For Now counters programmer bias toward premature generalization; Simple means minimal complexity for current needs (not cutting corners); Best means quality appropriate to context. Prerequisites include good habits (recognizing when to stop over-engineering), courage (trying uncomfortable approaches), and humility (accepting prediction limits). Successful prototypes often become production systems, so starting with appropriate quality prevents costly technical debt while iterative delivery reduces financial risk through earlier revenue and faster feedback.

**Service-oriented architecture succeeds through business understanding, not technology prowess.** The 1950s corporation metaphor makes abstract SOA principles tangible by framing services as departments providing specific functions. Critical insight: avoid universal domain models since different stakeholders interpret business concepts differently—allow each service to maintain tailored understanding while communicating through shared concepts. Map service providers to actual organizational departments to ensure services reflect genuine business processes rather than purely technical constructs. Solid SOA design emerges from understanding real business interactions before implementing any technology, with asynchronous messaging, error-handling, and correlation as fundamental service concerns.

---

## Related
- [CUPID: for joyful coding](/dannorth.net/2022-02-cupid-for-joyful-coding.md)
- [CUPID: the back story](/dannorth.net/2021-03-cupid-the-back-story.md)
- [Best Simple System for Now](/dannorth.net/2025-02-best-simple-system-for-now.md)
- [How simple is too simple?](/dannorth.net/2006-05-how-simple-is-too-simple.md)
- [Goal-oriented vocabulary - saying what you mean](/dannorth.net/2008-02-goal-oriented-vocabulary.md)
- [The rise and rise of JavaScript](/dannorth.net/2011-12-the-rise-and-rise-of-javascript.md)
- [A Classic Introduction to SOA](/dannorth.net/2007-09-classic-soa.md)
- [SOA for the rest of us](/dannorth.net/2007-09-soa-for-the-rest-of-us.md)
- [What's so hard about Event-Driven Programming?](/dannorth.net/2006-04-whats-so-hard-about-event-driven-programming.md)
- [Using Hugo as a redirect service](/dannorth.net/2023-10-hugo-redirects.md)
