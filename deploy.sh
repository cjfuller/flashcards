#!/bin/bash

git checkout gh_pages
git merge master
GIT_HASH=`git log -n 1 --format=%h`
git rm app_*.js
npm run-script compile
mv public/js/app_.js ./app_$GIT_HASH.js
cat public/index.html | sed -e "s/js\\/app_.js/\\/app_$GIT_HASH.js/g" > ./index.html
git commit -a -m "Deploy to github pages"
git push -u origin gh-pages
