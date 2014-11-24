
# Function Declaration (1)

``` javascript
function add(arg1, arg2) {
  var result = arg1 + arg2;
  return result;
}

add(3, 7);               // 10
add('Jason', ' Bourne'); // 'Jason Bourne'
add([1, 3], [7, 5]);     // '1,37,5'
add.length;              // 2
typeof add;              // 'function'
```


# Function Declaration (2)

``` javascript
function add() {
  var i, len, result = 0;
  for (i = 0, len = arguments.length; i < len; ++i) {
    result += arguments[i];
  }
  return result;
}

add(3, 7, 4, 6);         // 20
add.length;              // 0
```


# Function Expression (1)

``` javascript
typeof max;     // 'undefined'
typeof min;     // 'function'

var max = function (a, b) {
  return a > b ? a : b;
};

typeof max;     // 'function'

function min(a, b) { return a < b ? a : b; }
```


# Functions: 1st-Class Objects

``` javascript
function jQuery() { /* ... */ }
jQuery.browser = { /* ... */ };

// used as function
var $info = jQuery('#info');

// used as object (holds ref to trim-function)
jQuery.trim('  hi  ');

// click-function gets a function reference
jQuery('#btnOk').click(function () { /* ... */ });
```


# Scopes

 * function scope
 * global scope
 * don't pollute global namespace!

<br/>
<div style="color: #F20C68; font-size: 120%; line-height: 120%; padding: 1em; background-color: #FAF89B">&ldquo;In JavaScript there's no curly braces local scope; in other words, **blocks don't create scope**.&rdquo;</div>
<div class="fs66" style="color: #888; margin-top: 0.5em">**JavaScript Patterns**, Stoyan Stefanov, O'Reilly, 2010</div>


# Module Pattern

``` javascript
var MYKA = {}; // MYKA = my killer app

MYKA.helper = function () { /* ... */ };

// defining a new module (sub-namespace)
MYKA.module1 = {
  init: function () { /* ... */ },
  reload: function () {}
};

MYKA.module1.Customer = function (){
  // a constructor function
};
```


# IIFE

* Immediately Invoked Function Expression
* anonymous function, executing once, creates new scope

``` javascript
(function() {
  var local; // not visible outside

  function helper() { /* I'm private */ }

  // do something
})();
```

<br/>

``` javascript
(function() { /* ... */ })();
(function() { /* ... */ }());
```

