//1.
//Maximum of Two Numbers
//Write a program that calculates the maximum of two given numbers.

/*

function max(a,b) {

    var max1 = 0;

    if( a > b) {

        max1 = a;
    } else if ( b > a) {

        max1 = b;
    } else {


        max1 = "Numbers are equal";
    }

    return max1;

}

var result = max(6,6)

console.log(result);

*/


//2.
//Odd Number Check
//Write a program that checks if a given number is odd.

/*

function  checkOddNumber(a) {


    var message = "Number is Odd";

    if ( a % 2 === 0) {

        message ="Number is not Odd";

    }

    return message;

}

console.log(checkOddNumber(20));

*/


//3.
//Three-Digit Number Check
//Write a program that checks if a given number is a three-digit long number.

/*


function isThreeDigits(a) {


    if ( a >= 100 && a <=999 ) {

        var message ="Number has three digits";

    } else {

        message ="Number doesn't have 3 digits";
    }

    return message;
}


console.log (isThreeDigits(1000));

*/



//4.
//Arithmetic Mean
//Write a program that calculates an arithmetic mean of four numbers.


/*

function averageValue() {

    var total = 0;
    
    for( i = 0 ; i < arguments.length ; i ++) {


        total += arguments[i];
    }

    var result = total / arguments.length;

    return result;

}


console.log("Average value is", averageValue(1,2,3,4));

*/







//8.
//Count Occurrences in an Array
//Write a program that calculates the number of appearances of a given number in a given array.
//Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
//Result: 3

/*

function countOccurrences(array) {

    var e = 7;
    var occurrences = 0;
    
    for (i= 0; i < array.length ; i++) {

        if (array [i] === e ){

            occurrences += 1 ;
        }
    
    }

    return occurrences;

}

var a = [2, 4, 7, 8, 7, 7, 1] ;

console.log("This is the number of ocurrences", countOccurrences(a));

*/


//9.
//Sum of Odd Elements
//Write a program that calculates the sum of odd elements of a given array.

/*

function sumOdd (array) {

    sum=0;

    for(i=0 ; i < array.length ; i++) {

        if(array[i] % 2 !==0) {

            sum += array[i];
        }
    }

    return sum;
}

var a = [1,2,3,4,5,6,7];


console.log("Sum of Odd number in given array is", sumOdd(a));

*/


//10.
//Count Letter Occurrences
//Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

/*

function numberOfA(array) {

    sum= 0;

    for (i = 0 ; i < array.length ; i++ ){

        if ( array[i] === "A" || array[i] ==="a") {

        sum += 1;    

        }

    }

    return sum;

}

var a ="Arctic Monkeys are a good band";


console.log("The number of occurances of character A in given string is",numberOfA(a) );

*/



//11.
//Write a program that concatenates a given string a given number of times. For example,
//if "abc" and 4 are given values, the program prints out:
//abcabcabcabc

/*

function conString(a,b) {

    var result = "";
    

    for (i=0; i < b; i ++) { 

        
        result += a ;
        

    }

    return result;

}

console.log(conString("abc", 4));

*/


//12.
// Check if Input is a String
//Write a function to check whether the input is a string or not.
//"My random string" -> true
//12 -> false

/*

function checkString (input) {

    var result ="False";

    if((typeof input) == 'string') {

        result ="True";
    
}
    return result;

}

var n=7;


console.log(checkString(n));


*/



//13.
//Check if String is Blank
//Write a function to check whether a string is blank or not.
//"My random string" -> false
//" " -> true
//12 -> false
//false -> false


/*

function blankStr (input) {

    if((typeof input) !== 'string'){

        return false;
    };

    for (i = 0 ; i < input.length ; i++) {

        if ( input[i] !==" "){

            return false;    
        }
    }


    return true;
}

var n="";

console.log(blankStr(n));

*/


//14.
//Write a function that concatenates a given string n times (default is 1).
//"Ha" -> "Ha"
//"Ha", 3 -> "HaHaHa"

