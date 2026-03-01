# Software Engineering Practices

> Part of the [Mathias Verraes blog overview](overview.md)

Object-oriented principles, testing strategies, code quality, refactoring techniques, and PHP-specific patterns form the foundation of this cluster. These articles span from 2011 through 2024, progressing from early practical guides toward deeper insights into collaborative practices, design patterns, and the philosophical shifts in how we approach building maintainable, tested systems. Testing emerges as a recurring theme—not just a QA concern but a design tool—alongside consistent emphasis on code clarity, domain-driven thinking, and the human side of software engineering.

## Key Insights

**Testing is a design tool, not just a quality check.** Writing tests before implementations — mocking dependencies first, discovering interfaces from the caller's perspective — produces more minimal, fitting APIs than building something and cutting it to size afterwards. The discipline of testability pushes designs toward better separation and clearer contracts.

**Test economics matter as much as test coverage.** Unit tests cost more discipline upfront but less maintenance over time. System tests are easy to add but grow brittle and slow. The Test Pyramid applies to greenfield projects; brownfield projects should start with system tests and migrate downward as the codebase improves. Delete slow, brittle, or redundant tests — maintaining them is waste.

**Naming is domain communication.** Class names with verbs (`HireEmployee`, `EnemyWasDefeated`), interfaces that read as English sentences (`HasPermissions`, `CastsToJson`), repositories that speak the ubiquitous language (`findAllFixedBugs()` not `findBy(array('status' => 'fixed'))`) — these are not cosmetic choices. They determine whether code can be discussed with domain experts without translation.

**Composition beats inheritance; behaviour beats data.** Final classes, constructor injection, and higher-order functions produce more flexible, testable code than inheritance hierarchies. Objects are contracts for behaviour, not containers for data. Value Objects encode domain constraints as types, making invalid states unrepresentable at compile time rather than runtime.

**Mastery comes from embracing change, not avoiding it.** Fearless refactoring, atomic commits, collaborative code review, and deliberate practice with techniques outside your comfort zone compound over time into genuinely adaptive teams. Shielding developers from changing requirements prevents them from developing the most critical skill in the discipline.

---

### How to Fix a Bug: Tests, Hypotheses, Timeboxes
**Type:** Article
**Date:** 2024-03
**Tags/Topics:** debugging, testing, collaborative problem-solving, TDD, hypothesis-driven development

An efficient process for fixing bugs that combines collaborative investigation with scientific hypothesis testing. Rather than browsing code randomly, pair or ensemble with others, write a failing test to prove the bug exists, brainstorm multiple hypotheses, prioritize them by probability and effort, set timeboxes to test each hypothesis, then fix with confidence. The approach emphasizes that the engineer's duty is building systems that work and remain evolvable over time, making quality and testability investments pay off.

**Key takeaways:**
- Pair or ensemble programming reduces bug-fixing time by catching errors before fixing the wrong thing
- Write failing tests first to document the bug and prevent regressions
- Use timeboxed hypothesis testing to avoid rabbit holes and focus investigation rationally
- Treat test-driven bug fixes as part of building systems that remain maintainable over time

---

### Code Reviews and Blame Culture
**Type:** Article
**Date:** 2016-04
**Tags/Topics:** code reviews, team culture, continuous integration, quality practices

Pre-merge code reviews are not inherently bad; context matters. In high-performing teams with strong testing and pair programming, gated reviews may feel like a step backward. But in teams with weak testing and high blame culture, pre-merge reviews paradoxically reduce blame by making failure collective rather than individual. The key is simple rules: open pull requests early, never merge your own code, never merge code you don't understand, always review others' work before starting new tasks.

**Key takeaways:**
- Pre-merge reviews can reduce blame culture by shifting responsibility from individuals to the team
- Context matters—best practices must fit the team's maturity level and current state
- Review practices should include acceptance criteria, atomic commits, and treating pull requests as conversations
- Improvements are more sustainable when teams discover the value themselves rather than having practices imposed

---

### Property-based Testing
**Type:** Presentation
**Date:** 2016-04
**Tags/Topics:** testing, property-based testing, QuickCheck, randomized testing

A presentation exploring property-based testing approaches for generating test cases automatically. Rather than writing individual test cases, you specify properties that should always hold true and let the framework generate inputs to test those properties. This approach discovers edge cases humans might miss and provides powerful specifications of expected behavior.

**Key takeaways:**
- Property-based testing generates many test cases automatically to find edge cases
- Properties express invariants that should hold across all valid inputs
- Shrinking reduces counterexamples to minimal failing cases for easier debugging
- More effective than example-based testing for complex domains with many possible inputs

