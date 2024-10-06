/**
 * function in TypeScript
 */
/** default params */
const addDefault = (a: number, b: number = 0): number => {
    return a + b
}

// option params

const addOptional = (a: number, b?: number): number => {
    return a + (b || 0)
}

// rest params

const addRest = (a: number, ...rest: number[]) => {
    return rest.reduce((a,b)=>{
        return a + b
    }, a)
}

// console.log(addRest(0, 100,200,300));


// never type 
const errorMessage = (msg: string): never => {
    throw new Error(msg)
}

const numberOfString = (value: number | string): string => {
    if(typeof value === "string") return "string"
    if(typeof value === "number") return "number"

    return errorMessage("value is not a string or a number")
}

// function overload 

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: number | string, b: number | string): number | string {
    if(typeof a === "string" && typeof b === "string"){
        return a + b + ""
    }
    if(typeof a === "number" && typeof b === "number"){
        return a + b
    }
    return -1
}

add(1, 3);
add("1", "2")

// error => 
// add(1, "2")


// Asserions or Casting
// as or < >

// aliases
type One = string;
type Two = string | number
type Three = "hello";

let a: One = "abc"

// let b = a as Two
// console.log("b=> ", b)
// b = 9
// console.log("b=> ", b)

// let c = a as Three
// console.log("c=>", c)

// c = "hello"
// console.log("c=>", c)


// < > - not used in react - .tsx

let d = <One>"hi"
let e = <Two>123
let f = <Three>"ggg"


// DOM elements

const img = document.querySelector("img") as HTMLImageElement

// ts doesnt belive you that you have img, put either  ! "not null" or make a guard:
// img.src = ""

// if(img){
  // if you have  as HTMLImageElement he will believe you and you dont need guard
    img.src = ""
// }

const img2 = <HTMLImageElement>document.querySelector("img")

// const input = document.getElementById("nameInput") as HTMLInputElement
// input.textContent = "fsdf"

// const input2 =<HTMLInputElement>document.getElementById("nameInput")

// no errors. it knows it has value
// input2.value

const span = <HTMLSpanElement>document.getElementById("year")
span.textContent = new Date().getFullYear().toString()

// Classes
// access modifiers

/**
 * public - anywhere 
 * private  - within the class itself 
 * protected - within the class itself and subclass
 * readonly - set readonly in the constructor . You can only get it. not set it 
 */

class User {

    // public name: string;
    // private age: number;
    // protected active: boolean;

    constructor (public name: string, private age: number , protected active: boolean){
        // we can use this or not it will work any way automatically in .js

        // this.name = name,
        // this.age = age,
        // this.active = active
    }

    public getAge(){
        return `my age is ${this.age}`
    }
    getActive (){
        return `Am I active ? ${this.active}`
    }
    setAge(age: number){
        this.age = age
    }
}

let user1 = new User("John", 25, true)

// console.log(user1.getAge())

// error => active s protected
// console.log(user1.active)

// console.log(user1.getActive())

// no errors because its public
// console.log(user1.name)

class Student extends User {
    constructor (name: string, age: number, active: boolean){
        super(name, age, active)
    }
    getStudentAge (){
        // e dont have acces to .age because its private
        return `Student age is ${this.getAge()}`
    }
    getStudentActive(){
        // here we have acces to .active because its protected
        return `Is student active ? ${this.active} `
    }
}

let student1 = new Student("Anne", 22, true)

// console.log(student1.name)
// console.log(student1.getStudentAge())
// console.log(student1.getStudentActive())


// static methods

class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count
    }

    public id: number
    constructor(public name: string){
        this.id = ++Peeps.count
    }
}

const user2 = new Peeps("John")
console.log( user2.id, user2.name)


const user3 = new Peeps("Anne")
console.log(user3.id, user3.name)

// so static means Global 

const user4 = new Peeps("Ane")
console.log(user4.id, user4.name)

type UserType = {
    name: string
    age: number
    active: boolean
}

type Grade = {
    grade: number
}

let userJohn: UserType = {
    name: "John",
    age: 22,
    active: true
}


// we can make union with type{} using &

let studentJohn: UserType & Grade = {
    name: "John",
    age: 22,
    active: true,
    grade: 99,
}

// class Interface
type UserInterface = {
    name: string;
    age: number;
    active: boolean;
    getAge(): number
}


class UserClass implements UserInterface {

    constructor(
        public name: string, 
        public age: number, 
        public active: boolean ){}
        
        getAge(): number {
            return this.age
        }

}