// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from  "../App"
// import axios from "axios";
// import Login from "../features/Login"
// import Register from "../features/Register"

// interface AuthProps {
//     children: JSX.Element
// }


// const Auth = ({children}: AuthProps): JSX.Element => {
//     const [redirect, setRedirect] = useState(false)
//     const {token, setToken} = useContext(AuthContext)
//     useEffect(()=>{
//         verify()
//     }, [])
    
//     const verify = async () => {
//         try {
//             const response = await axios.get("http://localhost:5001/api/users/auth", {
//                 withCredentials: true,
//                 headers: {
//                     "x-access-token": token
//                 }
//             })
//             if(response.status === 200){
//                 setToken(response.data.accessToken)
//                 setRedirect(true)
//             }
//         } catch (error) {
//             console.log(error)
//             setToken(null)
//             setRedirect(false)
//         }
//     }
//     return redirect ? children : <Login></Login>
// }

// export default Auth