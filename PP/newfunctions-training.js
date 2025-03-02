//Task 1: Count Vowels in a String
//Write a function to count vowels in a provided string. Vowels are: a, e, i, o, u (both lowercase and uppercase).
//Input: "JavaScript"
//Output: 3

/*

function countVowels(a) {

    var sum = 0;

    for ( let i=0 ; i < a.length ; i++) {

        if ( a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u' || a[i] === 'A' || a[i] === 'E' || a[i] === 'I' || a[i] === 'O' || a[i] === 'U') {

            sum += 1;


         };       


    };

    return sum;

};

let final = countVowels("JAavascript");

console.log(final);

*/




//Task 2: Combine Two Arrays Alternating Elements
//Write a function that combines two arrays by alternatingly taking elements.
//Input: ['a','b','c'], [1,2,3]
//Output: ['a',1,'b',2,'c',3]

/*

var combine = function combineTwoA (a,b) {

   let newarray = []; 

    for ( let i = 0 ; i < a.length ; i++) {

        newarray[newarray.length] = a[i];

        newarray[newarray.length] = b[i];
    };

    return newarray;

};


console.log (combine( ['a','b','c'], [1,2,3] ));

*/


//Task 3: Rotate an Array by k Elements
//Write a function that rotates a list by k elements.
//Input: [1,2,3,4,5,6], k = 2
//Output: [3,4,5,6,1,2]

/*
function rotateA (a, b) {
    var newarray = [];
  
    for (let i = b; i < a.length; i++) {
        newarray [newarray.length] = a[i];
    };
  
    for (let i = 0; i < b; i++) {
        newarray [newarray.length] = a[i];;
    };
  
    return newarray;
  };
  
  var rotateArrResult = rotateA ([1, 2, 3, 4, 5, 6], 4);
  console.log("Rotated array:", rotateArrResult);

*/

//Task 4: Convert a Number to an Array of Digits
//Write a function that takes a number and returns an array of its digits.
//Input: 12345
//Output: [1, 2, 3, 4, 5]

/*


function convertNumToA (a) {

    let stringofa = a + "";

    resultarray = [];

    for( let i=0 ; i < stringofa.length ; i++ ) {


        resultarray[resultarray.length] = parseInt(stringofa[i]);

    };

    return resultarray;
}

let final = convertNumToA(12345);

console.log(final);

*/



//Task 5: Multiplication Table Up to 12
//Write a program that prints a multiplication table for numbers up to 12.
//Example Output:
//1  2  3  4  5  6  7  8  9 10 11 12
//2  4  6  8 10 12 14 16 18 20 22 24
//...

/*

function multipli(a) {
    let result = "";

    for (let i = 1; i <= a; i++) { 
        for (let j = 1; j <= a; j++) { 
            result += (i * j) + "\t"; 
        }
        result += "\n"; 
    }

    return result;
}

let final = multipli(12);
console.log(final);

*/


//Task 6: Convert Temperature from Celsius to Fahrenheit
//Write a function to input temperature in Celsius and convert it to Fahrenheit.
//Input: 0°C
//Output: 32°F

/*

function celsiusToFahrenheit(a) {
    let fahrenheit = (a * 9/5) + 32;
    return fahrenheit;
  };
  
  let final = celsiusToFahrenheit(0);
  console.log( final +"°F");

 
*/

//Task 7: Find the Maximum Element in an Array
//Write a function to find the maximum element in an array of numbers. Filter out all non-number elements.
//Input: [4, 8, "hello", 15, undefined, 23, null, 42]
//Output: 42

/*

function findMax (a) { 

    let max = a[0];

    for( let i = 0 ; i < a.length ; i ++) {

        if ( typeof a[i] !== 'number') {

            continue;
        };

            
        if ( a[i] > max) {

            max = a[i];
        };

    }

    return max ;

}


let final = findMax([4, 8, "hello", 15, undefined, 23, null, 42]);

console.log(final);

*/


//Task 8: Find Both Maximum and Minimum Elements
//Write a function to find the maximum and minimum elements. The function returns an array.
//Input: [10, 20, 5, 3, 8, 100]
//Output: [3, 100]



function findMaxMin (a) {

    let max = a[0];
    let min = a[0]

    for( let i = 0 ; i < a.length ; i ++) {      

        if( typeof a[i] !== 'number') {

            continue;
        }
            
        if ( a[i] > max) {

            max = a[i];
        };
        if ( a[i] < min) {

            min = a[i];
        };

   

    };

let result = [max, min];

return result;
};



let final = findMaxMin([10, 20, 5, 3, 8, 100]);

console.log(final);













