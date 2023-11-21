

import TextInput from "../../Component/TextInputs";
import ButtonCustom from "../../Component/ButtonCustom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";
import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import Heading from "../../Component/Heading";

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
      <p style={header} >
        <span style={text}>We are&nbsp;&nbsp;</span>
        <span style={head}>MEDPICK</span>
      </p>
     
      <div className="login" style={divStyle}>
        <form onSubmit={submit} style={{ textAlign: "center" }}>
        <Heading text="Welcome Back,Please login" />

          <TextInput
            type="text"
            placeholder="Username"
            height="30px"
            width="200px"
            required
            onChange={handleEmailChange}
          />
          <br />
          <TextInput
            type="password"
            placeholder="Password"
            height="30px"
            width="200px"
            required
            onChange={handlePasswordChange}
          />
          <br />

          <ButtonCustom
            label="Login"
            height="52px"
            width="150px"
            type="submit"
          />
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Login;

const divStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  left: "100px",
  alignItems: "left",
  flexShrink: "0",
  height: "523px",
  width: "534px",
  borderRadius: "20px",
  boxShadow: "4px 4px 12px 0px rgba(0,0,0,0.15)",
  background: "var(--White, #F5F5F5)",
 
};

const outer = {
  // display: "flex",
  width: "100%",
  padding: "21px 0px 0px 200px",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "left",
  gap: "26px",
  background: "#ffff",
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
  fontSize: "60px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "normal",
};

const head = {
  color: "#009449",
  fontFamily: "TharLon-Regular, Helvetica",
  fontSize: "60px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "normal",
  textDecoration: "underline",
};
 
 

 
