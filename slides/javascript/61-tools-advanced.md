.<div class="slide">

# Debugging Proxies

 * [Charles](http://www.charlesproxy.com) <br/>
   <span class="fs50">HTTP proxy, monitor, Reverse Proxy; enables a developer to view HTTP/HTTPS traffic</span>
 * [Fiddler](http://www.fiddler2.com/fiddler2/version.asp) Web Debugging Proxy

.</div><div class="slide">

# jsFiddle (Example)

<div style="background: url('media/jsfiddle-example.png') no-repeat center center; height: 100%"></div>

.</div><div class="slide">

# jsFiddle

.  <div style="background: url('media/jsfiddle-logo.png') no-repeat right top; height: 100%">

 * <http://jsfiddle.net/>
 * JsFiddle is a playground for web developers
 * JavaScript, HTML, CSS
 * Ideal for submitting bugs / request help
 * You can share and embed a fiddle:
   * <http://jsfiddle.net/Ua93g/1/>
   * ``<iframe src="http://jsfiddle.net/..."/>``

.  </div>

.</div><div class="slide">

# console

Poor man's debugger :-;

<br/>

``` javascript
var a = [1, 9], b = {name: 'Bourne'};

console.log('a', a, 'b', b);
// a [ 1, 9 ] b { name: 'Bourne' }

console.error('No more beer');
```

.  <div class="handout">

Links
 * DailyJS - Mastering Console Logging <http://dailyjs.com/2012/02/02/console/>
 * Mozilla Developer Network / console <https://developer.mozilla.org/en/DOM/console>

.  </div>

.</div><div class="slide">

# console: old browsers

 * Not available in miserable browsers (IE <= 8)

``` javascript
if (typeof console === 'undefined') {
  (function(global) {
    var nop = function(){};
    global.console = {
      log: nop, info: nop, error: nop,
      dir: nop, time: nop, timeEnd: nop
    };
  }(window));
}
```

.</div>

