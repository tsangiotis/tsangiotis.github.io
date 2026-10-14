---
layout: post
title: "Stenographer"
date: 2026-10-14
description: A menu bar app that writes down your meetings in Greek or English, on your Mac, without a bot in the call.
image: /assets/images/tools/stenographer.png
categories:
  - Tools
tags:
  - macos
  - transcription
  - privacy
---

![Stenographer icon](/assets/images/tools/stenographer.png){: width="160" }

I made a small Mac app called Stenographer. It sits in the menu bar and writes down your meetings. You press Start, talk for an hour, press Stop, and the transcript is waiting in Apple Notes.

<!--more-->

Most meeting transcribers want a bot in the call, an account somewhere, or both a subscrition and possibly to store their stuff in their own server.. The bot joins with a cheerful name, everyone on the other side wonders who invited it, and an hour of your conversation goes to a server you will never see. Most of them also assume the meeting is in English. Mine usually are not.

Stenographer wants a Mac and four permissions, and it speaks Greek and English.

## Two sides of the table

It listens to two things at once. **Me** is the microphone, with echo cancellation so the call coming out of the speakers isn't counted as me. **Them** is everything the Mac plays, captured straight from the audio system. That means it works with Teams, Zoom, a browser tab or whatever the client insisted on this week, without joining anything.

Each side is also diarized, which is a fancy way of saying it tells voices apart. When three people share a conference room mic, or the call has five participants, the lines come out labelled:

```
[00:00:04] Them 1: Καλημέρα, ξεκινάμε;
[00:00:07] Me 1: Ναι, πάμε.
```

`Them 2` means "the second voice heard from the call", not a name. Putting names on them is still on you.

The note is rewritten after every line, so if something crashes you lose the sentence in progress, not the meeting.

## Nothing leaves the Mac

There is no recording. Audio goes from the microphone and the speakers straight into Apple's on-device speech recognition and is gone once it has become text; no audio file is ever written to disk. The speaker separation runs locally too, using [FluidAudio](https://github.com/FluidInference/FluidAudio)'s model. The only network traffic is the one-time download of the models themselves.

What exists afterwards is a note in a `Stenographer` folder, like any other note. If Notes syncs with iCloud, so does the transcript, so treat it with the same care as the rest of your notes.

A practical point that is not legal advice: transcribing people is still recording what they say. Tell the others at the start of the meeting. It costs one sentence and it is the decent thing to do.

## The limits

It does one language per recording. You pick Greek or English before you start, and if the meeting switches halfway, everything is transcribed as the language you picked, with the results you would expect. Greeks switching to English for every technical term is a known hazard of the trade.

It needs an Apple Silicon Mac with macOS 26 or later. It is signed but not notarized, so the first time you open it macOS will refuse and you have to go to **System Settings › Privacy & Security** and click **Open Anyway**. You only do this once.

## Getting it

Download `Stenographer.zip` from the [latest release](https://github.com/tsangiotis/stenographer/releases/latest), unzip it and drag it to Applications. The source is [on GitHub](https://github.com/tsangiotis/stenographer) if you would rather build it yourself.

It is the first thing on the new [Tools](/tools/) page, where I will put the small apps I make. Hopefully not the last.
