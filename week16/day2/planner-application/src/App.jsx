import './App.css'
import { useSelector, useDispatch } from "react-redux"
import { addTask, removeTask, editTask } from './redux/action'
import { useRef, useState } from 'react'

function App() {
  
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todoReducer) 

  const inputDayRef = useRef()
  const inputTaskRef = useRef()

  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const day = inputDayRef.current.value
    const value = inputTaskRef.current.value
    if(day && value){
      dispatch(addTask(day, value))
    }

    inputDayRef.current.value = ""
    inputTaskRef.current.value = ""
  }

  const handleDelete = (id) => {
    dispatch(removeTask(id))
  }

  const handleEdit = (id, text) => {
    setEditingId(id)
    setEditText(text)
  }

  const handleEditSubmit = (e, id) => {
    e.preventDefault()
    if (editText.trim()) {
      dispatch(editTask(id, editText))
      setEditingId(null) 
      setEditText("") 
    }
  }

  return (
    <>
      <h1>Planner Application</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputDayRef} placeholder='Enter the day...' />
        <input ref={inputTaskRef} placeholder='Enter your task...' />
        <input type="submit" />
      </form>
      <div>
        {todos.map(item => (
          <li key={item.id}>
            {editingId === item.id ? (
              <form onSubmit={(e) => handleEditSubmit(e, item.id)}>
                <input 
                  type="text" 
                  value={editText} 
                  onChange={(e) => setEditText(e.target.value)} 
                />
                <button type="submit">Confirm Changes</button>
              </form>
            ) : (
              <>
                {item.text} on {item.day}
                <button onClick={() => handleEdit(item.id, item.text)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </div>
    </>
  )
}

export default App