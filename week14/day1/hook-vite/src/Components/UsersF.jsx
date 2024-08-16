import { useState } from "react";

const UsersF = () => {

    const [users, setUsers] = useState([])

    const getUsers = ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            setUsers(data)
        })
    }

    // const handleChange = (e) => {
    //     const data = e.target.value
    //     const filteredUsers = users.filter((item)=>{
    //         item.name.toLowerCase().includes(data)
    //     })
    //     setUsers(filteredUsers)
    // }
    return (
        <>
        
            <div>
                <h2>
                    {/* <input onChange={()=>{handleChange(e)}} placeholder="search"></input> */}
                    <button onClick={getUsers}>Get Users</button>
                    {users.map((item) => (
                        <div key={item.id}> {item.name} </div>
                    ))}
                </h2>
            </div>
        </>
    );
}

export default UsersF