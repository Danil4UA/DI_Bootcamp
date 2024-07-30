// const form = document.getElementById("form")
// const questionFild = document.getElementById("question")

// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     getQuestion()
// })
// let userScore = 0;
// let moveCounter = 0;

// function getQuestion(){
//     fetch(`http://localhost:3000/quiz/${moveCounter}`)
//     .then((res)=>res.json())
//     .then((data)=>{
//         moveCounter = moveCounter + 1
//         const question = data.question
//         const answer = data.answer
        
//         questionFild.innerHTML = `${question}`

        
//     })
// }