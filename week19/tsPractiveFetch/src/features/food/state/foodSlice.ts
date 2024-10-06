import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios"

const URL: string = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1';
const KEY: string = 'bf51406349mshad5cf8ef34071cap1dbf10jsn531183fd29d8';

interface Food {
  food: any[];
  status: string;
}

const initialState: Food = {
  food: [],
  status: "",
};

export const fetchFood = createAsyncThunk("food/fetchfood", async () => {
  const options = {
    method: 'GET',
    url: URL,
    params: {
      tags: 'vegetarian,dessert',
      number: '1',
    },
    headers: {
      'x-rapidapi-key': KEY,
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFood.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFood.fulfilled, (state, action: PayloadAction<any>) => {
        state.food = action.payload.recipes;
        state.status = "succeeded";
      })
      .addCase(fetchFood.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default foodSlice.reducer;