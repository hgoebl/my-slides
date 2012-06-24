/*jshint node:true, es5:true, globalstrict:true*/
"use strict";

var Db = require('mongodb').Db,
    Server = require('mongodb').Server,
    ERR = require('../util/errors.js');

function openDb(config, callback) {
    var db = new Db(
        config.db_name,
        new Server(config.host, config.port, {auto_reconnect:true}, {}));

    db.open(function (error, db) {
        if (error) {
            console.warn('unable to open database; ', config, error);
            callback(ERR.SYSTEM_ERROR);
            return;
        }
        /**
         * Converts a hex-string-objectID to a ObjectID object.
         * @param {String|ObjectID} id
         * @return {ObjectID} the id converted to a <tt>ObjectID</tt>
         */
        db.toObjectID = createToObjectID(db);
        callback(null, db);
    });
}

function createToObjectID(db) {
    var ObjectID = db.bson_serializer.ObjectID;

    return function (id) {
        if (id instanceof ObjectID) {
            return id;
        }
        return ObjectID.createFromHexString(id);
    };
}

module.exports = openDb;
