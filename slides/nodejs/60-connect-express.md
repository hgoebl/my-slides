.<div class="slide">

# Connect

.<div class="fs66">

&rdquo;[Connect](http://www.senchalabs.org/connect/) is a middleware framework for node,
shipping with over 18 bundled middleware and a rich selection of
3rd-party middleware.&ldquo;

.</div>

```javascript
var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(function(req, res){
    res.end('hello world\n');
  })
 .listen(3000);
```


.</div><div class="slide">

# Connect Middleware

 * **logger** request logger with custom format support
 * **compress** Gzip compression middleware
 * **basicAuth** basic http authentication
 * **bodyParser** extensible request body parser
 * **cookieParser** cookie parser
 * **session** session management support with bundled MemoryStore
 * **static** streaming static file server supporting Range and more
 * **query** automatic querystring parser, populating req.query
 * ...

.</div><div class="slide">

# express

 * &rdquo;High performance, high class web development for Node.js&ldquo;
 * [express](http://expressjs.com/) extends connect
 * can be used for web applications
 * integration for many template engines, e.g. [jade](http://jade-lang.com/)
 * often combined with [stylus - Expressive, dynamic, robust CSS](http://learnboost.github.com/stylus/) <br/>
   <span class="fs50">(similar to [{less}](http://lesscss.org/) or [Sass](http://sass-lang.com/))</span>
 * Features (among many)
   * Robust routing
   * Redirection helpers
   * Content negotiation

.</div><div class="slide">

# express Example

 * JSON API (~RESTful)
 * uses express/connect
 * Database: MongoDB
 * test with [mocha](http://visionmedia.github.com/mocha/)
 * see code-snippets/json-api-mongo/

.</div><div class="slide">

# GET /books

```javascript
app.get('/books/:bookId([a-f0-9]{24})',
  function (req, res) {
    bookStore.findById(req.params.bookId,
      function (error, book) {
        if (error) {
          res.send({ success:false, error:error});
        } else if (book === null) {
          res.send(404);
        } else {
          res.send({ success:true, data:book});
        }
      });
  });
```

.</div>
