// Create a new HTML file

// Create a banner saying "The sales end in 10min ! " . Style the banner and make it visible to the user after 5 sec.

document.querySelector(".banner").style.display = "none"

setTimeout(()=>{
    document.querySelector(".banner").style.display = "block"
    for(let i = 10; i>= 0; i--){
        setTimeout(()=>{
            document.querySelector(".content").textContent = `The sales end in ${i}sec !`
        },(10 - i) * 1000)
    }
        
},5000)

// Use the same code as before but create a countdown in the banner.

// ... "The sales end in 10sec ! "

// ... "The sales end in 9sec ! "

// etc ... until 0

// If you need help for this exercise, look at the 1st video of this tutorial


