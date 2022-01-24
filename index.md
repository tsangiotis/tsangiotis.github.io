---
layout: simple
title: Posts
---

# Older Posts ✍️

_Latest_ posts are on my [**blog**](https://world.hey.com/tasos)!

{% include subscribe.html %}

Bellow some older entries:
{% for post in site.posts limit:7 %}

- [{{ post.title }}{% if post.lang == 'el' %}<span>🇬🇷</span>{% endif %}]({% if post.remote %}{{ post.remote_url }}{% else %}{{ site.baseurl }}/{{ post.url }}{% endif %}){% if post.remote %}🔗{% endif %}, <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
  {% endfor %}

[Older posts →]({{ site.baseurl }}/posts/)
