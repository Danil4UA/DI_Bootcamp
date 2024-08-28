import { TaskContext } from "../App"
import { useContext } from "react"
import TaskRemove from "./TaskRemove"

const TaskLists = () => {
    const {state} = useContext(TaskContext)
    return (
        <>
           {state.tasks.map(item=>{
            return (
                <div key={item.id}>
                    {item.name}
                    <TaskRemove id={item.id}></TaskRemove>
                </div>
            )
           })}
        </>
    )
}

export default TaskLists