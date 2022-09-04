---
layout: simple
---

{% include subscribe.html %}

## Now reading 📖

{% assign reading = site.books | where:"rate","0" %}

{% for book in reading %}

- {{ book.title }} -- {{ book.author }}
  {% endfor %}

## Pins 📌

<ul 
    data-rss-feed="https://feeds.pinboard.in/rss/u:tsangiotis/" 
    data-rss-link-titles="true" 
    data-rss-title-wrapper="li" 
    data-rss-max="5"
    class ="posts">
</ul>

From my [pinboard feed](https://pinboard.in/u:tsangiotis#).

## Posts ✍️

{:.posts}
{% for post in site.posts %}

- [{{ post.title }}{% if post.lang == 'el' %} 🇬🇷{% endif %}{% if post.remote %} 🔗{% endif %}]({% if post.remote %}{{ post.remote_url }}{% else %}{{ site.baseurl }}{{ post.url }}{% endif %})<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
  {% endfor %}


<script src="/assets/js/simple-rss.js"></script>
