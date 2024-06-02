//Exercise 1 : Divisible By Three

let numbers = [123, 8409, 100053, 333333333, 7]

for (let i = 0; i< numbers.length; i++){
    console.log(numbers[i]%3===0)
}

//Exercise 2 : Attendance

// Given the object above where the key is the student’s name and the value is the country they are from.

// Prompt the student for their name.

// If the name is in the object, console.log the name of the student and the country they come from.
// For example: "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in

// If the name is not in the object, console.log: "Hi! I'm a guest."

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

  let userName = "karla"

  for (const key in guestList) {
    if(key === userName){
        console.log(key, guestList[key])
    }
  }


//   Exercise 3 : Playing With Numbers
// Instructions
// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.



let age = [20,5,12,43,98,55];