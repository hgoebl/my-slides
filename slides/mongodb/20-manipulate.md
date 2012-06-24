.<div class="slide">

# Update

``` javascript
db.books.update({title: /Good Parts/},
                {$inc: {pages: 3}});

db.books.update({title: /in Action/},
    {$set: {publisher: 'Manning'}},
    false, true);

db.books.update({},
    {$addToSet: {tags: 'Programming'}},
    false, true);
```

.</div><div class="slide">

# Delete

``` javascript
db.books.remove({_id: mybook._id});

db.books.remove({tags: 'Cooking'});

db.books.remove(); // truncate col
```
.   <div class="handout">

``` javascript
db.books.remove({/* ... */}, {$atomic:true});
// blocking!
```

.   </div>

.</div>
