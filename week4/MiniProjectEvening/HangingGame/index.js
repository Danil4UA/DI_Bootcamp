// // let firstPlayerWord = prompt("Enter your word, it must have a minimum of 8 letters")

// let firstPlayerWord = "hello"

// function isValidSingleWord(str) {
//     // Регулярное выражение для проверки, что строка содержит только буквы (без цифр и специальных символов)
//     const regex = /^[a-zA-Z]+$/;
//     return regex.test(str) && str.length >= 8;
// }
// isValidSingleWord(firstPlayerWord)


// let firstPlayerWordArray = firstPlayerWord.split("")
// let currentResultArray = []

// let hiddenWord = ["*","*","*","*","*"]


// let secondUserLetter = "l"

// console.log(firstPlayerWordArray)
// console.log(hiddenWord)

// let newArray = firstPlayerWordArray.map((element)=>{
//     if(element === secondUserLetter){
//         return element
//     }else{
//         return "*"
//     }
// })


// console.log(newArray)



// function hangingGame (){
//     // let secondUserLetter = prompt("Enter a letter")
//     
//     if(!secondUserLetter.length === 1){
//         alert("data you put is not valid")
//     }
//     if(firstPlayerWordArray.includes((element)=>{

//     })){

//     }
// }

let userWord = ["h", "e", "l", "l", "o"]

let hiddenWord = ["*", "*", "*", "*", "*"]

function hangingGame (){

    for(let i = 0; i < 10; i++){





        // let userGuess = prompt("Enter your letter");

        // let findElement = userWord.findIndex((element)=>{
        //     return element === userGuess
        // })

        // if(userWord[findElement] === userWord[findElement + 1]){
        //     hiddenWord.splice(findElement, 2, userGuess, userGuess)
        // }else {
        //     hiddenWord.splice(findElement, 1, userGuess)
        // }
        // console.log(hiddenWord)
        // if(hiddenWord.join("") === userWord.join("")){
        //     return "you finished the game"
        // }
    }
}

hangingGame()

// let userGuess = "h"
// // Validation of lentgh === 0

// console.log(findElement)


// if(userWord[findElement] === userWord[findElement + 1]){
//     hiddenWord.splice(findElement, 2, userGuess, userGuess)
// }else {
//     hiddenWord.splice(findElement, 1, userGuess)
// }


// console.log(hiddenWord)