import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, REMOVE_TODO } from "./actions"

const initialState = []

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: uuidv4(),
                task: action.task
            }]
        case REMOVE_TODO:
            return state.filter(item => item.id !== action.id)
        default:
            return state
    }
}

export default todoReducer