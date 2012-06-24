/*jshint es5:true*/
/*global db, ObjectId*/

db.books.update({title: /Good Parts/},
                {$inc: {pages: 3}});

db.books.update({title: /in Action/},
    {$set: {publisher: 'Manning'}},
    false, true);

db.books.update({publisher: {$exists: false}},
    {$set: {publisher: "O'Reilly"}},
    false, true);

db.books.update({},
    {$addToSet: {tags: 'Computer'}},
    false, true);

db.books.update({},
    {$pull: {tags: 'Computer'}},
    false, true);
