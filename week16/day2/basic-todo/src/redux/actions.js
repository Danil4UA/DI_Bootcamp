export const ADD_TODO = "add-todo"
export const REMOVE_TODO = "remove-todo"

export const addTask = (task) => {
    return {
        type: ADD_TODO,
        task
    }
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TODO,
        id
    }
}