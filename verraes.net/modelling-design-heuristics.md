# Domain Modelling, Design Heuristics & Theory

> Part of the [Mathias Verraes blog overview](overview.md)

This cluster represents Verraes and Wirfs-Brock's most theoretically ambitious work on software design philosophy. It explores how worldviews embedded in design choices shape systems, how to critically evaluate models and metaphors, and the heuristics designers can apply when modelling domains. The collaborative essays with Rebecca Wirfs-Brock form the backbone of the "Design and Reality" thesis—that design is not a linear discovery process but an iterative reframing of problems through different lenses.

## Key Insights

**Every design choice carries a worldview.** Technical decisions embed assumptions about human motivation, what problems are fundamentally social versus technical, and whether users should be enabled or coerced. Making those worldviews explicit — before designing — is often the most important step.

**Models are never neutral descriptions of reality.** Any model (Spotify Model, Team Topologies, Agile frameworks, DDD patterns) imposes a perspective, emphasises certain concerns, and hides others. The skill is to evaluate models critically — comparing what they add, what they omit, and whether their embedded beliefs match your actual context — rather than adopting them wholesale.

**Domain modelling is iterative reframing, not linear discovery.** The fallacy is: understand the problem → apply design → deliver. In practice, deep models emerge through cycles of reframing the problem itself. Domain language is messy and organic; modelling is the opportunity to create novel concepts, not just transcribe what domain experts say.

**Heuristics, not rules.** Design expertise is a repertoire of context-dependent rules of thumb — "it's just like…", "the legacy mirror", "loss aversion at play here" — not a fixed set of prescriptions. The craft lies in recognising which heuristic applies, when analogies break down, and when familiar patterns need to give way to novel concepts.

**Make the implicit explicit.** DRY is about not repeating knowledge, not eliminating code duplication. Patterns are defined by the problems they solve, not by structural templates. Feature envy is a signal about misaligned domain concepts, not just poor code organisation. Again and again, these posts redirect from surface symptoms to the underlying conceptual question.

---

### Surfacing Worldviews in Design
https://verraes.net/2023/07/surfacing-worldviews-in-design/

**Type:** Article
**Date:** 2023-07
**Co-author:** Rebecca Wirfs-Brock
**Tags/Topics:** worldviews, design assumptions, social systems, technical solutions, unintended consequences, enabling vs. coercion

Through the story of a Maker Lab struggling with lost inventory, this essay demonstrates how design choices reflect implicit worldviews. The lab's first intervention—tracking who last scanned items—assumes makers are unmotivated and need coercion. This technical solution backfires, punishing compliant makers and eroding trust. A second scenario reimagines the problem: if 80% of makers already behave well, how can we remove barriers and enable the remaining 20% rather than punish everyone? This shift from coercive to enabling worldviews requires surfacing hidden assumptions before designing solutions.

**Key takeaways:**
- Design choices carry worldviews: assumptions about human motivation, whether users are trustworthy, and whether problems are primarily technical
- Social problems often require social solutions; purely technical interventions can produce opposite effects
- By making worldview assumptions explicit, teams can evaluate whether coercion, enabling, or another approach is appropriate for their context
- The same surface problem can be addressed through radically different design philosophies

---

### Critically Engaging With Models
https://verraes.net/2022/09/critically-engaging-with-models/

**Type:** Article
**Date:** 2022-09
**Co-author:** Rebecca Wirfs-Brock
**Tags/Topics:** models as worldviews, organizational models, Spotify Model, Team Topologies, Agile Fluency, critical evaluation, building blocks

Models—whether for organizations, software, or processes—are never neutral descriptions of reality; they impose distinct perspectives and rules. This essay teaches how to critically evaluate any model by comparing it to alternatives, understanding its underlying beliefs, assessing whether it addresses your actual problems, and recognizing what it omits. Through detailed analysis of organizational models (hierarchical, networked, Spotify, Team Topologies, Agile Fluency), the authors show how different models emphasize different values and distract from different questions. The five-step framework: intentionally study, critically analyze, adopt in context, gather feedback, reshape to your needs.

**Key takeaways:**
- Models are worldviews with presuppositions; accepting a model means accepting its embedded beliefs
- Compare models to discover what one adds, emphasizes, or omits relative to others
- Look for "building blocks"—explicit named concepts that draw organizational attention and energy
- Distinguish prescriptive models (intended to change behavior) from descriptive models (meant to clarify)
- Models distract: their methods and tools can make you forget to ask whether the model itself fits your environment

