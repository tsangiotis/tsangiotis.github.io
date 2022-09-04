---
layout: post
lang: en
title: Simpler search using Turbo Frames
date: 2022-06-19
tags: python, hotwire, html, django, til, turbo
---

Yesterday I wrote about a [search implementation](https://tsangiotis.com/simple-django-search/) using icontains filters.

It made me think of a simpler implementation on the HTMl side. 

In the past couple of years "extensions" to HTML that are not a full JS frameworks are getting poppular. We use the [Hotwire](https://hotwired.dev/).

A useful feature of Hotiwire is that you can make a request through a form and inject the response in a predefined position in the body. Let's say a search box and its result 😉.

Assuming you setup a page for the results response:

```html
<form class="form" role="search" action="/search" method="get"
    accept-charset="UTF-8" data-remote="true">
    <input 
        type="search" autocomplete="off" spellcheck="false" 
        role="combobox" placeholder="Search" name="q"
        autofocus="autofocus" required="required" 
        pattern=".*\S.*">
    <input type="submit" value="Search">
</form>

<turbo-frame role="listbox" id="search" target="_top">
    <span class="sr-only" role="option" aria-disabled="true">
        No matches yet
    </span>
</turbo-frame>

```

Using some javascript and css to submit on type on [Mechbase](https://arpedon.com/products/mechbase):

![Search example](https://bear-images.sfo2.cdn.digitaloceanspaces.com/tasos-1655626374.gif)
