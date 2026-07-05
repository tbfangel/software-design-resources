---
type: article
title: "Passkeys and Modern Authentication"
description: "Ronacher acknowledges passkeys' security benefits while raising concerns about unintended consequences."
resource: https://lucumr.pocoo.org/2025/9/2/passkeys/
cluster: web-frameworks-and-apis
tags: ["authentication", "vendor-lock-in", "supply-chain-security"]
published: 2025-09
timestamp: 2026-07-05
---
# Passkeys and Modern Authentication

> Ronacher acknowledges passkeys' security benefits while raising concerns about unintended consequences.

## Key Facts
- Passkey attestation enables government and corporate whitelisting of authenticators, excluding open source options.
- No export standard for passkey private keys creates vendor lock-in between password managers.
- Increased authentication complexity creates barriers for hobby developers and open source projects disproportionately.

## Summary
Ronacher acknowledges passkeys' security benefits while raising concerns about unintended consequences. Attestation systems let governments and corporations whitelist specific authenticators, blocking open source options (the Austrian government requires hardware token whitelist). Users cannot export private keys between password managers. Services auto-enrol users without consent. Account terminations deny access to third-party credentials permanently. The overall effect: increased corporate control, reduced individual agency, and barriers for hobby developers and open source projects.

## Links
- [Source](https://lucumr.pocoo.org/2025/9/2/passkeys/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
