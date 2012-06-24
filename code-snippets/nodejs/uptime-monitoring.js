/*jshint node:true, globalstrict:true*/
"use strict";

var pin = require('pin');

pin('http://localhost:8008/')
  .interval(2000)
  .maxDuration(600)
  .up(function (response, info) {
    console.log(response.request.uri.href, info);
  })
  .down(function (error, response, info) {
    console.log(error, response);
  });

