---

layout: default
title: markdown nano
tags: 
- rpi 
- guide

---


# add markdown syntax highlighting to nano

symlink syntax into proper folder, then enable it

	sudo cp ~/rpi-setup/src/markdown.nanorc /usr/share/nano/markdown.nanorc
	cat /usr/share/nano/markdown.nanorc > ~/.nanorc

from https://github.com/serialhex/nano-highlight