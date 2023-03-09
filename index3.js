console.log("Que 3");
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged? :- 3 three times
    }, 1000);
}