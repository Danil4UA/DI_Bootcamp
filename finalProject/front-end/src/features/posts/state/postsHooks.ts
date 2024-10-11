import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { useEffect } from "react";
import {selectPosts} from "./postsSelector"

export const useAppDispatch: () => AppDispatch = useDispatch

export const useSelectPosts = () => {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        useSelector(selectPosts)
    },[dispatch])
}