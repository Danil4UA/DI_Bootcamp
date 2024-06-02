// let createRow = document.createElement("tr")
// let createData = document.createElement("td")


// document.body.children[0].children[0].appendChild(createRow).appendChild(createData).textContent = "Row 3 cell 1"

//Ex 2

//Add a few event listener to the button. The event listeners should change the style of the button

document.getElementById("jsstyle").addEventListener("click", ()=>{
    document.getElementById("jsstyle").style.color = "red"  
})


document.getElementById("jsstyle").addEventListener("mouseover", ()=>{
    document.getElementById("jsstyle").style.backgroundColor = "blue" 
})

document.getElementById("jsstyle").addEventListener("mouseout", ()=>{
    document.getElementById("jsstyle").style.backgroundColor = "" 
})




//Add a click event listener to the div

// Add a few event listeners to the button. With at least one click event. The event listeners should change the style of the button

// Check how the propagation works and try to prevent it


//Exercise 3


document.getElementById("form1").addEventListener("click", getvalue)

function getvalue(){
    
}