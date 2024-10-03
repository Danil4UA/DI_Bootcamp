import List from "./List"
import { useState, useRef } from "react"

interface Todo {
    id: number
    text: string
}

const TodoApp = (): JSX.Element => {
    const [tasks, setTasks] = useState<Todo[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    const addTodo = (): void => {
        const value: string | undefined = inputRef.current?.value.trim()
        if (!value) {
            return
        }
        const newTodo: Todo = {
            id: tasks.length,
            text: `${value} - ${new Date().toLocaleTimeString()}`,
        }
        setTasks([...tasks, newTodo])
        inputRef.current!.value = ""
    }

    return (
        <>
            <input type="text" placeholder="Enter your task ..." ref={inputRef} />
            <button onClick={addTodo}>Add todo</button>
            <List 
                items={tasks} 
                renderItem={(item) => <h3>{item.text}</h3>} // Customize how each todo is rendered
            />
        </>
    )
}

export default TodoApp