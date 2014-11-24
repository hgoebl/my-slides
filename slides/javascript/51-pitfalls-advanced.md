
# Pitfall - Numbers

``` javascript
1/10 + 2/10            // 0.30000000000000004
1 / 0                  // Infinity
isFinite(1 / 0)        // false
Math.pow(2, 1023)      // 8.98846567431158e+307
Math.pow(2, 1024)      // Infinity
Number.MAX_VALUE       // 1.7976931348623157e+308
```

 * All Numbers are 64-Bit floating point values
 * Don't expect Exceptions


# Pitfall - Number Parsing

``` javascript
parseInt('077')        // 63   (!) -> octal value
parseInt('080')        // 0    (!) -> parse error
parseInt('080', 10)    // 80
parseInt('80abc', 10)  // 80   (!)
Number('80abc')        // NaN
parseInt('Jason')      // NaN
isNaN(Number('Jason')) // true
```

 * use `parseInt(str, 10 /* radix */)`
 * check if it is really a Number `!isNaN(n)`
 * Don't expect Exceptions

.  <div class="handout">

``` javascript
parseInt('ZZ', 36) === 36 * 36 - 1    // true
Number(36 * 36 - 1).toString(36);     // 'zz'
```

.  </div>


# Pitfall - ASI

 * ASI = Automatic Semicolon Insertion

``` javascript
return
{
   a: true
}

// behaves like ...
return; // = return undefined;
{
   a: true
}; // code not reachable -> garbage collected
```


# Pitfall - forget new

``` javascript
jQuery.Event = function( src, props ) {
  // Allow instantiation without the 'new' keyword
  if ( !(this instanceof jQuery.Event) ) {
    return new jQuery.Event( src, props );
  }

  // ...
};
```


# Other Pitfalls

 * Side-Effects of closures, e.g. creating functions in a loop
 * Enumerating properties - use `hasOwnProperty`
 * `with` - don't ever use it!
 * `eval` - be careful
 * `new Function` - rarly necessary
 * "enhancing" Prototypes of String, Object, Function, ...

