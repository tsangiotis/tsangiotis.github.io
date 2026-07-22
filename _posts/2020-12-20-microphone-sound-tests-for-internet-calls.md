---
layout: post
title: "Give up AirPods on PC. Microphone reviews on 2020"
date: 2020-12-20
categories:
- Guide
- Review
- Productivity
---

In 2020 we all did more online calls than we ever thought reasonable. Google Meet, Microsoft Teams, Zoom, Facebook Messenger, Webex were the bread and butter of the working professional.

\

I don't like webcams on web calls. They are distracting and my face searching for files is not a pretty thing. If I don't know the person on the other end I want to meet them but for the rest of the call the camera can turn off. For this I am very happy to rely on my laptop camera and it helps that the crappy webcam that once cost €20 it is now a €100 luxury item.

\

More distracting though is bad audio. Audio that clips or muffles is the devil. So I got a cheap headset with a noise canceling mic attachment and an arm that retains the distance from my mouth and I really really recommend it! 

\

![](/assets/images/posts/microphone-sound-tests-for-internet-calls/01-large_xlarge_20201123210528_logitech_headset_h340_usb.jpeg)

 

Bellow I’m going to compare different microphones that you may have, being your laptop mic, your cheap wired earphones mic and a dynamic microphone. I will record a short file on each with a quote from the Martian by Andy Weir. You may want to listen to these samples with headphones on. I tried to edit the files to even out the levels by eyeballing the waveforms. The teleconference software you use would do that automatically so just listen to the quality.

\

The headset I bought is Logitech Headset H340 USB. I bought it because it was available, had good reviews and looked comfortable and light. I recommend it and here’s how it sounds:

Logitech Headset H340 USB\
--------------------------

<a href="https://phaven-prod.s3.amazonaws.com/files/audio_part/asset/2550980/gmS5HKzvjE-8dWnennceDtKkROw/logitech.wav" class="posthaven-file-download" download="">Download logitech.wav</a>

It is clear and will not let you down. In comparison here is my ThinkPad T480: 

## Internal laptop mic

<a href="https://phaven-prod.s3.amazonaws.com/files/audio_part/asset/2550979/3hgS8yUGGp94GhYcLtt-py6cxmk/internal.wav" class="posthaven-file-download" download="">Download internal.wav</a>

It sounds decent but on a call, having speakers and microphones competing out loud creates weird feedback loops. Laptops employ noise cancelation but on some occasions it fails miserably. Most of the times you have to resort on your cheap earbuds to rescue you.\

## Wired 3.5mm

<a href="https://phaven-prod.s3.amazonaws.com/files/audio_part/asset/2550981/uQjjnz1RMUy9v2QOYL06a8Xu9EE/wired3.5mm.wav" class="posthaven-file-download" download="">Download wired3.5mm.wav</a>

This is awful. This is what your conversation partner hears. Please find another solution! 

## Bluetooth headsets including Airpods 

Bluetooth headsets are not to be trusted. 

Due to bluetooth weirdness and Apple's Magic, your Airpods will be operating in 8kHz bandwith mode. Which is very very low.

![](/assets/images/posts/microphone-sound-tests-for-internet-calls/02-large_85c18129-40f9-4bc8-a5b5-e0f710367cc6.png)

On Mac things could be better but I don't expect to be better by much. 

In this mode the quality is abysmal because your input an output share the connection all the time. \

You can buy a 100 dollar receiver to go a bit more but again you will not have good sound and good sound is cheap.\

More on software and bandwidth at the end of the post.

## Professional mic & DAQ

Wanna go crazy? 

For about €80 you can get a recording setup. 

![](/assets/images/posts/microphone-sound-tests-for-internet-calls/03-large_ezgif-7-65b3d7b29834.jpg)

I have one for some screencasts and it sounds silky smooth! However you've warned. It picks up EVERYTHING. \

You need to learn how to configure it and use it correctly. I am a newbie to this but the audio crowd is very helpful.

<a href="https://phaven-prod.s3.amazonaws.com/files/audio_part/asset/2550982/qRZjqa0QbZbGVec3Ml5gzflxPBQ/promic.wav" class="posthaven-file-download" download="">Download promic.wav</a>

It is a clunky thing though. In my opinion the cheap USB Headset is the optimal solution overall and I am done searching. 

Happy internet talking!

### Theory and Software used

Keep in mind sound is from 20Hz to 20kHz. 

To capture a frequency range reliably you need sample with at least twice the rate according to the <a href="https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem" target="_blank">Nyquist - Shannon</a> theorem. 

Having 44.1kHz bandwidth that allows for full spectrum capturing but with only 8kHz (in the case of AirPods) to play means that you can recognize sound on about 1/5 of the spectrum (4kHz around the dominant frequency). 

You say *OK. But my voice is not fluctuating that much. I am in my pajamas pants and bored dude...*

True but it does no favors to your sound. When Skype goes and shoots your audio from your computer to the internet it levels it up and compresses it. Having a bad initial stage with small bandwidth augments all the imperfections for the end listener. 

If you are interested in sound stuff, I used <a href="https://www.audacityteam.org/" target="_blank">Audacity</a> for these recordings. It has all the stuff and tools to let you play with levels, sampling and the bits. Have fun!\
