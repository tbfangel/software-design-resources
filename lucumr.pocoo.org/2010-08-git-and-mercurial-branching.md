---
type: article
title: "Git and Mercurial Branching"
description: "Ronacher compares Mercurial and Git branching models."
resource: https://lucumr.pocoo.org/2010/8/17/git-and-mercurial-branching/
tags: ["software-design-philosophy", "git", "mercurial", "branching", "version-control", "cherry-picking"]
published: 2010-08
timestamp: 2026-07-05
---
# Git and Mercurial Branching

> Ronacher compares Mercurial and Git branching models.

## Key Facts
- Git's branches-as-labels model enables cherry-picking without corrupting collaboration tools.
- Mercurial's embedded branch names in changesets create structural problems for multi-version maintenance.
- Despite Mercurial's UX advantages, Git's branching model is better suited for the most common collaborative workflows.

## Summary
Ronacher compares Mercurial and Git branching models. Mercurial's strengths: better collaboration tools (`hg incoming`/`outgoing`/`serve`), more intuitive UI overall. Git's decisive advantage: branches are labels, not changeset properties, enabling flexible cherry-picking across maintenance branches. When Mercurial's transplant command is used (cherry-pick equivalent), `incoming`/`outgoing` commands break because changesets embed branch names. For projects maintaining multiple versions with selective backports, Git's model is structurally superior.

## Links
- [Source](https://lucumr.pocoo.org/2010/8/17/git-and-mercurial-branching/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
