//Task 1: Count Vowels in a String
//Write a function to count vowels in a provided string. Vowels are: a, e, i, o, u (both lowercase and uppercase).
//Input: "JavaScript"
//Output: 3

var countv = function countVowels(a) {

    var sum = 0;

    for ( let i=0 ; i < a.length ; i++) {

        if (a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u' 

            a[i] === 'A' || a[i] === 'E' || a[i] === 'I' || a[i] === 'O' || a[i] === 'U') {

            sum += 1;


         };       


    };

    return sum;

};

console.log(countv("Javascript"));