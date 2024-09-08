import TaskRemove from "./TaskRemove"
import {useDispatch} from "react-redux"
import {active} from "./state/slice"
import "./tasks.css"

const TaskItem = ({task}) => {
    const dispatch = useDispatch()
    const changeActive = () => {
        dispatch(active(task.id))
    }
    return (
        <div>
            <span
            className={task.active? "" : "active"}
            onClick={()=>changeActive()}>
                {task.task}
            </span>
            <TaskRemove id={task.id} />
        </div>

    )
}

export default TaskItem