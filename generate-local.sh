#!/bin/sh

#PRESENTATION="presentation.json"
PRESENTATION="presentation-short.json"
JQUERY="http://localhost:8008/nerdshow/jquery/jquery-1.7.1.min.js"
#JQUERY="http://code.jquery.com/jquery-1.7.1.min.js"
INDEX=slides/index-qr.html
OPTIONS="--jquery=${JQUERY}"

nerdshow-generate slides/javascript/${PRESENTATION} ${OPTIONS}
nerdshow-generate slides/nodejs/${PRESENTATION}     ${OPTIONS}
nerdshow-generate slides/mongodb/${PRESENTATION}    ${OPTIONS}

echo "<html><head><title>Slides</title></head><body>" > ${INDEX}

echo "<a href='javascript/'>JavaScript</a>" >> ${INDEX}
echo "<a href='/nerdshow/rc/?/javascript'><img src='qrcode-javascript.png'/></a>" >> ${INDEX}

echo "<br><br><br><br>" >> ${INDEX}

echo "<a href='nodejs/'>Node.js</a>" >> ${INDEX}
echo "<a href='/nerdshow/rc/?/nodejs'><img src='qrcode-nodejs.png'/></a>" >> ${INDEX}

echo "<br><br><br><br>" >> ${INDEX}

echo "<a href='mongodb/'>MongoDB</a>" >> ${INDEX}
echo "<a href='/nerdshow/rc/?/mongodb'><img src='qrcode-mongodb.png'/></a>" >> ${INDEX}

echo "</body></html>" >> ${INDEX}

. ./generate-qrcodes.sh