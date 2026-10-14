---
layout: page
title: Tasos Sangiotis' book tally
permalink: /reading/
---

{% assign byYear = site.books | group_by: "year" | sort: "name" | reverse %}
{% for yr in byYear %}

## {{ yr.name }}

{% for book in yr.items %}
{% assign review = book.content | strip %}
1. {% if review != "" %}[{{ book.title }}]({{ book.url }}){% else %}{{ book.title }}{% endif %} -- {{ book.author }} <span class="reading-{{ book.rate }}"></span>
{% endfor %}

{% endfor %}
