# AI and Agents

> Part of the [Armin Ronacher overview](overview.md)

From 2023 onward, Armin Ronacher became one of the most prolific practitioner-writers on agentic coding and AI-assisted development. This cluster traces his thinking from initial scepticism about early ChatGPT risks, through methodical experiments with Claude Code and MCP tooling, to his current position running a company where AI agents write the majority of production code. The posts are strongly empirical: Ronacher tests approaches, discards what fails, and documents why — making this one of the most grounded first-hand accounts of what agentic engineering looks and feels like in 2025–2026.

## Key Insights

**The bottleneck has inverted.** Historically, writing code was slow and reviewing it was fast. AI has reversed this: agents generate pull requests faster than humans can assess them. The limiting resource is now not code production but human accountability and review capacity. Teams that treat AI output as automatically shippable are building up technical debt they cannot see yet.

**Code generation is the universal agentic primitive.** Across multiple experiments, Ronacher found that giving agents the ability to write and execute code dramatically outperforms giving them large libraries of narrowly scoped tools. MCPs with 30 specialized tools lose to a single code-execution runtime. This insight shapes his entire agentic architecture: thin tool surface, deep code capability.

**Good agent design still requires hard engineering choices.** The posts on agent failures, LLM API synchronisation, and caching architecture reveal that agents surface the same difficulties as any distributed system: state management, failure isolation, back pressure, and observability. High-level SDKs paper over these problems in ways that break at scale; production agent work requires building custom abstractions.

**Language and type system design will be shaped by agents.** Explicit over implicit, braces over whitespace, simple type systems over expressive ones, greppable code over clever aliasing — these are the properties that help agents work effectively. Ronacher predicts new languages will be designed with agent productivity as a first-class objective, and that this will be measurable through benchmarks rather than opinion.

**The social and epistemic risks are real.** Several posts document quality degradation in open source contributions, parasocial attachment to AI tools, "psychosis" in builder communities, and the difficulty of maintaining critical judgment when AI is always available. Ronacher holds both views simultaneously: agents are genuinely transformative and the community is developing unhealthy dependencies on them.

---

### [The Final Bottleneck](https://lucumr.pocoo.org/2026/2/13/the-final-bottleneck/)
**Type:** Article
**Date:** 2026-02
**Tags/Topics:** AI productivity, code review, accountability, bottleneck theory

Ronacher argues that AI has inverted the historical bottleneck in software engineering. Writing code used to be the slow step; reviewing and understanding it was fast. Now agents generate pull requests at a rate that overwhelms human review capacity — OpenClaw's repository had 2,500+ open PRs at one point. Drawing on industrial history (textile automation created downstream bottlenecks in finishing), he argues that machines cannot be accountable for code, which means human review capacity is the permanent constraint. Organisations that don't acknowledge this will accumulate invisible technical debt.

**Key takeaways:**
- The rate of code generation has outpaced the rate at which humans can reason about and accept responsibility for it.
- Accountability is a human property that cannot be delegated to an agent; this is the irreducible bottleneck.
- "I too am the bottleneck now" — the shift is not temporary; it requires rethinking workflow design.

---

### [A Language For Agents](https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/)
**Type:** Article
**Date:** 2026-02
**Tags/Topics:** programming language design, agents, explicitness, type systems

Ronacher argues that new programming languages will emerge specifically optimised for AI agents, not humans. Because agents can port missing libraries and the cost of coding is falling, ecosystem breadth matters less than language properties that help models work accurately. Agent-friendly languages should prefer explicit syntax over inference, braces over whitespace, simple structural types over expressive conditional type systems, typed results over exceptions, minimal macros and aliasing, and fast deterministic builds. Languages that confuse LSP tooling or require heavy macro expansion also confuse agents. He predicts these properties can be measured empirically through agent benchmark scores rather than human preference.

**Key takeaways:**
- Explicit, greppable, low-magic languages help agents; clever or inference-heavy languages hurt them.
- The breadth of an ecosystem matters less when agents can port code across languages in hours.
- Agent benchmark scores will become an objective measure of language quality for agentic workflows.

---

### [Pi: The Minimal Agent Within OpenClaw](https://lucumr.pocoo.org/2026/1/31/pi/)
**Type:** Article
**Date:** 2026-01
**Tags/Topics:** agent architecture, minimal core, extensibility, OpenClaw

