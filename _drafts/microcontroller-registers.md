---
layout: post
title: Microcontroller Registers
date: 2018-03-11
description: 
image: 
categories:
tags:
---

Do you like going faster while keeping as less information as possible in your head? Your microcontroller likes that too.
So if your Arduino project is ready for prime time, it is time to trim some codefat. 

Sparkfun recently released a video about registers. It is quite good and explanatory. Watch it and then I'll tell you some more convenient uses for them.

<iframe width="500" height="281" src="https://www.youtube.com/embed/6q1yEb_ukw8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 

<!--more-->

The Arduino programming language and other high level microcontroller solutions, are like luxurious trailers for embeded developers. It has all the beautiful bells and whistles around a big powerful engine but the weight is limiting its full potential. If you could just throw away the marble table and the some appliances, the thing could be so much faster and spacious while remaining luxurious.

Shawn doesn't get too into much detail about why the registers way is faster and more space efficient. Every microcontroller command needs a number of processor cycles to execute. Less processor cycles means faster programs. Most of the times though and especially for simple not timing sensitive application we don't mind an extra cycle or five. These things run fast enough, he said trumping the great intro he wrote. So why on earth use this?

I needed a way to interface a digital IO card and an Arduino. The IO card did not have a UART, I2C or SPI protocol to use so I was down to creating a simple protocol to exchange simple information. I had to make due with 8 digital pins. I way over engineered at first but reason kicked in eventually.