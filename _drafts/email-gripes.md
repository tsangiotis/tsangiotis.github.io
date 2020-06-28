---
layout: post
title: Hey and Email first world problems
description: 
image: 
categories: Personal
tags: Opinion
---

It all started with [HEY](https://hey.com). There was so much buzz around it. It is made from the company behind Basecamp 3. I use Basecamp and it is great so I decided to try it.

<img src="/images/{{ page.slug }}/hey-logo.png" alt="HEY logo" style="max-width: 10.5em">

It offers a two week trial which is more than enough to judge if an email service for $100/year is worth the trouble. 

<!--more-->

<div class="postit-note centered">
<p><strong>Warning:</strong> This will be very boring for most. My personal email setup is a dull matter. It might however be useful for some as it solved some problems for me.</p>
<p>I also include a mini review of <a href="https://basecamp.com">Basecamp</a>'s <a href="https://hey.com">HEY mail service</a>. It wasn't for me in it's whole but it made me think how I use email and triggered a change. This is powerful and I recommend you try it for your self.</p> 
</div>

My initial impressions were great. 

**I loved The Feed and The Paper Trail sections**. This distinctions seems to solve the multiple folders and elaborate rules that dictated my inbox. Just enough delegation.

**Amazing interface**. It is fast and easy to use. No hidden stuff and not many options. I refreshed a bit this website using some bits from HEY. Can you see the sticky note above?

**The screener is very original**. Great idea and I don't understand why anyone hasn't thought of it. You greenlight only the people or services you want in your inbox.

**Merging and renaming email threads is awesome!** I can see the potential there. Multiple threads for the same thing become one package.

**Focus & Reply would be great** if I could use it with my work address. Since HEY doesnot support using your work address with it I haven't tried.

HEY is an opinionated service. It is part of its charm but somethimes it causes some problems.

## FOME

The fear of missing emails. Separating into three different boxes, [The Imbox](https://hey.com/features/the-imbox/), The Feed and [The Paper Trail](https://hey.com/features/paper-trail/) is one of the greatest design choices on the service. It is minimal but at the same time enough.

The problem is that it is based on the email sender without the email context. You select what happens with all the emails from the sender. If the sender is a no-reply email every time, I need the receipt to go to the Paper Trail but the "Your password has been changed act if this was not you" notification to my Inbox.

You can through all the Paper trail emails in your Imbox and triage them later but depending on the situation this might defeat the purpose. 

This system made me anxious that I was missing email. This is the opposite than advertised calm effect where I should now check three Inboxes instead of one.

## Yellow pages

Contacts support is bellow basic. HEY supports only saving email information so you cannot use it as your main address book and there is no way to sync it with your main one. That leaves you with two options.

One is you can avoid dealing with contacts on HEY. This makes core features like the contacts page loose value. This happens because some people have more than one email address they use be it personal, professional and now a HEY trial. If you don't cater to organize those, every email goes to a different contact for the same person so at the end you don't have all of their emails organized.

Your other option is to maintain multiple contact systems. One that is the main one and syncs with your phone and another one for HEY. This is too much work for a service that costs $100/year.

## Identity crisis

HEY does not support other domains or a "send mail as..." identity feature as of right now. 

This is scheduled to change but it will cost more and I cannot buy software with promise of support in the future. 

## What now?

Ok, this new email service isn't for me. Why even bother?

The thing is I liked HEY's approach. It is basically a framework for email. And this can be replicated.

At the same time I am always looking to avoid Gmail's apps on anything but the web. They make  advertisements look like normal emails on mobile. In a rush you open one of those and all of a sudden you look at a super market website instead of your emails. 

I tried to setup Apple mail to work with Gmail but it is a nightmare because of their custom IMAP implementation.

I should be able to find something that both works and can fit my very usual in my opinion requirements.

## Gotta go Fast

So I signed up for a trial on Fastmail. The smaller plan costs $3 per month or $30 for the year as I don't need the custom domain support.

In that price it supports [importing of my work email](https://www.fastmail.com/help/receive/fetchotheremail.html) and [sending emails](https://www.fastmail.com/help/send/identities.html) from it,

Mail syncs with Apple mail perfectly with my work identity and all. I didn't like the Fastmail app a lot and prefer the native one.

Contacts and calendars sync with iOS devices which I use seamlessly and the setup wizard was great. No need for apps. Only CardDAV and CalDAV profiles which are open standards.

On the Windows desktop I use the web interface which is great, fast and awesome.

Already the experience is much better than Gmail for me.

## Saying HEY inside Fastmail

Let's get some feature of HEY into Fastmail.

First **The Feed**. I need all newsletters to go to an IMAP folder. 

Fastmail has support for very powerful filters. More powerful than Gmail. 

A smart way to not maintain a complete list of senders that go to The Feed is to filters for the Unsubsribe Header and move those messages there on arrival. For that folder I set a 60 day purge policy. That means that after 60 days emails in The Feed are deleted. 

We need exceptions though. Basecamp, Github and other services have an Unsubscribe header for notifications.

For those I decided to add them to the contacts and create a contact group for them. Then add an *if not* condition to the above filter that exempts emails from those contacts and delivers them to the Inbox.

I also created the **Paper trail** folder. Everything receipt, travel or transactional I manually drop there. The volumes for that one are not unmanageable. 

Also I created a Later folder for emails that await some action from me before responding that could take a while. 

Now the inbox has the important emails I deal with at the present time. Any new emails come there and when I have time I triage them. This is very easy with all the newsletters out of the way. 

---

After a week I can say I like my workflow better. I urge you to try HEY for a while if you can. It is a new take on email and I believe it is worth exploring.If though you like open standards and traditional powerful email that works use [this link](https://ref.fm/u24239032) to try Fastmail. [This link will give you 10% off your first year and some small discounts for me](https://ref.fm/u24239032).    