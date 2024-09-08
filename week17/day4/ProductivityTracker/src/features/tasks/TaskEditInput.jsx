import TaskConfirmEdit from "./TaskConfirmEdit";
import { useRef, useState } from "react";

const TaskEditInput = ({ id, initialText }) => {
    const inputEditRef = useRef();
    const [editedText, setEditedText] = useState(initialText);

    const handleChange = () => {
        setEditedText(inputEditRef.current.value);
    };

    return (
        <>
            <input
                onChange={handleChange}
                ref={inputEditRef}
                defaultValue={initialText}
            />
            <TaskConfirmEdit id={id} text={editedText} />
        </>
    );
};

export default TaskEditInput;