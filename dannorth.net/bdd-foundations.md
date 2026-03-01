# BDD Foundations

> Part of the [Dan North overview](overview.md)

This cluster captures Dan North's foundational writing on Behavior-Driven Development (BDD), which he originated in the mid-2000s. These posts establish the core concepts, practices, and vocabulary that distinguish BDD from traditional Test-Driven Development, focusing on how behavioral language bridges communication gaps between technical and business stakeholders.

## Key Insights

**BDD is fundamentally about communication, not testing.** While it emerged from frustrations with TDD terminology, BDD's true value lies in creating shared understanding across diverse stakeholders through ubiquitous language. The Given-When-Then format and story structure aren't just specification templates—they're conversation tools that force explicit discussion of assumptions, business value, and acceptance criteria before implementation begins.

**Domain language determines scenario quality and brittleness.** Scenarios that mix vocabularies from multiple unrelated domains (UI implementation details, security jargon, infrastructure concerns) become fragile and hard to maintain. The sweet spot is exactly two domains: the problem domain (what capability we're describing) and the solution domain (how the application implements it). This constraint surfaces when requirements span too many concerns and need decomposition.

**Hidden domain concepts emerge through specification work.** When BDD scenarios become verbose or require excessive examples, it often signals a missing domain concept that should be named and modeled explicitly. The cancellation date example demonstrates how proper domain modeling simplifies specifications: instead of embedding complex time calculations in scenarios, extract the concept, define its behavior separately, and reference it clearly.

**The distinction between BDD and TDD is organizational, not technical.** In small, homogeneous programming teams, BDD and TDD collapse into equivalence—both serve as design tools with similar outcomes. The difference emerges in cross-functional contexts with testers, analysts, business stakeholders, and multiple SMEs covering interrelated domains. BDD addresses communication challenges that TDD was never designed to solve, making living documentation valuable precisely where code-based tests cannot bridge understanding gaps.

**Community identity through examples, not mandates.** North consistently resists defining BDD through mandatory practices or certification, instead advocating for centered communities built around shared values. Examples, experience reports, and context-rich recipes teach BDD more effectively than rules or bounded membership criteria. This approach allows organic evolution of practices (like Three Amigos) while maintaining accessibility for newcomers.

---

### [Introducing BDD](https://dannorth.net/blog/introducing-bdd/)
**Type:** Article
**Date:** 2006-09
**Tags:** agile, bdd, tdd, testing

North introduces Behavior-Driven Development as a response to confusion around Test-Driven Development, particularly regarding what to test and how to name tests. He argues that the word "test" creates cognitive friction, while "behaviour" more accurately describes the practice of specifying what a system should do. The article proposes the "should" template for naming ("The class should do something"), which naturally limits test scope to single responsibilities. North demonstrates BDD through the Given-When-Then scenario format, showing how it creates ubiquitous language across analysts, developers, testers, and business stakeholders. The ATM withdrawal example illustrates how behavioral scenarios map directly to executable code while remaining readable to non-programmers.

**Key takeaways:**
- Replacing "test" with "behaviour" clarifies purpose and reduces confusion for TDD practitioners
- The "should" template constrains tests to describe one behavior, encouraging better design
- Given-When-Then scenarios bridge the gap between business requirements and executable code
- Ubiquitous language derived from Domain-Driven Design enables shared understanding across roles
- Expressive behavioral names enable rapid diagnosis when specifications fail

---

### [What's in a Story?](https://dannorth.net/blog/whats-in-a-story/)
**Type:** Article
**Date:** 2007-02
**Tags:** agile, bdd, requirements, stories

North defines the structure of BDD stories as the fundamental unit for capturing requirements in a way that creates shared understanding about what constitutes completion. He presents the canonical story template: a title describing an activity, a narrative ("As a [role] I want [feature] so that [benefit]"), and acceptance criteria as Given-When-Then scenarios. The ATM withdrawal example demonstrates how multiple scenarios (sufficient funds, insufficient funds, disabled card, low ATM balance) define scope while maintaining focus on a single feature. North emphasizes that stories are "conversation starters" rather than final documentation, and that breaking stories along business lines rather than technical divisions enables stakeholders to observe tangible progress. Good Givens include all necessary context but nothing more, avoiding both excessive and missing details that create ambiguity.

**Key takeaways:**
- Story titles should name activities, not abstract concepts
- Narratives must include role, feature, and business benefit to clarify motivation
- Scenario titles identify differences between test cases
- Stories should fit within iterations (typically 5-6 scenarios maximum)
- Breaking stories along business lines makes progress visible to stakeholders
- Givens establish context; Whens describe the feature; Thens specify outcomes
- Stories function as collaborative dialogue tools, not comprehensive documentation

---

### [BDD is like TDD if](https://dannorth.net/blog/bdd-is-like-tdd-if/)
**Type:** Article
**Date:** 2012-05
**Tags:** agile, bdd, programming, tdd

North clarifies the relationship between BDD and TDD, arguing they appear identical in programming-only teams but diverge significantly when non-programmers join. He explains that TDD suffices for homogeneous teams of programmers (like the Chrysler C3 XP team with world-class programmers and one embedded subject matter expert), but BDD addresses broader communication challenges across diverse stakeholders including testers, analysts, project managers, and multiple subject matter experts covering interrelated domains. The key distinction is that BDD solves communication problems beyond TDD's scope, making living documentation essential for cross-functional collaboration. Specification-by-example becomes valuable precisely because it bridges communication gaps that pure code-based testing cannot address in complex organizational contexts.

**Key takeaways:**
- BDD and TDD collapse into equivalence for small, homogeneous programming teams
- The distinction matters when diverse stakeholder perspectives must be reconciled
- BDD addresses communication challenges that TDD was not designed to solve
- Living documentation bridges gaps between technical and non-technical collaborators
- Organizations with polyglot teams need approaches addressing shared understanding

---

### [BDD with Intent](https://dannorth.net/blog/bdd-with-intent/)
**Type:** Article
**Date:** 2006-02
**Tags:** agile, bdd, intentional, software

North explores intentional programming through Charles Simonyi's career trajectory, presenting four foundational observations: computers receive instructions in technical terms rather than business language, developers simultaneously translate business concepts into technical implementations and arrange those implementations, Subject Matter Experts cannot directly generate systems without programmer intermediaries, and most system changes involve recombining existing concepts rather than learning new ones. The core insight: "We split these roles of programmer-as-translator and programmer-as-system-generator." This separation allows programmers to work with SMEs defining "intentions" (business concepts), then independently build program generators based on those intentions, eventually enabling SMEs to express requirements as rearrangements of existing intentions without programmer involvement. North positions BDD as a pragmatic middle path before full intentional programming arrives: expressing requirements as expected system behaviors using business domain language naturally creates the cross-functional conversations (between analysts, testers, and developers) that intentional programming theoretically enables.

**Key takeaways:**
- Intentional programming separates programmer-as-translator from programmer-as-system-generator roles
- Most system changes involve recombining existing concepts rather than learning new ones
- SMEs could eventually express requirements as rearrangements of intentions without programmer involvement
- BDD offers accessible preparation for intentional programming's eventual arrival
- Expressing requirements in business domain language creates necessary cross-functional conversations
- Translation vs. arrangement: once domains are understood, work shifts to recombination
- BDD bridges current practice toward intentional programming's theoretical benefits

---

### [Behaviour-driven stories](https://dannorth.net/blog/behaviour-driven-stories/)
**Type:** Article
**Date:** 2007-02
**Tags:** agile, articles, bdd, programming, summary

North addresses a critical misconception about Behaviour-Driven Development, clarifying that BDD is often misunderstood as merely "a repackaging of test-driven development" when it actually represents a broader methodology encompassing requirement definition and specification. A fundamental challenge emerged during a software architecture workshop: many practitioners outside agile circles were unfamiliar with the concept of "stories" as agile requirements, revealing widespread variation in how organizations identify and define requirements. North emphasizes the need to explain what makes a story distinctly behaviour-driven rather than assuming universal understanding, committing to clarify this concept through detailed exploration examining how BDD stories compare to traditional Use Cases. The publication strategy itself reflects agile principles: "I will be editing and updating it in response to comments on this post."

**Key takeaways:**
- BDD represents a complete methodology for requirement definition and specification, not just testing
- "Stories" terminology and frameworks common in some communities remain foreign to others
- Need to explain what makes stories distinctly behaviour-driven beyond surface-level comparison
- BDD stories differ meaningfully from traditional Use Cases
- Iterative refinement approach demonstrates collaborative nature of deepening BDD understanding
- Agile practitioners should not assume universal understanding of foundational concepts

---

### [Whose domain is it anyway?](https://dannorth.net/blog/whose-domain-is-it-anyway/)
**Type:** Article
**Date:** 2011-01
**Tags:** bdd, brittle, ddd, domain, language, modelling, tests, vocabulary

North identifies a common failure mode in BDD: scenarios become brittle when they combine vocabulary from multiple unrelated domains. The example login scenario mixes security terminology, UI implementation details, and web asset references—making it fragile across several axes of change. He advocates for scenarios involving exactly two domains: the "what" (problem domain describing capability) and the "how" (solution domain showing implementation). "Any additional domains are likely to provide unnecessary constraints or noise, and make the test brittle." Each domain corresponds to a stakeholder, and multiple domains mean multiple stakeholders whose priorities may diverge, increasing brittleness. North introduces chunking from NLP, where you can move between abstraction layers by asking "Why?" or "What for?" (chunk up), "How?" (chunk down), or "How else?" (chunk sideways). Whether something is "declarative" or "imperative" is relative: any layer answers the "what" for details below it and the "how" for requirements above it.

**Key takeaways:**
- Scenarios should involve exactly two domains: problem domain (what) and solution domain (how)
- Additional domains provide unnecessary constraints and noise, making tests brittle
- Each domain corresponds to a stakeholder; multiple stakeholders increase divergence risk
- Chunking framework: ask "Why/What for?" (up), "How?" (down), "How else?" (sideways)
- "Declarative" vs "imperative" is relative to abstraction layer, not absolute
- Check scenario wording for language outside your two domains
- Push complexity into step implementation rather than scenario text to preserve intent
- Any layer answers "what" for details below and "how" for requirements above

---

### [The mystery of the missing date](https://dannorth.net/blog/the-mystery-of-the-missing-date/)
**Type:** Article
**Date:** 2020-11
**Tags:** bdd, ddd, design, examples, modelling, programming, software

North examines how to specify a business rule for canceling authorized payments one month after authorization if uncharged, analyzing approaches from Gojko Adzic and Seb Rose. Gojko uses concrete dates in data tables, arguing this distinguishes between acceptance criteria and examples, while Seb applies the BRIEF framework (Business language, Real data, Intention-revealing, Essential, Focused), noting the solutions contain excessive examples and hidden business rules in comments. North identifies a hidden domain concept: a "cancellation date" that should be calculated separately. Rather than embedding time logic in payment cancellation scenarios, he proposes: "The cancellation date is one calendar month after the payment authorization date." This reframing suggests different implementation: calculating cancellation dates as a distinct concern, then having the processor simply compare against that date. The solution uses three scenarios instead of many: authorization dates where the day-of-month exists in the following month, cases where cancellation extends into a later month, and leap year handling for February edge cases.

**Key takeaways:**
- Hidden domain concepts should be identified and calculated separately
- Embedding complex logic in scenarios creates brittle, verbose specifications
- Separating concerns (cancellation date calculation vs. payment processing) clarifies specifications
- Domain-driven design reveals missing concepts that simplify BDD scenarios
- Three focused scenarios can replace many examples when domain concepts are properly identified
- Distinguishing acceptance criteria from examples helps determine appropriate specificity
- BRIEF framework (Business language, Real data, Intention-revealing, Essential, Focused) guides scenario quality
- Domain modeling should inform scenario structure, not just step implementation

---

### [BDD by example](https://dannorth.net/blog/bdd-by-example/)
**Type:** Article
**Date:** 2015-04
**Tags:** agile, bdd

North addresses fundamental questions about BDD's identity and community structure emerging from a CukeUp conference panel discussion. Rather than defining BDD through mandatory practices (a "bounded" approach), he proposes embracing a "centered" model based on core values. The article contrasts Centered Communities (operating around shared principles with fuzzy membership boundaries) with Bounded Communities (using specific markers to create binary inclusion/exclusion), illustrating how XP and Scrum became increasingly practice-focused for commercial reasons despite their foundational values. North proposes building bddbyexample.org, a community-curated resource featuring example-based learning tracks for different user personas, experience reports and practical recipes, and advanced techniques with appropriate context. The absence of BDD certification or rigid boundaries allows organic evolution of practices like Three Amigos, but creates uncertainty for newcomers and trainers.

**Key takeaways:**
- BDD should be a "centered" community around core values, not "bounded" by mandatory practices
- XP and Scrum became practice-focused for commercial reasons, moving away from foundational values
- Examples—not rules—should define the community's identity
- Community-curated resources with real-world examples serve newcomers better than certification
- Absence of rigid boundaries allows organic evolution of practices like Three Amigos
- Example-based learning tracks for different personas address diverse community needs
- Experience reports and practical recipes provide context for advanced techniques
- Invitation to practitioners to submit real-world examples addressing stakeholder engagement, discovery techniques, and integration

---

### [Capturing the narrative](https://dannorth.net/blog/capturing-the-narrative/)
**Type:** Article
**Date:** 2014-07
**Tags:** agile, bdd, documentation, process

North addresses how to preserve important context and decisions beyond executable specifications, proposing four distinct documentation categories rather than relying on wikis (which often become "information graveyards"). Narrative: A product blog captures reasoning behind decisions, including options considered and rejected, preventing repeated debates through timestamped format. Standards: Wikis work well here with robust search and active curation, storing conventions for code style, documentation, naming, and error-handling. Backlog: Tools that remain visible to all stakeholders and lightweight enough to encourage updates; North favors Trello for simplicity. Ideas/Wishlist: Separate from backlog to prevent half-formed suggestions from cluttering work queues and skewing metrics, with regular review revealing patterns worth exploring. The core insight is that different information types require different storage and retrieval approaches—one-size-fits-all documentation systems inevitably fail.

**Key takeaways:**
- Different information types require different storage and retrieval approaches
- Wikis often become "information graveyards" when used for all documentation
- Product blog (narrative) captures "why" behind decisions, preventing repeated debates
- Timestamped narrative format helps newcomers understand history of current practices
- Standards belong in wikis with robust search and active curation
- Backlog tools should be visible to all stakeholders and lightweight enough to encourage updates
- Ideas/Wishlist separated from backlog prevents cluttering work queues and skewing metrics
- One-size-fits-all documentation systems inevitably fail

---

### [We need to talk about testing](https://dannorth.net/blog/we-need-to-talk-about-testing/)
**Type:** Article
**Date:** 2021-07
**Tags:** agile, bdd, programming, tdd, testing

North argues that testing's fundamental purpose is to increase stakeholder confidence through evidence, not merely to validate code functionality. He contends that Test-Driven Development is primarily a design technique, not a testing discipline: "TDD, BDD, ATDD, and related methods categorically do not replace testing, whatever their names may suggest." The agile movement inadvertently marginalized professional testers by assuming that programmer-written unit tests constitute adequate testing, ignoring multiple quality dimensions—security, accessibility, compliance, usability—that require different stakeholder perspectives. North addresses critical questions: automated tests serve programmers' immediate feedback needs but humans interacting with systems generate insights machines cannot; code coverage reveals what isn't tested but offers minimal insight into actual risk; "shifting left" means reconsidering architecture and design through multiple stakeholder lenses early; sufficiency depends on change magnitude, potential impact, and contextual risk, not linear metrics. Genuine high-performing teams require embedded testing expertise alongside programming.

**Key takeaways:**
- Testing's purpose is increasing stakeholder confidence through evidence, not validating code
- TDD/BDD/ATDD are design techniques, not testing disciplines—they don't replace professional testing
- Agile inadvertently marginalized professional testers by assuming unit tests suffice
- Multiple quality dimensions (security, accessibility, compliance, usability) require different stakeholder perspectives
- Automated tests serve programmer needs; human interaction with systems generates insights machines cannot
- Code coverage reveals what isn't tested but offers minimal risk insight
- "Shifting left" means reconsidering architecture through multiple stakeholder lenses early
- Testing adequacy depends on change magnitude, potential impact, and contextual risk, not metrics
- High-performing teams require embedded testing expertise alongside programming with collaborative, evidence-based mindset