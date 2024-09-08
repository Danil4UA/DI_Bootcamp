import {useSelector, useDispatch} from "react-redux"
import { selectUsers } from "./selectors"
import { fetchUsers } from "./slice"
import { useCallback } from "react"

export const useUsersSelector = () => {
    return useSelector(selectUsers)
} 

export const useFetchUsers = () => {
    const dispatch = useDispatch()
    return useCallback(()=>{
        dispatch(fetchUsers())
    }, [dispatch])
}