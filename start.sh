#!/bin/bash

npm install
npm install git+https://github.com/wylie/recess.git#home -g
bower install
sudo gem install sass
grunt build
grunt server
