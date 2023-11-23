import TextInput from "../Component/TextInputs";
import ButtonCustom from "../Component/ButtonCustom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import Header from "../Component/Header/Header";
import Heading from "../Component/Heading";
import Button from "@mui/material/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    // Perform login logic here
    if (email === "example@example.com" && password === "password") {
      // Successful login
      toast.success("Login successful!");
    } else {
      // Failed login
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="login" style={outer}>
      <div className="Header">
        <Header />
      </div>
      <p style={header}>
        <span style={text}>We are&nbsp;&nbsp;</span>
        <span style={head}>MEDPICK</span>
      </p>

      <div className="login" style={divStyle}>
      <Heading text="Welcome Back,Please login" />
        <form onSubmit={submit} style={{ textAlign: "center" }}>
          

          <TextInput
            type="text"
            placeholder="Username"
            style={inputStyle}
            height="40px"
            width="350px"
            required
            onChange={handleEmailChange}
          />
          <br />
          <TextInput
            type="password"
            placeholder="Password"
            style={inputStyle}
            height="40px"
            width="350px"
            required
            onChange={handlePasswordChange}
          />
          <br />

          <Button variant="contained" style={buttonStyle}>
            Login
          </Button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Login;

const divStyle = {
  display: "flex",
  flexDirection: "column",
  left: "100px",
  paddingTop:"50px",
  alignItems: "left",
  flexShrink: "0",
  height: "523px",
  width: "534px",
  borderRadius: "20px",
  display: "flex",
  flexWrap: "wrap",
  background: "#efef",
  m: 1,
  boxShadow: "3px 8px 10px 2px rgba(0, 0, 0, 0.15)",
};

const outer = {
  width: "100%",
  padding: "0px 0px 0px 0px",
  flexDirection: "column",
  alignItems: "center",
  color: "#ffffff",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
};

const header = {
  color: "transparent",
  fontFamily: "TharLon-Regular, Helvetica",
  fontSize: "60px",
  top: "200px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "normal",
};

const text = {
  color: "#521313",
  fontFamily: "TharLon-Regular, Helvetica",
  fontSize: "35px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "normal",
};

const head = {
  color: "#009449",
  fontFamily: "TharLon-Regular, Helvetica",
  fontSize: "35px",
  fontWeight: 40,
  letterSpacing: 2,
  lineHeight: "normal",
  textDecoration: "underline",
  padding: "0px 0px 0px 0px",
};

const inputStyle = {
  height: "40px",
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "30px",
};

const buttonStyle = {
  backgroundColor: "rgba(16, 185, 129, 1)",
  color: "#000000",
  padding: "10px 20px",
  border: "none",
  borderRadius: "15px",
  cursor: "pointer",
  fontSize: "20px",
  height: "50px",
  width: "200px",
  fontFamily: "Montserrat",
};
