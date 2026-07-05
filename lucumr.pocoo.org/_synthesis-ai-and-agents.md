---
type: synthesis
title: "AI and Agents"
description: "From 2023 onward, Armin Ronacher became one of the most prolific practitioner-writers on agentic coding and AI-assisted development."
cluster: ai-and-agents
timestamp: 2026-07-05
---
# AI and Agents

> From 2023 onward, Armin Ronacher became one of the most prolific practitioner-writers on agentic coding and AI-assisted development.

## Key Insights

**The bottleneck has inverted.** Historically, writing code was slow and reviewing it was fast. AI has reversed this: agents generate pull requests faster than humans can assess them. The limiting resource is now not code production but human accountability and review capacity. Teams that treat AI output as automatically shippable are building up technical debt they cannot see yet.

**Code generation is the universal agentic primitive.** Across multiple experiments, Ronacher found that giving agents the ability to write and execute code dramatically outperforms giving them large libraries of narrowly scoped tools. MCPs with 30 specialized tools lose to a single code-execution runtime. This insight shapes his entire agentic architecture: thin tool surface, deep code capability.

**Good agent design still requires hard engineering choices.** The posts on agent failures, LLM API synchronisation, and caching architecture reveal that agents surface the same difficulties as any distributed system: state management, failure isolation, back pressure, and observability. High-level SDKs paper over these problems in ways that break at scale; production agent work requires building custom abstractions.

**Language and type system design will be shaped by agents.** Explicit over implicit, braces over whitespace, simple type systems over expressive ones, greppable code over clever aliasing — these are the properties that help agents work effectively. Ronacher predicts new languages will be designed with agent productivity as a first-class objective, and that this will be measurable through benchmarks rather than opinion.

**The social and epistemic risks are real.** Several posts document quality degradation in open source contributions, parasocial attachment to AI tools, "psychosis" in builder communities, and the difficulty of maintaining critical judgment when AI is always available. Ronacher holds both views simultaneously: agents are genuinely transformative and the community is developing unhealthy dependencies on them.

---

## Related
- [The Final Bottleneck](/lucumr.pocoo.org/2026-02-the-final-bottleneck.md)
- [A Language For Agents](/lucumr.pocoo.org/2026-02-a-language-for-agents.md)
- [Pi: The Minimal Agent Within OpenClaw](/lucumr.pocoo.org/2026-01-pi.md)
- [Agent Psychosis: Are We Going Insane?](/lucumr.pocoo.org/2026-01-agent-psychosis.md)
- [Porting MiniJinja to Go With an Agent](/lucumr.pocoo.org/2026-01-minijinja-go-port.md)
- [Advent of Slop: A Guest Post by Claude](/lucumr.pocoo.org/2025-12-advent-of-slop.md)
- [A Year Of Vibes](/lucumr.pocoo.org/2025-12-a-year-of-vibes.md)
- [What Actually Is Claude Code's Plan Mode?](/lucumr.pocoo.org/2025-12-what-is-plan-mode.md)
- [Skills vs Dynamic MCP Loadouts](/lucumr.pocoo.org/2025-12-skills-vs-mcp.md)
- [LLM APIs are a Synchronization Problem](/lucumr.pocoo.org/2025-11-llm-apis.md)
- [Agent Design Is Still Hard](/lucumr.pocoo.org/2025-11-agents-are-hard.md)
- [Building an Agent That Leverages Throwaway Code](/lucumr.pocoo.org/2025-10-code.md)
- [90%](/lucumr.pocoo.org/2025-09-90-percent.md)
- [Your MCP Doesn't Need 30 Tools: It Needs Code](/lucumr.pocoo.org/2025-08-code-mcps.md)
- [In Support Of Shitty Types](/lucumr.pocoo.org/2025-08-shitty-types.md)
- [Agentic Coding Things That Didn't Work](/lucumr.pocoo.org/2025-07-things-that-didnt-work.md)
- [Welcoming The Next Generation of Programmers](/lucumr.pocoo.org/2025-07-the-next-generation.md)
- [Tools: Code Is All You Need](/lucumr.pocoo.org/2025-07-tools.md)
- [My First Open Source AI Generated Library](/lucumr.pocoo.org/2025-06-my-first-ai-library.md)
- [We Can Just Measure Things](/lucumr.pocoo.org/2025-06-measuring.md)
- [Agentic Coding Recommendations](/lucumr.pocoo.org/2025-06-agentic-coding.md)
- [GenAI Criticism and Moral Quandaries](/lucumr.pocoo.org/2025-06-genai-criticism.md)
- [AI Changes Everything](/lucumr.pocoo.org/2025-06-changes.md)
- [How I Use AI: Meet My Promptly Hired Model Intern](/lucumr.pocoo.org/2025-01-how-i-ai.md)
- [I Think AI Would Kill my Wife](/lucumr.pocoo.org/2023-02-the-killing-ai.md)
- [Better Models: Worse Tools](/lucumr.pocoo.org/2026-07-better-models-worse-tools.md)
- [The Coming Loop](/lucumr.pocoo.org/2026-06-the-coming-loop.md)
- [Dangerous Technology For Americans Only](/lucumr.pocoo.org/2026-06-americans-only.md)
- [Communities of Not](/lucumr.pocoo.org/2026-06-communities-of-not.md)
- [Clanker: A Word For The Machine](/lucumr.pocoo.org/2026-05-clankers.md)
- [Building Pi With Pi](/lucumr.pocoo.org/2026-05-pi-oss.md)
- [Pushing Local Models With Focus And Polish](/lucumr.pocoo.org/2026-05-local-models.md)
- [Content for Content's Sake](/lucumr.pocoo.org/2026-05-content-for-contents-sake.md)
- [The Center Has a Bias](/lucumr.pocoo.org/2026-04-the-center-has-a-bias.md)
- [Mario and Earendil](/lucumr.pocoo.org/2026-04-mario-and-earendil.md)
- [Some Things Just Take Time](/lucumr.pocoo.org/2026-03-some-things-just-take-time.md)
