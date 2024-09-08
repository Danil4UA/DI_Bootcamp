import { add } from "./state/slice";
import { useDispatch } from "react-redux";

const TaskAdd = ({ text, category}) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(add({
                text,
                category
            }));
        }
    };

    return (
        <>
            <button onClick={handleAdd}>Add</button>
        </>
    );
};

export default TaskAdd;