/*

function conString(a,b) {

    var result ="";
    var i = 0 ;

    do {

      result +=a;
      i++;
    }

    while(i < b);

    return result;
}


var n ="bla";

var m = 3;


console.log(conString(n,m));

*/



//15. 
//Write a function to count the number of letter occurrences in a string.
//"My random string", "n" -> 2

/*

function letterOcc (a,b) {

    sum=0;

    for( i = 0; i < a.length ; i++) {

        if( a[i] === b) {

            sum += 1;
        }

    }

    return sum;
}

var n = "YYYY nn OO p";

var m = "p";

console.log(letterOcc(n,m));

*/


//16.
//Find First Character Position
//Write a function to find the position of the first occurrence of a character in a string. The result should be the position of the character. 
// If there are no occurrences of the character, the function should return -1.

/*

function firstCharOccur(a,b) {

    for( i = 0 ; i < a.length ; i++) {

        if ( a[i] === b) {

            return i;
        }

    }

    return -1;

}


var firstCharOcc = firstCharOccur("Petar", "e");

console.log (firstCharOcc);

*/


//17.
//Task 17: Find Last Character Position
//Write a function to find the position of the last occurrence of a character in a string. 
// The result should be in human numeration form.
//If there are no occurrences of the character, the function should return -1.

/*

function lastCharOccur(a,b) {

    for( i = a.length; i > 0 ; i--) {

        if ( a[i] === b) {

            return i + 1;
        }

    }

    return -1;

}

var lastCharOcc = lastCharOccur("Petar", "l");

console.log (lastCharOcc);

*/



//18.
//Convert String to Array
//Write a function to convert a string into an array. 
//Spaces in a string should be represented as null in the new array.

//"My random string" -> ["M", "y", null, "r", "a"]
//"Random" -> ["R", "a", "n", "d", "o", "m"]


/*

function stringToArray(a) {

    var newString = [];

    for (i = 0 ; i < a.length ; i ++) {

        if (a[i] !== " ") {

            newString[i]= a[i];

        } else {

            newString[i]="null";

        }
    }
    return newString;

}

var final = stringToArray("Nocturnal Animals")


console.log(final);

*/


//19.
//Check for Prime Number
//Write a function that accepts a number as a parameter and checks if the number is prime or not.
//Note: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.


/*

function checkPrime(givenNum){
 
var check = "it's a Prime Number"

if (givenNum <= 1) {

     check = "It's not a Prime Number";
}

for( i=2; i < givenNum ; i++){

    if( givenNum % i === 0 ) {

        check = "It's not a Prime Number";

    }

}

return check;

}

var num = checkPrime(7);

console.log(num);


*/


//20.
//Write a function that replaces spaces in a string with a provided separator. 
//If a separator is not provided, use a dash ("-") as the default separator.
//"My random string", "_" -> "My_random_string"
//"My random string", "+" -> "My+random+string"
//"My random string" -> "My-random-string"

/*

function putSeparator (a,separator){

    result="";

    for( i = 0 ; i < a.length ; i++){

        if( a[i] ===" "){

            result += separator;
    
        } else {

            result += a[i];
        }
    }

return result;

}
var defsep="-"

var result= putSeparator("BAs je lep dan", defsep);

console.log(result);

*/


//21.
//Shorten a String
//Write a function to get the first n characters and add ... at the end of the 
//newly created string

/*

function threecommaString (myString,n) {

    result="";

    for (i=0 ; i < n ; i ++) {

           result += myString[i]



    }

    result += "...";


    return result;


}

var final = threecommaString("Whatever man for real", 8);

console.log(final);




//22.
//Convert Array of Strings to Numbers
//Write a function that converts an array of strings into an array of numbers.
//Filter out all non-numeric values.
//["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

/*

function convertStrToNum (a){

    var result="";

    for (i=0, i<a.length; i++)


}


*/


