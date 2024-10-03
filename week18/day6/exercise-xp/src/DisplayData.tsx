import { useEffect, useState } from "react"
import axios from "axios"

type User = {
    id: number
    name: string
}

const URL = "https://jsonplaceholder.typicode.com/users"

const DisplayData = (): JSX.Element => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get(URL)
            setUsers(response.data)
        }
        console.log("I did a fetch")
        fetchData()
     }, [])


     
    return (
        <>
           {users.map((item)=>{
            return <p key={item.id}>id: {item.id} name: {item.name}</p>
           })}
        </>
    )
}

export default DisplayData