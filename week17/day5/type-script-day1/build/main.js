"use strict";
// it typecript we are using types
// its javascript and more
// typescript - .ts
// helps us to write a better javascript and reduce chances to make a mistake (we see it before we run the code)
// function sum (a, b) {
//     return a + b
// }
// sum(4, 5)
// sum(5, "5")
// let username = "John";
// let x = 0;
// let y;
// username = "Dan"
// // username = true
// y = 1
// y = "1"
// console.log(username, y)
// let a = 12;
// let b = "7";
// let c = 2;
// let result = a + b;
// let result1 = a + c;
// // let result2 = a / b
// console.log(result, result1);
/** type number */
let num = 7;
// type annotation to a variable
// now the typescript is not guessing bec we put a type direcrly. it called type annotation
let num1 = 9;
let num3;
// errors: =>
// num3 = ""
// let num4: number = "hi"
/** type string */
let str = "";
str = "hi";
/** erros: => */
// str = true
/** type boolean */
let bool = true;
bool = false;
/** errors:  */
// bool = 0
/** type any - try not to use any as much as possible */
let anyType;
anyType = 1;
anyType = "";
anyType = true;
/** union type */
// its a union between more than 1 type
let myUnion;
myUnion = 1;
myUnion = "string";
// error => 
// myUnion = true
/** RegExp type */
let reg = /\w+/g;
/** type Array */
let arr = [];
arr[0] = 1;
arr[1] = "str";
let strArr = [];
strArr[0] = "a";
// error => 
// strArr[1] = 1
strArr.push("hi");
//error =>
// strArr.push(true)
let numArr = [];
numArr.push(1);
// error => 
// numArr.push("q")
let numStrArr = ["a", 1, "hi"];
//error => 
// numStrArr.push(true)
/** type Tuple */
// we can assign the structure and we cannot change the order
let myTuple = ["a", 1];
myTuple[0] = "p";
//error =>
// myTuple[0] = 1
/** type: Object */
let myObj = {
    name: "John",
    age: 25
};
// array its an object so we havo no errors
// myObj = []
myObj.age = 15;
let myName = "aaa";
let a = 1;
a = "";
let user1 = {
    name: "Anne",
    age: 33,
    // we cannot create smth extra, its not in the type
    // error => 
    // gender: "233"
};
let user2 = {
    name: "John",
    age: 22,
    gender: "m"
};
user2.gender = 2;
let user3 = {
    name: "vvv",
    age: 23,
    gender: "m"
};
/** type Enum */
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
let fetchStatus = "loading";
//error => 
// fetchStatus = "someting"
/** function type */
const sum = (a, b) => {
    return a + b;
};
sum(4, 4);
const exercise = (a, b) => {
    // type guard 
    if (typeof b === "string") {
        return a + b + "";
    }
    return a + b;
};
console.log(exercise(4, "4"));
/** returning type void
 * void its a type of function that doesnt return anything
 */
const greet = (name) => {
    console.log(`Hello ${name}`);
};
greet("John");
const add = (a, b) => {
    return a + b;
};
const add2 = (a, b) => {
    return a + b + 2;
};
// default params
const addWithDefault = (a, b = 5) => {
    return a + b;
};
addWithDefault(4);
// optional params
const addOptional = (a, b) => {
    // if(typeof b === undefined){
    //     return a
    // } 
    return a + (b || 0);
};
// never type
const throwErrpr = (msg) => {
    throw new Error(msg);
};
// errors return never type 
// if it infinite - type is never 
/**
 * fucntion infinite {
 *  while(true){
 *
 *  }
 * }
 */ 
