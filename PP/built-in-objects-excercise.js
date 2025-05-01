//1.
//Write a functional expression that duplicates each element of a given array.
/*
let array = [1, 2, 3];

let duplicated = array.map(function(a) {
    return a * 2;
}
);


console.log(duplicated);

*/

//2.
//Remove Duplicates
//Remove all duplicates in a given array.
//input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

/*

function RemoveDuplicate(a) {

    let newarr = [];

    for( let i = 0 ; i < a.length ; i++) {

        let check = false;

        for (let j = 0 ; j < newarr.length ; j++){

            if( a[i] === newarr[j]) {

                check = true;
            }
        } 

        if (!check) {

            newarr.push(a[i]);
        }

    }

    newarr.sort(function(a,b) {

        return a-b;
    });

  return newarr;

};

let final = RemoveDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);

console.log(final);

*/

//3.
//Check for Odd Length
//Check if a given array has an odd number of elements.

/*

function CheckOddLength (arr) {
    
    let mesage = "Array is not Odd"

    if ( arr.length % 2 !== 0) {

        mesage = "Array is Odd"
    }

    return mesage;
}


let final = CheckOddLength([1,2,3,4,6,4]);

console.log(final);

*/

//4.
//Count Elements Less Than Middle
//Count the number of elements less than the middle one (if odd count). 
//Show an error otherwise.

/*

function CountLessMiddle (arr) {
     
    let newarr = [];

    if ( arr.length % 2 == 0) {

        let mesage = " Error! Array length is Even. Try with odd length array please";

    return mesage;

    } else {

        for (i = 0 ; i < arr.length / 2 - 1 ; i++) {

            newarr.push(arr[i]);

        }

    }

    return newarr;
}


let final = CountLessMiddle([1,2,3,4,6,8,9,8]);

console.log(final);

*/


//5.
//Find Smallest Element
//Return an object with the smallest value and its last index.
//Input: [1, 4, -2, 11, 8, 1, -2, 3]
//Output: { minValue: -2, minLastIndex: 6 }

/*

const arr =  [1,-4, 4, -2, 11, 8, 1, -2,-4, 3]

const minElLastIndex = function(element) {


    let minValue = Math.min(...element);

    let minLastIndex = element.lastIndexOf(minValue);

    return {

        minValue: minValue,
        minLastIndex: minLastIndex,
    };

};


console.log ( minElLastIndex(arr));

*/

//6.
// Elements Less Than Given Value
//Return all elements less than a given value.

/*

const arr =  [1,6, 4, 3, 11, 8, 1, -2,-4, 3,6]

const marker = 7;

let final = arr.filter(function (el) {

return el < marker;
});

console.log (final);

*/


//7. 
// Starts With \"pro\"
//Find all elements that start with “pro” (case-insensitive).

/*

const arr = ["professional", "Problem", "protest", "black", "sick", "apple"];

const proFinder = arr.filter(function (element) {
    

return element.toLowerCase().startsWith("pro");

});


console.log(proFinder);


 
//Useful method .startsWith("")


*/


//8.
//Higher Order Filter 
//Write a function that expects an array and a callback that filters out some elements.

/*

const arr = [1,2,5,6,12,43];

const higherOrderFilter = function (a,callback){

    return a.filter(callback);

};

const filterFunction = function(el) {

    return el > 8; 
};

*/

//9–12. Supermarket Product List
//Create a product list with name and price.
//Calculate the total price.
//Calculate the average product price (3 decimals).
//Print the name of the most expensive product in UPPERCASE.

/*

const productList = [
    { name: "Laptop", price: 999.99 },
    { name: "Headphones", price: 199.99 },
    { name: "Smartphone", price: 799.99 },
    { name: "Keyboard", price: 49.99 },
    { name: "Monitor", price: 249.99 }
  ];



  function sumPrices(accumulator, element) {
    return accumulator + element.price;
}

let totalPrice = productList.reduce(sumPrices, 0);


let averagePrice = totalPrice / productList.length;

averagePrice = averagePrice.toFixed(3)

const biggestPrice = productList.reduce(function(a, b) {
    if (b.price > a.price) {
        return b;
    } else {
        return a;
    };
});

console.log("Total price: ", totalPrice, "|| Average price: ", averagePrice, "|| Biggest price: ", biggestPrice.name.toUpperCase());

*/

/* Example for reduce, just using a and b. Clarification on simpler example!

arr= [1,2,3,4,4,7,9,10];


var Max = arr.reduce(function(a,b){

    if(a > b) {

        return a;
    } else {

        return b;
    }

} );

console.log(Max);

*/


