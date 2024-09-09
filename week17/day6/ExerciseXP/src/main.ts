// Create a TypeScript program that logs the message “Hello, World!” to the console.


const logMessage = (msg: string): void => {
    console.log(msg)
}

logMessage("Hello World")

// 🌟 Exercise 2: Type Annotations
// What You Will Learn:

// How to use type annotations in TypeScript.
// How to define and log variables with specified types.
// Instructions
// Define a variable age of type number and a variable name of type string, and log them to the console.

let myAge: number = 22;
let myName: string = "John"

console.log(myAge, myName)

// 🌟 Exercise 3: Union Types
// What You Will Learn:

// How to use union types in TypeScript.
// How to define variables that can hold either a string or a number.
// Description: Use union types to declare a variable that can hold either a string or a number.

// Instructions
// Use union types to declare a variable id that can be either a string or a number.


let id: number | string;
id = 1;
id = "hi"

// 🌟 Exercise 4: Control Flow with if...else
// What You Will Learn:

// How to use if...else statements to control program flow.
// How to handle different conditions using if...else statements.
// Instructions
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.

const checkNumber = (num: number): string => {
    if(num > 0){
        return "positive"
    }else if(num < 0){
        return "negative"
    }else{
        return "zero"
    }
}
console.log(
    checkNumber(0)
)


// Exercise 5: Tuple Types
// Instructions

// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types

const getDetails = (name: string, age: number): [string, number, string] => {
    return [name, age, `Hello ${name}, you are ${age} years old.`]
}
const details = getDetails("Alice", 25);
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']


// 🌟 Exercise 6: Object Type Annotations

// Instructions
// Define the Object Structure:
// Create an object type annotation that defines the shape of a Person object. The object should have two properties: name (a string) and age (a number).

// Create the Function:

// Write a function named createPerson that takes two parameters: name (string) and age (number).
// The function should return an object that matches the Person structure.

// Test the Function:

// Test the createPerson function by creating a person and logging the result to the console.

type Person = {
    name: string,
    age: number
}

const createPerson = (name: string, age: number): Person => {
    return {
        name,
        age
    }
}

console.log(createPerson("John", 28))

// 🌟 Exercise 7: Type Assertions

// Instructions
// Get an Element from the DOM:
// Use document.getElementById() to retrieve an HTML element from the DOM.

// Use Type Assertion:

// Apply a type assertion to cast the element to a specific HTML element type, such as HTMLInputElement.

// Access the Element’s Properties:

// Once cast, use the properties of the specific element type, like setting the value of an input element.

// Test the Functionality:

// Ensure that you can successfully set or manipulate a property of the element.

let input = (<HTMLInputElement>document.getElementById("myInput")) 

input.value = "hello"
input.style.padding = "20px"
input.style.backgroundColor = "green"
input.style.color = "white"



// 🌟 Exercise 8: switch Statement with Complex Conditions
// What You Will Learn:

// How to use a switch statement in TypeScript.
// How to handle multiple conditions using complex cases in a switch statement.
// Instructions
// Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.

// Test the function with different roles

const getAction = (role: string): string => {
    switch (role) {
        case "admin":
            return "Manage users and settings"
        case "editor":
            return "Edit content"
        case "viewer":
            return "View content"
        case "guest":
            return "Limited access"
        default:
            return "Invalid role";
    }
}

console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role

// 🌟 Exercise 9: Function Overloading with Default Parameters
// What You Will Learn:

// How to use function overloading in TypeScript.
// How to create overloaded functions with default parameters.
// Instructions
// Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.

const greet = (name?: string): string => {
    if(name){
        return `Hello, ${name}`
    }
    return `Hello Guest`
}

console.log(
    greet("John")
)
