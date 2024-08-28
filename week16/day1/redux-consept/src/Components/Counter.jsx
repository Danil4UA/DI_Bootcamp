import { useSelector, useDispatch } from "react-redux"
import { counterReducer } from "../redux/reducer"
import { increment, decrement } from "../redux/actions"

const Counter = () => {

    const count = useSelector((state)=>state.counterReducer.count)
    const dispatch = useDispatch()

    return (
        <>
            <h2>The amaizing redux counter</h2>
            <button onClick={()=>dispatch(increment())}> + </button>
            Count: {count}
            <button onClick={()=>dispatch(decrement())}> - </button>
        </>
    )
}

export default Counter