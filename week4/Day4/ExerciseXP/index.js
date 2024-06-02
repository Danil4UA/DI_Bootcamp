// to check the exercise you need to uncomment HTML code for the exercise and JS code solution


//Exercise 1

// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.




//Exercise 1 Solution 

// console.log(document.getElementById("container"))


// document.body.children[1].children[1].textContent = "Richard"


// document.body.children[2].children[1].remove()
// console.log(document.body)

// for(let i = 1; i<= 2; i++){
//     document.body.children[i].children[0].textContent = "Daniel"
// }

// console.log(document.body)

// for(let i = 1; i<= 2; i++){
//     document.body.children[i].classList.add("student_list")
// }

// document.body.children[1].classList.add("university", "attendance")
// console.log(document.body)




//Exercise 2 

// Add the code above, to your HTML file

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).



//Exercise 2 Solution 

// const styleDiv = document.body.children[0].style;

// styleDiv.backgroundColor = "lightblue";


// styleDiv.padding = "10px"

// document.querySelector("ul > li").style.display = "none"

// console.log(document.body.children[1].children[1].style.border = "1px solid black")

// document.body.style.fontSize = "30px"


// let user1 = document.body.children[1].children[0].textContent
// let user2 = document.body.children[1].children[1].textContent

// if(styleDiv.backgroundColor === "lightblue"){
//     alert(`Hello ${user1} and ${user2}`)
// }
        




//🌟 Exercise 3 : Change The Navbar

// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).



//Exercise 3 Solution 


// console.log(document.body)

// document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation")
// console.log(document.body)


// const createLi = document.createElement('li')

// document.body.children[0].children[0].appendChild(createLi)
// createLi.textContent = "Logout"


// console.log(document.body.children[0].children[0])

// console.log(
//         document.body.children[0].children[0].firstElementChild.textContent,
//         document.body.children[0].children[0].lastElementChild.textContent 
// )

// Exercise 4 

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

//Exercise 4 Solution 

let allBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "",
        alreadyRead: true,
    }, 
    {
        title: "1984",
        author: "George Orwell",
        image: "",
        alreadyRead: false,
    }
]

let dataToDisplay1 = `${allBooks[0].title} written by ${allBooks[0].author}`
console.log(dataToDisplay1)

let dataToDisplay2 = `${allBooks[1].title} written by ${allBooks[1].author}`
console.log(dataToDisplay2)



let createDiv1 = document.createElement("div");
createDiv1.textContent = dataToDisplay1;
createDiv1.classList.add("firstDiv");
document.body.children[0].appendChild(createDiv1);


let createDiv2 = document.createElement("div");
createDiv2.textContent = dataToDisplay2;
createDiv2.classList.add("secondDiv");
document.body.children[0].appendChild(createDiv2);


    if (allBooks[0].alreadyRead === true) {
        document.querySelector(".firstDiv").style.color = "red";
    }

    if (allBooks[1].alreadyRead === true) {
        document.querySelector(".secondDiv").style.color = "red";
    }











