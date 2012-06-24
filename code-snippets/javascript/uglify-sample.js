(function (window, undefined) {
    var myString = 'Wombosi';
    if (/bos/.test(myString)) {
        myString += '!';
    }
    if (window.wom === undefined) {
        window.wom = myString;
    }
}(window));
