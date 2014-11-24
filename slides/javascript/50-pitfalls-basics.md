
# Pitfalls

<img src="media/danger-sign_w725_h544.jpg" class="scaled-centered">

.  <div class="handout">

 * JavaScript has quite a lot flaws in design
 * Everybody coding JavaScript should know them
 * There are some ways around them

.  </div>


# Pitfall #1 - globals

``` javascript
for (i = 0; i < 10; ++i) { /* ... */ }
```

 * `i` is actually `window.i` (a property of the global object `window`)
 * Everybody can access and manipulate this value

<br/>

### Guide

 * Always use `var` on top of scope (function)
 * use JSLint, JSHint, yui-compressor, NetBeans, IntelliJ, ...
 * Don't use `for(var i=0; ...` - this is misleading


# Pitfall #2 - hoisting

``` javascript
console.log(typeof a);  // 'undefined'
console.log(typeof c);  // 'undefined'

a = 'Wombosi';
console.log(typeof a);  // 'string'

if (false) {
  var a, b;             // (!) unreachable code (!)
}

console.log(b); // undefined
console.log(c); // ReferenceError: c is not defined
```


# Pitfall #3 - type coercion

 * `==` and `!=` do type coercion

``` javascript
7 == "7"     // true
1 == true    // true
```

<br/><br/>

**Solution: use strict equals `===` and `!==` **

``` javascript
7 === "7"     // false
1 === true    // false
```



# Pitfall #4 - this

``` javascript
var obj = {
  name: 'Jason Bourne',
  printLater: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};
obj.printLater(); // logs undefined
```

**this** does not point to `obj`!


# Pitfall #4 - this -> self

``` javascript
var obj = {
  name: 'Jason Bourne',
  printLater: function () {
    var self = this; // sometimes that | me

    setTimeout(function () {
      console.log(self.name);
    }, 1000);
  }
};
obj.printLater(); // logs Jason Bourne
```

