import { useDispatch } from "react-redux"
import { removeTask } from "./state/tasksSlice"

interface TaskRemoveProps {
    id: number
}
const TaskRemove = (props: TaskRemoveProps) => {
    const {id} = props

    const dispatch = useDispatch()
    
    const handleRemove = () => {
        dispatch(removeTask(id))
    }
    
    return (
        <>
            <button onClick={handleRemove}>Remove Task</button>
        </>
    )
}

export default TaskRemove