---
layout: simple
---

{% include subscribe.html %}

{% if site.image %}
[![{{ site.image.title }}]({{ site.image.img }})]({{ site.image.url }})
{% endif %}

## Now reading 📖

{% assign reading = site.books | where:"rate","0" %}

{% for book in reading %}

- {{ book.title }} -- {{ book.author }}
  {% endfor %}

## Posts ✍️

{:.posts}
{% for post in site.posts limit:7 %}

- [{{ post.title }}{% if post.lang == 'el' %} 🇬🇷{% endif %}{% if post.remote %} 🔗{% endif %}]({% if post.remote %}{{ post.remote_url }}{% else %}{{ site.baseurl }}{{ post.url }}{% endif %})<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
  {% endfor %}

[Older posts →]({{ site.baseurl }}/posts/)
