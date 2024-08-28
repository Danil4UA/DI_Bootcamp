import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./action";
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: uuidv4(),
                    day: action.day,
                    text: action.text,
                }
            ];

        case REMOVE_TODO:
            return state.filter(item => item.id !== action.id);

        case EDIT_TODO:
            return state.map(item =>
                item.id === action.id ? { ...item, text: action.text } : item
            );

        default:
            return state;
    }
}

export default todoReducer;