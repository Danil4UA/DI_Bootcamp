const buttonX = document.getElementById("x")
const buttonO = document.getElementById("o")
const container = document.getElementById("container")
const allBlocks = document.querySelectorAll("#item")

let blockClicked = false;

let countMoves = 0;


let availableBlocks = [0,1,2,3,4,5,6,7,8]


let user1 = []
let user2 = []


function logic (user, item, i, color){
    if(!user.includes(i) && availableBlocks.includes(i)){
        item.style.backgroundColor = color
        user.push(i)
        countMoves += 1
        availableBlocks = availableBlocks.filter(item=>item!==i)
    }

    let ifWon = winCombos.some(item=>{
        return item.every(item=>user.includes(item))
    })

    if(ifWon){
        console.log(`Victory!`)
    }
}


allBlocks.forEach((item, i)=>{
    item.addEventListener("click", ()=>{
        if(countMoves % 2 === 0){
            logic(user1, item, i, "blue")

        }else{
            logic(user2, item, i, "yellow")
        }
    })
})

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]



