
function reduceUntilTheSingleDigit(currentNumber) {

    while(`${currentNumber}`.length > 1){
        currentNumber = getCurrentResult(currentNumber)
    }

    function getCurrentResult (number) {
        return`${number}`.split("").reduce((a, b)=> parseInt(a) + parseInt(b))
    }
    return currentNumber
}

console.log(
    reduceUntilTheSingleDigit(1267351263571267)
)



let addTwoNumbers = (l1, l2) => {
    const firstNumber = parseInt(`${l1.reverse().join("")}`)
    const secondNuber = parseInt(`${l2.reverse().join("")}`)
    const result = firstNumber + secondNuber;
    return `${result}`.split("").reverse().map((element)=> parseInt(element))
};

console.log(
    addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])
)



let reverseWords = function(s) {
    return s.trim().split(" ").filter((element)=>element !== "").reverse().join(" ")
};


reverseWords("  hello world  ")


let lengthOfLongestSubstring = function(s) {
    let result = 0;
    let currentSubstring = [];
    let sArr = s.trim().split("");

    for (let i = 0; i < sArr.length; i++) {
        currentSubstring.push(sArr[i]);
        for (let j = i + 1; j < sArr.length; j++) {
            if (!currentSubstring.includes(sArr[j])) {
                currentSubstring.push(sArr[j]);
            } else {
                // Update the result when we encounter a duplicate
                if (result < currentSubstring.length) {
                    result = currentSubstring.length;
                }
                // Remove characters from the beginning of currentSubstring until the duplicate is removed
                while (currentSubstring.includes(sArr[j])) {
                    currentSubstring.shift();
                }
                currentSubstring.push(sArr[j]);
            }
        }
        // Update the result after the inner loop completes
        if (result < currentSubstring.length) {
            result = currentSubstring.length;
        }
        currentSubstring = []; // Reset for the next starting point
    };
    return result
}

console.log(
    lengthOfLongestSubstring("pwwkew")
)