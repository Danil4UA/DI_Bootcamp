// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.


//using 2 loops

for(let a = 0; a < 6; a++){
    let result = []
    for(let b = 0; b <= a; b++){
        result.push(" * ")
    }
    console.log(result.join(""))
}

// using one loop

for(let i = 1; i <= 6; i ++){
    console.log(" * ".repeat(i))
}



// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google

const numbers = [5,0,9,1,7,4,2,6,3,8];

let arrToString = numbers.toString()
console.log(arrToString)

let arrJoin = numbers.join("")
console.log(arrJoin)

let arrJoinPlus = numbers.join("+")
console.log(arrJoinPlus)

let arrJoinSpace = numbers.join(" ")
console.log(arrJoinSpace)

// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
        if (numbers[j] < numbers[j + 1]) {
    
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}