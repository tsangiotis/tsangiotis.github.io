---
layout: post
title: Troubleshooting Using Bias Voltage
date: 2015-03-13
description: Basicaly how to check if your industrial accelerometer is connected correctly.
categories:
- Guides
tags:
- Accelerometer
- Electronics
- Vibration
- great
---

ICP Sensors are nice!

![](/images/{{ page.slug }}/1_SH0ksHu31UW8_n3YdYejQg.jpeg)

The last two days I was frustrated with an [**ICP**](https:///en.wikipedia.org/wiki/Integrated_circuit_piezoelectric_sensor) (**I**ntegrated **C**ircuit**P**iezoelectric) vibration sensor not working.

There were glimpses of uptime but it was just that. Glimpses…
<!--more-->
The sensor is driven by a dead simple circuit:

![](/images/{{ page.slug }}/schem.png)

As you see:


- A current limiting diode (surprisingly expensive)
- A polarised capacitor (_Tip_: Use a tantalum capacitor for lower noise levels)
- A 470K resistor

The circuit has worked before and even if it is difficult to mess, I checked more than 10 times the polarity and the continuity of the circuit.

As you can see in the picture, there is one thing there called **DC Bias**. Just keep it on your mind.

## Brief (fun?) theory

As I mentioned we are using an ICP sensor. These sensors are powered with a constant current DC source. The power supply is typically _18–30 Volts DC_current limited via a constant current diode between _2 and 20 mA_. Typical battery operated supplies offer _2 mA_ of constant current to extend battery life while continuous monitoring systems offer more current in order to drive longer cables.

The signal output of an ICP sensor is a low impedance voltage signal proportional to the dynamic measurement such as force, pressure, or vibration. This voltage signal is carried on a **DC bias** voltage. The AC dynamic signal is superimposed on the DC bias voltage and is allowed to swing between the supply voltage and ground. Unlike an Operational Amplifier (Op Amp) that requires a plus and minus supply and allows the signal to “ride” on ground and “swing” between the plus and minus “rails,” the ICP sensor requires the output signal to be DC biased.

## Let’s get troubleshooting!

So, how do you check the sensor?

![](/images/{{ page.slug }}/meas1.jpeg)

As you see I cannot break through it to see if I’ve fried it (these are pretty sturdy and frying them is harder than it sounds). I am also pretty sure that my circuit is good as it have worked perfectly before.

The DC Bias of the sensor can quickly and reliably show us if the sensor is working and if we have connected it correctly.

Below there is a table with common DC Bias voltages and their meaning:

![](/images/{{ page.slug }}/1_johuYRS6cjMoiOARPi1QWQ.png)

![](/images/{{ page.slug }}/1_MzQ_WmE5MhYW6TLDq8Y19A.jpeg)


Three scenarios are possible:

1. Generally, if you get around half your supply voltage you are good to go.
2. If you get _0 Volts_ you have probably shorten out something. Woops!
3. In my case, I got my supply voltage which means the connection to the sensor is faulty resulting to an open circuit. Check your cable!

![](/images/{{ page.slug }}/1_5iayBhetGZa5SkGaioNyVQ.jpeg)

## Conclusions

As you see the DC Bias on these sensors is very useful for troubleshooting. So next time you bump on a wall like that you know what to do!
