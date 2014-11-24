
# Assertion Libraries

 * [expect.js](https://github.com/LearnBoost/expect.js) (see example below)
 * [should.js](http://github.com/visionmedia/should.js)
 * [chai](http://chaijs.com/) supports BDD, TDD and assert.* style

<br/>

```javascript
expect(window.r).to.be(undefined);
expect({ a: 'b' }).to.eql({ a: 'b' })
expect(5).to.be.a('number');
expect([]).to.be.an('array');
expect(window).not.to.be.an(Image);
```



# Mock / Spy / Stubs

 * [Sinon.js](http://sinonjs.org/) (see example below)
 * [JSMockito](http://jsmockito.org/)
 * many more, e.g. Google Closure Library goog.testing.*

<br/>

```javascript
var callback = sinon.stub();
callback.withArgs(42).returns(1);
callback.withArgs(1).throws("TypeError");

callback(); // No return value, no exception
callback(42); // Returns 1
callback(1); // Throws TypeError
```


# Demo: mocha / expect.js

<div style="color: #aaa">see code-snippets/javascript/inheritance-test.js</div>

<br/>

 * Install mocha globally with `npm` (see node.js slides):

```
$ npm install mocha -g
```

<br/>

 * Run tests with different options

<br/>

```
$ mocha inheritance-test.js
$ mocha --reporter spec *-test.js
$ mocha --watch --growl *-test.js
```