---

### Economy of Tests
**Type:** Article
**Date:** 2015-01
**Tags/Topics:** testing economics, test levels, test pyramid, greenfield, brownfield projects, maintenance costs

Testing has different costs and benefits depending on the project stage. In greenfield projects, unit tests, integration tests, and system tests cost roughly the same to introduce but differ in long-term maintenance. Integration and system tests become increasingly expensive over time due to brittleness and speed. The Test Pyramid recommends building mostly unit tests. In brownfield projects, starting with system tests and migrating to lower levels is practical. Test level migration—gradually shifting high-level tests down to unit tests as refactoring improves testability—balances introducing tests quickly with maintaining a sustainable suite.

**Key takeaways:**
- Unit tests cost more to learn (design must improve) but less to maintain
- System and integration tests are easier to learn but grow brittle and slow over time
- Test Pyramid applies to greenfield; brownfield needs inverted pyramid with migration toward the base
- Test metrics (speed, fragility, understandability) matter more as test suites grow
- Delete slow, brittle, or redundant tests; good practice includes "deleting tests"

---

### How Much Testing is Too Much?
**Type:** Article
**Date:** 2014-12
**Tags/Topics:** code coverage, TDD experimentation, test metrics, over-design, test maintenance

Code coverage is a poor metric for quality—it only measures what was executed, not whether outcomes were tested. Rather than chasing coverage percentages, adopt a time-boxed experiment: be overzealous with TDD for a couple of weeks, writing tests first for everything. Discover which tests are unnecessary (getters, empty constructors) and which bring real value. Then back down gradually and develop instincts about the right balance. Over-design in tests, like over-design in code, creates technical debt if not refactored away as understanding deepens.

**Key takeaways:**
- Code coverage measures execution, not correctness; pursue it only to validate testing strategy
- Experiments beat opinions—try overzealous testing to build design and testing instincts
- Low-value tests become a problem when they're slow, brittle, hard to read, or require constant maintenance
- Trust instinct (annoyance level) to decide when to delete tests rather than maintaining them forever
- Refactoring tests is as valid as refactoring code

---

### Pre-merge Code Reviews
**Type:** Article
**Date:** 2013-10
**Tags/Topics:** code review process, pull requests, team maturity, defect detection, knowledge sharing

Pre-merge code reviews establish team responsibility for code quality. The rules are simple: never push to master, never merge your own code, review work-in-progress before starting new tasks, and never merge code you don't understand or disagree with. Benefits include early defect detection, shared knowledge, reduced bus factor, and freedom to make mistakes knowing colleagues will catch issues. Making reviews easier requires atomic stories, clear acceptance criteria, atomic commits, treating pull requests as conversations, and integrating frequently. Pitfalls include merge buddies (gaming the system), gatekeepers (single reviewers), and total lockdown (eroding trust).

**Key takeaways:**
- Pre-merge reviews shift code responsibility to the team, improving quality and safety
- Atomic stories and commits make reviews faster and code easier to understand
- Reviews should focus on important issues (tests, naming, coupling) not formatting details
- Review tests if using TDD; they often suffice to validate implementation
- Whiteboard solutions before coding to make reviews less contentious

---

### Extract Till You Drop
**Type:** Presentation
**Date:** 2013-09
**Tags/Topics:** refactoring, legacy code, testing, live coding, incremental improvement

A live-coding presentation on bringing legacy code under test through aggressive refactoring and extraction. The approach recognizes that rebuilding from scratch isn't viable; with the right techniques, mindset, and tools, any codebase can be tested and refactored toward better architecture without affecting system behavior or halting business operations.

**Key takeaways:**
- Spaghetti code can be tamed with systematic refactoring and testing techniques
- Extract to smaller, testable units before writing tests
- Behavioral preservation ensures the business continues while improving internal quality
- Live refactoring demonstrates concrete techniques applicable to real legacy systems

---

### Sensible Interfaces
**Type:** Article
**Date:** 2013-09
**Tags/Topics:** naming, interface design, polymorphism, contract, segregation

Interfaces communicate contracts and expected polymorphism. Avoid suffixing with "Interface" or prefixing with "I"—the interface name should be the concept, and implementations should have descriptive names (e.g., Translator, XmlTranslator, CachedTranslator). The "-able" suffix (Serializable, Translatable) feels unnatural; instead, use full English phrases (CastsToJson, HasTimestamp) that form readable sentences. Respect contracts by never calling methods outside the interface you typehint. Segregate interfaces when clients don't use all methods. Use roles to give classes multiple behaviors without splitting them prematurely.