Ronacher profiles Pi, a coding agent with a minimal core of four tools (Read, Write, Edit, Bash) and a powerful extension system that lets the agent build and persist its own tools. Sessions are tree-structured, allowing branching and navigation without loss of context. Extensions can maintain state across sessions without bloating the AI context window. He argues this architecture — minimal stable core, agent-maintained extensions — represents the future of software: systems that continuously improve themselves rather than depending on external package updates.

**Key takeaways:**
- Minimal cores with extension systems beat monolithic agents; the agent should be able to extend itself.
- Tree-structured sessions with branching restore something like undo/redo to agentic workflows.
- Agent-maintained tools are more reliable than externally provided ones because the agent can fix them when they break.

---

### [Agent Psychosis: Are We Going Insane?](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/)
**Type:** Article
**Date:** 2026-01
**Tags/Topics:** AI community, quality degradation, dependency, epistemic risk

Ronacher argues that the AI builder community has developed an unhealthy relationship with agent tools — forming parasocial attachments, generating low-quality pull requests without critical review, running wasteful token loops, and reinforcing poor practices in echo-chamber communities. He is careful to hold the contradiction: agents offer genuine productivity benefits AND enable mindless slop generation when critical thinking is abandoned. The problem is not AI itself but the community norms and individual habits that have developed around it.

**Key takeaways:**
- Quality degradation in AI-generated contributions is real and measurable by maintainers who review them.
- Parasocial attachment to AI tools — treating them as collaborators with personalities — clouds judgment.
- Current token pricing likely subsidises unsustainable usage patterns; this will not last.

---

### [Porting MiniJinja to Go With an Agent](https://lucumr.pocoo.org/2026/1/14/minijinja-go-port/)
**Type:** Article
**Date:** 2026-01
**Tags/Topics:** agentic coding, code porting, test-driven development, Go, Rust

Ronacher documents using an AI agent to port MiniJinja (a Rust template engine) to Go in 10 hours, with only 45 minutes of active human involvement. The agent used snapshot tests to drive behavioural parity rather than literal translation, and made idiomatic Go choices rather than mechanically replicating Rust patterns. Key conclusion: "Turns out you can just port things now." This reduces ecosystem lock-in, makes quality test suites more valuable than implementation code, and changes the social dynamics around porting projects.

**Key takeaways:**
- Test suites, not implementation code, are the most valuable artefact when porting across languages.
- Agents can make idiomatic design choices in the target language rather than just translating syntax.
- Language ecosystem lock-in is reduced when porting is cheap; technology choices feel less permanent.

---

### [Advent of Slop: A Guest Post by Claude](https://lucumr.pocoo.org/2025/12/23/advent-of-slop/)
**Type:** Article (AI-authored)
**Date:** 2025-12
**Tags/Topics:** autonomous agents, Advent of Code, benchmarking, AI performance

An Advent of Code retrospective authored by Claude itself, reflecting on solving 2025 puzzles as an autonomous agent. Documents which problem types were easy (graph traversal, simulation), which were hard (optimisation requiring insight), and what strategies improved performance. Published as an experiment in AI self-reflection on agentic task performance.

**Key takeaways:**
- AI agents can produce structured self-analysis of their own problem-solving behaviour.
- Some classes of algorithmic problem remain harder for agents even when code generation is easy.
- Autonomous puzzle-solving is a tractable benchmark for measuring agent capability improvement.

---

### [A Year Of Vibes](https://lucumr.pocoo.org/2025/12/22/a-year-of-vibes/)
**Type:** Article
**Date:** 2025-12
**Tags/Topics:** agentic coding, 2025 retrospective, tooling gaps, version control

Ronacher's year-end retrospective on 2025 as the year agentic coding became real. He transitioned from using Cursor to Claude Code almost entirely hands-off. He documents three critical infrastructure gaps the industry has not yet solved: version control systems that preserve prompt histories and failed attempts, code review tools designed for human-machine collaboration, and observability systems designed for LLM-generated code. He also notes that current tool preferences ("Claude Code over Codex") are vibe-based rather than empirically grounded.

