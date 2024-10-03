import { useState } from "react"

type Count = number;

const Counter = (): JSX.Element => {
    const [count, setCount] = useState<Count>(0)

    return (
        <>
        <button onClick={()=>setCount(prev=>prev + 1)}>+</button>
            {count}
            <button onClick={()=>setCount(prev=>prev - 1)}>-</button>
        </>
    )
}

export default Counter