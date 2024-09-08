import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import TaskEditInput from "./TaskEditInput";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasksSlice.tasks); // Adjusted the slice name as needed

    return (
        <>
            <div>
                <h2>Task List:</h2>
                {tasks.map((item) => {
                    if (item.edited) {
                        return (
                            <TaskEditInput
                                key={item.id}
                                initialText={item.text}
                                id={item.id}
                            />
                        );
                    } else {
                        return (
                            <TaskItem
                                key={item.id}
                                text={item.text}
                                category={item.category}
                                id={item.id}
                            ></TaskItem>
                        );
                    }
                })}
            </div>
        </>
    );
};

export default TaskList;