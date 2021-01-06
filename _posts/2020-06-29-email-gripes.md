---
layout: post
title: Email gripes
description: 
image: /images/email-gripes/email-gripes-featured.JPG
categories: Personal Opinion
tags: 
---

It all started with [HEY](https://hey.com). There was so much buzz around it. It is made from the company behind Basecamp 3. I use Basecamp and it is great so I decided to try it.

![HEY - Fastmail doodle](/images/{{ page.slug }}/email-gripes-featured.JPG)

It offers a two week trial which is more than enough to judge if an email service for $100/year is worth the trouble. 

<!--more-->

<div class="postit-note">
    <p><strong>Warning:</strong> This will be very boring for most. My personal email setup is a dull matter. It might however be useful for some as it solved some problems for me.</p>
    <p>I also include a mini review of <a href="https://basecamp.com">Basecamp</a>'s <a href="https://hey.com">HEY mail service</a>. It wasn't for me in it's whole but it made me think how I use email and triggered a change. This is powerful and I recommend you try it for your self.</p> 
</div>

My initial impressions were great. 

**I loved The Feed and The Paper Trail sections**. This distinction seems to solve the multiple folders and elaborate rules that dictated my inbox. Just enough delegation.

**Amazing interface**. It is fast and easy to use. No hidden stuff and not many options.

**The screener is very original**. Great idea and I don't understand why anyone hasn't thought of it. You greenlight only the people or services you want in your inbox.

**Merging and renaming email threads is awesome!** I can see the potential there. Multiple threads for the same thing become one package.

**Focus & Reply would be great** if I could use it with my work address. Since HEY doesn't support using your work address with it I haven't tried.

HEY is an opinionated service. It is part of its charm but sometimes it causes some problems.

## FOME

The fear of missing emails. Separating into three different boxes, [The Imbox](https://hey.com/features/the-imbox/), The Feed and [The Paper Trail](https://hey.com/features/paper-trail/) is one of the greatest design choices on the service. It is minimal but at the same time enough.

The problem is that it is based on the email sender without the email context. You select what happens with all the emails from that sender. Myself, I need the receipt to go to the Paper Trail but the *"Your password has been changed act if this was not you"* notification to my Inbox. Sometimes this information comes from the same email address and I can't blame the sender for that.

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

At the same time I am always looking to avoid Gmail's apps on anything but the web. They make  advertisements look like normal emails on mobile. In a rush you open one of those and all of a sudden you look at a grocery store website instead of your emails. 

I tried to setup Apple mail to work with Gmail but it is a nightmare because of their custom IMAP implementation.

I should be able to find something that both works and can fit my very basic in my opinion requirements.

## Gotta go Fast

So I signed up for a trial on [Fastmail](https://ref.fm/u24239032). The standard plan costs $3 per month or $30 for the year as I don't need the custom domain support.

For that price it supports [importing of my work email](https://www.fastmail.com/help/receive/fetchotheremail.html) and [sending emails](https://www.fastmail.com/help/send/identities.html) from it.

I don't fancy the iOS app but Fastmail supports open standards perfectly. It syncs with Apple mail via IMAP and it supports sending from my work address. Contacts and calendars also sync with iOS devices perfectly and setting this up was a breeze.

On the Windows desktop I use the web interface which is awesome and fast.

Already the experience is much better than Gmail for me.

## Saying HEY inside Fastmail

Let's get some features of HEY into Fastmail.

First **The Feed**. I need all newsletters to go to a specific IMAP folder. 

Fastmail has support for very powerful filters. More powerful than Gmail.

HEY uses a list of senders that go to The Feed. As I mentioned this causes some problems and without the screener it would require a lot of work to make that list.

A smarter way is to filters for emails with the `Unsubsribe Header` and move those messages on the Feed folder on arrival. As a bonus, I set a 60 day purge policy for that folder to keep things neat. After two months. The News in Newsletter has expired.

We need to set exceptions though. Basecamp, Github and other services have an Unsubscribe header for notifications but I need them to go to my Inbox.

To combat that I add them to my contacts and to a *Notify* group. Then I exempt their emails from the filter and as a result they meet my Inbox.

For the **Paper trail** I created another folder. All receipts, travel and transactional emails I manually drop there.  

Also I created a Later folder to put emails that I may take some time to respond to. 

Now the inbox has the important emails I deal with at the present time. Any new emails come there and when I have time I triage them. This is very easy with all the newsletters out of the way. 

---

After a week I can say I like my workflow better. 

Before dismissing HEY, keep in mind that it is a new product and many people love it. Expect it to grow into a practical alternative. I urge you to try HEY if you can. I believe its new take on email is worth exploring. It helped me reconsider how I deal with email.

If though you like open standards and traditional powerful email use [this link](https://ref.fm/u24239032) to try Fastmail. [Using it will give you 10% off your first year](https://ref.fm/u24239032) and will clip some cents from my bill.

__Update:__ Despite all of the above, _myself I paid for it_. I believe this new take should be supported and I want to watch it's story evolve. 
