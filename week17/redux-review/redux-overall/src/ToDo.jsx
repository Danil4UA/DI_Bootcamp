import {memo} from "react"

const ToDo = ({todos}) => {
    console.log("Render ToDo...")
    return (
        <>
            <h3>Todos: </h3>
        </>
    )
}

export default memo(ToDo)