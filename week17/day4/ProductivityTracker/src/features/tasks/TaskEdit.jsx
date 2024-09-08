import {edit} from "./state/slice"
import {useDispatch} from "react-redux"

const TaskEdit = ({id}) => {
    const dispatch = useDispatch()
    const handleEdit = () => {
        dispatch(edit(id))
    }

    return (
        <button onClick={handleEdit}>Edit</button>
    )
}
export default TaskEdit