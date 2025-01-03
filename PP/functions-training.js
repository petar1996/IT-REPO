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

function countOccurrences(array) {

    var number= 7;
    var occurrences = 0;
    
    for (i= 0; i < array.length ; i++) {

        if(array [i] === number){

            occurrences += 1 ;
        }
    
    }

    return occurrences;

}

var a = [1, 1, 2 , 5, 7 , 7 , 8, 7 ] ;

console.log("This is the number of ocurrences", countOccurrences(a));
