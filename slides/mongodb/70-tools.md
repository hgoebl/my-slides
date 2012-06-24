.<div class="slide">

# Import / Export

```
mongoexport -d test -c books > mongo.books.txt

mongo test --eval "db.books.remove()"

mongoimport -d test -c books --file books.txt

mongoexport -d test -c books --jsonArray > books.json
mongoimport -d test -c books --jsonArray < books.json
```

.</div>
