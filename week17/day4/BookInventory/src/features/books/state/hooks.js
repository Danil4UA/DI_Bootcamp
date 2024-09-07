import {useSelector, useDispatch} from "react-redux"
import { useCallback } from "react"
import { filterBooks } from "./slice";
import {selectBooks} from "./selectors"

// Custom hook for selecting books
export const useBooksSelector = () => {
    return useSelector(selectBooks);
  };

export const useFilteredBook = (value) => {
    const dispatch = useDispatch()
    return useCallback(()=>{
        dispatch(filterBooks(value))
    },[dispatch, value])
} 