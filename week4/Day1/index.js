// Exercise 1
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.

function family (myAge) {
    console.log(`My mum is ${myAge * 2}, and my dad is ${myAge * 2 * 1.2}.`)
}

family(23)

// Exercise 2


// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. In the global scope, console.log the result of the function

function family2 (myAge){
    return `my mum is twice my age ${myAge * 2}`
}

family2(23)

console.log(family2(23))