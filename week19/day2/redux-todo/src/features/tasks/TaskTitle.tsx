import { useSelectTasks } from "./state/tasksHooks"

const TaskTitle = (): JSX.Element => {
    const amountOfTasks = useSelectTasks().length
    
    return (
        <>
            <div>
                Amount of tasks: {amountOfTasks}
            </div>
        </>
    )
}

export default TaskTitle