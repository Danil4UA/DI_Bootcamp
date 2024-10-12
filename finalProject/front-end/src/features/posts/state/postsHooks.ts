import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {  RootState, AppDispatch  } from "../../../app/store";
import { useEffect } from "react";
import {selectPosts, selectPostsCurrentResult} from "./postsSelector"
import { fetchPosts } from "./postSlice";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useSelectPosts = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);


    return useAppSelector(selectPosts);
};

export const useSelectPostsCurrentResult = () => {

    return useAppSelector(selectPostsCurrentResult)
}