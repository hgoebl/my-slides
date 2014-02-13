#!/bin/bash

DEST=../my-slides@gh-pages
RT=http://hgoebl.github.io/nerdshow/rt

# generate slides for gh-pages and copy to branch
nerdshow-generate slides/javascript/presentation.json --nerdshow-folder $RT --no-socketio-enabled --no-zoom-enabled
nerdshow-generate slides/mongodb/presentation.json --nerdshow-folder $RT --no-socketio-enabled --no-zoom-enabled
nerdshow-generate slides/nodejs/presentation.json --nerdshow-folder $RT --no-socketio-enabled --no-zoom-enabled

cp -ru slides/* $DEST/
