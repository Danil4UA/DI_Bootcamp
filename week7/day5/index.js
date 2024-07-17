// let b = 3, d = b, u = b;

// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ +
//  u

// console.log(tree); // 163

// default paramentrs


// its default parametrs. if you do not paste the paramentr it will be x = 5, y = 1;
// function sum (x = 5, y = 1) {
//     x = 10;
//     return x + y;
// }

// let result = sum(2)

// console.log(result)

//ternary operator 

// let x = 5; 
// if(x > 5){
//     return 'yes';
// }
// else{
//     return 'no';
// }

// let result = x > 5 ? "yes" : "no";

// const yearGiven = year => year > 2000 ? `You are in the 21st centurart` : `You live in the Middle Age `

// console.log(yearGiven(2000))

// const calculator = (x, y, action) => 
//     action === "+" ? x + y: 
//     action === "-" ? x - y: 
//     action === "*" ? x + y:
//     action === "/" ? (y !== 0 ? x / y: "you cannot devide by 0"):
//     "data is not valid";

// let result = calculator(1,0, "/")

// console.log(result)

// let arr = [1,2,3,4,5,6,7,8,9]

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
// // not good beacause every time we call function length and recalculating it's length; it's better to create a variable and call it once

// const length = arr.length;
// for (let i = 0; i < length; i++){
//     console.log(arr[i])
// }

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for (let x in obj){
//     console.log(x, obj[x])
// }

// let arr = [1,2,3,4,5]


// let newArray = []
// arr.forEach(element => newArray.push(element * 2))

// console.log(newArray)

// for each can have 3 params element, index, array reference. it's the same array and we can manipulate and change him ;

// let arr = [1,2,3,4,5]

// arr.forEach((element, index)=>{
//     index % 2 === 0 ? console.log(element): ""
// })

// arr.forEach((element)=> element === 5 ? true: false);


// arr.some((element)=> element === 5)


// let arrWords = ['hello', 'grid', 'apple']

// arrWords.some ((element)=> element[0].toLowerCase() === "h")

// element.startsWith("h")

// let arr = [1,2,3,4,5, -1] 

// for(let i = 0; i < arr.length - 1; i++){
//     let result = true
//     if(arr[i] < 0){
//         return false
//     }
// }

// arr.every((element)=>{
//     return element > 0
// })


let arrWords = ['hello', 'grid', 'apple']

arrWords.every((element)=>element.startsWith("h"))