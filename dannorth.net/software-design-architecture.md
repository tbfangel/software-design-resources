# Software Design & Architecture

> Part of the [Dan North overview](overview.md)

This cluster examines software design principles, architectural patterns, and North's critique of established design dogma, including his CUPID principles as an alternative to SOLID. The writing emphasizes context-appropriate design decisions, simplicity focused on current needs, and goal-oriented vocabulary that captures intent rather than implementation details.

## Key Insights

**SOLID principles were designed for an obsolete era when code changes were expensive and risky.** Open-Closed assumes immutable building blocks, but modern development treats code as "malleable...like clay" through version control, automated testing, and continuous deployment. Dependency Inversion has "caused billions of dollars in irretrievable sunk cost" by creating shadow codebases of interfaces existing solely for framework satisfaction. Interface Segregation addresses symptoms (God objects) rather than preventing root causes. Single Responsibility is "Pointlessly Vague" with no clear definition of "one thing." All five principles converge on the same recommendation when properly understood: write simple code that fits within human cognitive capacity at any scale of granularity.

**CUPID offers properties to improve toward, not principles to comply with.** The critical distinction: properties allow continuous improvement and contextual decision-making rather than binary compliance. Composable (plays well with others), Unix philosophy (does one thing well), Predictable (behaves as expected), Idiomatic (feels natural), and Domain-based (mirrors problem domain) create goals that acknowledge trade-offs and context. Developer experience is a legitimate design concern—"joyful" code comes from habitability where people understand systems "comfortably and confidently." This reframing moves from rigid rules creating artificial constraints to flexible goals enabling better judgment.

**Change Event Horizon determines whether to build specifically or generally.** This single concept resolves the apparent deadlock between simplicity-now and abstraction-upfront approaches. Short horizons (agile projects with continuous deployment) favor solving current needs specifically with later refactoring; long horizons (programming language design, public APIs) require upfront generalization since reversal becomes impractical. "Too simple" means ignoring the consequences of your change event horizon—agile developers safely embrace specificity through automation and rapid iteration, while platform designers face unpredictable user behaviors requiring careful prediction. Context-awareness beats ideological commitment to either extreme.

**Goal-oriented vocabulary shapes thinking—name purposes, not mechanisms.** "Bottle opener" captures the goal (accessing beer) rather than the mechanism (removing caps), and this distinction fundamentally influences problem-solving. Task-oriented language traps you into thinking about means rather than ends, limiting creative solutions. "Behaviour-driven" names the business goal while "test-driven" describes a means—this linguistic choice matters for maintaining value focus. Stepping back to "blur" implementation details and asking "whose responsibility is this?" from outside perspective clarifies architecture where mechanical task thinking creates thrashing.

**Best Simple System for Now: quality and speed are complementary when solving for current needs.** The false dichotomy between "quick and dirty" and "thorough and slow" collapses when you focus on "the simplest system that meets the needs of the product right now, written to an appropriate standard." For Now counters programmer bias toward premature generalization; Simple means minimal complexity for current needs (not cutting corners); Best means quality appropriate to context. Prerequisites include good habits (recognizing when to stop over-engineering), courage (trying uncomfortable approaches), and humility (accepting prediction limits). Successful prototypes often become production systems, so starting with appropriate quality prevents costly technical debt while iterative delivery reduces financial risk through earlier revenue and faster feedback.

**Service-oriented architecture succeeds through business understanding, not technology prowess.** The 1950s corporation metaphor makes abstract SOA principles tangible by framing services as departments providing specific functions. Critical insight: avoid universal domain models since different stakeholders interpret business concepts differently—allow each service to maintain tailored understanding while communicating through shared concepts. Map service providers to actual organizational departments to ensure services reflect genuine business processes rather than purely technical constructs. Solid SOA design emerges from understanding real business interactions before implementing any technology, with asynchronous messaging, error-handling, and correlation as fundamental service concerns.

---

### [CUPID: for joyful coding](https://dannorth.net/blog/cupid-for-joyful-coding/)
**Type:** Article
**Date:** 2022-02
**Tags:** design, programming

North proposes CUPID as a replacement framework for SOLID principles, arguing that principles function as rigid rules while properties offer flexible goals to move toward. Rather than binary compliance, properties allow continuous improvement and contextual decision-making. The five CUPID properties are: Composable (plays well with others through small APIs, clear intent, minimal dependencies), Unix philosophy (does one thing well with simple consistent models), Predictable (behaves as expected, deterministic, observable through instrumentation), Idiomatic (feels natural by conforming to language conventions and team standards), and Domain-based (solution mirrors the problem domain in language, structure, and boundaries). North critiques SOLID for creating artificial constraints, arguing that separating UI rendering from business logic per Single Responsibility Principle often forces developers to maintain duplicate code across disconnected files, increasing cognitive load. The framework centers on creating "joyful" code through habitability, referencing Richard P. Gabriel's concept that good code enables people to understand it "comfortably and confidently."

