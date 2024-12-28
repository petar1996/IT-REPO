//1.
//Write a program that will iterate 
// from 0 to 10 and display squares of numbers.

/*
var result = 0;

for (var i = 0; i < 10; i++) {

    result = i*i;
 
    console.log(result);
}

*/

//2.
//Write a for loop that will iterate from 0 to 15. 
// For each iteration, check if the current number is odd or even, 
// and display a message.

/*

for (var i = 0; i < 15; i++) {

    if(i % 2 == 0) {

        console.log(i, " is even")
    }
    else {

        console.log(i, " is odd")
    }
}

*/

// 3.
//Write a program to sum the multiples of 3 and 5 under 1000.

/*

var sum = 0

for (var i = 0; i < 1000; i++) {

   if ( i % 5 == 0 || i % 3 == 0) {

    sum = sum + i;
   
    } else {

        i=i;
    }
}

console.log ("Sum is ", sum)

*/


//4. 
//Write a program to compute the sum and product of an array of integers.

/*

var sum = 0;
var product = 1;

var arr = [1, 2, 3, 4, 5, 6, "bla", 7];

for ( i = 0 ; i < arr.length ; i++) {

    if ( typeof arr[i] == "number" ) {
        
        sum +=arr[i];

        product *= arr[i];
       
    } 

}

console.log("Sum is :", sum ," and product is ", product)

*/



//5.
//Write a program that prints the elements of the following array as a single string:
//var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

/*

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var result = "";

for ( i= 0 ; i < x.length; i++ ) {

    result += x[i];

}

console.log (result);

*/



//6.
//Write a program that prints the elements of the following 2D array:

/*

var a = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
 ];



res = "\n";

for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < a[i].length; j++) {
    res += a[i][j] + "\t";
  }
 res += "\n";
}

console.log(res);

*/




// 7.
//Write a program that outputs the sum of squares of the first 20 numbers.

/*

res=0 
 
for (i=0; i <=20; i++) {

    res += i*i ;
}

console.log(res)

*/


//8. 
//Compute the average marks of the following students, then determine
// the corresponding grade based on the average:
//David: 80 Marko: 77  Dany: 88  John: 95  Thomas: 68

 /*

var sum = 0;



var points = [ 80, 77 , 88 , 95, 68];


for (i=0 ; i < points.length ; i++) {

    sum += points[i];
    
};

var avgSum = sum / points.length;


console.log("Average of points:", avgSum);




if ( avgSum < 60 && points >=0 ) {

    console.log("The grade is F ");

    } else if ( avgSum < 70 ) { 

        console.log ("The grade is D ");


    } else if ( avgSum < 80 ) {

        console.log("The grade is C ");

    } else if ( avgSum < 90 ) {
 
        console.log("The grade is B")

    } else { 
 
        console.log("The grade is A");
    }

*/


//9.
//Write a program that prints all the numbers from 1 to 100 with the following rules:
//For numbers divisible by 3, print "Fizz" instead of the number.
//For numbers divisible by 5 (but not 3), print "Buzz".
//For numbers divisible by both 3 and 5, print "FizzBuzz".
 
/*

for (i = 1 ; i <= 100 ; i++ ) {

    if ( i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz");
        
    } else if ( i % 5 === 0 && i % 3 !== 0) {

        
        console.log("Buzz");

    } else if ( i % 3 === 0 ) {

        console.log ("Fizz");
    } else {

        console.log(i)
    }
}

*/

//10. 
//Write a program that checks if a given element e is in the array a.
//Example:
//Input: e = 3, a = [5, -4.2, 3, 7]
//Output: yes
//Input: e = 3, a = [5, -4.2, 18, 7]
//Output: no

/*

var a = [5, -4.2, 7, 3];

var e = 3;

var contains = false ; // note : var contains need to be boolen false, if you use !== and give contains= true in the begining it doens't work

for ( i = 0 ; i < a.length ; i++) {

    if ( a[i] === e) {

        contains = true ;
      
    } 
}
if ( contains === true ) {

    console.log("yes");

} else {

console.log ("no");

}

*/


//11.
//Write a program that multiplies every positive element of a given array by 2.
//Input: [-3, 11, 5, 3.4, -8]
//Output: [-3, 22, 10, 6.8, -8]

/*

var a = [-3, 11, 5, 3.4, -8]

for (i=0 ; i < a.length ; i++ ) {

    if ( a[i] > 0) {

        a[i] *= 2;
    }
}

console.log (a);

*/


//12. 
//Write a program that finds the minimum of a given array and prints its value and index.

/*
var a = [4,-15, 2, 2, -1, 2,-50];

var min= a[a.length-1];

var position= a.length -1;

for (i=a.length-1; i>=0 ; i-- ) {

    if(a[i] < min) {

        min=a[i];
        position = i;
    }
}

console.log(min , position);

*/


//13. 
//Write a program that finds the first element larger than the minimum and prints its value.
 // Note : Poorly written task.

/*

var a = [-5,4, 2, 2, -6, 6];

min= a[0]

for (i=0 ; i < a.length ; i ++) {

    if (a[i] > min) {

        min=a[i];
        break;


    }
}

console.log(min);

*/


//14.
//Write a program that checks if a given array is symmetric.
// An array is symmetric if it can be read 
// the same way from both left and right.
//Example:
//Input: [2, 4, -2, 7, -2, 4, 2]
//Output: The array is symmetric.
//Input: [3, 4, 12, 8]
//Output: The array isn’t symmetric.


/*

var array = [2, 4, -2, 7, -2, 4, 2] ;

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
console.log(mesage);

*/



//15.
//Write a program that intertwines two arrays. You can assume the arrays are of the same length.
//Input: [4, 5, 6, 2], [3, 8, 11, 9]
 //Output: [4, 3, 5, 8, 6, 11, 2, 9]


var a= [4, 5, 6, 2];
var b= [3, 8, 11, 9];

var newArray=[];

for (i=0 ; i < a.length ; i++) {

   newArray[newArray.length] = a[i];
   newArray[newArray.length]= b[i] ;

}

console.log(newArray);







 



























// Check if two arrays are indetical 
/*
var a = [1, 4, -2, 7, -2, 4, 2, 3] ;

var b = [2, 4, -2, 7, -2, 4, 2, 3];


if ( a.length === b.length) {

    for( i = 0 ; i < a.length ; i++) {

        if( a[i] === b [i]) {

            continue;

        } else {

            console.log("Arrays are not simmetrical");
            break;
        }
    }


} else {

    console.log("Arrays are not simmetrical"); 
}

if ( a.length === b.length && a[i] === b [i]) {


    console.log(" Arrays are simmetrical");
}
*/





 


