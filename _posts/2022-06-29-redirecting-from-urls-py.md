---
layout: post
lang: en
title: "Django: Redirecting from urls.py"
date: 2022-06-29
tags: django, mechbase
---

I made some changes and slashed a page.

Now it is possible some users have the page bookmarked or on an email and I wanted this to work but to not retain the url.

At the same time I dind't want to create a view just for that.

There is a better way:

```python
from django.views.generic import RedirectView

...

urlpatterns = [
    ...
    path(
        "measurementpoint/<uuid:pk>/history/",
        RedirectView.as_view(pattern_name="measurementpoint", permanent=True),
    ),
    ...
]
```
