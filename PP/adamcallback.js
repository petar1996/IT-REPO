// Task 1


(function () {
    let arr = [1, 2, 3, 4, 5];
    let result = [];

    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    };

    console.log(result);
})();


// Task 2


(function (a, b) {
    console.log(a * b);
})(4, 5);


// Task 3


(function (a) {
    let newArray = "";
    let result = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === "m" || a[i] === "M") {
            newArray += "*";
            result++;
        } else {
            newArray += a[i];
        };
    };

    console.log(newArray, result);
})("programMing");


// Task 4


function emailSuggestion (a, b) {
    return function () {
        console.log(a.toLowerCase() + "." + b.toLowerCase() + "@gmail.com");
    };
};

const emailFunction = emailSuggestion("Pera", "Peric");
emailFunction();


// Task 5


function decValue (a) {
    return function () {
        let decimal = parseInt(a, 8);
        console.log(decimal);
    };
};

const decValueResult = decValue(34);
decValueResult();
console.log("Presek");


// Task 6


function validatePassword(password, successCallback, errorCallback) {
    if (password.length < 6) {
      errorCallback("Password must be at least 6 characters long.");
      return;
    }
  
    let hasDigit = false;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= '0' && password[i] <= '9') {
        hasDigit = true;
        break;
      }
    }
  
    if (hasDigit) {
      successCallback("Password is valid.");
    } else {
      errorCallback("Password must contain at least one digit.");
    }
  }
  
  function successCallback(message) {
    console.log(message);
  }
  
  function errorCallback(message) {
    console.log(message);
  }
  
  validatePassword("JSGuru9", successCallback, errorCallback);


// // Task 7


// function filterArray (array, isOdd) {
//     isOdd(callback);




//     function callback () {
//         let newArr = [];

//         for (let i = 0; i < array.length; i++) {
//             if (array[i] % 2 !== 0) {
//                 newArr.push(array[i]);
//             }

//             console.log(newArr);
//         }
//     }
// }

// console.log(filterArray([2, 8, 11, 4, 9, 3], isOdd));


/// Task 8

function hasFive (string) {
    

    for (let i = 0; i < string.length; i++) {
        if (callback(string[i])) {
            return true;
        } else {
            return false;
        };
    }


    function callback(num) {
        for( i = 0 ; i < num.length; i++){

            if (num [i]=== "5") {
                return true;
            } else {

            return false;
            };
        }
    };

};



console.log(hasFive("Ada5m6Ad5am"));