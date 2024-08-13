
import './App.css'
import Header from "./components/headerComponent/Header.jsx"
import Note from "./components/noteComponent/Note.jsx"
import Footer from './components/footerComponent/Footer.jsx'
import React, {useState} from 'react'

const notes = [
  {title: "my title aaa", content: "my content aaa"},
  {title: "my title bbb", content: "my content bbb"},
  {title: "my title ccc", content: "my content acc fskjdhf jkshdf jkdhaa"},
  {title: "my title aaa", content: "my cofjhskdfh jksdhf kjshntent aaa"},
]





function App() {

  const [count, setCount] = useState(0)
  
  function increase () {
    setCount(count + 1)
  }
  function decrease () {
    setCount(count - 1)
  }

  const [time, setTime] = useState(new Date().toLocaleString())
  const [isClicked, setClick] = useState(false)

function startTimer(){
  setClick(true)
  setInterval(()=>{
    setTime(new Date().toLocaleString())
  },1000)
}


  return (
    <>
      <Header></Header>
      <main>
        <div className="main-container">
          {notes.map((item,index)=>{
            return <Note key={index} title={item.title} content={item.content}></Note>
          })}
        </div>
  
      </main>
      <div>{count}</div>
      <button style={{width: "40px"}}onClick={increase}>+</button>
      <button style={{width: "40px"}}onClick={decrease}>-</button>
      <h1>TIME</h1>
      <button onClick={startTimer} style={{width: "80px"}}>Get Time</button>
      <div>{isClicked? time : null}</div>
      <Footer></Footer>
    </>
  )
}

export default App
