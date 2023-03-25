---
layout: simple
title: Tasos Sangiotis
---

## Now reading 📖

{% assign reading = site.books | where:"rate","0" %}

{% if reading %}
{% for book in reading %}

- {{ book.title }} -- {{ book.author }}
{% endfor %}
{% endif %}

## Pins 📌

<ul 
    data-rss-feed="https://feeds.pinboard.in/rss/u:tsangiotis/" 
    data-rss-title-wrapper="li" 
    data-rss-max="5"
    class ="posts posts--pins">
</ul>

From my [pinboard feed](https://pinboard.in/u:tsangiotis#).

## Posts ✍️

<ul 
    data-rss-feed="https://world.hey.com/tasos/feed.atom" 
    data-rss-title-wrapper="li" 
    data-rss-max="5"
    class ="posts posts--pins">
</ul>



<script src="/assets/js/simple-rss.js"></script>
