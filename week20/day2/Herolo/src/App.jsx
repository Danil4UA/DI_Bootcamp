
import './App.css'
import {Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Favorites from './components/Favorites'


function App() {

  return (
<>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
</>
     

  )
}

export default App
