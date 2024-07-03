// When you click the Send button, the form will be submitted with a GET method. 
// (you can use the same HTML file for the action url)

// Yes i can use the same html file for the 

// Where will the sent data appear?

// the send data will be send in the url. it will be present in the query 



// 🌟 Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab

// The data will be send in the http request body 


// 🌟 Exercise 3 : JSON Mario
// Instructions
// Using this code:

const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }



// Convert this JS object into a JSON object. What happens to the nested objects ?

const jsonMarioGame = JSON.stringify(marioGame, undefined, 4)
console.log(jsonMarioGame)
// All the nested objects were converted to objects

// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
// Use your web inspector to add a breakpoint. Check the values of the 
// JSON object in the debugger.


console.log(JSON.parse(jsonMarioGame))