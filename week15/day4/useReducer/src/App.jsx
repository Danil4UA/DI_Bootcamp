
import { useState, useReducer } from 'react'
import './App.css'

export const initialState = {
  count: 10
}

/**
 * @paramstate - initialState
 * action - {}
 */
export const reducer = (state, action) => {
  console.log(action)
  if(action.type === "incrememnt"){
    return {...state, count: state.count + 1}
  }
  else if(action.type === "decrement"){
    return {...state, count: state.count - 1}
  }
  else if(action.type === "add_num"){
    return {...state, count: state.count + action.num }
  }
  return state 
}
function App() {
  const [count, setCount] = useState(0)

  /**@param function - reducer function, @param - state p initialState */
  const [state, dispatch] = useReducer(reducer, initialState)


  const increaseCount = () => {
    setCount(count => count + 1)
  }

  const decreaseCount = () => {
    setCount(count => count - 1)
  }
  return (
    <>
    <h1>UseReducer</h1>
    <button onClick={increaseCount}> + </button>
    {count}
    <button onClick={decreaseCount}> - </button>
    <br/>
    <button onClick={()=>dispatch({type: "incrememnt"})}> + </button>
    {state.count}
    <button onClick={()=>dispatch({type: "decrement"})}> - </button>
    <br/>
    <button onClick={()=>dispatch({type: "add_num", num: 2})}> Add 2 </button>
    </>
  )
}

export default App
