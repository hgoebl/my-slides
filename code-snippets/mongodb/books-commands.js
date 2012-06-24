/*jshint es5:true*/
/*global db, ObjectId*/

db.runCommand({count: 'books'});

db.runCommand({distinct: 'books', key: 'tags'});

db.runCommand({distinct: 'books', key: 'tags', query: {title: /JavaScript/}});

db.runCommand({group: {
    ns: 'books',
    key: { published: true },
    cond: { pages: {$exists: true} },
    $reduce: function (obj, prev) {
        prev.pages += obj.pages;
    },
    initial: { pages: 0 }
}});

// or easier in mongo shell:
db.books.group({
    key: { published: true },
    cond: { pages: {$exists: true} },
    $reduce: function (obj, prev) {
        prev.pages += obj.pages;
    },
    initial: { pages: 0 }
});

db.runCommand({group: {
    ns: 'books',
    key: { published: true },
    $reduce: function (obj, prev) {
        prev.titles.push(obj.title);
    },
    initial: { titles: [] }
}});