//23.
// Retirement Calculator
//Write a function to calculate how many years are left until retirement based on the year of birth.
 //Retirement is at the age of 65 for men and 60 for women. If someone is already retired, display a proper message.

 /*


function retirement(gen,age){

    
    if(gen === "M" || gen === "Male"){

        var result = 65 - age;

    } else if (gen ==="F" || gen==="Female") {

        result = 60 - age ;
      
     };



    if (result <= 0){

        result="You are ready for retirement";

    } else if (age <= 0) {

        result ="Your age input is invalid";
    };


        
    return result;

};

var final = retirement("Male",7);

console.log("Below is the message with the number of years to your retirement: \n", final);


*/













//25.
// Insert String Within a String
//Write a program to insert a string within another string at a particular position (default is the beginning).
//"My random string", "JS " -> "JS My random string"
//"My random string", "JS ", 10 -> "My random JS string"


/*


function insertString (aString,bString, position) {

    if ( position === undefined || position === null) {

        position=0;
    }

    result ="";

    for (i=0 ; i < position; i++) {

        result += aString[i];

    }

    result += bString;

    for ( i= position ; i < aString.length ; i++) {

        
        result += aString[i]
    }

return result;

}

var final = insertString("abrakadabra","AVADAKEDAVRA", 4);

console.log(final)

*/


//26.
//Join Array Elements into a String
//Write a program to join all elements of the array into a string, skipping elements that are :
// undefined, null, NaN, or Infinity.
//[NaN, 0, 15, false, -22, '', undefined, 47, null]

/*

function joinArrayToString (a) {


    result="";


    for (i=0; i<a.length; i++){

        if(a[i] !== undefined && a[i] !== null && a[i] === a[i] && a[i] !== Infinity && a[i] !==""){

            result += a[i] + " ";
 
        }
         
    }
 
return result ;
}


var final = joinArrayToString (["bla", NaN, "Petar", Infinity,"",undefined, "ha", null,]);

console.log(final);

*/


//27.

//

/*

function falsyValues(a) {
    var result = [];

    for (var i = 0; i < a.length; i++) {
        if (a[i]) {                                         // if (a[i])  ___ this is most imprtant thing
            result[result.length] = a[i];                   // with this we are making sure that 
        };                                                  // only truthy values enter the new array
                                                            // in this case result         
    };

    return result;
};

var falsyValuesResult = falsyValues([1, 'hello', '', 42, false, undefined, null, true, NaN]);
console.log("Array with no falsy values:", falsyValuesResult);

*/


//28.
//Reverse a Number
//Write a function that reverses a number. The result must be a number.
//12345 -> 54321 // Output must be a number

/*

function reverseNumber (a) {

    

    var result="";

    for (i = a.length - 1 ; i > 0 ;i--) {

        result += a[i];
    }   

    result = +result;

    return result;


};



var final = reverseNumber("12345");

console.log(final);

console.log(typeof(final));

*/


//29.
//Get the Last Element of an Array
//Write a function to get the last element of an array. 
//Passing a parameter n will return the last n elements of the array.
//[7, 9, 0, -2] -> -2
//[7, 9, 0, -2], 2 -> [0, -2]

/*

function getLastElement (a, n) {


    var reverseA= [];

    for (i = a.length - 1 ; i >= 0 ;i--) {

        reverseA[reverseA.length] += a[i];
    }   

     var result= [];

    


return result;

}


var final = getLastElement([1,2,4], 1);

console.log(final);


*/



//30.
//Create Pre-Filled Array
//Write a function to create a 
//specified number of elements with a pre-filled numeric value in the array.
// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]

/*


function predefientArray (n,b) {

var a = [];

for( i = 0 ; i < n ; i++){


    a[a.length] = b;

}

return a;

};

var final = predefientArray(2,"none");

console.log(final);

*/




