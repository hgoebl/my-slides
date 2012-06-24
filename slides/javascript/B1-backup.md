.<div class="slide">

# switch - not like Java!

``` javascript
var i, c = 3,
    f = function() { return 2; };

for (i = 1; i <= 3; ++i) {
  switch (i) {
    case 1:   console.log('1'); break;
    case f(): console.log('2'); break;
    case c:   console.log('3'); break;
    default:  console.log('?'); break;
  }
}
```

.</div><div class="slide">

# Exception Handling (1)

``` javascript
try {
  fn();           // fn is not defined anywhere
}
catch (e) {
  console.log(e); // [ReferenceError: fn is not defined]
  console.log(e.type);     // not_defined
  console.log(e.message);  // fn is not defined
}
finally {
  console.log('finally');
}
```

.</div><div class="slide">

# Exception Handling (2)

``` javascript
throw {
  type: '...',
  message: '...'
};

throw Error('Bei mia is ois kabutt');
```

.</div><div class="slide">

# console: measuring time

``` javascript
var i;
console.time('myHeavyLoop');
for (i = 0; i < 100000; i++) {
  ;
}
console.timeEnd('myHeavyLoop');
// myHeavyLoop: 12ms
```

.</div><div class="slide" data-expert-level="5">

# Pitfall - function in loop

 * Functions are Closures!

``` javascript
var i, nums = [];
for (i = 0; i < 10; i++) {
  nums[i] = function (j) {
    return i + j;
  };
}

nums[0](2); // Prints 12 instead of 2
// example from www.jshint.com/options/
```

.</div><div class="slide" data-expert-level="5">

# Pitfall - function in loop

Solution: copy the value of ``i``

``` javascript
var i, nums = [];
for (i = 0; i < 10; i++) {
  (function (i) {
    nums[i] = function (j) {
      return i + j;
    }
  }(i));
}
// example from www.jshint.com/options/
```

.</div><div class="slide">

# Documentation

 * <http://jashkenas.github.com/docco/> (literate-programming-style documentation generator)
 * <http://code.google.com/p/jsdoc-toolkit/> jsdoc-toolkit - A documentation generator for JavaScript

.</div><div class="slide">

# Content Delivery Networks

 * [Google Ajax Libraries](https://developers.google.com/speed/libraries/)
 * [Microsoft Ajax Content Delivery Network](http://www.asp.net/ajaxlibrary/cdn.ashx)
 * [jQuery CDN](http://code.jquery.com/)
 * [Amazon’s CloudFront CDN](http://aws.amazon.com/cloudfront/)
 * <http://www.cdnjs.com/>
 * Don't use source repositories (svn/...)

.</div><div class="slide">

# Boolean Expressions (2)

``` javascript
function f(o) {
  if (o && o.prop) {
    // use o.prop
  }
}
```

Java is type-safe but more verbose:

``` java
public void f(MyObj o) {
  if (o != null && o.getProp() != null) {
    // use it
  }
}
```

.</div><div class="slide">

# Conclusions (1)

 * JavaScript does not support block scope
 * use single ``var`` statement on top of scope

 * forget about ``with``
 * forget about ``eval``

 * check ``hasOwnProperty`` when doing ``for(e in obj)``

.</div><div class="slide">

# Conclusions (2)

 * use ``===`` and ``!==``, avoid ``==`` and ``!=``

 * be very careful with (omitting) semicolons
 * use a lint program (or an IDE plugin)
 * don't use `new Array` and `new Object`

.</div>