**Key takeaways:**
- Properties offer flexible goals rather than rigid rules, allowing continuous improvement
- CUPID emphasizes composability, Unix philosophy, predictability, idiomatic code, and domain-based design
- SOLID creates artificial constraints that increase cognitive load through forced separation
- Developer experience is a legitimate design concern worth centering in principles
- Good code enables comfortable and confident understanding (habitability)
- Properties allow contextual decision-making rather than binary compliance
- "Joyful" code comes from designs that feel natural and mirror problem domains

---

### [CUPID: the back story](https://dannorth.net/blog/cupid-the-back-story/)
**Type:** Article
**Date:** 2021-03
**Tags:** design, programming

North developed CUPID as an alternative to SOLID after years of questioning their relevance to modern software development, emerging from a presentation at PubConf London. His critiques: Single Responsibility is "Pointlessly Vague" with undefined boundaries for "one thing," Open-Closed is rooted in an era when code was expensive to change (modern development treats code as "malleable...like clay"), Liskov Substitution's association with inheritance-based thinking creates unnecessary complexity when composition suffices, Interface Segregation is a pattern addressing legacy God objects rather than a universal principle ("the Stable Door Principle"), and Dependency Inversion has "caused billions of dollars in irretrievable sunk cost" creating shadow codebases of interfaces existing solely for framework satisfaction. Each critique converges on a single recommendation: "write simple code" that fits within human cognitive capacity at any scale of granularity.

**Key takeaways:**
- SOLID principles were designed for an era when code changes were expensive and risky
- Modern development treats code as malleable, making Open-Closed principle obsolete
- Obsessive Dependency Inversion creates shadow codebases of unnecessary interfaces
- Interface Segregation addresses symptoms (God objects) rather than preventing root causes
- Single Responsibility lacks clear definition of what constitutes "one thing"
- All SOLID critiques converge on: write simple code within human cognitive capacity
- Composition often suffices where SOLID pushes toward inheritance-based complexity

---

### [Best Simple System for Now](https://dannorth.net/blog/best-simple-system-for-now/)
**Type:** Article
**Date:** 2025-02
**Tags:** programming, software, agile

North challenges the false dichotomy between "quick and dirty" versus "thorough and slow" development, proposing the Best Simple System for Now (BSSN): "The simplest system that meets the needs of the product right now, written to an appropriate standard." The approach comprises three elements: For Now (avoid anticipating future needs, counter pattern-matching bias toward general solutions), Simple (pursue minimal complexity for current needs, focused design without speculative features), and Best (maintain quality appropriate to context). North counters common objections: successful prototypes often become production systems so starting with quality prevents costly messes, delivering partial functionality quickly often serves customers better (iPhone launched without copy-paste), and iterative delivery reduces financial risk through earlier revenue and faster feedback despite higher raw effort costs. Prerequisites include good habits (disciplined practice recognizing when to stop), courage (trying approaches outside comfortable patterns), and humility (accepting inability to predict future accurately). A trading firm rejected library complexity and built nine minimal JSON marshaling interfaces instead, while XStream's deliberately simple XML serializer proved valuable for 20+ years.

**Key takeaways:**
- Quality and speed aren't opposing forces—they're complementary when solving for current needs
- "For Now" counters programmer bias toward general solutions by focusing on present requirements
- Iterative delivery reduces financial risk through earlier revenue and faster feedback cycles
- Successful prototypes often become production systems, so start with appropriate quality
- Minimal complexity for current needs differs from cutting corners or over-engineering
- "Write the software appropriate to the context...confident you can evolve, replace or delete this"
- Prerequisites: good habits, courage to try new approaches, humility about prediction limits
- Delivering partial functionality quickly often serves customers better than waiting for completeness

---

### [How simple is too simple?](https://dannorth.net/blog/how-simple-is-too-simple/)
**Type:** Article
**Date:** 2006-05
**Tags:** agile, complexity, programming, simplicity

North addresses the fundamental design debate between building specifically for current needs versus abstractly for future flexibility. The breakthrough insight is the Change Event Horizon: the timeframe before reversing a decision becomes feasible. This concept resolves the apparent deadlock between simplicity-now and generalization-upfront approaches. Short horizons (agile projects with continuous deployment) favor simplicity now with later refactoring, while long horizons (programming language design) demand upfront generalization since "change event horizon is huge." Generalization becomes necessary when decisions carry lasting consequences: language designers cannot easily undo choices, but internal enterprise applications can pivot at the next release cycle. "Too simple" means ignoring your change event horizon's scope. Agile developers can safely embrace specificity through automation and rapid iteration, while platform designers must predict user needs carefully.

