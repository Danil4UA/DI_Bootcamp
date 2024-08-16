import { useState } from "react"

const Count = () => {
    let [count, setCount] = useState(0)
    const addOne = () => {
        setCount(count + 1)
    }
    const minOne = () => {
        setCount(count - 1)
    }
    return (
        <>
        <h2>Count as function component</h2>
            <button onClick={addOne}> + </button>
            {count}
            <button onClick={minOne}> - </button>
        </>
    )

}

export default Count