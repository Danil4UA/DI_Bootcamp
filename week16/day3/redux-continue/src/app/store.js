import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.js"
import usersReducer from "../features/users/usersSlice.js"

// import {resetByUserInput} from "../features/counter/counterSlice.js"


// middleware - function 

// const logger = (store) => (next) => (action) => {
//     console.log("prev state => ", store.getState());
//     console.log("action => ", action)
//     next(action)
//     console.log("next state => ", store.getState())
// }

const store = configureStore({
    reducer: {
        counterReducer,
        usersReducer
    },

    // middleware: (getDefaultMiddleware) => {
    //     console.log(getDefaultMiddleware())
    //     return getDefaultMiddleware().concat(logger)
    // }
});


// this is not how we do it/ just an example

// const delayIncrement = (dispatch, getState) => {
//     setTimeout(()=>{
//         dispatch(resetByUserInput(5))
//     },5000)
// }

// store.dispatch(delayIncrement)

// console.log("store=> ", store)

export default store