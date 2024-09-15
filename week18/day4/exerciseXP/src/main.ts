// Define an intersection type PersonWithAddress that combines Person and Address types. Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city,

type Person = {
  name: string;
  age: number;
}

type Address = {
  city: string;
  street: string;
}

type PersonWithAddress = Person & Address;

const somePerosone: PersonWithAddress = {
  name: "John",
  age: 22,
  city: "Tel Aviv",
  street: "Ben Gurion"
}

console.log(somePerosone)


// Create a function describeValue that accepts number | string. Use type guards to return a description based on the input type:

// "This is a number" for numbers.
// "This is a string" for strings.


const describeValue = (param: number | string): string => {
  if(typeof param === "number"){
    return `This is a numebr`
  }
  if(typeof param === "string"){
    return `This is a string`
  }
  return "Invalid Data"
}

// Create a variable someValue of type any and cast it to a string. Then, use it as a string.
// ензу сфысфвштп

let someValue: any = "Hello"
someValue = 2
someValue = true

const castedValue: number = someValue as number



// Create a function getFirstElement that takes an array of number | string and uses type assertions to return the first element as a string. Test with arrays of mixed types.

// function getFirstElement(arr: (number | string)[]): string {
//   return arr[0] as string;
// }

// console.log(getFirstElement(["hello", 42])); // Output: "hello"

const getFirstElement = (param: (number | string)[]): string => {
  // return param[0] as string
  return `${param[0]}`
}


// Create a generic function logLength that takes a parameter of type T constrained to types with a length property (like string or Array). The function should log the length.
const logLength = <T extends { length: number }>(param: T): void => {
  console.log(param.length);
};

logLength("Hello");  // Output: 5
logLength([1, 2, 3]); // Output: 3

// Define a type Employee that combines Person and Job using intersection types. Create a function describeEmployee that takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.

// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.


type PersonA = {
  name: string;
  age: number;
}

type Job = {
  position: string;
  department: string;
}
type Employee = PersonA & Job

const describeEmployee = (param: Employee): string => {
  return `You are ${param.position}`
}

// Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method. Use type assertions to ensure the parameter is treated as a string for formatting. The function should format the input as a string.

const formatInput = <T extends { toString(): string }>(input: T): string => {
  return `Formatted input: ${input.toString()}`;
};

console.log(formatInput(42));         // Output: Formatted input: 42
console.log(formatInput("Hello"));    // Output: Formatted input: Hello