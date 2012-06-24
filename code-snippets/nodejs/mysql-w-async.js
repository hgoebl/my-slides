/*jshint node:true, globalstrict:true, devel:true*/
'use strict';

var mysql = require('mysql'),
    async = require('async'),
    client;

client = mysql.createClient({
    user: 'taskbrain',
    password: 'taskbrain'
});

console.log('Program is running');

async.waterfall([
    function useDatabase(callback) {

        client.useDatabase('taskbrain', callback);

    },
    function execQuery(result, callback) {

        client.query(
            "SELECT * FROM usr LIMIT 10",
            callback);

    },
    function showResults(results, fields, callback) {

        results.forEach(function (item) {
            console.log(item);
        });

        callback();
    },
    function closeConnection(callback) {

        client.end();
        callback();

    }
]);

console.log('Program should exit now');
