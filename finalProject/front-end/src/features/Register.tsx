import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = (): JSX.Element => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

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
                onSubmit={handleRegister}
                noValidate
                autoComplete="off"
            >
                <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
                    Register
                </Typography>
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
                <Button type="submit" variant="contained" sx={{ width: "100px", marginTop: 5, marginLeft: 1 }}>
                    Register
                </Button>
            </Box>
        </Box>
    );
};

export default Register;