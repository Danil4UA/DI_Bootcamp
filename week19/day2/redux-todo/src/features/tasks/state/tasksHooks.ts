import { selectTasks } from "./tasksSelector";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch } from "../../../app/store";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useSelectTasks = () => {
    return useSelector(selectTasks)
}