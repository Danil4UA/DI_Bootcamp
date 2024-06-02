// Todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

let userData  = []
let count = 0

let userForm = document.getElementById("libform")
userForm.addEventListener("submit", (event)=>{
    event.preventDefault()

    let matches = document.querySelectorAll("input")
    matches.forEach((element)=>userData.push(element.value.trim()))

    if(userData.includes("")){
        return alert("The input cannot be empety")
    }
    console.log(userData)

    let place = document.getElementById("place").value

    let adjective = document.getElementById("adjective").value

    let noun = document.getElementById("noun").value

    let person = document.getElementById("person").value

    let verb = document.getElementById("verb").value

    var story =  [
        `One day, in a far away ${place}, there was a ${adjective} ${noun}. Every day, ${person} loved to ${verb} with the ${adjective} ${noun}. It was an exciting adventure!`,
        `${person} went to the ${place} where they found a ${adjective} ${noun}. They decided to ${verb} together and had a ${adjective} time!`, 
        `In the ${place}, a ${adjective} ${noun} was waiting for ${person}. They both loved to ${verb} and it was the beginning of a ${adjective} journey!`,
    ]
    document.getElementById("story").textContent = story[count]
    
    count ++
    if(count > 3){
        count = 0
        return alert("Please refresh the page")
        
    }
})

function shuffleStory(){
    return document.getElementById("story").textContent = story[count]
}

document.getElementById("shuffle-button").addEventListener("click", shuffleStory)