**Key takeaways:**
- Name interfaces after the concept, implementations after specifics
- Avoid "-able" and "Interface" suffixes; use natural language for better readability
- Program to interfaces, not implementations; clients don't care about concrete types
- Segregate interfaces when classes have unused stub methods
- Use roles to give objects multiple behaviors without premature splitting

---

### Verbs in Class Names
**Type:** Article
**Date:** 2013-10
**Tags/Topics:** naming, domain language, messages, commands, events, specifications

Classes with verbs in their names express concepts that don't naturally map to nouns. Domain commands and events use imperative and past-tense verbs (AttackEnemy, EnemyWasDefeated) to stay close to the business language and distinguish intent. Specifications model business rules as questions (CustomerIsPremium, OrderIsReadyForShipment). Domain exceptions use past-tense names (OrderShipmentHasFailed, BankAccountWasOverdrawn) to mirror events and emphasize what went wrong. Interfaces combining verbs and roles (HasPermissions, DomainCommand) read as natural English sentences.

**Key takeaways:**
- Verbs in class names express intent and natural language more clearly than generic nouns
- Commands, events, and specifications benefit from verb-based naming
- Building expressive APIs that read like sentences improves domain communication
- Developers and business stakeholders can discuss code without translation

---

### Final Classes: Open for Extension, Closed for Inheritance
**Type:** Article
**Date:** 2014-05
**Tags/Topics:** inheritance, final keyword, PHP, object design, SOLID principles

The concept of "open for extension, closed for modification" is better achieved through composition than inheritance. Declaring classes final forces you to think about extension points upfront. Inheritance hierarchies are hard to maintain and reason about; composition via constructor injection is more flexible and testable. Final classes encourage interface-based design, making code more robust.

**Key takeaways:**
- Mark classes final by default; only remove final when there's a clear need for inheritance
- Inheritance creates fragile hierarchies; composition is more flexible
- Final classes encourage explicit extension points via interfaces and constructor injection
- Open/Closed Principle is better served by composition than inheritance

---

### Higher Order Programming
**Type:** Article
**Date:** 2014-11
**Tags/Topics:** functional programming, PHP, callbacks, closures, composition

Higher-order programming involves functions (or methods) that take functions as arguments or return functions. In PHP, static methods and functions can be passed to functions like array_reduce, enabling functional composition patterns. Referential transparency (same input always produces the same output) matters more than whether code is object-oriented or functional; passing functions as parameters adds flexibility without the complexity of inheritance.

**Key takeaways:**
- Higher-order functions enable composition without building inheritance hierarchies
- Static methods are valid when they're referentially transparent and stateless
- Passing functions as parameters to array_reduce and similar utilities enables powerful composition
- Functional concepts complement OOP; use both where appropriate

---

### When to Use Static Methods in PHP
**Type:** Article
**Date:** 2014-06
**Tags/Topics:** static methods, global state, composition, referential transparency

Static methods are valid when they're referentially transparent—same input always produces the same output, no side effects (e.g., Calculator::sum(1, 2)). Problems arise with shared global state, where one part of code affects another's behavior unexpectedly. Avoid static methods for stateful services; use instance objects instead. Static methods are at the lowest level of abstraction and can't be mocked, but composition and higher-order programming can add abstraction when needed.

**Key takeaways:**
- Static methods are acceptable for stateless, referentially transparent operations
- Shared global state is the real problem, not static methods themselves
- Avoid static methods for stateful services; use dependency injection with instances
- Composition and higher-order functions add abstraction where needed
- There's a place for both static methods and OOP—context determines the choice

---

### Named Constructors in PHP
**Type:** Article
**Date:** 2014-06
**Tags/Topics:** factory methods, object creation, expressiveness, PHP, named constructors

Named constructors are static factory methods that provide more expressive alternatives to direct construction. Instead of new Time(11, 45, 0), use Time::from("11:45") or Time::midnight(). Named constructors make object creation more readable and can encapsulate validation or complex initialization logic. They also allow different initialization semantics from a single class.

**Key takeaways:**
- Named constructors provide expressive alternatives to direct object construction
- Static factory methods can encapsulate validation and initialization complexity
- Multiple named constructors allow different ways of constructing the same object
- Names should reflect the intent, not the mechanism (avoid "create" or "make")

---

### Object Reorientation
**Type:** Presentation
**Date:** 2014-11
**Tags/Topics:** object-oriented design, refactoring, DDD, design patterns

A presentation on reorienting object-oriented code from structural data models toward behavioral models that capture meaning. Moving from "what data does this hold?" to "what does this thing do?" improves expressiveness and maintainability.

