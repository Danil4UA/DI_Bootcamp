import { useState, createContext} from 'react'
import Counter from "./Components/Counter.jsx"
import './App.css'

import Action from './Components/Action.jsx'
import Display from './Components/Display.jsx'

export const AppContext = createContext()

function App() {

  const [text, setText] = useState("")
  const [count, setCount] = useState(0)
  return (
    <>
      <AppContext.Provider value={{text,setText, count, setCount}}>
        <Display></Display>
        <br/>
        <Action></Action>
        <Counter></Counter>
      </AppContext.Provider>
    </>
  )
}

export default App
