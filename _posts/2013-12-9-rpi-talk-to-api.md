---

layout: default
title: talk to an api from raspberry pi
tags:
- guide
- rpi
group: raspberry-pi

---

#	talk to an api from raspberry pi -- work in progress

I'm pretty into web development, so I'm really excited by using the rpi to connect data from physical sensors to a server.

The [olab](http://olab.io), for example, is considering using a light sensor connected to a raspberry pi in the lab to control the background color of their new webpage. If the lights are off, the background color is dark, if they're on, it's bright, making it easy to see if someone's in the lab.

It's possible to accomplish this by serving the website directly from the pi; but a more robust solution is to set up a proper data-center server listen for messages from your pi.

In this example, I'm going to use a mic hooked up to the pi to record speech and convert it to text using the google traslate API. Then, I'll send that text to a server to display the last thing I've said.

## google translate shell script

	#DaveConroy.com
	#10/29/13
	#stt.sh

	echo "Recording your Speech (Ctrl+C to Transcribe)"
	arecord -D plughw:0,0 -f cd -t wav -d 0 -q -r 16000 | flac - -s -f --best --sample-rate 16000 -o daveconroy.flac;

	echo "Converting Speech to Text..."
	wget -q -U "Mozilla/5.0" --post-file daveconroy.flac --header "Content-Type: audio/x-flac; rate=16000" -O - "http://www.google.com/speech-api/v1/recognize?lang=en-us&client=chromium" | cut -d\" -f12  > stt.txt

	echo "You Said:"
	value=`cat stt.txt`
	echo "$value"