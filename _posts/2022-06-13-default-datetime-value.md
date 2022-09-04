---
layout: post
lang: en
title: Setting a variable default datetime value in Django/python
date: 2022-06-13
link: python-is-number
tags: python, django, til
___

Python being a [dynamically typed (🦆)](https://en.wikipedia.org/wiki/Duck_typing)  language lets you set whatever you want on a variable. Is it a string now and later a float. No worries now, we will worry when we have to. 

This is great when you want to set something but dealing with complex, not necessarily cohesive datasets gets you in trouble.

Suppose you don't care about that and you just want to have an endless page of if statements this is what you can do:

```python
if isinstance(value, (int, float, complex)) and not isinstance(value, bool):
    ...
```

The bool check provides assurance that `True` and `False` statements are not delivered as `1` and `0`

It is better to do this though but you add an import:

```python
import numbers

if isinstance(value, numbers.Number) and not isinstance(value, bool):
    ...
```
