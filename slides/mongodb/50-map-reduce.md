.<div class="slide">

# Map-Reduce

 * batch processing of data
 * aggregation operations
 * replacement for `GROUP BY` in SQL
 * invoked via a database command:

<br/>

``` javascript
db.runCommand({ mapreduce: 'collection_name',
    map: my_map_function,
    reduce: my_reduce_function /*, ...*/});
```

.</div><div class="slide">

# Sample Document

``` javascript
{ "title": "MongoDB in Action",
  "authors": [
    { "lastName": "Banker",
      "firstName": "Kyle" }
  ],
  "tags": [ "NoSQL", "Database", "Programming" ],
  "pages": 311
}
```

.</div><div class="slide">

# map function

 * analyze one document (bound to `this`)
 * emit(key, object_with_aggregated_values)

<br/>

``` javascript
var map = function () {
  var doc = this;
  doc.tags.forEach(function (tag) {
    emit(tag, { pages: doc.pages });
  });
};
```

.</div><div class="slide">

# reduce function

 * aggregate many emits to one
 * created output must be structured like input

<br/>

``` javascript
var reduce = function (key, values) {
    var result = { pages: 0 };
    values.forEach(function (value) {
        result.pages += value.pages;
    });
    return result;
};
```

.</div><div class="slide">

# Map-Reduce Example

``` javascript
var map = function () {
        var doc = this;
        doc.tags.forEach(function (tag) {
            emit(tag, { pages: doc.pages });
        });
    }, reduce = function (key, values) {
        var result = { pages: 0 };
        values.forEach(function (value) {
            result.pages += value.pages;
        });
        return result;
    };
db.books.mapReduce(map, reduce, {out: {inline: 1}});
```

.</div>
