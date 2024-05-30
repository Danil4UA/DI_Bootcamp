
function bottles(){
    let userNumber = Number(prompt("Enter your number of bottles"));
    if(isNaN(userNumber) || userNumber <= 0){
        return "invalid data"
    }

    console.log(`
    We start the song at ${userNumber} bottles
    Take _1_ down, pass it around
    we have now ${userNumber - 1} bottles
    `)

for (let i = 2; i <= userNumber; i++){
    
    if(i === userNumber - 1){
        console.log(

            `then take _${i}_ down, pass them around
            -> we have now ${userNumber - i} bottle`
            )
    }else if(i === userNumber){
        console.log(`
        “0 bottle of beer on the wall”
        `)
        return "done"
    }
    
    else {
        console.log(

            `then take _${i}_ down, pass them around
            -> we have now ${userNumber - i} bottles`
            )
        }
    }
}


bottles()