---

### Critically Engaging With Models (DDD Europe Keynote)
https://verraes.net/2023/01/critically-engaging-with-models/

**Type:** Presentation (Video)
**Date:** 2023-01
**Co-author:** Rebecca Wirfs-Brock
**Tags/Topics:** models, worldviews, critical thinking, organizational design, keynote

Video presentation of the keynote "Critically Engaging with Models" at DDD Europe 2022. Verraes and Wirfs-Brock present their framework for evaluating models critically rather than adopting them uncritically. The talk walks through real-world organizational models and demonstrates how to surface the implicit beliefs, assess trade-offs, and deliberately choose models that fit your context. Essential companion to the article version.

**Key takeaways:**
- Models shape how we think; understanding their framing is necessary for intentional choice
- Real-world organizations must often adapt published models to their own constraints and values
- Critical evaluation of models is a skill that improves design decision-making across all domains

---

### Models and Metaphors
https://verraes.net/2021/12/models-and-metaphors/

**Type:** Article
**Date:** 2021-12
**Co-author:** Rebecca Wirfs-Brock
**Tags/Topics:** metaphors in design, models vs. reality, domain language, linguistic framing, conceptual models

Metaphors and models are inseparable—every model relies on metaphorical language to communicate ideas. This essay explores how the metaphors we choose shape what we can think and build. When we say "a system is a machine" versus "a system is an organism," we activate different sets of expectations about control, growth, and resilience. In domain-driven design, the language we choose for ubiquitous language embeds these metaphors. The authors argue that conscious attention to metaphorical framing—and willingness to switch metaphors—is essential for deeper modelling.

**Key takeaways:**
- Models communicate through metaphors; the metaphor chosen shapes what aspects of the domain become visible
- Switching metaphors can unlock new ways of thinking about an intractable problem
- Domain language should reflect the problem domain, not just our chosen solution metaphor
- Recognizing metaphor as metaphor, not truth, gives designers freedom to experiment

---

### Design and Reality
https://verraes.net/2021/09/design-and-reality/

**Type:** Article
**Date:** 2021-09
**Co-author:** Rebecca Wirfs-Brock
**Tags/Topics:** domain modelling, design fallacy, linear thinking, reframing, problem space, solution space

This foundational essay challenges the fallacy that domain modelling is a linear process: understand the problem, apply design, deliver solution. In reality, deep models emerge through iterative reframing of the problem itself. Domain language is messy, organic, ambiguous—not designed for software. Modelling is the opportunity to create novel concepts and refine understanding, not merely to capture requirements and map them to code. Verraes and Wirfs-Brock argue that successful design often requires stepping back to reframe what problem we're actually solving.

**Key takeaways:**
- Domain modelling is not linear discovery; it's iterative reframing of the problem through design
- The domain language often must be cleaned up, disambiguated, and elevated into new concepts for software
- Design is an act of making ideas explicit and testing them; it's not just a phase after understanding
- Constraints from the domain should inform design, but not constrain what concepts we can invent

---

### Design & Reality (VirtualDDD presentation)
https://verraes.net/2022/02/design-and-reality-virtualddd/

**Type:** Presentation (Video)
**Date:** 2022-02
**Co-author:** (Mathias Verraes)
**Tags/Topics:** modelling, domain-driven design, novel concepts, problem reframing

Presentation from VirtualDDD where Verraes discusses the core thesis: modelling as the opportunity to create novel concepts. Our models should be driven by the domain but not constrained by what domain experts initially tell us. After all, domain language is messy, organic, and incomplete—if it has any intentional design, it's not designed to be turned into software. Modelling is the practice of discovering, inventing, and refining the concepts that make a domain tractable.

**Key takeaways:**
- Modelling is opportunity, not just documentation
- Domain experts offer insights but not a ready-made model
- Creating novel concepts in code is a legitimate design activity

---

### Design and Reality (Leanpub Podcast)
https://verraes.net/2023/01/leanpub-podcast-design-reality/

**Type:** Podcast
**Date:** 2023-01
**Tags/Topics:** design, reality, domain-driven design, modelling, podcast

