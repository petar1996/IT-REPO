
// 1.
//Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. 
// If it is, print the result; otherwise, show “X”.

/*var input = 8; 

if ((typeof input) =='number') {

    if ((input % 2) === 0) {
        
        var resultDivision = input / 2;

        console.log(input + " / 2 = " + resultDivision);
    }

     else {

        console.log ("X");
    }

}
*/

// 2.
//Write a conditional statement to find the largest of five numbers. Display the result in the console.
//Sample Numbers: -5, -2, -6, -1

/*
var a = -5;
var b = -2;
var c = -6;
var d = -7;


  
if ( a > b && a > c && a > d) {

    var max = a ;
    console.log("Largest number is: ", max);

} else if ( b > c && b > d && b > a) {
    
    var max = b;
    console.log("Largest number is: ", max);

} else if ( c > a  && c > d && c > b) {
    
    var max = b;
    console.log("Largest number is: ", max);
} else {

    var max = d;
    console.log("Largest number is: ", max);

*/

// 3.
// Write a conditional statement to sort three numbers.

/*

var x = 15;
var y = 18;
var z = 16;

if ( x > y && x > z ) {

    if ( y > z) {

        var first = x;
        var second = y;
        var third = z;

        console.log(first, " ", second, " ",third);
    } else {

        var first = x;
        var second = z;
        var third = y;

        console.log(first, " ", second, " ",third);

         }

} else if ( y > x && y > z ) {

    if ( x > z) {

        var first = y
        var second = x;
        var third = z;

        console.log(first, " ", second, " ",third);
    
    } else {

        var first = y
        var second = z;
        var third = x;

        console.log(first, " ", second, " ",third);
        }

} else if ( z > x && z > x) {
   
    if ( y > x ) {

        var first = z;
        var second = y;
        var third = x;

        console.log(first, " ", second, " ",third);

    } else {

        
        var first = z;
        var second = x;
        var third = y

        console.log(first, " ", second, " ",third);

        }
}

*/


//4. 
//Write a conditional statement to find the sign of the product of three numbers. 
//Display the result in the console with the specified sign.

//My result with function

/*
var x = 3;
var y = -7;
var z = 2;

function product (x , y, z) {

    return x * y * z;
} 

 if (product(x , y, z) >= 0) {

    console.log("The product is + positive");
 } else {

    console.log("The product is - negative");

}

*/


//5. 
//Write a program to check if the variable is a number and if it’s a number,
//check if it is divisible by 2. If it is, print the result; if not, show “X”.

/*

var a = "brate"

if ((typeof a) == 'number') {

    if ( a % 2 === 0 ) {

        console.log(" Deljiv sa dva ")
    } else {

        console.log(" Nije Deljiv sa dva ")
    }
} else {

    console.log(" Nije broj, molim vas upisite ceo broj ")

}

*/


