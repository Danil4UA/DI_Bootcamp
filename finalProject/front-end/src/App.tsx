import './App.css'
import Header from './features/Header'
import Login from './features/Login'
import Register from './features/Register'
import Admin from './features/Admin'
import {Route, Routes} from "react-router-dom"
import Dashboard from './features/Dashboard'
import { createContext, useState, ReactNode } from 'react'
import Auth from './Auth/Auth'


interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null)

function App():ReactNode {
  const [token, setToken] = useState<string | null>(null);

  return (
    <>
      <AuthContext.Provider value={{token, setToken}}>
        <Header />
          <Routes>
            <Route path='/' element={<Auth><Dashboard/></Auth>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/admin' element={<Auth><Admin/></Auth>} />
          </Routes>
      </AuthContext.Provider>
      

    </>
  )
}

export default App
