const colors = [
    "#FF5733", // Red Orange
    "#33FF57", // Lime Green
    "#3357FF", // Blue
    "#FF33A6", // Pink
    "#33FFF3", // Turquoise
    "#F3FF33", // Yellow
    "#5733FF", // Purple
    "#FF9F33", // Orange
    "#33FF9F", // Light Green
    "#9F33FF", // Lavender
    "#FF3333", // Red
    "#33FF33", // Green
    "#3333FF", // Dark Blue
    "#FFFF33", // Bright Yellow
    "#FF5733", // Coral
    "#57FF33", // Lime
    "#5733FF", // Indigo
    "#FF3357", // Magenta
    "#33FF57", // Spring Green
    "#33A6FF", // Sky Blue
    "#A6FF33", // Chartreuse
    "#FF5733", // Salmon
    "#33FF57", // Mint
    "#5733FF", // Violet
    "#FF33F3", // Fuchsia
    "#33FF57", // Sea Green
    "#FF33A6"  // Hot Pink
];


let colorPanel = document.querySelector(".color-panel")
let matches = colorPanel.querySelectorAll("div")
let mousedown = false;


let currentColor;

// 
matches.forEach((element, index)=>{
    element.style.backgroundColor = colors[index];
})

document.querySelectorAll(".color-panel > div").forEach((element)=>{
    element.addEventListener("click", ()=>{
        currentColor = window.getComputedStyle(element, null).getPropertyValue("background-color")
        console.log((window.getComputedStyle(element, null).getPropertyValue("background-color")))
    })
})


document.querySelector(".clear").addEventListener("click", ()=>{
    location.reload()
})




let mainZone = document.querySelector(".main-zone")


let mainZoneBlocks = document.querySelectorAll(".main-zone > div")

// mainZoneBlocks.forEach((element)=>{
//     element.addEventListener("mousedown", ()=>{
//         mousedown = true
//     })
    
// })

mainZoneBlocks.forEach((element)=>{

        element.addEventListener("mouseover", ()=>{
            element.style.backgroundColor = currentColor
        })    
  
})