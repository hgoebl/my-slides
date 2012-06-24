/*jshint es5:true*/
/*global db, ObjectId*/
var projection = {title: 1, pages: 1};

db.books.find().count();
db.books.count();

db.books.
    find({}, projection).
    sort({title: 1}).
    limit(4);

db.books.find({title: 'JavaScript Patterns'});

db.books.find({title: /^MongoDB/}, projection);

db.books.find({authors: {$size: 2} });

db.books.find({'authors.lastName': 'Katz'}, projection);

db.books.find({
    $or: [
        {'authors.lastName': 'Katz'},
        {'authors.lastName': 'McCaw'}
    ]}, projection);

db.books.find({'authors.lastName': {$in: ['Katz', 'McCaw']} }, projection);

db.books.find({tags: 'Programming'}, projection).sort({pages: 1});

db.books.find({tags: {$all: ['Programming', 'JavaScript']}}, projection);

db.books.find({'authors.lastName': {$in: ['Katz', 'McCaw']} }, projection).explain();

db.books.findOne({_id: ObjectId("4fba97190f318c1e73763353")}, projection);
