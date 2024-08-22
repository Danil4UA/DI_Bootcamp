import { useContext } from "react"
import { AppContext } from "../App"

const ShowInput = () => {
    const {text} = useContext(AppContext)
    
    return (
        <>
            <div>Input : {text}</div>
        </>
    )
}

export default ShowInput