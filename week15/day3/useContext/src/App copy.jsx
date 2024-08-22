import { useState, createContext } from 'react'
import './App.css'
import Counter from './Components/Counter'

export const AppContext = createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppContext.Provider value={{count,setCount, name: "John"}}>
      <h2>The createContext, useContext Hook</h2>
      <Counter></Counter>
    </AppContext.Provider>
    </>
  )
}

export default App
