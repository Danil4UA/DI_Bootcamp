import {useSelector, useDispatch} from "react-redux"
import {useFilterAuthor} from "../posts/state/hooks"
import {fetchUsers} from "./state/slice"

const UsersSearch = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.usersReducer.users);
    const getUsers = dispatch(fetchUsers(users))
    // console.log(users)
    

    return (
        <>
            <select>
              {users.map((user)=>{
                return (
                <option>{user.name}</option>
                )
              })}
              o
            </select>
        </>
    )
}

export default UsersSearch