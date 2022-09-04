---
layout: post
lang: en
title: "Get mains out of my signal"
date: 2022-07-15
tags: til, signal-processing
---

Power-frequency interference gets picked up through insufficiently shielded instrumentation or electrically generated mechanical faults.

While correct installation, ground loop avoidance and elimination of other sources is the goal sometimes it is not possible.

Bellow is the timeseries and spectrum of an heterodyned output ultrasound sensor. It transfers the high frequency signals to the acoustic range.

![Image title](https://bear-images.sfo2.cdn.digitaloceanspaces.com/tasos-1658071053.png)

![Image title](https://bear-images.sfo2.cdn.digitaloceanspaces.com/tasos-1658071062.png)

As you see, 50 Hz is very prominent here resulting in a constant hum. You can also spot a lot of harmonics.

Queue the notch filter.

A notch filter is a type of band-stop filter, which is a filter that attenuates frequencies within a specific range while passing all other frequencies unaltered. For a notch filter, this range of frequencies is very narrow[^1]. The range of frequencies that a band-stop filter attenuates is called the stopband.

Because we want to also catch the harmonica we can use a filter sampling frequency that is\
a multiple of our power-frequency.

The ideal result in a the time domain will look as bellow[^2].


![Image title](https://bear-images.sfo2.cdn.digitaloceanspaces.com/tasos-1658071103.png)

Doing that to our signal results in a much cleaner representation for the other phenomena.


![Image title](https://bear-images.sfo2.cdn.digitaloceanspaces.com/tasos-1658071119.png)


![Image title](https://bear-images.sfo2.cdn.digitaloceanspaces.com/tasos-1658071125.png)

Harmonics are still there but affect much less the signal. One could certainly phase them out but I used [Audacity](https://www.audacityteam.org/) which does not feature sampling rate settings for notch filters so I went manual and I stopped.
I will dig into that more in the future.


[^1]: [Scipy notch function](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.iirnotch.html)
[^2]: [Introduction to Signal Processing - Sophocles J. Orfanidis (Rutgers University)](https://www.ece.rutgers.edu/~orfanidi/intro2sp/)
  
