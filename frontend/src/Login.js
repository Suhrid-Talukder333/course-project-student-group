import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Component/c.css";
import Logo from "../../frontend/src/assets/logo.png";

function Login() {
  return (
    <div className="All">
      <div className="body" style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
        <img alt="Nstu" src={Logo} width="500px" height={"500px"}/>
        <div className="text">
          Computer Science And <br /> Telecommunication <br /> Engineering.
        </div>

        <div className="log">
          <Link className="button" to="/varif">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
