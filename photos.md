---
layout: simple
title: Photos
permalink: /photos/
---

This is kind of a showcase. For more current pictures [Follow @tsangiotis](https://instagram.com/tsangiotis) on Instagram.

{% for photos in site.photos %}
[![{{ photos.title }}]({{ photos.img }})]({{ photos.url }})
_{{ photos.date | date: "%b %d, %Y" }}_

## {{ photos.title }}

{% endfor %}
