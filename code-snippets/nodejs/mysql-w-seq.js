/*jshint node:true, globalstrict:true, devel:true, es5:true*/
'use strict';

var mysql = require('mysql'),
    sq = require('seq'),
    client;

client = mysql.createClient({
    user: 'taskbrain',
    password: 'taskbrain'
});

console.log('Program is running');

sq()// usually written as Seq()
    .seq(function useDatabase() {

        client.useDatabase('taskbrain', this);

    })
    .seq(function execQuery(result) {

        client.query(
            "SELECT * FROM usr LIMIT 10",
            this);

    })
    .seq(function showResults(results, fields) {

        results.forEach(function (item) {
            console.log(item);
        });

        this(); // could be simplified, because it is synchronous

    })
    .seq(function closeConnection() {

        client.end(this);

    })
    .seq(function exit() {

        console.log('Program should exit now');
        this();

    })
    .catch(function (err) {

    console.error('error occurred', err);

});
