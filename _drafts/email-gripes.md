---
layout: post
title: Hey and my email first world problems
date: 2020-06-26
description: 
image: 
categories:
tags:
---

*Warning! This will be completely boring for most. Nobody cares about my personal email setup. NOBODY! However this might be useful for some that just feel an itch with their email setup.*

It all started with [HEY](https://hey.com). There was so much buzz around it and this convinced me to try it.

It has a two weeks trial which is more than enough to judge if an email service for $100/year is worth the trouble. 

My initial impressions were great. Good stuff include:

* The Feed and the Paper trail sections. I love that distinction. No need for multiple folders and elaborate rules
* Amazing interface that works quick and beautifully.
* The screaner feature is very original. 
* Merging and renaming email threads is awesome!
* Focus & Reply would be great if I could use it with my work address.


HEY is very opinionated though. This causes some problems.

### FOME

The fear of missing emails. The separation to three different boxes, [The Imbox](https://hey.com/features/the-imbox/), The Feed and [The Paper Trail](https://hey.com/features/paper-trail/) is one of the greatest design choices for HEY. It is minimal but at the same time enough.

The problem is that it is based on the email sender without the email context. You select what happens with all the emails from the sender. If the sender is a no-reply email every time, I need the receipt to go to the Paper Trail but the "Your password has been changed act if this was not you" notification to my Inbox.

You can through all the Paper trail emails in your Imbox and triage them later but depending on the situation this might defeat the purpose. 

This system made me anxious that I was missing email. This is the opposite than advertised calm effect where I should now check three Inboxes instead of one.

### Yellow pages suck

Another thing for me was contacts support. The contacts feature is bellow basic. It supports only email so you cannot use it as your main address book and there is no way to sync it with your main one. That leaves you with two options.

One is you can avoid dealing with contacts on HEY. This makes core features like the contacts page loose value. This happens because some people have more than one email address they use be it personal, professional and now a HEY trial. If you don't cater to organize those, every email goes to a different contact for the same person so at the end you don't have all of their emails organized.

Your other option is to maintain multiple contact systems. One that is the main one and syncs with your phone and another one for HEY. This is too much work for a service that costs $100/year.

### Identity crisis

HEY does not support other domains or a "send mail as..." identity feature. Everything at the moment must operate through the @hey.com email address.

Most of my emails are of business nature and as I am not a freelancer who can use a personal email address this is a problem for me. 

There is promise for custom domain support in the future but it looks like it will have to be HEY for everyone in the company or nothing. People have different opinions about how they handle email and with HEY being very opinionated it will be pretty difficult and possibly expensive to apply it to a whole organization. 

Support told me that there is no plan for a send mail as... feature so at this point I am certain that HEY will not work for me.

## The Gmail hate

Ok, this new email service isn't for me. Why even bother?

I will explain the situation.
My current email setup involves my gmail address which I could not care less about and my work address which I use most of the time.

The work address is hosted on a web domain provider for the pretty cheap price of $2.5 for 10 mailboxes and unlimited[^1] forwarding addresses and aliasses. We have 2 forwardings so I have not tested that limit. The total cost for Email per year is $30.

[^1]: I have not tested this. We only need two.

Personally I forward my email to my Gmail address and use the send mail as... feature to send mail from my work address. I also set gmail to use my work address by default.

However I hate Gmail's apps both web and mobile app. The mobile is worst as it makes advertisements look like normal emails. In a rush you open one of those and all of a sudden you have at best a stock trading site instead of your emails. 

Also using this setup with another client like Apple mail has a big load of problems starting with weird encodings in non English languages that randomly make email unreadable and finishing with weird tricks to make your work address work.

One I hate and the other one is unusable.

I beared with it until HEY but now I could not go back to this. I've seen better ways.

I should find something that both works and can fit my very usual in my opinion requirements.

## Gotta go Fast
So I signed up for a trial on Fastmail. I have tried it years ago but it felt expensive then. The smaller plan costs $3 because I don't need the domain support.

I imported and set up email fetching for both my personal gmail and my work email. At the same time I added an identity for my work email using the web domain's SMTP so my messages wont end up in Spam due to missconfigured SPF, DKIM, DMARC and DWHATEVER an email address needs to go over the spam wall these days.

We could transition all email operations to fastmail but this would mess with other people setups and would cost $500 per year for this to work for the 10 email users in the company who are perfectly fine using outlook, webmail (RoundCube) or the same Gmail setup I was using. We might reconsider that in the future but for now this is great as is.

Contacts and calendars sync with iOS devices which I use seamlessly and the setup wizard was great. No need for apps. Only CardDAV and CalDAV profiles which are open standards.

Mail syncs with Apple mail. I didn't like the Fastmail app a lot and prefer the native one.

On the Windows desktop I use the web interface which is great, fast and awesome. 

## Saying HEY to Fastmail
I liked some things from HEY and I wanted to bring them with me.

First **The Feed**. I need all newsletters to go to an IMAP folder. 

Fastmail has support for very powerful filters. More powerful than Gmail's. 

A smart way to not maintain a complete list of senders that go to The Feed is to filters for the Unsubsribe Header and move those messages there on arrival. For that folder I set a 60 day purge policy. That means that after 60 days emails in The Feed are deleted. 

We need exceptions though. Basecamp, Github and other services have an Unsubscribe header for notifications.

For those I decided to add them to the contacts and create a contact group for them. Then add an if not condition to the above filter that checks if the sender is in a contacts group or in the contacts at all.

I also created the **Paper trail** folder. Everything receipt, travel or order related I manually drop in there. The volumes for that one are not unmanageable. 

Also I created a Later folder for emails that I await some action from me before responding that could take a while. 

Now the inbox has the important emails I deal with at the present time and those are pinned. Any new emails come there and when I have time I triage them. This is very easy with all the newsletters out of the way. 

Future treats.
Fastmail supports sharing contacts and having shared mailboxes in a team. This is great for support and sales operations. Three people in our team need to share contacts frequently so this is something to look into