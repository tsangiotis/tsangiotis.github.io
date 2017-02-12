---
layout: post
title: Spark Core, First thoughts
date: 2014-01-02 11:00:00.000000000 +02:00
categories:
- Opinion
tags:
- IoT
---

I just got my hands on my long waited [Spark Core](http://tsagi.me/spark.io)!

It is a tiny Arduino board with a built in WiFi module. Besides that and the obvious possibilities of the Core, there is an [API](http://tsagi.me/docs.spark.io) making it possible for the Core to talk to the internet.

<!--more-->

Let's say I want to check the status of the Hackerspace of Patras (0 or 1).

This simple bash script that runs on my computer does just that:

```
#!/bin/bash

while true; do
  sleep 5
  st=$(curl -s http://www.p-space.gr/status/)
  echo "$st"
  if(( "$st" == "0")); then
    echo "P-Space is closed!"
  else
    echo "P-Space is open"
  fi

curl  https://api.spark.io/v1/devices/DEVICE_ID_GOES_HERE/status \        -d access_token=ACCESS_TOKEN_GOES_HERE -d args="$st"done

```

What it does is to check the status and send it to the core with a request.The most important line is the curl command. That makes the request to the core.

Let's put some code on our Core too!

```
int status(String args) {
  int status;
  if(args == "1"){
    status=1;
    digitalWrite(D7,HIGH);
    digitalWrite(D6,LOW);
  }
  else{
    status=0;
    digitalWrite(D6,HIGH);
    digitalWrite(D7,LOW);
    }

  return status;
}

void setup() {
  pinMode(D7,OUTPUT);
  pinMode(D6,OUTPUT);
  Spark.function("status", status);
}

void loop() {

}

```

This one sets pins `D6`, `D7` as outputs and makes the function `status` available to the cloud!

See it in action:

That makes everything easier! No need to start an HTTP server on the arduino (you could if you wanted).

It looks amazing for a device so small! Don't you think?
