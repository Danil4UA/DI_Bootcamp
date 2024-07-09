// Instructions
// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
// Test:

function makeAllCaps(arr){
    const ifAllStrings = arr.every(item=>typeof(item)==="string")
    return new Promise((res,rej)=>{
        ifAllStrings ? res(arr.map(item=>item.toUpperCase())) : rej("not all eleements are strings")
    })
}

function sortWords(arr){
    return new Promise((res,rej)=>{
        arr.length > 4 ? res(arr.sort()): rej("the length is less then 4")
    })
}
//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))

// part 2

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
  

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)


function toJs(jsStr) {
    return new Promise((res, rej) => {
        const jsObject = JSON.parse(jsStr);
        if (Object.keys(jsObject).length > 0) {
            res(jsObject);
        } else {
            rej("The Morse JavaScript object is empty");
        }
    });
}

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)

function toMorse(morseJS) {
    return new Promise((res, rej) => {
        const userString = prompt("Enter your word or sentence")
        const allKeys = Object.keys(morseJS);
        const ifIncludes = userString.split("").every(item => allKeys.includes(item));

        if (ifIncludes) {
            let result = userString.split("").map(element => morseJS[element]);
            res(result);
        } else {
            rej("One or more characters don't exist in the Morse JavaScript object");
        }
    });
}



// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)


function joinWords(morseTranslation) {
    const resultString = morseTranslation.join("");
    const resultElement = document.createElement("p");
    resultElement.textContent = resultString;
    document.body.appendChild(resultElement);
}


toJs(morse)
    .then((morseJS) => toMorse(morseJS))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch((err) => console.log(err));
