let count = 0;


function playTheGame() {
    if (!confirm("Do you want to play the game?")) {
        return alert("No problem, Goodbye");
    }

    let userNumber = Number(prompt("Enter number from 0 to 10"))
    if (isNaN(userNumber)){
        return alert("Sorry Not a number, Goodbye")
    }
    if(userNumber < 0 || userNumber > 10){
        return alert("Sorry its not a good number, Goodbye")
    }
    let computerNumber = Math.floor(Math.random() * 11)

    console.log(`user number is ${userNumber} , computer number is ${computerNumber}`)
    count++ 
    if(count > 3){
        alert("out of chances")
        count = 0
        return;
    }
    console.log(`count is ${count}`)
    compareNumbers(userNumber, computerNumber)

    
}


function compareNumbers(userNumber,computerNumber) {
    if(userNumber === computerNumber){
        count = 0
        return alert("Winner")
    }
    if(userNumber > computerNumber){
        alert("Your number is bigger then the computers, guess again")
        return playTheGame()
    }
    if(userNumber < computerNumber){
        alert("Your number is smaller then the computers, guess again")
        return playTheGame()
    }
}

playTheGame()


