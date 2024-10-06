"use strict";
/**
 * function in TypeScript
 */
/** default params */
const addDefault = (a, b = 0) => {
    return a + b;
};
// option params
const addOptional = (a, b) => {
    return a + (b || 0);
};
// rest params
const addRest = (a, ...rest) => {
    return rest.reduce((a, b) => {
        return a + b;
    }, a);
};
// console.log(addRest(0, 100,200,300));
// never type 
const errorMessage = (msg) => {
    throw new Error(msg);
};
const numberOfString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return errorMessage("value is not a string or a number");
};
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b + "";
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return -1;
}
add(1, 3);
add("1", "2");
let a = "abc";
// let b = a as Two
// console.log("b=> ", b)
// b = 9
// console.log("b=> ", b)
// let c = a as Three
// console.log("c=>", c)
// c = "hello"
// console.log("c=>", c)
// < > - not used in react - .tsx
let d = "hi";
let e = 123;
let f = "ggg";
// DOM elements
const img = document.querySelector("img");
// ts doesnt belive you that you have img, put either  ! "not null" or make a guard:
// img.src = ""
// if(img){
// if you have  as HTMLImageElement he will believe you and you dont need guard
img.src = "";
// }
const img2 = document.querySelector("img");
// const input = document.getElementById("nameInput") as HTMLInputElement
// input.textContent = "fsdf"
// const input2 =<HTMLInputElement>document.getElementById("nameInput")
// no errors. it knows it has value
// input2.value
const span = document.getElementById("year");
span.textContent = new Date().getFullYear().toString();
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
    constructor(name, age, active) {
        // we can use this or not it will work any way automatically in .js
        this.name = name;
        this.age = age;
        this.active = active;
        // this.name = name,
        // this.age = age,
        // this.active = active
    }
    getAge() {
        return `my age is ${this.age}`;
    }
    getActive() {
        return `Am I active ? ${this.active}`;
    }
    setAge(age) {
        this.age = age;
    }
}
let user1 = new User("John", 25, true);
// console.log(user1.getAge())
// error => active s protected
// console.log(user1.active)
// console.log(user1.getActive())
// no errors because its public
// console.log(user1.name)
class Student extends User {
    constructor(name, age, active) {
        super(name, age, active);
    }
    getStudentAge() {
        // e dont have acces to .age because its private
        return `Student age is ${this.getAge()}`;
    }
    getStudentActive() {
        // here we have acces to .active because its protected
        return `Is student active ? ${this.active} `;
    }
}
let student1 = new Student("Anne", 22, true);
// console.log(student1.name)
// console.log(student1.getStudentAge())
// console.log(student1.getStudentActive())
// static methods
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const user2 = new Peeps("John");
console.log(user2.id, user2.name);
const user3 = new Peeps("Anne");
console.log(user3.id, user3.name);
// so static means Global 
const user4 = new Peeps("Ane");
console.log(user4.id, user4.name);
let userJohn = {
    name: "John",
    age: 22,
    active: true
};
// we can make union with type{} using &
let studentJohn = {
    name: "John",
    age: 22,
    active: true,
    grade: 99,
};
class UserClass {
    constructor(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
    getAge() {
        return this.age;
    }
}
