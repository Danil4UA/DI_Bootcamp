"use strict";
// Description: Create a function that uses type guards to handle different types of inputs from a union type and perform specific operations based on the input type.
const processInput = (input) => {
    switch (typeof input) {
        case "number":
            return input * input;
        case "string":
            return input.toUpperCase();
        case "boolean":
            return !input;
        default:
            "Invalid data";
    }
};
console.log(processInput(12));
