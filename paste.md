---
layout: none
permalink: /paste/
---

{% for post in site.posts limit:1 %}
<h1>{{ post.title }}</h1>

{{ post.content }}
{% endfor %}
