import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { useAuth } from '../context/auth'

const Navbar = () => {

  const {isLoggedIn} = useAuth();
  return (
    <>

       <header>
          <div className="container">
            <div className="logo">
                <NavLink to="/">Logo</NavLink>
            </div>
          

          <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
                
                {
                  isLoggedIn? 
                 ( <li>
                    <NavLink to="/logout">Logout</NavLink>
                </li> )
                :

                (<>

                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                </>)

                }
                
                
            </ul>
          </nav>
          </div>
       </header>
    </>
  )
}

export default Navbar