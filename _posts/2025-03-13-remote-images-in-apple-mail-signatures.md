---
layout: post
title: "Remote images in Apple Mail Signatures"
date: 2025-03-13
---

I recently started testing Apple mail and found it impossible to use a hosted image in my professional signature.\
\
By default, dragging or pasting an image into Apple Mail’s signature editor causes Mail to embed the image (i.e. attach it) to every outgoing email. To use a remote image (so that the logo is loaded from your server rather than sent as an attachment), you must create an HTML signature that references the image via a URL. \
\
Here’s how to fix that:\
\

**Create a Placeholder Signature**

In Mail’s Preferences → Signatures, create a new signature. This gives you a file to work with.

\

**Locate the Signature File**

For non‑iCloud accounts, the signature files are stored in:

~/Library/Mail/Vx/MailData/Signatures/

For iCloud accounts, look in:

~/Library/Mobile Documents/com~apple~mail/Data/MailData/Signatures/\
\

**Edit the Signature File**

Open the appropriate .mailsignature file in a plain text editor. Replace the HTML portion (usually found after the header lines) with your custom HTML. For example:

\

    Content-Transfer-Encoding: 7bit
    Content-Type: text/html; charset=us-ascii
    Message-Id: <...>
    Mime-Version: 1.0 (Mac OS X Mail)

    <body>
      <img src="https://yourserver.com/path/to/logo.png" alt="Company Logo">
      <!-- Add any additional signature text or formatting here -->
    </body>

\
**Lock the File (if needed)**\
For non‑iCloud accounts, lock the file (via Finder’s “Get Info” → check “Locked”) so that Mail doesn’t overwrite your changes.\
\
**Restart Mail & Test**\
Relaunch Apple Mail and select your edited signature when composing a new message. Now, instead of embedding the image as an attachment, the email will include an HTML reference to your remote image. (Note that the recipient’s mail client must load remote images for it to display.)\
\

This method bypasses Mail’s default behavior by using your own HTML signature file. \
\
