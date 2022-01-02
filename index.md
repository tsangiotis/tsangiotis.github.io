---
layout: simple
---

{% for photo in site.photos limit:1 %}
[![{{ photo.title }}]({{ photo.img }})]({{ photo.url }})
{% endfor %}

## Now reading 📖

{% assign reading = site.books | where:"rate","0" %}

{% for book in reading %}

- {{ book.title }} -- {{ book.author }}
  {% endfor %}

## Latest posts ✍️

{% include subscribe.html %}

{% for post in site.posts limit:7 %}

- [{{ post.title }}{% if post.lang == 'el' %}<span>🇬🇷</span>{% endif %}]({% if post.remote %}{{ post.remote_url }}{% else %}{{ post.url }}{% endif %}){% if post.remote %}🔗{% endif %}, <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
  {% endfor %}

[All posts →](/posts/)
