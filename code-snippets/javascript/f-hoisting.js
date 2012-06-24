/*jshint devel:true globalstrict:true*/
'use strict';
console.log(typeof max);     // 'undefined'
console.log(typeof min);     // 'function'

var max = function (a, b) {
    return a > b ? a : b;
};

console.log(typeof max);     // 'function'

function min(a, b) {
    return a < b ? a : b;
}

