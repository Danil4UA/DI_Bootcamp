import { useRef, useState } from "react"

const ShowInput = () => {

    const inputRef = useRef()
    const [length, setLength] = useState()

    const handleChange = () => {
        setLength(prev => inputRef.current.value.length)
    }

    return (
        <>
        <div>
            <input ref={inputRef} type="text" onChange={handleChange}/>
            <div>Counter: {length}</div>
        </div>
        </>
    )
}

export default ShowInput