//31.
//Check if a Number is Perfect
//Write a function that says whether a number is perfect
//28 -> 28 is a perfect number
//A perfect number is a positive integer equal to the sum of its proper positive divisors (excluding itself). 
//For example, 6 and 28 are perfect numbers.
 

/*

function perfectNumber(number) {

    if ( number <= 0) {

        console.log ("Number is zero or below, please try again");
        return;
    }

   var sum= 0;
   var check ="is perfect"

    for( i = 1 ; i < number ; i++) {
        
        if( number % i === 0 ) {

            sum += i;
        }

}

    if ( sum === number ) {

        return check;
   
    } else {


        return check = "is not perfect";
    }

}



var final = 6;

console.log(final, perfectNumber(final));
    
*/






//32.
//Write a function to find a word within a string.
//'The quick brown fox', 'fox' -> "'fox' was found 1 times"
//'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

/*
function wordInString (a,b) {

    var check = "";

    for(i = 0 ; i < a.length ; i++ ) {

        if ( a[i] === b[0]){

            for ( j= 0 ; j < b.length; j++) {

                if ( a[i] === b[j] ) {

                    check[check.length] = b[j];
                }


            }
        }
        



    }


}

*/


//33.

/*
function hideEmailAddress(email) {
    let result = '';
    let atPosition = -1;         // here the most important thing is at position to find the index of "@"

    // Loop through the email to find the position of '@'
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {            // this and the line below is how we
                                             // find the position of @
             atPosition = i;
            break;  // Exit the loop once we find the '@'
        }
    }

    // Build the first part of the email with the first 3 characters
    for (let i = 0; i < atPosition; i++) {
        if (i < 3) {
            result += email[i];  // Keep the first 3 characters
        } else {
            break;  // Stop once we reach the 3rd character
        }
    }

    // Add the '...' after the first 3 characters of the username
    result += '...';

    // Add the domain part to the result
    for (let i = atPosition; i < email.length; i++) {
        result += email[i];  // Add the domain part unchanged
    }

    return result;
}

// Example usage:
console.log(hideEmailAddress("myemailaddress@bgit.rs")); 

*/


//34.Find the Most Frequent Item
//Write a program to find the most frequent item in an array.
//[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

/*

function mostFrequent (a) {

    var maxfreq = 1;
    var curfreq = 0;

    var freqelement;

    for (i=0 ; i < a.length ; i ++) {

        for ( j = i ; j < a.length ; j++ ) {

            if ( a[i] === a [j]) {

                curfreq ++ ;
            };

            if ( curfreq > maxfreq ) {

                maxfreq = curfreq

                freqelement = a[i]

            };

        };
    
        
        curfreq = 0;

    };

    return freqelement;

};

var final = mostFrequent (["petar","a","6","petar","a","a","petar"]);

console.log ("Most frequent element is", final);


*/

//35. 
// Check Element in Array
//Write a program that checks if a given element e is in the array a.
//Input:  e = 3, a = [5, -4.2, 3, 7]
//Output: yes
//Input:  e = 3, a = [5, -4.2, 18, 7]
//Output: no

/*

function checkElement (a,e) {

    check = "no";

    for ( i = 0 ; i < a.length ; i++) {

        if ( a[i] === e) {

            check = "yes";
        }


    }

    return check;
}

var final = checkElement(["a","e",1],"b");

console.log(final);

*/


//36.
//Multiply Positive Elements by 2
//Write a program that multiplies every positive element of a given array by 2.
//Input array: [-3, 11, 5, 3.4, -8]
//Output array: [-3, 22, 10, 6.8, -8]


/*
function multiplyPositive (a) {

    for ( i = 0 ; i < a.length ; i ++) {

        if ( a[i] > 0) {

            a[i] *= 2;
        }

    }

return a;
}

var final = multiplyPositive([1, -5 ,-7, 1, 10 ])

console.log(final);

*/


//37.
//Write a program that finds the minimum of a given array and prints out its value and index.
//Input array: [4, 2, 2, -1, 6]
//Output: -1, 3

