import { useRef } from "react"
import { addTask } from "./state/tasksSlice"
import { useDispatch } from "react-redux"

const TaskInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const handleAdd = () => {
        const value = inputRef.current?.value.trim()
        if(value){
            dispatch(addTask(value))
        }

    }
    return (
        <>
            <input ref={inputRef} type="text" placeholder="Enter your task ..." />
            <button onClick={handleAdd}>Add Task</button>
        </>
    )
}

export default TaskInput