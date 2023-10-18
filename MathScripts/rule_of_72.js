// Function to calculate the time it takes for an investment to double
function calculateDoublingTime(principal, interestRate, compoundingFrequency) {
    var targetValue = 2 * principal; // Double the initial investment
    var n = compoundingFrequency; // Number of times interest is compounded per year
    var r = interestRate; // Annual interest rate (in decimal form)
    
    // Calculate the time using the compound interest formula
    var t = (Math.log(targetValue / principal) / (n * Math.log(1 + r / n)));
    return t;
}


var principal = 1000; // Initial investment amount
var interestRate = 0.05; // Annual interest rate (5% as a decimal)
var compoundingFrequency = 1; // Interest compounded annually

// Call the function and store the result in a variable
var doublingTime = calculateDoublingTime(principal, interestRate, compoundingFrequency);

// Print the result
console.log("It takes " + doublingTime + " years for the investment to double in value.");
