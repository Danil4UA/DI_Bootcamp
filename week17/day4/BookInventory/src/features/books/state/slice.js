import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
// import axios from "axios"
const initialState = {
    books: [
        {
          id: 1,
          title: "Dracula",
          author: "Bram Stoker",
          genre: "Horror",
        },
        {
          id: 2,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          genre: "Fantasy",
        },
        {
          id: 3,
          title: "Dune",
          author: "Frank Herbert",
          genre: "Science Fiction",
        },
        {
          id: 4,
          title: "It",
          author: "Stephen King",
          genre: "Horror",
        },
        {
          id: 5,
          title: "The Name of the Wind",
          author: "Patrick Rothfuss",
          genre: "Fantasy",
        },
        {
          id: 6,
          title: "Neuromancer",
          author: "William Gibson",
          genre: "Science Fiction",
        },
      ],
    genres : [
        "Horror", "Fantasy", "Science Fiction"
    ],

    status: ""
}

const URL_BOOKS = ""

export const fetchBooks = createAsyncThunk(
    "books/fetchbooks",
    async () => {
        const response = await axios.get(URL_BOOKS)
        return response.data
    }
)

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        filterBooks: (state, action) => {
            // Filter books without permanently altering the original list in initialState
            action.payload == "-1" ? state.books = initialState.books :
            state.books = initialState.books.filter(
              (item) => item.genre === action.payload
            );
            console.log(state.books);
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state)=>{
                state.status = "loading"
            })
            .addCase(fetchBooks.fulfilled, (state, action)=>{
                state.books = action.payload
            })
            .addCase(fetchBooks.rejected, (state=>{
                state.status = "rejected"
            }))
    }
    
})

// export const books = (state)=> state.booksReducers.books

// export const state = (state) => state.booksSlice
// export const books = (state) => state.booksSlice.books

export const books = (state) => state.booksReducers.books;
export const genres = (state) => state.booksReducers.genres;

export const {filterBooks} = booksSlice.actions
export default booksSlice.reducer