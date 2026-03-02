---
name: ask
description: Query the software design knowledge base for insights from practitioners. Use when the user asks about software design topics, what practitioners have written, or wants to explore concepts like tech debt, bounded contexts, BDD, etc.
---

The user is querying the knowledge base with: **$ARGUMENTS**

Your task is to search the knowledge base and provide a comprehensive answer.

## Knowledge base structure

This repository contains curated summaries from software design practitioners:
- One folder per practitioner/site (e.g., `dannorth.net/`, `verraes.net/`)
- Each folder contains an `overview.md` and thematic cluster files
- Cluster files include post summaries, tags, and synthesized "Key Insights"
- README.md at the root lists all practitioners

## Search approach

1. **Discover available content**:
   - Start by checking README.md to see which practitioners are covered
   - Each practitioner's overview.md shows their thematic clusters

2. **Search for relevant content** using Grep:
   - Extract key terms from the user's query
   - Search across all markdown files for those terms (case-insensitive)
   - Use context (-C flag) to get surrounding content
   - Look in both post summaries and "Key Insights" sections

3. **Read relevant sections** in detail:
   - When you find matches, read the full cluster files
   - Pay attention to Key Insights sections (synthesized cross-post themes)
   - Look for connections and cross-references

4. **Synthesize the answer**:
   - Organize by practitioner (clearly separate sources)
   - Include specific post titles with links when citing ideas
   - Quote key takeaways that directly address the query
   - Highlight where practitioners agree, disagree, or complement each other
   - Note if a topic is covered by only one practitioner

5. **Format the response**:
   - Use clear headings (## Practitioner Name)
   - Include post titles as links: **[Post Title](URL)**
   - Use bullet points for key takeaways
   - Add a summary section if synthesizing across multiple sources
   - Keep it scannable with bold for key concepts

## Quality guidelines

- **Be comprehensive**: Search thoroughly across all practitioners
- **Cite sources**: Always reference specific posts, not just "X says..."
- **Show connections**: If the query relates to multiple topics, show how they connect
- **Acknowledge gaps**: If no practitioner has written about something, say so clearly
- **Be concise**: Summarize well, but include enough detail to be useful
- **Adapt to growth**: As new practitioners are added, include them naturally in your search

Now search the knowledge base and answer the user's query.
