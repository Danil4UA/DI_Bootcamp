import TaskAdd from "./TaskAdd";
import { useRef, useState } from "react";
import TaskClear from "./TaskClear";

const TaskInput = () => {
    const inputRef = useRef();
    const inputCategoryRef = useRef()

    const [text, setText] = useState("");
    const [category, setCategory] = useState("")

    const handleChange = () => {
        setText(inputRef.current.value);
        setCategory(inputCategoryRef.current.value)
    };

    return (
        <div>
            <input 
                ref={inputRef} 
                placeholder="Enter your task ..." 
                onChange={handleChange} 
            />
            <input 
                ref={inputCategoryRef}
                placeholder="Enter your category..." 
                required
                onChange={handleChange}
            />
            <TaskAdd text={text} category={category} />
            <TaskClear />
        </div>
    );
};

export default TaskInput;