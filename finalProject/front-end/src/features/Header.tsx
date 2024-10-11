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

    const logout = async () => {
        
        try {
            const response = await axios.delete("http://localhost:5001/api/users/logout")
            if(response.status === 200){
                console.log("Logged out successfully", token); // Здесь вы можете увидеть токен перед его очисткой
                setToken(null); // Clear the token in the AuthContext
            }
        } catch (error) {
            console.log("Error during logout", error)
        }
    }

    return (
        <>  
            <Stack spacing={2} direction={"row"}>
                <Button component={Link} to="/">Dashboard</Button>
                <Button component={Link} to="/login">Login</Button>
                <Button component={Link} to="/register">Register</Button>
                <Button component={Link} to="/admin">Admin</Button>
                <Button onClick={logout}>Log out</Button>
            </Stack>
        </>
    );
}

export default Header;