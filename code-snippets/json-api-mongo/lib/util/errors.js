/*jshint node:true, es5:true, globalstrict:true*/
"use strict";

var ERR;

function err(code, text) {
    return {
        code: code,
        message: text
    };
}

ERR = {
    INVALID_NICKNAME: err(1001, 'Nickname is invalid. It must have 1 - 63 characters (a-z, 0-9, _.-)'),
    INVALID_PASSWORD: err(1002, 'Password is wrong. It must have 6 - 63 characters'),
    LOGIN_FAILED: err(1003, 'User does not exist or the password is wrong'),
    INVALID_SESSION: err(1004, 'Not logged in or session expired'),
    REC_NOT_UPDATED: err(2000, 'The record was not updated/found'),
    SYSTEM_ERROR: err(5000, 'A technical problem occurred')
};

for (var mnemo in ERR) {
    if (Object.prototype.hasOwnProperty.call(ERR, mnemo)) {
        ERR[mnemo].type = mnemo; // I don't comment it - it's a puzzle ;-)
    }
}

module.exports = ERR;