/*

function minimumAndIndex(a){

var min = a[a.length-1];

var position = a.length -1 ;

for (i = a.length -1 ; i >= 0 ; i --){

    if ( a[i] < min) {

        min = a[i];

        position = i;
    };
};

var result = [min, position];

return result;

};

var final = minimumAndIndex([ -20,1,-2, -210,-10,-6, -21]);

console.log (final);


*/

//38.

//38.
// Write a program that finds the second smallest number and prints out its value.
//Input array: [4, 2, 2, -1, 6]
//Output: 2

/*

function secondMinimum (a) {

    var firstmin = a[0];

    var b = [];

    

    for ( i = 0 ; i < a.length ; i ++) {

        if( a[i] < firstmin) {

           var position = i;

           var firstmin = a[i];

        };

    };


    for ( j = 0; j < a.length; j ++) {

        if ( j !== position) {


            b[b.length] = a[j];

        };
    };

    var secondmin = b[0];

    for ( n = 0 ; n < b.length ; n ++) {

        if (b[n] < secondmin ) {

            secondmin = b[n];


        };

    };

    return secondmin;


};

var final = secondMinimum([1,2,5,-5,8,-7,6,-6]);

console.log(final);

*/


//39.
//Write a program that calculates the sum of positive elements in the array.
//Input array: [3, 11, -5, -3, 2]
//Output: 16

/*

function sumPositive (a) {

    sum = 0;


    for (i = 0 ; i < a.length ; i++) {

        if( a[i] > 0) {

            sum += a[i];
        }

    }


    return sum;
};

var final = sumPositive([3,5,-4,-9,7]);

console.log(final);

*/


//40.
//Check if Array is Symmetric
//Write a program that checks if a given array is symmetric.
//An array is symmetric if it can be read the same way both from the left and the right.
//Input array: [2, 4, -2, 7, -2, 4, 2]
//Output: The array is symmetric.
//Input array: [3, 4, 12, 8]
//Output: The array isn’t symmetric.


/*

function check (array) {

var mesage = "The array is simetrical";

var reversedArray = [];

for (var i = array.length - 1; i >= 0; i--) {
  reversedArray[reversedArray.length] = array[i];
}

for( i = 0 ; i < array.length ; i ++) {
     
    if( reversedArray[i] !== array[i]){

        mesage= "The array isn’t symmetric";

    }

}

return mesage;


};

var final = check ([1,2,3,4,2,1]);

console.log(final) ;

*/


//41. 
//Intertwine Two Arrays
//Write a program that intertwines two arrays. Assume the arrays are of the same length.
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 3, 5, 8, 6, 11, 2, 9]


/*
function intertwineArray (a,b) {

var newArray=[];

for (i=0 ; i < a.length ; i++) {

   newArray[newArray.length] = a[i];
   newArray[newArray.length]= b[i] ;

}

return newArray;

}

var final = intertwineArray([1,2,3,4],[5,6,7,8]);

console.log(final);

*/



//42.
//Concatenate Two Arrays
//Write a program that concatenates two arrays.
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 5, 6, 2, 3, 8, 11, 9]

/*

function concatenateArray (a,b) {

var newArray=[];


for (i=0 ; i < a.length ; i++) {

    newArray[newArray.length] = a[i];
    
 
 }


 for (i=0 ; i < b.length ; i++) {

    newArray[newArray.length] = b[i];
    
 
 }

 return newArray;

};

var final = concatenateArray([1,2,3],[4,5,6,7,10]);

console.log (final);

*/



//43.
//Delete an Element from Array
//Write a program that deletes a given element e from the array a.
//Input: e = 2, a = [4, 6, 2, 8, 2, 2]
//Output array: [4, 6, 8]

/*

function deleteElement (a,e) {

b=[];

for (i=0 ; i < a.length ; i ++) {


    if( a[i] !== e){

        b[b.length] = a[i];

    }
}


return b;

}

var final = deleteElement([1,2,3,4,5],3);

console.log(final);

*/


