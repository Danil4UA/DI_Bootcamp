// In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];


let createDiv1 = document.createElement("div")
createDiv1.classList.add("planet" , "Mercury")
createDiv1.style.backgroundColor = "red"


let createDiv2 = document.createElement("div")
createDiv2.classList.add("planet" , "Venus")
createDiv2.style.backgroundColor = "yellow"

let createDiv3 = document.createElement("div")
createDiv3.classList.add("planet" , "Earth")
createDiv3.style.backgroundColor = "blue"

let createDiv4 = document.createElement("div")
createDiv4.classList.add("planet" , "Mars")
createDiv4.style.backgroundColor = "grey"

let createDiv5 = document.createElement("div")
createDiv5.classList.add("planet" , "Jupiter")
createDiv5.style.backgroundColor = "orange"

let createDiv6 = document.createElement("div")
createDiv6.classList.add("planet" , "Saturn")
createDiv6.style.backgroundColor = "green"

let createDiv7 = document.createElement("div")
createDiv7.classList.add("planet" , "Uranus")
createDiv7.style.backgroundColor = "lightgrey"

let createDiv8 = document.createElement("div")
createDiv8.classList.add("planet" , "Neptune")
createDiv8.style.backgroundColor = "lightblue"


document.querySelector(".listPlanets").appendChild(
    createDiv1
);
document.querySelector(".listPlanets").appendChild(
    createDiv2
);
document.querySelector(".listPlanets").appendChild(
    createDiv3
);
document.querySelector(".listPlanets").appendChild(
    createDiv4
);
document.querySelector(".listPlanets").appendChild(
    createDiv5
);
document.querySelector(".listPlanets").appendChild(
    createDiv6
);
document.querySelector(".listPlanets").appendChild(
    createDiv7
);
document.querySelector(".listPlanets").appendChild(
    createDiv8
);

