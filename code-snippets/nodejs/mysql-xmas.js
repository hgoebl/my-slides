/*jshint node:true, globalstrict:true, devel:true*/
'use strict';

var mysql = require('mysql'),
    client;

client = mysql.createClient({
    user: 'taskbrain',
    password: 'taskbrain'
});

client.useDatabase('taskbrain', function (err) {
    if (err) {
        console.error('error using database', err);
        throw err;
    }

    client.query(
        "SELECT * FROM usr LIMIT 10",
        function (err, results, fields) {
            if (err) {
                console.error('error in query', err);
                throw err;
            }

            results.forEach(function (item) {
                console.log(item);
            });

            client.end(function (err) {
                if (err) {
                    console.error('error in client.end', err);
                    throw err;
                }
                console.log('Program should exit now');
            });
        });
});

console.log('Program is running');
