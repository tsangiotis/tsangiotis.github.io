---
layout: post
lang: en
title: Python instance check
date: 2022-06-14
tags: python, til
---

Django comparisons almost always require timezone aware datetimes. 

I tried with a None value but the comparison failed.

A workaround to keep this compatible is to use epoch and isoparse with the timezone in the ISO string.

```python
from dateutil import parser
check_date = parser.isoparse("1970-01-01T00:00:00+03:00")
```
