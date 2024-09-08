import {createSelector} from "@reduxjs/toolkit"
import { state } from "./slice"

export const selectUsers = createSelector([state], (state)=> state.users)