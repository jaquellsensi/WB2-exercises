let cents = 99;

let quarters = (Math.trunc(cents/25)); 
console.log("Give the customer "+ quarters + " quarters");
cents = (cents % 25);
console.log("Remainder: " + (cents));


let dimes = (Math.trunc(cents/10)); 
console.log("Give the customer " + dimes + " dimes");
cents = (cents % 10);
console.log("remainder: " + cents);

let nickles = (Math.trunc(cents / 5));
console.log("Give the customer " + nickles + " nickels");
cents = cents % 5;
console.log("remainder: " + cents);

console.log("Give the customer " + cents + " pennies");