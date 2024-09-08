//names of the users
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"


const initialState = {
    users: [

    ],
    status: ""// loading , success, failed
}


export const getUsers = createAsyncThunk("users/delay", async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return data
})




export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
        // type will be: counter/increment

    extraReducers(builder){
        builder
            .addCase(getUsers.pending, (state, action)=>{
                // state.users = action.payload 
            state.status = "pending"
            })
            .addCase(getUsers.fulfilled, (state, action)=>{
                // state.users = action.payload 
               state.status = "success"
               state.users = action.payload
            })
            .addCase(getUsers.rejected, (state)=>{
                // state.users = action.payload 
               state.status = "failed"
            })
          
    }
}
)


export const {} =  usersSlice.actions;
export default usersSlice.reducer

// https://jsonplaceholder.typicode.com/users