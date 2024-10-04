import TasksItem from "./TasksItem";
import { useSelectTasks } from "./state/tasksHooks";
import { Task } from "./state/tasksSlice";

const TasksList = (): JSX.Element => {
    const tasks = useSelectTasks();
    
    return (
        <>
            {tasks.map((item: Task) => (
                <TasksItem key={item.id} task={item.task} id={item.id}/> 
            ))}
        </>
    );
};

export default TasksList;