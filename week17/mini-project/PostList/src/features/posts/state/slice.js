import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "",
  author: -1
};

const books = [
  {id:1,title:"nnn"},
  {id:2,title:"aaa"},
]

export const fetchPosts = createAsyncThunk("posts/fetchposts", async () => {
  const response = await axios.get(POST_URL);
  return response.data;
  // throw new Error()

  // return new Promise((res)=>{
  //   res(books)
  // })
  
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addreaction: (state, action) => {
      const { id, name } = action.payload;
      const post = state.posts.find((item) => item.id === id);
      if (post) {
        post.reactions[name]++;
      }
    },
    filterAuthor: (state,action) => {
      state.author = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        const newPost = action.payload.map((post) => {
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });
        // console.log(newPost);
        state.posts = newPost;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const posts = (state) => state.postsReducer.posts;
export const status = (state) => state.postsReducer.status;
export const state = (state) => state.postsReducer;
export const author = (state) => state.postsReducer.author

export const { addreaction, filterAuthor } = postsSlice.actions;
export default postsSlice.reducer;
