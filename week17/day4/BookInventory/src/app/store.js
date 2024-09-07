import { configureStore, combineReducers } from "@reduxjs/toolkit"
import booksReducers from "../features/books/state/slice"


const appCombineReducer = combineReducers({
    booksReducers,
})
const store = configureStore({
    reducer: appCombineReducer
})


export default store