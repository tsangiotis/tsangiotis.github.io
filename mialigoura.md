---
layout: simple
title: mialigoura
permalink: /mialigoura/
---

# mialigoura

{% include subscribe.html label="Το [@mialigoura](https://www.instagram.com/mialigoura) είναι ένας λογαριασμός review φαγητού που ξεκινήσαμε [εγώ](https://www.instagram.com/tsangiotis) και η [Άννα](https://www.instagram.com/anna.vek/)" %}

{% for post in site.tags["mialigoura"] %}
- [{{ post.title }}]({% if post.remote %}{{ post.remote_url }}{% else %}{{ site.baseurl }}{{ post.url }}{% endif %}){% if post.lang == 'el' %} 🇬🇷{% endif %}{% if post.remote %} 🔗{% endif %}, <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
{% endfor %}
