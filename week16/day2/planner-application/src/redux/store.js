import { createStore, combineReducers } from 'redux'
import todoReducer from './reducer.js'

const rootReducer = combineReducers({
    todoReducer,
})


const store = createStore(rootReducer)

export default store