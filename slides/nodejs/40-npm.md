
# npm

  * packet manager for Node
  * by Isaac Z. Schlueter
  * install community packages
  * manage dependencies and versions
  * find packages
  * publish own packages
  * "Little-Maven" for node



# package.json

``` javascript
{ "name": "marked",
  "description": "A markdown parser built for speed",
  "author": "Christopher Jeffrey",
  "version": "0.1.6",
  "main": "./lib/marked.js",
  "bin": { "marked": "./bin/marked" },
  "repository": "git://github.com/chjj/marked.git",
  "keywords": [ "markdown", "markup", "html" ]
}
```

<span class="fs50" style="color: #aaa">Example shortened</span>



# Use npm

```bash
$ npm install mysql
$ npm install -g mocha

$ npm update
$ npm list

$ npm test
$ npm publish
```

.  <div class="handout">

```
npm config set browser chromium-browser
npm docs mocha
npm help
npm help npm
npm list | ls
npm test
npm up | update
npm start
  -> defaults to node server.js
```

.  </div>



# npm registry

<img src="media/search-npmjs-org.png" class="scaled-centered">

