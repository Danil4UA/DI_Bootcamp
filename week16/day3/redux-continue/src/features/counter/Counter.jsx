import {useSelector, useDispatch} from "react-redux"
import { increment, decrement, reset, resetByUserInput, addTwoNumbers, incrementWithPrepare } from "./counterSlice"
import { useRef } from "react"

const Counter = () => {

    const count = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch()
    const inputRef = useRef()

    const fNumber = useRef()
    const sNumber = useRef()

    const numRefOne = useRef()
    const numRefTwo = useRef()

    const handleTwoNumbers = () => {
        const num1 = Number (fNumber.current.value)
        const num2 = Number (sNumber.current.value)
        dispatch(addTwoNumbers({
            num1,
            num2
        }))
    }

    const addTwoNumsWithPrepare = () => {
        const num1 = Number (numRefOne.current.value)
        const num2 = Number (numRefTwo.current.value)
        dispatch(incrementWithPrepare(num1, num2))
    }
    
    return (
        <>
            <div>
                <button onClick={() => dispatch(increment())}> + </button>
                Count: {count}
                <button onClick={() => dispatch(decrement())}> - </button>
            </div>
            <div>
                <button onClick={()=> dispatch(reset())}>RESET</button>
            </div>
            <div>
                <h2>Increment by Number</h2>
                <input ref={inputRef} />
                <button onClick={()=>dispatch(resetByUserInput(inputRef.current.value))}>Add Number</button>
            </div>
            <div>
                <h2>Increment by 2 Number</h2>
                <input ref={fNumber} />
                <input ref={sNumber} />
                <button onClick={()=>handleTwoNumbers()}>Add Two</button>
            </div>

            <div>
                <h2>Increment by 2 Number with prepare</h2>
                <input ref={numRefOne} />
                <input ref={numRefTwo} />
                <button onClick={()=>addTwoNumsWithPrepare()}>Add Two</button>
            </div>
        </>
    )
}

export default Counter