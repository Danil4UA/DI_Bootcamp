let str = " Hello, World, in, a, frame"

let strArr = str.split(",").map((element)=>element.trim())

console.log(strArr)

let maxLength = strArr.reduce((acc, value)=> {return Math.max(acc, value.length)}, 0)

console.log(maxLength)

for(let i = 0; i< strArr.length; i++){
    if(strArr[i].length < maxLength){
        strArr[i] = strArr[i] + " ".repeat(maxLength - strArr[i].length)
    }
}

console.log(strArr)

for(let i = 0; i<= strArr.length + 1; i++){
    if(i === 0 || i === strArr.length + 1){
        console.log("*".repeat(strArr.length*2 - 1))
    }else {

        let modifedArrWord = ["* ", strArr[i-1], " * "]
        
        console.log(modifedArrWord.join(""))
    }
}

