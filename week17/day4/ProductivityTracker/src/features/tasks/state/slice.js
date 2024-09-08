import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        add: (state, action) => {
            state.tasks.push({
                id: nanoid(),
                text: action.payload.text,
                category: action.payload.category,
                active: true,
                edited: false,
            });
        },
        remove: (state, action) => {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload);
        },
        clear: (state) => {
            state.tasks = [];
        },
        active: (state, action) => {
            const task = state.tasks.find((item) => item.id === action.payload);
            if (task) {
                task.active = !task.active;
            }
        },
        edit: (state, action) => {
            const task = state.tasks.find((item) => item.id === action.payload);
            if (task) {
                task.edited = !task.edited;
            }
        },
        confirmEdit: (state, action) => {
            const task = state.tasks.find((item) => item.id === action.payload.id);
            if (task) {
                task.text = action.payload.text;
                task.edited = false;
            }
        },
    },
});

export const { add, clear, remove, active, edit, confirmEdit } = tasksSlice.actions;
export default tasksSlice.reducer;