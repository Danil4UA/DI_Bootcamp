let yourAge = prompt("Enter your age")

if(yourAge < 18){
    alert("Sorry, you are too young to drive this car")
}else if(yourAge == 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!")
}else{
    alert("Powering On. Enjoy the ride!")
}



let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}


// Ex 3

// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let userData = {
    username: "username",
    password: "1234",
}

let database = [userData]
let newsfeed = [
    {
        username: userData.username,
        timeline: "",
    },
    {
        username: "",
        timeline: "",
    },
    {
        username: "",
        timeline: "",
    }
]