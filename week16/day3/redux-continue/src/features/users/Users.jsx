
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react"
import { getUsers } from "./usersSlice";


const Users = () => {
    const users = useSelector(state=> state.usersReducer.users);
    const status = useSelector(state=> state.usersReducer.status);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
    }, [])
    if(status === "loading"){
        return (
            <>
                Loading...
            </>
        )
    }else if(status === "failed"){
        return(
            <>
            Failed...
            </>
        )
    }else if(status === "success"){
        return(
            <>
                <div>
                    {users.map(item=>{
                        return <div key={item.id}>{item.name}</div>
                    })}
                </div>
            </>
        )
    }

}

export default Users