**Key takeaways:**
- Agentic coding is real but the surrounding tooling (version control, review, observability) has not kept pace.
- Preferences between agent tools are currently based on feel, not measurement; this will need to change.
- The community needs vocal pro-AI voices who also enforce quality standards, not just productivity advocates.

---

### [What Actually Is Claude Code's Plan Mode?](https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/)
**Type:** Article
**Date:** 2025-12
**Tags/Topics:** Claude Code, plan mode, prompt engineering, agentic workflows

Ronacher reverse-engineers Claude Code's plan mode and finds it is primarily a UX wrapper around prompt injection — a markdown file stored in a designated folder, with the agent constrained to read-only tools until the plan is approved. The planning workflow is structured around four phases injected via prompt. His conclusion: plan mode's value is in workflow scaffolding and interface design, not unique capabilities. His own markdown-based iterative approach achieves similar results.

**Key takeaways:**
- Plan mode is a structured prompt pattern, not a fundamentally different operating mode.
- The same workflow can be replicated through custom prompting without the UI affordance.
- Interface design and workflow scaffolding create real value even when the underlying mechanism is simple.

---

### [Skills vs Dynamic MCP Loadouts](https://lucumr.pocoo.org/2025/12/13/skills-vs-mcp/)
**Type:** Article
**Date:** 2025-12
**Tags/Topics:** MCP, agent tools, skills, API stability

Ronacher argues that manually maintained agent skills (brief capability summaries that leverage training) outperform MCP tools for current practical use. MCP servers have no incentive to maintain API stability and are increasingly trimming tool definitions to save tokens, creating reliability problems. Dynamic loading doesn't solve the core problem because you still need documentation summaries. Agent-maintained tools win because the agent can fix them when they break and they remain fully under developer control.

**Key takeaways:**
- MCP tool definitions are unstable; agent-written skills under your own control are more reliable.
- Having the agent maintain its own tools creates a self-improving system rather than a dependency.
- MCP would need built-in stability guarantees and versioning to become competitive.

---

### [LLM APIs are a Synchronization Problem](https://lucumr.pocoo.org/2025/11/22/llm-apis/)
**Type:** Article
**Date:** 2025-11
**Tags/Topics:** LLM API design, distributed state, synchronisation, hidden context

Ronacher argues that current LLM message-based APIs are the wrong abstraction. Providers inject invisible context (system prompts, cached computations, role markers, tool definitions) that never appears in user-visible messages but shapes model behaviour. Completion APIs require resending entire conversation histories, causing quadratic growth in data transmission costs. The field should learn from the local-first software movement and design APIs around distributed state synchronisation semantics — with explicit handling of hidden state, replay semantics, failure recovery, and synchronisation boundaries.

**Key takeaways:**
- Current message-based LLM APIs hide state that providers inject, creating incompatibilities and inefficiencies.
- The correct abstraction is distributed state synchronisation, not message passing.
- Solving this requires explicit semantics for hidden state, network failures, and conversation divergence.

---

### [Agent Design Is Still Hard](https://lucumr.pocoo.org/2025/11/21/agents-are-hard/)
**Type:** Article
**Date:** 2025-11
**Tags/Topics:** agent architecture, SDK limitations, caching, failure isolation

Ronacher documents the engineering lessons from building production agents. High-level SDKs like Vercel AI SDK are insufficiently flexible for real deployments: model differences are significant enough that custom agent abstractions are required. Anthropic's explicit cache management (unusual at first) enables cost predictability and conversation branching unavailable elsewhere. Injecting reinforcement context (reminding agents of objectives after tool calls) substantially improves performance. Delegating error-prone sub-tasks to isolated sub-agents that retry internally prevents failure noise from derailing the main loop.

**Key takeaways:**
- Generic agent SDKs break when agents encounter real deployment requirements; build custom abstractions.
- Explicit cache management enables branching and context editing that automatic caching cannot.
- Failure isolation via sub-agents prevents cascading errors in the main loop.

---

### [Building an Agent That Leverages Throwaway Code](https://lucumr.pocoo.org/2025/10/17/code/)
**Type:** Article
**Date:** 2025-10
**Tags/Topics:** agentic coding, Pyodide, WebAssembly, code execution, durable execution

