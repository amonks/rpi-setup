---

layout: default

---


# add markdown syntax highlighting to nano

symlink syntax into proper folder, then enable it

	sudo ln -s ~/rpi-setup/src/markdown.nanorc /usr/share/nano/markdown.nanorc
	cat /usr/share/nano/markdown.nanorc > ~/.nanorc

from https://github.com/serialhex/nano-highlight