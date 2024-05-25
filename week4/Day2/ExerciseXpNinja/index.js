// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.

function getRandomNumber (){
    let randomNumner = Math.floor(Math.random() * 100 + 1)
    for(let i = 0; i <= randomNumner; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }

}

getRandomNumber()

// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']

function capitalize (str) {
    let strArr = str.split("")
    let resultEven = []
    let resultOdd = []
    strArr.forEach((element)=>{
        if(strArr.indexOf(element) % 2 === 0){
            resultEven.push(element.toUpperCase())
            resultOdd.push(element)
        }else{
            resultEven.push(element)
            resultOdd.push(element.toUpperCase())
        }
    })
    return [resultEven.join(""), resultOdd.join("")]
}

console.log(capitalize("abcdef"))

//Exercise 3 : Is Palindrome?
// Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.

function isPalindrome (str) {
    let lowerCaseStr = str.toLowerCase().trim();

    return lowerCaseStr === lowerCaseStr.split("").reverse().join("")
}

console.log(isPalindrome("madam"))


// Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:

function biggestNumberInArray (arrayNumber) {
    let onlyNumbersArr = arrayNumber.filter((element)=>!isNaN(element))
    if(arrayNumber.length === 0 || onlyNumbersArr === 0){
        return 0
    }

    return onlyNumbersArr.reduce((acc, curr)=>{
        return Math.max(acc, curr)
    })
}

console.log(biggestNumberInArray([]))


// Exercise 5: Unique Elements
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.

// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]

function returnUniqueElements (arr){
    return arr.reduce((acc, value)=>{
        if(!acc.includes(value)){
            acc.push(value)
        }
        return acc
    },[])
}

console.log(returnUniqueElements([1,2,3,3,3,3,4,5]))