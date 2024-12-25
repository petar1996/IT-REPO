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