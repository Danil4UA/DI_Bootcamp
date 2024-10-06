import { useAppDispatch } from "./state/tasksHooks"
import { removeTask } from "./state/tasksSlice"

interface TaskRemoveProps {
    id: number
}
const TaskRemove = (props: TaskRemoveProps) => {
    const {id} = props

    const dispatch = useAppDispatch()

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