import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from  "../App"
import { useContext } from "react";


const Header = (): JSX.Element => {
    const authContext = useContext(AuthContext)
    if (!authContext) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }
    const { token, setToken } = authContext;

    const handleLogout = async () => {
        try {
            await axios.delete("http://localhost:5001/api/users/logout",{
                withCredentials: true,
            });
            setToken(null); // Сбрасываем токен
            console.log("Logged out successfully");
        } catch (error) {
            console.error("Failed to logout:", error);
        }
    };

    return (
        <>  
        {!token? 
            <Stack spacing={2} direction={"row"}>
                    <Button component={Link} to="/login">Login</Button>
                    <Button component={Link} to="/register">Register</Button>
            </Stack> : 
            
            <Stack spacing={2} direction={"row"}>
                    <Button component={Link} to="/">Dashboard</Button>
                    <Button component={Link} to="/manage">Manage</Button>
                    <Button onClick={handleLogout}>Log out</Button>
            </Stack>
        }
        </>
    );
}

export default Header;