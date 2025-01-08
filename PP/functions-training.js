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

*/