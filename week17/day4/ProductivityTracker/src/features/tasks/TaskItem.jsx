import TaskRemove from "./TaskRemove"
import TaskEdit from "./TaskEdit"

const TaskItem = ({text, id, category}) => {
    console.log(category)
    return (
        <div>
            {text}
            Category: {category}
            <TaskRemove id={id}></TaskRemove>
            <TaskEdit id={id}></TaskEdit>
        </div>

    )
}

export default TaskItem