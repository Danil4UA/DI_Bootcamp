import { createSelector } from "@reduxjs/toolkit";
import { selectTasksState } from "./tasksSlice";

export const selectTasks = createSelector([selectTasksState], (tasksState)=>tasksState.tasks)