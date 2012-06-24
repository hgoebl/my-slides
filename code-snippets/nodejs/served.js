/*jshint node:true, es5:true*/

// from git://github.com/coolaj86/node-examples-js.git

(function () {
  "use strict";

  var connect = require('connect'),
    path = process.cwd(),
    server;

  server = connect.createServer(
    connect.static(path),
    connect.directory(path)
  );

  server.path = path;
  module.exports = server;

  server.listen(7007);
}());
