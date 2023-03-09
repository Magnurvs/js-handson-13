console.log("Que 4");

function calculateArea(length) {
    function multiplyByBreadth(breadth) {
        return length * breadth;
    }
    return multiplyByBreadth;
}

const areaOfRectangle = calculateArea(5); // pass length as parameter
console.log("area of rectangle " + areaOfRectangle(10)); // pass breadth as parameter to get the area of the rectangle
// output :- 50