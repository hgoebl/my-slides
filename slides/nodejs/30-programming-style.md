.<div class="slide">

# Asynchronous Programming Style

### Callbacks

 * async methods last parameter is a function (=callback)
 * callbacks functions first parameter is error
 * callbacks functions next parameters carry output data

<br/>

### Event Emitters

 * one ore more subscribers to events
 * call once or many times
 * error situations have special event 'error'

.</div><div class="slide">

# Event Emitter Example

``` javascript
function LineInfoEmitter(options, rules) {
    var self = this; // ...
    function processData(data) { //  ...
        self.emit('lineInfo', lineInfo);
    }
    stdin.on('data', processData);
    stdin.on('end', function () {
        if (incompleteLine) {processData('\n');}
        self.emit('end');
    });
}
util.inherits(LineInfoEmitter, EventEmitter);
```

<div class="fs66" style="color: #888">Full source see [github.com/hgoebl/entintar](https://github.com/hgoebl/entintar/blob/master/lib/LineInfoEmitter.js)</div>

.</div><div class="slide">

# Event Consumer

``` javascript
logstream = fs.createWriteStream(logfile, {flags:'w'});
logstream.on('open', function () {});
logstream.on('error', function (err) {});

lineInfoEmitter.on('lineInfo', function (lineInfo) {
    logstream.write(lineInfo.line + '\n', encoding);
});

lineInfoEmitter.on('end', function () {
    logstream.on('drain', function () {
        logstream.end();
    });
});
```

<div class="fs66" style="color: #888">Full source see [github.com/hgoebl/entintar](https://github.com/hgoebl/entintar/blob/master/lib/logfile-appender.js)</div>

.</div><div class="slide">

# Callback Example

```javascript
function getSomeData(input, callback) {
  db.asyncSelect(input, function(error, result) {
    if (error) {
      callback(error);
      return;
    }
    // transform result, e.g. map/reduce
    callback(null, result);
  });
} ```

.</div><div class="slide">

# Fight the X-mas Tree

``` javascript
client.useDatabase('mydb', function (err) {
  if (err) { ... }
  client.query("SELECT * FROM usr",
    function (err, results, fields) {
      if (err) { ... }
      results.forEach(function (row) {
        console.log(item);
      });
      client.end(function (err) {
        if (err) { ... }
        console.log('done');
      });
    });
});
```

.</div><div class="slide">

# async

``` javascript
async.series([
    function(){ ... },
    function(){ ... }
]);
```

 * for browser and node.js
 * over 20 functions <br/>
   <span class="fs50">e.g. forEachLimit, mapSeries, filter, filterSeries, waterfall</span>
 * see [github.com/caolan/async](https://github.com/caolan/async), `npm install async`

.</div>