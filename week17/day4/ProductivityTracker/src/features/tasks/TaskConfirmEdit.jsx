import { useDispatch } from "react-redux";
import { confirmEdit } from "./state/slice";

const TaskConfirmEdit = ({ id, text }) => {
    const dispatch = useDispatch();

    const handleConfirmEdit = () => {
        dispatch(confirmEdit({ id, text }));
    };

    return <button onClick={handleConfirmEdit}>Confirm</button>;
};

export default TaskConfirmEdit;