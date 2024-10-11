
import {Box, TextField, Button} from "@mui/material"
import axios from "axios"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../App"

const Login = (): JSX.Element => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    // making sure context is not null
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }
    const { setToken } = authContext;

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            console.log(email, password)
            const response: any = await axios.post("http://localhost:5001/api/users/login", {
                email: email,
                password: password,
            })
            if(response.status == 200){
                console.log("response succes")
                setToken(response.data.accessToken)
                navigate('/')
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Box component="form" sx={{ m: 1 }} onSubmit={handleLogin} noValidate autoComplete="off" >
                <TextField
                    sx={{m:1}}
                    id="email"
                    type="email"
                    label="Enter your email..."
                    variant="outlined"
                    onChange={(e)=>setEmail(e.target.value)}
                ></TextField>

                <TextField
                    sx={{m:1}}
                    id="password"
                    type="password"
                    label="Enter your password..."
                    variant="outlined"
                    onChange={(e)=>setPassword(e.target.value)}
                ></TextField>
                <Button type="submit" variant="contained">Login</Button>
            </Box>
 
        </>
    )
}

export default Login