//44.
//Insert Element at Specific Position
//Write a program that inserts a given element e at the given position p in the array a. 
//If the position is greater than the array length, print an error message.
//Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
//Output: [2, -2, 33, 78, 12, 5, 8]


/*

function insertElement (a,e,p) {

    var newarray= [];

    var mesage = "Error, position bigger that array length";

    if(p > a.length) {

    return mesage;

    }



    for (i=0 ; i < p ; i++ ) {


        newarray[newarray.length] = a[i]
    }

    

    newarray[newarray.length] = e;


    for (j = p ; j < a.length ; j++ ) {

        newarray[newarray.length] = a[j];
    }

    return newarray;


}

var final = insertElement([1,2,3,4,5,6],3,6);

console.log(final);

*/


//45.
//Switch Min and Max
//Find the min and max element in the following array and switch their places. 
//Print out the modified array in the console
//Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
//Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

/*

function switchMinMax (a) {

    min= a[0];
    max= a[0];
    
    

    posmin = 0 ;
    posmax = 0 ;


    for ( i = 0 ; i < a.length ; i ++) {


        if (a[i] > max) {

            max = a[i];
            posmax= i;
        };

        if ( a [i] < min ) {

            min = a[i];
            posmin = i;
            
        };
    };
    
    a[posmin] = max;
    a[posmax] = min;
     
    return a;
};

var final = switchMinMax([-10,1,-200,3,400,10]);

console.log(final);

*/


//46.
//Transform Array Values
//Use the following array to make a new one by dividing its values by two and adding 5. 
//If a given element's value is 0, change it to 20.
//Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
//Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

/*

function transformArray (a) {

    for (i= 0 ; i < a.length ; i ++) {

        if( a[i] === 0) {

            a[i] = 20;
        } else {

            a[i] = (a[i] / 2 ) + 5 ;
        };

    };

    return a ;

}

var final = transformArray([1,3,4,0,8]);

console.log(final);

*/


//47
//Assign Grades
//Initialize two arrays. The first one should contain student names, the second one the number of points for each student. 
//Display students' names with their corresponding grade. Use the following ranges:
//51-60 -> 6
//61-70 -> 7
//71-80 -> 8
//81-90 -> 9
//91-100 -> 10

/*

function gradeAssign (students, points) {

    grades = [];

    for(i = 0 ; i < points.length ; i++) {

        if (points[i] >= 51 && points[i] <= 60) {

            grades[grades.length] = 6;

        } else if (points[i] >=61 && points[i] <= 70) {

            grades[grades.length] = 7;

        } else if (points[i] >= 71 && points[i] <= 80) {

            grades[grades.length] = 8;

        } else if (points[i] >= 81 && points[i] <= 90) {

            grades[grades.length] = 9; 

        } else if (points[i] >= 91 && points[i] <= 100) {


            grades[grades.length] = 9;


        } else if (points[i] < 51) {

            grades[grades.length] = "and failed to complete the exam";
        
        };

    };


    intertwine = [];
    for (j=0 ; j < students.length ; j++) {

        if (points[j] >= 51) {

            intertwine[intertwine.length] = students[j] + " acquired " + points[j] + " points" + " and earned " + grades[j];

        } else {

            intertwine[intertwine.length] = students[j] +  " acquired " + points[j] + " points " + grades[j];
            
        }
     
     };

return intertwine;


};


var finalres = gradeAssign(["Petar","Nikola","Marko","Mladen"],[6,53,78,90]);

console.log(finalres);

*/


//48.
//Add and Subtract Numbers
//Write a program that uses a loop to add all the even numbers from 1 to 1000
//and subtracts all the odd numbers 1 to 500 from the calculated sum.
//The result should then be multiplied by 12.5 and displayed in the console.
//Output: 2350000

