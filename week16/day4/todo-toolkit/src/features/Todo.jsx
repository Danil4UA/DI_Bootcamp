import {useSelector, useDispatch} from "react-redux"
import {addTodo, toggleTodo, removeTodo} from "./todoSlice"
import {useRef} from "react"
import { v4 as uuidv4 } from 'uuid';

export const NO = "no"
export const YES = "yes"

const Todo = () => {
    const todos = useSelector(state=>state.todosReducer.todos)
    const dispatch = useDispatch()

    const inputRef = useRef()


    const handleAdd = () => {
        const value = inputRef.current.value
        if(value.trim() === ""){
            return
        }
        dispatch(addTodo({
            id: uuidv4(),
            text: value,
            completed: NO,
        }))
        inputRef.current.value = ""
    }
    const handleRemove= (id) => {
        dispatch(removeTodo(id))
    }

    const handleToggle = (id) => {
        dispatch(toggleTodo(id))
    }
    return (
        <>
            <h3>To-do</h3>
            <input ref={inputRef} placeholder="Add your to-do"/>
            <button onClick={handleAdd}>Add</button>
            <div>
                {todos.map(item=>{
                    return(
                        <div key={item.id} style={{display: "flex", justifyContent: "space-between", gap: "20px", border: "solid 1px black", margin: "20px", alignItems: "center", padding: "0 20px", borderRadius: "10px"}}>
                            <p>Completed: {item.completed} {item.text}</p> 
                            <div>
                                <button onClick={()=>handleRemove(item.id)}>Remove</button> <button onClick={()=>handleToggle(item.id)}>Complete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )

}

export default Todo