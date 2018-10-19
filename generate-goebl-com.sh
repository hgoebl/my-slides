#!/bin/sh

PRESENTATION="presentation.json"
RT=https://hgoebl.github.io/nerdshow/rt/0.4.0
OPTIONS="--nerdshow-folder ${RT} --no-socketio-enabled --no-zoom-enabled"

nerdshow-generate slides/javascript/${PRESENTATION} ${OPTIONS}
nerdshow-generate slides/nodejs/${PRESENTATION}     ${OPTIONS}
nerdshow-generate slides/mongodb/${PRESENTATION}    ${OPTIONS}
