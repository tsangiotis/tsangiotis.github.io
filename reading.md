---
layout: page
title: Tasos Sangiotis' book tally
permalink: /reading/
---

{% assign books2016 = site.books | where:"year","2016" %}
{% assign books2017 = site.books | where:"year","2017" %}
{% assign books2018 = site.books | where:"year","2018" %}
{% assign books2019 = site.books | where:"year","2019" %}
{% assign books2020 = site.books | where:"year","2020" %}
{% assign books2021 = site.books | where:"year","2021" %}
{% assign books2022 = site.books | where:"year","2022" %}

## 2022

{% for book in books2022 %}

1. [{{ book.title }}]({{book.url}}) -- {{ book.author }} <span class="reading-{{ book.rate }}"></span>

{% endfor %}

## 2021

{% for book in books2021 %}

1. {{ book.title }} -- {{ book.author }} <span class="reading-{{ book.rate }}"></span>

{% endfor %}

## 2020

{% for book in books2020 %}

1. {{ book.title }} -- {{ book.author }} <span class="reading-{{ book.rate }}"></span>

{% endfor %}

## 2019

{% for book in books2019 %}

1. {{ book.title }} -- {{ book.author }} <span class="reading-{{ book.rate }}"></span>

{% endfor %}

## 2018

{% for book in books2018 %}

1. {{ book.title }} -- {{ book.author }} <span class="reading-{{ book.rate }}"></span>

{% endfor %}

## 2017

{% for book in books2017 %}

1. {{ book.title }} -- {{ book.author }} <span class="reading-{{ book.rate }}"></span>

{% endfor %}

## 2016

{% for book in books2016 %}

1. {{ book.title }} -- {{ book.author }} <span class="reading-{{ book.rate }}"></span>

{% endfor %}
