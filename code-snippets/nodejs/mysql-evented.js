/*jshint node:true, globalstrict:true, devel:true*/
'use strict';

var mysql = require('mysql'),
    client;

client = mysql.createClient({
    user: 'taskbrain',
    password: 'taskbrain'
});

client.on('error', function (err) {
    console.error('error occurred', err);
    process.exit(1);
});

client.useDatabase('taskbrain');
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

        client.end();
        console.log('Program should exit now');
    });

console.log('Program is running');