Podcast interview discussing the themes of "Design and Reality" essays. Verraes explores how design choices shape what's possible in a system, how reframing the problem is often the key to breakthrough solutions, and why the relationship between domain language and code design is more complex than simple mapping.

**Key takeaways:**
- Design is active problem-reframing, not passive requirement-following
- The domain language provides hints, not a blueprint
- Great design often comes from stepping back and asking different questions about the problem

---

### Simple Models, Scaffolding, Enabling Constraints
https://verraes.net/2021/04/simple-models-scaffolding-enabling-constraints/

**Type:** Article
**Date:** 2021-04
**Tags/Topics:** simplicity, scaffolding, constraints, iterative design, Dreyfus model, expertise

When building complex domains, start with simple models that organize thinking without premature optimization or over-engineering. These "scaffolding" models serve as temporary structures that enable learning and conversation. Enabling constraints are deliberately chosen limits that focus attention and guide design decisions. As understanding deepens, these simple models can be replaced or evolved. The essay draws on the Dreyfus model of skill acquisition: beginners benefit from simple rules (enabling constraints), while experts can relax constraints as they develop intuition.

**Key takeaways:**
- Start with simple models that organize the domain without over-engineering
- Use scaffolding—temporary structures that support learning and can later be removed or replaced
- Enabling constraints focus attention and guide choices; limiting constraints block productive paths
- As expertise grows, constraints can be relaxed; but too much freedom too early hinders progress

---

### The "It's Just Like..." Heuristic
https://verraes.net/2021/05/its-just-like-heuristic/

**Type:** Article
**Date:** 2021-05
**Tags/Topics:** heuristics, analogy, metaphor, learning, conceptual models, mental shortcuts

When encountering a new domain, designers often anchor on familiar patterns: "it's just like e-commerce" or "it's just like the banking system." While analogies are useful mental shortcuts, they can also trap thinking. A financial trading system might seem like e-commerce (customer, order, payment) until novel requirements reveal the analogy breaks down. This heuristic reminds us to use analogies as starting points for exploration, but to actively look for where the analogy fails and where the domain demands novel concepts.

**Key takeaways:**
- Analogies are useful scaffolding for understanding new domains, but they anchor thinking in familiar patterns
- The "it's just like" heuristic works until it doesn't; active exploration finds the breaking points
- Design progress often comes from recognizing where familiar patterns no longer apply
- Use analogies consciously and test them against requirements

---

### The Legacy Mirror Heuristic
https://verraes.net/2021/03/heuristic-legacy-mirror/

**Type:** Article
**Date:** 2021-03
**Tags/Topics:** legacy systems, existing code, design heuristics, constraints, learning from implementation

When designing a new system or bounded context, look at existing legacy systems for clues about what the domain actually requires. Legacy code, despite its flaws, often embeds hard-won knowledge about constraints and requirements that may not be explicitly documented. This heuristic suggests asking: what problem was this legacy system solving? Where did it struggle? What proved difficult or costly to change? These answers inform design decisions in the new system. The legacy code becomes a mirror showing what concepts and rules matter in the domain.

**Key takeaways:**
- Legacy systems contain embedded domain knowledge worth understanding
- Examining where legacy code struggled reveals real constraints and requirements
- Rather than wholesale rejection, use legacy systems as learning resources for new designs
- The "mirror" heuristic helps avoid repeating the same costly mistakes

---

### Loss Aversion Heuristics
https://verraes.net/2022/02/loss-aversion-heuristics/

**Type:** Podcast
**Date:** 2022-02
**Tags/Topics:** loss aversion, behavioral economics, design decisions, heuristics, podcast

Podcast exploring how loss aversion—the human tendency to fear losses more than equivalent gains—shapes design decisions. In domain modelling and software architecture, loss aversion leads designers to over-engineer "for the future," accumulate technical debt as a defense mechanism, or resist refactoring for fear of introducing bugs. Understanding loss aversion as a cognitive heuristic helps teams recognize when it's driving decisions and whether the costs of prevention outweigh the expected losses.

**Key takeaways:**
- Loss aversion is a cognitive bias that shapes design choices, often toward over-engineering
- Fear of potential losses can create inertia and accumulating technical debt
- Recognizing loss aversion as a heuristic (not rational strategy) helps teams make conscious trade-off decisions
- Sometimes the cost of complete prevention exceeds the cost of managing occasional failures

