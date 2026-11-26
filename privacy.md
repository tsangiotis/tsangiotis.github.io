---
layout: page
title: Privacy
permalink: /privacy/
sitemap: false
---

This page covers **contacts-tools**, a small tool I run that keeps one person's
Google Contacts in step with their Microsoft 365 contacts. It is not a public app.
Nobody signs up for it; the only Google account connected to it is one I set up
by hand, with its owner sitting next to me.

## What it reads and writes

With the owner's permission (the Google `contacts` scope), the tool reads and
edits that account's contacts: names, emails, phone numbers, addresses,
organisations, notes and contact labels. It does the same on the matching
Microsoft 365 mailbox. That is the whole job. It does not touch mail, calendar,
files or anything else in either account.

## Where the data goes

Nowhere else. The tool runs on a server I control in the EU. It keeps the sign-in
token, a local record of which contact matches which, and snapshots taken before
it writes, so a mistake can be undone. Nothing is sold, shared, used for
advertising, or used to train anything.

## Stopping it

The account owner can cut access at any time from
[Google Account → Security → Third-party connections](https://myaccount.google.com/connections).
Ask me and I delete the token, the matching record and the snapshots.

## Contact

Tasos Sangiotis — [tsangiotis.com](https://tsangiotis.com). Last updated 26 November 2026.
