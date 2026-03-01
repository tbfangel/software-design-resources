# Bounded Contexts & Context Mapping

> Part of the [Mathias Verraes blog overview](overview.md)

This cluster explores bounded contexts as a pragmatic design tool for managing software complexity and cognitive load. The collection demonstrates that bounded contexts need not map one-to-one with business domains, but instead should emerge from careful consideration of engineering needs, team communication patterns, and the evolving structure of systems. Topics range from strategic decisions about boundaries and their relationships to the tactical refinement of domain models and the visualization of complex context landscapes.

## Key Insights

**Bounded contexts are understandability boundaries, not domain mirrors.** The common assumption that one business domain should map to one bounded context is wrong in practice. Contexts should be drawn wherever a single, internally consistent model and language can be maintained — which is often smaller, or differently shaped, than the org chart suggests.

**Don't choose boundaries upfront — let them emerge.** Large boundary decisions made early are hard to reverse. Starting small and discovering boundaries through modelling, rate-of-change analysis, and team communication patterns produces better results than careful upfront design. Contexts emerge naturally when you refine your domain model deeply enough.

**Rate of change is one of the most useful splitting heuristics.** Group concepts that evolve together; separate concepts that change at different speeds. A domain with two fundamentally different ordering processes, or 20 traders each needing their own model, is better served by multiple contexts than a single forced unification.

**Context maps are discovery tools, not pretty diagrams.** Adding dimensions like life expectancy (when will this system die — really, not officially?), sponsorship (who funds it?), and bandwidth (how much can these teams actually communicate?) turns a static diagram into a risk assessment and decision-making tool.

**Every interface choice involves a tension with no clean resolution.** More contexts mean larger interfaces; fewer contexts mean harder-to-evolve models. Generic interfaces bloat; specialised ones multiply. The skill is recognising which tensions matter in your context and making deliberate trade-offs — not finding the "correct" answer.

---

### [No, Your Domains and Bounded Contexts Don't Map 1 on 1](https://verraes.net/2025/08/domain-and-bounded-contexts-dont-map-one-on-one/)
**Type:** Article
**Date:** 2025-08
**Tags/Topics:** Domain-Driven Design, bounded contexts, organizational structure, pragmatic design, context mapping

A practical rebuttal to the myth that bounded contexts should mirror business domains. Verraes argues that bounded contexts are design choices serving engineering needs, not organizational mirrors. The article uses concrete examples (a pricing system split across four contexts despite being one domain; a merger resulting in overlapping contexts) to show why pragmatic design often diverges from domain boundaries. The key insight: context boundaries should be driven by technical concerns, team needs, and rates of change rather than rigid adherence to org charts.

**Key takeaways:**
- Bounded contexts are linguistic and model boundaries, not bureaucratic structures
- Valid reasons for splitting domains include different tech stacks, security/performance requirements, experimentation isolation, and legacy constraints
- Startups, experiments, mergers, and older companies all face realistic pressures that contradict 1:1 mapping
- Bounded contexts should be drawn pragmatically to reduce cognitive load and enable business opportunities

---

### [Splitting a Domain Across Multiple Bounded Contexts](https://verraes.net/2021/06/split-domain-across-bounded-contexts/)
**Type:** Article (co-authored with Rebecca Wirfs-Brock)
**Date:** 2021-06
**Tags/Topics:** Domain-Driven Design, rate of change, understandability boundaries, coordination costs

This post provides a compelling case study: a wholesaler with a single Sales domain but two fundamentally different ordering processes (automated webshop vs. manual account manager entry), requiring two distinct bounded contexts. The authors argue that bounded contexts represent understandability boundaries—you can grasp the model and language in isolation—rather than domain boundaries. The most striking example: a commodities trading firm with 20 separate traders, each requiring their own bounded context within the same Trading domain. This seemingly chaotic design actually optimized for speed, collaboration with domain experts, and minimized coordination overhead.

**Key takeaways:**
- Bounded contexts manage the understandability of system models, not the organization's perception of domains
- The Rate of Change Heuristic: organize contexts around concepts that evolve at similar paces
- Unifying concepts can cost more in coordination than it saves in abstraction
- Deliberate design choices should weigh the benefits of consistency against the cost of imposed coordination

