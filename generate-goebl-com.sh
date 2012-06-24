#!/bin/sh

PRESENTATION="presentation.json"
RT=http://hgoebl.github.com/nerdshow/rt
OPTIONS="--nerdshow-folder ${RT} --no-socketio-enabled --no-zoom-enabled"

nerdshow-generate slides/javascript/${PRESENTATION} ${OPTIONS}
nerdshow-generate slides/nodejs/${PRESENTATION}     ${OPTIONS}
nerdshow-generate slides/mongodb/${PRESENTATION}    ${OPTIONS}
