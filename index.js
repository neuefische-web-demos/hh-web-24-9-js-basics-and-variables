// console.clear();
// console.log("Hello World");

// console.error("Error message");

// This is a handy note

///////////////////////////
//      Variables        //
///////////////////////////

// const myNumber = 42;
// const myString = "Hello World";
// myString = myString + "!";
// console.log(myNumber);
// console.log("myNumber: ", myNumber);

// myNumber = myNumber + 1;

// let myMutableNumber = 42;
// console.log("myMutableNumber: ", myMutableNumber);
// myMutableNumber = myMutableNumber + 1;
// console.log("myMutableNumber: ", myMutableNumber);

//////////////////////////////////////
//      Primitive Data Types        //
//////////////////////////////////////

// const myNumber = 42;
// const myString = "Hello anchors";
// const myBoolean = false; // true
// const nothing = null;
// const myUndefined = undefined;
// 2 others Big Int and Symbols

// We need to be aware of type coercion in javascript!
// It can lead to unexpected outcomes

// const oneTimeFee = "5";
// const monthlyFee = 12;
// const amountToBeCharged = oneTimeFee + monthlyFee;

// console.log("amountToBeCharged: ", amountToBeCharged);

// // check the type of data

// console.log("typeof amountToBeCharged: ", typeof amountToBeCharged);

// Maths!

// add
const oneTimeFee = 5;
const monthlyFee = 12;
const amountToBeCharged = oneTimeFee + monthlyFee; // result will be 17
console.log(amountToBeCharged);

// subtract

const mortgageSum = 20000;
const alreadyPayed = 5000;
const amountToBePayed = mortgageSum - alreadyPayed; // result will be 15000
console.log(amountToBePayed);

// multiply
const length = 4;
const width = 5;
const area = length * width; // result will be 20
console.log(area);

// division

const students = 15;
const groups = 3;
const studentsPerGroup = students / groups; // result will be 3
console.log(studentsPerGroup);

// remainder

console.log(8 % 3); // will log 2

// assignment operators
// let balance = 20;
// // balance = balance + 5;
// balance += 5;
// console.log(balance); // will log 25

// let balance = 20;
// balance -= 5;
// console.log(balance); // will log 15

// let price = 8;
// // price = price + 1;
// price++;
// console.log(price); // will log 9

let price = 8;
price--;
console.log(price); // will log 7
