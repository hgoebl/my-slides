/*jshint devel:true*/
/*global f_does_not_exist*/ // just to tranquilize jshint; it's not defined elsewhere
try {
    f_does_not_exist();
}
catch (e) {
    console.log(e);
    console.log('type', e.type);
    console.log('message', e.message);
}
finally {
    console.log('finally');
}