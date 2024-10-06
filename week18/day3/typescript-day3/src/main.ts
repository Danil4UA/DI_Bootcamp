/** index signatures / keys */ 

interface EmployeeInterface{

  // its a dynamic key and we can modify it with new keys and values
  [key: string]: string | number
  // but it also means that we can now modify with no 
  name: string;
  age: number;
  role: string;
}

let employeeJohn: EmployeeInterface = {
  name: "John",
  age: 30,
  role: "Developer"
}


// console.log(
//   employeeJohn.name,
//   employeeJohn.age,
//   employeeJohn.role
// )

// employeeJohn.email = "john@gmail.com"

for (let key in employeeJohn){

  // ts doesnt know what a key, so we can tell him (assertion) what is the ket
  // key as keyof EmployeeInterface or key as keyof typeof employeeJohn
  console.log(key, employeeJohn[key as keyof EmployeeInterface])

  console.log(key, employeeJohn[key as keyof typeof employeeJohn])

  //with dynamic key we can use it reguraly 
  console.log(key, employeeJohn[key])
}

/** dynamic keys */
const prop1: string = "name"
employeeJohn[prop1 as keyof typeof employeeJohn]

interface Student {
  [key: string]: string | number | string[] | undefined;
  name: string;
  grade: number;
  courses?: string[]
}

let studentJohn: Student = {
  name: "John",
  grade: 80,
  courses: ["ts", "js"]
}

for(let key in studentJohn){
  console.log(key, studentJohn[key])
}

Object.keys(studentJohn).forEach(key=>{
  console.log(key, studentJohn[key] )
})


// Record


type keys = "name" | "age" | "role"
type EmployeeType = Record<keys, string |number>

let employeeAnne: EmployeeType = {
  name: 10,
  age: "my age",
  role: 10
}

/** Generics */


// const strEcho = (value: string): string => {
//   return value
// }
// const numbEcho = (value: number): number => {
//   return value
// }

// const echo = <T>(value: T): T => value
// console.log(echo(1));

const getFirstElementArray = <T>(arr: T[]): T => {
  return arr[0]
}

getFirstElementArray(
  [1,2,3,4,5,6]
)
getFirstElementArray(
  ["a","b","c"]
)
getFirstElementArray(
  [
    {id: 0, name: "abc"},
    {id: 1, name: "abc"},
    {id: 2, name: "abc"},
  ]
)

/** generic with interfaces */

interface Person<T>{
  id: number;
  name: string;
  age: number;
  info: T
}



interface Info {
  city: string;
  street: string;
  num: number
}


// if we put Info  in <T> Person<Info>; our info should match out Info type {city,street,num}
const person1: Person<(number | string)[]> = {
  // when we assign smth with generic type <T> we will assign what it gonna be only when we will declare an instance "Person<(number | string)[]>""
  id: 1,
  name: "John",
  age: 23,
  info: [1,2,3,4,5,"fsdfsdf"]
}

/** generic with classes */

class Example<T> {
  private values: T[] = [];
  setValue(value: T): void{
    this.values.push(value)
  }
  getValues(): T[]{
    return this.values
  }
}

const numbers = new Example<number>()
numbers.setValue(2)
numbers.setValue(78)
console.log(numbers.getValues())

/** more than 1 generic */

const mergeArr = <T, K> (arr1: T[], arr2: K[]): (T | K)[] => {
  return [...arr1, ...arr2]
}

const nums = [1,2,3,4]
const strs = ["a","b","c","d"]


console.log(
  // mergeArr <T, K>

  mergeArr <number, string>(nums, strs)
)

/**
 * 
 */

interface BoolCheck<T>{
  param: T, 
  is: boolean
}

const isObject = <T> (param: T): BoolCheck<T>=> {
  if(Array.isArray(param) && !param.length){
    return {
      param,
      is: false
    }
  }
  if(typeof param === "object" && !Array.isArray(param) && param !== null){
    return {param, is: true}
  }
  return {param, is: false}
}

console.log(isObject({}))

/** Utility type */

interface Post {
  id: number;
  title: string;
  content: string;
}

const post1: Post = {
  id: 1,
  title: "asd",
  content: "my content"
}

const updatePost = (param: Post, update: Partial<Post>): Post => {
  // Partial<Post> . it could be any type inside our Post interface
  // Partial is object with new data

  return {...param, ...update}
}

console.log(
  updatePost(post1, {title: "my super new title"})
)

console.log(
  updatePost(post1, {content: "my super new title"})
)

/** Pick or Omit */

type MiniPost = Pick<Post, "id" | "title">
// we are picking some types from the interface we already have 
type OthePost = Omit<Post, "id" | "title">
// we are tackink off parametrs that we want. opposite thing 

//Exclude or Extract

type Grades = "A" | "B" | "C" | "D" | "F"

type Passes = Exclude<Grades, "D" | "F">
// we create type excluding some types from other type

type Failed = Extract<Grades, "D" | "F">

/** NonNullable */
type NullableString = number | null | undefined


/** ReturnType */

const createUser = (name: string, age: number, active: boolean) => {
  return {
    name,
    age,
    active
  }
}

// we can create a new type from returning

type userObject = ReturnType<typeof createUser>

/** Parameters */
// we creating type from the parameters of the function

type UserParams = Parameters<typeof createUser>

const anneParams: UserParams = ["Anne", 23, true]
const userAnne: userObject = createUser(...anneParams)
console.log(userAnne)