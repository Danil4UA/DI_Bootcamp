// it typecript we are using types
// its javascript and more

// typescript - .ts
// helps us to write a better javascript and reduce chances to make a mistake (we see it before we run the code)

// function sum (a, b) {
//     return a + b
// }

// sum(4, 5)
// sum(5, "5")

// let username = "John";
// let x = 0;
// let y;


// username = "Dan"
// // username = true
// y = 1
// y = "1"

// console.log(username, y)

// let a = 12;
// let b = "7";
// let c = 2;

// let result = a + b;

// let result1 = a + c;

// // let result2 = a / b

// console.log(result, result1);

/** type number */

let num = 7;

// type annotation to a variable
// now the typescript is not guessing bec we put a type direcrly. it called type annotation

let num1: number = 9;
let num3: number;


// errors: =>

// num3 = ""
// let num4: number = "hi"

/** type string */

let str: string = ""
str = "hi"

/** erros: => */
// str = true

/** type boolean */
let bool: boolean = true;
bool = false;

/** errors:  */
// bool = 0

/** type any - try not to use any as much as possible */
let anyType: any;

anyType = 1;
anyType = ""
anyType = true;

/** union type */
// its a union between more than 1 type

let myUnion: number | string;

myUnion = 1;
myUnion = "string"

// error => 
// myUnion = true

/** RegExp type */
let reg: RegExp = /\w+/g

/** type Array */
let arr: any = []
arr[0] = 1;
arr[1] = "str"

let strArr: string[] = [];

strArr[0] = "a"
// error => 
// strArr[1] = 1

strArr.push("hi")

//error =>
// strArr.push(true)


let numArr: number[] = []

numArr.push(1)
// error => 
// numArr.push("q")

let numStrArr: (string | number)[] = ["a", 1, "hi"]

//error => 
// numStrArr.push(true)

/** type Tuple */

// we can assign the structure and we cannot change the order
let myTuple: [string, number] = ["a", 1]
myTuple[0] = "p"

//error =>
// myTuple[0] = 1

/** type: Object */

let myObj = {
    name: "John",
    age: 25
}
// array its an object so we havo no errors
// myObj = []

myObj.age = 15;

// error => 
// myObj.age = ""

// we cannot change the objecy.
// myObj.gender = "male"


/** type */

// we can define a type and use ut

type strNum = string | number

type str = string;

let myName: str = "aaa"

let a: strNum = 1;
a = ""
// this is a type we created and we cannot break it
// error =>
// a = true

type User = {
    name: string,
    age: number,
    // we can do one of the prop optional. no we dont neccesserly need gender prop in every obj
    gender?: string | number // we can do union type
}

let user1: User = {
    name: "Anne",
    age: 33,
    // we cannot create smth extra, its not in the type
    // error => 

    // gender: "233"
}


let user2: User = {
    name: "John",
    age: 22,
    gender: "m"
}

user2.gender = 2

/** inteface */

// interface and types its much of the same. They have slight differences 


// you cannot define with interface union or smth, it's without = , only when you define objects or classes
interface UserI {
    name: string,
    age: number,
    gender?: string | number 
}

let user3: UserI = {
    name: "vvv",
    age: 23,
    gender: "m"
}

/** type Enum */

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

// console.log(Grade[1])

/** type literal */

// status can be only "loading" | "success" | "failes"; it cannot be something else. We cannot assign anything else but we want

type status =  "loading" | "success" | "failes";
let fetchStatus: status = "loading"

//error => 
// fetchStatus = "someting"

/** function type */
const sum = (a: number, b: number): number => {
    return a + b
}

sum(4,4)

//error => 
// sum(4,"4")


/** Create a function 
 * @param number | string 
 * return sum / concat
 * 
 */

type strOrNum = string | number

const exercise = (a:number, b:strOrNum): strOrNum => {
    // type guard 
    if(typeof b === "string"){
        return a + b + ""
    }
    return a + b

}

console.log(
    exercise(4, "4")
)

/** returning type void
 * void its a type of function that doesnt return anything
 */
const greet =(name: string): void => {
    console.log(`Hello ${name}`)
}

greet("John")

/** type of a function */

type SumFunc = (a: number, b: number) => number

const add: SumFunc = (a, b) => {
    return a + b
}

const add2: SumFunc = (a,b) => {
    return a + b + 2
}

// default params

const addWithDefault = (a: number, b: number = 5): number => {
    return a + b
}

addWithDefault(4)

// optional params
const addOptional = (a: number, b?: number): number => {
    // if(typeof b === undefined){
    //     return a
    // } 

    return a + (b || 0);
}

// never type
const throwErrpr = (msg: string): never => {
    throw new Error(msg)
}
// errors return never type 

// if it infinite - type is never 
/**
 * fucntion infinite {
 *  while(true){
 *     
 *  }
 * }
 */