---

layout: default
title: install pure data on raspberry pi
tags:
- guide
- rpi
group: raspberry-pi

---

# Mount your mac on your raspberry pi

download and installmost recent raspberrian package from [sourceforge](http://sourceforge.net/projects/pure-data/files/pd-extended/)

	wget http://cl.ly/SqbC/pd-extended_0.43.4~extended1-1~raspbian_wheezy_armhf.deb
	sudo dpkg -i pd-extended_0.43.4~extended1-1~raspbian_wheezy_armhf.deb 
	sudo apt-get -f install