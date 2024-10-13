import './App.css'
import Header from './features/Header'
import Login from './features/Login'
import Register from './features/Register'
import ManageAccount from './features/ManageAccount'
import {Route, Routes} from "react-router-dom"
import Dashboard from './features/Dashboard'
import { createContext, useState, ReactNode } from 'react'
import Auth from './Auth/Auth'
import PostEditor from './features/posts/PostEditor'


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
            <Route path='/manage' element={<Auth><ManageAccount/></Auth>} />
            <Route path="/edit-post/:postId" element={<Auth><PostEditor /></Auth>}/>
          </Routes>
      </AuthContext.Provider>
      

    </>
  )
}

export default App
