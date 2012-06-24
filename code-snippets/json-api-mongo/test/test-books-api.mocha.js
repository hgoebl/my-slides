/*jshint node:true, es5:true, globalstrict:true*/
/*global it, before, after, describe*/
"use strict";

var assert = require('assert'),
    expect = require('expect.js'),
    url = require('url'),
    async = require('async'),
    request = require('request').defaults({
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        followRedirect: false
    }),
    BASE_URL = 'http://localhost:3000',
    MONGO_BOOK_ID = '4fba97190f318c1e73763351';


/**
 * create a new Url.
 * @param {String} path
 * @param {Object} [query] query parameters
 * @return {Object}
 */
function createUri(path, query) {
    var uriObj = url.parse(BASE_URL);

    uriObj.pathname = path;
    uriObj.query = query;
    return url.format(uriObj);
}

function validateBook(book) {
    expect(book).to.be.ok();
    expect(book.authors).to.be.an(Array);
    expect(book._id).to.be.ok();
    expect(book.authors.length).to.be.above(0);
}

function deleteAllBooks(query, done) {
    request({
        method: 'GET',
        uri: createUri('/books', query)
    }, function (error, response, body) {
        if (error) {
            return done(error);
        }

        var json = JSON.parse(body),
            ids;
        if (json.success !== true) {
            return done('body.success not true');
        }

        ids = json.data.map(function (book) {
            return book._id;
        });
        async.forEach(ids, function (id, cb) {
            request({
                method: 'DELETE',
                uri: createUri('/books/' + id)
            }, function (error, response, body) {
                if (error) {
                    cb(error);
                }
                expect(response.statusCode).to.be(200);
                var json = JSON.parse(body);
                expect(json.success).to.be(true);
                cb(null);
            });
        }, done);
    });
}

describe('Get and find books', function() {
    it('GET /books should return all books', function(done) {
        request({
            method: 'GET',
            uri: createUri('/books')
        }, function(error, response, body) {
            if (error) {
                return done(error);
            }

            expect(response.statusCode).to.be(200);
            var json = JSON.parse(body), books, book;
            if (json.success !== true) {
                return done('body.success not true');
            }

            books = json.data;
            expect(books).to.be.an(Array);
            expect(books.length).to.be.above(0);

            book = books[0];
            validateBook(book);
            expect(book.tags).to.be.an(Array);
            done();
        });
    });

    it('GET /books?authors.lastName=McCaw should return 1 book', function(done) {
        request({
            method: 'GET',
            uri: createUri('/books', {'authors.lastName': 'McCaw'})
        }, function(error, response, body) {
            if (error) {
                return done(error);
            }

            expect(response.statusCode).to.be(200);
            var json = JSON.parse(body), books;
            if (json.success !== true) {
                return done('body.success not true');
            }

            books = json.data;
            expect(books).to.be.an(Array);
            expect(books.length).to.be(1);
            expect(books[0].title).to.match(/Web App/);

            done();
        });
    });

    it('GET /books?title=The%20Firm should return 0 books', function(done) {
        request({
            method: 'GET',
            uri: createUri('/books', {'title': 'The Firm'})
        }, function(error, response, body) {
            if (error) {
                return done(error);
            }

            expect(response.statusCode).to.be(200);
            var json = JSON.parse(body), books;
            if (json.success !== true) {
                return done('body.success not true');
            }

            books = json.data;
            expect(books).to.be.an(Array);
            expect(books.length).to.be(0);

            done();
        });
    });

    it('GET /books/{id} should return one book', function(done) {
        request({
            method: 'GET',
            uri: createUri('/books/' + MONGO_BOOK_ID)
        }, function(error, response, body) {
            if (error) {
                return done(error);
            }

            expect(response.statusCode).to.be(200);
            var json = JSON.parse(body), book;
            if (json.success !== true) {
                return done('body.success not true');
            }

            book = json.data;
            expect(book).to.be.ok();
            expect(book.title).to.be('MongoDB in Action');

            done();
        });
    });

    it('GET /books/{not-existent-id} should status 404', function(done) {
        request({
            method: 'GET',
            uri: createUri('/books/cafebabecafebabecafebabe')
        }, function(error, response, body) {
            if (error) {
                return done(error);
            }
            expect(response.statusCode).to.be(404);
            expect(body).to.be('Not Found');
            done();
        });
    });


    it('GET /books/{wrong-formatted-id} should status 404', function(done) {
        request({
            method: 'GET',
            uri: createUri('/books/cafebabe')
        }, function(error, response, body) {
            if (error) {
                return done(error);
            }
            expect(response.statusCode).to.be(404);
            expect(body).to.match(/^Cannot GET/);
            done();
        });
    });

});

