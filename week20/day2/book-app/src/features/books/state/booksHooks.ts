import { selectBooks, selectStatus } from "./booksSelector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/store";
import {fetchBooks}  from "./booksSlice"

export const useSelectBooks = () => {
    return useSelector(selectBooks)
}

export const useSelectStatus = () => {
    return useSelector(selectStatus)
}

export const useFetchBooks = (searchTerm:string) => {
    console.log("fetching data...")
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(fetchBooks(searchTerm))
    }, [dispatch])
}