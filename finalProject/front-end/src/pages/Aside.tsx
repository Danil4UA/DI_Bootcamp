import { Link } from "react-router-dom";
import { Box, Button, Snackbar } from "@mui/material";
import { AuthContext } from "../App";
import { useContext, useState,} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Home, PostAdd, ContactMail, ExitToApp } from '@mui/icons-material';


const Aside = (): JSX.Element => {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }
    const { setToken } = authContext;

    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const handleLogout = async () => {
        setLoading(true);
        try {
            await axios.get("http://localhost:5001/api/users/logout", {
                withCredentials: true,
            });
            localStorage.removeItem("token");
            navigate("/login")
            setToken(null); // Сбрасываем токен
            console.log("Logged out successfully");
            setSnackbarMessage("Logged out successfully");
        } catch (error) {
            console.error("Failed to logout:", error);
            setSnackbarMessage("Failed to logout");
        } finally {
            setLoading(false);
            setSnackbarOpen(true);
        }
    };

    return (
        <Box className="side-bar">
            <div className="logo"></div>
            <Box className="pages">
                <Button 
                    component={Link} 
                    to="/" 
                    color="inherit" 
                    className="page-button"
                >
                    <Home sx={{ marginRight: "8px" }} /> Dashboard
                </Button>
                <Button 
                    component={Link} 
                    to="/manage" 
                    color="inherit" 
                    className="page-button"
                >
                    <PostAdd sx={{ marginRight: "8px" }} /> Posts
                </Button>
                <Button 
                    component={Link} 
                    to="/contact" 
                    color="inherit" 
                    className="page-button"
                >
                    <ContactMail sx={{ marginRight: "8px" }} /> Contact us
                </Button>
                <Button 
                    onClick={handleLogout} 
                    disabled={loading} 
                    color="inherit" 
                    className="page-button"
                >
                    <ExitToApp sx={{ marginRight: "8px" }} /> Log out
                </Button>
            </Box>
            <Box className="profile">
                Username
            </Box>
            
        </Box>

    );
};

export default Aside;