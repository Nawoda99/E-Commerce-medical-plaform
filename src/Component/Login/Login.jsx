import React from "react";
import "./Login.css";

import logo from "../Assests/logo.png"

const Login = () => {
  return (
    <div className="container">
      <div className="header">
      <header className="header-bar">
        
      
      <div className="logo">
         <img className="log" src={logo} alt="logo" />
         <h1 >Medipick</h1>
        </div>
        

      </header>
      </div>
      <div className="form">
        <label className="we">We are </label>
        <label className="medipick">Medipick</label>
        <div className="input">
          <input type="text" id="email" placeholder="Email" />
        </div>
        <div className="input">
          <input type="text" id="password" placeholder="Password" />
          </div> 
          <div className="submit_container"> 
         <button className="submit">Login</button>
          <button className="submit">Register</button>
         </div>
          
        

        
        
       </div>
      
    </div>
  );
};

export default Login;