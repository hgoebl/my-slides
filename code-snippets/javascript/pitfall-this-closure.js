/*jshint node:true devel:true globalstrict:true*/
"use strict";

var obj = {
    name: 'Jason Bourne',
    printLater: function () {
        var name = this.name;

        setTimeout(function () {
            console.log(name);
        }, 1000);
    }
};

obj.printLater();
