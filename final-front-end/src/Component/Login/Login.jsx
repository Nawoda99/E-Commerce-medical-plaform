import React from "react";

import Header from "../Header/Header";

import "./Login.css";

const Login = () => {
  return (
    
    <div className="header">
      <Header />
      <div className="lginform">
      <div className="label">
      <p className="we-are-MEDPICK">
        <span className="we">We are&nbsp;&nbsp;</span>
        <span className="span">MEDPICK</span>
      </p>
      <div className="welcomelabel">
      <div className="welcome">Welcome Back,Please login</div>
    </div>
    </div>
        <div className="login-form">
          <div className="rememberme">Remember me</div>
          <input type="checkbox" className="checkbox" />

          <div className="forgot-password">Forgot Password?</div>
           
          <input type="email" className="email" placeholder="E-mail"/>
          <input type="password" className="pass" placeholder="Password"/>
        </div>
        <div className="overlap-group">
          <button className="btnlog">Login</button>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
