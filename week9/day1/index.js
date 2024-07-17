// // // object and classes

// // let user = {
// //     name: "John",
// //     email: "john1234@gmail.com",
// //     age: 29
// // }
// // // for(let x in user){
// // //     console.log(x, user[x])
// // // }

// // // We have some objects methods 

// // // Object.keys
// // // Object.values
// // // Object.entries 

// // // it will convert the object into an array . After that we can use any loop for an array



// // const keys = Object.keys(user)
// // console.log(keys)

// // const values = Object.values(user)

// // console.log(values)

// // const entr = Object.entries(user)

// // console.log(entr)


// // // 1 way
// // entr.forEach((item)=>{
// //     const[key, value] = item;
// //     console.log(key, value)
// // })

// // // 2 way
// // entr.forEach(([key,value])=>{
// //     console.log(key, value)
// // })


// // const arr = [
// //     [ 'name', 'John' ],
// //     [ 'email', 'john1234@gmail.com' ],
// //     [ 'age', 29 ]
// // ]
// // // Object.fromEntries; 
// // // convert only 1 level. no nested convertation

// // let obj = Object.fromEntries(arr)

// // console.log(obj)


// // object method 

// let student  = {
//     name: "John",
//     email: "john1234@gmail.com",
//     age: 29,
//     x: function(){
//         console.log("Hello")
//     },
//     hello: function(name){
//         return "hello "  + name
//     }
// }

// student.x()

// console.log(student.hello("Daniel"))


// let user1 = {
//     name: "John",
//     email: "john1234@gmail.com",
//     age: 29,
//     address: {
//         city: "New York",
//     }
// }
// let user2 = {...user1}

// let obj3 = Object.assign({}, user1)

// user2.address = {...user1.address}


// // for deep cloning we use JSON.stringify and JSON.parse

// const obj4 = JSON.parse(JSON.stringify(user1))

// //Spreading in object

// let user5 = {...user1, age: 23, country: "Spain"}

// console.log(user5)


// // this

// console.log(this)
// //refers to the global element. in this case its a window browuser

// //window object is the main object in the browser 

// let obj5 = {
//     name: "Anne",
//     getName: function (){
//         return this.name
//     }
// }

// if you want to refer to something that defined in the object you work you need to refer using .this


//exercise
const users = {
    user1: { 
      age: 44, 
      name: "picard" 
    },
    user2: { 
      age: 12, 
      name: "sisko" 
    },
    user3: { 
      age: 109, 
      name: "janeway" 
    },
  };
  /**
   * Filter for all users older than 30 
   * and store their data in an array of object
   * 
  [
    { id: 'user1', age: 44, name: 'picard' },
    { id: 'user3', age: 109, name: 'janeway' }
  ]
   */

const usersKeys = Object.keys(users)
console.log(usersKeys)

const usersOlder30 = usersKeys.filter(key => users[key].age > 30)
console.log(usersOlder30)

const usersData = usersOlder30.map((id) => ({id:id, ...users[id]}))

console.log(usersData)

const result = Object.keys(users)
    .filter(key => users[key].age > 30)
    .map((id) => ({id:id, ...users[id]}))

console.log(result)

// Class 

class nameOfClass {
    constructor(){
        // ... must be at the top of the class
    }
    method1(){}
    method2(){}
}


class Animal {
    constructor(){
        this.name = 'Dog';
        this.type = 'Frenchi';
    }
    getName(){
        return this.name
    }
    getType(){
        return this.type
    }
    setName(name){
        this.name = name
    }
}

const dog1 = new Animal()
console.log(dog1.getName())
console.log(dog1.getType())

const dog2 = new Animal()
dog2.setName("Cow")
console.log(dog2.getName())
console.log(dog2.getType())


class Animal2 {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    getName(){
        return this.name
    }
    getType(){
        return this.type
    }
    setName(name){
        this.name = name
    }
}


const dog3 = new Animal("Bob", "Dog")


const dog4 = new Animal("Chichi", "Cat")


// we can also make a class whicj will be a child of a parent

class Dog extends Animal2 {
    constructor(name){
        super(name, "Dog"); // parent constructor 
    }
}

const dog5 = new Dog("Shadow");

console.log(dog5.getName())

// create User class 

class User {
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log("Hello " + this.name)
    }
}

class Student extends User {
    constructor(name){
        super(name)
    }
}

let allUsers = [

]

let student1 = new Student("John")
let student2 = new Student("Mike")
let student3 = new Student("Carl")

allUsers.push(student1,student2,student3)

allUsers.forEach(element=>element.hello())

