# Architecture Patterns & System Design

> Part of the [Architecture Weekly overview](overview.md)

This cluster explores architectural patterns including CQRS and Vertical Slices, monolith-to-microservices strategies, modular design principles, frontend-backend integration, state management, collaborative design processes, and code design philosophy.

## Key Insights

**Semantic diffusion corrupts architectural patterns as they spread.** CQRS originally means separating commands from queries—not requiring two databases, event sourcing, or eventual consistency. Vertical Slices Architecture means organizing by features instead of layers—not forbidding shared code or requiring separate database tables. Most people learn patterns second-hand without consulting original sources (Greg Young's CQRS documents, Jimmy Bogard's VSA article), perpetuating misconceptions. Start simple, evolve architecture as domain understanding grows, and distinguish between patterns and implementations.

**Modular design is the real challenge; deployment topology is secondary.** If you can't deal with modularity, neither monoliths nor microservices will work. Module boundary erosion happens when boundaries lack physical enforcement—developers take the easiest path through direct database access and shared transactions. Shared databases create invisible dependencies where schema changes ripple unexpectedly. Generic Unit of Work attempting to gather changes across modules creates deadlocks and accidental complexity. Pursue "Modular-First" thinking, then decide deployment topology based on actual constraints.

**Most monolith-to-microservices migrations fail because teams pursue architectural ambitions rather than business value.** Accept partial migration where some legacy components should remain when extraction costs exceed benefits. Define business metrics first with concrete, measurable outcomes—not vague goals like "improve scalability." Use the Strangler Fig Pattern to gradually route functionality through a facade while maintaining the legacy system, enabling safe, reversible changes. For data migration, add event publishing to the monolith and have new services consume events with optimized data stores rather than replicating legacy schemas.

**Individual brainstorming before group discussion prevents senior voice dominance.** The "CTO effect" occurs when the most powerful person speaks first, setting the entire agenda and suppressing junior perspectives. Ten to fifteen minutes of silent, solo ideation on a shared digital board breaks this pattern—no first voice to set direction. Written ideas persist longer than spoken suggestions and are harder to dismiss. Using established notations like EventStorming and C4 models prevents time wasted debating representation while focusing discourse on actual merit.

**Frontend and backend architecture aren't separate disciplines—eliminate the terminology distinction.** Cross-functional teams working across both deliver features faster with better communication, directly addressing Conway's Law where system architecture reflects organizational communication patterns. Apply proven architectural principles (DDD, modularity) across all system components. React Query's pooling and subscription management parallels backend patterns like pub/sub and connection pooling, proving these principles span the entire stack.

**Explicit code beats clever code in production.** A minimal API with complex implementation isn't simple—it's a lie that hurts maintainability. Automatic driver-selection systems using Promise memoization and deferred proxies trade one minor inconvenience (explicit imports) for significant hidden complexity plaguing developers during debugging. Choose boring, debuggable code where simple, explicit designs outperform elegant but opaque solutions. Measure tradeoffs accurately—optimizing to avoid one import line while introducing layers of complexity isn't a win.

---

### [My Thoughts on Vertical Slices, CQRS, and Semantic Diffusion](https://www.architecture-weekly.com/p/my-thoughts-on-vertical-slices-cqrs)
**Type:** Article
**Date:** 2025-09
**Tags/Topics:** Vertical Slices Architecture, CQRS, Semantic Diffusion, Modularity, Feature Organization

Architectural patterns like CQRS and Vertical Slices Architecture (VSA) have become corrupted through "semantic diffusion" where original meanings get diluted as ideas spread. CQRS originally means separating commands from queries but now carries false assumptions about requiring two databases, event sourcing, and eventual consistency. VSA means organizing code by features instead of technical layers but has accumulated unfounded constraints like no shared code or separate database tables per slice. Most people learn these patterns second-hand without consulting original sources, perpetuating misconceptions. Two viable VSA implementation strategies exist: Pure Vertical Slices where each feature is completely self-contained with endpoints, business logic, and data access grouped together for maximum independence, or a Thin Coordination Layer where a facade handles routing and cross-cutting concerns while keeping business logic isolated in slices. Vertical slices can nest within business domains, public API files establish module boundaries, and business logic stays pure and separate from HTTP concerns.

