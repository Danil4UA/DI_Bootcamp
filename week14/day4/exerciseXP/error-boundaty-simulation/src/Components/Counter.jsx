import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter=> counter + 1)
    }
    
    if(counter > 5){
        throw new Error("I crashed....")
    }
    return (
        <>
            <div>{counter}</div>
            <button onClick={handleClick}> + </button>
        </>
    )
}

export default Counter