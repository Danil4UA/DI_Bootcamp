// const obj = require("./app.js")

//obj - its an objecy so we call what inside with . (.hello())

// not its the same but with destructuring 

// const {hello} = require("./app.js")

// its the same because its destructuring

// hello("David")

const url = `https://jsonplaceholder.typicode.com/users`


/**
 * 
 * 
 */

async function getUsers(url){
    try{
        const res = await fetch(url)
        const data = await res.json()
        return data
    }catch(err){
        console.log(err)
    }
}


function sumAB (a, b){
    return a + b
}
function minAB (a, b){
    return a - b
}

function mulAB (a, b){
    return a * b
}
function devAB (a, b){
    return a / b
}
module.exports = {
    sumAB,
    minAB,
    mulAB,
    devAB,
}
