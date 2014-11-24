
# Modules

Definition (**add.js**)
``` javascript
function add(a, b) {
  return a + b;
}
exports.add = add;
```

Consumption (**calc.js**)
``` javascript
var add = require('./add.js').add;

console.log('4 + 5 =', add(4, 5));
```



# Local/Module Scope

### Classic JavaScript

``` javascript
(function (global) {
    var someLocalData = {};
    function privateHelper() {}
    global.tool = function () {
        // use privateHelper
        // access someLocalData
    };
}(window));
```

<br/>
<div class="fs66" style="color: #888">Or use a Module Loader ([AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), ...)</div>



# Local/Module Scope

### The Node Way

``` javascript
var someLocalData = {};

function privateHelper() {}

function mytool() {
    // use privateHelper
    // access someLocalData
}

exports.tool = mytool;
```



# Synchronous vs. Asynchronous

``` javascript
// synchronous (waiting ...)
var result = db.query("select * from tab");
// after some time:
result.forEach(/* use result */);
```

<br/>

``` javascript
// asynchronous
db.query("select * from tab", function (result) {
    result.forEach(/* use result */);
});
// proceeding w/o waiting
```



# Async Style Advantages

 * Small memory footprint
 * Spend less time waiting for I/O ("non-blocking")
 * No threading (single thread)
 * Scales well for particular applications
 * JavaScript is a good choice (functions are first-class objects)