describe('Create books', function() {

    var newBook = {
        title: 'ExtJS in Action (Create)',
        authors: [{lastName: 'Garcia', firstName: 'Jesus'}],
        api_test: 'create'
    };

    function cleanUp(done) {
        deleteAllBooks({api_test: newBook.api_test}, done);
    }

    before(cleanUp);

    after(cleanUp);

    it('POST /books should create a new book', function(done) {
        request({
            method: 'POST',
            uri: createUri('/books'),
            json: newBook
        }, function(error, response, body) {
            var json, newId;

            if (error) {
                return done(error);
            }

            json = body;
            if (json.success !== true) {
                return done('body.success not true');
            }

            validateBook(json.data);
            newId = json.data._id;

            request({
                method: 'GET',
                uri: createUri('/books', {title: newBook.title})
            }, function(error, response, body) {
                if (error) {
                    return done(error);
                }
                expect(response.statusCode).to.be(200);
                var book = JSON.parse(body).data[0];
                validateBook(book);
                expect(book._id).to.be(newId);
                done();
            });
        });
    });

    it('POST /books w/ duplicate title should fail', function(done) {
        request({
            method: 'POST',
            uri: createUri('/books'),
            json: { title: 'MongoDB in Action' }
        }, function(error, response, body) {
            var json;

            if (error) {
                return done(error);
            }

            expect(response.statusCode).to.be(200);
            json = body;
            if (json.success !== false) {
                return done('body.success not false');
            }
            expect(json.message).to.be.ok();
            expect(json.message).to.match(/unable/);
            expect(json.error).to.be.a(Object);
            expect(json.error.name).to.be('MongoError');
            expect(json.error.code).to.be(11000);
            done();
        });
    });
});

describe('Update books', function() {

    var newBook = {
        title: 'ExtJS in Action (Update)',
        authors: [{lastName: 'Garcia', firstName: 'Jesus'}],
        api_test: 'update'
    };

    function cleanUp(done) {
        deleteAllBooks({api_test: newBook.api_test}, done);
    }

    before(function (done) {
        cleanUp(function (error) {
            if (error) {
                return done(error);
            }
            request({
                method: 'POST',
                uri: createUri('/books'),
                json: newBook
            }, function(error, response, body) {
                var json;

                if (error) {
                    return done(error);
                }

                expect(response.statusCode).to.be(200);
                json = body;
                if (json.success !== true) {
                    return done('body.success not true');
                }

                validateBook(json.data);
                newBook._id = json.data._id;
                done();
            });
        });
    });

    after(cleanUp);

    it('PUT /books should update an existing book', function(done) {
        newBook.tags = ['JavaScript', 'ExtJS'];
        request({
            method: 'PUT',
            uri: createUri('/books/' + newBook._id),
            json: newBook
        }, function(error, response, body) {
            var json, updatedBook;

            if (error) {
                return done(error);
            }

            expect(response.statusCode).to.be(200);
            json = body;
            if (json.success !== true) {
                return done('body.success not true');
            }

            request({
                method: 'GET',
                uri: createUri('/books/' + newBook._id)
            }, function(error, response, body) {
                if (error) {
                    return done(error);
                }
                var storedBook = JSON.parse(body).data;
                validateBook(storedBook);
                expect(storedBook._id).to.be(newBook._id);
                expect(storedBook.tags).to.eql(newBook.tags);
                done();
            });
        });
    });

});

describe('Delete books', function() {

    var newBook = {
        title: 'ExtJS in Action (Delete)',
        authors: [{lastName: 'Garcia', firstName: 'Jesus'}],
        api_test: 'delete'
    };

    function cleanUp(done) {
        deleteAllBooks({api_test: newBook.api_test}, done);
    }

    before(function (done) {
        cleanUp(function (error) {
            if (error) {
                return done(error);
            }
            request({
                method: 'POST',
                uri: createUri('/books'),
                json: newBook
            }, function(error, response, body) {
                var json;

                if (error) {
                    return done(error);
                }

                expect(response.statusCode).to.be(200);
                json = body;
                if (json.success !== true) {
                    return done('body.success not true');
                }

                validateBook(json.data);
                newBook._id = json.data._id;
                done();
            });
        });
    });

    after(cleanUp);

    it('DELETE /books should remove an existing book', function(done) {
        request({
            method: 'DELETE',
            uri: createUri('/books/' + newBook._id)
        }, function(error, response, body) {
            var json;

            if (error) {
                return done(error);
            }

            expect(response.statusCode).to.be(200);
            json = JSON.parse(body);
            if (json.success !== true) {
                return done('body.success not true');
            }

            request({
                method: 'GET',
                uri: createUri('/books/' + newBook._id)
            }, function(error, response, body) {
                if (error) {
                    return done(error);
                }
                expect(response.statusCode).to.be(404);
                done();
            });
        });
    });

});
