// import React from 'react'

// import { useState } from "react";


// const Register = () => {
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const handleInput = (e) => {
//     console.log(e);
//     let name = e.target.name;
//     let value = e.target.value;

//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   // handle form on submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(user);
//   };



//   return (
//     <>
//       <section>
//         <main>
//           <div className="section-registration">
//             <div className="container grid grid-two-cols">
//               <div className="registration-image reg-img">
//                 <img
//                   src="/images/register.png"
//                   alt="a nurse with a cute look"
//                   width="400"
//                   height="500"
//                 />
//               </div>
//               {/* our main registration code  */}
//               <div className="registration-form">
//                 <h1 className="main-heading mb-3">registration form</h1>
//                 <br />
//                 <form onSubmit={handleSubmit} autoComplete='off'>
//                   <div>
//                     <label htmlFor="username">username</label>
//                     <input
//                       type="text"
//                       name="username"
//                       value={user.username}
//                       onChange={handleInput}
//                       placeholder="username"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email">email</label>
//                     <input
//                       type="text"
//                       name="email"
//                       value={user.email}
//                       onChange={handleInput}
//                       placeholder="email"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="phone">phone</label>
//                     <input
//                       type="number"
//                       name="phone"
//                       value={user.phone}
//                       onChange={handleInput}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="password">password</label>
//                     <input
//                       type="password"
//                       name="password"
//                       value={user.password}
//                       onChange={handleInput}
//                       placeholder="password"
//                     />
//                   </div>
//                   <br />
//                   <button type="submit" className="btn btn-submit">
//                     Register Now
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// }

// export default Register


import React, { useState } from 'react';

import { useAuth } from '../context/auth';

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
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
    console.log(userData);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
        alert("registration successful");
        setUserData({ username: "", email: "", phone: "", password: "" });
        console.log(responseData);
        storeTokenInLs(responseData.token)
      } else {
        console.log("error inside response ");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="register-container">
      <div className="form-section">
        <div className="form-image">
          <img src="/images/register.png" alt="User Registration" />
        </div>
        <div className="form-box">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={userData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </div>
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
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={userData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
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
            <button type="submit" className="submit-btn">Register Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
