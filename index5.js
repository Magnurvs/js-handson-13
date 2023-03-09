console.log("Que 5");

function outerFunction() {
    let counter = 0;

    function innerFunction() {
        counter++;
        console.log(counter);
    }

    return innerFunction;
}

const incrementCounter = outerFunction();

incrementCounter(); //  1
incrementCounter(); //  2
incrementCounter(); //  3