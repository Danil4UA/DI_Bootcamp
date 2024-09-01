import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "../features/todoSlice.js"

const store = configureStore({
    reducer: {
        todosReducer
    }
})

export default store