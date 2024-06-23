// 🌟 Exercise 1 : Find The Sum
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (a, b) => a+b;

console.log(sum(2, 10))

// Exercise 2 : Kg And Grams
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

function convertWeigthToGramms (weight) {
    return weight * 1000;
}
const convertWeight = convertWeigthToGramms ()
// So the difference is that we can call function declaration even before we declare it but function expression only after;

const arrowConvertWeight = weight => weight * 1000;

// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."


(function (number, partnerName, location, jobTitle ) {
const displayData = document.querySelector(".container").textContent = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${number} kids.`
}(4, "dasha", "spain", "developer"))


// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

const isLoggedIn = true
if(isLoggedIn){
    (function(name){
        const createDiv = document.createElement("div")
        createDiv.classList = ("peter-div")

        const createDivImage = document.createElement("img")
        createDivImage.classList = ("peter-image")
        createDivImage.src = "./photo.jpeg"

        const createDivParagraph = document.createElement("p")
        createDivParagraph.textContent = name;

        createDiv.appendChild(createDivImage)
        createDiv.appendChild(createDivParagraph)

        document.querySelector(".container-fluid").appendChild(createDiv)

        
    }("Peter"))
}


// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.


function makeJuice (size) {

    const ingredients = []

    //1 option of validation 
    // function addIngredients(first, second, third) {
    //     if(first){
    //         ingredients.push(first)
    //     }
    //     if(second){
    //         ingredients.push(second)
    //     }
    //     if(third){
    //         ingredients.push(third)
    //     }
    // }

    //cleaner version of validation 

    function addIngredients(...newIngredients) {
        ingredients.push(...newIngredients);
    }
    addIngredients("apple", "orange", "pineapple")
    addIngredients("kiwi", "mango", "watermelon")

    function displayJuice (array) {

        document.querySelector(".juice").textContent = `The client wants a ${size} juice, containing ${ingredients.join(", ")}`
    }
    displayJuice(ingredients)
}
makeJuice("small")