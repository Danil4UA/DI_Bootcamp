// Async

// setTimeout
// setInterval
// console.log("before")
// setTimeout(()=>{
//     console.log("Hello")
// },0)

// console.log("after")

// function getX(){
//     return 5;
// }


// function getY(){
//     return 6;
// }

// function getXY(){
//     let x = getX();
//     let y = getY();

//     console.log(x + y)
// }
// getXY()

// callback function 
// function myCallBack(){
//     console.log("callback executed");
// }

// function executeCallBack(f){
//     f()
// }

// executeCallBack(myCallBack)

// function getX(f){
//     setTimeout(()=>{
//         f(5)
//     },1000)
// }

// function getY(f){
//     setTimeout(()=>{
//         f(6)
//     },5000)
// }

// function getXY(){
//     getX((x)=>{
//         console.log(x)
//         getY((y)=>{
//             console.log(y)
//             console.log(x + y)
//         })
//     }) 

// }

// getXY()

// Promise

// status - pending
// fulfield - resolved
// fulfield - reject

// let p = new Promise((resolve, reject)=>{
//     // reject("not hello")
//     setTimeout(()=>{
//         resolve(5)
//     },3000)
// })
// console.log(p)

// p.then(data =>{
//     console.log(data)
// })


// function getX(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(5)
//         },4000)
//     })
    
// }

// function getY(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(6)
//         },5000)
//     })
    
// }

// function getXY(){
//     getX().then((x)=>{
//         getY().then((y)=>{
//             console.log(x+y)
//         })
//     })
//     // let x = getX()
//     // x.then((valx)=>{
//     //     let y = getY()
//     //     y.then((valy)=>{
//     //         console.log(valx+valy)
//     //     })
//     // })

// }

// // getXY()


// let auth = (param)=>{
//     return new Promise((res,rej)=>{
//         if(param === "admin"){
//             res("authorize")
//         }else{
//             rej("unauthorize")
//         }
//     })
// }

// auth("user")
// .then(data => {
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err)
// }
// )

/** 
* 1. getDataFromServer function return a Promise with data as  
   Array of objects from server as json
  
 * Simulate successful completion after 2 seconds
 *
 * 2. Call this function and log the data as an Array datatype
 *
 * 3. Simulate an error
 * 
 * 4. return to step 2, and create render function that will 
 * display the users on the page
*/

const arr = [
    { username: "aaa", email: "aaa@gmail.com" },
    { username: "bbb", email: "bbb@gmail.com" },
    { username: "ccc", email: "ccc@gmail.com" },
  ];

  function getDataFromServer(arr){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const dataJson = JSON.stringify(arr)
            if(JSON.parse(dataJson).length !== 0){
                res(dataJson)
            }else{
                rej("false")
            }
        },2000)
    })
  }
  function render(arr){
    const html = arr.map(item=>{
        return (`<div>
                ${item.username}
            </div>`
        )
    })
    return html.join("")
  }



getDataFromServer(arr)
  .then((result)=>{
    document.body.innerHTML = render(JSON.parse(result))
    console.log(result)
  })
  .catch((err)=>{
    console.log(err)
  })

  function a (){
    return `<h1>Hello</h1>`
  }


  document.body.innerHTML = a()