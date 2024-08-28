import { useContext } from "react"
import { TaskContext } from "../App"
import { REMOVE_TASK } from "../App"

const TaskRemove = ({ id }) => {
    const {dispatch} = useContext(TaskContext)
    const removeTask = () => {
        dispatch({type: REMOVE_TASK, id:id})
    }

    return (
        <>
            <button onClick={()=>removeTask()}> X </button>
        </>
    )
}

export default TaskRemove