import { useFetchUsers, useUsersSelector} from "./state/hooks"
import { useEffect } from "react"
import {useFilterAuthor} from "../posts/state/hooks"

const Users = (props) => {
    const users = useUsersSelector()
    const callFetchUsers = useFetchUsers()
    const callFilterAuthor = useFilterAuthor()
    useEffect(()=>{
        callFetchUsers()
    }, [])
    return (
        <>
            <h4>Authors</h4>
            <select onChange={(e)=> callFilterAuthor(e.target.value)}>
                <option value="1">Select Author...</option>
                {users.map(user=>{
                    return (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    )
                })}
            </select>
        </>
    )
}

export default Users