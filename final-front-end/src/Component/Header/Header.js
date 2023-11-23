import React from "react";
import logo from "../Assests/logo.png"
import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div style={box}>
      <Box
        display="flex"
        backgroundColor="#FFFFFF"
        borderRadius="30px"
        alignItems="center"
        width={600}
        left={500} 
        style={{ position: 'absolute', top: 135, zIndex: 1, left: 900 }}
        ><InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <header className="header">
      
      <div className="overlap-group">
        <div style={rec}/>
        <div style={elli} />
          <img style={img} alt="logo" src={logo} />
          <h1 style={head}>MEDPICK</h1>
          
          
        </div>
       
      
      </header>
      
    </div>
  );
};

const box = {
  display: "flex",
  height: "200px",
  width: "1300px"
}
const rec = {
    display: "flex",
    background: "linear-gradient(90deg,rgb(1, 13, 128) 10%,rgb(0, 100, 154) 20.62%,rgb(0, 127, 138) 30.73%,rgb(0, 168, 88) 46.35%,rgb(0, 150, 74) 62.5%,rgb(2, 120, 57) 78.12%,rgb(0, 79.64, 35.89) 94.27%)",
    height: "200px",
    left: "91px",
    position: "absolute",
    top: "36px",
    width: "2185px"
  }
const elli = {
  background:" #ffffff",
  borderRadius: "153px/158px",
  height: "280px",
  left: "0",
  position: "absolute",
  top: "0",
  width: "306px"
}

const img = {
  height: "200px",
  left: "91px",
  objectFit: "cover",
  position: "absolute",
  top: "41px",
  width: "205px"
}
const head = {
  color: '#ffffff',
  fontFamily: 'Helvetica',
  top: '80px',
  fontSize: '64px',
  fontWeight: 400,
  left: '112px',
  letterSpacing: '9.6px',
  lineHeight: 'normal',
  position: 'absolute',
  textAlign: 'center',
  width: '783px',
};

export default Header;
