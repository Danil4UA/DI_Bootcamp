import { useContext } from "react"
import { AppContext } from "../App"
const Name = () => {
    const {name} = useContext(AppContext)
    return (
        <>
            <h2>Name: {name}</h2>
        </>
    )
}

export default Name