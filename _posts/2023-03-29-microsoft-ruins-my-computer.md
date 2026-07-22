---
layout: post
title: "Microsoft ruins my computer"
date: 2023-03-29
categories:
- Fix
- Windows
- Opinion
---

![](/assets/images/posts/microsoft-ruins-my-computer/01-large_img_0026.jpg)

I had performed one clean install of Windows since 2018. Since then I didn’t have any particular problems until last week when my laptop started acting up…

I figured some driver is corrupted. A format is past due for that champ anyways. Let’s start over. Easy peasy lemon squeezy. Too much lemon though.

I procceded with the recommended ways to make a windows install drive. Took my backups and everything. The works. I installed, removed the drive and grabbed an aspirin in case of headaces with multiple input methods.

However I couldn’t get far. Apparently a Microsoft account is required these days. At this point my guard was down. I was still at the office at 20:00, tired and figured what the heck I will sign in.

> ***“That username looks like it belongs to another organization. Try signing in again or start over with a different account”***
>
> *The Windows install wizard (remember wizards?)*

I couldn’t figure out what this means. For the love of me, it didn’t compute. So I turned to [official support](https://learn.microsoft.com/en-us/mem/autopilot/known-issues#that-username-looks-like-it-belongs-to-another-organization-try-signing-in-again-or-start-over-with-a-different-account).

After some registry dives I figured that my [device](https://www.lenovo.com/gr/el/laptops/thinkpad/t-series/ThinkPad-T480/p/22TP2TT4800 "Link: https://www.lenovo.com/gr/el/laptops/thinkpad/t-series/ThinkPad-T480/p/22TP2TT4800") which I bought brand new directly from Lenovo 5 years ago is setup for the domain *soulfresh.com.au*. I blame some IT guy in Australia mistyping a serial number in their company deploy configuration or something. Don’t care about the particulars. I am angry that I cannot get out of it.

That means my work account cannot be setup. Same for a local account. So my expensive computer is essentially useless.

Having the device essentially bricked I decided to install Linux to work the next day. After years off Linux for Desktop the experience for a working professional who is not a programmer or an academic was a constant fight. If this is the price of freedom it is too expensive.

Next day after having called Lenovo and gotten nowhere I decided to find out how to avoid the Microsoft account completely which was the initial intention. I found out about <a href="https://www.theverge.com/2022/7/1/23191794/windows-11-install-microsoft-account-tpm-restrictions-rufus" target="_blank" title="Link: https://www.theverge.com/2022/7/1/23191794/windows-11-install-microsoft-account-tpm-restrictions-rufus">Rufus</a> and the ability to do what I want and all went smoothly.

At this point I am furious and realized why everyone hates Microsoft as a necessary evil company. However I am glad it is over and I have some thoughts.

Windows can do everything in computerland and the alternatives are not reasonable. The accounting software is on Windows. The CAD software is on Windows. Excel is on Windows. You can have Linux on Windows nowadays. What other OS can do all that?

Apparently we are not paying for Windows enough. Microsoft is putting ads everywhere while at the same time keeping tabs on us through a Microsoft Account.

Putting insult to injury the performance is not going up or even stay constant. They just released a video where they are bragging for their chat app starting up in 10 seconds and for less placeholders when scrolling through messages.\

I hope the Windows team finds their step towards a leaner, faster, simpler product.

Until then I will just act annoyed until someone at Microsoft notices. You can send them this article.\
