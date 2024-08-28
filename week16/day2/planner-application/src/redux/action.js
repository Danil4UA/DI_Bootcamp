export const ADD_TODO = "add-task"
export const REMOVE_TODO = "remove-task"
export const EDIT_TODO = "edit-task"

export const addTask = (day, text) => {
    return {
        type: ADD_TODO,
        day,
        text
    }
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TODO,
        id
    }
}

export const editTask = (id, text) => {
    return {
        type: EDIT_TODO,
        id,
        text
    }
}