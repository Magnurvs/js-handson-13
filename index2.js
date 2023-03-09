console.log("Que 2");
let count = 0;
(function() {
    if (count === 0) {
        let count = 1;
        console.log(count); // What is logged? :-1
    }
    console.log(count); // What is logged? :-0
})();