---

### Patterns Are Not Defined by Their Implementation
https://verraes.net/2019/07/patterns-are-not-defined-by-their-implementation/

**Type:** Article
**Date:** 2019-07
**Tags/Topics:** design patterns, implementation, behavioral equivalence, domain concepts, pattern misuse

A design pattern is defined by the problem it solves and the forces it balances, not by the code structure used to implement it. Many teams confuse "uses the Repository pattern" with "has a class called Repository." This leads to ritual implementation of patterns without understanding the actual design problem. Verraes argues that two implementations with radically different code structures might both solve the Repository problem, while two structurally similar implementations might solve different problems. Understanding patterns conceptually, not syntactically, is essential for applying them wisely.

**Key takeaways:**
- Patterns are defined by the problem and forces they address, not by code structure
- Ritual pattern application without understanding the underlying problem is cargo cult programming
- The same pattern concept can be implemented in many ways; the key is solving the actual design problem
- Pattern libraries are guides, not rules—adapt the concept to your context

---

### Design Heuristics
https://verraes.net/2018/04/design-heuristics/

**Type:** Presentation (Slides)
**Date:** 2018-04
**Tags/Topics:** heuristics, design principles, decision-making, software design

Presentation introducing the concept of design heuristics—practical rules of thumb that guide design decisions without being absolute laws. Unlike SOLID or other prescriptive principles, heuristics are context-dependent mental shortcuts that help designers navigate complexity. The talk introduces several heuristics used in domain-driven design and modelling work, emphasizing that mastery comes from learning when and how to apply each heuristic, not from memorizing a rulebook.

**Key takeaways:**
- Heuristics are context-dependent rules of thumb, not universal laws
- Expertise in design involves knowing which heuristics apply in which situations
- Heuristics can conflict; good designers balance competing heuristics consciously
- Learning design is learning a repertoire of heuristics and when to apply them

---

### Modelling Heuristics
https://verraes.net/2014/11/modelling-heuristics/

**Type:** Presentation (Slides/Video)
**Date:** 2014-11
**Tags/Topics:** heuristics, domain modelling, DDD, pattern recognition, design guidelines

Presentation distilling heuristics for better domain modelling. Rather than prescriptive rules, these are patterns Verraes has observed in successful modelling work: ways of thinking about domains, naming, discovering boundaries, handling complexity. The heuristics help modellers ask better questions and recognize productive paths through domain complexity.

**Key takeaways:**
- Domain modelling is a skill that develops through exposure to many heuristics
- Heuristics provide guidance without eliminating judgment
- Modelling excellence comes from recognizing patterns and applying appropriate heuristics
- Different heuristics work better in different contexts and domains

---

### Temporal Modelling
https://verraes.net/2019/06/talk-temporal-modelling/

**Type:** Presentation (Talk/Video)
**Date:** 2019-06
**Tags/Topics:** temporal concepts, time in modelling, event sourcing, domain events, state and time

Talk on how to model temporal concepts—time, change, causality, histories—explicitly in code. Many domains have temporal complexities that standard object-oriented modeling struggles to represent: "what was true at a point in time," "effective dates," "retroactive corrections." Verraes discusses techniques from event sourcing and temporal modelling to make these concepts first-class in design.

**Key takeaways:**
- Time and change are domain concepts that deserve explicit modelling
- Event sourcing and audit trails make temporal reasoning explicit
- Many bugs come from implicit assumptions about when state changes take effect
- Temporal concepts are often undermodelled, leading to later rework

---

### Towards Modelling Processes
https://verraes.net/2015/05/towards-modelling-processes/

**Type:** Presentation
**Date:** 2015-05
**Tags/Topics:** process modelling, state machines, workflows, domain concepts, choreography

Presentation exploring how to model processes and workflows as explicit domain concepts rather than as imperative procedural code. Rather than a series of if-statements determining the next step, a process can be modelled as a state machine, a choreography of messages, or a series of events. This makes the process logic visible, testable, and changeable.

**Key takeaways:**
- Process logic should be modelled explicitly as domain concepts
- State machines and event-driven approaches make process logic visible and testable
- Separating process logic from imperative implementation improves maintainability
- Processes are often undermodelled, embedded in procedural code

