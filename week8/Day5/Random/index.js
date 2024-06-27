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
        author: "Stephen King"
      },
      {
        id: 6,
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
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
      },
      {
        id: 21,
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
      },
      {
        id: 22,
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Franklin D. Roosevelt"
      },
      {
        id: 23,
        quote: "Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one.",
        author: "John Lennon"
      },
      {
        id: 24,
        quote: "Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win.",
        author: "Stephen King"
      },
      {
        id: 25,
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
      },
      {
        id: 26,
        quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        author: "Buddha"
      },
      {
        id: 27,
        quote: "If you cannot do great things, do small things in a great way.",
        author: "Napoleon Hill"
      },
      {
        id: 28,
        quote: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh"
      },
      {
        id: 29,
        quote: "What you do speaks so loudly that I cannot hear what you say.",
        author: "Ralph Waldo Emerson"
      },
      {
        id: 30,
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
      },
      {
        id: 31,
        quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        author: "Walt Whitman"
      },
      {
        id: 32,
        quote: "It is our choices that show what we truly are, far more than our abilities.",
        author: "J.K. Rowling"
      },
      {
        id: 33,
        quote: "To handle yourself, use your head; to handle others, use your heart.",
        author: "Eleanor Roosevelt"
      },
      {
        id: 34,
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
      },
      {
        id: 35,
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
      },
      {
        id: 36,
        quote: "Do not let what you cannot do interfere with what you can do.",
        author: "John Wooden"
      },
      {
        id: 37,
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        author: "Mark Twain"
      },
      {
        id: 38,
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
      },
      {
        id: 39,
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot"
      },
      {
        id: 40,
        quote: "You cannot swim for new horizons until you have courage to lose sight of the shore.",
        author: "William Faulkner"
      },
      {
        id: 41,
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
      },
      {
        id: 42,
        quote: "When we strive to become better than we are, everything around us becomes better too.",
        author: "Paulo Coelho"
      },
      {
        id: 43,
        quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        author: "Jimmy Dean"
      },
      {
        id: 44,
        quote: "Too many of us are not living our dreams because we are living our fears.",
        author: "Les Brown"
      },
      {
        id: 45,
        quote: "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
        author: "Mother Teresa"
      },
      {
        id: 46,
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
      },
      {
        id: 47,
        quote: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
      },
      {
        id: 48,
        quote: "Success is how high you bounce when you hit bottom.",
        author: "George S. Patton"
      },
      {
        id: 49,
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
      },
      {
        id: 50,
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder"
      },
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
    quotes.push({
        id: quotes.length + 1,
        quote: content,
        author: author,
    })
    return (
        `<div>
            <p class="quote-content">${content}</p>
            <p class="quote-author">${author}</p>
        </div>
        <button class="calculate-characters">Calculate characters</button>`
    )
}

button.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("you made a click")
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
    const result = quotes.filter((item)=>item.author.includes(author)).map(item=>{
        return (
            `<p>${item.quote}</p>`
        )
    })
    if(result.length < 1){
        container.innerHTML = "The qoute is not found in the data base. Please genereta the random quote or add a new author"
    }else{
        container.innerHTML = result.join("")
    }

}

filterFrom.addEventListener("submit", (e)=>{
    e.preventDefault()
    const authorName = document.getElementById("filter-author").value.trim()
    filterQuotesByAuthor(authorName)
})
