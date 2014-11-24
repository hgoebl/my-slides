
# Socket.IO

 * WebSocket
 * Adobe Flash Socket
 * AJAX long polling
 * AJAX multipart streaming
 * Forever Iframe
 * JSONP Polling



# WebSocket Request

```http
GET ws://localhost:8008/socket.io/1/websocket/ ↵
   →   16691598151823705646 HTTP/1.1
Origin: http://localhost:8008
Connection: Upgrade
Host: localhost:8008
Sec-WebSocket-Key: 5qE8eKPepP/xWhWnr2Mjqg==
Upgrade: websocket
Sec-WebSocket-Version: 13
```



# WebSocket Response

```http
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Accept: RDaVahzV8dztrUzeJ9WXC5NesG8=
```



# IO - Server

``` javascript
var io = require('socket.io').listen(8118);

io.sockets.on('connection', function (socket) {
  socket.on('new-message', function (data) {
    console.log('arrived:', data, 'from:', socket.id);
    socket.broadcast.emit('new-message', data);
  });
});
```

<span class="fs66" style="color: #aaa">simplified - see code-snippets/nodejs/socket-io-server.js</span>



# IO - Client

``` javascript
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io.connect();
  socket.on('new-message', function (data) {
    console.log('message arrived', data);
    $('#messages').append($('<li>').text(data));
  });
  $('#send').click(function () {
    socket.emit('new-message', $('#msg').val());
  });
</script>
```

<span class="fs66" style="color: #aaa">simplified - see code-snippets/nodejs/socket-io-client.html</span>

.  <div class="handout">

http://psitsmike.com/2011/09/node-js-and-socket-io-chat-tutorial/
http://www.zachstronaut.com/posts/2011/08/17/node-socket-io-curious.html
http://www.catonmat.net/blog/nodejs-modules-socketio/

.  </div>

