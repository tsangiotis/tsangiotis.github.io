---
layout: mialigoura
title: mialigoura
permalink: /mialigoura/
---

<section style="text-align: center; max-width: 32rem;overflow: initial;transform: rotate(-1deg);">
  <form action="https://buttondown.email/api/emails/embed-subscribe/tsangiotis" accept-charset="UTF-8" data-remote="true" method="post">
    <label for="email" markdown="1">
      Το [@mialigoura](https://www.instagram.com/mialigoura) είναι ένας λογαριασμός review φαγητού που ξεκινήσαμε [εγώ](https://www.instagram.com/tsangiotis) και η [Άννα](https://www.instagram.com/anna.vek/). Εγγραφείτε για να λαμβάνετε τα νέα review πρώτοι
    </label>

    <div>
      <input type="email" name="email" placeholder="Γράψτε το email σας…" required="">

      <button>Εγγραφή</button>
    </div>

  </form>
  <p class="txt--x-small flush--bottom">
    Ή ακολουθήστε μας στο instagram <a class="permalink" href="https://www.instagram.com/mialigoura">Instagram</a>
  </p>
</section>

{:.posts}
{% for post in site.tags["mialigoura"] %}

- [{{ post.title }}{% if post.lang == 'el' %} 🇬🇷{% endif %}{% if post.remote %} 🔗{% endif %}]({% if post.remote %}{{ post.remote_url }}{% else %}{{ site.baseurl }}{{ post.url }}{% endif %})<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
  {% endfor %}
