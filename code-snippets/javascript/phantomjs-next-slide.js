function jumpToNextSlide() {
    "use strict";
    var currentSlide = jumpToNextSlide.currentSlide || 1;

    ++currentSlide;
    window.$(document).trigger('jump-sub', { slide: currentSlide });

    jumpToNextSlide.currentSlide = currentSlide;
}
