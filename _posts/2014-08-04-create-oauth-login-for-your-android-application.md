---
layout: post
title: "Create oAuth Login for your Android Application"
date: 2014-08-04
categories:
- Guides
---

As many services start to support 2 factor authentication you should

enable it and use it as a user.

But what if you created a beautiful login screen for when 2fa was not a thing\
and now people can't login?

The solution is an easy one. Just simplify login using oAuth!

> OAuth is an open standard for authorization. OAuth provides client applications\
> a 'secure delegated access' to server resources on behalf of a resource owner.

What that means? That with a dialog inside our application or a browser intent\
we can log the user in from the familiar and trustworthy site of the service we\
are using. Tokens generated from oAuth can be revoked by the user at any time he\
sees fit.

He is happy because he is safe and we are happy because we don't have to worry\
about API changes, API calls and that creepy stuff.

In oAuth there are also some things called scopes.

That means that the app has only the permissions it needs. No more, no less.

What we need is some keys often found in the respective development sections of\
each service.

## Talking Android

Below is a gist from [Jekyll for Android](http://tsagi.me/jekyll-client-for-android/ "Link: http://tsagi.me/jekyll-client-for-android/")\
an open source project I maintain to post on your Jekyll blog from Android:

With this code you can get Read/Write capabilities on the user's\

repositories.

Change the scopes to get *just* what permissions you need.

You will be presented with a button that brings up the authentication dialog.

The script should be almost identical for other services using oauth.

These are Google, Yahoo, Facebook, Twitter, etc.

Have fun! :)

![](/assets/images/posts/create-oauth-login-for-your-android-application/01-large_keep-calm-and-oauth2.png)
