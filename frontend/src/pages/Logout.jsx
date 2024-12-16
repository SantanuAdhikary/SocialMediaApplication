import React, { useEffect } from 'react'
import { useAuth } from '../context/auth'
import { Navigate } from 'react-router-dom';

const Logout = () => {

    const {logout} = useAuth();

  useEffect(()=>{

    logout()
  },[logout])

  return (
    <Navigate to="/login"/>
  )
}

export default Logout