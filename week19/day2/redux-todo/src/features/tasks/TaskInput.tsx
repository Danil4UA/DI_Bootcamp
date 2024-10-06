import { useRef } from "react"
import { addTask } from "./state/tasksSlice"
import { useAppDispatch } from "./state/tasksHooks"

const TaskInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()

    const handleAdd = () => {
        const value = inputRef.current?.value.trim();
        if (value) {
            dispatch(addTask(value));
            inputRef.current!.value = "";  
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