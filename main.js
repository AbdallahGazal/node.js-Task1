"use strict";
// ! Part 1

// * 1 - Convert the string "123" to a number and add 7.

// const strNumber = "123";
// let result = Number(strNumber) + 7;
// console.log(result);

// * 2 - Check if the given variable is falsy and return "Invalid" if it is.

// let input = 0;

// function falsyCheck(value) {
//   if (!value) {
//     return "Invalid";
//   } else {
//     return "Valid";
//   }
// }

// console.log(falsyCheck(input));

// * 3 - Use for loop to print all numbers between 1 and 10, skipping even numbers using continue.

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// * 4 - Create an array of numbers and return only the even numbers using filter method.

// const arrOfNumbers = [1, 2, 3, 4, 5];
// const modifiedArr = arrOfNumbers.filter((number) => number % 2 == 0);

// console.log(arrOfNumbers);
// console.log(modifiedArr);

// * 5 - Use the spread operator to merge two arrays, then return the merged array.

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// function merge(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// console.log(merge(array1, array2));

// * 6 - Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).

// let inputDayNumber = 6;

// function getDayName(num) {
//   switch (num) {
//     case 1:
//       return "Sunday";
//       break;
//     case 2:
//       return "Monday";
//       break;
//     case 3:
//       return "Tuesday";
//       break;
//     case 4:
//       return "Wednesday";
//       break;
//     case 5:
//       return "Thursday";
//       break;
//     case 6:
//       return "Friday";
//       break;
//     case 7:
//       return "Saturday";
//       break;
//   }
// }

// console.log(getDayName(inputDayNumber));

// * 7 - Create an array of strings and return their lengths using map method.

// const input = ["a", "asdw", "d2", "23asyy", "hlsdgjassdghshy"];

// function getArrayItemsLengths(arr) {
//   return arr.map(item => item.length);
// }
// console.log(getArrayItemsLengths(input));

// * 8 - Write a function that checks if a number is divisible by 3 and 5.

// function divisible(number) {
//   if (number % 3 == 0 && number % 5 == 0) return true;
//   else return false;
// }

// console.log(divisible(15));

// * 9 - Write a function using arrow syntax to return the square of a number.

// const squared = (number) => number ** 2;

// console.log(squared(5));

// * 10 - Write a function that destructures an object to extract values and returns a formatted string.

// const person = {name: 'John', age: 25}

// function destructure(person) {
//   const {name, age} = person
//   return `${name} is ${age} years old`
// }

// console.log(destructure(person));

// * 11 - Write a function that accepts multiple parameters (two or more) and returns their sum.

// function summation(...params) {
//   let result = 0;
//   for (const element of params) {
//     result += element
//   }
//   return result
// }
// console.log(summation(1,2,3,4,10));

// * 12 - Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.

// function wait() {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve("Success")
//         }, 3000);
//     })
// }

// wait().then((msg)=>{console.log(msg);})


// * 13 - Write a function to find the largest number in an array.

// const input = [1, 3, 7, 2, 4]

// function getMaxNumber(arr) {
//   return Math.max(...arr);
// }

// console.log(getMaxNumber(input));

// * 14 - Write a function that takes an object and returns an array containing only its keys.

// const inputObject = {name: "John", age: 30}

// function getKeys(obj) {
//   return Object.keys(obj)
// }

// console.log(getKeys(inputObject));

// * 15 - Write a function that splits a string into an array of words based on spaces.

// let input = "The quick brown fox";

// function splitString(str) {
//   return str.split(' ')
// }

// console.log(splitString(input));

// ! Part 2

// ? 1. What is the difference between forEach and for...of? When would you use each?

/*
* forEach: runs its iterations asynchronously, which means that all iterations start running at the same time
        *if you break in an iteration, only that iteration stops
        *I would use it if next iterations don't depend on the previous ones, or if I don't need later iterations to be delayed
* for of: runs normally in a synchronous way, if I break the whole loop stops
        *I would use it if next iterations depend on the previous
*/

// ? 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

/*
*Hoisting: happens automatically in javascript which moves the functions declarations, expression function declarations, variables declarations to the top of the scope leaving the initializations at the same place
*Example.. 
        console.log(x);                                               var x;             
        var x = 5;                 javascript converts that to        console.log(x);
        >undefined                                                    x = 5;
*TDZ: when hoisting happens to let and const declarations, they are moved to the top and are put in Temporal Dead Zone and they cannot be accessed before initialization
*Example..
        console.log(x);
        let x = 5;
        >error: Cannot access "x" before initialization
*/ 

// ? 3. What are the main differences between == and ===?

/*
1. == checks only the values (does type coercion)
2. === checks both values and data types
*/

// ? 4. Explain how try-catch works and why it is important in async operations.
/*
*try {}: runs the code in it's scope first, if it runs normally without any errors, then the code in the catch (err) {} block is skipped
*catch (err) {}: runs the code in it's block only if an error occurred in the try block,
        *the parameter err holds the error that occurred in the try block

*It's important in async operations because sometimes in the promise function, the reject() callback function is called which causes an error to be thrown
        *If the error is thrown it will stop the whole program, that's why we use try{} catch(err){} to catch that error and behave accordingly.

*/

// ? 5. What’s the difference between type conversion and coercion? Provide examples of each.

/*
* type conversion:
    It's done by the programmer using a constructor method like Number() or String()
* type coercion:
    it's done automatically when trying to do operations on 2 values of different data types
    examples: 2 + "2" ==> "22" , "2" / 2 ==> 1
*/

