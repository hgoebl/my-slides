/*jshint devel:true, globalstrict:true*/
"use strict";

var i,
    c = 3,
    f = function () {
        return 2;
    };

for (i = 1; i <= 3; ++i) {
    switch (i) {
        case 1:
            console.log('1');
            break;
        case f():
            console.log('2');
            break;
        case c:
            console.log('3');
            break;
        default:
            console.log('?');
            break;
    }
}

