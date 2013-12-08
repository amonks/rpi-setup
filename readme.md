---

layout: default
title: Raspberry Pi Guides
permalink: /index.html

---

# rpi setup

rpi setup is a collection of guides about doing various things that might involve a RaspberryPi. It also includes things I've learned about Jekyll while putting together this package.

The guides assume that you've run `git clone https://github.com/andrewjmonks/rpi-setup.git` in the home directory of your pi.

## structure

One single github repo includes the website, its source files, and the source files for the pi. 

The website is generated from individual markdown files in the `/_posts` folder, into `_site`. If you're in your pi terminal, read the docs with `less ~/rpi-setup/posts/2013-12-6-wifi-at-saic.md`

Pi source files and scripts are in `/src`.

`/assets`, `/_layouts`, `/.gitignore`, `CNAME`, `Gemfile`, `Gemfile.lock`, `_config.yml`, and `readme.md` are used by github to generate the website, which is available at http://endurativemod.es

## credits

Website and guides by [Andrew Monks](http://monks.co)

Code and site hosted on [Github](https://github.com/andrewjmonks/rpi-setup)

released under the [MIT License](/license.html)