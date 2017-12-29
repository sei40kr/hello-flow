#!/bin/sh

# build.sh
# @author Seong Yong-ju ( @sei40kr )

browserify src/foo.js -o build/foo.js -t babelify
browserify src/create-text.js -o build/create-text.js -t babelify
browserify src/total.js -o build/total.js -t babelify
browserify src/length.js -o build/length.js -t babelify
