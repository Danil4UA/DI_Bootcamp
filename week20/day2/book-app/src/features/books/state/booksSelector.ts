import { createSelector } from "@reduxjs/toolkit";
import {state} from "../state/booksSlice"

export const selectBooks = createSelector([state], (state)=>state.books)
export const selectStatus = createSelector([state], (state)=>state.status)
