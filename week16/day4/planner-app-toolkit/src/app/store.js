import {configureStore} from "@reduxjs/toolkit";
import plannerReducer from "../features/plannerSlice.js";

const store = configureStore({
    reducer: {
        plannerReducer
    }
})

export default store