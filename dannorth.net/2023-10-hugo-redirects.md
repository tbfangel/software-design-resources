---
type: article
title: "Using Hugo as a redirect service"
description: "Dan North describes how he used Hugo's built-in aliases feature and a small custom template to replace external URL-shortening services entirely."
resource: https://dannorth.net/blog/hugo-redirects/
tags: ["software-design-architecture", "hugo", "static-site-generator", "redirects", "url-management", "tooling"]
published: 2023-10
timestamp: 2026-07-05
---
# Using Hugo as a redirect service

> Dan North describes how he used Hugo's built-in aliases feature and a small custom template to replace external URL-shortening services entirely.

## Key Facts
- Hugo's `aliases` front-matter key generates redirect pages automatically, preserving old URLs when content moves.
- A small Go utility can automate alias generation at scale, avoiding manual edits across large post archives.
- A custom Hugo template with a `.Params.target` parameter extends the built-in alias mechanism to redirect to arbitrary external URLs.
- Static site generators often contain enough flexibility to handle operational concerns (like URL management) that are commonly delegated to third-party tools.

## Summary
Dan North describes how he used Hugo's built-in aliases feature and a small custom template to replace external URL-shortening services entirely. When reorganising roughly 100 blog posts from date-structured URLs to a flat hierarchy, he wrote a Go utility to automate alias generation rather than edit each post by hand. For external redirects he created a minimal Hugo template that reads a custom `.Params.target` parameter in place of the fixed `.Permalink` property, producing a one-line solution. The post argues that Hugo's templating system is flexible enough to handle both internal and external redirect needs without reaching for a dedicated service.

## Links
- [Source](https://dannorth.net/blog/hugo-redirects/) — original post

## Related
- [Cluster synthesis](/dannorth.net/_synthesis-software-design-architecture.md)
- [CUPID: for joyful coding](/dannorth.net/2022-02-cupid-for-joyful-coding.md)
- [CUPID: the back story](/dannorth.net/2021-03-cupid-the-back-story.md)
- [Best Simple System for Now](/dannorth.net/2025-02-best-simple-system-for-now.md)
