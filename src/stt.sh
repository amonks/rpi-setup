#DaveConroy.com
#10/29/13
#stt.sh
#modified by Andrew Monks

LOOPCOUNT=10
mkdir -p stt-output

time="10s"

for i in `seq 1 $LOOPCOUNT`;
do
	echo "Recording your Speech ($time seconds)"
	arecord -D plughw:0,0  -f cd -t wav -d 0 -q -r 16000 stt-output/stt-recording-$i.wav &
	PID=$!
	#set duration of recording
	sleep $time
	kill $PID
	echo "End recording"
	sleep 1s

	echo "Converting speech to FLAC"
	flac -5 -s -f --best --sample-rate 16000 -o stt-output/stt-recording-$i.flac stt-output/stt-recording-$i.wav

	echo "Converting Speech to Text..."
	wget -q -U "Mozilla/5.0" --post-file stt-output/stt-recording-$i.flac --header "Content-Type: audio/x-flac; rate=16000" -O - "http://www.google.com/speech-api/v1/recognize?lang=en-us&client=chromium" | cut -d\" -f12 > stt-output/stt-text-$i.txt

	echo "You Said:"
	value=`cat stt-output/stt-text-$i.txt`
	echo "$value"

	echo "put to server"
	url="http://gentle-inlet-8461.herokuapp.com/newtext/$value"
	echo "$url"
	wget -qO- "$url" &> /dev/null
done

echo "I'm done"