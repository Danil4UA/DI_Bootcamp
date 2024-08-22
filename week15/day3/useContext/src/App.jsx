import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [num, setNum] = useState("")
  const [yesno, setYesno] = useState(false)
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, num, yesno, text);
    
  }

  return (
    <>
      <h2>Forms in React</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" placeholder='Name...' onChange={(e)=>setName(e.target.value)}/>

        <br></br>

        <select onChange={(e)=>setNum(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <br></br>

        Yes/No <input type="checkbox" onChange={(e)=>setYesno(e.target.checked)}/>
        <br></br>

        <textarea name="" id="" onChange={(e)=>setText(e.target.value)}></textarea>
        <br></br>
        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}

export default App
