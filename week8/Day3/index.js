// deep clone

let arr = [
    { id: 1, username: "jjj", email: "jjj@gmail.com" },
    { id: 2, username: "mmm", email: "mmm@gmail.com" },
  ];
  console.log(arr);
  let jsonArr = JSON.stringify(arr);
  console.log(jsonArr);

  let arrFromJSON = JSON.parse(jsonArr)

  console.log(arrFromJSON)


  let shopping = JSON.parse(JSON.stringify(arr))

  /* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers multiply by 2
 * For example:
 * Give this array [1,2,3,4]
 * result [2,4,6,8]
 */

function multiplyArray (arr) {
    // const result = []

    // arr.forEach(element => result.push(element * 2))
    // return result

    // or 
    arr.forEach((element, i, arr2)=>{
        arr2[i] = element * 2
    });
    return [...arr]; // we return clone to create an indeoendent array that will not affect the initial one
    }

multiplyArray([1,2,3,4])

//map 

// let users = [
//     { userid: 1, name: "John", email: "jjj@gmail.com" },
//     { userid: 2, name: "Marry", email: "mmm@gmail.com" },
//     { userid: 3, name: "Anne", email: "aaa@gmail.com" },
//     { userid: 3, name: "Anne", email: "aaa@gmail.com" },
//   ];

//   users.map(element => {
//     let creatP = document.createElement("p")
//     creatP.textContent = `${element.name} ${element.email }` 
//     return document.body.appendChild(creatP)
//   })



  /* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */

// filter 

function findGreateThanThree (arr){
    const result = []
    arr.forEach((num)=>{
        if(num>3){
            result.push(num)
        }
    })
    return result
}



console.log(findGreateThanThree([0,1,1,2,3,5,8]))


const filter = (arr) => {
    const result = []
    arr.forEach(item => {
        if(item > 3) {
            result.push(item)
        }
    })
    return result
}

filter([0,1,1,2,3,5,8])


let arr3 = [0,1,1,2,3,5,8];

let arr4 = arr3.filter(item => item > 3)
console.log(arr4)


const users = [
    { id: 1, name: "John", email: "jjj@gmail.com" },
    { id: 2, name: "Mor", email: "mmm@gmail.com" },
    { id: 3, name: "Marry", email: "marry@gmail.com" },
    { id: 4, name: "Ron", email: "ron@gmail.com" },
  ];

//   function newUsersWithR (arr) {
//     return users.filter(item =>{ 
//         let userName = item.name.toLowerCase();
//         if(userName.indexOf("r")!== -1 && u){
//             return item
//         }
//     })
//   }

// console.log(newUsersWithR(users))

function findObjectWithIdThree (arr){
    // 1 option
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id === 3){
            return arr[i]
        }
    }
}

console.log(findObjectWithIdThree(users))

/**  Exercise
 * Create an function that get an array of Numbers as input
 * and return the sum of all numbers
 * For example:
 * Give this array [2, 5, 10,100]
 * result 117
 */


//reduce 

function getSum (arr){
    let result = 0;
    arr.forEach((element)=> result += element)
    return result
}

getSum([2, 5, 10,100])


// destructuring

let newArr = [1,2,3]

// let a = newArr[0]
// let b = newArr[1]
// let c= newArr[2]

// let [a, b, c] = newArr;

// console.log(a, b)

// rest parameters

let newNewArr = [1,2,3,4,5,6,7,8]


let [a, b, ...rest ] = newNewArr
console.log(a,b, rest)

//spread operator 

let aa = 5;
let bb = 6;
let cc = [4,1]

let dd = [aa, bb, ...cc]


console.log(dd)

/** 
Birthday Cake Candles
This array are Birthday Cake Candles
You can blow only the tallest candles
let arr = [2,8,4,4,8,1,8]
birthdayCakeCandles function will return
how many candles you can blow
*/

function calculateHowMany (arr){
    // let maxCandle = Math.max(...arr)
    // console.log(maxCandle)
    // let filteredArr = arr.filter(element => element === maxCandle)
    // console.log(filteredArr)
    // return  howMany = filteredArr.length 

    let maxNum = Math.max(...arr);
    return arr.filter(item=>item === maxNum).length
}


console.log(
    calculateHowMany([2,8,4,4,8,1,8])
)



