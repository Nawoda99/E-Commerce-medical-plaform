import React from "react";
import "./Header.css";
import logo from "../Assests/logo.png"

const Header = () => {
  return (
    <div className="box">
      <header className="header">
      <div className="overlap-group">
        <div className="rectangle"/>
        <div className="ellipse" />
          <img className="img" alt="logo" src={logo} />
          <p className="med">MED</p>
          
          <p className="pick">PICK</p>
          <h1 className="med-pick">MEDPICK</h1>
          
          
        </div>
       
      
      </header>
      
    </div>
  );
};

export default Header;
