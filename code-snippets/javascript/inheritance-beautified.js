/*jshint node:true globalstrict:true*/
"use strict";

function LatLng(lat, lng) {
    this.lat = lat;
    this.lng = lng;
}
LatLng.prototype.toString = function () {
    return 'LatLng: ' + this.lat + ';' + this.lng;
};
LatLng.prototype.getLat = function () {
    return this.lat;
};
LatLng.prototype.getLng = function () {
    return this.lng;
};

function POI(lat, lng, name) {
    LatLng.call(this, lat, lng);
    this.name = name;
}

POI.prototype = new LatLng(); // not the best way!

// correct constructor pointer
POI.prototype.constructor = POI;

// add / overwrite some methods
POI.prototype.toString = function () {
    return 'POI: ' + this.name;
};
POI.prototype.getName = function () {
    return this.name;
};

// node.js stuff
module.exports = {
    LatLng: LatLng,
    POI: POI
};
