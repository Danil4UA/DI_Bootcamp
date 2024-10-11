// import axios from "axios"
// import { useState, useContext } from "react"
// import { useNavigate } from "react-router-dom"
import {Box, TextField} from "@mui/material"
// import { AuthContext } from "../App"

const Login = (): JSX.Element => {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [message, setMessage] = useState("")
    // const {setToken} = useContext(AuthContext)
    // const navigate = useNavigate()

    // const login = async () => {
    //     if (!email || !password) {
    //         setMessage("Please enter both email and password")
    //         return;
    //     }
        
    //     try {
    //         const response = await axios.post("http://localhost:5001/api/users/login", {
    //             email, password
    //         },
    //         {withCredentials: true})
    //         if(response.status == 200){
    //             setMessage(response.data.message)
    //             console.log(response.data)
    //             setToken(response.data.accessToken)
    //             navigate("/")
    //         }
    //     } catch (error) {
    //             console.log(error)
    //             setToken(null)
    //     }
    // }

    return (
        <>
            <Box component={"form"} sx={{m:1}} noValidate autoComplete="off" >
                <TextField
                    sx={{m:1}}
                    id="email"
                    type="email"
                    label="Enter your email..."
                    variant="outlined"
                    // onChange={(e)=>setEmail(e.target.value)}
                ></TextField>

                <TextField
                    sx={{m:1}}
                    id="password"
                    type="password"
                    label="Enter your password..."
                    variant="outlined"
                    // onChange={(e)=>setPassword(e.target.value)}
                ></TextField>
            </Box>
            {/* <Button variant="contained" onClick={login}>Login</Button> */}
            {/* <div>{message}</div> */}
        </>
    )
}

export default Login