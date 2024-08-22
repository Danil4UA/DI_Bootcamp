import './App.css'
import Home from './Components/Home'
import Shop from './Components/Shop'
import Phone from './Components/Phone'
import Product from './Components/Product'
import Nav from './Components/Nav'

import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home title="/ Dashboard"></Home>}></Route>
      <Route path='/home' element={<Home title="/home Dashboard"></Home>}/>
      <Route path='/shop' element={<Shop></Shop>}/>

      <Route path='/phone' 
        element={
          <>
            <Phone></Phone>
            <Shop></Shop>
          </>
        }/>
        <Route path='/product/:id' element={<Product></Product>}></Route>
    </Routes>

    </>
  )
}

export default App