**Key takeaways:**
- Consult original sources: read Greg Young's CQRS documents and Jimmy Bogard's VSA article directly
- Start simple with straightforward structures and evolve architecture as domain understanding grows
- Minimize coupling between slices while maximizing cohesion within slices—this captures the actual principle
- Use feature-focused organization to reduce cognitive load and align with team structures
- Distinguish between patterns and implementations—tools like MediatR aren't required, they're optional choices
- CRUD and CQRS are orthogonal—complexity isn't required, naming should reflect business intent

### [So You Want to Break Down a Monolith?](https://www.architecture-weekly.com/p/so-you-want-to-break-down-monolith)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Monolith Migration, Microservices, Strangler Fig Pattern, Business Value, Incremental Migration

Most monolith-to-microservices migrations fail or stall because teams pursue architectural ambitions rather than business value—the author hasn't seen a complete monolith migration succeed. Accept partial migration where some legacy components should remain in the monolith when extraction costs exceed benefits, preventing scope creep and endless rewrites. Define business metrics first with concrete, measurable outcomes tied to actual business impact like reducing feature delivery time from 3 weeks to 1 week or decreasing incident rates by 40%, not vague goals like "improve scalability." Use the Strangler Fig Pattern to gradually route functionality through a facade to new services while maintaining the legacy system, enabling safe, reversible changes with continuous value delivery. For data migration, rather than replicating legacy database schemas via tools like Debezium, add event publishing to the monolith and have new services consume those events with optimized data stores. Maintaining two systems creates data consistency problems, so transition one system to read-only status as quickly as possible.

**Key takeaways:**
- Focus on business outcomes, not architectural purity or following industry trends
- Question initiatives lacking clear value propositions before committing significant resources
- Be skeptical of customer feedback as politeness doesn't equal commitment to using new features
- Align teams with domain boundaries before technical work begins to ensure organizational structure supports goals
- Accept that most systems benefit from architectural pragmatism rather than pursuing microservices as an end goal
- Start with read operations, use feature flags for traffic control, and migrate in vertical slices for learning

### [Monolith-First: Are You Sure?](https://www.architecture-weekly.com/p/monolith-first-are-you-sure)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Modular Monolith, Microservices, Modularity, Database Coupling, Deployment Strategy

Challenges the trendy "modular monolith-first" architectural advice as oversimplified and often becoming a facade for taking shortcuts. The core claim: if you can't deal with modularity, then neither monoliths nor microservices will work for you—the real choice isn't between deployment strategies but between committing to proper modular design or accepting technical debt. Direct database access, shared transactions across modules, and convenience shortcuts gradually dissolve module separation, creating a monolith that's merely a traditional monolith with extra folders. Unlike distributed systems, memory leaks or CPU spikes in one module crash the entire application affecting all business functions simultaneously. Shared databases create invisible dependencies where schema changes ripple unexpectedly because the analytics module directly queries orders tables, making hidden dependencies break spectacularly at runtime. Coordinating deployments across a monorepo introduces "release train" problems where one team's untested changes force everyone to deploy together.

**Key takeaways:**
- Pursue "Modular-First" thinking, then decide deployment topology based on actual constraints
- Address these fundamentals regardless of architecture choice: data isolation strategy, consistency requirements, module boundary clarity, integration patterns, DevOps processes matching team capability
- Module boundary erosion happens when boundaries lack physical enforcement—developers take the easiest path
- Generic Unit of Work attempting to gather changes across modules creates deadlocks, performance issues, and accidental complexity
- The promised deployment simplicity of monoliths requires mature tooling (Nx, Bazel) that remains underdeveloped for backend languages
- The real work isn't selecting monolith versus microservices—it's designing modularity properly first

