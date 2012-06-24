.<div class="slide">

# Efficiency / Performance

Concatenate and minify js files!

 * [YUI Compressor](http://developer.yahoo.com/yui/compressor/)
 * [UglifyJS](https://github.com/mishoo/UglifyJS)
 * [Closure Compiler](https://developers.google.com/closure/compiler/)
 * [JSMin](http://www.crockford.com/javascript/jsmin.html)
 * For Java Projects: **[wro4j-maven-plugin](http://code.google.com/p/wro4j/wiki/MavenPlugin)**

<br/>

Consider using [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)

<div style="padding-left: 2em; padding-top: 0.5em; color: #888" class="fs66">The Asynchronous Module Definition (AMD) API specifies a mechanism for defining modules such that the module and its dependencies can be asynchronously loaded.</div>

.</div><div class="slide">

# Example: uglify-js

``` javascript
(function (window, undefined) {
    var myString = 'Wombosi';
    if (/bos/.test(myString)) {
        myString += '!';
    }
    if (window.wom === undefined) {
        window.wom = myString;
    }
}(window));
```

``` javascript
(function(e,t){var n="Wombosi";/bos/.test(n) ↵
&&(n+="!"),e.wom===t&&(e.wom=n)})(window);
```

.</div>
