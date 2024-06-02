// 🌟 Exercise 1 : Change The Article
// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

console.log(
    document.querySelector("article > h1")
)

document.body.children[0].children[6].remove()
console.log(document.body)

document.querySelector("h2").addEventListener("click", ()=>{
    document.querySelector("h2").style.backgroundColor = "red"
})


document.querySelector("h3").addEventListener("click", ()=>{
    document.querySelector("h3").style.display = "none"
})

let createButton = document.createElement("button")

document.querySelector("article").appendChild(createButton).textContent = "Click me"

document.querySelector("button").addEventListener("click", ()=>{
    document.querySelectorAll("p").forEach((element)=>element.style.fontWeight = "bold")
})

let randomSize = Math.floor(Math.random() * 100) + 1
document.querySelector("h1").addEventListener("mouseover", ()=>{
    document.querySelector("h1").style.fontSize = randomSize + "px"
})


document.body.children[0].children[4].classList.add("fade")

document.querySelector("h1").addEventListener("mouseover", ()=>{
    document.querySelector("h1").style.fontSize = randomSize + "px"
})

// document.querySelector(".fade").addEventListener("mouseover", () => {
//     document.querySelector(".fade").style.animation = "fadeIn 5s forwards";
// });



// Exercise 2 : Work With Forms

// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

console.log(
  document.querySelector("form")
)


console.log(
    document.getElementById("fname"),
    document.getElementById("lname")
)

console.log(
    document.getElementById("fname").name,
    document.getElementById("lname").name
)


document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault()  
    

    const firstName = document.getElementById("fname").value.trim()
    const lastName = document.getElementById("lname").value.trim()

    if (firstName === '' || lastName === '') {
        alert('Both first name and last name are required.');
        return;
    }

    let createLi1 = document.createElement("li")
    createLi1.textContent = firstName
    document.querySelector('.usersAnswer').appendChild(createLi1)

    let createLi2 = document.createElement("li")
    createLi2.textContent = lastName
    document.querySelector('.usersAnswer').appendChild(createLi2)
})


// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


let allBoldItems = [];
let paragraph = document.querySelector("body > p")
let matches = paragraph.querySelectorAll("strong")

function getBoldItems (){

    matches.forEach((element)=> allBoldItems.push(element.innerHTML))
    console.log(allBoldItems)

}
getBoldItems()



function highlight (){
    matches.forEach((element)=> element.style.color = "blue")
}

function returnItemsToDefault() {
    matches.forEach((element)=> element.style.color = "black")
}

paragraph.addEventListener("mouseover", ()=>{
    highlight()
})

paragraph.addEventListener("mouseout", ()=>{
    returnItemsToDefault()
})


let myForm = document.getElementById("MyForm")

// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:\

// 4 / 3 * 3,14 * r ^3


myForm.addEventListener("submit", (event)=>{
    event.preventDefault()  

    let radius = document.getElementById("radius").value

    let volume = document.getElementById("radius").value

    if(isNaN(radius)){
        return alert("the radius is not a number please try again")
    }

    volume = (4 / 3 )* Math.PI * Math.pow(radius, 3)
    console.log(volume)
    
})