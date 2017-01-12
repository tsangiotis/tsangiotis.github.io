---
layout: post
title: Surviving an attack from the Chinese
date: 2017-01-12
description: perispomeni.club was under attack from Chinese internet robots
image: /images/attacked-by-chinese-robots/email.jpg
categories:
- Projects
tags:
- perispomeni.club
- Security
---

Among the ridiculous projects I have had out in the open, the most long running is called [perispomeni.club](http://perispomeni.club). It is a dead simple, tiny linux machine inspired by Paul Ford’s [tilde.club](http://tilde.club). People respectfully use together that machine in their shared quest to learn and build awesome web pages.

However it was a surprise when, one of the users sent me a private email. 
Here I must mention that the pattern you can spot when reading this and my [previous post](/a-pile-of-scam) is purely coincidental.

>**From** [bob](http://perispomeni.club/~bob/)<br>
>**Subject:** Strange connection or only my imagination?<br>
Hey Tasos<br>
I have noticed a very strange connection to your server from various ip addres which are also listed in block ip for previous abouse pages you should check:<br>
121.18.238.104<br>
59.63.188.3<br>
Both are from china, they connect to your server port on 22 but strangely they do not show up as user.<br>
Cheers

As one might notice, this is not good. I should dig in.

The worst case scenario is someone getting access to the root account of the server. If that had already happened I would be better off nuking the server.

First I ran the `who` command to checkout if there are active sessions/users which returned only my session/me. If root was among the online users, I would possibly be in deep trouble. But everything was fine. Now let's checkout if root was online recently. The fact that bob saw these IPs connected at port 22 indicates ssh sessions. With the `last` command we can check out last logged in users. If root was connected recently and did not bother to wipe out it's tracks, it would show up here.

```
$ last
tsangiot pts/4        athedsl-399048.h Sun Jan  8 00:11   still logged in   
tsangiot pts/3        snf-696309.vm.ok Sun Jan  8 00:09 - 00:12  (00:02)    
tsangiot pts/2        athedsl-399048.h Sat Jan  7 23:29   still logged in   
bob      pts/2        host17.186-125-6 Sat Jan  7 22:15 - 22:24  (00:09)    
bob      pts/2        host17.186-125-6 Sat Jan  7 21:39 - 22:14  (00:35)    
bob      pts/2        host17.186-125-6 Sat Jan  7 20:56 - 21:39  (00:42)    
bob      pts/3        host17.186-125-6 Sat Jan  7 13:51 - 14:06  (00:15)    
bob      pts/2        host70.186-125-4 Sat Jan  7 12:53 - 15:13  (02:19)    
...
```

Only me and bob today. Hi bob by the way!

Ok now there is a chance the attacker wiped himself from the logs. If that is the case, we are dealing with someone who managed to crack a very long password and is not reckless. In another situation I would like to meet the person who designed the program to do that because this looks like an automated thing.

I need to see which IP addresses are connected on the server and particularly on port 22 to make sure I am alone on the server.

To do that we can run a long netstat command:

```
$ netstat -tn 2>/dev/null | grep :22 | awk '{print $5}' | cut -d: -f1 | sort | uniq -c | sort -nr | head
```

This is multiple commands piped together.

### 1. netstat -tn 2>/dev/null

Uses `netstat` to list all network connections, ins and outs.

1. -n – Display numeric only, don’t resolve into name.
2. -t – Display only TCP connections.

### 2. grep :22

Only display the IP address that connected to server on port 22.

### 3. awk ‘{print $5}’

Uses `awk` to display the 5th field only.

### 4. cut -d: -f1

Uses `cut` to extract the content.

1. -d – Character immediately following the -d option is use as delimiter, default is tab.
1. -f – Specifies a field list, separated by a delimiter.

### 5. sort | uniq -c | sort -nr

Sort the list, group it and sort it again in reverse order.

*A more detailed explanation of this command lies [here](https://www.mkyong.com/linux/list-all-ip-addresses-connected-to-your-server/).*

Finally:
```
$ netstat -tn 2>/dev/null | grep :22 | awk '{print $5}' | cut -d: -f1 | sort | uniq -c | sort -nr | head
1 hooray.my.ip.address
```

And yes I am alone here. Which means that even if someone else got access to the server he/she is not here anymore.

Then it struck me that people are connected on port 22 even if they *try* to login. They are not connected to the system but to pass through the ssh authentication they have to connect somehow to the server. So in the event of a bruteforce ssh attack there would be many attempts per minute to guess the password of the root account.

Perispomeni is an Ubuntu server so login attempts are stored on `/var/log/auth.log`. Let's search that for the IPs in question.


```
$ sudo cat /var/log/auth.log|grep "121.18.238.104"
...
Jan  7 22:23:17 perispomeni sshd[3580]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=121.18.238.104  user=root
Jan  7 22:23:19 perispomeni sshd[3580]: Failed password for root from 121.18.238.104 port 36575 ssh2
Jan  7 22:23:25 perispomeni sshd[3580]: message repeated 2 times: [ Failed password for root from 121.18.238.104 port 36575 ssh2]
Jan  7 22:23:25 perispomeni sshd[3580]: Received disconnect from 121.18.238.104: 11:  [preauth]
Jan  7 22:23:25 perispomeni sshd[3580]: PAM 2 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=121.18.238.104  user=root
```

Ok it is clear that someone tries to brute force into the server. These are failed login attempts from a lot of ports. I new little about this stuff when I first became the admin of that club but now I am wiser. Now I am a man with a plan.

I could disable ssh for the root user. However I am afraid that if I mess things up I would need the ability to login from root and A mechanism is needed where a repeated failure to login

https://www.digitalocean.com/community/tutorials/how-to-protect-ssh-with-fail2ban-on-ubuntu-14-04
