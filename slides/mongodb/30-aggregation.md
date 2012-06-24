.<div class="slide">

# count, distinct, group

``` javascript
db.runCommand({count: 'books',
               query: {published: 2012}});

db.runCommand({distinct: 'books', key:'tags'});

db.runCommand({group: {
    ns: 'books',
    key: { published: true },
    $reduce: function (obj, prev) {
        prev.pages += obj.pages;
    },
    initial: { pages: 0 }
}});
```

.</div>
