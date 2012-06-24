/*jshint node:true, es5:true, globalstrict:true*/
"use strict";

var express = require('express'),
    config = require('./config.js'),
    openDb = require('./lib/dbaccess/DbConnection.js'),
    BookStore = require('./lib/dbaccess/BookStore.js'),
    bookStore = null,
    app = module.exports = express.createServer();

// Configuration
app.configure('all', function () {
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'T7is6@:!Hoa=' }));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

app.error(function (err, req, res, next) {
    res.json({ success: false, message: err.message }, 500);
});

function checkSession(req, res, next) {
    next();
}

app.get('/books/:bookId([a-f0-9]{24})', checkSession, function (req, res) {
    console.log('GET /books/' + req.params.bookId);
    bookStore.findById(req.params.bookId, function (error, book) {
        if (error) {
            res.send({
                success: false,
                message: 'unable to read/find book ' + req.params.bookId,
                error: error
            });
        } else if (book === null) {
            res.send(404);
        } else {
            res.send({
                success: true,
                data: book
            });
        }
    });
});

app.get('/books', checkSession, function (req, res) {
    var query = req.query;
    console.log('GET /books', query);

    bookStore.find(query, function (error, books) {
        if (error) {
            res.send({ success: false, message: error });
        } else {
            res.send({ success: true, data: books });
        }
    });
});

app.post('/books', checkSession, function (req, res) {
    console.log('POST /books', req.body);
    var newDoc = req.body;

    bookStore.add(newDoc, function (error, result) {
        if (error) {
            res.send({
                success: false,
                message: 'unable to insert book',
                error: error
            });
        } else {
            res.send({ success: true, data: result });
        }
    });
});

app.put('/books/:bookId([a-f0-9]{24})', checkSession, function (req, res) {
    console.log('PUT /books/' + req.params.bookId, req.body);
    var book = req.body;

    bookStore.update(book, function (error, result) {
        if (error) {
            res.send({
                success: false,
                message: 'unable to update book',
                error: error
            });
        } else {
            res.send({ success: true, data: result });
        }
    });
});

app.delete('/books/:bookId([a-f0-9]{24})', checkSession, function (req, res) {
    console.log('DELETE /books/' + req.params.bookId);
    bookStore.removeById(req.params.bookId, function (error, book) {
        if (error) {
            res.send({
                success: false,
                message: 'unable to read/find book ' + req.params.bookId,
                error: error
            });
        } else {
            res.send({ success: true, data: book });
        }
    });
});

openDb(config.mongo, function (error, dbCon) {
    if (error) {
        console.warn('cannot start server w/o db-connection');
        process.exit(1);
    }
    bookStore = new BookStore(dbCon);

    app.listen(config.app.port || 3000);
    console.log('Express server listening on port %d in %s mode',
        app.address().port, app.settings.env);

    process.on('exit', function () {
        console.warn('exiting');
        dbCon.close(function (error) {
            if (error) {
                console.warn('error closing database; ', error);
            } else {
                console.log('closing database');
            }
        });
    });
});