### [Start Alone, Then Together: Why Software Modelling Needs Solitary Brainstorming](https://www.architecture-weekly.com/p/start-alone-then-together-why-software)
**Type:** Article
**Date:** 2024
**Tags/Topics:** EventStorming, Collaboration, Brainstorming, Team Dynamics, Modeling, Design Process

Identifies the "CTO effect" where senior voices dominate software modeling sessions, suppressing junior perspectives. When the most powerful person speaks first, their direction sets the entire agenda, preventing genuine collaborative discovery, optimizing for consensus rather than solution quality. The solution is 10-15 minutes of silent, solo ideation before any conversation begins where everyone generates ideas simultaneously on a shared digital board like Miro without commenting until time expires. This breaks the dominance pattern at its source—no first voice to set direction. Written ideas persist longer than spoken suggestions, as ideas documented visually are harder to dismiss. Using established notations like EventStorming and C4 models prevents time wasted debating representation while focusing discourse on actual merit. EventStorming exemplifies this approach where participants independently write business events on orange sticky notes during the initial phase, producing messy, overlapping, potentially incorrect output intentionally, then the collaborative phase reconciles diverse perspectives.

**Key takeaways:**
- Set a timer for silent individual work before discussions to prevent senior voice dominance
- Maintain visible documentation of all contributed ideas so they can't be easily dismissed
- Use established modeling formats like EventStorming or C4 to reduce procedural friction
- Defer evaluation and synthesis until the collaborative phase after all ideas are captured
- Recognize that individual and group work serve different cognitive functions—conflating them diminishes both
- Ideas documented visually are much harder to ignore than spoken suggestions that disappear

### [Frontend Architecture, Backend Architecture, or Just Architecture?](https://www.architecture-weekly.com/p/frontent-architecture-backend-architecture)
**Type:** Discussion
**Date:** 2024
**Tags/Topics:** Frontend Architecture, Cross-Functional Teams, Conway's Law, Unified Design, Full-Stack

Challenges the traditional separation of "frontend" and "backend" architecture as distinct disciplines. For too long, frontend development was treated as secondary to backend processes, but modern user-facing applications demand serious architectural consideration. Many developers conflate architecture with file organization and tooling choices, missing deeper strategic decisions that shape system behavior. Cross-functional teams working across both frontend and backend deliver features faster with better communication, directly addressing Conway's Law where system architecture reflects organizational communication patterns. Rather than separate disciplines, the speakers propose viewing frontend and backend as components requiring holistic design consideration including tradeoffs around state management, performance, and scalability. Backend developers should adopt frontend's component-driven methodology and rapid prototyping, while frontend engineers benefit from domain-driven design principles.

**Key takeaways:**
- Eliminate the "frontend/backend" terminology distinction in architectural discussions
- Structure teams around complete feature delivery rather than technological layers
- Apply proven architectural principles (DDD, modularity) across all system components
- Prioritize understanding business problems over tool selection when making architectural decisions
- System architecture reflects organizational communication patterns—design both together
- Knowledge exchange between frontend and backend enriches both disciplines

### [React Query: A Solution for Frontend State Management](https://www.architecture-weekly.com/p/react-query-a-solution-for-frontend)
**Type:** Article
**Date:** 2024
**Tags/Topics:** React Query, TanStack Query, State Management, Frontend Architecture, Caching, Server State

Frontend teams often conflate local UI state (toggles, forms) with server data, creating issues like stale information, redundant API calls, and scattered loading flags. This architectural confusion leads to unreliable applications and duplicated caching logic. React Query (now TanStack Query) separates concerns by treating server data as a distinct entity, handling automatic caching strategies, time-to-live (TTL) configurations, stale-while-revalidate patterns, and query invalidation based on actual changes. Query keys organize and invalidate server responses selectively, avoiding brute-force cache resets. The framework automatically manages background data prefetching, UI updates when browser tabs regain focus, mutation hooks for operations like deletions, and cache invalidation for affected data segments. React Query's pooling and subscription management parallels backend patterns like pub/sub and connection pooling, proving these principles span frontend and backend architecture equally.

