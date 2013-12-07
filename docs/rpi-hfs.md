---

layout: default
title: RaspberryPi HFS+
tags: 
- rpi
- guide

---



#	hfs+ support on raspberrypi

I use a 16 gb usb stick to transfer hd movies between my mac and my pi. I couldn't format it fat32 because the 4gb file size limit didn't work for hd movies. I don't use any PCs so I didn't want to have to use NTFS. The best options are installing ext3 on the mac-side or hfs+ on the pi side. I chose to install HFS+ on my Pi. Here's how.

install hfsutils from apt

	sudo apt-get update
	sudo apt-get install hfsutils hfsprogs hfsutils

create mount point for drive

	sudo mkdir /mnt/usbdrive

check drive location:

	ls /dev | grep sd

You should get a list. Mine is
	
	$ ls /dev | grep sd
	sda
	sda1
	sda2

the highest number was plugged in most recently. Mount it with 

	sudo mount /dev/sda2 /mnt/usbdrive

	