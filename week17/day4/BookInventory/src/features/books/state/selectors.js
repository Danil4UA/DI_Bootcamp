import { createSelector } from "@reduxjs/toolkit";
import { books, genres } from "./slice";

export const selectBooks = createSelector([books], (books) => books.slice());
export const selectGenres = createSelector([genres], (genres) => genres.slice());

// export const selectHorrorBooks = createSelector([books], (books)=>{
//     return books.filter(item=>{
//         return item.genre == "Horror"
//     })
// })

// export const selectFantasyBooks = createSelector([books], (books)=>{
//     return books.filter(item=>{
//         return item.genre == "Fantasy"
//     })
// })

// export const selectScienceFictionBooks = createSelector([books], (books)=>{
//     return books.filter(item=>{
//         return item.genre == "Science Fiction"
//     })
// })
