import { ReactNode } from "react"

interface CounterProps {
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
    children: ReactNode
}
const Counter = ({children, setCount, count}: CounterProps) => {
    return (
        <>
            <h2>Counter</h2>
            {children}
            {/* {count} */}
            <button onClick={()=>{setCount(prev => prev - 1)}}>-</button>
            <button onClick={()=>{setCount(prev=> prev + 1)}}>+</button>
        </>
    )   
}

export default Counter