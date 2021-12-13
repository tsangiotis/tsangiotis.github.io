---
layout: simple
title: Photos
permalink: /photos/
---

This is kind of a showcase. For more current pictures [Follow @tsangiotis](https://instagram.com/tsangiotis) on Instagram.

{% for photos in site.photos %}
<article class="post__present">
  <a class="post" href="{{ photos.url }}">
    <h2 class="post__title">
      {{ photos.title }}</h2>
  </a>
  <time class="post__date" datetime="{{ photos.date | date_to_xmlschema }}">{{ photos.date | date: "%b %d, %Y" }}</time>
</article>
{% endfor %}