**Key takeaways:**
- Change Event Horizon determines whether to build specifically or generally
- Short horizons (agile, continuous deployment) favor simplicity now, refactor later
- Long horizons (language design, platforms) require upfront generalization
- Context-awareness resolves specificity vs. abstraction debate better than ideology
- "Too simple" means ignoring the consequences of your change event horizon
- Agile developers safely embrace specificity through automation and rapid iteration
- Platform designers face unpredictable user behaviors requiring careful prediction
- The determining factor is when you can feasibly reverse a decision

---

### [Goal-oriented vocabulary - saying what you mean](https://dannorth.net/blog/goal-oriented-vocabulary/)
**Type:** Article
**Date:** 2008-02
**Tags:** agile, bdd, design, language, problem-solving

North argues that language shapes how we think about problems, advocating naming things after their purpose rather than describing tasks mechanically. The bottle opener example illustrates this: the device technically removes caps, but we call it a "bottle opener" because that's the actual goal—accessing the beer. Task-oriented language can trap you into thinking about means rather than ends, limiting creative solutions. North contrasts "search engines" (task-focused) with Google's approach of guessing what users want to find, shifting the entire user experience. When stuck on legacy code restructuring, stepping back to "blur" the details and ask "whose responsibility is this?" revealed clearer paths forward. His teammates adopted this explicitly: "We're thrashing here—let's step back and start from the outside again." Linus Torvalds reframed source control problems by considering the goal (successful merging) rather than the task (branching). North concludes that "behaviour-driven" contrasts meaningfully with "test-driven": the former names the actual business goal, the latter describes a means.

**Key takeaways:**
- Naming things after purpose rather than mechanism shapes clearer thinking about solutions
- Task-oriented language traps you into thinking about means rather than ends
- "Bottle opener" names the goal (opening bottles) not the mechanism (removing caps)
- Stepping back to "blur" details reveals responsibility boundaries in complex code
- "Behaviour-driven" names the business goal; "test-driven" describes a means
- Goal-oriented vocabulary enables creative solutions beyond mechanical task descriptions
- Language choice fundamentally influences problem-solving approaches
- Asking "whose responsibility is this?" from outside perspective clarifies architecture

---

### [The rise and rise of JavaScript](https://dannorth.net/blog/the-rise-and-rise-of-javascript/)
**Type:** Article
**Date:** 2011-12
**Tags:** history, html5, javascript, nodejs, programming, web

North traces JavaScript's evolution from troubled beginnings caught between competing interests to becoming a full-stack platform. The ecosystem fragmented into incompatible frameworks (GWT, ExtJS, Prototype, YUI) until jQuery arrived with pragmatic approach: "if they made those things really easy you could probably figure out the rest, including JavaScript itself." Google's Chrome browser catalyzed standardization through open-sourcing and aggressive HTML5 advocacy, bundling developer tools natively rather than requiring plugins. Even Microsoft abandoned Silverlight to embrace web standards. Ryan Dahl recognized synchronous I/O as a bottleneck and built Node.js atop Google's V8 engine, transferring the browser's single-threaded event loop paradigm to servers where callbacks and asynchronous patterns became natural. Libraries like underscore.js and async addressed JavaScript's functional programming gaps. JSON became universal serialization format, NoSQL databases adopted JavaScript as query language, and tablets/ChromeOS made web applications viable alternatives to native platforms.

**Key takeaways:**
- jQuery's pragmatic approach unified fragmented JavaScript ecosystem
- Chrome's open-sourcing and native developer tools raised industry expectations
- Node.js transferred browser's event loop paradigm to servers, making async patterns natural
- Arriving late to JavaScript meant inheriting solutions rather than fighting language-level problems
- JSON became universal serialization format across platforms
- Single language across browser, server, and database enabled "full-stack applications"
- Tablets and ChromeOS made web applications viable alternatives to native platforms
- Ecosystem maturation through libraries (underscore.js, async) addressed functional programming gaps

---

### [A Classic Introduction to SOA](https://dannorth.net/blog/classic-soa/)
**Type:** Article
**Date:** 2007-09
**Tags:** architecture, SOA, business context

North prioritizes business understanding over technology in service-oriented architecture, arguing that "the most important criteria for a service-oriented architect—before tackling the technology—should be a keen understanding of the business." He uses a 1950s corporation metaphor to explain SOA concepts without technical jargon, framing services as departments providing specific functions. Key service elements identified include service providers and consumers, asynchronous messaging with reliability concerns, error-handling strategies and transaction boundaries, response correlation mechanisms, service availability and capacity planning, and security and compliance requirements. Critical insights: avoid universal domain models since different stakeholders interpret business concepts differently (allow each service to maintain tailored understanding while communicating through shared concepts), support responsible evolution with backward compatibility ("gracefully degrade") but clear failure feedback when upgrades mandatory, and map service providers to actual organizational departments to ensure services reflect genuine business processes.

