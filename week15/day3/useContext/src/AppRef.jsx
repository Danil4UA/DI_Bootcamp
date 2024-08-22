import { useState, useRef, useEffect} from 'react'
import './App.css'

// useRef its kind of getElementById
// useRef doesn't render the page 
// but we can use another useState : counter for example and fter that useRef will participate with rendering 
function App() {

  const [count, setCount] = useState(0)

  const inputRef = useRef()
  const divRef = useRef()
  const nameRef = useRef("John")

  useEffect(()=>{
    console.log(inputRef.current)
    console.log(divRef.current)
    console.log(nameRef)

  }, [])

  const handleChange = () => {
    const value = inputRef.current.value
    console.log(value)
    divRef.current.style.backgroundColor = "yellow"
  }

  const changeName = () => {
    nameRef.current = "Dan"
    console.log(nameRef.current)
  }
  return (
    <>
    <div ref={divRef}>
      <h2>User Ref Hook</h2>
      <input ref={inputRef} name='username' id='username' onChange={handleChange}/>
      <h2>My name is: {nameRef.current}</h2>
      <input onChange={changeName} type="text" />
      <div>
      <button onClick={()=>{setCount(prev => prev + 1)}}> + {count}</button>
      </div>
    </div>
    <br/>
    </>
  )
}

export default App
