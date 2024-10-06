import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit"
import axios from "axios"



const KEY: string = "bf51406349mshad5cf8ef34071cap1dbf10jsn531183fd29d8"
const HOST = 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
const URL: string = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1';


interface DataState {
    data: object,
    status: string
}
const initialState: DataState = {
    data: {},
    status: ""
}

export const fetchData = createAsyncThunk("data/fetchdata", async () => {
    const response = await axios.get(URL, {
        headers: {
            'x-rapidapi-key': KEY,
            'x-rapidapi-host': HOST,
        }
    } )
    return response.data
})

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(fetchData.pending, (state)=>{
            state.status = "pending"
        })
        .addCase(fetchData.fulfilled, (state, action: PayloadAction<object>) => {
            state.status = "success"
            state.data = action.payload
        })
        .addCase(fetchData.rejected, (state) => {
            state.status = "failed";
          });
    }
})

export default dataSlice.reducer