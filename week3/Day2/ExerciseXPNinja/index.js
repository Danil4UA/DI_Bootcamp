//Exercise 1 : Evaluation

5 >= 1
// true

0 === 1
//false

4 <= 1
//false


1 != 1
//false

console.log("A" > "B")
//prediction: error
//result: false

console.log("B" < "C")
//prediction: error
//result: true

console.log("a" > "A")
//prediction: error
//result: ture

console.log("b" < "A")
//prediction: error
//result: false


true === false
//false

true != true
//false


//Exercise 2 : Ask For Numbers

let strNumbers = prompt("Pelase enter a string of numbers separated by commas. Examples: '1, 3' ")

let result = strNumbers.split(",").reduce((a,b)=> parseInt(a) + parseInt(b))
console.log(result)

//Exercise 3 : Find Nemo

// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.


let userString = prompt("eneter your string with Nemo here")

let nemoIndex = userString
    .split(" ")
    .findIndex((element)=>element === "Nemo")


if(nemoIndex < 0){
    console.log("I can't find 'Nemo'")
}else {
    console.log(`I found Nemo at ${nemoIndex} position`)
}

//Exercise 4 : Boom

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.

let userNumber = prompt("Enter your number here")

let resultString = "boom"

if(userNumber < 2){
    console.log(resultString) 
} else {

    resultString = "b" + "o".repeat(userNumber) + "m"

    if (userNumber % 2 === 0 && userNumber % 5 === 0) {
        resultString = resultString + "!"
        console.log(resultString.toUpperCase())
    } else if (userNumber % 5 === 0 ){
        console.log(resultString.toUpperCase())
    }
    console.log(resultString)
}