import {useSelector} from "react-redux"
import TaskItem from "./TaskItem"

const TaskList = (props) => {
    const tasks = useSelector(state=> state.tasksReducer.tasks)
    return (
        <>
            {tasks.map((task)=>{
                return <TaskItem key={task.id}>{task.task}</TaskItem>
            })}
        </>
    )
}
    export default TaskList