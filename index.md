---
layout: simple
---

{% for photo in site.photos limit:1 %}
[![{{ photo.title }}]({{ photo.img }})]({{ photo.url }})
{% endfor %}

## Latest posts

_Subscribe to be informed first [on the new location](https://world.hey.com/tasos)!_

{% for post in site.posts limit:7 %}

- [{{ post.title }}{% if post.lang == 'el' %}<span>🇬🇷</span>{% endif %}]({% if post.remote %}{{ post.remote_url }}{% else %}{{ post.url }}{% endif %}){% if post.remote %}🔗{% endif %}, <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
  {% endfor %}

[All posts →](/posts/)
