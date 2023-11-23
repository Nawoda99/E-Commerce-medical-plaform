import TextInput from "../Component/TextInputs";
import ButtonCustom from "../Component/ButtonCustom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import Header from "../Component/Header/Header";
import Heading from "../Component/Heading";
import Button from "@mui/material/Button";

const Register = () => {
  const [Name, setName] = useState("");
  const [Mobile, setmobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConPassword, setConPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    // Perform login logic here
    if ( Name === "" && Mobile === "" && email === "" && password === "" && ConPassword === "") {
      // Successful login
      
    } else {
      // Failed login
      toast.error("Fill all the fields");
    }
  };

  return (
    <div className="login" style={outer}>
      <div className="Header">
        <Header />
      </div>
      

      <div className="login" style={divStyle}>
        <form onSubmit={submit} style={{ textAlign: "center" }}>
          <Heading text="Welcome to MEDPICK" />

          
          <TextInput
            type="text"
            placeholder="Name"
            height="30px"
            width="300px"
            borderRadius="30px"
            required
            onChange={handleNameChange}
          />
          <br />
          <TextInput
            type="tel"
            placeholder="Moible Number"
            height="30px"
            width="300px"
            required
            onChange={handlePasswordChange}
          />
          <br />
          <TextInput
            type="email"
            placeholder="Email"
            height="30px"
            width="300px"
           
            required
            onChange={handlePasswordChange}
          />
          <br />
          <TextInput
            type="text"
            placeholder="Address"
            height="30px"
            width="300px"
            required
            onChange={handlePasswordChange}
          />
          <br />
          <TextInput
            type="password"
            placeholder="Password"
            height="30px"
            width="300px"
            required
            onChange={handlePasswordChange}
          />
          <br />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            height="30px"
            width="300px"
            required
            onChange={handlePasswordChange}
          />
          <br />


          <Button
            variant="contained"
            style={{
              backgroundColor: "rgba(16, 185, 129, 1)",
              color: "#000000",
              padding: "30px 20px",
              border: "none",
              borderRadius: "15px",
              cursor: "pointer",
              fontSize: "20px",
              height: "50px",
              width: "200px",
              fontFamily: "Montserrat",
            }}
          >
            Register
          </Button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Register;

const divStyle = {
  display: "flex",
  flexDirection: "column",
  left: "100px",
  paddingTop:"50px",
  alignItems: "left",
  flexShrink: "0",
  height: "850px",
  width: "700px",
  borderRadius: "20px",
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
  alignItems: "center"
 
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