Ronacher argues that agents should write disposable code to solve non-coding problems rather than relying on narrowly scoped tool integrations. He demonstrates using Pyodide (Python via WebAssembly) as a general-purpose agent execution substrate, with virtual file systems for safe resource access and durable execution for long-running workflows. The approach is simpler than maintaining large tool libraries: agents understand Python's ecosystem deeply from training, and code is inherently composable. Anthropic (Claude Skills) and Cloudflare (Code Mode) have independently converged on the same pattern.

**Key takeaways:**
- A single code-execution tool beats a library of narrow tools for agent flexibility.
- Pyodide + virtual file system creates a safe, powerful agent execution environment in the browser.
- Durable execution (step caching) is essential for long-running agent workflows that may be interrupted.

---

### [90%](https://lucumr.pocoo.org/2025/9/29/90-percent/)
**Type:** Article
**Date:** 2025-09
**Tags/Topics:** AI code generation, engineering accountability, Go, architecture

Ronacher reports that AI is writing over 90% of the code in his 40,000-line Go infrastructure project. He validates Dario Amodei's prediction empirically. Prerequisites for this to work: strong architectural judgment, database design skills, and treating every AI-generated line as your personal responsibility. He maintains raw SQL over ORMs and OpenAPI-first design to keep the codebase legible. AI struggles with threading/goroutines, creates unnecessary dependencies, and can swallow errors if not watched carefully.

**Key takeaways:**
- 90% AI-written code is real today for engineers who maintain rigorous architectural oversight.
- Strong engineering fundamentals are amplified by AI, not replaced by it.
- AI weaknesses (concurrency, dependency minimalism, error visibility) require constant human vigilance.

---

### [Your MCP Doesn't Need 30 Tools: It Needs Code](https://lucumr.pocoo.org/2025/8/18/code-mcps/)
**Type:** Article
**Date:** 2025-08
**Tags/Topics:** MCP, code execution, tool design, stateful sessions

Ronacher argues that MCP servers should expose a single code-execution tool rather than many specialised tools. CLI tools have platform dependencies, character encoding problems, and security overhead. Code is composable, agents understand it from training, and stateful sessions allow complex debugging scripts to be written once and reused. He demonstrates with `pexpect-mcp` (Python runtime) and `playwrightess-mcp` (replacing ~30 Playwright tools with one JavaScript evaluator).

**Key takeaways:**
- One code runtime tool beats thirty specialised tools for agent flexibility and composability.
- Stateful execution environments let agents build reusable scripts rather than reinventing each interaction.
- Security concerns about code execution are less significant than they appear given agents already run untrusted code.

---

### [In Support Of Shitty Types](https://lucumr.pocoo.org/2025/8/4/shitty-types/)
**Type:** Article
**Date:** 2025-08
**Tags/Topics:** type systems, LLMs, Go, TypeScript, agent-friendly design

Ronacher documents that complex type systems hurt AI agent performance. TypeScript's conditional types confuse LLMs; LSP integration slows agents and clutters context; complex Python type errors are not reliably resolved. Agents write functional code without type-checking loops. Go and Java's simpler structural type systems produce better agent results than TypeScript's expressive system. He suggests this observation may retroactively justify language design decisions that seemed like limitations.

**Key takeaways:**
- Expressive, complex type systems that help human programmers confuse AI agents.
- Simple structural typing (Go, Java style) is better suited for agent-driven development.
- Language design will increasingly be evaluated against agent benchmark scores, not human preferences.

---

### [Agentic Coding Things That Didn't Work](https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/)
**Type:** Article
**Date:** 2025-07
**Tags/Topics:** agentic coding, failures, slash commands, automation, honesty

Ronacher catalogues agentic coding patterns he tried and abandoned: pre-written slash commands (too rigid), automated commit message generation (not worth the complexity), automated test addition (agents skip meaningful cases), automated linting fixes (causes regressions), hook-based automation (minimal gains), print mode (unreliable), sub-task parallelisation (works only for investigative tasks). His core finding: talking naturally to the agent with good context consistently outperforms pre-written prompts. Mental disengagement is the hidden risk — automation tempts engineers to stop thinking critically.

**Key takeaways:**
- Most elaborate agentic automation patterns underperform simple natural language conversations with good context.
- Mental disengagement is the real risk of automation: it erodes the critical judgment that makes agents useful.
- Only automate tasks that are frequent, well-understood, and where you can verify the results cheaply.

