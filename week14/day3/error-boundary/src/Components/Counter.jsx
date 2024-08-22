import {useState} from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    if(counter > 5){
        throw new Error("Crashed...")
    }

    return (
        <>
            <h2>Count = {counter}</h2>
            <button onClick={()=>setCounter(counter => counter + 1)}>Increase</button>
        </>

    )

}
    
export default Counter