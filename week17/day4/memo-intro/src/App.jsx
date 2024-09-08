import { useState, useCallback, useMemo } from 'react'
import Todo from "./Todo"
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const add = () => {
    setCount(count => count + 1)
  }

  // use callback. if nothing changed in the task - it will not add a new ref. 
  // because after we rerender the page all function are assigned with new references.
  // use callback will track it and will assign the same ref
  
  // const addTask = () => {
  //   setTodos((tasks) => [...tasks, "new task"])
  // }


  // useCallback is for functions


  const addTask = useCallback(()=>{
    setTodos((tasks) => [...tasks, "new task"])
  }, [todos])

  // useMemo is for values

  const expensiveCalculations = () => {
    let num = 0;
    for(let i = 0; i < 10000000; i++ ){
      num++
    }
    return num
  }
  // const calc = expensiveCalculations()
  // console.log(calc)

  const calc = useMemo(()=>{
    const calc = expensiveCalculations()
    console.log(calc)
    return calc
  }, [])
  return (
    <>
      <h2>Optimization</h2>
      <div>
        <h3>Count is {count}</h3>
        <button onClick={()=>add()}> + </button>
      </div>
      <Todo todos={todos} addTask={addTask}></Todo>
    </>
  )
}

export default App
