

//1. Capitalize Strings
//Write a function that capitalizes the first letter of each string argument it receives.

function capitalize(input) {
    return input.filter(item => typeof item === "string").map(item => item.charAt(0).toUpperCase() + item.slice(1));
}


// Task 2
// Write a function that calculates sales tax using a constant tax rate (e.g. 20%)


function salesTax(price) {
    const TAX_RATE = 0.20;          // Step 1: define constant tax rate
    const tax = price * TAX_RATE;   // Step 2: calculate tax
    return tax;                     // Step 3: return tax amount
}