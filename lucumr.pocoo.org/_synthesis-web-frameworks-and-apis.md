---
type: synthesis
title: "Web Frameworks and APIs"
description: "Armin Ronacher is the creator of Flask, Werkzeug, and Jinja2 — tools that shaped how a generation of Python developers built web applications."
cluster: web-frameworks-and-apis
timestamp: 2026-07-05
---
# Web Frameworks and APIs

> Armin Ronacher is the creator of Flask, Werkzeug, and Jinja2 — tools that shaped how a generation of Python developers built web applications.

## Key Insights

**WSGI's design is more principled than it appears.** Features that seem awkward — `start_response()`, the ability to change responses mid-stream — solved real problems when WSGI was designed. The limitations (pluggability, framework independence) reflect genuine constraints about what a Python web server protocol can achieve, not design failures. WSGI works because it's simple enough to implement correctly, not because it's the ideal abstraction.

**Framework opinions should match your problem.** Django was designed for content-driven websites; forcing it into other roles produces frustration. Werkzeug is for developers who want to build their own framework. The Python ecosystem has good tools for many needs, but developers frequently adopt frameworks for the wrong problem because unbiased guidance is scarce.

**SQL and relational databases are undervalued.** Ronacher is consistently pro-SQL: schemas exist whether explicit or implicit (in your head, or frozen into indexes), SQL's flexibility is critical when requirements change, and NoSQL choices produce technical debt when access patterns turn out different than expected. Upserts are not a design smell — they are necessary for reliable web applications in the face of network unreliability.

**Statelessness is a design virtue, not a limitation.** Real-time capabilities (WebSockets, push notifications) do not require frameworks to become stateful. A pub-sub pattern (Flask + Redis + dedicated real-time server) preserves statelessness while enabling push, scales cleanly, and decouples deployment. Mixing persistent connection state with application logic is the mistake.

**Simple architectures beat clever ones for reliability.** Durable workflow systems don't require specialised runtimes or distributed databases. A Postgres table with `SELECT FOR UPDATE SKIP LOCKED` and checkpoint-based recovery achieves durable execution. The complexity of systems like Temporal is often unwarranted for what teams actually need.

---

## Related
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
- [WSGI on Python 3](/lucumr.pocoo.org/2010-05-wsgi-on-python-3.md)
- [Pro/Cons about Werkzeug, WebOb and Django](/lucumr.pocoo.org/2009-08-pro-cons-about-werkzeug-webob-and-django.md)
- [Opinionated Frameworks](/lucumr.pocoo.org/2009-01-opinionated-frameworks.md)
- [Django's Problems and Why 2.0 is a Bad Idea](/lucumr.pocoo.org/2007-12-djangos-problems-and-why-2-0-is-a-bad-idea.md)
- [Not So Stupid Template Languages](/lucumr.pocoo.org/2010-12-not-so-stupid-template-languages.md)
- [Python Template Engine Comparison](/lucumr.pocoo.org/2008-01-python-template-engine-comparison.md)
- [SQLAlchemy and You](/lucumr.pocoo.org/2011-07-sqlachemy-and-you.md)
- [A Case for Upserts](/lucumr.pocoo.org/2014-02-a-case-for-upserts.md)
- [SQL is Agile](/lucumr.pocoo.org/2012-12-sql-is-agile.md)
- [My Favorite Database is the Network](/lucumr.pocoo.org/2013-11-my-favorite-database.md)
- [Websockets 101](/lucumr.pocoo.org/2012-09-websockets-101.md)
- [Stateless and Proud in the Realtime World](/lucumr.pocoo.org/2012-08-stateless-and-proud.md)
- [ZeroMQ: Disconnects are Good for You](/lucumr.pocoo.org/2012-06-disconnects-are-good-for-you.md)
- [Battlelog: Modern Web Applications are Here](/lucumr.pocoo.org/2011-11-modern-web-applications-are-here.md)
- [Common Mistakes as Python Web Developer](/lucumr.pocoo.org/2010-12-common-mistakes-as-web-developer.md)
- [Nameko for Microservices](/lucumr.pocoo.org/2015-04-microservices-with-nameko.md)
- [Deploying Python Web Applications](/lucumr.pocoo.org/2008-07-deploying-python-web-applications.md)
- [Automatic Server Reloading in Rust on Change: What is listenfd/systemfd?](/lucumr.pocoo.org/2025-01-what-is-systemfd.md)
- [Passkeys and Modern Authentication](/lucumr.pocoo.org/2025-09-passkeys.md)
- [Absurd Workflows: Durable Execution With Just Postgres](/lucumr.pocoo.org/2025-11-absurd-workflows.md)
- [The Lazy User is OpenID's Security Issue](/lucumr.pocoo.org/2010-08-the-lazy-user-is-openid-s-security-issue.md)
- [Absurd In Production](/lucumr.pocoo.org/2026-04-absurd-in-production.md)
