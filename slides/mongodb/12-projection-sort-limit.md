
# Projection, Sort, Limit

``` javascript
db.books.
    find({/* all */},
    {title: 1, pages: 1}).
    sort({title: 1}).
    limit(4);
```

