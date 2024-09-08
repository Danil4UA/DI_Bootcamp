import {creatSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    tasks: [

    ]
}

export const tasksSlice = creatSlice({
    name: "tasks",
    initialState,
    reducer: {
        // add task 
        add: (state, action) => {
            state.tasks.push({
                id: nanoid(),
                task: action.payload,
                active: true,
                datetime: Date.now(),
            })
        },
        remove: (state,action)=>{
            state.tasks = state.tasks.filter(item=> task.id !== action.payload)
        },

        clear: (state)=>{
            state.tasks = []
        },
        // set active to true or false

        active: (state, action) => {
            const task = state.tasks.find(item=>item.id === action.payload)
            task.active = !task.active
        }
    }
})

export const {add, clear, remove, active} = tasksSlice.actions
export default tasksSlice.reducer