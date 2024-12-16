import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/auth.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(

  <AuthProvider>
  
  <StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>
  </AuthProvider>
)