**Key takeaways:**
- Object design should focus on behavior and meaning, not just data structure
- Rich behavioral models are more maintainable than simple data holders
- Design patterns and DDD patterns help express intent and invariants

---

### Religiously RESTful
**Type:** Article
**Date:** 2014-03
**Tags/Topics:** REST, API design, maturity levels, pragmatism, HTTP

REST is a protocol with varying maturity levels. Strict adherence costs effort in team understanding and tooling. If your API has only your own web UI and mobile app as clients, and you expect to replace it within a few years, RESTish (pragmatic REST) may suffice. Only build truly RESTful APIs if you expect long maintenance and many external clients. The effort is better spent on domain model clarity than infrastructure perfection.

**Key takeaways:**
- REST solves standardization and long-term maintainability well, but at a cost
- Maturity and context matter—not all APIs need full REST compliance
- Choose pragmatic REST if clients are internal and lifespan is short
- Invest extra effort in domain language over infrastructure perfection

---

### Parser Combinators (Full Stack Europe)
**Type:** Presentation
**Date:** 2023-04
**Tags/Topics:** parsing, functional programming, composition, DSLs

A talk on parser combinators—combining small, composable parsers declaratively to build larger ones. Parsers take unstructured input and return structured output. Using composition instead of procedural code makes parsers easier to build, understand, and modify.

**Key takeaways:**
- Parser combinators compose small parsers into larger ones
- Declarative composition is clearer than procedural parsing code
- This approach works well for building domain-specific languages and structured input handling

---

### Antifragile - Things That Gain from Disorder
**Type:** Book Review
**Date:** 2013-08
**Tags/Topics:** Nassim Taleb, antifragility, risk, uncertainty, resilience

Verraes reviews Nassim Taleb's "Antifragile," exploring concepts applicable to software systems. Antifragile systems gain from disorder and volatility, unlike merely robust systems. The book introduces ideas like optionality (the value of having choices), convexity (asymmetric benefits from randomness), and the barbell strategy (combining extremes while avoiding dangerous middles).

**Key takeaways:**
- Antifragility differs from robustness—antifragile systems improve under stress
- Software architectures benefit from thinking about failure and recovery
- Option value and asymmetric payoffs guide better decision-making under uncertainty

---

### Unbreakable Domain Models
**Type:** Presentation
**Date:** 2013-06
**Tags/Topics:** DDD, value objects, entities, repositories, specifications, domain logic

A presentation on building domain models using DDD patterns—value objects for consistency, entities with boundaries, repositories for persistence abstraction, and specifications for business rules. These patterns protect invariants and express meaning, moving from structural data models to rich behavioral models that capture domain knowledge.

**Key takeaways:**
- Value Objects and Entities define consistency boundaries and protect invariants
- Repositories abstract persistence; models don't know how they're stored
- Specifications express business rules in the ubiquitous language
- These patterns make models expressive, unbreakable, and beautiful

---

### Code Folder Structure
**Type:** Article
**Date:** 2011-10
**Tags/Topics:** project organization, coupling, bounded contexts, dependencies, folder hierarchy

Organizing code by technical role (Controllers, Models, Repositories) follows framework conventions but misses communication opportunities. Instead, group by domain concepts—BlogDomain, CoreDomain—to show coupling and context boundaries. BlogPost and Comment live near BlogPostRepository; Comments don't know they belong to BlogPost. This structure makes dependencies explicit and aids refactoring decisions.

**Key takeaways:**
- Organize by domain concept, not technical role, to clarify dependencies and coupling
- Proximity suggests coupling; document coupling direction
- This approach naturally exposes bounded contexts and enables migration strategies
- Conscious decisions about coupling are better than accidentally inheriting framework structure

---

### Coping with Change in Software Development
**Type:** Article
**Date:** 2011-07
**Tags/Topics:** change management, refactoring, agility, adaptability, continuous improvement

Fear of change is the enemy. Shielding developers from change requests delays learning crucial skills. Deliberately introducing change—refactoring exercises, trying new techniques—develops coping abilities. The business's value changes as they learn; specs naturally evolve. Rather than resisting change, master it through practice and study.

**Key takeaways:**
- Fear of change is counterproductive; master change through practice
- Shielding developers from change prevents them from learning critical skills
- Deliberately practicing change (refactoring, experiments) builds team capability
- Businesses that learn fast and adapt win; inflexibility loses value

---

### Lazy Loading in PHP with Closures
**Type:** Article
**Date:** 2011-05
**Tags/Topics:** lazy loading, closures, DDD, repositories, design patterns

