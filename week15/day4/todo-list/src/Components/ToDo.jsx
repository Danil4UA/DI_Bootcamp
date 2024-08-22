import { useRef, useState } from "react"



const ToDo = () => {

    const [toDoList, setToDoList] = useState([])
    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: toDoList.length,
            text: inputRef.current.value
        }

        setToDoList([...toDoList, newTodo])
        inputRef.current.value = ""
    };

    const handleClick = (id) => {
        const updatedToDoList = toDoList.filter(todo => todo.id !== id);
        setToDoList(updatedToDoList)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" />
                <input type="submit" value="submit" />
            </form>
          
            <div>
                {toDoList.map((item) => (
                    <div key={item.id}>
                        To-do #{item.id}: {item.text}
                        <button onClick={() => handleClick(item.id)}> X </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ToDo