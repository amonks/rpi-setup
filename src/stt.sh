#DaveConroy.com
#10/29/13
#stt.sh
#modified by Andrew Monks

mkdir -p stt-output

echo "Recording your Speech (Ctrl+C to Transcribe)"
arecord -D plughw:0,0 --duration=5 -f cd -t wav -d 0 -q -r 16000 | flac - -s -f --best --sample-rate 16000 -o stt-output/stt-recording.flac &
PID=$!
sleep 5s
kill $PID
sleep 1s

echo "Converting Speech to Text..."
wget -q -U "Mozilla/5.0" --post-file stt-output/stt-recording.flac --header "Content-Type: audio/x-flac; rate=16000" -O - "http://www.google.com/speech-api/v1/recognize?lang=en-us&client=chromium" | cut -d\" -f12 > stt-output/stt-text.txt

echo "You Said:"
value=`cat stt-output/stt-text.txt`
echo "$value"
