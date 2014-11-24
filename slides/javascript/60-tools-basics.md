
# Tools

 * Editors
 * Debugging
 * Quality (Static Code Analyzers)
 * Efficiency (Minification, Concatenation)


# JetBrains IDEs

 * IntelliJ IDEA, WebStorm, PhpStorm
 * very intelligent JavaScript editor
 * Debugger (Chrome, Firefox, Node.js)
 * Syntax Highlighting, Lint-Integration
 * Formatting, Refactoring

<br/>

**Demo?**


# Browser Tools

## Integrated

 * FireFox FireBug Plugin
 * Chrome/Safari WebInspector (Shift+Ctrl+I)
 * IE FireBug lite (or Microsoft Script Debugger)

<br/>

**Demo?**


# JSHint (Static Code Analysis)

``` javascript
/*jshint latedef:true, curly:true*/
a = 'Wombosi';
if (/bos/.test(a))
    a += '!';
var a;
```

<br/><ul class="jshint-errors">
<li><p>Line 4: <code>  a += '!';</code></p><p>Expected '{' and instead saw 'a'.</p></li>
<li><p>Line 5: <code>var a;</code></p><p>'a' was used before it was defined.</p></li>
</ul>


# JSLint global declaration

``` javascript
/*global jQuery*/

(function( $ ){

    // do something with $
    // ($ is local var for global jQuery)
    // BTW jQuery is a property of window

})( jQuery );
```


# JSHint and Alternatives

 * [wro4j](http://code.google.com/p/wro4j/) - Web Resource Optimizer for Java
 * JSHint (<http://www.jshint.com/>)
   * has more (relaxing) options than JSLint
   * more freedom in coding style
 * JSLint (<http://www.jslint.com/>)
   * the original, very strict, fewer options
   * aligns with the book "JavaScript: The Good Parts"
 * [YUI Compressor](http://developer.yahoo.com/yui/compressor/) with special options
 * [Closure Compiler](https://developers.google.com/closure/compiler/) with special options or `gjslint`


# JSHint in Java/Maven

<div style="background-color: #000; color:#fff; font-family: monospace; padding: 0.5em;" class="fs66">
<span style="color: #00ffff">&lt;</span><span style="color: #00ffff">plugin</span><span style="color: #00ffff">&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff">&lt;</span><span style="color: #00ffff">groupId</span><span style="color: #00ffff">&gt;</span>ro.isdc.wro4j<span style="color: #00ffff">&lt;/groupId&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff">&lt;</span><span style="color: #00ffff">artifactId</span><span style="color: #00ffff">&gt;</span>wro4j-maven-plugin<span style="color: #00ffff">&lt;/artifactId&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff">&lt;</span><span style="color: #00ffff">executions</span><span style="color: #00ffff">&gt;&lt;</span><span style="color: #00ffff">execution</span><span style="color: #00ffff">&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff">&lt;</span><span style="color: #00ffff">id</span><span style="color: #00ffff">&gt;</span>wro-lint<span style="color: #00ffff">&lt;/id&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff">&lt;</span><span style="color: #00ffff">phase</span><span style="color: #00ffff">&gt;</span>generate-resources<span style="color: #00ffff">&lt;/phase&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff">&lt;</span><span style="color: #00ffff">goals</span><span style="color: #00ffff">&gt;&lt;</span><span style="color: #00ffff">goal</span><span style="color: #00ffff">&gt;</span><span style="color: #000; background-color: #48F542">jshint</span><span style="color: #00ffff">&lt;/goal&gt;&lt;/goals&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff">&lt;</span><span style="color: #00ffff">configuration</span><span style="color: #00ffff">&gt;</span>...<span style="color: #00ffff">&lt;/configuration&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00ffff">&lt;/execution&gt;&lt;/executions&gt;</span><br>
<span style="color: #00ffff">&lt;/plugin&gt;</span><br>
</div>


# JS\[HL\]int IDE Integration

 * IntelliJ IDEA (or WebStorm or PhpStorm)
   * JSLint and JSHint included
   * Many other very useful JavaScript options
 * Eclipse
   * [JSLint Eclipse Plugin](http://marketplace.eclipse.org/content/jslint-eclipse-plugin)
   * [JSHint Eclipse Plugin](http://github.eclipsesource.com/jshint-eclipse/)
 * NetBeans
   * [JSLint Plugin for NetBeans](http://plugins.netbeans.org/plugin/40893/jslint)
   * Has a very viable JavaScript Editor and Options

