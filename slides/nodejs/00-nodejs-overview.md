.<div class="slide">

# Node.js

## An Overview

### Heinrich Göbl

#### www.goebl.com

.</div><div class="slide" style="">

# About me

.<table><tr><td>

 * Heinrich Göbl
 * IT-Freelancer (Architecture, Software-Development)
 * Focus on Java EE
 * <span style="color: #277633; font-weight: bold">&ldquo;Node.js rocks!&rdquo;</span>

.</td><td style="padding-left: 1em">

<img src="media/hgoebl-480x480.jpg" class="scaled-centered">

.</td></tr></table>

.</div><div class="slide">

# What is Node?

  * a platform
  * built on Chrome's JavaScript V8 runtime

<br/>**for**<br/><br/>

  * easily building
  * fast, scalable
  * network applications.

.</div><div class="slide">

# What is Node?

 * Uses an event-driven,
 * non-blocking I/O model
 * that makes it lightweight and efficient,

<br/>**perfect for**<br/><br/>

 * data-intensive
 * soft-real-time applications
 * that run across distributed devices.

.</div><div class="slide">

# And ...

 * Server-Side JavaScript
 * Based on Google V8 JS-Engine and libev + libeio
 * Asynchronous Programming Style
 * Single-Threaded, Evented Execution scales well
 * Same Programming Language for Client and Server
 * Linux, MacOS, Windows

.</div><div class="slide">

# Typical Uses

 * (Soft) Real-Time Web Applications
 * Highly Scalable Services
 * Network Applications
 * Server Part for WebSockets
 * RESTful APIs (with JSON)
 * Streaming Data
 * Command Line (for JS-Developers)

.   <div style="color: #aaa" class="fs50">

See also: <http://nodeguide.com/convincing_the_boss.html>

.   </div>

.   <div class="handout">

## Other facts/infos:

 * Created by Ryan Dahl in 2009
 * Now first man is Isaac Z. Schlueter
 * A trademark of [Joyent](http://www.joyent.com/)
 * thousands of modules available
 * vibrant community
 * Sometimes compared with Ruby’s Event Machine or Python’s Twisted
   * but presents the event loop as a language construct instead of as a library

.   </div>

.</div><div class="slide">

# REPL (Read-Eval-Print-Loop)

 * Start node w/o a script name, just `node`
 * `.help` -> help
 * `.break` -> escape from multiline command
 * _&lt;Ctrl&gt;+&lt;D&gt;_ or `.exit` -> exit
 * see some global objects: `process`
 * `_` is a handle for the last evaluation result

<br/>

**Demo!?**

.</div><div class="slide">

# Hello World

``` javascript
console.log('Hello stdout-World');
```

``` javascript
var http = require('http'), handler, server;

handler = function (req, res) {
    res.writeHead(200);
    res.end('Hello http-World');
};
server = http.createServer(handler);
server.listen(7001); // Port is 7001
```

.</div>
