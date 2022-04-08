---
layout: simple
---

{% include subscribe.html %}

{% if site.image %}
[![{{ site.image.title }}]({{ site.image.img }})]({{ site.image.url }})
{% endif %}

Hello! My name is Tasos.

I work at [Arpedon](https://www.arpedon.com), an engineering company.

This website is a collection of posts, essays and photos. They are mainly about travel, food and occasionally technical stuff.

Occasionally I shoot [photos]({{ site.baseurl }}/photography). They are mostly [on Instagram](https://instagram.com/tsangiotis).

If you choose to wander this wasteland do so with caution. Consider this your final warning.

To contact me use [tasos@hey.com](mailto:tasos@hey.com).

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
