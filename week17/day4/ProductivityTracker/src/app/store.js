import {configureStore} from "@reduxjs/toolkit";
import tasksSlice from "../features/tasks/state/slice"


const store = configureStore({
    reducer: {
        tasksSlice,
    }
})

export default store