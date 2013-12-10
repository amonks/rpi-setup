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

Here's a shell script by Dave Conroy that uses alsa te record speech, converts it to flac, sends it to google, and prints the response to a text file.

stt.sh:

	#DaveConroy.com
	#10/29/13
	#stt.sh
	#modified by Andrew Monks

	mkdir -p stt-output

	echo "Recording your Speech (Ctrl+C to Transcribe)"
	arecord -D plughw:0,0 --duration=5 -f cd -t wav -d 0 -q -r 16000 stt-output/stt-recording.wav &
	PID=$!
	# set the duration of the recording
	sleep 5s
	kill $PID
	sleep 1s

	echo "Converting speech to FLAC"
	flac -5 -s -f --best --sample-rate 16000 -o stt-output/stt-recording.flac stt-output/stt-recording.wav

	echo "Converting Speech to Text..."
	wget -q -U "Mozilla/5.0" --post-file stt-output/stt-recording.flac --header "Content-Type: audio/x-flac; rate=16000" -O - "http://www.google.com/speech-api/v1/recognize?lang=en-us&client=chromium" | cut -d\" -f12 > stt-output/stt-text.txt

	echo "You Said:"
	value=`cat stt-output/stt-text.txt`
	echo "$value"

then make it executable

	sudo chmod +x stt.sh

You'll need `flac` installed. Use

	apt-get install flac

## triggering the shell script

We have a way to convert speech to text, but we still need to write a handler that decides when to record, and posts the results to our server. (We also still need a server)

### credits

speech to text script by [dave conroy](http://www.daveconroy.com/turn-raspberry-pi-translator-speech-recognition-playback-60-languages/)