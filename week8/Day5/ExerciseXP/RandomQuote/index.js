const quotes = [
    {
        id: 0,
        author: "Daniel",
        quote: "To be or not to be"
    },
    {
        id: 1,
        author: "Daria",
        quote: "Dont wish for it. Work for it."
    },
    {
        id: 2,
        author: "Marina",
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving"
    },
]


let randomNumbers = []

//Elements

const generateButton = document.getElementById("generate")

function generateRandomQuoteNumber(){
    const randomQuoteNumber = Math.floor(Math.random() * quotes.length)
    randomNumbers.push(randomQuoteNumber)
    return randomQuoteNumber
}

generateButton.addEventListener("click", (event)=>{
    event.preventDefault()
    while (randomNumbers[randomNumbers.length - 1] === generateRandomQuoteNumber()){
        generateRandomQuoteNumber()
    }
    let quoteNumberToDisplay =  randomNumbers[randomNumbers.length - 1]
    document.querySelector(".section-content").textContent = quotes[quoteNumberToDisplay].quote
})
