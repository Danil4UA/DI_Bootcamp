// Promise review 
// Promise static
// Fetch method / API
// Async await

// Promise static method


// Promise.reject() creates a promise that already rejected

// Promise.resolve() creates a promise that already resolved

//Promise.all
//Promise.allSettled
//Promise.race
//Promise.any

// const promiseOne = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("resolve promise1")
//     }, 2 * 1000)
// })

// const promiseTwo = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("resolve promise2")
//     }, 3 * 1000)
// })


// const promiseThree = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("resolve promise3")
//     }, 5 * 1000)
// })

// Promise.race([promiseOne, promiseTwo, promiseThree])
// .then(result=>{
//     console.log(result)
// })
// .catch(err=>{
//     console.log(err)
// })

//promise all its all or nothing but with settled we get an array and we gonna see all the prmosises with status and the value.

// race we can the promise that resolved or rejected first

// any race we can the promise that resolved first


//Promise its a microtask

// Fetch API

// fetch(url, {optons})

/**
 *
 fetch(url,{}) --> returns a promise 

 fetch(url)
 .then(res=>{
    log response
 })
 .catch(err=>{
    console.log(err)
    })
{
 method: "GET", ....
}
 header{
    "content-type": "applecation/json"
 },
 body: JSON.stringify(data) // body data type 

 mode
 */

//  fetch("https://jsonplaceholder.typicode.com/users")
//  .then(res=>{
//     return (res.json())
// })
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{console.log(err)})

//exercise 



// https://users-18kl.onrender.com/userjson
// inputs on html page
// POST -> name, username, email
// log -> data
// display data on html page

// const dataObject = {
//     name: "Daniel",
//     username: "danielusername",
//     email: "daniel@gmail.com"
// }
// const options = {
//     method:"POST",
//     headers: {
//             "content-type": "application/json"
//             },
//     body: JSON.stringify(dataObject)
// }


// const url = "https://users-18kl.onrender.com/userjson"
// fetch(url, options)
// .then(res=>{
//     return res.text()
// }).then(user=>{
//     console.log(user)
// })
// .catch(err=>{
//     console.log(err)
// })

// async await 

// async function getX(x){
//     if(x > 5) return x // its a resolve
//     throw new Error("x is less than 5") // its a reject
// }

// console.log(getX(10))

// async function always return promise 

// getX(1)
// .then(ret =>console.log(ret))
// .catch((err)=>console.log(err))
// in this case funciton do not return 5 its return promise and return 5 its a resolce()

// await its a new way of .then()
// we can resolve the promise woth await key word

// const getY = async ()=> {
//     return 5
// }

// const getZ = async ()=> {
//     return 6
// }

// getY().then((x)=>{
//     getZ().then((y)=>{
//         console.log(x  + y)
//     })
// })

// const getYZ = async () => {
//     let y = await getY()
//     let z = await getZ()
//     console.log(y + z)
// }

// getYZ()

async function a (){
    try{
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await res.json()
        console.log(data)
    }catch(e){
        console.log(e)
    }
}
a()