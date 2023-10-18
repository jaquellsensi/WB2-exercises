// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    var pi = Math.PI;
    var area = pi * radius * radius;
    return area;
}

// Example radius
var radius = 5; // Replace this with the desired radius of the circle

// Call the function and store the result in a variable
var circleArea = calculateCircleArea(radius);

// Print the result
console.log("The area of a circle with radius " + radius + " is " + circleArea);
