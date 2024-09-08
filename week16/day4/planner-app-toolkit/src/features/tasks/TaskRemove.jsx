import {useDispatch} from "react-redux"
import {remove} from "./state/slice"

const TaskRemove = ({id}) => {
    const dispatch = useDispatch()

    const removeTask = (id) => {
        dispatch(remove(id))
    }
    return (
        <button onClick={()=>removeTask()}> X </button>
    )
}

export default TaskRemove