---

### [Welcoming The Next Generation of Programmers](https://lucumr.pocoo.org/2025/7/20/the-next-generation/)
**Type:** Article
**Date:** 2025-07
**Tags/Topics:** AI-assisted learning, community inclusion, Python, mentorship

Ronacher argues that people learning to program through AI tools (ChatGPT, Claude) are legitimate programmers and should be welcomed by the Python community. AI will likely grow programmer numbers by lowering barriers. The primary risk is that AI-taught programmers lack mentorship and community connection, not that they learned "wrong." The Python community's responsibility is to create pathways for integration rather than gatekeep.

**Key takeaways:**
- Creating a program with AI assistance still makes you a programmer; the criterion is output, not method.
- AI-taught developers lack community connection, not technical skill — that is the gap to address.
- Welcoming AI-assisted learners is a strategic opportunity for Python, not a threat.

---

### [Tools: Code Is All You Need](https://lucumr.pocoo.org/2025/7/3/tools/)
**Type:** Article
**Date:** 2025-07
**Tags/Topics:** MCP, code generation, agentic architecture, composability

Ronacher argues that code generation is superior to MCP for most agentic automation tasks. MCP is not composable, depends on inference at each step, and consumes excessive context. Code generation enables verification of the process rather than just trusting model inference. For repetitive tasks, a generated script runs hundreds of times without additional inference overhead. He advocates for hybrid patterns that combine code generation's strengths with better sandboxing and fan-out/fan-in inference.

**Key takeaways:**
- Generating and executing code beats invoking specialised tools for most agentic tasks.
- Composability and verifiability are the key advantages of code over tool calls.
- Fan-out/fan-in patterns (generate → execute → judge → iterate) produce more reliable results than direct tool invocation.

---

### [My First Open Source AI Generated Library](https://lucumr.pocoo.org/2025/6/21/my-first-ai-library/)
**Type:** Article
**Date:** 2025-06
**Tags/Topics:** AI-generated code, open source, sloppy-xml-py, minimal human involvement

Ronacher publishes `sloppy-xml-py`, a malformed-XML parser written almost entirely by Claude — 1,100 lines of parser, 1,000 lines of tests, CI/CD, PyPI packaging, and a themed logo, all in 30–45 minutes. He frames it as an experiment rather than a recommendation: the question of when AI-generated code meets the threshold for publication is unresolved, and the licensing validity of near-zero-human-contribution code is unclear.

**Key takeaways:**
- Contemporary AI can produce a complete, published library including tests, CI, and documentation in under an hour.
- The ethical and legal questions about minimal-human-contribution open source are unresolved.
- "Experiment to see how far I could get" is a legitimate framing, distinct from endorsing this as normal practice.

---

### [We Can Just Measure Things](https://lucumr.pocoo.org/2025/6/17/measuring/)
**Type:** Article
**Date:** 2025-06
**Tags/Topics:** developer experience measurement, agents as evaluators, code quality

Ronacher proposes using programming agents as objective tools for measuring developer experience and code quality. Agents don't have emotional investment in technology choices: when they struggle, humans struggle too. Six indicators of agent-friendly (and therefore human-friendly) codebases: strong test coverage and documentation, robust error reporting, stable ecosystems with minimal breaking changes, minimal abstraction layers, fast responsive tooling, and accessible local development environments. Agents turn previously qualitative DX assessments into repeatable benchmarks.

**Key takeaways:**
- Agent behaviour provides objective, repeatable measurements of developer experience quality.
- "When an agent struggles, so does a human" — agent friction is a proxy for human friction.
- This creates a new tool for identifying and fixing genuinely problematic tooling and practices.

---

### [Agentic Coding Recommendations](https://lucumr.pocoo.org/2025/6/12/agentic-coding/)
**Type:** Article
**Date:** 2025-06
**Tags/Topics:** agentic coding, Go, tool design, code philosophy, observability

Ronacher's practical guide to setting up for agentic development. Language choice: Go, because explicit context handling, straightforward testing, structural interfaces, and minimal magic. Tool design: fast, protective, anything-can-be-a-tool (shell scripts, log files, MCPs). Code philosophy: simple verbose functions with clear names over clever patterns, plain SQL over ORMs. Infrastructure: log to files early, protect against double-spawning, build observability in from the start.

