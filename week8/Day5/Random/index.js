
// Elements: 
const button = document.getElementById("generate")
const container = document.querySelector(".container")
const formToAddQuote = document.getElementById("form-add")
const calculateButton = document.querySelector(".calculate-characters")
const filterFrom = document.getElementById("filter-form")

const quotes = [
    {
      id: 1,
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      id: 2,
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama"
    },
    {
      id: 3,
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      id: 4,
      quote: "Get busy living or get busy dying.",
      author: "Stephen King"
    },
    {
      id: 5,
      quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
      author: "Stephen Kin"
    },
    {
      id: 6,
      quote: "Believe you can and you're halfway there.",
      author: "Stephen Kin Roosevelt"
    },
    {
      id: 7,
      quote: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins"
    },
    {
      id: 8,
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      id: 9,
      quote: "Act as if what you do makes a difference. It does.",
      author: "William James"
    },
    {
      id: 10,
      quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
      author: "Roy T. Bennett"
    },
    {
      id: 11,
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      id: 12,
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      id: 13,
      quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson"
    },
    {
      id: 14,
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      id: 15,
      quote: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      id: 16,
      quote: "The mind is everything. What you think you become.",
      author: "Buddha"
    },
    {
      id: 17,
      quote: "The best revenge is massive success.",
      author: "Frank Sinatra"
    },
    {
      id: 18,
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas A. Edison"
    },
    {
      id: 19,
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      id: 20,
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    }
  ];

function getRandomQuote (){
    const randomNumber = Math.floor(Math.random() * quotes.length)
    return (
        `<div>
            <p class="quote-content">${quotes[randomNumber].quote}</p>
            <p class="quote-author">${quotes[randomNumber].author}</p>
        </div>
        <button class="calculate-characters">Calculate characters</button>`
    )
}

function addQuote (content, author) {
    document.getElementById("add-quote").value = ""
    document.getElementById("add-author").value = ""
    return (
        `<div>
            <p class="quote-content">${content}</p>
            <p class="quote-author">${author}</p>
        </div>
        <button class="calculate-characters">Calculate characters</button>`
    )
}

function calculateCharacters (){
    const amountOfCharacters = document.getElementById("add-quote").value.trim().length
    return (`<p>
            Total amount of characters: ${amountOfCharacters}
        </p>`)
}

button.addEventListener("click", (e)=>{
    e.preventDefault()
    container.innerHTML = ""
    container.innerHTML = getRandomQuote()
})


formToAddQuote.addEventListener("submit", (e)=>{
    e.preventDefault()
    const addQuoteContent = document.getElementById("add-quote").value
    const addQuoteAuthor = document.getElementById("add-author").value

    container.innerHTML = addQuote(addQuoteContent, addQuoteAuthor)

})

function filterQuotesByAuthor(author){
    const result =  quotes.filter((item)=>item.author.includes(author)).map(item=>item.quote)

   return result

}

filterFrom.addEventListener("submit", (e)=>{
    e.preventDefault()
    const authorName = document.getElementById("filter-author").value.trim()
    container.innerHTML = filterQuotesByAuthor(authorName)
})
// calculateButton.addEventListener("click", (e)=>{
//     e.preventDefault()
    
//     container.appendChild(calculateCharacters())
// })
