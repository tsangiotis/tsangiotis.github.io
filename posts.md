---
layout: simple
title: All posts
permalink: /posts/
---

<section style="text-align: center; max-width: 32rem;overflow: initial;transform: rotate(-1deg);">
    <form action="https://world.hey.com/tasos/subscribers" accept-charset="UTF-8" data-remote="true" method="post">
      <label for="subscriber[email_address]">
        Subscribe below to get future posts from Tasos Sangiotis
      </label>

      <div>
        <input type="email" name="subscriber[email_address]" placeholder="Type your email…" required="">

        <button>Subscribe</button>
      </div>

</form>
    <p class="txt--x-small flush--bottom">
      Or grab the <a class="permalink" href="https://world.hey.com/tasos/feed.atom">RSS feed</a>
    </p>
  </section>
  
{% for post in site.posts %}

- [{{ post.title }}{% if post.lang == 'el' %}<span>🇬🇷</span>{% endif %}]({% if post.remote %}{{ post.remote_url }}{% else %}{{ post.url }}{% endif %}){% if post.remote %}🔗{% endif %}, <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
  {% endfor %}
