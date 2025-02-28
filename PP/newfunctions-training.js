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