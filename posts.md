---
layout: simple
title: All posts
permalink: /posts/
---

_Subscribe to be informed first [on the new location](https://world.hey.com/tasos)!_

{% for post in site.posts %}

- [{{ post.title }}{% if post.lang == 'el' %}<span>🇬🇷</span>{% endif %}]({% if post.remote %}{{ post.remote_url }}{% else %}{{ post.url }}{% endif %}){% if post.remote %}🔗{% endif %}, <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
  {% endfor %}
