import { useContext } from "react"
import { AppContext } from "../App"

const Input = () => {
    const {setText} = useContext(AppContext)

    const handleChange = (e) => {
        setText (prev =>e.target.value)
    }
    return (
        <input onChange={handleChange} type="text" placeholder="type something"/>
    )
}

export default Input