---

### Resolving Feature Envy in the Domain
https://verraes.net/2014/08/resolving-feature-envy-in-the-domain/

**Type:** Article
**Date:** 2014-08
**Tags/Topics:** feature envy, domain modelling, object responsibilities, refactoring, design smells

Feature envy—when one object frequently calls methods on another—is a code smell pointing to a deeper domain modelling issue. Rather than moving methods between classes, use feature envy as a signal to revisit the domain. Perhaps the feature belongs to a different conceptual entity, or perhaps the domain boundary is wrong. Verraes shows how to resolve feature envy through better domain understanding rather than mechanical refactoring.

**Key takeaways:**
- Feature envy indicates misaligned domain concepts, not just poor code organization
- The symptom (one object calling many methods on another) points to the real problem (wrong boundary or responsibility)
- Solving feature envy well requires stepping back to the domain model
- Code smells are diagnostic tools for discovering domain modelling issues

---

### DRY is about Knowledge
https://verraes.net/2014/08/dry-is-about-knowledge/

**Type:** Article
**Date:** 2014-08
**Tags/Topics:** DRY principle, duplication, knowledge, domain, intentionality

The DRY principle ("Don't Repeat Yourself") is often misinterpreted as "no code duplication." In reality, DRY is about not repeating knowledge—the same fact should live in one place. Two identical code blocks might represent different knowledge (e.g., two validation rules that happen to be identical), so deduplicating them would be wrong. Conversely, code that looks different might express the same knowledge in different ways, suggesting it should be deduplicated. The key is distinguishing incidental duplication from essential repetition of knowledge.

**Key takeaways:**
- DRY is about not duplicating knowledge, not eliminating code duplication
- The same code in two places might represent different knowledge—don't blindly deduplicate
- Different code might encode the same knowledge—deduplication is appropriate here
- Domain understanding helps determine what counts as "the same knowledge"

---

### Type Safety and Money
https://verraes.net/2016/02/type-safety-and-money/

**Type:** Article
**Date:** 2016-02
**Tags/Topics:** type systems, value objects, money, domain concepts, static guarantees

Modern type systems allow expressing domain concepts with precision: money is not an integer, it's a value object with currency, precision, and rounding rules. By using type systems to enforce domain concepts, we gain static guarantees that certain errors become impossible. A function that takes `Money` as a parameter cannot accidentally receive a count or a raw integer. Verraes shows how careful use of types transforms domain concepts into compiler-enforced constraints.

**Key takeaways:**
- Use type systems to encode domain concepts and constraints
- Value objects with proper types make invalid states unrepresentable in code
- Type safety catches classes of errors at compile time that would become bugs at runtime
- Designing for type safety often leads to better domain models and clearer code

---

### Objects as Contracts for Behaviour
https://verraes.net/2014/09/objects-as-contracts-for-behaviour/

**Type:** Article
**Date:** 2014-09
**Tags/Topics:** objects, contracts, behavior, encapsulation, design, object-oriented design

Objects should be understood as contracts for behavior, not as containers for data. An object declares what operations it supports and the guarantees those operations provide (preconditions, postconditions, invariants). This contract-based view of objects leads to better encapsulation, clearer interfaces, and more maintainable code. Rather than thinking "what fields does this object have," think "what operations does this object support and what do they guarantee."

**Key takeaways:**
- Objects are behavioral contracts, not data containers
- A good object interface declares operations clearly and enforces invariants
- Encapsulation is about hiding implementation and enforcing contracts
- Thinking in contracts rather than data structures leads to better object-oriented design

---

### Critical Software Redesign
https://verraes.net/2024/01/critical-software-redesign/

**Type:** Article
**Date:** 2024-01
**Co-author:** Rebecca Wirfs-Brock
**Tags/Topics:** redesign, refactoring, intentionality, design flaws, systems thinking

When a software system develops critical flaws—poor performance, unmaintainable code, wrong abstractions—a complete redesign may be necessary. This essay discusses when and how to undertake such redesigns intentionally and strategically. Rather than piecemeal refactoring, critical redesign requires stepping back to understand what assumptions were wrong and what design choices would be different with current knowledge. The authors discuss the mindset, tactics, and risks of intentional redesign efforts.

