import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
    users: [],
    // status: "", // loading, success, failed
  };
  
  export const fetchUsers = createAsyncThunk("users/fetchusers", async () => {
    const response = await axios.get(USERS_URL);
    return response.data;
  });


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        
    },
    extraReducers(builder){
        builder
        // .addCase(fetchUsers.pending, (state) => {
        //     // state.status = "loading"
        // })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
    }

})


export const state = (state) => state.usersReducer;
export const {} = usersSlice.actions

export default usersSlice.reducer;