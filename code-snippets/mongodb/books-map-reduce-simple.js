/*jshint globalstrict:true*/
/*global emit, db*/
"use strict";

var map = function () {
        var doc = this;
        doc.tags.forEach(function (tag) {
            emit(tag, { pages: doc.pages });
        });
    },
    reduce = function (key, values) {
        var result = { pages: 0 };
        values.forEach(function (value) {
            result.pages += value.pages;
        });
        return result;
    };

db.books.mapReduce(map, reduce, {out: {inline: 1}});