**Key takeaways:**
- Some design flaws are too fundamental for incremental refactoring
- Critical redesigns must be informed by honest assessment of what went wrong
- Redesign is an opportunity to rethink core assumptions, not just to fix bugs
- Intentional redesign requires different management and risk management than regular development

---

### "Software design is just theory"
https://verraes.net/2014/10/software-design-is-just-theory/

**Type:** Article
**Date:** 2014-10
**Tags/Topics:** design theory, craft, practice, intentionality, design philosophy

The dismissal "software design is just theory" misses the point: design is the bridge between theory and practice. Theory without practice is useless; practice without theory is arbitrary. Good design involves understanding both the principles (theory) and how they manifest in real systems (practice). Verraes argues that dismissing design as "just theory" is a sign of inexperience; expert designers move fluidly between theoretical understanding and practical application.

**Key takeaways:**
- Design is neither pure theory nor blind practice; it bridges both
- Theory helps designers understand why certain practices work, not just how to apply them
- Dismissing design as theory is often a sign of defensive thinking about code quality
- Craft expertise involves integrating theory and practice seamlessly

---

### On Being Explicit
https://verraes.net/2016/11/on-being-explicit/

**Type:** Presentation
**Date:** 2016-11
**Tags/Topics:** explicitness, clarity, implicit knowledge, code readability, intentionality

Presentation on the value of making implicit concepts explicit in code. Hidden assumptions, unnamed concepts, and implicit logic make code hard to understand and change. By naming concepts explicitly—through objects, methods, variables—we make domain knowledge visible and testable. The presentation explores how explicitness improves code comprehension and reduces cognitive load.

**Key takeaways:**
- Explicitness in code mirrors clarity in thinking
- Named concepts are easier to reason about and test than implicit logic
- Making implicit knowledge explicit improves code readability and maintainability
- Refactoring towards explicitness often reveals misunderstandings in the domain

---

### Designed Stickiness
https://verraes.net/2016/05/designed-stickiness/

**Type:** Presentation
**Date:** 2016-05
**Tags/Topics:** coupling, dependencies, stickiness, design decisions, cohesion

Presentation examining how design choices create "stickiness"—coupling and dependencies that make systems hard to change. Not all coupling is bad; tight coupling can be good (high cohesion) or bad (unnecessary dependencies). The talk explores how to recognize unintended stickiness and design for appropriate levels of coupling and flexibility.

**Key takeaways:**
- Coupling is not always bad; tight cohesion is often good design
- Unintended stickiness—dependencies that shouldn't exist—signals design problems
- Design choices about boundaries, interfaces, and abstractions determine how sticky a system becomes
- Well-designed systems have intentional, appropriate coupling; poorly designed systems have accidental stickiness

---

### From Music to Languages and Models (DevJourney Podcast)
https://verraes.net/2023/05/devjourney-podcast/

**Type:** Podcast
**Date:** 2023-05
**Tags/Topics:** podcast, music, languages, modelling, design, storytelling, career

Podcast interview with Verraes discussing his background in music, how musical thinking applies to software design, and the role of language in both domains. Music and code both involve pattern, structure, composition, and communication—understanding one can illuminate the other. The interview also explores how career paths in software development might draw on diverse influences.

**Key takeaways:**
- Musical thinking (structure, composition, listening) applies to software design
- Language—both code and natural language—is fundamental to understanding domains
- Design expertise comes from exposure to diverse fields and ways of thinking
- Career development benefits from engaging with domains beyond software

---

### Software Design for Startups and Scaleups
https://verraes.net/2023/02/software-design-scaleups-startups-.md/

**Type:** Podcast
**Date:** 2023-02
**Tags/Topics:** startups, scaleups, design decisions, growth, technical debt, constraints, podcast

Podcast exploring how design considerations differ between startups and scaleups. Startups are optimizing for learning and speed; premature design infrastructure is waste. Scaleups must scale systems that were designed for smaller problems. The constraints are different, and the design decisions that succeed in one context may fail in another. The discussion covers how to make deliberate design choices appropriate to your stage and constraints.

**Key takeaways:**
- Design priorities differ between startup (learning speed) and scaleup (scaling) phases
- Premature investment in design infrastructure wastes startup resources
- Scaleups face challenges from design decisions made when constraints were different
- Conscious design choices appropriate to your context and stage lead to better outcomes than borrowed "best practices"

---
