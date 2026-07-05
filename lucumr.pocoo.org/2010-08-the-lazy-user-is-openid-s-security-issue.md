---
type: article
title: "The Lazy User is OpenID's Security Issue"
description: "Ronacher identifies a real security vulnerability in OpenID/OAuth systems: provider sessions persisted within browser sessions mean an unattended computer can be exploited to perform destructive account changes."
resource: https://lucumr.pocoo.org/2010/8/18/the-lazy-user-is-openid-s-security-issue/
tags: ["web-frameworks-and-apis", "openid", "oauth", "security", "session-management", "re-authentication"]
published: 2010-08
timestamp: 2026-07-05
---
# The Lazy User is OpenID's Security Issue

> Ronacher identifies a real security vulnerability in OpenID/OAuth systems: provider sessions persisted within browser sessions mean an unattended computer can be exploited to perform destructive account changes.

## Key Facts
- OpenID/OAuth removes the password re-confirmation mechanism for sensitive account operations.
- Persistent provider sessions create a window of vulnerability for unattended but authenticated browsers.
- No standard exists for forcing provider re-authentication for sensitive operations; PAPE extension is insufficient.

## Summary
Ronacher identifies a real security vulnerability in OpenID/OAuth systems: provider sessions persisted within browser sessions mean an unattended computer can be exploited to perform destructive account changes. Traditional password-based systems require password confirmation for sensitive changes (email, password, account deletion); OpenID eliminates this because users have no password on the relying party. An attacker can add their own OpenID identity to a compromised account. No standard mechanism exists for forcing re-authentication through a provider for sensitive operations.

## Links
- [Source](https://lucumr.pocoo.org/2010/8/18/the-lazy-user-is-openid-s-security-issue/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
