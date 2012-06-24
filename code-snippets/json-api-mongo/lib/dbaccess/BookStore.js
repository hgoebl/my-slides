/*jshint node:true, es5:true, globalstrict:true*/
"use strict";

var ERR = require('../util/errors.js');

function BookStore(dbConnection) {
    this.dbConnection = dbConnection;
}

/**
 * Get the collection of books.
 * @param callback
 */
BookStore.prototype.getCollection = function (callback) {
    this.dbConnection.collection('books', function (error, books) {
        if (error) {
            console.warn('unable to get collection [book]', error);
            callback(ERR.SYSTEM_ERROR);
        }
        else {
            callback(null, books);
        }
    });
};

BookStore.prototype.findById = function (id, callback) {
    var self = this;
    this.getCollection(function (error, books) {
        var _id;

        if (error) {
            callback(error);
            return;
        }
        _id = self.dbConnection.toObjectID(id);
        books.findOne({_id:_id}, function (error, book) {
            if (error) {
                callback(error);
            }
            else {
                callback(null, book);
            }
        });
    });
};

BookStore.prototype.removeById = function (id, callback) {
    var self = this;
    this.getCollection(function (error, books) {
        var _id;

        if (error) {
            callback(error);
            return;
        }
        _id = self.dbConnection.toObjectID(id);
        books.remove({_id:_id}, function (error) {
            if (error) {
                callback(error);
            }
            else {
                callback(null);
            }
        });
    });
};

/**
 * Insert a new book.
 * <br/>
 * The caller must fill fields like 'pa' and maintain access rights.
 * @param {Object} book the book to insert
 * @param {Function} callback will be called with the newly created book (or error)
 */
BookStore.prototype.add = function (book, callback) {
    this.getCollection(function (error, books) {
        if (error) {
            callback(error);
            return;
        }
        book.cTime = new Date();
        books.insert(book, { safe:true }, function (error, result) {
            if (error) {
                callback(error);
            } else {
                callback(null, result[0]);
            }
        });
    });
};

/**
 * Update an existing book.
 * <br/>
 * @param {Object} book the book to update
 * @param {Function} callback will be called with error or null (no result)
 */
BookStore.prototype.update = function (book, callback) {
    var self = this;
    this.getCollection(function (error, books) {
        if (error) {
            callback(error);
            return;
        }
        var _id = self.dbConnection.toObjectID(book._id);
        book.uTime = new Date();
        book._id = _id;
        books.update({ _id: _id }, book, { safe:true }, function (error, result) {
            if (error) {
                callback(error);
            } else if (result !== 1) {
                callback('book not found - could be already deleted');
            } else {
                callback(null);
            }
        });
    });
};

/**
 * Find books based on a query-by-example object.
 * <br/>
 * @param {Object}          search
 * @param {Function}        callback result is an array of books
 */
BookStore.prototype.find = function (search, callback) {
    var self = this;
    this.getCollection(function (error, books) {
        if (error) {
            callback(error); // error already logged
            return;
        }

        books.find(search).toArray(function (error, result) {
            if (error) {
                console.warn('find failed', error);
                callback(ERR.SYSTEM_ERROR);
            }
            else {
                callback(null, result);
            }
        });
    });
};

module.exports = BookStore;