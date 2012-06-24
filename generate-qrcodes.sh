#!/bin/sh

QRENCODE="qrencode -s 4 -m 3"
IPADDR="192.168.43.137"
HTDOCS="slides"

${QRENCODE} -o ${HTDOCS}/qrcode-javascript.png "http://${IPADDR}:8008/nerdshow/rc/remote.html?/javascript"
${QRENCODE} -o ${HTDOCS}/qrcode-nodejs.png "http://${IPADDR}:8008/nerdshow/rc/remote.html?/nodejs"
${QRENCODE} -o ${HTDOCS}/qrcode-mongodb.png "http://${IPADDR}:8008/nerdshow/rc/remote.html?/mongodb"
