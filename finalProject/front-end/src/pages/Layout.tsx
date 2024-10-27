import { Outlet, useLocation } from "react-router-dom";
import Aside from "./Aside"; 
import { Box } from "@mui/material";

const componentNames: Record<string, string> = {
    "/login": "Login",
    "/register": "Register",
    "/": "Dashboard",
    "/manage": "Posts",
    "/contact": "Contact Us"
   
};

const Layout = (): JSX.Element => {
    const location = useLocation();
    const hideLayout = location.pathname === "/login" || location.pathname === "/register" 
    const componentName = componentNames[location.pathname] || "Unknown Component";

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            {!hideLayout && <Aside />}
            <Box component="main" sx={{ flexGrow: 1, marginLeft: hideLayout ? "0" : "220px" }}>
                {!hideLayout && (
                    <div style={{ borderBottom: "1px solid grey", padding: "30px", fontSize:"36px" }}>
                        {componentName}
                    </div>
                )}
                <Outlet />
            </Box>
        </Box>
    )
    
}

export default Layout