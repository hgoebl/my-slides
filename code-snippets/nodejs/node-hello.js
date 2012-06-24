/*jshint node:true, globalstrict:true*/
'use strict';

var http = require('http'), handler, server;

handler = function (req, res) {
    res.writeHead(200);
    res.end('Hello http-World');
};
server = http.createServer(handler);

server.listen(7001); // Port is 7001

setTimeout(function () {
    server.close();
    process.exit(0);
}, 10000);