//13–17. 
//Validators
//Check if string is ALL CAPS.
//Check if string contains any digits.
//Check if string is a valid hex color.
//Check if number is between 1900 and 2018.
//Create a validator function that returns all these validators as properties.


/*


const validator = function (str, num) {
    const validatorCaps = function (str) {
        let message = "";
        if (str === str.toUpperCase()) {
            message = "String is All CAPS";
        } else {
            message = "String is not ALL CAPS";
        }
        return message;
    };

    const validatorDigit = function (str) {
        let message = "";
        let digits = "0123456789";
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (digits.includes(char)) {
                message = "String contains a digit";
                return message;
            }
        }
        message = "String does not contain a digit";
        return message;
    };

    const validatorHexColor = function (str) {
        let message = "";
        let hexDigits = "0123456789abcdef";
        if (str[0] !== "#") {
            message = "String is not a valid hex color (missing #)";
        } else if (!(str.length === 4 || str.length === 7)) {
            message = "String is not a valid hex color (wrong length)";
        } else {
            for (let i = 1; i < str.length; i++) {
                let char = str[i].toLowerCase();
                if (!hexDigits.includes(char)) {
                    message = "String is not a valid hex color (invalid character)";
                    break;
                }
            }
            if (!message) {
                message = "String is a valid hex color!";
            }
        }
        return message;
    };

    const validatorNumRange = function (num) {
        let message = "";
        if (num >= 1900 && num <= 2018) {
            message = "Number within Range";
        } else {
            message = "Number is not within range";
        }
        return message;
    };

    return {
        caps: validatorCaps(str),
        digit: validatorDigit(str),
        hexColor: validatorHexColor(str),
        numRange: validatorNumRange(num)
    };
};

let result = validator("ABC123", 2000);
console.log(result);


*/







//18.
//Calculate number of days to a given birthday
//Adamovo resenje : probati da resis na svoj nacin !!!
/*
const untilMyBirthday = function() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 3, 4);

    if (today > birthday) {
        birthday.setFullYear(today.getFullYear() + 1);
    };

    const difference = birthday - today;
    const daysUntilBirthday = Math.ceil(difference / (1000 * 3600 * 24));

    return daysUntilBirthday;
};

console.log("Task 18: ", untilMyBirthday());

*/



//19. 
// Trip Duration
// Calculate trip time from departure to arrival.
// Input: 8:22:13, 11:43:22
// Output: 3 hours 21 minutes 9 seconds

/*

 const tripDuration = function (departure , arrival){

    departure = departure.split(":");

    arrival = arrival.split(":");

    const startHours = parseInt(departure[0]);  
    const startMinutes = parseInt(departure[1]);
    const startSeconds = parseInt(departure[2]);


    const endHours = parseInt(arrival[0]);
    const endMinutes = parseInt(arrival[1]);
    const endSeconds = parseInt(arrival[2]);


    const departureSeconds = startHours * 3600 + startMinutes * 60 + startSeconds;

    const arrivalSeconds = endHours * 3600 + endMinutes * 60 + endSeconds;

    
    const tripDurationResult = arrivalSeconds - departureSeconds;

    const hours = Math.floor(tripDurationResult / 3600);
    const minutes = Math.floor((tripDurationResult % 3600) / 60);
    const seconds = tripDurationResult % 60;

    return hours + " hours " + minutes + " minutes " + seconds + " seconds";

 
};

console.log (tripDuration('8:22:13','11:43:22'));


*/


//20. 
//3D Point Constructor
//Create a constructor function for points in space with x, y, and z.

/*

function Point(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Point.prototype.printPoints = function() {
    console.log("X:", this.x, "Y:", this.y, "Z:", this.z);
};

const newPoint = new Point(3, 5.2, 4);
console.log(newPoint.x + ", " + newPoint.y + ", " + newPoint.z); // Output: 3, 5.2, 4
newPoint.printPoints(); // Output: X: 3 Y: 5.2 Z: 4


*/

//21
//Distance Between Points
//Write a function that calculates distance between two 3D points.

/*


function Points(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.printPoints = function() {
        console.log("X:", this.x, "Y:", this.y, "Z:", this.z);
    };
}

const newPoint = new Points(3, 5.2, 4);
console.log(newPoint.x + ", " + newPoint.y + ", " + newPoint.z);
newPoint.printPoints();

// 21. Distance Between Points
function calculateDistance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    const dz = point2.z - point1.z;

    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

// Test with two more points
const pointA = new Points(1, 2, 3);
const pointB = new Points(4, 6, 8);

pointA.printPoints();
pointB.printPoints();

const distance = calculateDistance(pointA, pointB);
console.log("Distance between pointA and pointB:", distance);


*/