---

### [Tensions when Designing Evolvable Bounded Contexts](https://verraes.net/2021/04/tensions-when-designing-evolvable-bounded-contexts/)
**Type:** Article (snapshot from ongoing conversation with Rebecca Wirfs-Brock)
**Date:** 2021-04
**Tags/Topics:** Bounded contexts, evolution, interfaces, design tensions, trade-offs

This piece identifies fundamental tensions in designing systems of bounded contexts. A context is evolvable if changes are frequent, safe, and cheap. The key tensions: (1) many small contexts create larger interfaces, but small interfaces require larger contexts; (2) adding contexts to a shared interface makes it less evolvable; (3) specialized interfaces are harder to maintain but easier to consume than generic ones. The challenge involves finding semi-specialized interfaces shared among contexts with similar needs, which requires more inter-team coordination. No hard rules exist—instead, designers need heuristics for making these trade-offs and recognizing when to change them.

**Key takeaways:**
- Multiple tensions affect evolvable context design: size vs. interface complexity, shared vs. specialized interfaces, ease of adding contexts vs. maintaining existing ones
- Low-bandwidth communication channels increase risk on projects depending on inter-context integration
- Interface choices involve careful balance: generic interfaces bloat with features to support many consumers; specialized interfaces increase maintenance
- Heuristics and experience matter more than formulaic rules for these design decisions

---

### [Emergent Contexts through Refinement](https://verraes.net/2019/06/emergent-contexts-through-refinement/)
**Type:** Article
**Date:** 2019-06
**Tags/Topics:** Value objects, model refinement, domain-driven design, currency, precision, boundaries

This masterclass in model refinement uses a concrete problem (handling monetary values with different precisions across contexts) to show how bounded contexts emerge naturally from deeper modeling. Starting with a naive Money type, Verraes progressively refines it: separating PreciseMoney and RoundedMoney, introducing currency-specific types (PreciseEUR, RoundedBTC), and discovering concepts like ConversionRate and ForeignExchange. Each refinement makes implicit domain concepts explicit and naturally leads to boundaries. Different bounded contexts (Sales, Reporting, Compliance) need different money models—not because the business sees them differently, but because the engineering and business needs diverge. The lesson: don't decide contexts upfront; refine your model and boundaries will emerge.

**Key takeaways:**
- Contexts emerge from deep modeling and refining domain concepts, not from upfront analysis
- Making implicit concepts explicit in the ubiquitous language drives boundary discovery
- Rich, type-safe models enable different specialized versions in different contexts
- A minimalist interface (no unnecessary methods or back-conversions) reinforces domain logic and prevents misuse

---

### [Context Mapping: Life Expectancy](https://verraes.net/2015/04/context-mapping-life-expectancy/)
**Type:** Article
**Date:** 2015-04
**Tags/Topics:** Context mapping, legacy systems, strategic design, sponsorship, organizational dynamics

Written during context mapping work at a 200-year-old insurance/banking firm, this article extends context mapping with practical insights. Verraes introduces three useful extensions: (1) Life Expectancy—indicating when systems will be phased out, both officially and realistically (often 2-4 times longer); (2) Sponsorship—showing which departments fund each system, influencing feasibility decisions; (3) Tragedy of the Commons—identifying shared systems where no one invests in maintenance and quality declines. The post advocates for large, refactorable visualizations (walls, glass surfaces) rather than whiteboards, and recommends judging models by usefulness for discovery, not whether they're "readable."

**Key takeaways:**
- Document both official and realistic life expectancies of bounded contexts to inform integration decisions
- Make sponsorship and ownership explicit on context maps to understand feasibility and power dynamics
- Recognize when partnerships become commons problems requiring explicit ownership changes
- Context maps are discovery tools first; don't prioritize pretty diagrams over genuine understanding

---

### [Bandwidth and Context Mapping](https://verraes.net/2014/01/bandwidth-and-context-mapping/)
**Type:** Article
**Date:** 2014-01
**Tags/Topics:** Context mapping, organizational patterns, communication bandwidth, Conway's Law

