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



var sum = 0;
var product = 1;

var arr = [1, 2, 3, 4, 5];

for ( i = 1 ; i < arr.length ; i++) {

    if ( typeof arr[i] =="number") {
        
        sum = sum + arr[i];
        proudct= product * arr[i];
        
    } else {return false}

}

console.log("Sum is :", sum ," and product is ", product)



