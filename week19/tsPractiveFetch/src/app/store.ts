import { configureStore } from "@reduxjs/toolkit";

import foodReducer from "../features/food/state/foodSlice"


const store = configureStore({
    reducer: {
      food: foodReducer, // Correctly assign the reducer with a key
    },
  });
  
  // Get the type of our store variable
  export type AppStore = typeof store;
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<AppStore['getState']>;
  export type AppDispatch = AppStore['dispatch'];
  
  export default store;