---
layout: post
title: "Install LOGO SoftComfort 8.4.1 on MacOS"
date: 2025-07-30
---

I splurged and got the prestigious Siemens LogoSoftComfort 8.4.1 DVD as my old V8.0 copy was only installing on Windows due to changes and restrictions making no sense. Here is the domination of Windows for all of you Unix freaks. Old things still work.\
\
I received an actual DVD in 2025 - which is also the license. Upon gazing on it, and digging up a computer with a DVD reader from storage, memories of glory played through my head:\
\

<a href="https://world.hey.com/tasos/9b85b4ed/blobs/eyJfcmFpbHMiOnsiZGF0YSI6MjIwODg4NDg0OSwicHVyIjoiYmxvYl9pZCJ9fQ--6c676058f856527719d7c2633623fa9e12e9e2f32fe29c9de5deec0b5758c4f5/smartstart.jpg?disposition=attachment" download="smartstart.jpg" data-click-proxy-target="lightbox_link_blob_2208884849" title="Download smartstart.jpg"><img src="/assets/images/posts/install-logo-softcomfort-8-4-1-on-macos/01-smartstart.jpg" alt="smartstart.jpg" /></a>

<a href="https://world.hey.com/tasos/9b85b4ed/blobs/eyJfcmFpbHMiOnsiZGF0YSI6MjIwODkwNDI5NywicHVyIjoiYmxvYl9pZCJ9fQ--6bda2d3f3e5f7c1540804d9f66be13171f4da0c2c2a7b905a4d0a247254e0b08/5e4f10275dcb1fb211d4a8b4f1bda236.png?disposition=attachment" download="5e4f10275dcb1fb211d4a8b4f1bda236.png" data-click-proxy-target="lightbox_link_blob_2208904297" title="Download 5e4f10275dcb1fb211d4a8b4f1bda236.png"><img src="/assets/images/posts/install-logo-softcomfort-8-4-1-on-macos/02-5e4f10275dcb1fb211d4a8b4f1bda236.png" alt="5e4f10275dcb1fb211d4a8b4f1bda236.png" /></a>

\
Anyways I ripped the dvd into an ISO and got working. You might thing this would be a stroll in the park but it is not. It is quite difficult and idiotic.\
\
People at Siemens market this as a MacOS and Linux ready solution but they have not tested it ever. Forums online are indicative to that.\
\
Forums are from automation specialists who hold Siemens to a high standard and assume there is some logic to this software design and installer. **But this installer shall never be used!**\
\
What you need: \
\

- The DVD files placed to a location we refer to as \<logo-files\> from now on.
- [Amazon Coretto 11 JDK](https://corretto.aws/downloads/latest/amazon-corretto-11-x64-macos-jdk.pkg) (x64 build even if you are on ARM) ,

\
You might be tempted to make the install work. You don't have to.\
\
Open your terminal and do this:\
\

    ➜  ~ xattr -r -d com.apple.quarantine <logo-files>/Mac
    ➜  ~ cp -R <logo-files>/Mac /Applications/LOGOComfort_V8.4
    ➜  ~ chmod +x /Applications/LOGOComfort_V8.4/LOGOComfort.app/Contents/MacOS/LOGOComfort
    ➜  ~ nano /Applications/LOGOComfort_V8.4/LOGOComfort.app/Contents/Info.plist

\
In the text editor in front of you change the following:\
\

    <key>jre_path</key>
    <string></string>

\
to\
\

    <key>jre_path</key>
    <string>/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home/</string>

\
This makes your software run with the specific JAVA.\
\
If you want the LogoWebEditor you will need to make some other arrangements:\
\
Install the software from the \<logo-files\>/Tools/LOGO! Web Editor/Installer. \
\
The thing will not start. You have to edit a script file.\
\
\

    ➜  ~ nano /Applications/lwe.app/Contents/MacOS/executable

\
Here the system implies a jdkhome inside the lwe.app. There is no such thing. Add the bold thing bellow the non-bold thing.\
\

    ...
    if [ -n "$jdkhome" -a \! -d "$jdkhome" -a -d "$progdir/../jre" ]; then
        # #74333: permit jdkhome to be defined as relative to app dir
        jdkhome="$progdir/../jre"
    fi
            
    jdkhome="/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home/"
       

\

This is a note for future me and the tired Siemens traveler out there.\
\
