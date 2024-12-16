import React from 'react';
import { Link } from 'react-router-dom';
import './error.css'

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-heading">404</h1>
      <p className="error-message">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="error-link">Go to Home</Link>
    </div>
  );
};

export default Error;