**Key takeaways:**
- Business understanding matters more than technology choice in SOA design
- Map service providers to actual organizational departments for genuine business alignment
- Avoid universal domain models—allow tailored understanding while sharing business concepts
- Support backward compatibility but provide clear failure feedback for mandatory upgrades
- 1950s corporation metaphor makes abstract architecture principles tangible and relatable
- Services should reflect genuine business processes, not purely technical constructs
- Solid SOA design emerges from understanding real business interactions before implementing technology
- Asynchronous messaging, error-handling, and correlation are fundamental service concerns

---

### [SOA for the rest of us](https://dannorth.net/blog/soa-for-the-rest-of-us/)
**Type:** Article
**Date:** 2007-09
**Tags:** agile, architecture, articles, programming, services, soa, software

North wrote an introductory article on service-oriented architecture for non-technical audiences, published in Better Software magazine's May 2007 issue. The article was designed to "introduce service-oriented architecture to non-technical people," making complex architectural concepts understandable beyond developer circles. Available in two formats (PDF with vintage 1950s-style graphics and HTML single-page), both freely accessible. By framing SOA through non-technical language and visual storytelling, the piece demonstrates that enterprise architecture concepts needn't remain confined to specialist audiences. The retro design choice suggests using familiar, digestible frameworks to explain modern infrastructure approaches.

**Key takeaways:**
- Complex architectural concepts can and should be made accessible to non-technical stakeholders
- Visual storytelling and familiar frameworks (1950s business context) aid understanding
- Enterprise architecture knowledge benefits from democratization beyond specialist audiences
- Retro design choices make modern infrastructure approaches more digestible
- SOA principles apply to business stakeholders, not just developers
- Free accessibility removes barriers to architectural literacy

---

### [What's so hard about Event-Driven Programming?](https://dannorth.net/blog/whats-so-hard-about-event-driven-programming/)
**Type:** Article
**Date:** 2006-04
**Tags:** architecture, concurrency, design, programming, software

North identifies a core tension in event-driven programming: replacing simple synchronous code with complex queue-based architectures introduces operational complexity. "You just replaced a nice, simple three line method with a bunch of queues, events, consumers and goodness knows what else." The primary concern is emergent behavior in asynchronous systems: unpredictable interactions arising when multiple queues operate independently without tight coupling. North proposes a multi-stage queue model where each processing step (pricing, persistence, notification) operates independently with its own consumer threads, replacing sequential blocking calls with message passing. Rather than fighting asynchronous complexity, he advocates accepting abstraction layers: just as programmers trust "polymorphism" without tracking exact method dispatch, they should trust "threading pixies" to handle concurrent execution reliably. The decoupled queue approach enables dynamic resource allocation—adding workers to congested queues while reducing threads elsewhere—making systems massively scalable with graceful degradation under load.

**Key takeaways:**
- Event-driven systems replace simple synchronous code with complex queue-based architectures
- Emergent behavior (unpredictable interactions) is primary concern in asynchronous systems
- Multi-stage queue model with independent processing steps enables better resource allocation
- Accept abstraction layers: trust "threading pixies" like you trust polymorphism
- Decoupled queues enable dynamic resource allocation and graceful degradation under load
- Event-driven systems aren't inherently harder—they require shifting mental models
- Massively scalable systems emerge from independent queue-based processing stages
- Paradigm shift similar to object-oriented programming adoption

<!-- NOTE: classification uncertain — review before merging -->
### [Using Hugo as a redirect service](https://dannorth.net/blog/hugo-redirects/)
**Type:** Article
**Date:** 2023-10
**Tags/Topics:** Hugo, static site generator, redirects, URL management, tooling

Dan North describes how he used Hugo's built-in aliases feature and a small custom template to replace external URL-shortening services entirely. When reorganising roughly 100 blog posts from date-structured URLs to a flat hierarchy, he wrote a Go utility to automate alias generation rather than edit each post by hand. For external redirects he created a minimal Hugo template that reads a custom `.Params.target` parameter in place of the fixed `.Permalink` property, producing a one-line solution. The post argues that Hugo's templating system is flexible enough to handle both internal and external redirect needs without reaching for a dedicated service.

**Key takeaways:**
- Hugo's `aliases` front-matter key generates redirect pages automatically, preserving old URLs when content moves.
- A small Go utility can automate alias generation at scale, avoiding manual edits across large post archives.
- A custom Hugo template with a `.Params.target` parameter extends the built-in alias mechanism to redirect to arbitrary external URLs.
- Static site generators often contain enough flexibility to handle operational concerns (like URL management) that are commonly delegated to third-party tools.
