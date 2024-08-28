import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

const ACTIONS = {
  INCREMENT: "increment", // Fixed typo
  DECREMENT: "decrement",
}

const initialState = {
  count: 100,
  countArray: []
}

function reducer (state, action){
    const { type } = action;
    if(type === ACTIONS.INCREMENT){
      const newCountArray = [...state.countArray];
      newCountArray.push(state.count + 1);
      return {...state, count: state.count + 1, countArray: newCountArray};
    } else if(type === ACTIONS.DECREMENT){
      const newCountArray = [...state.countArray];
      newCountArray.pop();
      if(newCountArray.length === 0){
        newCountArray.push(state.count - 1);
      }
      return {...state, count: state.count - 1, countArray: newCountArray};
    }
    return state; // Returning state by default
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { INCREMENT, DECREMENT } = ACTIONS;

  return (
    <>
      <div>All counts: {state.countArray.map(item => (
        <div key={uuidv4()} style={{display: "inline-block", padding: "5px"}}>{ item }</div>
      ))}</div>
      
      <button onClick={() => dispatch({ type: INCREMENT })}> + </button>
      Count: {state.count}
      <button onClick={() => dispatch({ type: DECREMENT })}> - </button>
    </>
  )
}

export default App;