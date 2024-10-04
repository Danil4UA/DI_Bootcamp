import TaskRemove from "./TaskRemove"

interface TaskItemProps {
    task: string,
    id: number
}

const TasksItem = (props: TaskItemProps): JSX.Element => {
    const {task, id} = props

    return (
        <>
           <div>
                <p>{task}</p>
                <TaskRemove id={id} />
           </div>
        </>
    )
}

export default TasksItem