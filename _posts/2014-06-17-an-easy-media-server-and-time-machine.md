---
layout: post
title: An easy Media Server and Time Machine
date: 2014-06-17 13:27:00.000000000 +03:00
categories:
- Guides
- Projects
tags:
- Automation
- Plex
- Time Machine
---
I hate mess... So I like remote solutions!

One thing that bothers me is the USB cable that I always have connected on my computer.
On it's other end, lies a 1TB Hard Drive that stores my Time Machine backup.

From time to time I stream movies via [Plex](http://plexapp.com/) from the same hard disk.
That's because I don't want to store movies on my low capacity Macbook Air.

Since I got my Chromecast, Plex has gone to the top of my "Useful Software" list as it supports Chromecast and I can stream the Movies without connecting a HDMI cable.

So what I need? A HDD in my network that hosts my media and my backups.

![](/images{{ page.id }}/optimized/1-4.png)

Nice, but not so cheap.

Using a spare very low powered netbook and the Time Machine HDD, I managed to put away these 2 functions from my laptop.

I could also get torrents directly on my netbook. Life would be easier...

_Let's do it!_

# Preparation

## What we will need

- We need something debian-based. Preferably use your old computer or netbook but not your Rasperry Pi as Plex does not support it officialy yet (I think). You can check your chances with [RasPlex](http://www.rasplex.com/) if you feel like it.
  - I used **Ubuntu Server 14.04 LTS 32bit** on an old Lenovo ideapad.
- A large enough Hard Drive. TB has gone pretty cheap lately.
- An afternoon.

## Format the Hard Drive

Put the HDD on OS X and create a big partition for the Time Machine using Disk Utility.

Leave the rest Unallocated.

> Remeber **not** to have spaces on the disk labels. I used **timemachine**and **diskspace**

Next holding `option` click partition from the sidebar and Disable Journaling.
We do this to ensure compatibility on case of restore.

Then on linux format the rest as `ext2`, `ext3` or `ext4`.

You can use [parted](http://www.gnu.org/software/parted/manual/html_chapter/parted_2.html) for that.

# Setup system

Use `blkid` to check your Partiotions UUIDs and note them.
The `sdb` ones are the ones we care about.

```
sudo blkid
/dev/sda1: UUID="dadbbcb0-0680-4633-b6a5-ebea09359478" TYPE="ext2"
/dev/sda5: UUID="PnN6eH-eipf-Rq1w-ddfi-FCf3-w23k-5NDAcE" TYPE="LVM2_member"
/dev/mapper/ideapad--vg-root: UUID="ab0966d5-eba5-4ca2-aeca-62234b4ce71f" TYPE="ext4"
/dev/mapper/ideapad--vg-swap_1: UUID="54745ca7-cb41-432f-aa3e-92ec708248e6" TYPE="swap"
/dev/sdb1: UUID="e14664bf-85bb-4265-99e3-787e454da730" TYPE="ext2"
/dev/sdb3: UUID="744f07e4-2075-34f5-811f-df6b37e2d2a7" LABEL="timemachine" TYPE="hfsplus"
```

Now create the mount points and give them the right permissions.

```
sudo mkdir /media/timemachine /media/tm_backup
sudo mkdir /media/diskspace /media/diskspace/transmission /media/diskspace/completed
sudo mkdir /media/diskspace/incomplete /media/diskspace/torrents
sudo chown -R tsagi:tsagi /media/diskspace/
sudo chown -R tsagi:tsagi /media/timemachine/
```

Add the settings to the end `/etc/fstab` so they mount on startup.

```
UUID=e14664bf-85bb-4265-99e3-787e454da730 /media/diskspace ext2 defaults 0 0
UUID=744f07e4-2075-34f5-811f-df6b37e2d2a7 /media/timemachine hfsplus force,rw 0 0
```

Then reboot.

# Time Machine

## Linux Server

First install Netatalk:

```
sudo apt-get install netatalk
```

Edit /etc/netatalk/afpd.conf with your favorite editor and add the following line at the end (comment out every other line that might be active):

```
- -tcp -noddp -uamlist uams_dhx.so,uams_dhx2_passwd.so -nosavepassword
```

<div>`This will define the afpd server (Netatalk).`</div>

Next make sure your /etc/default/netatalk file shows CNID_METAD_RUN=yes.
This will ensure that all the metadata that is needed by OS X is handled and saved by an extra daemon on the side, too.

Now add the following to `/etc/netatalk/AppleVolumes.default`:

```
/media/timemachine/tm_backup "Time Machine" allow:username cnidscheme:dbd volsizelimit:650000 options:usedots,upriv,tm
```

Adjust the location of the directory and the username to your needs. The example above also limits the size shown to OS X as 650 GB (the number is given in MiB, so it's 650.000 times 1024 in the real world). Also note that the tm option is only option separating a Time Machine capable directory from a regular afp share.

You should also edit the `:DEFAULT` property on`/etc/netatalk/AppleVolumes.default` file to match this:

```
:DEFAULT: cnidscheme:dbd options:upriv,usedots
```

Restart the Netatalk daemon to make sure it uses the newly adjusted configurations:

```
sudo service netatalk restart
```

We are now done configuring the server.

## OS X Client

Open up **Finder** and press `Command + K` to bring up the "Connect to Server" dialog.

Connect to server dialog

Enter **afp://ip_address_of_your_server**, press Enter and select the according share from the list.
Fill in username and password from the user **on the server** (not the one on the Mac) and see if you have access to the share.
If everything works well, continue with the Time Machine preferences.

In the system preferences on your Mac, select Time Machine and click on "Select Disk..."

Select your share from the list, edit the other options like excluded directories and automatic backups to your liking and enjoy this cheap and reliable Time Machine solution!
The first backup might take quite some time, depending on your network and hard drive speed. All the following backups will be incremental and a lot faster.

**Bonus:** you don't even have to manually connect to the server share before a backup. Time Machine will let its magic happen and auto-mount / un-mount the share whenever it is needed. Peace of mind in a box.

_Credits:_ I used **[this](http://pwntr.com/2012/03/03/easy-mac-os-x-lion-10-7-time-machine-backup-using-an-ubuntu-linux-server-11-10-12-04-lts-and-up/)** guide with some changes I made.

Useful links:

[afpd.conf manpage](http://netatalk.sourceforge.net/2.2/htmldocs/afpd.conf.5.html)

[AppleVolumes.default manpage](http://netatalk.sourceforge.net/2.2/htmldocs/AppleVolumes.default.5.html)

# Media Server

What it takes to make the perfect media server for me?

Just a good torrent client and Plex!

Let's get to it!

## Torrents

For the torrent client I just used [Transmission](https://www.transmissionbt.com/). It is more than good and it has a clean remote UI.

![](/images{{ page.id }}/optimized/2-3.png)

First get Transmission:

```
sudo add-apt-repository ppa:transmissionbt/ppa
sudo apt-get update
sudo apt-get install transmission-cli transmission-common transmission-daemon

```

We should add our user to the `debian-transmission` group.

```
sudo usermod -a -G debian-transmission user

```

Remember the directories we created earlier?
Let's give the correct permissions.

```
sudo chmod -R 775 /media/diskspace/transmission

```

Now stop the daemon to configure transmission.

```
sudo service transmission-daemon stop

```

Backup the default settings:

```
cd /etc/transmission-daemon
sudo cp -a settings.json settings.json.default

```

Then create a transmission settings directory in your home folder (example:`/home/user/.config/transmission-daemon`), copy settings.json into it, and change its permissions to make it accessible to transmission-daemon:

```
mkdir /home/user/.config/transmission-daemon
sudo cp -a /etc/transmission-daemon/settings.json transmission-daemon/
sudo chgrp -R debian-transmission /home/user/.config/transmission-daemon
sudo chmod -R 770 /home/user/.config/transmission-daemon

```

Then, remove `/etc/transmission-daemon/settings.json`, create a symbolic link in the `/etc/transmission-daemon` folder, and edit it permissions to make it accessible to Transmission and the user account:

```
cd /etc/transmission-daemon
sudo rm settings.json
sudo ln -s /home/user/.config/transmission-daemon/settings.json settings.json
sudo chgrp -R debian-transmission /etc/transmission-daemon/settings.json
sudo chmod -R 770 /etc/transmission-daemon/settings.json

```

You can now start editing `/home/user/.config/transmission-daemon/settings.json`without worries of losing your settings.

You can copy mine but remember to change your settings and password if they don't agree:

```
{
    "alt-speed-down": 500,
    "alt-speed-enabled": false,
    "alt-speed-time-begin": 540,
    "alt-speed-time-day": 127,
    "alt-speed-time-enabled": false,
    "alt-speed-time-end": 1020,
    "alt-speed-up": 1,
    "bind-address-ipv4": "0.0.0.0",
    "bind-address-ipv6": "::",
    "blocklist-enabled": false,
    "blocklist-updates-enabled": true,
    "blocklist-url": "http://www.example.com/blocklist",
    "cache-size-mb": 4,
    "dht-enabled": true,
    "download-dir": "/media/diskspace/transmission/completed",
    "download-limit": 100,
    "download-limit-enabled": 0,
    "download-queue-enabled": true,
    "download-queue-size": 5,
    "encryption": 2,
    "filter-mode": "show-all",
    "idle-seeding-limit": 30,
    "idle-seeding-limit-enabled": false,
    "incomplete-dir": "/media/diskspace/transmission/incomplete",
    "incomplete-dir-enabled": true,
    "inhibit-desktop-hibernation": false,
    "lazy-bitfield-enabled": true,
    "lpd-enabled": false,
    "main-window-height": 500,
    "main-window-is-maximized": 0,
    "main-window-layout-order": "menu,toolbar,filter,list,statusbar",
    "main-window-width": 467,
    "main-window-x": 50,
    "main-window-y": 50,
    "max-peers-global": 200,
    "message-level": 2,
    "minimal-view": false,
    "open-dialog-dir": "/media/diskspace",
    "open-file-limit": 32,
    "peer-congestion-algorithm": "",
    "peer-id-ttl-hours": 6,
    "peer-limit-global": 240,
    "peer-limit-per-torrent": 60,
    "peer-port": 9071,
    "peer-port-random-high": 9098,
    "peer-port-random-low": 9026,
    "peer-port-random-on-start": true,
    "peer-socket-tos": "default",
    "pex-enabled": true,
    "play-download-complete-sound": true,
    "port-forwarding-enabled": false,
    "preallocation": 1,
    "prefetch-enabled": 1,
    "prompt-before-exit": true,
    "proxy": "",
    "proxy-auth-enabled": false,
    "proxy-auth-password": "",
    "proxy-auth-username": "",
    "proxy-enabled": false,
    "proxy-port": 80,
    "proxy-type": 0,
    "queue-stalled-enabled": true,
    "queue-stalled-minutes": 30,
    "ratio-limit": 1.5000,
    "ratio-limit-enabled": true,
    "rename-partial-files": true,
    "rpc-authentication-required": true,
    "rpc-bind-address": "0.0.0.0",
    "rpc-enabled": true,
    "rpc-password": "{c371b29b1eb8a1164023ef4a13013e7583d8a736E5n9jnT/",
    "rpc-port": 9025,
    "rpc-url": "/transmission/",
    "rpc-username": "tsagi",
    "rpc-whitelist": "127.0.0.1,*.*.*.*",
    "rpc-whitelist-enabled": true,
    "scrape-paused-torrents-enabled": true,
    "script-torrent-done-enabled": false,
    "script-torrent-done-filename": "",
    "seed-queue-enabled": false,
    "seed-queue-size": 10,
    "show-backup-trackers": false,
    "show-desktop-notification": true,
    "show-extra-peer-details": false,
    "show-filterbar": true,
    "show-notification-area-icon": false,
    "show-options-window": true,
    "show-statusbar": true,
    "show-toolbar": true,
    "show-tracker-scrapes": false,
    "sort-mode": "sort-by-name",
    "sort-reversed": false,
    "speed-limit-down": 0,
    "speed-limit-down-enabled": false,
    "speed-limit-up": 1,
    "speed-limit-up-enabled": true,
    "start-added-torrents": true,
    "statusbar-stats": "total-ratio",
    "trash-original-torrent-files": false,
    "umask": 2,
    "upload-limit": 100,
    "upload-limit-enabled": 0,
    "upload-slots-per-torrent": 4,
    "user-has-given-informed-consent": true,
    "utp-enabled": true,
    "watch-dir": "/media/diskspace/transmission/torrents",
    "watch-dir-enabled": true
}

```

Now start the daemon and test the setup heading to`http://your.server.ip.adress:9025/`

```
sudo service transmission-daemon start
```

## Plex

Finaly we need to set up Plex.

Go to [Plex website](https://plex.tv/downloads) and copy the link for the appropriate version for your setup. I got the 32bit Ubuntu version.

Download it and install it.

```
wget http://downloads.plexapp.com/plex-media-server/0.9.9.12.504-3e7f93c/plexmediaserver_0.9.9.12.504-3e7f93c_i386.deb
sudo dpkg -i plexmediaserver_0.9.9.12.504-3e7f93c_i386.deb

```

Next give plex the permissions it needs:

```
sudo gpasswd -a plex tsagi

```

Go to `http://your.server.ip.adress:32400/manage` and point your libraries to the transmission's `completed` directory. It can figure out if you have a series episode or a movie in the directory.

![](/images{{ page.id }}/optimized/4.png)