**Key takeaways:**
- Adopt dedicated server-state libraries rather than mixing concerns in general state managers
- Separate local UI state from server data to enforce clean architectural boundaries
- Use query keys for selective cache invalidation rather than brute-force cache clearing
- Leverage automatic background prefetching and focus-based revalidation for better user experience
- Recognize that frontend architecture patterns parallel backend patterns—neither domain owns these concepts exclusively
- DevTools provide visibility into each query's status, simplifying debugging and cache management

### [Compilation Isn't Just for Programming Languages](https://www.architecture-weekly.com/p/compilation-isnt-just-for-programming)
**Type:** Article
**Date:** 2025-09
**Tags/Topics:** Compilers, Pipeline Optimization, Event Streaming, Node.js, Browser APIs, Performance

JavaScript's ecosystem faces a fundamental challenge: different environments (Node.js vs. browsers) implement incompatible streaming APIs with different performance characteristics. Traditional solutions—environment-specific code, compatibility layers, or lowest-common-denominator approaches—create unmaintainable complexity or sacrifice performance. The author proposes treating pipeline definitions as declarative data rather than directly executable code, with a compilation layer transforming these declarations into environment-optimized implementations. This mirrors how language compilers, JIT compilation, database query planners, and React's new compiler all separate intent from execution. Key mechanisms include operation fusion where consecutive synchronous operations compile into single optimized functions eliminating intermediate allocations, environment-aware compilation where the same pipeline definition compiles to Node.js streams, Web Streams, or async generators, extensibility where custom operations register compilers implementing domain-specific logic efficiently per environment, and pattern recognition where the compiler analyzes pipeline structure to identify optimization opportunities.

**Key takeaways:**
- Separate declaration from execution to enable mechanical transformations and optimization
- Move complexity from runtime to build time for systematic optimization opportunities
- Support sophisticated patterns like fanout and rate limiting through extensible compilers
- Maintain single codebases across vastly different deployment contexts through compilation
- Operation fusion eliminates intermediate allocations by compiling chained operations into tight loops
- Build event-driven systems using compilation frameworks that optimize per-environment automatically

### [Sneaky Code Bites Back](https://www.architecture-weekly.com/p/sneaky-code-bites-back)
**Type:** Article
**Date:** 2025-10
**Tags/Topics:** API Design, Code Complexity, Explicit vs. Implicit, Promise Memoization, Developer Experience

Clever, hidden code complexity inevitably creates maintenance nightmares. While adding SQLite support to Pongo, the author designed an automatic driver-selection system using Promise memoization and deferred proxies, trading one minor inconvenience (explicit imports) for significant hidden complexity that would plague developers during debugging. The deferred loading pattern had connection pools appear immediately but actually function as proxies caching Promises rather than results, supposedly eliminating redundant driver loading. However, this involved three layers of proxies (client → database → collection), each awaiting the previous layer's resolution, creating incomprehensible stack traces pointing to Promise resolution chains rather than actual problems. Cached Promise rejections became permanent failures requiring process restarts—temporary network glitches would break applications until restart. The practical alternative is explicit driver injection where developers import their database driver and pass it directly to the client constructor, requiring one additional import line per application.

**Key takeaways:**
- Prioritize explicitness over cleverness in API design to reduce hidden complexity
- Measure tradeoffs accurately: optimizing to avoid one import line while introducing layers of complexity isn't a win
- Recognize when abstraction becomes obstruction: magic at the API level creates maintenance priesthoods
- Validate designs through implementation as building problematic code reveals implications theoretical analysis missed
- Choose boring, debuggable code: simple, explicit designs outperform elegant but opaque solutions in production
- A minimal API with complex implementation isn't simple—it's a lie that will hurt maintainability

