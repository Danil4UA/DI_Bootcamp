import { createSlice } from "@reduxjs/toolkit"
import { YES, NO } from "./Planner"

const initialState = {
    planner: [

    ]
}

export const plannerSlice = createSlice({
    name: "planner",
    initialState,
    reducers: {
        // all reducers
        addTask: (state, action) => {
            state.planner.push(action.payload)
        },
        removeTodo: (state, action) => {
            const filteredArray = state.planner.filter(item=>{
                return item.id !== action.payload
            })

            state.planner = filteredArray
        },
        toggleTodo: (state, action) => {    
            const findIndex = state.planner.findIndex(item=>{
                return item.id == action.payload
            })
            state.planner[findIndex].completed = state.planner[findIndex].completed === NO ? YES : NO
        },

    }
}) 


export const {addTask, removeTodo, toggleTodo} = plannerSlice.actions

export default plannerSlice.reducer