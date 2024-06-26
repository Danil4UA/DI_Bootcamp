
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
