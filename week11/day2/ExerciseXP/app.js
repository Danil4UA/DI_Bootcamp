const {people} = require("./data.js")

function getAvarageAge(arr){
    const sumAges = arr.reduce((acc,val)=>{
        return acc + val.age
    },0)
    const avarage = sumAges / arr.length
    return Math.floor(avarage)
}
console.log(
    getAvarageAge(people)
)