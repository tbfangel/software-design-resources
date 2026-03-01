# CLAUDE.md

This repository is a personal knowledge base on software design, maintained by Thomas Fangel. It contains curated summaries and analyses of writing by practitioners in the field.

## Structure

```
designing-software/
├── README.md               # Top-level index
├── CLAUDE.md               # This file
└── <site>/                 # One folder per author or site (e.g. verraes.net)
    ├── overview.md         # Hub page: all clusters, key series, recurring themes
    └── <cluster>.md        # One file per thematic cluster
```

## Your role

Your job is to help Thomas extend and maintain this knowledge base. When given a task:

**Plan before acting.** Start by understanding the full scope of the work — what resources exist, what the output structure should look like, what decisions need to be made — before writing any content files. Write the plan down as a todo list.

**Divide and conquer with sub-agents.** Keep your own context small by delegating the bulk of the reading and writing work to parallel sub-agents. Spin up one sub-agent per logical unit of work (e.g. one per author cluster, one per section). Each agent should work independently and write directly to its output file.

**Use temp files to track state.** When analysing large resources, write intermediate findings — post lists, cluster assignments, open questions — to temp files in your working directory before committing to final output files. These are scratch files and should be deleted when the work is done.

## Available agents

Specialised agents live in `.claude/agents/`. Invoke them when their trigger condition is met.

| Agent | Trigger |
|---|---|
| `web-resource-crawler` | User says "crawl the blogs/articles at &lt;site&gt; and summarize them" |

## Conventions

- All content files are Markdown.
- Links between files use relative paths.
- The README.md is the intended entry point for human readers; CLAUDE.md is the entry point for Claude.
