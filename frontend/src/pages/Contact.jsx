
import React, { useState } from 'react';
import { useAuth } from '../context/auth';

const Contact = () => {
  const [contact, setContact] = useState({ username: '', email: '', message: '' });

    const {user} =  useAuth()

    // console.log("frontend user ", user.email);


    const [userData, setUserData] = useState(true);

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }
  

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      // console.log("response: ", response);
     

      if (response.ok) {
        setContact({ username: '', email: '', message: '' });
        const responseData = await response.json();
        // alert(responseData);
        console.log(responseData);
      } else {
        // Handle API error here
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We are here to assist you. Please fill out the form below to reach us.</p>
      </div>

      <div className="contact-content">
        <div className="contact-image">
          <img src="/images/support.png" alt="Customer Support" />
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={contact.username}
              onChange={handleInput}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contact.email}
              onChange={handleInput}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={contact.message}
              onChange={handleInput}
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.777096817115!2d80.20753312442903!3d13.049855613159075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e9de03452f%3A0x595d793b70b1e8f!2sQSpiders%20Vadapalani!5e0!3m2!1sen!2sin!4v1729068223805!5m2!1sen!2sin" 
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>


      </div>
    </div>
  );
};

export default Contact;