This article introduces Bandwidth as a missing dimension in context mapping. Context Map patterns describe the character of relationships (Anticorruption Layer, Conformist, Customer/Supplier) but not the communication capacity. Bandwidth captures potential for communication—influenced by physical proximity, frequency of interactions, team seniority, system importance, and organizational dynamics. Even a Conformist relationship with high bandwidth offers more opportunity for negotiation and alignment than one with low bandwidth. Making bandwidth explicit (via thicker/thinner edges on maps) enables data-driven decisions about integration feasibility and relationship sustainability. Low bandwidth increases risk for projects depending on coordination between contexts.

**Key takeaways:**
- Bandwidth measures the capacity for communication and coordination between teams
- Physical distance, seniority, and system importance all affect bandwidth
- Even fixed relationship patterns (Conformist, etc.) can be negotiated if bandwidth is high enough
- Explicit bandwidth visualization enables risk assessment and prioritization of coordination efforts

---

### [Bounded Contexts: Manage the Understandability of Your Systems (DDD Australia)](https://verraes.net/2023/03/bounded-contexts-manage-understandability-ddd-australia/)
**Type:** Presentation (with video)
**Date:** 2023-03
**Tags/Topics:** Bounded contexts, cognitive load, semantic boundaries, team organization, complexity management

A presentation arguing that modularization by domain or technical architecture alone isn't enough—both leave teams struggling to understand interconnected systems. Bounded contexts solve this by separating on semantics: the models, language, and meanings of terms. This creates understandability boundaries where team members need fewer concepts to be productive and coordinate less with other teams. The core argument: organize bounded contexts and teams together to lower cognitive load through semantic separation rather than architectural or organizational separation. This represents a departure from earlier DDD guidance and reflects hard-won lessons from large systems.

**Key takeaways:**
- Bounded contexts create understandability boundaries based on how concepts are understood together
- Semantic separation (shared language and models) reduces cognitive load more effectively than technical or domain separation
- Aligning teams with contexts minimizes the need for cross-team coordination
- This approach works for large systems spanning multiple domains with interconnected software

---

### [Emergent Boundaries](https://verraes.net/2017/04/emergent-boundaries/)
**Type:** Presentation (with video links)
**Date:** 2017-04
**Tags/Topics:** Bounded contexts, modeling, complexity management, empirical discovery

A presentation exploring better ways to empirically discover boundaries rather than choosing them upfront. Verraes discusses the problem: large upfront boundary decisions risk getting them wrong and being stuck with them long-term. Instead, he advocates for starting small, iterating, and discovering boundaries as the system evolves. The approach emphasizes modeling as complexity management—reducing cognitive load through thoughtful separation at small scale (code), medium scale (bounded contexts), and large scale (system architecture). Includes video recordings from DDD eXchange 2017 (London) and ExploreDDD 2017 (Denver) conferences.

**Key takeaways:**
- Don't choose large boundaries upfront; empirically discover them through iteration
- Modeling is fundamentally about complexity management and reducing cognitive load
- Boundaries can be discovered and refined at multiple scales: code, bounded contexts, system architecture
- Continuous discovery and refinement beats careful upfront boundary design

---

### [Bounded Context Podcast](https://verraes.net/2021/09/bounded-context-podcast/)
**Type:** Podcast (with Ryan Shriver, Singlestone Consulting)
**Date:** 2021-09
**Tags/Topics:** Domain-Driven Design, bounded contexts, legacy systems, organizational boundaries

A conversational podcast where Verraes discusses DDD, boundaries, and managing legacy systems. The discussion touches on how boundaries enable teams to work autonomously, how legacy systems constrain redesign possibilities, and the relationship between organizational and system boundaries. The podcast references several foundational works including Rebecca Wirfs-Brock's thinking on object design and modeling, Martin Fowler's refactoring work, and practical guides to working with legacy code. Available across major podcast platforms (Apple Podcasts, Spotify, etc.) with video on YouTube and Vimeo.

**Key takeaways:**
- Boundaries enable team autonomy and reduce coordination overhead
- Legacy systems constrain design choices; understanding constraints matters more than pursuing ideals
- Organizational and system boundaries interact; ignoring either creates problems
- Conversation and collaborative understanding matter as much as formal design methods

---
