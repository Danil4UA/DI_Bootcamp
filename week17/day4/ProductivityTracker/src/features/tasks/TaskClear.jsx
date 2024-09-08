import {clear} from "./state/slice"
import {useDispatch} from "react-redux"


const TaskClear = () => {
    const dispatch = useDispatch()
    const handleClear = () => {
        dispatch(clear())
    }
    return (
        <button onClick={handleClear}>Clear All</button>
    )
}

export default TaskClear