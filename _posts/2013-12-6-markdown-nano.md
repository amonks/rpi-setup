---

layout: default
title: markdown nano
tags: 
- rpi 
- guide
group: raspberry-pi

---


# add markdown syntax highlighting to nano

I almost always write in [markdown](http://daringfireball.net/projects/markdown/syntax), it's a *super easy* way to add basic markup to text files in a human readable way (unlike `<ugly>html tags</ugly>`).

For example, here's the markdown for the previous paragraph:

	I almost always write in [markdown](http://daringfireball.net/projects/markdown/syntax), it's a *super easy* way to add basic markup to text files in a human readable way (unlike `<ugly>html tags</ugly>`).

Here's how to set up markdown syntax highlighting in nano, the simplest command-line text editor.

## how-to

symlink syntax into proper folder, then enable it

	sudo cp ~/rpi-setup/src/markdown.nanorc /usr/share/nano/markdown.nanorc
	cat /usr/share/nano/markdown.nanorc > ~/.nanorc

from https://github.com/serialhex/nano-highlight