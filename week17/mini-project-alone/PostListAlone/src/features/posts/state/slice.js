import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    posts: []
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {

    }
})

export const getUsers = createAsyncThunk(
    "posts/getUsersAsync",
    async (posts) => {
        const response = await fetch()
    }
)

export const {} = postsSlice.actions
export default postsSlice.reducer