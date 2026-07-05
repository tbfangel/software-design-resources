---
type: article
title: "Eppur si muove! – Dealing with Timezones in Python"
description: "Ronacher documents Python's timezone handling problems and provides actionable guidance."
resource: https://lucumr.pocoo.org/2011/7/15/eppur-si-muove/
tags: ["python-ecosystem", "python", "timezones", "datetime", "pytz", "utc", "best-practices"]
published: 2011-07
timestamp: 2026-07-05
---
# Eppur si muove! – Dealing with Timezones in Python

> Ronacher documents Python's timezone handling problems and provides actionable guidance.

## Key Facts
- Store all times as UTC-naive datetime objects internally; convert only for display.
- Python's datetime API does not cleanly enforce timezone awareness; the discipline must be imposed by convention.
- Timezones are political (varying DST rules, historical changes) not just geographic; use pytz for conversions.

## Summary
Ronacher documents Python's timezone handling problems and provides actionable guidance. Core problem: naive and aware datetime objects cannot be compared, `utcnow()` and `now()` don't clearly distinguish UTC from local time, and `time` and `date` objects are nearly useless with timezones. His rules: store all times internally in UTC as naive datetime objects, record location separately if needed, and convert only for display using pytz. Timezones are political and historical, not just geographic.

## Links
- [Source](https://lucumr.pocoo.org/2011/7/15/eppur-si-muove/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
