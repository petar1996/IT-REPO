
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


//Task 6: Validate Password with Callbacks
//Write a function that checks if a given string is a valid password.
//The password is valid if it is at least **6 characters long** and contains **at least one digit**.
//The function should receive two callbacks: successCallback and errorCallback.
//validatePassword("JSGuru", successCallback, errorCallback);  
//validatePassword("JSGuru123", successCallback, errorCallback); 

/*

function validatePassword(password, successCallback, errorCallback) {
    if (password.length < 6) {
      errorCallback("Password must be at least 6 characters long.");
      return;
    }
  
    let hasDigit = false;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= '0' && password[i] <= '9') {
        hasDigit = true;
        break;
      }
    }
  
    if (hasDigit) {
      successCallback("Password is valid.");
    } else {
      errorCallback("Password must contain at least one digit.");
    }
  }
  
  function successCallback(message) {
    console.log(message);
  }
  
  function errorCallback(message) {
    console.log(message);
  }
  
  validatePassword("JSGuru9", successCallback, errorCallback);
  
  */


// Task 7: Filter Elements Based on a Condition (Callback)
//Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
//console.log(filterArray([2, 8, 11, 4, 9, 3], isOdd));
// Output: [11, 9, 3]

// 1. jedan od nacina al nije tacan jer glavna funckija ima samo console log.


/*
    function filterArray(array, callback) {

        console.log(callback(array))
       
};



    function isOdd (n) {

       let newArray = [];

        for ( let i = 0 ; i <  n.length ; i++){

            if (n[i] % 2 !==0) {

                newArray.push(n[i]);
            };

        };

    return newArray;
    };


    filterArray([1,2,3,4,5,6], isOdd) 



*/


// Task 8: Check if a String Contains the Digit '5'
//Write a function that checks if a given string contains the digit 5.
//console.log(containsFive("1b895abd")); // true
//console.log(containsFive("1bser9re")); // false


/*


function hasFive(string) {

    function callback(num) {
        return num === '5'; 
    }

    for (let i = 0; i < string.length; i++) {
        if (callback(string[i])) {  
            return true; 
        }
    }

    return false; 
}


console.log(hasFive("Ada5m6Ad5am")); // true

*/




//Task 9: Replace 'JS' with '**' in a String
//Write a function that replaces all appearances of 'JS' in a string with '**'.

//console.log(replaceJS("Programming in JS is super interesting!"));
// Output: "Programming in ** is super interesting!"


/*

function changeStr(string,callback){


let result = callback (string);

console.log(result);

console.log ("it's done !");


   
};


function replaceStr (string) {

    let newStr=""

    for (let i = 0 ; i < string.length ; i++) {

        if(string[i]==="J" && string[i+1]==="S") {

            newStr +='**';

            i++;
            

        } else {

            newStr += string[i];
        }

    }

    return newStr;

};


changeStr("JS menjaj JS menjaj JS", replaceStr);

*/