
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

