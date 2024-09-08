
import { useState, useCallback, useMemo } from 'react'
import './App.css'
import ToDo from './ToDo'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const add = () => {
    setCount(prev => prev + 1)
  }
  
  // const addTodo = () => {
  //   console.log(addTodo)
  //   const newTodo = "newTodo"
  //   setTodos([...todos, newTodo])
  // }


  // use callback is for the functions. if we pass function in the props , every render it will prevent creation of new ref
    const addTodo = useCallback(()=>{
      console.log("todo renders")
    }, [])


    // this function do smth but it returns the same value
    const heavyCalc = () => {
      let num = 0
      for(let i =0; i < 10000000; i ++){
        num ++
      }
      return num
    }

    // const result = heavyCalc()
    // console.log(result)

    const result = useMemo(()=>{
      const res = heavyCalc()
      console.log(res)
      return res
    }, [])
    
    return (
    <>
      <h2>Redux review</h2>

      <div>
        {/* We need Memo to make optimisation to our oplication */}
        <h3>Memo, useMemo, useCallback</h3>
        <h4>Count is: {count}</h4>
        <button onClick={()=>add()}>Add</button>
        <ToDo todos={todos} addTodo={addTodo}/>
      </div>
    </>
  )
}

export default App
