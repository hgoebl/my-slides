/*jshint node:true, devel:true, jquery:true, globalstrict:true, curly:true*/
"use strict";

var jsdom = require("jsdom");

jsdom.env("http://localhost:8008/javascript/index.html",
    //[ 'http://code.jquery.com/jquery-1.7.1.min.js' ],
    [ 'http://localhost:8008/nerdshow/jquery/jquery-1.7.1.min.js' ],
    function (error, window) {
        if (error) {
            throw error;
        }
        window.$('div.slide').find('h1:first').each(function (index) {
            console.log(index, window.$(this).text());
        });
    });
