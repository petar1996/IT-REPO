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

/*


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

*/



//Task 9: Find the Median Element in an Array
//Write a function to find the median element of an array.
//Input: [1, 3, 5, 7, 9]
//Output: 5

/*

function findMedian(a) {

    let middle = 0;

    
    for (let i = 0; i < a.length; i++) {
        if (i * 2 + 1 === a.length) {

            middle= i;
        }
    }

    return a[middle];
};


let final = findMedian([1, 3, 5, 7, 9]);


console.log (final);

*/


//Task 10: Find the Most Frequently Occurring Element
//Write a function to find the element that occurs most frequently. 
//Output: 1

/*

const mostFreq = function (a) {
    let mostFrequent = a[0];
    let maxCount = 0;
  
    for (let i = 0; i < a.length; i++) {
      let count = 0;
  
      for (let j = 0; j < a.length; j++) {
        if (a[i] === a[j]) {
          count++;
        };
      };
  
      if (count > maxCount) {
        maxCount = count;
        mostFrequent = a[i];
      };
    };
  
    return mostFrequent;
  };
  
  console.log(mostFreq([1, 2, 3, 2, 2, 4, 1, 1, 1]));
  
  */



 // Task 11: Retrieve First, Middle, and Last Elements
//Write a function to return the first, middle, and last element of an array if it has an odd number of elements. 
//If it has an even number, return only the first and last. If the array is empty, return it as-is.
//Input: [10, 20, 30, 40, 50]
//Output: [10, 30, 50]

/*

function retriveFML(a) {
    if (a.length === 0) {
        return a; 
    }

    let first = a[0];
    let last = a[a.length - 1];
    let middle = 0;

    for (let i = 0; i < a.length; i++) {
        if (i * 2 + 1 === a.length) {
            middle = i; 
        };
    };

    if (a.length % 2 === 1) {
        return [first, a[middle], last]; 
    } else {
        return [first, last]; 
    };
};
 
let final = retriveFML([10, 20, 30, 40, 50])

console.log(final);


*/
     





//Task 12: Compute the Average of N Elements
//Write a function to find the average of N elements. The function should be flexible to receive a dynamic number of parameters.
//Input: (10, 20, 30, 40, 50)
//Output: 30


/*
function findAverage (a) {
    let result = 0;
  
    for (let i = 0; i < a.length; i++) {
      result += a[i];
    };
  
    let finalResult = result / a.length;
    return "The average of A elements: " + finalResult;
  };

  let final = findAverage( [10, 20, 30, 40, 50, 70])
  
  console.log(final);

  */


  
// Task 20: Convert Fahrenheit to Celsius
//Create a function called fahrenheitToCelsius that:

//Stores a Fahrenheit temperature in a variable.
//Converts it to Celsius using the formula: C = (F - 32) × 5/9.
//Outputs the result in the format:
//"NN°F is NN°C."
//fahrenheitToCelsius(32); // "32°F is 0°C"
//fahrenheitToCelsius(212); // "212°F is 100°C"
//fahrenheitToCelsius(50); // "50°F is 10°C"


/*
const fahrenheitToCelsius = function (a) {
  let fahrenheit = a;
  let celsius = (fahrenheit - 32) * 5/9;

  return fahrenheit + "°F is " + celsius + "°C";
};

console.log(fahrenheitToCelsius(50));

*/



//Task 19: Convert Celsius to Fahrenheit
//Create a function called celsiusToFahrenheit that:

//Stores a Celsius temperature in a variable.
//Converts it to Fahrenheit using the formula: F = C × 9/5 + 32.
//Outputs the result in the format:
//"NN°C is NN°F."
//celsiusToFahrenheit(0); // "0°C is 32°F"
//celsiusToFahrenheit(100); // "100°C is 212°F"
//celsiusToFahrenheit(-10); // "-10°C is 14°F"

/*
const celsiusToFahrenheitNew = function (a) {
    let celsius = a;
    let fahrenheit = celsius * 9/5 + 32;
  
    return celsius + "°C is " + fahrenheit + "°F";
  };
  
  console.log(celsiusToFahrenheitNew(100));

  */





  //Task 13: Find Numbers Greater Than the Average
  //Write a function to find all the numbers greater than the average.

  //Input: [10, 20, 30, 40, 50]
  //Output: [40, 50]

  /*

  function findGreaterAverage (a) {
    let result = 0;
    let newarray= [];
  
    for (let i = 0; i < a.length; i++) {
      result += a[i];
    };
  
    let average = result / a.length;

    for (let i = 0; i < a.length; i++) {


        if ( a[i] > average) {


            newarray[newarray.length] = a[i];
        }

    };

    return newarray;

  };

  let final = findGreaterAverage( [10, 20, 30, 40, 50])
  
  console.log(final);
  
  */




//Task 16: Fortune Teller
//Write a function named tellFortune that:

//Takes 4 arguments: number of children, partner's name, geographic location, and job title.
//Outputs your fortune in the format:
//"You will be a X in Y, and married to Z with N kids."
//Call the function three times with different arguments.
//tellFortune(2, "Alice", "New York", "Software Engineer");
//tellFortune(3, "Bob", "London", "Doctor");
//tellFortune(1, "Emma", "Paris", "Artist");
  

/*

  let fortuneTeller = function (amount, name, location, job) {
  return "You will be a " + job + " in " + location + ", and married to " + name + " with " + amount + " kids.";
};

console.log(fortuneTeller(2, "Alice", "New York", "Software Engineer"));

*/



//Task 17: Convert Dog Years
//Write a function named calculateDogAge that:
//Takes 1 argument: the dog's age in human years.
//Calculates the dog's age based on the conversion rate of 1 human year = 7 dog years.
//Outputs the result in the format:
//"Your doggie is NN years old in dog years!"
//Call the function three times with different values.
//calculateDogAge(2);
//calculateDogAge(5);
//calculateDogAge(10);

/*

let dogYears = function (a, b) {
    return "Your doggie is " + (a * b) + " years old in dog years!";
  };
  
  console.log(dogYears(2, 7));


*/


//Task 14: Compute Body Mass Index (BMI)
//The Body Mass Index (BMI) is calculated as the weight of a person (in kg) divided by the square of their height (in meters).
// Write a function that takes two parameters, weight and height, computes the BMI, and returns the corresponding category:

//Starvation: BMI < 15
//Anorexic: BMI < 17.5//Underweight: BMI < 18.5
//Ideal: 18.5 ≤ BMI < 25
//Overweight: 25 ≤ BMI < 30
//Obese: 30 ≤ BMI < 40
//Morbidly Obese: BMI ≥ 40
//Input: (weight = 70, height = 1.75)
//Output: "Ideal"

/*

let bodyMassIndex = function (weight, height) {
    let result = weight / (height * height);
  
    if (result < 15) {
      return "Starvation";
    } else if (result < 17.5) {
      return "Anorexic";
    } else if (result < 18.5) {
      return "Underweight";
    } else if (result >= 18.5 && result < 25) {
      return "Ideal";
    } else if (result >= 25 && result < 30) {
      return "Overweight";
    } else if (result >= 30 && result < 40) {
      return "Obese";
    } else if (result >= 40) {
      return "Morbidly Obese";
    } else {
      return "Wrong inputs";
    };
  };
  
  console.log(bodyMassIndex(70, 1.75));

  */