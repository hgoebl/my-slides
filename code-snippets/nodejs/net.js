/*jshint node:true, globalstrict:true*/
"use strict";

var net = require('net');

net.createServer(function (stream) {
    // stream.setEncoding('utf8');
    stream.write('hello\r\n');

    stream.on('end', function () {
        stream.end('goodbye\r\n');
    });

    // stream.pipe(stream);

    stream.on('data', function (data) {
        if (data.indexOf('\u0003') >= 0) {
            stream.end('goodbye\r\n');
        } else {
            stream.write(data);
        }
    });
}).listen(7000);
