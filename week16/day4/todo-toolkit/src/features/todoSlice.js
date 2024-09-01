import { createSlice } from "@reduxjs/toolkit"
import {YES, NO} from "./Todo"

const initialState = {
    todos: [

    ]
}


export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleTodo: (state, action) => {    
            const findIndex = state.todos.findIndex(item=>{
                return item.id == action.payload
            })
            state.todos[findIndex].completed = state.todos[findIndex].completed === NO ? YES : NO
        },
        removeTodo: (state, action) => {
            const filteredArray = state.todos.filter(item=>{
                return item.id !== action.payload
            })

            state.todos = filteredArray
        }
    }

})


export const {addTodo, toggleTodo, removeTodo} = todosSlice.actions
export default todosSlice.reducer