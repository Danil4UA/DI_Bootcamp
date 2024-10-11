import './App.css'
import Header from './features/Header'
import Login from './features/Login'
import Register from './features/Register'
import Admin from './features/Admin'
import {Route, Routes} from "react-router-dom"
import Dashboard from './features/Dashboard'

// import { createContext, useState } from 'react'
// import { Dispatch, SetStateAction } from 'react';
// import Auth from './Auth/Auth'

// interface AuthContextProps {
//   token: string | null;
//   setToken: Dispatch<SetStateAction<string | null>>;
// }

// export const AuthContext = createContext<AuthContextProps>({
//   token: null,
//   setToken: () => {}
// });
function App():JSX.Element {
  // const [token, setToken] = useState(null)

  return (
    <>
    {/* <AuthContext.Provider value={{token, setToken}}> */}
      <Header />
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          {/* <Route path='/admin' element={<Auth><Admin/></Auth>} /> */}
          <Route path='/admin' element={<Admin/>} />
        </Routes>
      {/* </AuthContext.Provider> */}
    </>
  )
}

export default App
