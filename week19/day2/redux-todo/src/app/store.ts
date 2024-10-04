import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/state/tasksSlice"

const rootReducer = combineReducers({
    tasks: tasksReducer
})

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default store