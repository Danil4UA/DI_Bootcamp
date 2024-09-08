import { createSelector } from "@reduxjs/toolkit";

// we need selectors for optimisation, if nothing change in one state it will memoized 

import { posts, status, state, author } from "./slice";

export const selectPosts = createSelector([posts, author], (posts, author) => {
   if(author == -1) return posts
   return posts.filter(item=>item.userId == author)
});

export const selectStatus = createSelector([state], (state) => state.status);
