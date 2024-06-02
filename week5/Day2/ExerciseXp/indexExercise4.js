// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:\

// 4 / 3 * 3,14 * r ^3


let myForm = document.getElementById("MyForm")



myForm.addEventListener("submit", (event)=>{
    event.preventDefault()  

    let radius = document.getElementById("radius").value

    let volume = document.getElementById("radius").value

    if(isNaN(radius)){
        return alert("the radius is not a number please try again")
    }

    volume = (4 / 3 )* Math.PI * Math.pow(radius, 3)
    console.log(volume)
    
})