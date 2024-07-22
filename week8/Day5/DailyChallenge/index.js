// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false


function allTruthy (...params) {
    return params.every((element)=> element)
}

console.log(
    allTruthy(true, true, false) 
)