

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



//4. Filter Even Elements
//Write a function that filters all even elements from the array.


/*

const filterEven = (array) => array.filter( item => item % 2 === 0 );

console.log(filterEven([1, 2, 3, 4, 5, 6]));

*/


//5. Filter JS Strings
//Write a function that filters strings containing 'JS' or 'js'.
//Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
//  Output: ['babel.js', 'JS standard']


/*
const filterJsString = arrayOfString => arrayOfString.filter ( element => element.toLowerCase().includes("js"));

console.log ("Task5 :", filterJsString(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));
*/



//6. Filter Integers
//Write a function that filters all integer numbers from the array.
//Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
 // Output: [7, 8]add


/*
 const filterInteger = array => array.filter( element => Number.isInteger(element));

 console.log ("Task 6:", filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));
 
 */




//7. Filter Integers with Digit 5
//Write a function that filters all integer arguments that contain digit 5.
//Input: 23, 11.5, 9, 'abc', 45, 28, 553
//  Output: [45, 553]



/*
// Using rest operator 

const filterIntegersWithFive = (...args) =>
  args.filter(element => Number.isInteger(element) && element.toString().includes('5'));

console.log(filterIntegersWithFive(23, 11.5, 9, 'abc', 45, 28, 553));

*/

/*

// Without rest operator, usual way.
git 
const filterIntegersWithFive = (array) =>
  array.filter(element => Number.isInteger(element) && element.toString().includes('5'));

console.log(filterIntegersWithFive([23, 11.5, 9, 'abc', 45, 28, 553]));

*/




//8. Indexes Greater Than 10
//Write a function that returns indexes of elements greater than 10.
//Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
//  Output: [1, 2, 5]

/*

const indexOfGreater10 = array => array.reduce((acc, element, index ) => {


if (element > 10 ) {


    acc.push(index);
};

    return acc;

}, []);

console.log ("Task 8:", indexOfGreater10 ([1,20,3,11,4]));

*/