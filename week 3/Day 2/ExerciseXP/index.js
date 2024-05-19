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
// Actual:

typeof(5.5)
// Prediction: number
// Actual:

typeof(NaN)
// Prediction: NaN
// Actual:

typeof("hello")
// Prediction: string
// Actual:

typeof(true)
// Prediction: boolean
// Actual:

typeof(1 != 2)
// Prediction: true
// Actual:

"hamburger" + "s"
// Prediction: string
// Actual:

"hamburgers" - "s"
// Prediction: error
// Actual:

"1" + "3"
// Prediction: string
// Actual:

"1" - "3"
// Prediction: string
// Actual:

"johnny" + 5
// Prediction: string
// Actual:

"johnny" - 5
// Prediction: string
// Actual:

99 * "hello"
// Prediction: string
// Actual:

1 != 1
// Prediction: false
// Actual:

1 == "1"
// Prediction: true
// Actual:

1 === "1"
// Prediction: false
// Actual:





// Exercise 6

5 + "34"
// Prediction: string
// Actual:

5 - "4"
// Prediction: number
// Actual:

10 % 5
// Prediction: 0
// Actual:

5 % 10
// Prediction: 0.5
// Actual:

" " + " "
// Prediction:"  "
// Actual:

" " + 0
// Prediction: " 0"
// Actual:

true + true
// Prediction:
// Actual: true

true + false
// Prediction:
// Actual: false

false + true
// Prediction:
// Actual:

false - true
// Prediction: false
// Actual: 

!true
// Prediction: false
// Actual: 

3 - 4
// Prediction: -1
// Actual: