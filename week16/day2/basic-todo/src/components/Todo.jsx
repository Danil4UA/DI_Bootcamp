import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import { addTask, removeTask } from "../redux/actions.js"


const Todo = () => {
    const inputRef = useRef()
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todoReducer) 

    const handleClick = (e) => {
        e.preventDefault()
        const value = inputRef.current.value.trim()
        value ? dispatch(addTask(value)) : null
        inputRef.current.value = ""
    }
    
    const handleRemove = (id) => {
        dispatch(removeTask(id))
    }

    return (
        <>  
            <input ref={inputRef} placeholder="Add your task" />
            <button onClick={handleClick}>Submit</button>
            <div>List of your tasks below: </div>
            <ul>
                {todos.map(item=> (
                    <li key={item.id}>
                        {item.task} 
                        <button onClick={()=>handleRemove(item.id)}>remove</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todo