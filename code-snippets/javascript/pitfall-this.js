/*jshint node:true, devel:true globalstrict:true*/
"use strict";

var obj = {
    name: 'Jason Bourne',
    printLater: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    }
};

obj.printLater();
