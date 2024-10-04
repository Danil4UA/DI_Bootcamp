import TasksList from "./TasksList"
import TaskInput from "./TaskInput"
import TaskTitle from "./TaskTitle"

const Task = (): JSX.Element => {
    return (
        <>
            <TaskTitle />
            <TaskInput />
            <TasksList />
        </>
    )
}

export default Task