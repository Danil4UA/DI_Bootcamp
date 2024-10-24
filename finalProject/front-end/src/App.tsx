import "./assets/styles/App.css"
import Header from './pages/Header'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import ManageAccount from './features/posts/components/PostList/ManageAccount'
import {Route, Routes} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import { createContext, useState, ReactNode } from 'react'
import Auth from './Auth/Auth'
import PostEditor from './features/posts/components/PostEditor/PostEditor'
import About from './pages/About'
import Contact from './pages/Contact'


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
            <Route path='/about' element={<Auth><About/></Auth>} />
            <Route path='/contact' element={<Auth><Contact/></Auth>} />
            <Route path='/manage' element={<Auth><ManageAccount/></Auth>} />
            <Route path="/edit-post/:postId" element={<Auth><PostEditor /></Auth>}/>
          </Routes>
      </AuthContext.Provider>
      

    </>
  )
}

export default App
