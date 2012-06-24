/*jshint node:true, devel:true, globalstrict:true*/
"use strict";

var obj = {
    name: 'Jason Bourne',
    printLater: function () {
        var self = this;

        setTimeout(function () {
            console.log(self.name);
        }, 1000);
    }
};

obj.printLater();
