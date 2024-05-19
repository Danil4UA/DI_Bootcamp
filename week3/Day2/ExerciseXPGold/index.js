// Exercise 1 : Favorite Color

let sentence = ["my","favorite","color","is","blue"];

console.log(sentence.join(" "))

// Exercise 2

let str1 = "mix";
let str2 = "pod";

let str1Arr = str1.split("");
let str2Arr = str2.split("")

str1Arr
    .splice(0,2, str2[0], str2[1])
str2Arr
    .splice(0,2, str1[0], str1[1] )

let result = [str1Arr.join(""), str2Arr.join("")]

console.log(result.join(" "))


// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1 = prompt("Enter the first number")

let num2 = prompt("Enter the second number")

console.log(typeof(num1))

console.log(typeof(parseInt(num1)))

alert(parseInt(num1) + parseInt(num2))

