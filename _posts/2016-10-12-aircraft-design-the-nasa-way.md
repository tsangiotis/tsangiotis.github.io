---
layout: post
title: Aircraft design the NASA way
date: 2016-10-12
description: The tools used to design modern model aircrafts.
categories:
- Projects
tags:
- Design
- UAS
- VTOL
- great
---

I have not said anything about it here but my thesis is about a VTOL aircraft. That stands for Vertical Take Off and Landing aircraft. If this is nonsense to you, don't worry. You can just watch Jeremy Clarkson explain it in TopGear fashion in the video bellow.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MXo_d6tNWuY" frameborder="0" allowfullscreen></iframe>

Basically it combines a copter and a plane allowing to take off and land without the need for an airstrip like a copter but cruise at the speed of a plane providing autonomy. It's a rad concept.

> But how does one design and build a thing like that?

My thought while writing this is to make a series of posts explaining common tactics and thought process, demonstrating some popular (and free) tools used by recognised organisations, comparing some options and getting some feedback. To be fair, I've played with quadcopters but most of this is new to me. Also most of the information you will get here, is already on the internet but it is most of the time scattered with the rare exception when it is concentrated and explained by good people. If you are a newbie I will try to get you around the roadbumps I hit so you can hit your own roadbumps.

Copters are fairly easy to design and construct. You can literally make one by crucifying  a tupper on a wooden cross like that.
![](/images{{ page.id }}/quadcopter.jpg)

Strap on a cheap ready to fly kit following the simple instructions inside and with around $50 you have in your hands something that can fly (or damage them severely if you are not careful).

Of course it gets more sophisticated than that but you **can** build it just by following the above paragraph. The reason quadcopter drones got so popular is because they are so simple and allow for error.

I will eventually tell you what I know about deciding on motors and batteries for your beautiful contraption, how to design a frame and power distribution system that will help you experiment and if I am in dark side of the force mood I will tell you how to mess with the PID controllers (the algorithms that keeps your flying machine stable) on your flight controller.

A VTOL however is mostly a plane. It is designed to cruise most of the time.

![A fixed wing I built in 2012](/images{{ page.id }}/plane.jpg)
<p class="text-center">A fixed wing I built in 2012</p>

The plane design part is kind of trickier. You have to calculate masses and aerodynamic data meticulously to fly without crashing on liftoff. And with only so much masses to allocate in a fixed design you have to plan in advance.

<blockquote>
  <p>Don't I need massive amounts of computing power and expensive programs to design airplanes?</p>
  <p style="text-align: right;">- You</p>
</blockquote>

Yes and no. It helps to have a capable enough computer and access to CAD programs like SolidWorks but it is not a requirement. At least this is my case. Most of the programs I use for aircraft design are completely free and open-source running on my now 4 years old low-to-medium spec computer.

![Slow computers have advantages](/images{{ page.id }}/compiling.png)
<p class="text-center">Slow computers have advantages</p>

Actually one of the programs I mentioned is made by some folks at NASA. It's called [OpenVSP](http://www.openvsp.org/) and stands for Open Vehicle Sketch Pad. Spoiler alert: It's much more than a sketch pad.

The other one is [XFLR5](http://www.xflr5.com/xflr5.htm). It is an extremely capable aerodynamics analysis tool for airfoils and complete wings. It started from a little known university called MIT and has been used in bizarre cases like [studying sail boat performance](http://www.xflr5.com/sail7/sail7.html).

Anyhow, for the next few months, life is going to include a lot of this stuff. In true Tasos fashion I may completely abandon documenting this as I have to explain a lot of things I have already done but I will try and if people are actually interested I will try harder. I will start with a post a week and see how that works.

Until then, Pink Floyd's Learning to Fly is a fitting song and study until the next post:

<iframe width="560" height="315" src="https://www.youtube.com/embed/eCB_INs2E24" frameborder="0" allowfullscreen></iframe>
