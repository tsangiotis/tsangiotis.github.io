---
layout: post
title: Multilingual Jekyll on GitHub Pages
date: 2020-10-15
description: Babel was hard enough. A GDPR compliant multilingual language selector.
image: /images/multilingual-jekyll/around_the_world.png
categories: guide
tags: jekyll
redirect_from:
  - /2020/20/15/multilingual-jekyll-on-github-pages/
  - /2020/20/15/multilingual-jekyll-on-github-pages/amp/
  - /2020/20/15/multilingual-jekyll/
  - /2020/20/15/multilingual-jekyll/amp/
---

![Around the world]({{ site.baseurl }}/images/{{ page.slug }}/around_the_world.png)

We recently ditched Wordpress for the company site and built something with Jekyll just to make it faster and simplify our tools.

We wanted to host on Github pages to up the simplicity. However having the site be multilingual is a hard requirement for us and Github pages does not support it.

So we rolled our own solution.

<!--more-->

Requirements:

- Be able to change the language on all pages. No page should be only in one language.
- No plugins. We want to host on Github Pages and only a small list of plugins are permitted there.
- Work OK without javascript because I can't trust myself with that language.
- Respect [GDPR policy](https://gdpr.eu/cookies/).
- Remember the users language of choice or use the browser preferences for that.

Most of the requirements work great in solutions from posts found online [^1] [^2] [^3] [^4] [^5].

[^1]: [https://www.sylvaindurand.org/making-jekyll-multilingual/](https://www.sylvaindurand.org/making-jekyll-multilingual/)
[^2]: [https://matthewlincoln.net/2020/03/01/multilingual-jekyll.html](https://matthewlincoln.net/2020/03/01/multilingual-jekyll.html)
[^3]: [https://forestry.io/blog/creating-a-multilingual-blog-with-jekyll/](https://forestry.io/blog/creating-a-multilingual-blog-with-jekyll/)
[^4]: [https://github.com/kurtsson/jekyll-multiple-languages-plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin)
[^5]: [https://medium.com/@desfocado/how-to-make-jekyll-multilingual-c13e74c18f1c](https://medium.com/@desfocado/how-to-make-jekyll-multilingual-c13e74c18f1c)

I will give you the complete solution but much credit goes to these people. So lets begin.

In every page or post you write from now on you need a couple of extra elements in the front matter.

```
---
layout: default-el
lang: el
lang-ref: policies
permalink: /el/hello/
title: Hello world!
---
```

The most important ones are `lang` and `lang-ref`.

`lang`: Here is the language of the current file.

`lang-ref`: Here is the common slug for the page. This is shared on all the different language versions of the page.

As a bonus I created different layout scaffolds for the different languages so I don't make every part of the general layout like the menu header and footer a big plate of if spaghetti.

Here is the website header:

```liquid
{% raw  %}<header>
  <nav class="header__nav" aria-label="main">
    <div class="header__links">
        ...
    </div>
    {% if page.layout == 'post' %}
    {% assign posts=site.posts | where:"lang-ref", page.lang-ref | sort: 'lang' %}
    {% endif %}
    {% if  page.layout != 'post' %}
    {% assign posts=site.pages | where:"lang-ref", page.lang-ref | sort: 'lang' %}
    {% endif %}
    {% if posts.size > 1 %}

    <div class="header__langs">
      {% for post in posts %}
      {% if post.lang != page.lang %}
      <a href="{{ site.base-url }}{{ post.url }}" class="header__lang header__lang-{{ post.lang }} title=" View in
        {{post.lang}}" data-lang={{ post.lang }}></a>
      {% endif %}
      {% endfor %}
    </div>
    {% endif %}
  </nav>
</header>{% endraw  %}
```

Here we collect all posts or pages with the same `lang-ref` to the `posts` list and we show translations of the page to other languages than the language of the current page.

You will notice that the language link as no content and that we use the class `header__lang-{{ post.lang }}`. There we can use the [content](https://www.w3schools.com/cssref/pr_gen_content.asp) css property to set what we want in our link text. However with two languages you can harcode it and it saves you some headaches.

At this point is where those guides took us. But using polylang on our site for years I have been accustomed to the website remembering my choice or bugging me with the wrong one. I wanted that to remain.

That meant I needed to store a preference. Hello Cookies 🍪🍪🍪!!!

Javascript is needed for those. It is a simple enough implementation.

First we need a way to write and read cookies. Searching around on the internet you can end up with those two functions.

```javascript
function setCookie(e, t, n, a) {
  var i = new Date();
  i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
  var o = "expires=" + i.toUTCString(),
    s = a ? ";SameSite=" + a : "";
  document.cookie = e + "=" + t + ";" + o + ";Secure;path=/" + s;
}

function getCookie(e) {
  for (
    var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), a = 0;
    a < n.length;
    a++
  ) {
    for (var i = n[a]; " " == i.charAt(0); ) i = i.substring(1);
    if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
  }
  return null;
}
```

But to use those under cookies we must get concent.

Let's create a concent form that will go to our scafold:

```html
<div class="cookie-form-container" data-compliance-container>
  <div class="cookie-form">
    <p class="cookie-form__content">
      We do use persistent first-party cookies to augment your experience in our
      website and support analytics. To learn more, please read our
      <a href="{{ site.baseurl }}/policies/privacy/">privacy policy</a>.
    </p>
    <button class="button cookie-form__submit" data-compliance>OK</button>
  </div>
</div>
```

When we hit OK we store a concent cookie and add a the `.hide {display: none;}` class to the cookie banner container so it dissapears. Now it is ok to store our language preference cookies. On the next visit the language preference is stored depending on the user's browser preferences.

If the user actively changes the language from the language switcher the preference changes again.

How we use it? Every time the user visits the homepage she gets redirected to the language of preferece.

Note that visiting another page directly will not redirect. This is my preference. It is easy to change that behavior if you like but I believe it is useful for a permalink to be permanent.

Here is the code to do what we intent.

```javascript
function languageChange(lang) {
  setCookie("_lang", lang, 90, "None");
  setCookie("_lang_ss", lang, 90);
  return lang;
}

(function () {
  null !== (n = getCookie("_compliance")) &&
    document.querySelector("[data-compliance-container]") &&
    document.querySelector("[data-compliance-container]").classList.add("hide"),
    document.querySelector("[data-compliance]") &&
      document
        .querySelector("[data-compliance]")
        .addEventListener("click", function () {
          window.event.preventDefault();
          setCookie("_compliance", "true", 90, "None");
          setCookie("_compliance_ss", "true", 90);
          document
            .querySelector("[data-compliance-container]")
            .classList.add("hide");
        });
}.call(this),
  function () {
    var lang = getCookie("_lang") || getCookie("_lang_ss");
    var compliance = getCookie("_compliance") || getCookie("_compliance_ss");
    if (!lang && compliance) {
      lang = (navigator.language || navigator.userLanguage).split("-")[0];
      setCookie("_lang", lang, 90, "None");
      setCookie("_lang_ss", lang, 90);
    }
  }.call(this),
  function () {
    var e, t, n, a;
    "/" === window.location.pathname &&
      null !== (n = getCookie("_lang")) &&
      n == "el" &&
      window.location.replace("/el/");
    "/el/" === window.location.pathname &&
      null !== (n = getCookie("_lang")) &&
      n == "en" &&
      window.location.replace("/");
  }.call(this));
```

Easy right? To avoid nagging from the browser we store two cookies one with the SameSite notation and one without. They both have the same information and we grab the information from the available cookie.

Now go play with your multilingual site. Ours is [arpedon.com](https://arpedon.com).
