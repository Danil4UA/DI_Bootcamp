import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const Login = (): JSX.Element => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // making sure context is not null
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }
    const { setToken } = authContext;

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            console.log(email, password);
            const response = await axios.post("http://localhost:5001/api/users/login", {
                email: email,
                password: password,
            });
            if (response.status === 200) {
                console.log("response success");
                setToken(response.data.accessToken);
                navigate('/');
            }
        } catch (error) {
            setError("Login failed. Please try again.");
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "white",
                padding: 2,
            }}
        >
            <Box
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: "white",
                    width: "400px", // Задаем фиксированную ширину формы
                    maxWidth: "90%", // Ограничиваем ширину на мобильных устройствах
                    height: "300px", // Увеличиваем высоту формы
                }}
                onSubmit={handleLogin}
                noValidate
                autoComplete="off"
            >
                <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
                    Login
                </Typography>
                <TextField
                    sx={{ m: 1 }}
                    id="email"
                    type="email"
                    label="Enter your email..."
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    sx={{ m: 1 }}
                    id="password"
                    type="password"
                    label="Enter your password..."
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                    <Typography color="error" sx={{ m: 1 }}>
                        {error}
                    </Typography>
                )}
                <Button type="submit" variant="contained" sx={{ width: "100px" ,marginTop: 5, marginLeft: 1}}>
                    Login
                </Button>
            </Box>
        </Box>
    );
};

export default Login;