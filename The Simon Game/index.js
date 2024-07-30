const root = document.getElementById("root")
const container = document.getElementById("container")
const button = document.getElementById("start")
const blocks = document.querySelectorAll(".item")
const title  = document.getElementById("title")
let memorise = []
let userGuess = []

button.addEventListener("click", (e)=>{
    e.preventDefault()
    randomMove()
})
blocks.forEach((item, i) => item.addEventListener("click", (e)=>{
    e.preventDefault()
    userGuess.push(i)
    console.log(memorise)
    console.log(userGuess)
    let ifCorrect = memorise.every((item,i)=>{item[i] === userGuess[i]})
    console.log(ifCorrect)
    
}))



function randomMove () {
    const randomNumber = Math.floor(Math.random() *  4)
    memorise.push(randomNumber)
}