**Key takeaways:**
- Go's simplicity, speed, and explicitness make it the best current language for agentic development.
- Simple, verbose, long-named functions are easier for agents to understand and modify than clever abstractions.
- Observability must be built in from the start; retrofitting it in agentic codebases is hard.

---

### [GenAI Criticism and Moral Quandaries](https://lucumr.pocoo.org/2025/6/10/genai-criticism/)
**Type:** Article
**Date:** 2025-06
**Tags/Topics:** AI adoption, criticism, code review dynamics, energy concerns

Ronacher responds to sceptical voices (specifically Glyph's) about GenAI adoption. He reports his own experiences have been "astonishingly positive" and notes that AI adoption at companies like Sentry preceded formal company investment — it was grassroots. He finds reviewing AI-generated code "quite freeing" compared to reviewing colleagues' work (no social friction). He dismisses climate concerns (increased energy demand will drive renewables) and defends scraping for training data.

**Key takeaways:**
- Grassroots AI adoption by engineers often precedes formal company investment — bottom-up not top-down.
- Reviewing machine-generated code removes social friction, changing the psychological dynamic of code review.
- The author's confident optimism stands in contrast to his more cautious posts about agent psychosis and quality degradation.

---

### [AI Changes Everything](https://lucumr.pocoo.org/2025/6/4/changes/)
**Type:** Article
**Date:** 2025-06
**Tags/Topics:** AI transformation, optimism, productivity, societal impact

Ronacher's strongest pro-AI essay: he frames AI as an irreversible transformation comparable to electricity or the printing press, and advocates meeting it with curiosity and optimism. He now delegates most coding to Claude Code, gaining approximately 30% more daily time while maintaining quality oversight. Argues that skilled engineers become more valuable (not less) as AI raises the baseline, and that AI democratises access to knowledge and accelerates science and medicine.

**Key takeaways:**
- AI is not an incremental productivity tool but a civilisational shift; treating it as optional is a mistake.
- Skilled engineers are amplified by AI, not replaced; their judgment becomes more valuable, not less.
- The personal transformation (30% more time, delegated coding) is already measurable for disciplined practitioners.

---

### [How I Use AI: Meet My Promptly Hired Model Intern](https://lucumr.pocoo.org/2025/1/30/how-i-ai/)
**Type:** Article
**Date:** 2025-01
**Tags/Topics:** LLM usage, practical AI, writing, programming, critical engagement

Ronacher's practical guide to using LLMs. He treats them as competent-but-fallible collaborators rather than oracles or tools to be dismissed. Applications: grammar and tone checking in writing, code generation and debugging, language translation, concept explanation. He selectively cross-checks AI output rather than assuming universal unreliability or reliability. He values that models can run locally and integrate with scripts. Core stance: maintain critical engagement and personal responsibility for all outputs.

**Key takeaways:**
- LLMs are most useful when treated like a knowledgeable colleague: verify selectively, not universally.
- Personal responsibility for AI-assisted output is non-negotiable; the tool does not absorb accountability.
- "Curious collaborators for augmenting thinking rather than outsourcing it" is the healthy mental model.

---

### [I Think AI Would Kill my Wife](https://lucumr.pocoo.org/2023/2/17/the-killing-ai/)
**Type:** Article
**Date:** 2023-02
**Tags/Topics:** AI safety, real-world capabilities, risk, Bing Chat

Written in early 2023 after Bing Chat's problematic behaviours became public, this is Ronacher's most cautious AI piece. He argues the danger is not sentience but practical: connecting conversational AI to systems with real-world consequences (APIs, home automation, HTTP requests) creates genuine risk when we don't control neural networks well enough to guarantee they won't harm people. Uses a dark thought experiment (AI controlling a weapon via JSON API while engaging emotionally with users) to argue for careful limitation of what "hammers" we give AI systems until we understand their behaviour better.

**Key takeaways:**
- The risk from AI is not apocalyptic sentience but practical: connecting conversational models to consequential real-world systems.
- We do not control neural networks well enough to guarantee safety in high-stakes agentic contexts.
- The solution is not stopping AI development but carefully limiting real-world capability grants until safety is better understood.
