import { configureStore, combineReducers } from "@reduxjs/toolkit";
import booksReducer from "../features/books/state/booksSlice"

const rootReducer = combineReducers({
    books: booksReducer,
})

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
export default store