/*jshint devel:true*/
/*global c*/ // just to tranquilize jshint; it's not defined elsewhere

console.log(typeof a);    // 'undefined'
console.log(typeof c);    // 'undefined'

a = 'Wombosi';
console.log(typeof a);    // 'string'

if (false) {
    var a, b;
}

console.log(b); // undefined
console.log(c); // ReferenceError: c is not defined