/*


function addAndSubtract (a) {

    var sumeven = 0;
    var sumodd = 0

    for (i = 0 ; i <= a ; i ++ ) {

        if ( i % 2 == 0) {

            sumeven += i;

        } else if ( i <= 500) {

            sumodd += i;

        }

       var sumfinal = (sumeven - sumodd) * 12.5;

       


    }

return sumfinal;

}



console.log(addAndSubtract(1000));

*/



//49.
//Define a 10-element array. Take the first two letters from every string 
//(that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
//Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
//Output: AnStJoJoDaMa


/*

function addTwoFromString(arr) {
    var newStr = "";

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string" && arr[i].length >= 2) {
            newStr += arr[i][0] + arr[i][1]; // Add the first two characters
        }
    }

    return newStr;
}

var final = addTwoFromString(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]);

console.log(final);

// Consulted Chat GPT for the result !!

*/


//50.
//Reverse a String
//Write a program that takes a string and prints its characters out in reversed order in the console.
//Input:  Belgrade Institute of Technology
//Output: ygolonhceT fo etutitsnI edargleB

/*

function reverseAString (a) {

   var reverse ="" ;

    for(i = a.length-1; i >= 0; i--) {

         reverse += a[i];
    }


    return reverse + ""

}

var final = reverseAString("Belgrade Institute of Technology");

console.log(final);

*/



//51.
//Generate Number Combinations
//Write a program that displays all the combinations of two numbers between 1 and 7.
//Don't display two of the same numbers at the same time. Display the number of possible combinations, as well.

/*


function generateNumberComb (number) {


    var finalarr= [];

    for (i = 1; i <=number ; i ++) {

        for (j = 1; j <=number; j++) {

            if( i !== j) {

                finalarr[finalarr.length] = i*10 + j;
            


            }

        }
    }

return [finalarr, finalarr.length];



}

var final = generateNumberComb (7) ;

console.log (final);



*/



//52.
//Write a program that checks if the entered number is a prime number (i.e., divisible only by 1 and by itself).
//Input:  17    | 15
//Output: true  | false

/*


function checkPrime (a) {

var checker = true;


  if( a <= 1) {

    checker = false;
  }


    for( i=2 ; i < a ; i++) {

        if( a % i === 0) {


          checker = false;

        }


    }

   
return checker;
}


var final = checkPrime(15) ;

console.log(final);

*/



//53.
//Check Palindrome
//Check if a given string is a palindrome (spaces are ignored).

//Input:  eye  | Geek  | a nut for a jar of tuna
//Output: true | false | true

/*
function checkPalindrone (string) {

    var checker = true;
    var newstring ="";
    var backwardarray ="";

    for ( i = 0 ; i < string.length ; i++) {

        if(string[i] !== " ") {

        newstring += string[i];

        };

    };

    for (i = newstring.length -1 ; i >= 0 ; i--) {

        backwardarray += newstring[i];
    };

    for ( i = 0 ; i < newstring.length ; i++) {

        if( newstring[i] !== backwardarray[i]) {

            checker = false;
        };

    };

return checker;

};

var final = checkPalindrone ("a nut for a jar of tuna");

console.log(final);

*/




//54. 
// Find Greatest Common Divisor
//Write a program that calculates the greatest common divisor of two integers. Note: The greatest common 
//divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.

/*











*/



//Predefined Functions


// 1. 
//Convert Array of Strings to Numbers
//Write a function that converts an array of strings into an array of numbers.
//Filter out all non-numeric values.
//Input: ["1", "21", undefined, "42", "1e+3", Infinity]
//Output: [1, 21, 42, 1000]


function stringToNumber(a) {


    var newarray = [];

    for( i=0 ; i< a.length ; i++ ) {


        if (typeof a[i] === "string" || typeof a[i] === "number" || isFinite (a[i]) !== "true" ) {


            newarray[newarray.length] = parseFloat(a[i]);

        };

    };

    return newarray;

};

var final = stringToNumber(["1", "21", undefined, "42", "1e+3", Infinity]) ;

console.log (final);
