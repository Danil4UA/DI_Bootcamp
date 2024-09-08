import { configureStore, combineReducers } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/state/slice";
import usersReducer from "../features/users/state/slice"

export const appReducer = combineReducers({
  postsReducer,
  usersReducer
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
