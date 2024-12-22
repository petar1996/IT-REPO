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
//Write a for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, 
// and display a message.

for (var i = 0; i < 15; i++) {

    if(i % 2 == 0) {

        console.log(i, " is even")
    }
    else {

        console.log(i, " is odd")
    }
}
