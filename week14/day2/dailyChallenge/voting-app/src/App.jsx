import { useState, useEffect } from 'react'
import Language from './Components/Language.jsx'
import Test from './Components/Test.jsx'
import './App.css'


function App() {
  
const [languages, setLanguages] = useState([
  {name: "Php", votes: 0},
  {name: "Python", votes: 0},
  {name: "JavaSript", votes: 0},
  {name: "Java", votes: 0}
])

let [count, setCount] = useState(0)
const [show, setShow] = useState(true)
// componentDidMount, componentDidUpdate
// mount,  update, unmount

const increaeByOne = () => {
  setCount(count => count + 1)
}

  return (
    <>
    {languages.map((item, index)=>{
      return<Language key={index} name={item.name} votes={item.votes} languages={languages} setLanguages={setLanguages} index={index} ></Language>
    })}
     
     <h2>useEffect Hook</h2>
     {count} 
     <button onClick={increaeByOne}>Increase</button>
     {show ?<Test></Test> : null }
     <button onClick={()=>setShow(!show)}>Click me</button>
    </>
  )
}

export default App
