import { AppContext } from "../App"
import { useContext } from "react"


const ShowCount = () => {

    const {count} = useContext(AppContext)
    return(
        <>
        Count: {count}
        </>
    )
}

export default ShowCount