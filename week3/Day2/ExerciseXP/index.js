// 🌟 Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>


let favoriteFood  = "pizza";

let favoriteMeal = "lunch"

console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`)


// 🌟 Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.


// PART 1

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]

let myWatchedSeriesLength = myWatchedSeries.length;

console.log(myWatchedSeriesLength)

let myWatchedSeriesSentence = myWatchedSeries.toString()
console.log(myWatchedSeriesSentence)

console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`)

// PART 2

myWatchedSeries[2] = "friends"
myWatchedSeries.push("Supernatural")
myWatchedSeries.unshift("Game of thrones")
myWatchedSeries.splice(1, 1)
console.log(myWatchedSeries[1][2])
console.log(myWatchedSeries)

// EXERCISE 3
let celsius = 30;
let fahrenheit = (celsius / 5) * 9 + 32;

console.log(fahrenheit)

// EXERCISE 4


let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual:

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual:

// What is the value of c? 
// Prediction: undefined;

//console.log(3 + 4 + '5');
//Prediction: "75"


// EXERCISE 5

typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: NaN
// Actual: number (NaN is a special numeric value)

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: true
// Actual: boolean (typeof checks the type, not the value)

"hamburger" + "s"
// Prediction: string
// Actual: hamburger + "s" => "hamburgers" (result is a string)

"hamburgers" - "s"
// Prediction: error
// Actual: NaN (invalid subtraction operation)

"1" + "3"
// Prediction: string
// Actual: "1" + "3" => "13" (result is a string)

"1" - "3"
// Prediction: string
// Actual: -2 (coercion converts strings to numbers for subtraction)

"johnny" + 5
// Prediction: string
// Actual: "johnny5" (result is a string)

"johnny" - 5
// Prediction: string
// Actual: NaN (invalid subtraction operation)

99 * "hello"
// Prediction: string
// Actual: NaN (invalid multiplication operation)

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true (loose equality with type coercion)

1 === "1"
// Prediction: false
// Actual: false (strict equality without type coercion)





// Exercise 6

5 + "34"
// Prediction: string
// Actual: "534" (result is a string)

5 - "4"
// Prediction: number
// Actual: 1 (coercion converts strings to numbers for subtraction)

10 % 5
// Prediction: 0
// Actual: 0 (remainder of 10 divided by 5 is 0)

5 % 10
// Prediction: 0.5
// Actual: 5 (remainder of 5 divided by 10 is 5)

" " + " "
// Prediction: "  "
// Actual: "  " (result is a string with two spaces)

" " + 0
// Prediction: " 0"
// Actual: " 0" (result is a string)

true + true
// Prediction: 2 (true coerced to 1, 1 + 1 = 2)
// Actual: 2

true + false
// Prediction: 1 (true coerced to 1, false to 0, 1 + 0 = 1)
// Actual: 1

false + true
// Prediction: 1 (false coerced to 0, true to 1, 0 + 1 = 1)
// Actual: 1

false - true
// Prediction: -1 (false coerced to 0, true to 1, 0 - 1 = -1)
// Actual: -1

!true
// Prediction: false
// Actual: false (negation of true is false)

3 - 4
// Prediction: -1
// Actual: -1