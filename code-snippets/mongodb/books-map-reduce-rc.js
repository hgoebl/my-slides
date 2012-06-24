/*jshint globalstrict:true*/
/*global emit, db, printjson*/
"use strict";

var runOptions = {
    mapReduce: 'books',
    map: function () {
        var doc = this;
        doc.tags.forEach(function (tag) {
            emit(tag, { count: 1, pages: doc.pages });
        });
    },
    reduce: function (key, values) {
        var result = { count: 0, pages: 0 };
        values.forEach(function (value) {
            result.count += value.count;
            result.pages += value.pages;
        });
        return result;
    },
    out: {
        inline: 1
    }
};

var out = db.runCommand(runOptions);

printjson(out.results);
