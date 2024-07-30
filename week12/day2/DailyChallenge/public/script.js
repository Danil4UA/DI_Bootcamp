const start = document.getElementById("start")
const question = document.getElementById("question")
const answer = document.getElementById("answer")
const form = document.getElementById("form")

let countMoves = 0
let score = 0;

start.addEventListener("click", (e)=>{
    e.preventDefault()
    displayQuestion(countMoves)
    countMoves = countMoves + 1
})

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    checkAnswer()
})


async function displayQuestion(countMoves) {
    try {
        const response = await fetch("http://localhost:3000/quiz");
        const data = await response.json();
        question.innerHTML = data[countMoves].question;
    } catch (error) {
        console.error(error);
    }
}

async function checkAnswer() {
    const quizQuestion = question.innerHTML;
    const quizAnswer = answer.value;
    const data = {
        quizQuestion,
        quizAnswer
    };

    try {
        const correctReply = await fetch("http://localhost:3000/quiz");
        const correctData = await correctReply.json();
        const correctFinal = correctData[countMoves];

        const response = await fetch("http://localhost:3000/quiz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data, correctFinal })
        });

        const responseData = await response.json();

        if (responseData.message === "Correct") {
            score++;
        }
        countMoves++;
        displayQuestion(countMoves);

    } catch (error) {
        console.error(error);
    }
}