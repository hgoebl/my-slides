/*jshint node:true globalstrict:true proto:true*/
/*global it,describe*/
"use strict";

var util = require('util'),
    LatLng = require('./inheritance.js').LatLng,
    POI = require('./inheritance.js').POI,
    myHome = new LatLng(47.8239, 12.0946),
    saltys = new POI(47.5872, -122.3777, 'Saltys');

function wrapKey(key) {
    return key === '__proto__' ? '___proto___' : key;
}

function wrapValue(value) {
    switch (typeof value) {
        case 'function':
            return value.toString();
        case 'undefined':
            return undefined;
        case 'number':
        case 'string':
            return value;
        default:
            return '' + value + ' (' + typeof value + ')';
    }
}

function analyzeObj(obj) {
    var result = {}, key;

    for (key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[wrapKey(key)] = wrapValue(obj[key]);
        }
    }
    if (obj.hasOwnProperty('constructor')) {
        result[wrapKey('constructor')] = wrapValue(obj.constructor);
    }

    if (obj.__proto__ !== null && obj.__proto__ !== undefined) {
        result[wrapKey('__proto__')] = analyzeObj(obj.__proto__);
    }
    return result;
}

console.log('myHome');
console.log(util.inspect(analyzeObj(myHome), false, 999, true));

console.log(new Array(80).join('-'));

console.log('saltys');
console.log(util.inspect(analyzeObj(saltys), false, 999, true));
