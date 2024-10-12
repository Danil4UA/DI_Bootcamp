import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../app/store"

// import { PayloadAction } from "@reduxjs/toolkit";


interface Post {
    content: string
}

interface InitialStatePosts {
    posts: Post[];
    status: string;
    currentResult: null | string
}


export interface Content {
        language: string
        request: string
        size: string
        emojis: boolean
        style: string
        audience: string
        platform: string
        hashtags: boolean
        characthersCount: number
}

const URL = "http://localhost:5001/api"


const initialState: InitialStatePosts = {
    posts: [],
    status: "",
    currentResult: null
  
};

export const createPost = createAsyncThunk(
    "posts/create",
    async (content: Content) => {
        try {
            console.log("making a request")
            const response = await axios.post(`${URL}/posts/create`, {
                content: content
            },
            {
                withCredentials: true
            })

            return response.data;
        } catch (error) {
            console.log("error => ", error)
        }
       
    }
);


export const fetchPosts = createAsyncThunk("posts/fetchposts", async () => {
    const response: any = axios.get(`${URL}/posts/all`)
    return response.data
    
});

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        setCurrentResult: (state, action) => {
            state.currentResult = action.payload
        }
    },
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

export const  {setCurrentResult} = postsSlice.actions
export const selectPostsState = (state: RootState)=> state.posts

// export const selectContentState = (state: RootState) => state.posts.content


export default postsSlice.reducer