
import {Box, TextField, Button, Typography} from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = (): JSX.Element => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate()

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill out both email and password.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5001/api/users/register", {
                email: email,
                password: password,
            });

            if (response.status === 201) {
                navigate('/login');
            }
        } catch (error) {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <>
            <Box component="form" sx={{ m: 1 }} onSubmit={handleRegister} noValidate autoComplete="off">

            <TextField
                sx={{ m: 1 }}
                type="email"
                label="Enter your email..."
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                sx={{ m: 1 }}
                type="password"
                label="Enter your password..."
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
                <Typography color="error" sx={{ m: 1 }}>
                    {error}
                </Typography>
            )}

            <Button type="submit" variant="contained">Register</Button>
        </Box>
 
        </>
    )
}

export default Register