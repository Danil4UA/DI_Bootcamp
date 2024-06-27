// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false


function allTruthy (...params) {
    let allParams  = [...params]
    return allParams.every((element)=> element)
}

allTruthy(5, 4, 3, 2, 1, 0);
