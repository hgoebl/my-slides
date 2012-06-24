/*jshint node:true, globalstrict:true*/
'use strict';

// classic JavaScript
(function (global) {
    var someLocalData = {};
    function privateHelper() {}
    global.tool = function () {
        // use privateHelper
        // access someLocalData
    };
}(window));

// visible: only window.tool


// node.js Module
var someLocalData = {};
function privateHelper() {}
function mytool() {
    // use privateHelper
    // access someLocalData
}
exports.tool = mytool;
