/*jshint node:true globalstrict:true*/
/*global it,describe*/
"use strict";

var
    expect = require('expect.js'),
    LatLng = require('./inheritance.js').LatLng,
    POI = require('./inheritance.js').POI;

function expectFloat(exactValue, value, tolerance) {
    tolerance = tolerance || 0.00001;
    expect(value).to.be.within(exactValue - tolerance, exactValue + tolerance);
}

describe('LatLng', function () {
    var myHome = new LatLng(47.8239, 12.0946);

    describe('LatLng prototype', function () {
        it('should contain some methods', function () {
            var fn = LatLng.prototype;
            expect(fn.getLat).to.be.a('function');
            expect(fn.getLng).to.be.a('function');
            expect(fn.toString).to.be.a('function');
            expect(fn.getName).not.to.be.a('function');
        });
        it('should have correct constructor', function () {
            expect(myHome.constructor).to.be(LatLng);
        });
    });
    describe('#constructor', function () {
        it('should create objects of type LatLng', function () {
            expect(myHome).to.be.a(LatLng);
        });
        it('should store longitude and latitude', function () {
            expectFloat(47.8239, myHome.getLat());
            expectFloat(12.0946, myHome.getLng());
        });
    });
    describe('#toString', function () {
        it('should output coordinates', function () {
            expect(myHome.toString()).to.be('LatLng: 47.8239;12.0946');
        });
    });
    describe('an instance of LatLng', function () {
        it('should contain some methods', function () {
            expect(myHome.getLat).to.be.a('function');
            expect(myHome.getLng).to.be.a('function');
            expect(myHome.toString).to.be.a('function');
            expect(myHome.getName).not.to.be.a('function');
        });
        it('should have correct constructor', function () {
            expect(myHome.constructor).to.be(LatLng);
        });
    });
});

describe('POI', function () {
    var saltys = new POI(47.5872, -122.3777, 'Saltys');

    describe('POI prototype', function () {
        it('should contain some methods', function () {
            var fn = POI.prototype;
            expect(fn.getLat).to.be.a('function');
            expect(fn.getLng).to.be.a('function');
            expect(fn.toString).to.be.a('function');
            expect(fn.getName).to.be.a('function');
        });
        it('should have correct constructor POI', function () {
            expect(saltys.constructor).to.be(POI);
        });
    });
    describe('#constructor', function () {
        it('should create objects of type LatLng and POI', function () {
            expect(saltys).to.be.a(LatLng);
            expect(saltys).to.be.a(POI);
        });
        it('should store longitude and latitude', function () {
            expectFloat(47.5872, saltys.getLat());
            expectFloat(-122.3777, saltys.getLng());
        });
    });
    describe('#toString', function () {
        it('should output name', function () {
            expect(saltys.toString()).to.be('POI: Saltys');
        });
    });
    describe('#getName', function () {
        it('should return name', function () {
            expect(saltys.getName()).to.be('Saltys');
        });
    });
    describe('an instance of POI', function () {
        it('should contain some methods', function () {
            expect(saltys.getLat).to.be.a('function');
            expect(saltys.getLng).to.be.a('function');
            expect(saltys.toString).to.be.a('function');
            expect(saltys.getName).to.be.a('function');
        });
        it('should have correct constructor', function () {
            expect(saltys.constructor).to.be(POI);
        });
    });
});

