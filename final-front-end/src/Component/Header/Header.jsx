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
          <div search>
          <img className="searchicon" alt="searchicon" src="https://img.icons8.com/ios/50/000000/search--v1.png"/>
            <input type="text" className="searchbar" placeholder="Search for Medicines and Health Products " />
            	
            </div>
          <img className="img" alt="logo" src={logo} />
          <div className="med">MED</div>
          <div className="pick">PICK</div>
          <div className="med-pick">MEDPICK</div>
          
        </div>
        <div className="search">
      <div className="sch" />
    </div>
        
      </header>
      
    </div>
  );
};

export default Header;
