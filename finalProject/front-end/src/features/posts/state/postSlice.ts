import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../app/store"

// import { PayloadAction } from "@reduxjs/toolkit";


interface Post {
    content: {}
}
interface InitialStatePosts {
    posts: Post[],
    status: string

}
const URL = "http://localhost:5001/api"

const initialState: InitialStatePosts = {
    posts: [], 
    status: ""
}

export const createPost = createAsyncThunk(
    "posts/create",
    async (content: any) => {
        try {
            const response = await axios.post(`${URL}/posts/create`, {
                content: content
            },
            {
                withCredentials: true
            }
        );
            return response.data;
        } catch (error) {
            console.log("error => ", error)
        }
       
    }
);


export const fetchPosts = createAsyncThunk("posts/fetchposts", async () => {
    const response: any = axios.get(`${URL}/all`)
    return response.data
    
});

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state)=>{
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled,(state, action)=> {
                state.posts = action.payload
                state.status = "succes"
            })
            .addCase(fetchPosts.rejected,(state)=> {
                state.status = "faild"
            })
    }
})

export const selectPostsState = (state: RootState)=> state.posts

export default postsSlice.reducer