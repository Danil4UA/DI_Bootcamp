//Ex 1

// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.



    // let createParagraph = document.createElement("p");
    // createParagraph.textContent = "Hello World";

    // setTimeout(() => {
    //     alert("Hello World");
    //     document.getElementById("container").appendChild(createParagraph);
    // }, 2000);

    // let nIntervId = setInterval(() => {
    //     let createParagraphPart3 = document.createElement("p");
    //     createParagraphPart3.textContent = "Hello World";
    //     document.getElementById("container").appendChild(createParagraphPart3);
    // }, 2000);

    // document.getElementById("clear").addEventListener("click", (event) => {
    //     event.preventDefault();
    //     clearInterval(nIntervId);
    // });





// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

// let intervalId;

// let containerDiv = document.getElementById("container")
// let animateDiv = document.getElementById("animate")
// let button = document.getElementById("button")

//         let animateDivStyle = window.getComputedStyle(animateDiv);
//         let containerDivStyle = window.getComputedStyle(containerDiv);

//         // Преобразуем ширины в целые числа
//         let animateWidth = parseInt(animateDivStyle.width, 10);
//         let containerWidth = parseInt(containerDivStyle.width, 10);

//         console.log("Animate width: " + animateWidth + "px");
//         console.log("Container width: " + containerWidth + "px");



//     button.addEventListener("click", (event)=>{
//         event.preventDefault()
//         let left = 0;


//         intervalId = setInterval(() => {
//             if (left + animateWidth >= containerWidth) {
//                 clearInterval(intervalId);
//             } else {
//                 left++;
//                 animateDiv.style.left = left + 'px';
//             }
//         }, 1);
 
//     })
//
