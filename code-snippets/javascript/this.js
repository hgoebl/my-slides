/*jshint node:true, devel:true globalstrict:true, strict:false*/
// does not work with "use strict";

var obj1 = {
        name: 'Bourne',
        getName: function () {
            return this.name;
        }
    },
    obj2 = {
        name: 'Wombosi'
    },
    getName = obj1.getName;

obj1.getName();     // Bourne
getName.call(obj2); // Wombosi
getName();          // undefined
