

//1. Capitalize Strings
//Write a function that capitalizes the first letter of each string argument it receives.

/*
function capitalize(input) {
    return input.filter(item => typeof item === "string").map(item => item.charAt(0).toUpperCase() + item.slice(1));
}

*/


// Task 2
// Write a function that calculates sales tax using a constant tax rate (e.g. 20%)

/*
function taxCalc(input) {
    const tax = 0.20;

    const fullPrices = input.map(item => {
        return {
            name: item.name,
            price: item.price + (item.price * tax)
        };
        });

    const taxOnly = input.map(item => item.price * tax);

    return {
        fullPrices: fullPrices,
        taxOnly: taxOnly
    };
};

const products = [{ name: "Banana", price: 120 }, { name: "Orange", price: 100 }];
console.log("Task 2:", taxCalc(products));

*/


//3. Increase Array Elements
//Write a function that increases each element by a given value. If omitted, use 1.

/*

const mapElementIncrease = (array, icrement = 1) => array.map ( item => item + icrement);

console.log ("Task 3:", mapElementIncrease([1,2,4,5,6],));

*/

//4. 