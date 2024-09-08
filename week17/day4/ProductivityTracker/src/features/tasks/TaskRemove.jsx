import {remove} from "./state/slice"
import {useDispatch} from "react-redux"

const TaskRemove = ({id}) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(remove(id))
    }
    return (
        <button onClick={handleRemove}>Remove</button>
    )
}

export default TaskRemove