// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.


function isBlank(str){
    if(typeof str !== "string"){
        return "please enter the string"
    }
    if(str.length > 0){
        return false
    }else {
        return true
    }
}

console.log(isBlank(''));      // --> true
console.log(isBlank('abc'));   //  --> false

//Exercise 2 : Abbrev_name

// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

function abbrevName(str){
   let arrStr = str.trim().split(" ")
   let result = arrStr[1] = arrStr[1][0]+"."
   return arrStr[0] + " " + result
}



console.log(abbrevName("Robin Singh"));  // --> "Robin S."

// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

function swapString (str) {
    return str.split("").map((element)=>{
        if(element !== element.toUpperCase() ){
            return element.toUpperCase()
        }else {
            return element.toLowerCase()
        }
    }).join("")
}

console.log(swapString("The Quick Brown Fox"))


// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.


function isOmnipresent (arr, num){
    let result = true;
    arr.forEach(element => {
        if(!element.includes(num)){
            result = false
        }
    })
    return result
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))