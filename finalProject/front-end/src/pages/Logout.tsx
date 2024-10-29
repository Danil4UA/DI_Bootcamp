import { useState, useContext } from "react";
import { AuthContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Logout = (): JSX.Element => {
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
        <div>
             <button 
                onClick={handleLogout} 
                disabled={loading} 
                className="logout-button"
                style={{ cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.5 : 1 }}
            >
                log out
            </button>
        </div>
           
    );
};

export default Logout
