import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'

import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Error from './component/Error'
import Logout from './pages/Logout'



const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Navbar/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='*' element={<Error/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App