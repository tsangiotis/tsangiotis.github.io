---
layout: post
title: Universal Raspberry Pi Remote
date: 2013-06-06
description: The guide to your very own universal remote (not only for TVs).
categories:
- Guides
- Projects
tags:
- Automation
- LIRC
- Raspberry Pi
- great
---

I am getting mad of the remote controller in the house.

Actually I use three:

- The TV remote
- The Radio/iPod/CD Player remote
- The Air Condition remote

Some time ago I fell on [this post](http://randomtutor.blogspot.gr/2013/01/web-based-ir-remote-on-raspberry-pi.html). It is an IR receiver & emitter circuit attached to a [Raspberry Pi](http://raspberrypi.org/). I had some spare time so I decided to build it!
<!--more-->

Circuitry was fairly easy.

Parts I used:

| Infrared LED | : Had a spare one but you can use any from an old remote |
| IR Receiver | : I used a TSOP382\. You can use any _BUT_ check the datasheet! |
| NPN Transistor | : I don't know the part code |
| 1.5Ω Resistor | : It just has to be really low |
| 220Ω Resistor | : Nothing to say here |

You can see the connections clearly here:

After the first assembly and testing I made it smaller using a strip board:

And this is what we end up with:

![](/images/{{ page.slug }}/1-3.png)

## LIRC

[LIRC](http://www.lirc.org/) stands for Linux Infrared Remote Control. And does exactly what it says.

LIRC is now included in [Raspbian's](http://www.raspbian.org/) official repositories for Raspberry Pi and you can install it with:

```
sudo apt-get install lirc

```

Append this on your `/etc/modules`:

```
lirc_dev
lirc_rpi gpio_in_pin=23 gpio_out_pin=22
```

Change your `/etc/lirc/hardware.conf` to:

```
########################################################
# /etc/lirc/hardware.conf
#
# Arguments which will be used when launching lircd
LIRCD_ARGS="--uinput"

# Don't start lircmd even if there seems to be a good config file
# START_LIRCMD=false

# Don't start irexec, even if a good config file seems to exist.
# START_IREXEC=false

# Try to load appropriate kernel modules
LOAD_MODULES=true

# Run "lircd --driver=help" for a list of supported drivers.
DRIVER="default"
# usually /dev/lirc0 is the correct setting for systems using udev
DEVICE="/dev/lirc0"
MODULES="lirc_rpi"

# Default configuration files for your hardware if any
LIRCD_CONF=""
LIRCMD_CONF=""
########################################################

```

And now restart your LIRC daemon:

```
sudo /etc/init.d/lirc stop
sudo /etc/init.d/lirc start

```

## Transceiver

Now that we are all set up lets check if our IR transceiver works

```
# Stop the lircd so /dev/lirc0 is not in use
sudo /etc/init.d/lirc stop
# Get RAW data from the transceiver
mode2 -d /dev/lirc0

```

When you press some buttons on a remote control you should get something like:

```
space 12300
pulse 590
space 19395
pulse 540
space 7024
pulse 495
space 402351
pulse 560
space 7085
pulse 480
space 29043

```

If not then check your wiring. It is possible that you crossed the wires on the Pi.

## IR LED

It's really easy to create add a new remote on LIRC.

```
# Stop lircd so /dev/lirc0 is not in use
sudo /etc/init.d/lirc stop

# Create a new remote control configuration file (using /dev/lirc0) and save the output to ~/lircd.conf
irrecord -d /dev/lirc0 ~/lircd.conf

# Edit ~/lircd.conf and add edit the name of the controlled device
nano ~/lircd.conf

# Make a backup of the original lircd.conf file
sudo mv /etc/lirc/lircd.conf /etc/lirc/lircd_original.conf

# Copy over your new configuration file
sudo cp ~/lircd.conf /etc/lirc/lircd.conf

# Start up lirc again
sudo /etc/init.d/lirc start

```

Do not forget to check `irrecord --list-namespace` for the valid key names. If something doesn't meet your needs just put it on a `KEY_` value that you will not use for this remote.

Now let's test the remote:

```
# List all of the commands that LIRC knows for 'samsung_tv'
irsend LIST samsung_tv ""

# Send the KEY_POWER command once
irsend SEND_ONCE samsung_tv KEY_POWER

# Send the KEY_VOLUMEDOWN command once
irsend SEND_ONCE samsung_tv KEY_VOLUMEDOWN

# Send the KEY_VOLUMEDOWN command 10 times lowering the volume for 10 units at once
irsend --count=10 samsung_tv KEY_VOLUMEDOWN

```

Here is a video where I change channels from command line:

You can add more remotes just by appending a new lircd.conf at the previous one.

For the LIRC configuration I followed [this guide](http://alexba.in/blog/2013/01/06/setting-up-lirc-on-the-raspberrypi/).

I also made an Android application using the web interface provided [here](https://github.com/slimjim777/web-irsend) but the code needs a lot of polishing so I can't share it yet.

![](/images/{{ page.slug }}/2-2.png)

It was cool for an evening project :)
