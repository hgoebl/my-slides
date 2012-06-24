/*jshint es5:true*/
/*global db*/
db.books.ensureIndex({"title": 1}, {unique: true});

db.books.ensureIndex({"authors.lastName": 1});

db.books.ensureIndex({"tags": 1});

db.books.getIndexes();

// db.books.dropIndex('title_1');
