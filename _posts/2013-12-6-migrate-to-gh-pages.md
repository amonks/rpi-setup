---

layout: default
title: migrate to gh-pages
tags: 
- web 
- guide

---

# migrate site to github pages

assumes preexisting git repo using master branch

	git checkout -b gh-pages
	echo "example.com" > CNAME
	git add --all .
	git commit -am gh-pages
	git push origin gh-pages

on github, switch default branch to gh-pages

	git push origin :master
	git branch -d master

set dns 

	* 10800 IN A 204.232.175.78
	@ 10800 IN A 204.232.175.78

## credits

http://oli.jp/2011/github-pages-workflow/