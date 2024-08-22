import { useContext  } from "react"
import ShowCount from "./ShowCount"
import { AppContext } from "../App"
import Name from "./Name"

const Counter = () => {
    const {setCount} = useContext(AppContext)
    return (<>
        <div>
            <Name></Name>
            <button onClick={()=>setCount(prev => prev + 1)}> + </button>
            <ShowCount></ShowCount>
            <button onClick={()=>setCount(prev => prev - 1)}> - </button>
        </div>
    </>)
}

export default Counter