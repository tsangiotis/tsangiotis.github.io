---
layout: post
title: Attacked by Chinese robots
date: 2017-01-08
description: perispomeni.club was under attack from Chinese internet robots
image: /images/attacked-by-chinese-robots/email.jpg
categories:
- Projects
tags:
- perispomeni.club
- Security
---

Among the ridiculous projects I have out in the open, the most long running is called [perispomeni.club](http://perispomeni.club). perispomeni.club is a simple, tiny linux machine inspired by Paul Ford’s [tilde.club](http://tilde.club). People respectfully use together that machine in their shared quest to build awesome web pages.

Yesterday, one of the users sent me an email.

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

First I ran the `who` command to checkout if there are active sessions/users which returned only my session/me. If root was online I would possibly be in deep trouble. But everything was fine. Now let's checkout if root was online recently. The fact that bob saw these IPs connected at port 22 indicates ssh sessions. With the `last` command we can check out last logged in users. If root was connected recently and did not bother to wipe out it's tracks, it would show up here.

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

Ok now there is a chance the attacker wiped himself from logs or tries to do something else.

I need to see which IP addresses are connected on the server and particularly on port 22.

To do that we can run a long netstat command:

```
$ netstat -tn 2>/dev/null | grep :22a | awk '{print $5}' | cut -d: -f1 | sort | uniq -c | sort -nr | head
```
https://www.mkyong.com/linux/list-all-ip-addresses-connected-to-your-server/


```
$ sudo cat /var/log/auth.log|grep "121.18.238.104"
...
Jan  7 22:23:17 perispomeni sshd[3580]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=121.18.238.104  user=root
Jan  7 22:23:19 perispomeni sshd[3580]: Failed password for root from 121.18.238.104 port 36575 ssh2
Jan  7 22:23:25 perispomeni sshd[3580]: message repeated 2 times: [ Failed password for root from 121.18.238.104 port 36575 ssh2]
Jan  7 22:23:25 perispomeni sshd[3580]: Received disconnect from 121.18.238.104: 11:  [preauth]
Jan  7 22:23:25 perispomeni sshd[3580]: PAM 2 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=121.18.238.104  user=root
```

https://www.digitalocean.com/community/tutorials/how-to-protect-ssh-with-fail2ban-on-ubuntu-14-04
