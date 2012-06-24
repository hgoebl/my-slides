/*jshint globalstrict:true, browser:true*/
/*global require, phantom, window, console, jumpToNextSlide*/
"use strict";

var page = require('webpage').create(),
    system = require('system'),
    address, output, size;

if (system.args.length !== 3) {
    console.log('Usage: ' + system.args[0] + ' URL base-filename');
    phantom.exit();
} else {
    address = system.args[1];
    output = system.args[2];

    page.viewportSize = { width:1024, height:768 };

    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit();
        }
        page.injectJs('phantomjs-next-slide.js');
        window.setTimeout(function () {
            var idx = 0,
                slides = page.evaluate(function () {
                var slides = [], i;
                window.$('div.slide').find('h1:first').each(function (index) {
                    slides.push(window.$(this).text());
                });
                return slides;
            });
            console.log(slides.join(', '));

            function renderSlide() {
                var slide = slides[idx];
                console.log('rastering slide ' + idx + ' (' + slide + ')');
                page.render(output + idx + '.png');
                if (idx < slides.length - 1) {
                    page.evaluate(function () {
                        jumpToNextSlide();
                    });
                    ++idx;
                    setTimeout(renderSlide, 300);
                } else {
                    phantom.exit();
                }
            }

            renderSlide();
        }, 2000);
    });
}
