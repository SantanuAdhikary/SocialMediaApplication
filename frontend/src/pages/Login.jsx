import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import {  toast } from 'react-toastify';

const Login = () => {

  const [userData, setUserData] = useState({
  
    email: "",
    password: "",
  });


  const {storeTokenInLs} = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userData);

    try{

      const response = await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
      })
      console.log("Response after login",response)

      if(response.ok)
      {
        const responseData = await response.json();
        alert("login successful")

        storeTokenInLs(responseData.token)

        setUserData({email: "",password: "",});
        // console.log(responseData)

       
      }
      else{
        console.log("error inside response")
      }

    }
    catch(err)
    {
      console.log(err)
    }

  };

  return (
    <div className="register-container">
      <div className="form-section">
        
        <div className="form-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} autoComplete="off">
         
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
           
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="submit-btn">Login</button>
          </form>
        </div>

        <div className="form-image">
          <img src="/images/login.png" alt="User Registration" />
        </div>
      </div>
    </div>
  );
}

export default Login





