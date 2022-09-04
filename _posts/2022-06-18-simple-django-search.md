---
layout: post
lang: en
title: Simple django search
date: 2022-06-18
tags: python, django, til
---

Sometimes you want to create a search box for your model entries in a django app.

In order to not mess with complex search packages you can use the [`icontains`](https://docs.djangoproject.com/en/3.2/ref/models/querysets/#icontains) QuerySet test on a filter.

And because the UI is almost always the same, for my simple needs I have the following starting point.

On your `views.py` add a general form that contains the form action:


```python
from django.views.generic import TemplateView

class SearchForm(TemplateView):
    """Search form"""

    template_name = "app/search/search_form.html"
```

Along with the form you specify a place to put the results. 

This way you have a portable layout you can drop whenever in the app. 

```html
{% raw %}
<style>
.d-none {
  display: none;
}
</style>

<div 
  data-controller="search-basemodel"
  data-search-basemodel-url="{% url 'basemodel_search' %}">
  
  <input type="text" 
    data-target="search-basemodel.query"
    data-action="keydown->search-basemodel#fetchWithEnter"
    placeholder="{% trans 'Base model name' %}"
    aria-describedby="button-search">
  <button 
    type="submit" id="button-search"
    data-action="search-basemodel#fetchResults" >
    {% trans "Search" %}
  </button>

  <div>
    <div class="spinner d-none" data-target="search-basemodel.loader" role="status">
        <span class="sr-only">{% trans "Loading..." %}</span>
    </div>

    <div data-target="search-basemodel.results">
    </div>
    
  </div>
</div>
{% endraw %}
```

It is accompanied by a small javascript [controller](https://stimulus.hotwired.dev/reference/controllers) that makes a request and returns the results in a `div` inside the scaffold. I use Stimulus for my JS bits but everything is very simple as you will see.


```js
// search_basemodel_controller.js

import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["query", "results", "loader"];

  disconnect() {
    this.reset();
  }

  fetchWithEnter(event) {
    if (event.keyCode == 13) {
      this.fetchResults();
    }
  }

  fetchResults() {
    if (this.query == "") {
      this.reset();
      return;
    }

    if (this.query == this.previousQuery) {
      return;
    }
    this.previousQuery = this.query;

    const url = this.data.get("url") + this.query;

    this.loaderTarget.classList.remove("d-none");

    this.abortPreviousFetchRequest();

    this.abortController = new AbortController();
    fetch(url, { signal: this.abortController.signal })
      .then((response) => response.text())
      .then((html) => {
        this.resultsTarget.innerHTML = html;
        this.loaderTarget.classList.add("d-none");
      })
      .catch(() => {});
  }

  // private

  reset() {
    this.resultsTarget.innerHTML = "";
    this.queryTarget.value = "";
    this.previousQuery = null;
    this.loaderTarget.classList.add("d-none");
    this.resultsTarget.classList.add("d-none");
  }

  abortPreviousFetchRequest() {
    if (this.abortController) {
      this.abortController.abort();
    }
  }

  get query() {
    return this.queryTarget.value;
  }
}
```

This adds the query as a kwarg to a request on another view and returns the result inside the initial view.

```python
# views.py

from django.views.generic import ListView

from app.models import BaseModel

class BaseModelSearch(ListView):
    """
    Search entries by name
    """

    template_name = "app/search/search_results.html"

    def get_queryset(self):
        """Return search results."""
        plantlayers = BaseModel.objects.filter(
            name__icontains=self.kwargs.get("query")
        )

        return plantlayers.filter(name__icontains=self.kwargs.get("query"))

```

```python
# urls.py

urlpatterns = [
    ...,
    path("search", views.SearchForm.as_view(), name="search"),
    path(
        "search/basemodel/",
        views.BaseModelSearch.as_view(),
        name="basemodel_search",
    ),
    path(
        "search/basemodel/<str:query>",
        views.BaseModelSearch.as_view(),
        name="basemodel_search",
    ),
    ...,
```

The cool thing you can do with this setup is make one request and apply it to multiple models.

```html
{% raw %}
<style>
.d-none {
  display: none;
}
</style>

<div 
  data-controller="search-model1 search-model2"
  data-search-model1-url="{% url 'model1_search' %}"
  data-search-model2-url="{% url 'model2_search' %}">
  
  <input type="text" 
    data-target="search-model1.query search-model2.query"
    data-action="keydown->search-model1#fetchWithEnter keydown->search-model2#fetchWithEnter"
    placeholder="{% trans 'Model1 or Model2 name' %}"
    aria-describedby="button-search">
  <button 
    type="submit" id="button-search"
    data-action="search-model1#fetchResults search-model2#fetchResults" >
    {% trans "Search" %}
  </button>

  <div>
    <div class="spinner d-none" data-target="search-model1.loader" role="status">
        <span class="sr-only">{% trans "Loading..." %}</span>
    </div>

    <div data-target="search-model1.results">
    </div>
    
  </div>
  <div>
    <div class="spinner d-none" data-target="search-model2.loader" role="status">
        <span class="sr-only">{% trans "Loading..." %}</span>
    </div>

    <div data-target="search-model2.results">
    </div>
    
  </div>
</div>
{% endraw %}
```

This is a starting point which is enough most of the times.

For the form page, each results page and error page you will style a UI to your liking and fix the layout as needed. You can add pagination and other stuff according to your needs.

As is, you need to duplicate the controller for each model you want to search even if the controller code is exactly the same. The last part pains my heart. 

You can make it specific to your application though and even use something like [Turbo Frames](https://turbo.hotwired.dev/handbook/frames) or [htmx](https://htmx.org/docs/#targets) to make something better.
