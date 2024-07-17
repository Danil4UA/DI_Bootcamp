function solution (s) {


let firstIndexOfA = s.indexOf("a");
let firstIndexOfB = s.indexOf("b");

let lastIndexOfB = s.lastIndexOf("b");
let lastIndexOfA = s.lastIndexOf("a");

if(lastIndexOfA === -1 || lastIndexOfB === -1){
    return true
}

if(firstIndexOfA > firstIndexOfB || lastIndexOfA > firstIndexOfB ){
    return false
}
return true

}

console.log(
    solution("a")
)

/*

You are tasked with writing a function `solution` 
that takes a string `S` as input. 
The string consists of 'a' and/or 'b' characters. 
The function should return `true` if all occurrences 
of the letter 'a' appear before all occurrences 
of the letter 'b' in the string `S`. 
If either 'b' does not occur in `S` or 'a' does not occur in `S`, 
the function should also return `true`. 
Otherwise, it should return `false`.


aabb - true
bbaa - flase
aaa - true
bbb - true
ababa - flase
*/


let obj1 = {}

let obj2 = new Object();



let column1 = "username"

let users = {
    [column1]: "Jhon"
}

let name = "Jhon"
let age = 15

let obj4 = {
    // name: name,
    // age: age,
    // its the same as 

    name,
    age
}

console.log(obj4)


for(let x in obj4){
    console.log(x, obj4[x])
}

// by value // by reference 


// array and object allacotating in memory by reference 
// when we create arr1 its in the memory. when we say that arr2 = arr1 its pointing to the same location in the momery
// so when one is changed it's changing for everyone 

arr1 = [1,2,34,6]

arr2 = arr1;
arr2[1] = 19;

console.log(arr1, arr2)

// clone arr1 arr2 = [...arr1] or for objects obj1  ; obj2 = {...obj1}


let obj5 = {
    name: "John",
    last: "Due",
    address: {
        street: "the street",
        num: 8,
        city: "ramat gan",
    },
}


let obj6 = {...obj5}

obj6.name = "Carl"
obj6.last = "Wayne"

let obj6Address = {...obj5.address}

//obj6Address.street = "new street"
obj6Address.street = "new street"

obj6Address.num = 10
obj6Address.city = "Holon"

obj6.address = obj6Address

console.log(obj5, obj6)
