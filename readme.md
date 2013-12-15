---

layout: default
title: Raspberry Pi Guides
permalink: /index.html

---

# Hi!

This is a collection of guides for things. Mostly related to raspberry pi. My sweet-spot audience at the moment is probably developers (or at least people who know their way around a shell) trying to get started with the Raspberry Pi or find inspiration for projects.

The guides assume that you've run `git clone https://github.com/andrewjmonks/rpi-setup.git` in the home directory of your pi.

## structure

One single github repo includes the website, its source files, and the source files for the pi. 

The website is generated from individual markdown files in the `/_posts` folder, into `_site`. If you're in your pi terminal, read the docs with `less ~/rpi-setup/posts/2013-12-6-wifi-at-saic.md`

Pi source files and scripts are in `/src`.

`/assets`, `/_layouts`, `/.gitignore`, `CNAME`, `Gemfile`, `Gemfile.lock`, `_config.yml`, and `readme.md` are used by github to generate the website, which is available at http://endurativemod.es

## credits

Website and guides by [Andrew Monks](http://monks.co)

built with [jekyll](http://jekyllrb.com) and [bootstrap](http://getbootstrap.com)

Code and site hosted on [Github](https://github.com/andrewjmonks/rpi-setup)

released under the [MIT License](/license)