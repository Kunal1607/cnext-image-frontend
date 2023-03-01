import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import logo from "../assets/images/logo-blue.svg";
import { useNavigate } from "react-router-dom";
import { CgDanger } from "react-icons/cg";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [alert, setAlert] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .post("https://backend-cms-service.careers360.de/login/", {
        headers: {
          "x-api-key": "xeJJzhaj1mQ-ksTB_nF_iH0z5YdG50yQtwQCzbcHuKA",
        },
        responseType: "json",
        email,
        password,
      })
      .then(() => {
        navigate("/folders");
      })
      .catch(() => {
        return (
          setAlert(
            <div className="imgallery_alert">
              <CgDanger />
              Your Email Id or Password is Incorrect
            </div>
          ),
          navigate("/")
        );
      });
  };

  const login = useGoogleLogin({
    onSuccess: () => navigate("/folders"),
    onError: () => navigate("/"),
  });

  return (
    <div className="login">
      <div className="login_card">
        <img src={logo} alt="logo" />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="email"
            name="email"
            autoComplete="on"
            autoFocus
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            id="password"
            name="password"
            autoComplete="on"
          />
          {alert}
          <button type="submit">Login</button>
        </form>
        <button onClick={() => login()}>Login With Google</button>
      </div>
    </div>
  );
};

export default Login;