Lazy loading defers expensive operations (database queries) until needed. Closures let you inject logic that references data without coupling the domain model to the persistence layer. A Customer holds a Closure that fetches Orders only when getOrders() is called, avoiding unnecessary queries while keeping the domain model clean and testable.

**Key takeaways:**
- Closures enable lazy loading without coupling domain models to persistence
- Defer expensive operations until actually needed to avoid unnecessary work
- The domain model stays pure; repositories encapsulate fetch logic
- Client code remains unchanged; loading strategy becomes an implementation detail

---

### Beautiful Code
**Type:** Article
**Date:** 2011-04
**Tags/Topics:** code quality, craftsmanship, maintainability, refactoring, professional pride

Business value doesn't depend on beautiful code. Yet all good programmers care about it. Beautiful code makes developers happy, confident, and productive. Changes are handled with grace; refactoring pays dividends. Leave every piece of code cleaner than you found it—small, invisible improvements compound into elegant systems over time.

**Key takeaways:**
- Beautiful code improves developer morale and productivity
- Refactoring is an investment that makes future changes easier
- Small, continuous improvements compound into elegance
- Professional pride in craftsmanship benefits everyone

---

### Representing Money in PHP, Fowler-style
**Type:** Article
**Date:** 2011-04
**Tags/Topics:** value objects, money pattern, PHP, Martin Fowler, domain modeling

Implementing Martin Fowler's Money pattern in PHP creates a type-safe, precise representation of monetary amounts. Money combines a numeric value with currency, preventing accidental comparisons or arithmetic across currencies. This pattern exemplifies value objects—immutable, equality-based objects that represent domain concepts precisely.

**Key takeaways:**
- Money is a value object combining amount and currency
- Fowler's Money pattern prevents currency errors and improves type safety
- Value objects are immutable and compared by value, not identity
- Domain-specific types are worth the effort for correctness

---

### Random Thoughts on Using Git
**Type:** Article
**Date:** 2011-03
**Tags/Topics:** Git, version control, workflows, distributed VCS, branching

Reflections on Git versus centralized version control. Git's distributed nature and local branching enable powerful workflows that Subversion can't match. Atomic commits, easy branching, and reflog (reference logs) that survive history rewrites make Git more forgiving and flexible for software development.

**Key takeaways:**
- Distributed VCS enables flexible workflows impossible with centralized systems
- Local branches encourage experimentation without affecting others
- Git's reflog provides safety nets for history exploration
- Atomic commits and easy reverting support fearless refactoring

---

### Accessing Private Properties from Other Instances
**Type:** Article
**Date:** 2011-03
**Tags/Topics:** PHP, visibility, access modifiers, value objects, equality

In PHP, private properties are accessible from other instances of the same class—visibility operates at class level, not instance level. This lets value objects compare themselves (foo1->equals(foo2)) by accessing private properties of another Foo instance. This feature is useful for implementing equality without exposing internals to outside code.

**Key takeaways:**
- Private visibility in PHP is class-level, not instance-level
- Other instances of the same class can access private properties
- Value objects leverage this for implementing equals() comparisons
- Encapsulation is preserved—outside code still can't access private properties

---

### Keep Your Controllers Thin with Doctrine2
**Type:** Article
**Date:** 2011-03
**Tags/Topics:** repositories, Doctrine2, separation of concerns, domain language, query encapsulation

Doctrine2's repository pattern abstracts persistence, preventing controller coupling to database details. Rather than writing queries in controllers, ask the repository for domain concepts: findAllFixedBugs() instead of findBy(array('status' => 'fixed')). The repository encapsulates query logic; if schema changes, only the repository changes. Controllers speak the domain language and stay clean.

**Key takeaways:**
- Repositories speak the ubiquitous language, not the database schema
- Queries in controllers couple code to the database; repositories decouple it
- Custom repository methods encapsulate complex queries
- Thin controllers result from moving logic to appropriate domain boundaries

---

### Interface Discovery with PHPUnit's Mock Objects
**Type:** Article
**Date:** 2011-03
**Tags/Topics:** TDD, interface discovery, mock objects, PHPUnit, design-driven testing

Writing tests with mock objects before building implementations forces you to discover what interfaces your code actually needs. Mock the dependency, write tests that tell it what to do, then build the real implementation. This approach ensures the design is right for the caller, not the implementer. You discover minimal, fitting interfaces rather than building something then cutting it to size.

**Key takeaways:**
- Mocking dependencies before building them reveals what interfaces you actually need
- TDD-style mock-first design ensures implementations fit their callers
- Discovered interfaces are minimal and focused on real usage
- Avoids YAGNI violations—you code only what tests actually require

---
