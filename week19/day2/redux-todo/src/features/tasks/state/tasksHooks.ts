import { selectTasks } from "./tasksSelector";
import { useSelector } from "react-redux";


export const useSelectTasks = () => {
    return useSelector(selectTasks)
}