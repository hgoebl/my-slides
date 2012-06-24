/*jshint node:true, globalstrict:true, es5:true, devel:true*/
'use strict';

var io,
    express = require('express'),
    app = express.createServer();

app.use(express['static'](__dirname));

io = require('socket.io').listen(app);

app.listen(8118);

io.set('transports', ['websocket']);
io.set('log level', 2);

io.sockets.on('connection', function (socket) {
    console.log('Socket connected! id:', socket.id);

    socket.on('new-message', function (data) {
        console.log('new-message arrived:', data, 'from:', socket.id);

        socket.broadcast.emit('new-message', data);
    });
});
