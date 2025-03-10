
//Task 1: Swap First and Last Element in an Array (IIFE)
//Write an IIFE that replaces the first and last element of the given array 
//and prints out its elements.

/*

(function(array) { 

    let placeholder = array[array.length -1];

    array[array.length -1] = array[0];

    array[0] = placeholder;

    console.log(array);

}) ([1,2,3,4,5,"ratata"]);


*/


//Task 2: Calculate Surface Area of a Rectangle (IIFE)
//Write an IIFE that calculates the surface area of a rectangle with sides a and b.


/*
(function (a,b) {

    let result = a*b;

   console.log(result);

})(3,4);

*/



//Task 3: Replace Letters 'm' or 'M' and Count Replacements
//Write an IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements.


/*
(function(string) { 

    let newstring ='';

    for( let i = 0 ; i < string.length ; i ++) {

        if (string[i] ==="M" || string[i] ==="m") {


            newstring += '*';

        } else {

            newstring += string[i];

        };

    }; 

    console.log(newstring);
  
})("Malamut");

*/

//Task 4: Generate an Email Suggestion
//Write a function with parameters name and surname that returns a function suggesting an email in the form name.surname@gmail.com.
// input: "Pera", "Peric"
// Output: pera.peric@gmail.com

/*

function emailSugestion(name,surname,callback) {
    console.log("Here is a suggestion for your mail");
    callback(name,surname);
};

function emailCreator (a, b) {
    console.log(a.toLowerCase() + "." + b.toLowerCase() + "@gmail.com");
};

emailSugestion('Alice', "Allarick",emailCreator);

*/



//Task 5: Convert an Octal Number to Decimal
//Write a function that returns another function that calculates the decimal value of a given octal number.
// input: "034"
// Output: 28

/*

function decValue (a) {
    return function () {
        let decimal = parseInt(a, 8);
        console.log(decimal);
    };
};

const decValueResult = decValue(34);
decValueResult();
console.log("Presek");

*/