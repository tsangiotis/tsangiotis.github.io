---
layout: post
title: The ways of the Quad
date: 2016-10-12
description: The theory of operation behind the most prominent drone and how to choose yours.
image: iris1.jpg
categories:
- Projects
tags:
- UAS
- VTOL
- Quad Copter
- great
---

Recently a bunch of equipment made its way to my workbench and I’m invigorated! So I figured it’s high time we [continued](/aircraft-design-the-nasa-way) our trip.

The vertical take-off and landing aircraft I am building, will use a quadcopter or X8 (like a quadcopter with double motors) configuration to successfully justify the vertical part of it’s title.

<!--more-->
Quadcopters you are likely familiar with. If not, the word derives from the words Quadrotor Helicopter. They are more commercial than ever and you can buy them really easy. In movies they are being used more and more and if you are into YouTube or Instagram, all the big stars have one (or many).

Anyway, it’ s that contraption:
![](/images/{{ page.slug }}/iris1.jpg)

As you can imagine going airborne is hard. Maybe flying is too mainstream these days and you can’t imagine but let me tell you, going high into the air and having control of your motion is not an easy feat. Humans were not able to do it before the Wright brothers did it at the dawn of the 20th century. If you want to know more about how a couple of engineers with no social skills and an obsession threw themselves under the wagon, you can read [an essay by Maciej Cegłowski](https:///idlewords.com/2003/12/100_years_of_turbulence.htm) about the Wright brothers and patent law.

Going airborne is hard first and foremost because earth has this thing called gravity that pulls you down and keeps you close. Yes, earth is passionately possessive. So man up and deal with it. You have to beat gravity and to do exactly that, you have to push down harder than the earth pulls you.

The mystery now is how a quadcopter succeeds in that regard. Not significantly different from helicopters, quadcopters use four propellers and four motors which generate thrust in order to fly. Thrust is the force you use to beat gravity. Call me Yoda cause I will teach you how to use the force Luke! First lesson, _“from your sister, away get!”_

![](/images/{{ page.slug }}/xkcd-quad.png)

When we talk about forces, we need a coordinates system so we can communicate some concepts. What most people use for this one, is the Euler angles. It was developed by the mathematician Euler in the 18th century and it uses a set of three angles to describe the rotation of an object. Those angles are called pitch, roll and yaw.

![](/images/{{ page.slug }}/euler.jpg)

Think of the box in the picture as your head. You roll your head when you tilt it from shoulder to shoulder, you pitch your head when you look up and down and you yaw your head when you turn to look before crossing the street.

Now that you understand the movements, you are ready to understand how they are actually done.

At the core of the quadcopter movements is the rotational speed of the motors. The motion is governed by the lift forces produced by the rotating propeller blades whereas the translational and rotational motions are achieved by means of difference in the counter rotating blades. Adjusting the relative speeds of the motors, thus adjusting the produced lift of each motor in the right way, we are able to rotate the quad around any of the aforementioned axis (pitch, roll, yaw).

If I blowed your mind, relax. Imagine you are lying down, playing with a child. One common game is “the airplane” where you lift the kid up in the air with your feet and hands in order to balance it in the air. In that game, to keep the little devil still, you have to remain still. If the kid moves or you want to move it, you have to use different amount of force on the different extremities to keep it in the air. It is the same principle.

![](/images/{{ page.slug }}/example.jpg)

Now leave the kid down because there is no reason to try the next motions with it. Let’s say we want to move our copter forward. To do that we need the two motors on the back to move faster than the two motors on the front. That translates to the back producing more lift than the front thus making the quadcopter tilt forward.

![](/images/{{ page.slug }}/pitch.jpg)

In the same way we can move the copter left by making the motors on the left spin faster than the motors on the right.

![](/images/{{ page.slug }}/roll.jpg)

If this was simple enough, follow me on a more complex matter: Controlling the rotation about the yaw axis.

A valid question can be raised when you first see a quadcopter. How can a machine with four powerful rotating engines not only avoid a state of constantly spinning but also manage to remain completely still?

![](/images/{{ page.slug }}/yaw-mayhem.jpg)

Each motor spins around its axis. If all motors rotated in the same direction we would have a grave scenario. A contraption spinning around itself in the air, chaos and tears on the streets, Los Angeles burning etc. But that does not happen because while we build a quadcopter or any copter, we make the wise decision to set up the motors so that each motor spins in the opposite direction than its neighbors. That way each motor cancels out it’s neighbors will to rotate the copter.

![](/images/{{ page.slug }}/yaw-correct.jpg)

You see, when a propeller spins, for example clockwise, the law of the conservation of angular momentum directs that the body of the quadrotor will have a tendancy to spin counter-clockwise. This is due to Newton’s third law of motion _“for every action, there is an equal and opposite counter reaction”_ (don’t live your life by that mantra). The body of the quad will want to spin in the direction opposite of the rotational direction of the propellers.

Now that you got the hang of it and you feel like you understood, think about the scenario where we actually _want_**_ _**to rotate the quadcopter around the yaw axis. Don’t panic. Like the other motions, changing the speed of two of the motors achieves our goal. Though in this case, we change the speed of the _diametrically opposing_motors.

To see an example, if we want to rotate the drone clockwise we must have the counter-clockwise motors spin faster. The tendancy of those motors to rotate the body clockwise is stronger and prevails.

![](/images/{{ page.slug }}/yaw.jpg)

Beyond the fun experience of building and flying a multicopter lie a lot of mathematics and physics. In the above text I am just giving you a mild taste. If you get into this you will learn a lot but please be careful. We are talking about high speed flying spinning knives.

Happy flying and please tell me if that was at all helpful.

* * *

_Credits: Some of the images used, come from the website _[_Black Tie Aerial_](https:///blacktieaerial.com/creative-commons-licenced-multirotor-images/)_ where they are available under the _[_Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License_](https:///creativecommons.org/licenses/by-nc-sa/4.0/)_. In that regard, any image used in this post is under the same license._
