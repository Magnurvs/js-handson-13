console.log("Que7");
var a = 10;
var x = (function() {
    var a = 15;
    return function() {
        console.log(a);
    };
})();
x();