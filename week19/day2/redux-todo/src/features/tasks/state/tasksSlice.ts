import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store"
import { PayloadAction } from "@reduxjs/toolkit";


export type Task = {
    id: number
    task: string
}

interface InitialState {
    tasks: Task[]
}

const initialState: InitialState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTask = {
                id: state.tasks.length + 1,
                task: action.payload
            }
            state.tasks.push(newTask)
        },
        removeTask: (state, action:PayloadAction<number>)=>{
            const findIndexById = state.tasks.findIndex((item)=>{
                return item.id === action.payload
            })

            if(findIndexById === -1) return 
            state.tasks.splice(findIndexById, 1 )
        }
    },
})
export const {addTask, removeTask} = tasksSlice.actions

export const selectTasksState = (state: RootState)=> state.tasks
export default tasksSlice.reducer