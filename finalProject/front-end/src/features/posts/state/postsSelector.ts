import { createSelector } from "@reduxjs/toolkit";
import { selectPostsState } from "./postSlice";

export const selectPosts = createSelector([selectPostsState], (postsState)=>postsState.posts)