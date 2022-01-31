---
layout: simple
---

{% if site.image %}

<center>
<a href="{{ site.image.url }}">
<img alt="{{ site.image.title }}" src="{{ site.image.img }}" style="max-height: 46em;display: block;">
</a>
</center>
{% endif %}

## Now reading 📖

{% assign reading = site.books | where:"rate","0" %}

{% for book in reading %}

- {{ book.title }} -- {{ book.author }}
  {% endfor %}

_Latest_ posts are on my [**blog**](https://world.hey.com/tasos)!

{% include subscribe.html %}

## Posts ✍️

{% for post in site.posts limit:7 %}

- [{{ post.title }}]({% if post.remote %}{{ post.remote_url }}{% else %}{{ site.baseurl }}{{ post.url }}{% endif %}){% if post.lang == 'el' %} 🇬🇷{% endif %}{% if post.remote %} 🔗{% endif %}, <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
  {% endfor %}

[Older posts →]({{ site.baseurl }}/posts/)
