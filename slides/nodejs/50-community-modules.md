.<div class="slide">

# Community Modules

 * Entry Points:
   * <https://github.com/joyent/node/wiki/modules>
   * <http://search.npmjs.org/>

<br/>

 * Database drivers
 * Parser
 * Template engines
 * Build and Deploy
 * Async Flow Control
 * ... almost all you can imagine ...

.</div><div class="slide">

# Example: jsdom

```javascript
var jsdom = require("jsdom");
jsdom.env("http://localhost:8008/javascript/",
    [ 'http://code.jquery.com/jquery-1.7.1.js' ],
    function (error, window) {
        if (error) { throw error; }
        window.$('div.slide').
                find('h1:first').
                each(function (index) {
            console.log(index, window.$(this).text());
        });
    });
```

.</div>
