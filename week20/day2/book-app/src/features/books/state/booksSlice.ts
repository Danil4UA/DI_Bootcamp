import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../../../app/store"

const API_KEY: string = "AIzaSyB1Am5nNyfAkqNzwnn-CHuLwDCzOwtOzUo"
const URL: string = "https://www.googleapis.com/books/v1/volumes"

export type Book = {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        publishedDate: string;
        description: string;
        imageLinks: {
            thumbnail:string
        }
    };
};

interface InitialState {
    books: Book[]
    status: "loading" | "failed" | "fulfilled" | ""
}
const initialState: InitialState = {
    books: [],
    status: ""
}

export const fetchBooks = createAsyncThunk("books/fetchBooks", 
    async (searchTerm: string) => {
        try {
            const response = await axios.get(URL, {
                params: {
                    orderBy: "relevance",
                    q: searchTerm || "*",
                    key: API_KEY,
                    maxResults: 40,
                },
            });
            console.log(response.data.items)
            return response.data.items;
        } catch (error) {
            console.log(error)
        }
});


const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state) => {
                state.status = "failed";
            });
    }
})

export const state = (state: RootState)=> state.books
export default booksSlice.reducer
