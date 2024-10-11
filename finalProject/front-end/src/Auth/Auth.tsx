import { useContext, useEffect, useState } from "react";
import { AuthContext } from  "../App"
import axios from "axios";
import Login from "../features/Login"

interface AuthProps {
    children: JSX.Element;
  }
  

const Auth = ({children}: AuthProps) => {
    const [redirect, setRedirect] = useState(false)

    const authContext = useContext(AuthContext)
    if (!authContext) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }
    const { token, setToken } = authContext;

    useEffect(() => {
        const verify = async () => {
            if (!token) {
                setRedirect(false);
                return;
            }
            try {
                console.log("Making request with token:", token);
                const response = await axios.get("http://localhost:5001/api/users/auth", {
                    withCredentials: true,
                    headers: {
                        "x-access-token": token
                    }
                });
    
                if (response.status === 200) {
                    setToken(response.data.accessToken);
                    setRedirect(true);
                }
            } catch (error) {
                console.log(error);
                setToken(null);
                setRedirect(false);
            }
        };
    
        verify();
    }, [setToken, token]);
    
    

    return redirect ? children : <Login />

}

export default Auth